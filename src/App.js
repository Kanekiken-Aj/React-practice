
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';



function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils?"/>
      {/* <Navbar/> */}
        <div className='container my-3'>
          {/* <TextForm heading="Enter the text to analyze"/> */}
          <About/>

        </div>
    </>
    
  );
}

export default App;
//function based component is mostly used and class based components.
// Babel compiles JSX down to React.createElement()calls

