
import React from "react";

export default function Footer(props) {

    const { allFoods, allDrinks, allDesserts, active} = props
    const activeButton = props.disabled;
    
    return (
        <footer>
            <button disabled={activeButton} className={active} onClick={closeOrder}>
                {activeButton ? "Selecione os 3 itens para fechar o pedido" : "Fechar pedido"} 
            </button>
        </footer>
    );

    function closeOrder() {
        let foods = "";  
        let drinks = "";
        let desserts = "";
        let totalFoodPrice = 0;
        let totalDrinkPrice = 0;
        let totalDessertPrice = 0;
        let totalPrice = 0;  
    
        const newFoodPrice = allFoods.map((item) => (
            (parseFloat(item.price.replace(",",".")))*item.quantity
            )
        ); 
        newFoodPrice.forEach((itemPrice) => {totalFoodPrice += itemPrice})
            
        const newDrinkPrice = allDrinks.map((item) => (
            (parseFloat(item.price.replace(",",".")))*item.quantity
            )
        ); 
        newDrinkPrice.forEach((itemPrice) => {totalDrinkPrice += itemPrice})
    
        const newDessertPrice = allDesserts.map((item) => (
            (parseFloat(item.price.replace(",",".")))*item.quantity
            )
        ); 
        newDessertPrice.forEach((itemPrice) => {totalDessertPrice += itemPrice})
    
        totalPrice = (totalFoodPrice + totalDrinkPrice + totalDessertPrice).toFixed(2); 
    
        allFoods.forEach((item) => {foods += item.name + " (" + item.quantity + "x), "}) 
    
        allDrinks.forEach((item) => {drinks += item.name + " (" + item.quantity + "x), "})
    
        allDesserts.forEach((item) => {desserts += item.name + " (" + item.quantity + "x), "})
    
        window.location.href =
          "https://wa.me/5521999789570/?text=" +
          encodeURIComponent(
            `Olá, gostaria de fazer o pedido: 
            - Prato(s): ${foods} 
            - Bebida(s): ${drinks} 
            - Sobremesa(s): ${desserts} 
            Total: R$ ${totalPrice}`
          );
      }
}