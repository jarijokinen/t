const glob = require('glob');
const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const blocks = () => {
  const entries = {};
  glob.sync('./src/blocks/*').forEach((item) => {
    const block = path.basename(item);
    entries[block] = {
      import: `./src/blocks/${block}/index.js`,
      filename: `blocks/${block}/index.js`
    };
  });
  return entries;
};

module.exports = {
  mode: 'production',
  entry: {
    main: { import: './src/js/main.js', filename: 'js/main.js' },
    editor: { import: './src/js/editor.js', filename: 'js/editor.js' },
    ...blocks()
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@wordpress/babel-preset-default']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'expanded'
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './build')
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './src/php',
          to: '[path][name][ext]',
          transform(content) {
            return content
              .toString()
              .replaceAll('<%= slug %>', 't')
              .replaceAll('<%= timestamp %>', new Date().getTime());
          }
        },
        {
          from: '**/*.json',
          context: path.resolve(__dirname, 'src', 'blocks'),
          to: 'blocks/[path][name][ext]'
        },
        {
          from: './src/css/style.css',
          to: 'style.css'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new IgnoreEmitPlugin(/style.js/),
    new DependencyExtractionWebpackPlugin({
      combineAssets: true,
      combinedOutputFile: 'blocks/asset.php',
      injectPolyfill: true
    })
  ],
  resolve: {
    fallback: {
      path: require.resolve('path-browserify')
    }
  }
};
