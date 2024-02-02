import styles from "./Header.module.css"

function Header() {

    return(
        <div>
            <header>
                <nav className={styles.navbar}>
                    <span>Monster Time</span>
                    <div className={styles.linkContainer}>
                        <a href="/monster/create">Create Monster</a>
                        <a href="/spell/create">Create Spell</a>
                        <a href="/">Placeholder</a>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
