import preprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: node(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			server: {
				watch: {
					usePolling: true
				},
				hmr: {
					protocol: 'ws',
					host: 'localhost',
					port: 80,
				},
			},
		}
	}
};

export default config;
