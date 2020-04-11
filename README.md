# Rehab Frontend Technical Test

Hi there! 👋 Well done for getting to the the technical test part of the interview process with us and thanks for taking the time out to do this. The summary below tells you all about the task at hand.

Everybody has stuff to do outside of work and we understand that sometimes these technical tests can take a long time. So, please try not to spend more than 3-4 hours on this task.

If finding the time is an issue or if you need any adjustments made because of your personal circumstances, please let us know as soon as possible.

To submit your work, you can either

- push your work to this repository in Gitlab
- or just ZIP up your work and send it back to us (without the `node_modules` folder)

Good luck!

### Summary

Rehab are building a new Employee database to help new joiners get to know their fellow employees. The application has an API that supplies all the employee data we need (for the purposes of this test, it uses https://reqres.in, which is a dummy API), and the frontend is a React application.

You won’t get time to implement all the requirements below, and that’s intentional - don’t worry! Pick the features that you think are most important, and that you feel best showcase your skills.

For example, if you’re more into the design side-of-things you may want to choose features that are user-interface focused. If you’re experienced using React/Redux, perhaps choose to advance the Redux functionality. If you’re mad about testing, introduce some reliable tests.

The purpose of this exercise is to see how you go about the work and where your strengths lie. Feel free to change the folder structure, add/edit/delete files, and add any dependencies you feel will help deliver the requirements.

### Requirements

- The design team at Rehab have provided a high-level wireframe of the application (see `/design` folder). Lay out the application according to the wireframe as closely as possible. You could use a CSS framework/library, or do it yourself.
- How can we break out the various parts into individual components? Create some components in the ‘components’ folder and use them.
- It would be useful for new starters to be able to see photos of their fellow employees. Add the photos to the listings.
- Currently we only get the first five employees back from the API. How can we get them all? Could we add pagination to make things easier to navigate for the user?
- It’s useful for new joiners to know who they’ve met. Using the Redux store, add functionality to mark an employee as ‘met’. Also using the Redux store, build a page, view, or component that lists those that have been met.
- Lots of people are going to rely on this application! How can we add some tests to the application to make sure it does what we need? Perhaps start by adding a test to an Employee component to check that it renders what we are expecting it to.

_Pick the requirements that you have time to deliver (you very likely won’t get time to do them all) and you think best showcase your skills._

## Running the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn`

You will need to do this before running the application for the first time.

### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
