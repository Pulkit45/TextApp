import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
        
    // })
    let myStyle={
      color: props.mode === 'dark' ? 'white':'#042743',
      backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)':'white',
     
    }
    return (
        <div className="conatiner" >
        <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white':'#042743'}}>About Us</h1>
            <div class="accordion" id="accordionExample" style={myStyle}>
      <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze your Text</strong>
      </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextApp gives you a way to analyze your text quickly and efficently.Be it word count,
      character count or
      </div>
     </div>
     </div>
     <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       TextApp is a free character counter tool that provides instant character count & word count statistics
       for a gievn text.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       This word counter software works in any web browser such as crome, safar, firefox, MicrosoftEdge, Opera etc.
      </div>
       </div>
      </div>
     </div>
        </div>
    )
}
