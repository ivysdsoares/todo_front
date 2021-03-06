/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const pallete = {
    // ATTENTION / TAG COLORS

    red: colors.red[300],
    red_text: colors.red[600],
    orange: colors.orange[300],
    orange_text: colors.orange[600],
    yellow: colors.yellow[300],
    yellow_text: colors.yellow[600],
    green: colors.green[300],
    green_text: colors.green[600],
    blue: colors.blue[300],
    blue_text: colors.blue[600],
    purple: colors.purple[300],
    purple_text: colors.purple[600],
    pink: colors.pink[300],
    pink_text: colors.pink[600],

    // IMPORTANT COLORS
    white: "rgb(255,255,255)",
    black: "rgb(0,0,0)",
    transparent: "rgba(0,0,0,0)",

    /// DEFAULT COLORS
    background: `var(--background) `,
    form: `var(--form) `,
    menu: `var(--menu) `,
    menu_hover: `var(--menu_hover) `,
    // TEXT
    title: `var(--title) `,
    description: `var(--description) `,
    subtitle: `var(--subtitle) `,
    placeholder: `var(--placeholder) `,
    // OTHER
    neutral: `var(--neutral) `,
    border: `var(--border) `,
    // PRIMARY
    primary: `var(--primary)`,
    primary_hover: `var(--primary_hover) `,
    primary_active: `var(--primary_active) `,
    primary_disabled: `var(--primary_disabled) `,
    // SECONDARY
    secondary: `var(--secondary) `,
    secondary_hover: `var(--secondary_hover) `,
    secondary_active: `var(--secondary_active) `,
    secondary_disabled: `var(--secondary_disabled) `
};

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
    theme: {
        colors: pallete,

        extend: {
            width: { 720: "45rem", 600: "37.5rem" },
            height: { label: "26px", label_size: "1.625rem" },
            minWidth: {
                6: "1.25rem",
                8: "2rem",
                10: "2.5rem",
                0: "0",
                "1/4": "25%",
                "1/2": "50%",
                "3/4": "75%",
                "1/10": "10%",
                "1/5": "20%",
                full: "100%",
                720: "45rem",
                600: "37.5rem"
            },
            maxWidth: {
                6: "1.25rem",
                8: "2rem",
                10: "2.5rem",
                0: "0",
                "1/10": "10%",
                "1/5": "20%",
                "1/4": "25%",
                "1/2": "50%",
                "3/4": "75%",
                full: "100%",
                720: "45rem",
                600: "37.5rem"
            },
            maxHeight: {
                0: "0",
                "1/4": "25%",
                "1/2": "50%",
                "3/4": "75%",
                720: "45rem",
                full: "100%",

                label: "26px"
            },
            minHeight: {
                0: "0",
                12: "50px",
                80: "20rem",
                96: "24rem",
                "1/4": "25%",
                "1/2": "50%",
                "3/4": "75%",
                720: "45rem",
                full: "100%",
                modbar: "5rem",
                label: "26px"
            },
            boxShadow: {
                elevation:
                    " 0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),  0 8px 8px hsl(0deg 0% 0% / 0.075),  0 16px 16px hsl(0deg 0% 0% / 0.075) ",
                "elevation-1":
                    " 0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),  0 8px 8px hsl(0deg 0% 0% / 0.075) ",
                card: `0 0px 2px 0px hsl(0deg 0% 0% / 0.2), 
                        0px 2px 5px 0px hsl(0deg 0% 0% / 0.1)
                        `,
                fab: `0px 2px 3px 0px hsl(0deg 0% 0% / 0.3), 
                        0px 2px 10px 0px hsl(0deg 0% 0% / 0.2),
                        2px 2px 5px 0px hsl(0deg 0% 0% / 0.2),
                        0px 2px 10px 0px hsl(0deg 0% 0% / 0.2)
                        `,
                button: `0 2px 3px 0px hsl(0deg 0% 0% / 0.2),
                    0px 5px 5px 1px hsl(0deg 0% 0% / 0.15),
                    2px 0px 3px hsl(0deg 0% 0% / 0.15),
                    -2px 0px 3px hsl(0deg 0% 0% / 0.15)                   
                    `,
                "button-active": `0 0px 3px 0px hsl(0deg 0% 0% / 0.05),
                    0px 3px 5px 0px hsl(0deg 0% 0% / 0.2),
                    2px 0px 2px hsl(0deg 0% 0% / 0.05),
                    -2px 0px 2px hsl(0deg 0% 0% / 0.05)                   
                    `,
                "button-focus": `0 2px 3px 0px hsl(0deg 0% 0% / 0.2),
                    0px 3px 2px 0px hsl(0deg 0% 0% / 0.1),
                    2px 0px 3px hsl(0deg 0% 0% / 0.1),
                    -2px 0px 3px hsl(0deg 0% 0% / 0.1)                   
                    `
            },
            fontSize: {
                label: ["0.9rem", "1rem"],
                "6xl": ["3.75rem", "4.5rem"]
            },
            fontFamily: {
                title: ["MuseoModerno"],
                body: ["Nunito"]
            },
            borderRadius: {
                20: "50px"
            }
        }
    },
    plugins: []
};
