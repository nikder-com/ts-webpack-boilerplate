const hello = (name_1: string, name_2: string): string => {
	return `Hello ${name_1} with ${name_2}!`
}

// Check in Terminal => Hello Typescript with Webpack!
console.log(hello('TypeScript', 'Webpack'))

/*
 *
 * * * * * * * * * * * * * * * * * * * *
 * npm run dev => Running development  *
 * * * * * * * * * * * * * * * * * * * *
 *
 * Check env mode for development and build
 * npm run build:dev && npm start => Running build in development mode
 * npm run build:prod && npm start => Running build in production mode
 */
if (process.env.NODE_ENV === 'development') {
	console.log('Running in development mode')
}

if (process.env.NODE_ENV === 'production') {
	console.log('Running in production mode')
}
