import type { themes } from './theme/map.types';

export const theme: themes = {
	one: {
		one: '--darkness',
		two: '--burlywood',
		three: '--darkpurple',
		four: '--tan',
		five: '--dark-gold'
	},
	two: {
		one: '--color-primary-dark-blue',
		two: '--color-light-neutral',
		three: '--color-security-purple',
		four: '--color-highlight-orange',
		five: '--color-teal-accent'
	},
	three: {
		one: '--color-highlight-orange',
		two: '--color-light-neutral',
		three: '--color-security-purple',
		four: '--color-primary-dark-blue',
		five: '--color-primary-dark-blue'
	},
	four: {
		one: '--color-security-purple',
		two: '--color-primary-dark-blue',
		three: '--color-highlight-orange',
		four: '--color-light-neutral',
		five: '--color-light-neutral'
	}
};

export const logo: themes = {
	one: {
		one: '--color-accent-blue',
		two: '--color-security-purple'
	},
	two: {
		one: '--color-highlight-orange',
		two: '--color-security-purple'
	},
	three: {
		one: '--color-accent-blue',
		two: '--color-highlight-orange'
	},
	four: {
		one: '--color-security-purple',
		two: '--color-light-neutral'
	}
};

export const button: themes = {
	one: {
		one: '--color-highlight-orange',
		two: '--color-accent-blue',
		three: '--color-light-neutral',
		four: '--color-light-neutral',
		five: '--border-none',
		six: '--color-primary-dark-blue'
	},
	two: {
		one: '--color-accent-blue',
		two: '--color-highlight-orange',
		three: '--color-light-neutral',
		four: '--color-light-neutral',
		five: '--border-none',
		six: '--color-primary-dark-blue'
	},
	three: {
		one: '--color-light-neutral',
		two: '--color-highlight-orange',
		three: '--color-highlight-orange',
		four: '--color-light-neutral',
		five: '--border-solid',
		six: '--color-highlight-orange'
	},
	four: {
		one: '--color-light-neutral',
		two: '--color-accent-blue',
		three: '--color-accent-blue',
		four: '--color-light-neutral',
		five: '--border-solid',
		six: '--color-accent-blue'
	}
};

export const form: themes = {
	one: {
		one: '--darkness',
		two: '--white',
		three: '--tan',
		four: '--dark-gold',
		five: '--deep-purple',
		six: '--passion',
		seven: '--white-smoke',
		eight: '--burlywood'
	},
	// Light blue
	two: {
		one: '--floral-white',
		two: 'inherit',
		three: '--floral-white',
		four: '--dark-gold',
		five: '--deep-purple',
		six: '--passion',
		seven: '--burlywood',
		eight: '--indian-red'
	},
	three: {
		one: '--floral-white', //bg
		two: '--dark-gold', //Text
		three: '--dark-gold', //highlight
		four: '--passion', //Success
		five: '--burlywood', //Warn
		six: '--indian-red' //Error
	},
	// Light blue
	four: {
		one: '--color-primary-dark-blue', //bg
		two: '--color-light-neutral', //Text
		three: '--color-highlight-orange', //highlight
		four: '--color-functional-green', //Success
		five: '--color-highlight-orange', //Warn
		six: '--color-alert-red' //Error
	},
	five: {
		one: '--color-light-neutral', //bg
		two: '--color-primary-dark-blue', //Text
		three: '--color-security-purple', //highlight
		four: '--color-functional-green', //Success
		five: '--color-highlight-orange', //Warn
		six: '--color-alert-red' //Error
	},
	// Light blue
	six: {
		one: '--color-primary-dark-blue', //bg
		two: '--color-light-neutral', //Text
		three: '--color-security-purple', //highlight
		four: '--color-functional-green', //Success
		five: '--color-highlight-orange', //Warn
		six: '--color-alert-red' //Error
	}
};
