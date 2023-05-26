const path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : path.resolve(__dirname, "..", "./src/index.tsx"),
    resolve : {
        extensions : [".tsx", ".ts", ".jsx", ".js"]
    },
    module: {
        rules : [
            {
                test : /\.(ts|js)x?$/,
                exclude : "/node_modules/",
                //testing aja
                use : [
                    {loader : "babel-loader"}
                ]
                // use : ["babel-loader"]
            },
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader", "postcss-loader"]
            },
            //for file image
            {
                test : /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type : "asset/resource"
            },
            // for inline file (like svg o web font)
            {
                test : /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type : "asset/inline"
            },
        ]
    },
    output : {
        path : path.resolve(__dirname,"../", "dist"),
        filename : "bundle.js"
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "..", "./src/index.html")
        })
    ]
}
