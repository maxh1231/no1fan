module.exports = {
    content: ['./public/**/*.{html,js}', './views/**/*.{html,js,handlebars}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                black: '#171717',
                gray: {
                    100: '#999999',
                    200: '#666666',
                    300: '#444444',
                    400: '#222222',
                },
                red: '#DA0037',
                'red-dark': '#940110',
                white: '#EDEDED',
            },
            width: {
                250: '250px',
            },
            screens: {
                sm: '640px',
                // => @media (min-width: 640px) { ... }

                md: '768px',
                // => @media (min-width: 768px) { ... }

                lg: '1024px',
                // => @media (min-width: 1024px) { ... }

                xl: '1280px',
                // => @media (min-width: 1280px) { ... }
            },
            boxShadow: {
                md: '0 0 3px 2px rgb(0 0 0 / 0.1)',
            },
        },
    },
    plugins: [],
};
