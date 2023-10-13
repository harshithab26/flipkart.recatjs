// import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar.js'
import Menu from './components/Menu.js'
import  Banner from './components/Banner.js';
import Cards from './components/Cards.js';
import './components/bootstrap.css';
import Form from './components/Form.js';
import Cards2 from './components/Cards2.js';

function App() {
  return (
   <>
   <div className='container-fluid'>
        <div className='row'>
                <Searchbar/>
                <Menu/>
                <Banner/>
                <Cards/>
                <Form/>
                <div> <Cards2/></div>
               
        </div>
   </div>
   </>
  );
}

export default App;