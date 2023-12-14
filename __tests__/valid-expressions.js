React.useEffect(function trackEvents() {}, []);
useEffect(function trackEvents() {}, []);
function myEffectOne() {
	// Your effect logic here
}

useEffect(myEffectOne, [
	/* dependency array */
]);

const myEffect = () => {
	// Your effect logic here
};

useEffect(myEffect, [
	/* dependency array */
]);

function myEffectTwo() {
	// Your effect logic here
}

React.useEffect(myEffectTwo, [
	/* dependency array */
]);

const myEffectThree = () => {
	// Your effect logic here
};

React.useEffect(myEffectThree, [
	/* dependency array */
]);
