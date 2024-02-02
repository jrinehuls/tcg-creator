import styles from "./Header.module.css"

function Header() {

    return(
        <div>
            <header>
                <nav className={styles.navbar}>
                    <span>TCG Creater</span>
                    <div className={styles.linkContainer}>
                        <a href="/">Show Monsters</a>
                        <a href="/monster/create">Create Monsters</a>
                        <a href="/spells">Show Spells</a>
                        <a href="/spell/create">Create Spell</a>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
