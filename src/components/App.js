import Header from './Header';
import Options from './menu/Options';
import Footer from './Footer';
import Review from './review/Review';
import ConfirmCancel from './review/ConfirmCancel';
import reviewData from './reviewData';
import foodData from './foodData';
import drinkData from './drinkData';
import dessertData from './dessertData';

export default function App() {

    const orderReviewData = reviewData();
    const foodMenuData = foodData();
    const drinkMenuData = drinkData();
    const dessertMenuData = dessertData();

    const newData = orderReviewData.map((item) => (
        <Review 
            reviewStep = {item.step}
            reviewStepName = {item.stepName}
            reviewPrice = {item.stepPrice}
        />
    ));

    const foodOptions = foodMenuData.map((item) => (
            <Options 
                imageURL = {item.imageURL}
                imageAlt = {item.imageAlt}
                name = {item.name}
                description = {item.description}
                price = {item.price}
                quantity = {item.quantity}
            />   
        )
    );

    const drinkOptions = drinkMenuData.map((item) => (
            <Options 
                imageURL = {item.imageURL}
                imageAlt = {item.imageAlt}
                name = {item.name}
                description = {item.description}
                price = {item.price}
                quantity = {item.quantity}
            />   
        )
    );

    const dessertOptions = dessertMenuData.map((item) => (
            <Options 
                imageURL = {item.imageURL}
                imageAlt = {item.imageAlt}
                name = {item.name}
                description = {item.description}
                price = {item.price}
                quantity = {item.quantity}
            />   
        )
    );

    return (
        <>
            <Header />
            <section className="menu">
                <div className="foods">
                    <span><h1>Primeiro, seu prato</h1></span>
                    <ul>
                        {foodOptions}
                    </ul>
                </div>
                <div className="drinks">
                    <span><h1>Primeiro, seu prato</h1></span>
                    <ul>
                        {drinkOptions}
                    </ul>
                </div>
                <div className="desserts">
                    <span><h1>Primeiro, seu prato</h1></span>
                    <ul>
                        {dessertOptions}
                    </ul>
                </div>
            </section>
            <Footer />
            <section className="review hidden">
                <span><h1>Revise seu pedido</h1></span>
                <div className="review-box">
                    {newData}
                </div>
                <ConfirmCancel />
            </section>
        </>
    );
}