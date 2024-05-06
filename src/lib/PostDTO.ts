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

export const UpsertPostDTO = z.object({
	id: z.coerce.number().optional(),
	title: z.string().min(1),
	content: z.string().min(1),
});

export type UpsertPostDTO = z.infer<typeof UpsertPostDTO>;