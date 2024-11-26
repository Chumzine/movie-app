import Logo from "../../../assets/icons/Logo.svg";
import style from "./nav.module.css";

export const NavBar = () => {
    return (
        <header>
            <div className={style.logoWrapper}>
                <img className={style.logo} src={Logo} alt="Movie Logo" />
                <h2>Movies</h2>
                <span>.</span>
            </div>
            <nav>
                <ul className={style["nav__links"]}>
                    <li><a href="" className={style.home}>Home</a></li>
                    <li><a href="">Explore</a></li>
                    <li><a href="">Genre</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">TV Shows</a></li>
                </ul>
            </nav>
        </header>
    )
}