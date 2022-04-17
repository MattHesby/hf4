import React, { Component } from 'react';
import axios from 'axios';
import { Outlet, Link } from 'react-router-dom';
// import MainPage from './MainPage';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    axios
      //TODO: fill in the GET call below with the appropriate URL
      //look at routes
      .get('')
      .then(res => {
        //TODO: Fill this in with the appropriate state information
        //from whatever the response is
        this.setState({

        })
      })
      .catch(err =>{
        console.log('Error from MainPage');
      })
  };


  render() {
    //get our list from our state
    const games = this.state.games;
    let gameList;

    //determine what to render based on if our state is populated
    if(!gameList) {
      gameList = "There are no people in the database yet";
    } else {
      //map our list from our state
      //see NuevanCard for how we are rendering the Card
      // gameList = games.map((game, k) =>
      //   // <GameCard nuevanInfo={game} key={k} />
      // );
    }

    // <Link to="/add-game">
    //   + Add New Game
    // </Link>

    return (
      <div>
          <div>
              <br />
              <h2>Game List</h2>
            <div>

              <br />
              <hr />
            </div>
          </div>
          <div>
                {gameList}
          </div>
          <Outlet />
      </div>
    );
  }
}

export default MainPage;
