import { PopularTags } from "../components/tags/PopularTags"
import { Hero } from "../components/UI/HeroSection"

import { Question } from "./Question"

export const Home = () => {
    return (
        <div>
            <Hero />
            <Question />
            <PopularTags />
        </div>
    )
}