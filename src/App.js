
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Footer from './components/Footer';





function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }

  

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")
      // document.title ='TextUtils - Dark Mode';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      // document.title ='TextUtils - Light Mode';

    }
  }
  return (
    <>
    <Router>
      {/* <Navbar title="TextUtils" about="About TextUtils?"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className='container my-3'>
          <Routes>
            {/* /users --> Component 1 */}
            {/* /user/homes ---> ---> Component 2 */}

            <Route exact path="/about" element={<About mode={mode}/>}  > 
            </Route>   
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode} />}>
              {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode} /> */}

            </Route> 
          </Routes>
          
        <Footer mode={mode} />
        </div>
        
      </Router>
      
    </>
  );
}

export default App;
//function based component is mostly used and class based components.
// Babel compiles JSX down to React.createElement()calls

