import { useState} from "react";

function Bai1() {
    var [text, setText] = useState("default");
    function handleClick() {
        setText(text);
    }
    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <>
            <input onChange={handleChange} type="text" />
            <br />
            <button onClick={handleClick} className="">Click</button>
            <br />
            <span>{text}</span>
        </>
    );
}

export default Bai1;
