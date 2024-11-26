import { Button } from "../button/Button";
import Line from "../../../assets/icons/Vector.svg";
import SpiderMan from "../../../assets/images/Spider_Man.png";
import GuardiansOfTheGalaxy from "../../../assets/images/GOTG.png";
import PlayCircle from "../../../assets/icons/Play_circle.svg";
import style from "./hero.module.css";

export const Hero = () => {
    return (
        <div className={style.container}>
            <div className={style.search}>
                <h1 className={style.find}>FIND MOVIES</h1>
                <h1 className={style.shows}>TV SHOWS AND MORE</h1>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text <br />
                    ever since the 1500s, when an unknown printer took a galley <br />
                    of type and scrambled it to make a type specimen book. 
                </p>
                <Button />
            </div>
            <img className={style.vector} src={Line} alt="Vector lines" />
            <img className={style.spiderman} src={SpiderMan} alt="SpiderMan Poster" />
            <img className={style.guardians} src={GuardiansOfTheGalaxy} alt="Guardians of the Galaxy Poster" />
            <img  className={style.play} src={PlayCircle} alt="Play Icon Button" />
        </div>
    )
}