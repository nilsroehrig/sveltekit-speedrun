import { PostDTO } from '$lib/PostDTO.js';
import type { D1Response, D1Result } from '@cloudflare/workers-types';
import { error } from '@sveltejs/kit';

export async function load({ platform }) {
	if (!platform) {
		error(500);
	}

	const postsQuery = await platform.env.DB.prepare(
		'SELECT id, title, content, author_name, created_at, modified_at FROM posts'
	).run();

	if (!isD1Result(postsQuery)) {
		error(500);
	}

	return {
		posts: postsQuery.results.map((post) => PostDTO.parse(post))
	};
}

function isD1Result(res?: D1Response): res is D1Result {
	return !!res && res.success;
}
