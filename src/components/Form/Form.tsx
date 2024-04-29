import React from "react";

export const Form = () => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" />
      <label htmlFor="email">Email</label>
      <input type="text" />
      <button>Submit</button>
    </div>
  );
};

export default Form;
