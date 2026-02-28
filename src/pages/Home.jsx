import { PopularTags } from "../components/tags/PopularTags"
import { Hero } from "../components/UI/HeroSection"

import { Question } from "./Question"
import { TopContributors } from "./TopContributors"

export const Home = () => {
    return (
        <div>
            <Hero />
            <Question />
            <PopularTags />
            <TopContributors />
        </div>
    )
}