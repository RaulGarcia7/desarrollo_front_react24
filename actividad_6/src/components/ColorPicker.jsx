import { useState } from "react";

function ColorPicker ( {onColorChange}  ) {

    const [color, setColor] = useState("white")

    const handleChange = (e) => {
        setColor(e.target.value);
        onColorChange(e.target.value);
    };

    return(
        <>
        <h2>Selector de color</h2>
        <select value={color} onChange={handleChange}>
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
        </select>
        </>
    );
}

export default ColorPicker;