# Technical test ABBEAL

version 1.0 of the technical test carried out for ABBEAL - 18 FEV 2021

![alt text](https://res.cloudinary.com/viviennoel07/image/upload/v1645187003/pokemon/Capture_d_e%CC%81cran_2022-02-18_a%CC%80_13.21.54_fu7x4n.png)

# GETTING STARTED

### To start the webapp :

This webapp was developed with React in order to be close of the technology required. It includes a Backend and a database MongoDB and some data for the modelisation of the pokemon league.

#### Clone the repository

In order to clone the repository, run :

```
git clone https://github.com/viviennoel/pokedex.git
```

# BACKEND

##### The following command lines should be used from the folder 'backend'.

## Setup of the backend

This backend was created using Node & MongoDB.
```diff
- In order to start your project, you need to create a .env file at the root of the backend folder with the following information
- The .env file should be at the same level than the package.json
```

```
NODE_ENV_DB_ID=vivien_noel
NODE_ENV_DB_PASSWORD=O6FCWBl6umMi12cM
NODE_ENV_DB_NAME=pokedex
NODE_ENV_PORT=3001
```

Please remember that these information shouldn't be shared in a real project, as the .env file ensure that these information remain private.

### Getting started

In order to start your server, you need to install the dependencies using npm:
```
npm install
```

And then to enter the following command line:
```
npm run dev
```

##### The server is now listening.

You can therefore go to your frontend and start your application. 

***success! Your app is ready and ready to use at http://localhost:3001***


# FRONTEND

##### The following command lines should be used from the folder 'frontend'.

## Setup of the frontend

This frontend was created using React.
```diff
- In order to start your project, you need to create a .env file at the root of the fontend folder with the following information
- The .env file should be at the same level than the package.json
```

```
REACT_APP_API_ENDPOINT=http://localhost:3001
```

Please remember that these information shouldn't be shared in a real project, as the .env file ensure that these information remain private.

### Getting started

#### Install packages

In order to preserve the security ans integrity of the solution, the vulnerabilities need to be corrected and the packages deprecated updated.

In order to install the packages, use the command bellow:

```
npm install
```

###### The command npm ci is used to download the correcetd dependencies, once the package-lock have been updated.

## Project setup

### Compiles and hot-reloads for development

Now that npm have installed the dependencies, you can start the web application with the following command:

```
npm start
```

# Unit tests

You can then launch the unit tests with the following commands.
N.B: A test plan need to be established for an application in order to test every behavior. Because of the time allowed to this test, this plan haven't been complited and no E2E tests have been created.  

### Run your unit tests

In order to run the unit tests, use the command bellow.
You need to go to the folder 'frontend' and run:

```
npm run test
```

The following result is expected if the tests are passed successfully.
expected output:

![alt text](https://res.cloudinary.com/viviennoel07/image/upload/v1645187649/pokemon/Capture_d_e%CC%81cran_2022-02-18_a%CC%80_13.33.58_hvdzfp.png)

# KEY FUNCTIONALITIES OF THIS EXERCISE

## The requirements

#### Acceptance criteria :

- Have a search bar to type the name of the Pokémon
- Have a dark background so as not to burn the user's eyes
- Have a list of all the Pokémon available
- Have the sprite of each Pokémon (the front image)
- Have the Pokémon number
- Have the type(s) of the Pokémon

#### Bonus :

- Added to the Pokémon search the possibility to find it via its number
- I want to have unit tests to protect my display.
- Animation during user interactions. (hover, scrolling, display...)

# VULNERABILITY

the command 'npm audit' allows us to identify clearly the vulnerabilities of the application.
The vulnerabilities haven't been corrected yetfor this application.

# TESTS AND AREAS OF IMPROVEMENT

##### Browser compatibility

The webapp have been tested on Edge, Chrome, Internet Eplorer.
The ares of improvement will be discussed in the interview


# REACT GENERAL INFORMATION
# ------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



