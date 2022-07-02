import React from "react";

const Recipe = ({title, calories, image}) => {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <p>Questo piatto contiene circa:{calories} calorie</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe