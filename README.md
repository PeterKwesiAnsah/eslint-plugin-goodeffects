# eslint-plugin-goodeffects

[![npm version](https://badge.fury.io/js/eslint-plugin-goodeffects.svg)](https://www.npmjs.com/package/eslint-plugin-goodeffects)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

An ESLint Plugin dedicated to enhancing code quality by enforcing best practices when utilizing the useEffect hook in React applications.

## Installation

Install the package via npm:

```bash
npm install --save-dev eslint-plugin-goodeffects
```

## Usage

```json
//...your eslint configuration
{
	"plugins": ["goodeffects"],
	"rules": {
		"goodeffects/enforceNamedEffectCallbacks": "error"
	}
}
```

## Contributing to eslint-plugin-goodeffects

Thank you for considering [contributing](https://github.com/PeterKwesiAnsah/enforce-named-effect-callbacks/blob/main/CONTRIBUTING.md) to eslint-plugin-goodeffects!🚀
