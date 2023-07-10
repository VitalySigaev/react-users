import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper__content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs state={props.state.messagesPage} />} />
            <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
