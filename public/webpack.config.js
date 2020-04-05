const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new WebpackPwaManifest({
      name: "Budget App",
      short_name: "Budget",
      description: "An application that allows you keep a budget, adding and subtracting expanses and seeing a visual representation.",
      background_color: "#01579b",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/",
      icons: [{
        src: path.resolve("icons/icon-192x192.png"),
        sizes: [192, 512],
        destination: path.join("icons", "")
      }]
    })
  ]
};

module.exports = config;
