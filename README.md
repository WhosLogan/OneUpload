# OneUpload
A easy and secure way to receive files from customers, friends, and pretty much everyone!

Built on top of the Xata database platform (https://xata.io)

## Getting Started
To get started, create a new Xata database and import the schema (schema.json). Afterward, create a GitHub OAuth2
application. Then fill out the environment variables and enjoy uploading!

## Developing
Once installed dependencies with `npm install` (or `pnpm install` or `yarn`), set the proper environment variables 
listed below and start a development server with `npm run dev`

## Environment Variables
| Name          | Description                                                |
|---------------|------------------------------------------------------------|
| XATA_BRANCH   | The name of the database branch in Xata                    |
| XATA_API_KEY  | Your Xata API key                                          |
| GITHUB_ID     | The id of your GitHub OAuth2 app                           |
| GITHUB_SECRET | The secret of your GitHub OAuth2 app                       |
| AUTH_SECRET   | The authentication secret used by Auth.js                  |
| EMAIL         | The email to be authorized to be used with the admin panel |


## TODO
- [ ] Add client side file size validation on the form so that the user doesn't have to upload the file to see it's above the limit
- [ ] Support multiple users
- [ ] Extensive input validation on the admin panel side to ensure things like max file size cannot be zero
- [ ] Make the admin panel look a little nicer (especially the number input)

## Building
To create a production version of OneUpload use `npm run build`

You can preview the production build with `npm run preview`.

> To deploy OneUpload, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Credits
- [Xata](https://xata.io) - An amazing and generous database platform with lots to offer
- [Flowbite](https://flowbite.com) - An awesome UI library that rapidly accelerated the development of OneUploads' UI
- [Auth.js](https://authjs.dev) - An open source authentication library and OAuth2 client
- [Svelte](https://svelte.dev) - The foundation for this entire project and an excellent fullstack web framework