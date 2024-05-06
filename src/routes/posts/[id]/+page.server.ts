import { UpsertPostDTO } from '$lib/PostDTO.js';
import { error, fail, redirect } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';

export async function load({ locals, platform, params }) {
	const session = await locals.auth();

	if (!session) {
		error(401);
	}

	if (!platform) {
		error(500);
	}

	if (params.id === 'new') {
		return {
			post: null
		};
	}

	const post = await platform.env.DB.prepare(
		'SELECT id, title, content, author_name, created_at, modified_at FROM posts WHERE id = ?'
	)
		.bind(params.id)
		.first();

	if (!post) {
		error(404);
	}

	return {
		post
	};
}

export const actions = {
	async upsert({ locals, platform, params, request }) {
		const session = await locals.auth();

		if (!session) {
			error(401);
		}

		if (!platform) {
			error(500);
		}

		const formData = zfd.formData(UpsertPostDTO).safeParse(await request.formData());

		if (!formData.success) {
			return fail(400, {
				message: 'Ungültige Eingabe',
				errors: formData.error.formErrors.fieldErrors
			});
		}

		if (params.id === 'new') {
			await platform.env.DB.prepare(
				'INSERT INTO posts (title, content, author_name, author_email) VALUES (?, ?, ?, ?)'
			)
				.bind(formData.data.title, formData.data.content, session.user?.name, session.user?.email)
				.run();
		} else {
			await platform.env.DB.prepare(
				'UPDATE posts SET title = ?, content = ? WHERE id = ?'
			)
				.bind(formData.data.title, formData.data.content, params.id)
				.run();
		}

		redirect(302, '/');
	}
};
