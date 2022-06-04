export enum ActionType {
    Payment = "Payment",
    Cancel = "Cancel",
    Default = "Default",
}

export interface CardButtonProps {
    text: string;
    type: ActionType;
    onClick?: () => void;
}
