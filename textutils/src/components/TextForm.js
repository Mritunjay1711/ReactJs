import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick=()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        //to allow the user to write in box
        setText(event.target.value);
    }
    const handleHeadClick=()=>{
        let sent = text.split(" ");
        let ans = "";
        let n = sent.length;
        for(let i = 0; i < n - 1; i++)
        {
            ans = ans + sent[i][0].toUpperCase() + sent[i].substring(1).toLowerCase() + " ";
        }
        ans = ans + sent[n-1][0].toUpperCase() + sent[n-1].substring(1).toLowerCase();
        setText(ans);
    }
    const handleSentClick=()=>{
        let sent = text.split(". ");
        let ans = "";
        let n = sent.length;
        for(let i = 0; i < n - 1; i++)
        {
            ans = ans + sent[i][0].toUpperCase() + sent[i].substring(1).toLowerCase() + ". ";
        }
        ans = ans + sent[n-1][0].toUpperCase() + sent[n-1].substring(1).toLowerCase();
        setText(ans);
    }
    const[text, setText] = useState('');
    // text = new text; //wrong way
    // setText("new text"); //correct way
    return (
        <>
        <div className='container'>
            <div className="mb-3">

                <h1>{props.heading}</h1>
                <hr />
                <textarea className="form-control" aria-label="With textarea" id="myBox" rows="8" value={text}onChange={handleOnChange}></textarea>
            </div>
            <div className='mb-3'>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleHeadClick}>Convert to HeadingCase</button>
            <button className='btn btn-primary mx-1' onClick={handleSentClick}>Convert to SentenceCase</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>
                {0.008 * text.split(" ").length} minutes to read
            </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
