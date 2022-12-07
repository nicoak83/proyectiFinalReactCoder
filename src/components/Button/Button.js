import './Button.css'
const Button = (props) => {
    return (
        <button style = {{color: props.colorText}}>{props.text}</button>
    )
}
export default Button