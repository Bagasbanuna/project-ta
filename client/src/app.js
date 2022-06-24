// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import { Link, Outlet } from 'react-router-dom';
// import { LandingPage } from './login/landingpage';
// import { HalamanAbout } from './halaman_about';

import {useNavigate} from 'react-router-dom'
import { TampilanHome } from './frontend/home';

function cek(navigate){
  console.log("cek login")
  if(localStorage.getItem('user') == null){
    navigate('/landing');
  }else{
    navigate('/halamanprofile')
  }
}

function App() {
  let navigate = useNavigate();
  
  return (
    <div className='container'>
      
     <TampilanHome />
    </div>
  );
}


export { App };