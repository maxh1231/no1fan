module.exports = {
    content: ['./public/**/*.{html,js}', './views/**/*.{html,js,handlebars}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'black': '#171717',
                'gray': '#444444',
                'red': '#DA0037',
                'white': '#EDEDED',
            },
            width: {
                '250': '250px',
            }
        },
    },
    plugins: [],
};
