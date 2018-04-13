const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: __dirname + "/src/app/index.js", 
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js', 
    publicPath: '/'
  },
  module: { 
    rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: [ /node_modules/ ]
			},
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
			template: __dirname + "/src/public/index.html",
			inject: 'body'
    }),
    new ExtractTextPlugin("styles.css"),
	],
  devServer: {
    contentBase: './src/public', 
    port: 8080
  },
  mode: 'development'
}