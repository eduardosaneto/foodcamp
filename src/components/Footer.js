export default function Header(props) {

    const {disabled, active, text} = props

    return (
        <footer>
            <button disabled={disabled} class={active}>
                {text}
            </button>
        </footer>
    );
}