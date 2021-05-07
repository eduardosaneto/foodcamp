import Options from './Options';
import foodData from '../foodData';

export default function Foods(props) {

    const {allFoods, setAllFoods} = props;
   
    const foodMenuData = foodData();

    const foodOptions = foodMenuData.map((item) => (
            <Options 
                option = {item.option}
                imageURL = {item.imageURL}
                imageAlt = {item.imageAlt}
                name = {item.name}
                description = {item.description}
                price = {item.price}
                quantity = {item.quantity}
                order = {allFoods}
                setOrder = {setAllFoods}
            />   
        )
    );

    return (
        <div className="foods">
            <span><h1>Primeiro, seu prato</h1></span>
            <ul>
                {foodOptions}
            </ul>
        </div>
    );
}



