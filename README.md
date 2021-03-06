# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

To run the application correctly have the back-end ( https://github.com/NinjaMSP/devicesTask_serverApp ) running on port 3000, otherwise you will need to change the .env file with the correct port of the back-end server

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#######################################################
### Test with cypress
### `for testing with the cypress interface`
npm run cypress:open
### `to run the tests in the terminal`
npm run cypress:ninja-flow

### IMPORTANT 
the tests are built to work with the original data, if the backend changes data there may be errors. To avoid this, when running the tests always keep the original backend database (restart the backend server)

the test will run the application on port 3001 for this the application must be running (npm start), if the port on which the server is running is not this one, indicate the correct path by changing the flow-spec file to the path => cypress > integration > flow-spec.js
#######################################################

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

