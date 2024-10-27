const hello = (name_1: string, name_2: string): string => {
	return `Hello, ${name_1} with ${name_2}!`
}

console.log(hello('TypeScript', 'Webpack'))

/*
 * Check env mode for development and build
 * npm run dev => Running in development mode
 * npm run build:prod && npm start => Running in production mode
 */
if (process.env.NODE_ENV === 'development') {
	console.log('Running in development mode')
}

if (process.env.NODE_ENV === 'production') {
	console.log('Running in production mode')
}
