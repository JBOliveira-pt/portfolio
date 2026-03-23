tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "surface-tint":
                    "rgb(var(--color-surface-tint) / <alpha-value>)",
                background: "rgb(var(--color-background) / <alpha-value>)",
                outline: "rgb(var(--color-outline) / <alpha-value>)",
                error: "rgb(var(--color-error) / <alpha-value>)",
                "primary-container":
                    "rgb(var(--color-primary-container) / <alpha-value>)",
                "inverse-primary":
                    "rgb(var(--color-inverse-primary) / <alpha-value>)",
                "on-background":
                    "rgb(var(--color-on-background) / <alpha-value>)",
                "on-error": "rgb(var(--color-on-error) / <alpha-value>)",
                "on-primary": "rgb(var(--color-on-primary) / <alpha-value>)",
                "on-primary-container":
                    "rgb(var(--color-on-primary-container) / <alpha-value>)",
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                "surface-variant":
                    "rgb(var(--color-surface-variant) / <alpha-value>)",
                "surface-container-highest":
                    "rgb(var(--color-surface-container-highest) / <alpha-value>)",
                tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
                "inverse-on-surface":
                    "rgb(var(--color-inverse-on-surface) / <alpha-value>)",
                "outline-variant":
                    "rgb(var(--color-outline-variant) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary) / <alpha-value>)",
                "surface-container-low":
                    "rgb(var(--color-surface-container-low) / <alpha-value>)",
                "surface-container":
                    "rgb(var(--color-surface-container) / <alpha-value>)",
                "secondary-container":
                    "rgb(var(--color-secondary-container) / <alpha-value>)",
                "tertiary-container":
                    "rgb(var(--color-tertiary-container) / <alpha-value>)",
                "surface-container-high":
                    "rgb(var(--color-surface-container-high) / <alpha-value>)",
                "on-secondary":
                    "rgb(var(--color-on-secondary) / <alpha-value>)",
                "error-container":
                    "rgb(var(--color-error-container) / <alpha-value>)",
                "on-error-container":
                    "rgb(var(--color-on-error-container) / <alpha-value>)",
                "on-surface-variant":
                    "rgb(var(--color-on-surface-variant) / <alpha-value>)",
                surface: "rgb(var(--color-surface) / <alpha-value>)",
                "inverse-surface":
                    "rgb(var(--color-inverse-surface) / <alpha-value>)",
                "on-secondary-container":
                    "rgb(var(--color-on-secondary-container) / <alpha-value>)",
                "on-tertiary": "rgb(var(--color-on-tertiary) / <alpha-value>)",
                "surface-bright":
                    "rgb(var(--color-surface-bright) / <alpha-value>)",
                "surface-container-lowest":
                    "rgb(var(--color-surface-container-lowest) / <alpha-value>)",
            },
            fontFamily: {
                headline: ["Space Grotesk"],
                body: ["Inter"],
                label: ["Inter"],
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg: "0.25rem",
                xl: "0.5rem",
                full: "0.75rem",
            },
        },
    },
};
