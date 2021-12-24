module.exports = {
    content: ['./public/**/*.{html,js}', './views/**/*.{html,js,handlebars}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'black': '#171717',
                'grey': '#444444',
                'red': '#DA0037',
                'white': '#EDEDED',
            }
        },
    },
    plugins: [],
};
