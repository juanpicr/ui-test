# Rule of Thumb

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Acceptance Criteria

Below you will find the minimum requirements we need to consider this challenge as completed 🎉

1. [x] The interactive component should meet the design criteria
2. [x] In mobile version, cards **should only** be displayed as a list of cards, with horizontal scrolling and overflow.
3. [x] In tablet and desktop versions, user **should be able to switch views** between _list view_ and _grid view_, using the dropdown menu, which should be located at the top right section of the component.
    1. If the _list view_ is selected, all cards should be stacked vertically, according to the design specs.
    2. If the _grid view_ is selected, all cards should be positioned as a grid of elements, according to the design specs.
4. [x] Each card should contain a **gauge bar** at the bottom, which will display the distribution of positive and negative votes **as a percentage**. (See `assets/data.json` for reference).
5. [x] Each card should contain three buttons: a **"thumbs down" (yellow)**, a **"thumbs up" (teal)** and a "Vote now" button **which should be disabled** by default.
    1. If either "thumbs up" or "thumbs down" button is pressed, it should **toggle the selected state of that button** (denoted as a white border, see design specs for reference), and enable the "Vote Now" button.
    2. If "Vote Now" button is pressed, **that vote should be posted**, and three other things should happen:
        1. Eyebrow text should change to the copy "Thank you for your vote!"
        2. "Vote now" text should change to the copy "Vote Again"
        3. The **gauge bar** below should reflect the changes in the registered data and **percentage should be updated**.
    3. If "Vote Again" button is pressed, all buttons should return to the initial state, and all modified copy texts should be reverted to their original state. The gauge bar, however, should persist the votes already posted.
6. [x] **All posted votes should be persisted** by any means, and should be exactly the same count, even if the page is refreshed. Use _any_ persistance mechanisms you prefer: LocalStorage, Cookies, IndexedDB, URL params, a Back End service (Firebase, DynamoDB, Redis, etc).

