
import React, { useState } from 'react';



function TextUtils() {

    const [text, setText] = useState('')


    const handleUpperCase = () => {
        console.log("Click")
        const newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerCase = () => {
        console.log("Click")
        const newText = text.toLowerCase();
        setText(newText)
    }

    const handleUpChange = (event) => {
        console.log("Change")
        setText(event.target.value)
    }

    const handleExtraSpace = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(' '))
    }

    const handleCopyText = () => {
        var text = document.getElementById("ya")
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleClearText = () => {
        const newText = ("");
        setText(newText)
    }

    return (
        <>
            <div style={{ marginLeft: '12rem', marginTop: '3rem' }} >
                <h4 style={{color:'red'}}>Type the text below which you want to utilise :-</h4>
                <textarea id='ya' type='text' value={text} placeholder='Enter the text here' style={{ height: '15rem', width: '60rem' }} onChange={handleUpChange} />
                <div style={{ marginLeft: '13rem' }}>
                    <button className='btn btn-primary mt-3' onClick={handleUpperCase} >UpperCase</button> <button className='btn btn-primary mt-3' onClick={handleLowerCase} >LowerCase </button>
                    <button className='btn btn-primary mt-3 mx-1' onClick={handleExtraSpace} >HandleExtraSpace </button>
                    <button className='btn btn-primary mt-3 ' onClick={handleCopyText} >CopyText </button>
                    <button className='btn btn-primary mt-3 mx-1' onClick={handleClearText} >ClearText </button>
                </div>
            </div>


            <div className='container' style={{ marginLeft: '11rem' }}>
                <h3 style={{color:'red'}}>Text summery</h3>
                <p >words are {(text.split(" ").length) -1} and characters are {text.length}</p>
                <h3 style={{color:'red'}}>Time takes to read</h3>
                <p> {(0.008*text.split("").length) } Minutes </p>
                <h3 style={{color:'red'}}>Text preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
};

export default TextUtils