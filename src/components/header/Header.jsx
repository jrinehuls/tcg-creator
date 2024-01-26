import styles from "./Header.module.css"

function Header() {

    return(
        <div>
            <header>
                <nav className={styles.navbar}>
                    <span>Monster Time</span>
                    <div className={styles.linkContainer}>
                        <a href="/monster/create">Add Monster</a>
                        <a href="/">Click Me</a>
                        <a href="/">Click Me</a>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
