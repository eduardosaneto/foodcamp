import Options from './Options';
import dessertData from '../dessertData';

export default function Desserts(props) {

    const {allDesserts, setAllDesserts} = props;

    const dessertMenuData = dessertData();

    const dessertOptions = dessertMenuData.map((item) => (
        <Options 
            imageURL = {item.imageURL}
            imageAlt = {item.imageAlt}
            name = {item.name}
            description = {item.description}
            price = {item.price}
            quantity = {item.quantity}
            order = {allDesserts}
            setOrder = {setAllDesserts}
        />   
    )
);


    return (
        <div className="desserts">
            <span><h1>Por fim, a sobremesa</h1></span>
            <ul>
                {dessertOptions}
            </ul>
        </div>
    );
}