# Twitter project



## Initial setup

### The Server


#### Install the backend dependencies

1. Navigate to the server folder `cd server`
2. Install the required packages `yarn install`
3. Once that's done you can start the server with `yarn start:server`

And that's it for the backend! No editing the code in server at all.

#### Install React for the frontend

You'll need to create the front-end using `create-react-app`. Run the following from _within the main workshop directory_:

1. If you just installed the server dependencies, you'll need to open a new terminal to get back to the main project directory.
2. Run the following command `npx create-react-app client`. This will create a new folder called `client` in the project. ALL of the work for this project will be done in there.
3. There are some additional dependencies that you will need for the project. Navigate to the client folder: `cd client`
4. Install the following dependencies with `yarn`:

- styled-components
- react-router-dom@5.3.0
- react-icons
- moment

After they're installed, you can run `yarn start` to start the front-end application.

>NOTE: Newer versions of React tend to be a bit wonky with react-router-dom v5. Remove `React.StrictMode` from the `index.js` of the client to fix this!

You can find instructions for running the server application in `server/API_/DOCS.md`

The cat silhouette logo is provided in `assets/logo.svg`

---



- Replying to tweets
- The other tabs on the profile page (Media / Likes)
- Attaching media to new tweets
- The "share" / "upload" button on tweets (only the "like" button should do anything)

Some of these features are optional stretch goals. For more information, see `STRETCH.md` once you have completed all the primary objectives.

---
