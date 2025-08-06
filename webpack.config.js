"use strict";

const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

/** @type {import("webpack").Configuration} */
module.exports = {
	mode: "production",
	entry: {
		eslint: "./lib/linter/linter.js",
	},
	output: {
		filename: "[name].js",
		library: "[name]",
		libraryTarget: "umd",
		globalObject: "this",
	},
	module: {
		rules: [
			{
				test: /\.m?js$/u,
				loader: "babel-loader",
				options: {
					presets: [
						[
							"@babel/preset-env",
							{
								debug: false,
								targets: ">0.5%, not chrome 49, not ie 11, not safari 5.1",
								useBuiltIns: "usage",
								corejs: 3,
							},
						],
					],
				},
			},
		],
	},
	plugins: [
		new webpack.NormalModuleReplacementPlugin(/^node:/u, resource => {
			resource.request = resource.request.replace(/^node:/u, "");
		}),
		new NodePolyfillPlugin(),
	],
	resolve: {
		mainFields: ["browser", "main", "module"],
	},
	stats: "errors-only",
	optimization: {
		minimize: true,
	},
};
