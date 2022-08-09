/** @type {import('@sveltejs/kit').RequestHandler} */
export function GET(event) {
	// log all headers
	console.log(event.clientAddress);

	return {
		body: {
			// retrieve a specific header
			ipAddress: event.clientAddress,
			userAgent: event.request.headers.get('user-agent'),
			referer: event.request.headers.get('referer')
		}
	};
}
