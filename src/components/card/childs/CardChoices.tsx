import { PlanProps } from "../../../models/Plan";

import { plans } from "../../../data/plans";

interface Props {
    onClick: (choice: PlanProps) => void;
    hide: () => void;
}

export const CardChoices = ({ onClick, hide }: Props) => {
    const handleClick = (plan: PlanProps) => {
        onClick(plan);
        hide();
    };

    return (
        <div className="absolute flex items-center justify-center inset-0 mx-12 my-10">
            <div className="bg-[#f8f9fe] w-full rounded-xl px-4 py-6">
                <ul>
                    {plans.map(({ title, price }) => (
                        <li key={title}>
                            <button
                                onClick={() => handleClick({ title, price })}
                                className="w-full text-left flex justify-between"
                            >
                                <span className="font-bold text-title mr-4">
                                    {title}
                                </span>
                                <span className="font-semibold text-subtitle">
                                    {price === "0" ? "Free for ever" : `$${price}`}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    className="mt-4 w-full text-right cursor-pointer text-[0.8rem]"
                    onClick={hide}
                >
                    Close
                </button>
            </div>
        </div>
    );
};
