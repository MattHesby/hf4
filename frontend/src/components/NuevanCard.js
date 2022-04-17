import React from 'react';
import { Link } from 'react-router-dom';


function NuevanCard (props) {
    const nuevanInfo  = props.nuevanInfo;
    return(
        <div>
            <div>
                <h2>
                  {/* Link will go to specified URL*/}
                  {/* Note ` ` quotes to be able to use nuevan info*/}
                  <Link to={`/show/${nuevanInfo.email}`} replace>
                      { nuevanInfo.name }
                  </Link>
                </h2>
                <h3>{nuevanInfo.email}</h3>
                <p>{nuevanInfo.role}</p>
                <p>{nuevanInfo.grade}</p>
            </div>
        </div>
    )
};

export default NuevanCard;
