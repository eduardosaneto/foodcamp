import React from 'react';
import Header from './Header';
import Foods from './menu/Foods';
import Drinks from './menu/Drinks';
import Desserts from './menu/Desserts';
import Footer from './Footer';
import Review from './review/Review';
import ConfirmCancel from './review/ConfirmCancel';
import reviewData from './reviewData';

export default function App() {

    const[allFoods, setAllFoods] = React.useState([]);
    const[allDrinks, setAllDrinks] = React.useState([]);
    const[allDesserts, setAllDesserts] = React.useState([]);

    let all = true;
    let active = "close-order";
    // let disabled = false;

    if (
        allFoods > 0 &&
        allDrinks > 0 && 
        allDesserts > 0
    ) {
        active = "close-order active";
        // disabled = true;
        all = false;
    }

    const orderReviewData = reviewData();

    const newData = orderReviewData.map((item) => (
        <Review 
            reviewStep = {item.step}
            reviewStepName = {item.stepName}
            reviewPrice = {item.stepPrice}
        />
    ));

    return (
        <>
            <Header />
            <section className="menu">
                <Foods allFoods={allFoods} setAllFoods={setAllFoods} />
                <Drinks allDrinks={allDrinks} setAllDrinks={setAllDrinks} />
                <Desserts allDesserts={allDesserts} setAllDesserts={setAllDesserts} />
            </section>
            <Footer 
                active = {active}
                all = {all}
                allFoods={allFoods}
                allDrinks={allDrinks}
                allDesserts={allDesserts}
            />
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