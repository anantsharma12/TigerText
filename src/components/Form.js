import React, { useState } from "react";
let newText2 = "";
export default function Form(props) {
  const handleOnChange = (event) => {
    event.preventDefault();
    console.log("On Change");
    setText(event.target.value);
  };
  const upClick = (e) => {
    e.preventDefault();
    console.log("to UpperCase");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!!", "success")
  };
  const lowClick = (e) => {
    e.preventDefault();
    console.log("to LowerCase");
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!!!", "success")
  };

  const altClick = (e) => {
    e.preventDefault();
    console.log("to AlternateCase!!");
    newText2 = "";

    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newText2 += text[i].toLowerCase();
      } else {
        newText2 += text[i].toUpperCase();
      }
    }
    setText(newText2);
    props.showAlert("Converted to AlternateCase", "success")
  };
  const [text, setText] = useState("");
  //setText("Mar ja Bsdk");

  return (
    <>
      <div>
        <form>
          <div className="mb-3" style= {{color: props.mode==="dark"?"white":"black"}}>
            <h1>
              {props.heading}
            </h1>
            <textarea
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={text}
              placeholder="Enter text here"
              onChange={handleOnChange}
              rows="10"
              style={{backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode==="dark"?"white":"black"}}
            />
          </div>
          <button type="submit" className="btn btn-primary " onClick={upClick}>
            {props.btnText}
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-2"
            onClick={lowClick}
          >
            {props.btnText2}
          </button>
          <button type="submit" className="btn btn-primary" onClick={altClick}>
            {props.btnText3}
          </button>
        </form>
      </div>
      <div className="container my-5" style= {{color: props.mode==="dark"?"white":"black"}}>
        <h2>Apki Bkchodi Ki Jankari</h2>
        <p>
          {text.split(" ")[text.split(" ").length-1]===""?text.split(" ").length-1:text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.05 * text.split(" ").length} minutes to read the Bakchodi</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some Bakchodi to Preview it here."}</p>
      </div>
    </>
  );
}
