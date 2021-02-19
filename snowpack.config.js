/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-sass',
    [
      '@snowpack/plugin-typescript',
      {
        args: '--project tsconfig.app.json'
      },
    ],
    ['@snowpack/plugin-run-script', {
      cmd: 'eslint src tests --ext .js,jsx,.ts,.tsx',
      watch: 'esw -w --clear src tests --ext .js,jsx,.ts,.tsx',
      output: 'stream',
    }]
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { 'match': 'routes', 'src': '.*', 'dest': '/index.html' },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  exclude: [
    '**/*.test.ts',
    '**/*.test.tsx',
  ]
};
