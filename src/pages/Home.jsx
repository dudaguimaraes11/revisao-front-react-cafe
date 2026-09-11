import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Card from "../components/Card";

function Home() {
    const produtos = [
        {
            imagem: "img/espresso.png",
            alt: "Café espresso",
            nome: "Espresso",
            descricao: "Café intenso e aromático para quem gosta de um sabor marcante.",
            preco: "R$ 7,00"
        },
        {
            imagem: "img/cappuccino.png",
            alt: "Cappuccino",
            nome: "Cappuccino",
            descricao: "A combinação perfeita entre café, leite cremoso e um toque especial.",
            preco: "R$ 12,00"
        },
        {
            imagem: "img/bolo.png",
            alt: "Fatia de bolo",
            nome: "Bolo da Casa",
            descricao: "Uma fatia de bolo caseiro preparada para acompanhar o seu café.",
            preco: "R$ 10,00"
        },
        {
            imagem: "img/combo.png",
            alt: "Combo de café",
            nome: "Combo Especial",
            descricao: "Café, acompanhamento e sobremesa em uma combinação especial.",
            preco: "R$ 22,00"
        },
        {
            imagem: "img/croissant.png",
            alt: "Croissant",
            nome: "Croissant",
            descricao: "Croissant dourado, crocante por fora e macio por dentro.",
            preco: "R$ 11,00"
        },
        {
            imagem: "img/latte.png",
            alt: "Café Latte",
            nome: "Café Latte",
            descricao: "Café cremoso com leite e uma espuma suave para aproveitar sem pressa.",
            preco: "R$ 13,00"
        },
        {
            imagem: "img/cookie.png",
            alt: "Cookie com chocolate",
            nome: "Cookie",
            descricao: "Cookie macio com pedaços de chocolate, perfeito para acompanhar seu café.",
            preco: "R$ 8,00"
        },
        {
            imagem: "img/torta.png",
            alt: "Fatia de torta",
            nome: "Torta Especial",
            descricao: "Uma deliciosa fatia de torta preparada para deixar seu momento mais doce.",
            preco: "R$ 14,00"
        },
        {
            imagem: "img/brownie.png",
            alt: "Brownie com chocolate",
            nome: "Brownie",
            descricao: "Brownie de chocolate macio e intenso, perfeito para os amantes de doce.",
            preco: "R$ 9,00"
        },
        {
            imagem: "img/pao-de-queijo.png",
            alt: "Pão de queijo",
            nome: "Pão de Queijo",
            descricao: "Quentinho, macio e preparado para acompanhar qualquer café.",
            preco: "R$ 7,00"
        },
        {
            imagem: "img/cinnamon-roll.png",
            alt: "Cinnamon Roll",
            nome: "Cinnamon Roll",
            descricao: "Massa macia com canela e uma cobertura doce e cremosa.",
            preco: "R$ 15,00"
        },
        {
            imagem: "img/cheesecake.png",
            alt: "Cheesecake",
            nome: "Cheesecake",
            descricao: "Sobremesa cremosa e delicada para deixar sua pausa ainda mais especial.",
            preco: "R$ 16,00"
        },
        {
            imagem: "img/muffin.png",
            alt: "Muffin de chocolate",
            nome: "Muffin de Chocolate",
            descricao: "Muffin macio com muito chocolate, perfeito para uma pausa mais doce.",
            preco: "R$ 10,00"
        },
        {
            imagem: "img/mocha.png",
            alt: "Café Mocha",
            nome: "Café Mocha",
            descricao: "Uma combinação cremosa de café, leite e chocolate.",
            preco: "R$ 15,00"
        },
        {
            imagem: "img/donut.png",
            alt: "Donut",
            nome: "Donut",
            descricao: "Donut macio com cobertura doce, perfeito para acompanhar seu café.",
            preco: "R$ 9,00"
        }
    ];

    return (
        <>
            <Header />

            <main>

                <section className="hero" id="inicio">

                    <div className="hero-texto">

                        <p className="subtitulo">
                            SEU MOMENTO COMEÇA AQUI
                        </p>

                        <h2>
                            Um bom café deixa qualquer dia melhor.
                        </h2>

                        <p>
                            Cafés especiais, doces preparados com carinho
                            e um ambiente perfeito para relaxar, estudar
                            ou colocar as ideias em ordem.
                        </p>

                        <Button
                            texto="Conheça nossos produtos"
                            link="#produtos"
                        />

                    </div>


                    <div className="hero-imagem">

                        <img
                            src="img/cafeteria2.png"
                            alt="Café servido em uma cafeteria"
                        />

                    </div>

                </section>


                <section className="produtos" id="produtos">

                    <div className="titulo-secao">

                        <p>
                            CONHEÇA NOSSO CARDÁPIO
                        </p>

                        <h2>
                            Favoritos da cafeteria
                        </h2>

                        <p>
                            Algumas opções especiais preparadas para
                            deixar sua pausa ainda melhor.
                        </p>

                    </div>


                    <div className="cards">

                        {produtos.map((produto, index) => (
                            <Card
                                key={index}
                                imagem={produto.imagem}
                                alt={produto.alt}
                                nome={produto.nome}
                                descricao={produto.descricao}
                                preco={produto.preco}
                            />
                        ))}

                    </div>

                </section>


                <section className="sobre" id="sobre">

                    <div className="sobre-imagem">

                        <img
                            src="img/cafeteria2.png"
                            alt="Ambiente da cafeteria"
                        />

                    </div>


                    <div className="sobre-texto">

                        <p className="subtitulo">
                            SOBRE NÓS
                        </p>

                        <h2>
                            Mais do que uma cafeteria
                        </h2>

                        <p>
                            O Bloom Café nasceu com a ideia de criar
                            um espaço confortável para pessoas que gostam
                            de um bom café e de bons momentos.
                        </p>

                        <p>
                            Aqui você pode fazer uma pausa, estudar,
                            conversar com amigos ou simplesmente aproveitar
                            um momento tranquilo acompanhado de algo especial.
                        </p>

                        <Button
                            texto="Venha nos conhecer"
                            link="#contato"
                        />

                    </div>

                </section>


                <section className="ambiente">

                    <div className="titulo-secao">

                        <p>
                            CONHEÇA O BLOOM CAFÉ
                        </p>

                        <h2>
                            Nosso ambiente
                        </h2>

                        <p>
                            Um espaço pensado para você aproveitar
                            bons momentos, relaxar e tomar um bom café.
                        </p>

                    </div>


                    <div className="ambiente-imagens">

                        <img
                            src="img/ambiente1.png"
                            alt="Ambiente interno do Bloom Café"
                        />

                        <img
                            src="img/ambiente2.png"
                            alt="Ambiente do Bloom Café"
                        />

                    </div>

                </section>


                <section className="contato" id="contato">

                    <div className="titulo-secao">

                        <p>
                            FALE COM A GENTE
                        </p>

                        <h2>
                            Entre em contato
                        </h2>

                        <p>
                            Estamos sempre prontos para receber você
                            e tornar o seu momento ainda mais especial.
                        </p>

                    </div>


                    <div className="contato-container">


                        <div className="formulario">

                            <p className="contato-subtitulo">
                                ENVIE UMA MENSAGEM
                            </p>

                            <h2>
                                Fale conosco
                            </h2>

                            <p>
                                Preencha o formulário e nossa equipe
                                entrará em contato com você.
                            </p>


                            <form>

                                <input
                                    type="text"
                                    placeholder="Seu nome"
                                />


                                <input
                                    type="email"
                                    placeholder="Seu e-mail"
                                />


                                <select>

                                    <option value="">
                                        Assunto
                                    </option>

                                    <option value="duvida">
                                        Dúvida
                                    </option>

                                    <option value="sugestao">
                                        Sugestão
                                    </option>

                                    <option value="pedido">
                                        Pedido
                                    </option>

                                </select>


                                <textarea
                                    placeholder="Sua mensagem..."
                                ></textarea>


                                <button
                                    type="submit"
                                    className="botao-enviar"
                                >
                                    Enviar mensagem
                                </button>

                            </form>

                        </div>


                        <div className="contato-direita">


                            <div className="localizacao">

                                <h3>
                                    Nossa localização
                                </h3>

                                <div className="mapa">

                                    <p className="mapa-icone">
                                        📍
                                    </p>

                                    <p>
                                        Bloom Café
                                    </p>

                                    <p className="mapa-endereco">
                                        Rua do Café, 123
                                    </p>

                                </div>


                                <p className="endereco">
                                    📍 Rua do Café, 123 - Centro
                                </p>

                                <p>
                                    São Paulo - SP
                                </p>

                            </div>


                            <div className="informacoes-contato">


                                <div className="horario">

                                    <h3>
                                        Horário de atendimento
                                    </h3>

                                    <p>
                                        Segunda a Sexta
                                    </p>

                                    <strong>
                                        08h às 20h
                                    </strong>

                                    <p>
                                        Sábado
                                    </p>

                                    <strong>
                                        09h às 18h
                                    </strong>

                                    <p className="frase-cafe">
                                        Sempre pronto para um bom café.
                                    </p>

                                </div>


                                <div className="redes">

                                    <h3>
                                        Redes sociais
                                    </h3>

                                    <p>
                                        Acompanhe o Bloom Café e fique
                                        por dentro das novidades.
                                    </p>


                                    <div className="icones-redes">

                                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                            Instagram
                                        </a>

                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            Facebook
                                        </a>

                                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                            YouTube
                                        </a>

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Home;