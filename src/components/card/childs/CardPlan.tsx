import { useState } from "react";
import { PlanProps } from "../../../models/Plan";

import { plans } from "../../../data/plans";
import IconMusic from "./../../../assets/images/icon-music.svg";
import { CardChoices } from "./CardChoices";

export const CardPlan = () => {
    const [show, setShow] = useState(false);
    const [plan, setPlan] = useState<PlanProps>(plans[plans.length - 1]);

    const choose = (choice: PlanProps) => setPlan(choice);

    const hide = () => setShow(false);

    return (
        <section className="relative px-12">
            <div className="flex items-center justify-between w-full rounded-xl px-4 py-6 bg-[#f8f9fe]">
                <div>
                    <div className="flex">
                        <img src={IconMusic} alt="Plan choice" />

                        <div className="ml-4">
                            <h1 className="font-bold text-title">
                                {plan.title}
                            </h1>
                            <p className="font-semibold text-subtitle">
                                {plan.price === "0"
                                    ? "Free for ever"
                                    : `$${plan.price}`}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className="font-heebo font-bold text-[0.9rem] text-button-purple hover:text-button-hover-purple"
                        onClick={() => setShow(!show)}
                    >
                        Change
                    </button>
                </div>
            </div>
            {show && <CardChoices onClick={choose} hide={hide} />}
        </section>
    );
};
