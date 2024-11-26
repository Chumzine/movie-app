import Play from "../../../assets/icons/Play.svg";
import style from "./style.module.css";


export const Button = () => {
    return (
        <button>
            <img src={Play} alt="PLay Icon Button" />
            Watch Tutorial
        </button>
    )
}