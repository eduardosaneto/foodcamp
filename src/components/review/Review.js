// import Review from './doubleCheck/Review';

export default function Review(props){

    const {reviewStep, reviewStepName, reviewPrice} = props

    return (
        <div className={reviewStep}>
            <p>{reviewStepName}</p>
            <p>{reviewPrice}</p>
        </div>
    );
}