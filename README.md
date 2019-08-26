# Browse Beer Styles and Save Your Favorite


## *Getting Started*
Start off by forking this repository into your own github profile. What you will specifically build out is detailed below. Commit often as you complete tasks.


## *Brief*
Create a simple 2-screen app for browsing beer styles. The “beers” page will display a list of all beers, with a button that allows you to "favorite" any of them. The “favorites” page will show a list of all the beers that the user has favorited.


 ## *Details*
Here is the API to use for this project: https://www.brewerydb.com/developers/docs You can easily register for a free developer account that allows 10k calls per day.

The beers page will use the `/beers` endpoint, and should have the option to sort alphabetically (ascending or descending) by beer name. The API returns up to 50 results per page, so have your screen do the same, with a “load more results” button at the bottom that will request the next page of results and then slot them in under existing ones, without any kind of page reload. (https://www.brewerydb.com/developers/docs/endpoint/beer-index)

Each beer entry will have a “favorite” button beside it, which will toggle whether or not that beer is a part of the user's list of favorite beers, stored in the Redux state. The favorites page will show a list of the beer names that the user has favorited. A button alongside each should allow them to “unfavorite”. You only need to support one user, and they don't need to go through any kind of login process, so the user state will likely just consist of the list of their favorites.

You should use the `.eslint` file included in this project to ensure that your code formatting is consistent with our practices. Look for linter plugins that support ESLint for whatever your text editior of choice is.


 ## *Guidance (what we’d like to see)*
We’re interested in code quality and organization much more than a pretty appearance on the frontend. So don’t worry about spending a lot of time styling things, a very basic look is all you need.

Use Next.js, React, and either Redux or React's default `setState()` or Apollo for state management. You should make use of Next’s `getInitialProps()` lifecycle function, it will be used to get the data for populating your state https://nextjs.org/docs#fetching-data-and-component-lifecycle

Spend time at the start of the project to plan things out. You want to make sure that you have exactly as many reducers and actions as it would make sense to use.


## Bonus points
Next.js
