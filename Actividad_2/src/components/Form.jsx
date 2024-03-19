import React, { useState } from "react";

function Form() {

  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    description: "",
    gender: "",
    age: "",
    country: "",
    province: "",
    hobbies: {
      games: false,
      football: false,
      basketball: false,
      art: false,
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted: ", formData);
  };

  const handleOnChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? { ...prevData[name], [value]: checked }
          : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <>
        <p>Name:</p>
        <input
          onChange={handleOnChange}
          type="text"
          name="name"
          placeholder="Name"
        />
        <br />
        <p>Firstname:</p>
        <input
          onChange={handleOnChange}
          type="text"
          name="firstname"
          placeholder="Firstname"
        />
        <br />
        <p>Description:</p>
        <textarea
          onChange={handleOnChange}
          name="description"
          placeholder="Description of yourself"
          rows={8}
        ></textarea>
        <br />
        <p>Gender:</p>
        <label>
          <input
            onChange={handleOnChange}
            type="radio"
            name="gender"
            value="Option 1"
          />{" "}
          Male
        </label>
        <label>
          <input
            onChange={handleOnChange}
            type="radio"
            name="gender"
            value="Option 2"
          />{" "}
          Female
        </label>
        <label>
          <input
            onChange={handleOnChange}
            type="radio"
            name="gender"
            value="Option 3"
          />{" "}
          Other
        </label>
        <br />
        <p>Age:</p>
        <input
          onChange={handleOnChange}
          type="number"
          name="age"
          placeholder="Your age"
        />
        <br />
        <p>Country:</p>
        <select onChange={handleOnChange} name="country">
          <option value="">Seleccione un país</option>
          <option value="Spain">Spain</option>
          <option value="USA">USA</option>
        </select>
        <br />
        {formData.country === "Spain" && (
          <>
            <p>Province:</p>
            <input
              onChange={handleOnChange}
              type="text"
              name="province"
              placeholder="Province"
            />
          </>
        )}
        <br />
        <p>Hobbies:</p>
        <label>
          <input
            onChange={handleOnChange}
            type="checkbox"
            name="hobbies"
            value="games"
          />{" "}
          Games
        </label>
        <label>
          <input
            onChange={handleOnChange}
            type="checkbox"
            name="hobbies"
            value="football"
          />{" "}
          Football
        </label>
        <label>
          <input
            onChange={handleOnChange}
            type="checkbox"
            name="hobbies"
            value="basketball"
          />{" "}
          Basketball
        </label>
        <label>
          <input
            onChange={handleOnChange}
            type="checkbox"
            name="hobbies"
            value="art"
          />{" "}
          Art
        </label>
        <br />
        <br />
      </>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
