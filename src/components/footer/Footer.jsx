import styles from "./Footer.module.css"

function Footer() {

    return (
        <div>
            <footer>
                <span>&copy; {new Date().getFullYear()} Justin Rinehuls</span>
            </footer>
        </div>
    );

}

export default Footer;
