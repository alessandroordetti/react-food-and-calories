import React from "react";

const Recipe = ({title, calories, image}) => {
    return (
        <div className="recipe">
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>Questo piatto contiene circa:{calories} calorie</p>
        </div>
    )
}

export default Recipe