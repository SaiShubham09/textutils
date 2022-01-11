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
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }

    const [text,setText] = useState('')
    // text = "New Text" ;//Cannot set directly, use settext func
    // setText("New Text");//Correct Method
    let noOfwords = text.split(" ").length - (text.slice(-1) === " " || text.length === 0);
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#11093b'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#11093b'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleReverseWordsClick}>Reverse words in text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to clipboard</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-5" style={{color: props.mode==='dark'?'white':'#11093b'}}>
            <h2>Text Statistics  </h2>
            <p><strong>Words :</strong> {noOfwords} </p>
            <p><strong>Characters :</strong> {text.length} </p>
            <p><strong>Average Reading Time :</strong> {0.008*noOfwords} mins </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text above to preview here"}</p>
        </div>
        </>
    )
}
