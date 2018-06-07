'use strict';
var getStdin = require('get-stdin');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var postcssSafeParser = require('postcss-safe-parser');
var postcssScssParser = require('postcss-scss');

getStdin().then(function (data) {
	var opts = JSON.parse(process.argv[2]);

	var postcssParser = opts.is_css ? postcssSafeParser : postcssScssParser;

	postcss(autoprefixer(opts)).process(data, {
		parser: postcssParser,
		from: undefined
	})
	.then(function (result) {
		process.stdout.write(result.css);

		// TODO: log warnings in an non-error way somehow
		// var warnings = result.warnings();

		// if (warnings.length > 0) {
		// 	console.error(warnings.join('\n  '));
		// }
	}).catch(function (err) {
		if (err.name === 'CssSyntaxError') {
			err.message += '\n' + err.showSourceCode();
		}

		console.error(err.message.replace('<css input>:', ''));
	});
});
