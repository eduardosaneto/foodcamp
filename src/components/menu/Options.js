import React from 'react';

export default function Options(props) {

    const [isSelected, setIsSelected] = React.useState(false);
    const [count, setCount] = React.useState(1);
    const {option, imageURL, imageAlt, name, description, price} = props;
    const {order, setOrder} = props;

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

    // function chosenOption() {
    //     isSelected ? setIsSelected(false) : setIsSelected(true);
    //     if(isSelected){
    //         unselectItem();
    //         removefromOrder();
    //     } else {
    //         addToOrder();
    //     }
    // }

    function unselectItem() {
        setIsSelected(false);
        setCount(1);
    }

    function chosenOption() {
        if(!isSelected && (count - 1) === 0){
            setIsSelected(true);
            addToOrder();
        } else if(isSelected && (count - 1) === 0){
            removefromOrder();
        }    
      }

    function optionQuantity(e, operator) {

        let control = false;

        e.stopPropagation();

        if(operator === "-") {
            count <= 1 ? unselectItem() : setCount(count - 1);
        } else {
            setCount(count + 1);
            control = true;
        }

        updatedOrder(control);
    }

    function updatedOrder(control){

        const updatedChosenOption = order.map((item) => {
            if(item.name === name){
                return {
                    name: name,
                    price: price,
                    quantity: control ? count + 1 : count -1
                };
            } else {
                return item;
            } 
        });

        setOrder(updatedChosenOption);  
    }

    function addToOrder(){
        const selectedOption = {
            name: name,
            price: price,
            quantity: count
        };

        const updatedOrder = [...order, selectedOption];
        setOrder(updatedOrder);       
    }

    function removefromOrder() {
        const updatedOrder = order.filter((item) => item.name !== name);
        setOrder(updatedOrder);
    }

}

