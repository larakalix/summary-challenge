import { CardActions, CardBrief, CardHero, CardPlan } from "./childs";

import Hero from "./../../assets/images/illustration-hero.svg";

export const Card = () => {
    return (
        <div className="max-w-[85%] md:max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-xl overflow-hidden">
            <CardHero src={Hero} />
            <CardBrief
                title="Order summary"
                description="You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!"
            />
            <CardPlan />
            <CardActions />
        </div>
    );
};
