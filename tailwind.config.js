module.exports = {
    content: ['./public/**/*.{html,js}', './views/**/*.{html,js,handlebars}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'black': '#171717',
                'gray': {
                    100: '#999999',
                    200: '#444444'
                },
                'red': '#DA0037',
                'red-dark': '#940110',
                'white': '#EDEDED',
            },
            width: {
                '250': '250px',
            }
        },
    },
    plugins: [],
};
