import { useState } from "react";

function LikeButton() {
    const [countLikes, setCountLikes] = useState(50);
    const [isLiked, setisLiked] = useState(false);
    const [colorLike, setColorLike] = useState();

    const handleLikeClick= () => {
        if (!isLiked) {
            setCountLikes((prevCountLikes) => prevCountLikes + 1);
            setColorLike("red");
        } else {
            setCountLikes(50);
            setColorLike("grey")
        }
        setisLiked(!isLiked);
    };

    const buttonStyle = {
        backgroundColor: colorLike,
        padding: "5px",
        cursor: "pointer"
    };

    return(
        <>
        <p>{countLikes} likes</p>
        <button onClick={handleLikeClick} style={buttonStyle}>
            ♡
        </button>
        </>
    );

}

export default LikeButton;