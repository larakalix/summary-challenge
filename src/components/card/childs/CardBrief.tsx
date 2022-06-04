interface Props {
    title: string;
    description: string;
}

export const CardBrief = ({ title, description }: Props) => {
    return (
        <div className="px-12 py-10 text-center">
            <h1 className="capitalize text-title font-heebo font-extrabold text-[1.4rem] mb-4">
                {title}
            </h1>
            <p className="text-subtitle">{description}</p>
        </div>
    );
};
