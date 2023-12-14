'use strict';

const path = require('path');
const rule = require('../enforce-named-effect-callbacks');
const fs = require('fs');
const RuleTester = require('eslint').RuleTester;
const invalidExpression = fs.readFileSync(
	path.join(__dirname, 'invalid-expressions.js'),
	'utf-8'
);
const validExpression = fs.readFileSync(
	path.join(__dirname, 'valid-expressions.js'),
	'utf-8'
);

const ruleTester = new RuleTester({
	parserOptions: { ecmaVersion: 2015, sourceType: 'module' },
});

try {
	ruleTester.run('enforce-named-effect-callbacks', rule, {
		valid: [
			{
				code: validExpression,
				//options: [{ allowFoo: true }],
			},
		],

		invalid: [
			{
				code: invalidExpression,
				errors: [
					{
						message:
							'What does this effect do?? Consider using a named function expression rather than FunctionExpression, to provide meaningfull context to the effect.',
					},
				],
			},
		],
	});
} catch (e) {
	console.error(e);
}
