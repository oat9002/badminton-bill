# badminton-bill

## Database structure

```
user
    - id
    - name - string
    - created_when
transaction
    - id
    - paid - boolean
    - amount - decimal
    - users - list
        - id
        - name - string
        - paid - boolean
        - amount - decimal
    - created_when - datetime
    - lastupdated_when - datetime
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
