/** @type {import('@sveltejs/kit').RequestHandler} */
export function GET(event) {
	// log all headers
	console.log(...event.request.headers);

	return {
		body: {
			// retrieve a specific header
			host: event.request.headers.get('host'),
			userAgent: event.request.headers.get('user-agent')
		}
	};
}
