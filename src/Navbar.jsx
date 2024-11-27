
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md sticky-top py-0">
        <div className="container">
            <a className="navbar-brand" href="#"
            ><img className="logo" src="/Logo.jpg" alt="logo"
            /></a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo02"
            >
            <ul className="navbar-nav">
                <li className="nav-item">
                <a href="#" className="nav-link">Contact</a>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">About</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
}