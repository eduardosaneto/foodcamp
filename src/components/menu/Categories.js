export default function Categories(props) {

    const {category, categoryTitle} = props;

    return (
        <div class={category}>
            <span><h1>{categoryTitle}</h1></span>
            <ul>
                {props.children}
            </ul>
        </div>
    );   
}