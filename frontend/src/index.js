import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import AddPlayer from "./components/AddPlayer"
import MainPage from "./components/MainPage"
// import ShowNuevan from "./components/ShowNuevan"
// import UpdateNuevan from "./components/UpdateNuevan"


// <Route path="show" element={<ShowAllNuevans />}  />
// <Route path='show/:email' element={<ShowNuevan />} />
// <Route path="add-nuevan" element={<AddNuevan />} />
// <Route path="update-nuevan" element={<UpdateNuevan />} />

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      // <Route path="/" element= {<App />}>
      <Route path="/" element={<MainPage />}  />
        <Route path="add-player" element={<AddPlayer />} />
      </Route>
      <Route path="*" element={ <p>Uh oh! There's nothing here! </p>} />
    </Routes>
  </BrowserRouter>
);
