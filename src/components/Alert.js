import React from "react";

function Alert(props) {
    const cap=(word)=>{
        const lower= word.toLowerCase();
        return lower[0].toUpperCase()+lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <b>{cap(props.alert.type)}</b>: {props.alert.msg}
    </div>
  );
}

export default Alert;
