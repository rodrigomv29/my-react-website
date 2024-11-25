const postcss = require("postcss");

module.exports = {
    style: {
        postcssOptions: {
            plugins: [require('tailwindcss'),require('autoprefixer'), ],
        }
    }
}