import clsx from "clsx";
import { ActionType, CardButtonProps } from "../../../models/Card";

export const CardActions = () => {
    return (
        <div className="px-12 py-10 text-center">
            <ul>
                <li>
                    <CardButton
                        text="Proceed to Payment"
                        type={ActionType.Payment}
                    />
                </li>
                <li>
                    <CardButton text="Cancel Order" type={ActionType.Cancel} />
                </li>
            </ul>
        </div>
    );
};

export const CardButton = ({ text, type, onClick }: CardButtonProps) => {
    const actionStyles = clsx({
        ["text-white bg-button-purple hover:bg-button-hover-purple shadow-lg shadow-gray-500/50 hover:shadow-lg shadow-gray-500/10"]:
            type === ActionType.Payment,
        ["text-gray-600 hover:text-title"]: type === ActionType.Cancel,
    });

    return (
        <button
            onClick={() => (onClick ? onClick : null)}
            className={`w-full rounded-lg py-3 ${actionStyles} transition-colors`}
        >
            <span className="font-heebo font-bold text-[0.8rem]">{text}</span>
        </button>
    );
};
