import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import fs from 'fs';

export const load: PageServerLoad = async ({}) => {
	try {
		const posts = fs.readdirSync(`src/content/posts/`);

		return {
			posts
		};
	} catch (err) {
		console.error(err);
		error(404, 'not found');
	}
};
