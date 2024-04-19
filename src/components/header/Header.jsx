import styles from "./Header.module.css"

function Header() {

    function logout() {
        localStorage.removeItem('token');
    }

    return(
        <div>
            <header>
                <nav className={styles.navbar}>
                    <span>TCG Creater</span>
                    <div><a href='/' onClick={logout()}>logout</a></div>
                    <div className={styles.linkContainer}>
                        <a href="/monsters">Show Monsters</a>
                        <a href="/monster/create">Create Monster</a>
                        <a href="/spells">Show Spells</a>
                        <a href="/spell/create">Create Spell</a>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
