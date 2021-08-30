import React from "react";

const Counter = (props) => {
  const formValue = () => {
    return props.value === 0 ? "Ноль" : props.value;
  };
  const getBageClasses = () => {
    let classec = "badge m-2 bg-";
    classec += props.value === 0 ? "danger" : "primary";
    return classec;
  };

  return (
    <>
      <h4>{props.name}</h4>
      <span className={getBageClasses()}>{formValue()}</span>
      <button
        onClick={() => props.onIncrement(props.id)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDecrement(props.id)}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </>
  );
};

export default Counter;
