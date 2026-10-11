import './Header.scss'

export function Header() {
  return (
    <header>
        <div className="topbar">
            <p>Compra 100% segura</p>
            <p>Frete grátis acima de R$ 200</p>
            <p>Parcele suas compras</p>
        </div>

        <div className='main-row'>
            <p className='logo'>econverse</p>

            <input className='search' type="text" placeholder="O que você está buscando?"></input>

            <div className='icons'>
                <span>comparar</span>
                <span>favoritos</span>
                <span>perfil</span>
                <span>carrinho</span>
            </div>
        </div>

        <nav className='nav-menu'>
            <ul>
                <li>Todas Categorias</li>
                <li>Supermercado</li>
                <li>Livros</li>
                <li>Moda</li>
                <li>Lançamentos</li>
                <li className='active'>Ofertas do Dia</li>
                <li>Assinatura</li>
            </ul>
        </nav>

    </header>
  ) 
}