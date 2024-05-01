import styles from "./Header.module.css"

function Header() {

    // Was getting called all the time. All requests denied.
    function logout() {
        localStorage.removeItem('token');
    }

    return(
        <div>
            <header>
                <nav className={styles.navbar}>
                    <span>TCG Creater</span>
                    <div className={styles.linkContainer}>
                        <a href='/'>Login</a>
                        {/*<a href='/' onClick={logout()}>Logout</a>*/}
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
