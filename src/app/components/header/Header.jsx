import { Hero } from "../hero/Hero"
import { NavBar } from "../navbar/NavBar"

export const Header = () => {
    return (
        <div>
            <NavBar />
            <div></div>
            <Hero />
        </div>
    )
}