import React from 'react';

export default function Options(props) {

    const [isSelected, setIsSelected] = React.useState(false);
    const [count, setCount] = React.useState(1);
    const [quantity, setQuantity] = React.useState(0);

    const {option, imageURL, imageAlt, name, description, price} = props;

    return (
        <li className={`${option} ${isSelected ? "selected" : ""}`} onClick={chosenOption}>
            <img src={imageURL} alt={imageAlt}/>
            <h1 className="name">{name}</h1>
            <p className="description">{description}</p>
            <div className="price">
                <p>R${price}</p>
                <div className="quantity">
                    <p className="delete" onClick={(e) => optionQuantity(e, "-")}>-</p>
                    <p>{count}</p>
                    <p className="add" onClick={(e) => optionQuantity(e, "+")}>+</p>
                </div>    
            </div>
        </li>
    );

    function chosenOption() {
        console.log("estou funcionando");
        if(!isSelected && quantity === 0){
            setIsSelected(true);
        }     
      }

    function optionQuantity(e, operator) {
        e.stopPropagation();
        if(operator === "-") {
            count <= 1 ? unselectItem() : setCount(count - 1);
        } else if (operator === "+") {
            setCount(count + 1);
        }
    }

    function unselectItem() {
        setIsSelected(false);
        setCount(1);
    }
}
