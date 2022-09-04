import './App.css';
import Footer from './Components/Footer.js/Footer';
import DrawerAppBar from './DrawerAppBar';
import Router from './Router/Router';

function App() {
  return (
    <div className="">
      <DrawerAppBar />
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
