import "./Header.css"

function Header() {

    return(
        <div>
            <header>
                <nav className="nav-bar">
                    <span>Monster Time</span>
                    <div className="link-container">
                        <a href="/">Click Me</a>
                        <a href="/">Click Me</a>
                        <a href="/">Click Me</a>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
