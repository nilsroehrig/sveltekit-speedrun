import { z } from 'zod';

export const PostDTO = z.object({
	id: z.number(),
	title: z.string(),
	content: z.string(),
	author_name: z.string(),
	created_at: z.coerce.date(),
	modified_at: z.coerce.date()
});

export type PostDTO = z.infer<typeof PostDTO>;
