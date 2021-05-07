import Options from './Options';
import drinkData from '../drinkData';

export default function Drinks(props) {

    const {allDrinks, setAllDrinks} = props;

    const drinkMenuData = drinkData();

    const drinkOptions = drinkMenuData.map((item) => (
        <Options 
            option = {item.option}
            imageURL = {item.imageURL}
            imageAlt = {item.imageAlt}
            name = {item.name}
            description = {item.description}
            price = {item.price}
            quantity = {item.quantity}
            order = {allDrinks}
            setOrder = {setAllDrinks}
        />   
    )
);


    return (
        <div className="drinks">
            <span><h1>Agora, sua bebida</h1></span>
            <ul>
                {drinkOptions}
            </ul>
        </div>
    );
}