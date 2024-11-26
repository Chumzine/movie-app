import { Header } from "../components/header/Header";
import { Likes } from "../components/likes/Likes";
import { Trending } from "../components/trending/Trending";
import style from "./style.module.css";

export const LandingPage = () => {
    return (
        <div className={style.wrapper}>
        <Header />
        <Trending />
        <Likes />
        </div>
    )
}