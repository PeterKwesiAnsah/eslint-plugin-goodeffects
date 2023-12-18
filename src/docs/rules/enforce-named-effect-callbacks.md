# ESLint Rule: `goodeffects/enforce-named-effect-callbacks`

## Rule Description

This ESLint rule is designed to improve code maintainability and readability by discouraging the use of anonymous functions as callbacks in the `useEffect` hook in React components. Instead of using anonymous functions directly, or nameless functions ,it is recommended to define named functions separately and then reference them in the `useEffect` or just named functions as callbacks in the `useEffect`.

## Rule Details

This rule triggers an error when it detects an anonymous function used directly as a callback in the `useEffect` hook:

```javascript
// Bad
useEffect(() => {
	// ...effect logic
}, [dependency]);

// Good
const trackUserEvents = () => {
	// ...effect logic
};

useEffect(trackUserEvents, [dependency]);

//OR

// Bad
useEffect(
   function () {
 // ...effect logic
	
},
  [dependency]
);

// Good
useEffect(function trackUserEvents() {}, [dependency]);
```
