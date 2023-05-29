import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = ()=> {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success")
    }

    const handleOnChange = (event)=> {
        console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
      let text = document.getElementById("myarea");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy to clipboard","success")

    }
    
    const handleExtraSpaces = () => {
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("Removed extra spaces","success")
    }

    const[text, setText] = useState("");

  return (
    <>
    <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color : props.mode === 'dark'?'white':'black'
        }} aria-label="With textarea" id="myarea" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2"onClick={handleLoclick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        <h2>Count the no of email</h2>
        <p>{text.split("@gmail.").length} : Number of email</p>
    </div>
    </>
  )
}
