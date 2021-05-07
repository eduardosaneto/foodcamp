import Header from './Header';
import Options from './menu/Options';
import Footer from './Footer';
import Review from './review/Review';
import ConfirmCancel from './review/ConfirmCancel';

export default function App() {

    const reviewData = [
        {
            step: "comida",
            stepName: "frango",
            stepPrice: "R$20,00",
        },
        {
            step: "comida",
            stepName: "frango",
            stepPrice: "R$20,00",
        },
        {
            step: "comida",
            stepName: "frango",
            stepPrice: "R$20,00",
        },
        {
            step: "total",
            stepName: "Total",
            stepPrice: "R$20,00",
        }
    ]

    const newData = reviewData.map((item) => (
        <Review 
            reviewStep = {item.step}
            reviewStepName = {item.stepName}
            reviewPrice = {item.stepPrice}
        />
    ));

    const foodMenu = [
        {
            imageURL: "assets/imagens/comida/estrogonofefrango.jpg",
            imageAlt: "Estrogonofe de Frango",
            name: "Estrogonofe",
            description: "Frango com molho",
            price: "R$20,00",
            quantity: 1
        },
        {
            imageURL: "assets/imagens/comida/estrogonofefrango.jpg",
            imageAlt: "Estrogonofe de Frango",
            name: "Estrogonofe",
            description: "Frango com molho",
            price: "R$20,00",
            quantity: 1
        },
        {
            imageURL: "assets/imagens/comida/estrogonofefrango.jpg",
            imageAlt: "Estrogonofe de Frango",
            name: "Estrogonofe",
            description: "Frango com molho",
            price: "R$20,00",
            quantity: 1
        }
    ]

    const foodOptions = foodMenu.map((item) => (
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

    const drinkMenu = [
        {
            imageURL: "assets/imagens/comida/estrogonofefrango.jpg",
            imageAlt: "Estrogonofe de Frango",
            name: "Estrogonofe",
            description: "Frango com molho",
            price: "R$20,00",
            quantity: 1
        },
        {
            imageURL: "assets/imagens/comida/estrogonofefrango.jpg",
            imageAlt: "Estrogonofe de Frango",
            name: "Estrogonofe",
            description: "Frango com molho",
            price: "R$20,00",
            quantity: 1
        },
        {
            imageURL: "assets/imagens/comida/estrogonofefrango.jpg",
            imageAlt: "Estrogonofe de Frango",
            name: "Estrogonofe",
            description: "Frango com molho",
            price: "R$20,00",
            quantity: 1
        }
    ]

    const drinkOptions = drinkMenu.map((item) => (
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

    const dessertMenu = [
        {
            imageURL: "assets/imagens/comida/estrogonofefrango.jpg",
            imageAlt: "Estrogonofe de Frango",
            name: "Estrogonofe",
            description: "Frango com molho",
            price: "R$20,00",
            quantity: 1
        },
        {
            imageURL: "assets/imagens/comida/estrogonofefrango.jpg",
            imageAlt: "Estrogonofe de Frango",
            name: "Estrogonofe",
            description: "Frango com molho",
            price: "R$20,00",
            quantity: 1
        },
        {
            imageURL: "assets/imagens/comida/estrogonofefrango.jpg",
            imageAlt: "Estrogonofe de Frango",
            name: "Estrogonofe",
            description: "Frango com molho",
            price: "R$20,00",
            quantity: 1
        }
    ]

    const dessertOptions = dessertMenu.map((item) => (
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
                <div class="foods">
                    <span><h1>Primeiro, seu prato</h1></span>
                    <ul>
                        {foodOptions}
                    </ul>
                </div>
                <div class="drinks">
                    <span><h1>Primeiro, seu prato</h1></span>
                    <ul>
                        {drinkOptions}
                    </ul>
                </div>
                <div class="desserts">
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