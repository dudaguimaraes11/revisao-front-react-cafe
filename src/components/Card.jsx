function Card({ imagem, alt, nome, descricao, preco }) {
    return (
        <div className="card">

            <img
                src={imagem}
                alt={alt}
            />

            <div className="card-conteudo">

                <h3>{nome}</h3>

                <p>
                    {descricao}
                </p>

                <p className="preco">
                    {preco}
                </p>

                <a href="#contato" className="ver-produto">
                    Ver produto →
                </a>

            </div>

        </div>
    );
}

export default Card;