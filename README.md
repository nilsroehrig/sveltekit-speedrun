# SvelteKit SpeedRun

This is a companion repository for my Talk "SvelteKit SpeedRun - Up And Running in 30 Minutes or less". It features the starting point and numerous other checkpoints for the live coding session presented in said talk. During the session, a minimal blog app is written for and deployed to [Cloudflare Pages](https://developers.cloudflare.com/pages/). The app implements CRUD operations with [SvelteKit form actions](https://kit.svelte.dev/docs/form-actions) making use of the [Cloudflare D1 Database](https://developers.cloudflare.com/d1/) to store it's information. It features a simple authentication mechanic using [Auth.js](https://authjs.dev/reference/sveltekit) with [GitHub](https://github.com) as it's provider.

## Preparation
To ensure working condition, you need a Cloudflare account with an available D1 database as well as a GitHub account with an active OAuth app according to the [Auth.js-Docs](https://authjs.dev/getting-started/providers/github). Once set up, you can use the provided info to create both an `.env.local` as well as a `wrangler.toml` file. See the according `.example` files for reference. Last but not least you need to create a local database for posts storage:

```bash
# If not done already, login with the Wrangler CLI tool
npx wrangler login

# Create the local database
npx wrangler d1 execute sveltekit-speedrun --local --file="./db/schema.sql"
```

After these steps are done, you should be good to go.

## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Deployment
First and foremost, you need to create an application on your [Cloudflare Dashboard](https://dash.cloudflare.com/). The instructions for the [Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/) work best with this repository. If you've not yet created a D1 Database, you can do so either on the Cloudflare Dashboard follow the instructions in the [D1 docs](https://developers.cloudflare.com/d1/get-started/). The database should be named `sveltekit-speedrun` and it should be bound to the new application at the variable name `DB`. After that, you can run create the schema in the remote database:

```bash
npx wrangler d1 execute sveltekit-speedrun --remote --file="./db/schema.sql"
```

Lastly, make sure that all environment variables defined in .env.local are appropriately defined for your Cloudflare app as well. Be aware, that the minimum Node.js version for the build process is 18.19. Make sure to set the environment variable `NODE_VERSION` to `18.19` or greater. Any commits to the appropriate branches of your repository should now be build and deployed to Cloudflare. The access to the remote database should also be working just fine.