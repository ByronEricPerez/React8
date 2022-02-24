import './App.css';
import Navbar from './components/Navbar';
//import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
          <Routes>

            <Route path="/">
              <div className="App">
                <ItemDetailContainer />

              </div>
            </Route>

            <Route path="/beer">
              <div className="App">
                <ItemDetailContainer />

              </div>
            </Route>

            <Route path="/ron">
              <div className="App">
                <ItemDetailContainer />

              </div>
            </Route>

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
