/**
 * External dependencies
 */
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

// Webpack config.
const config = {
  mode: 'production' === process.env.NODE_ENV ? 'production' : 'development',
  resolve: {
    modules: [
      `${ __dirname }/resources/assets`,
      'node_modules',
    ],
  },
  entry: {
    app: [
      'details-polyfill',
      '@fortawesome/fontawesome-pro/js/fontawesome.js',
      '@fortawesome/fontawesome-pro/js/regular.js',
      'js',
    ]
  },
  output: {
    filename: 'public/js/[name].js',
    path: __dirname,
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss-loader',
              plugins: () => [
                require( 'postcss-import' )( {
                  preserve: true,
                } ),
                // Safari is lame: https://forum.ionicframework.com/t/ionic4-safari-issues-with-var-rgb-rgb-vars/146048
                require( 'postcss-hexrgba' )(),
                // `postcss-preset-env` does not extract nests that reference the parent item's name.
                require( 'postcss-nested' )(),
                require( 'postcss-preset-env' )( {
                  stage: 0,
                } ),
              ]
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: './public/css/[name].css',
    } ),
  ],
};

if ( 'production' !== config.mode ) {
  config.devtool = process.env.SOURCEMAP || 'source-map';
}

module.exports = config;
