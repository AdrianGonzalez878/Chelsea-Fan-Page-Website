module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    safelist: [
      '!duration-[0ms]',
      '!delay-[0ms]',
      'html.js :where([class*="taos:"]:not(.taos-init))',
    ],
    plugins: [require('taos/plugin')],
  };
  