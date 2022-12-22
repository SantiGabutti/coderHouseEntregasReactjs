const NavItem = ({href, children}) => {
    return (
        <a href={href} className="nav-link">{children}</a>
    );
}

export default NavItem;