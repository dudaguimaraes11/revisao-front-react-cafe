import { useState } from "react";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    function abrirMenu() {
        setMenuAberto(!menuAberto);
    }

    return (
        <header>
            <div className="cabecalho">

                <div className="logo">
                    <h1>Bloom Café</h1>
                </div>

                <button
                    id="botao-menu"
                    onClick={abrirMenu}
                >
                    ☰
                </button>

                <nav className={menuAberto ? "ativo" : ""}>

                    <a href="#inicio" onClick={() => setMenuAberto(false)}>
                        Início
                    </a>

                    <a href="#produtos" onClick={() => setMenuAberto(false)}>
                        Produtos
                    </a>

                    <a href="#sobre" onClick={() => setMenuAberto(false)}>
                        Sobre
                    </a>

                    <a href="#contato" onClick={() => setMenuAberto(false)}>
                        Contato
                    </a>

                </nav>

            </div>
        </header>
    );
}

export default Header;