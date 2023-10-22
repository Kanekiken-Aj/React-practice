import React from 'react'

export default function About(props) {


    let myStyle= {
        color: props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'black':'white',
        // border: '2px solid',
        // borderColor: props.mode ==='dark'?'white':'black'

    }

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    
    // })
    // const [btntext , setBtnText]= useState("Enable Dark Mode")

    // const toggleStyle =()=>{
    //     if(myStyle.color==='white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode")
            
            
    //     }
    // }

    // let myStyle = {
    //     color: 'white',
    //     backgroundColor: 'black'
    // }


  return (
    <div className='container' style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne">
            <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. be it word cound,character count or time taken to read.
            </div>
        </div>
        
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ charcaters limit</div>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This word counter software works in any browser such as chrome, firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document,essays, etc.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-1">
            <button type='button' onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
        </div> */}
    </div>
  )
}
