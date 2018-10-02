'use strict';

var gulp = require('gulp');

// Build Path
var path = require('path');
var BUILD_PATH = path.join(__dirname, './dist');

// Globs
var GLOBS = {
  assets: ['src/main/resources/images/images/*'],
  ts_tsx: ['src/main/react/**/*.+(ts|tsx)'],
  scss: ['src/main/styles/**/*.+(scss|css)'],
};

// Webpack Configuration
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var _ = require('lodash');

//dotenv for Webpack
var dotenv = require('dotenv');
var dotenvRawVariables = dotenv.config().parsed;
var dotenvProcessedVariables = Object.keys(dotenvRawVariables).reduce((acc, item) => {
  acc[item] = JSON.stringify(dotenvRawVariables[item]);
  return acc;
}, {});

const WEBPACK_SRC_CONFIG = {
  mode: "production",
  module: {
    rules: [
      {
        test: [/\.ts?$/, /\.tsx?$/],
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'env', 'stage-2']
        }
      }, {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: "sass-loader",
            options: {},
          }
        ]
      }, {
        test: /(icons|fonts)/,
        loader: 'url-loader'
      }, {
        test: [/\.png$/, /\.jpg$/, /\.svg$/],
        loader: 'url-loader?=mimetype=image/png'
      }
    ]
  }, resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.css']
  }, plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new webpack.DefinePlugin({
      'process.env': dotenvProcessedVariables,
    }),
  ], optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};

const WEBPACK_BUILD_CONFIG = _.merge({}, WEBPACK_SRC_CONFIG, {
  entry: './src/main/react/index.tsx',
  output: {filename: 'bundle.js'}
});

const WEBPACK_STYLE_CONFIG = {
  entry: './src/main/styles/main.scss',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: "sass-loader",
            options: {},
          }
        ]
      }
    ]
  }, resolve: {
    extensions: ['.scss', '.css']
  }, plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ]
};


// Gulp tasks

var plumber = require('gulp-plumber');
var nodemon = require('gulp-nodemon');

gulp.task('build', ['buildStyle', 'buildCode']);

gulp.task('watch', ['watchStyle', 'watchCode']);

gulp.task('start', ['build'], function () {
  nodemon({
    script: './server.js'
  })
});

gulp.task('buildStyle', function () {
  return gulp.src(GLOBS.scss)
    .pipe(webpackStream(WEBPACK_STYLE_CONFIG))
    .pipe(gulp.dest(BUILD_PATH))
});

gulp.task('buildCode', function () {
  return gulp.src(GLOBS.ts_tsx)
    .pipe(webpackStream(WEBPACK_BUILD_CONFIG))
    .pipe(gulp.dest(BUILD_PATH))
});

gulp.task('watchStyle', function () {
  return gulp.src(GLOBS.scss)
    .pipe(plumber(function () {
      console.error(arguments)
    }))
    .pipe(webpackStream(_.merge({}, WEBPACK_STYLE_CONFIG, {
      watch: true,
    })))
    .pipe(gulp.dest(BUILD_PATH))
});

gulp.task('watchCode', function () {
  return gulp.src(GLOBS.ts_tsx)
    .pipe(plumber(function () {
      console.error(arguments)
    }))
    .pipe(webpackStream(_.merge({}, WEBPACK_BUILD_CONFIG, {
      watch: true,
      devtool: 'inline-source-map',
    })))
    .pipe(gulp.dest(BUILD_PATH))
});