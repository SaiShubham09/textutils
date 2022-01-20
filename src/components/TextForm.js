import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("To be converted to Upper Case : " + text);
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert("Converted to UpperCase","success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);

    }

    const handleReverseWordsClick = () => {
        let newText = text.split(' ').reverse().join(' ');
        setText(newText);

    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));

    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
    }

    const [text,setText] = useState('')
    // text = "New Text" ;//Cannot set directly, use settext func
    // setText("New Text");//Correct Method
    // let noOfwords = text.split(/\s+/).length - (text.slice(-1) === " " || text.length === 0);
    let noOfwords = text.split(/\s+/).filter((element)=>{return element.length!==0}).length
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#11093b'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(59 89 107)':'white', color: props.mode==='dark'?'white':'#11093b'}} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReverseWordsClick}>Reverse words in text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy to clipboard</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-5" style={{color: props.mode==='dark'?'white':'#11093b'}}>
            <h2>Text Statistics  </h2>
            <p><strong>Words :</strong> {noOfwords} </p>
            <p><strong>Characters :</strong> {text.length} </p>
            <p><strong>Average Reading Time :</strong> {0.008*noOfwords} mins </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
