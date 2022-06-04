export const CardHero = ({ src }: { src: string }) => {
    return (
        <div>
            <img
                src={src}
                alt="Hero resource"
                className="w-[60%] md:w-full m-auto"
            />
        </div>
    );
};
