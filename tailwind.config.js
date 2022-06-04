module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                waves: "url('./assets/images/pattern-background-desktop.svg')",
            },
            colors: {
                "light-purple": "#e0e8ff",
                "dark-purple": "#d6e1ff",
                "button-purple": "#382ae1",
                "button-hover-purple": "#766cf1",
                title: "#171e41",
                subtitle: "#838aa9",
            },
        },
        fontFamily: {
            heebo: ["Heebos", "sans-serif"],
        },
    },
    plugins: [],
};
