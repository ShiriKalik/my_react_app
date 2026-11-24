import React from "react";

const Events_Handlers = () => {
  function handleChange(event) {
    console.log("typing...");
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert("הטופס נשלח בהצלחה");
  }
  return (
    <div>
      <h1>טופס פרטים אישיים</h1>

      <form onSubmit={handleSubmit}>
        <label>שם מלא:</label>
        <input type="text" onChange={handleChange} />
        <br />
        <label>אימייל:</label>
        <input type="email" onChange={handleChange} />
        <br />
        <button type="submit">שליחה</button>
      </form>
    </div>
  );
};

export default Events_Handlers;
