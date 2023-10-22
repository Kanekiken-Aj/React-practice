import React,{useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "success");

    
  }
  const handleLowClick = ()=>{
    // console.log("UpperCase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case", "success");

  }

  const handleSpecialClick = ()=>{
    let newText = text.replace(/[^a-zA-Z0-9\s]/g, "");
    setText(newText)
    props.showAlert("Special characters removed", "success");
  }

  const handleExtraClick = ()=>{
    let newText = text.replace(/\s+/g, ' ');
    setText(newText)
    props.showAlert("Extra Spaces removed", "success");
  }

  const handleCopy = ()=>{
    let newText = text;
    setText(newText)
    props.showAlert("Copied", "success");
  }

  const handleClearClick = ()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Text box is Cleared", "success");

  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const[text , setText] = useState('');
  // text = "new Text";//Wrong way to change the state
  // setText("New Text");// Correct way to change the state

  return (
    <>
      <div className='Container' style={{color:props.mode ==='dark'?'white':'black'}}>
        <h2>{props.heading} </h2>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">Example textarea</label> */}
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'black':'white', color:props.mode ==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpecialClick}>Remove Special Characters</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraClick}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        
      </div>
      <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  )
}
