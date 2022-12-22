import CartWidget from "./CartWidget";
import NavItem from "./NavItem";

function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">MagicStore</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavItem href="/">Música</NavItem>
                        </li>
                        <li class="nav-item">
                            <NavItem href="/">Equipos</NavItem>
                        </li>
                    </ul>
                    <span class="navbar-text">
                    <CartWidget/>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;