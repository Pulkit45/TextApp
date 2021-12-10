import React,{useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to uppercase','success')
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lowercase','success')
    }
    const handleTitleClick=()=>{
        var newText=text.toLowerCase().split(" ").map((elem)=>{
            return elem[0].toUpperCase() + elem.slice(1)
        })
        setText(newText.join(" "))
        props.showAlert('Title case','success')
        
    }
    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces cleared','success')
    }

    const handleClearClick=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Clear text","success")
       
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    // text="new text"; wrong way to change the value of text
    // setText="new text"; right way

    return (
        <>
        <div className="container" style={{color:props.mode === 'dark' ?'white':'#042743'}}>
            
      <h1 className="mb-4">{props.heading} </h1>
     <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ?'#13466e':'white',color:props.mode === 'dark' ?'white':'#042743'}} id="myBox" rows="8"></textarea>
     </div>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upercase</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTitleClick}>Title Case</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleCopy}>Copy Text</button>
     <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
        </div>
        <div className="conatiner my-3" style={{color:props.mode === 'dark' ?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>

        </div>
        </>
    )
}
