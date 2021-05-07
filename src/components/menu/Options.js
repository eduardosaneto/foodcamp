export default function Options(props) {

    const {imageURL, imageAlt, name, description, price, quantity} = props;

    return (
        <li className="selected">
            <img src={imageURL} alt={imageAlt}/>
            <h1 className="name">{name}</h1>
            <p className="description">{description}</p>
            <div className="price">
                <p>{price}</p>
                <div className="quantity">
                    <p className="delete">-</p>
                    <p>{quantity}</p>
                    <p className="add">+</p>
                </div>    
            </div>
        </li>
    );
}