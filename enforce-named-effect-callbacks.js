const reportMessage =
	'What does this effect do?? Consider using a named function expression rather than {{functionType}}, to provide meaningfull context to the effect.';

module.exports = {
	type: 'suggestion',
	docs: {
		description:
			'This rule enforces named functions to be used as callbacks in useEffects. This provides more context of the effect significantly improving readability of the code base',
		recommended: true,
	},
	hasSuggestions: true,
	schema: [],
	create(context) {
		function narrowDownInvalidExpression(node) {
			if (
				node.arguments[0]?.type === 'ArrowFunctionExpression' ||
				(node.arguments[0]?.type === 'FunctionExpression' &&
					node.arguments[0].id === null)
			) {
				context.report({
					node,
					message: reportMessage,
					data: {
						functionType: node.arguments[0]?.type,
					},
				});
			}
		}
		return {
			CallExpression(node) {
				//useEffect without React NameSpace or imported directly from React
				if (
					node.callee.type === 'Identifier' &&
					node.callee.name === 'useEffect'
				) {
					narrowDownInvalidExpression(node);
				}
				//Accessing useEffect as property from an object
				else if (
					node.callee.object.type === 'Identifier' &&
					node.callee.property.name === 'useEffect'
				) {
					narrowDownInvalidExpression(node);
				}
			},
		};
	},
};
