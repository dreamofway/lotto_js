const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { loader } = require('mini-css-extract-plugin');

 
module.exports = {  
  entry: {
    // index: './src/index.js',
    lotto: ['@babel/polyfill','./src/lotto/lotto.js'],    
  },  
  plugins: [    
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),   
    // new HtmlWebpackPlugin({
    //   title : 'index',
    //   hash : true,
    //   filename : 'index.html',
    //   excludeChunks : ['es_test', 'lotto'], // entry에서 해당 리스트를 제외한 나머지
    // }),
    // new HtmlWebpackPlugin({
    //   title : 'index',
    //   hash : true,
    //   filename : 'index.html',
    //   chunks : ['index'],
    // }),
    // new HtmlWebpackPlugin({
    //   title : 'es_test',
    //   hash : true,
    //   filename : 'es_test.html',
    //   chunks : ['es_test'], 
    // }),
    new HtmlWebpackPlugin({
      title : '로또',
      hash : true,
      filename : 'lotto.html',
      chunks : ['lotto'], 
    }),
    
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',      
    }),

    new webpack.ProvidePlugin({
        _: 'lodash',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    // chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),    
  },  
  target: ['web', 'es3'],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules)|(dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],                        
          }          
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
            ,options: {
              publicPath: '',
            } 
          },
          // MiniCssExtractPlugin.loader,
          // 'style-loader',           
          // 'css-loader',
          // {
          //   loader: 'style-loader',
          // },
          {
            loader: 'css-loader',   
            options: {
              sourceMap: true,
            }         

          },
          {
            loader: 'postcss-loader',
            options: {            
              // config: { path: path.resolve(__dirname, "postcss.config.js") },
              sourceMap: true,
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
                outputStyle: "compressed",              
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     {
       test: /\.(csv|tsv)$/i,
       use: ['csv-loader'],
     },
     {
       test: /\.xml$/i,
       use: ['xml-loader'],
     },
      
    ],
  },  
  optimization: {    
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all'
    //     }
    //   }
    // }  

    

  },
};