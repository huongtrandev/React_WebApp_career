import React, { useState } from "react";
import "./App.css";

const [form, setForm] = useState({});
function handleChange(event) {
  setForm({
    ...form,
    [event.target.name]: event.target.value,
  });
}

function handleSubmit() {
  const isValid = form.username && form.email && form.confirmPassword;
  alert(isValid ? "Sign in success!!" : "Please fill out all the fields!!");
}

return (
  <div>
    <h1>Sign up</h1>
    <form>
      <div className="custom-input">
        <label>Username</label>
      </div>
    </form>
  </div>
);
export default App;
