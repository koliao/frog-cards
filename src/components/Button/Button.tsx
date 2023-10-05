import "./Button.css"

const Button = ( {
    label,
    onClick,
} : ButtonProps ) => {
    return (
        <button
            className="button"
            onClick={onClick}
        >
          {label}
        </button>
    )
}

export default Button
