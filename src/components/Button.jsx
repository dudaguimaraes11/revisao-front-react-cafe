function Button({ texto, link }) {
    return (
        <a href={link} className="botao">
            {texto}
        </a>
    );
}

export default Button;