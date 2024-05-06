import {
	AUTH_SECRET,
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
	ORG_DOMAIN
} from '$env/static/private';
import { SvelteKitAuth } from '@auth/sveltekit';
import github from '@auth/sveltekit/providers/github';

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [
		github({
			clientId: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET
		})
	],
	callbacks: {
		signIn({ profile }) {
			return !!profile?.email?.endsWith(ORG_DOMAIN);
		}
	},
	secret: AUTH_SECRET
});
