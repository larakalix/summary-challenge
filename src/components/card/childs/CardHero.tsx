export const CardHero = ({ src }: { src: string }) => {
    return (
        <div>
            <img src={src} alt="Hero resource" className="w-full" />
        </div>
    );
};
