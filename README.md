# Browse Beer Styles and Save Your Favorite

------TODO: Make it just /beers and /favorites, and ask him to use an ESlint file

## *Getting Started*
Start off by forking this repository into your own github profile. What you will specifically build out is detailed below. Commit often as you complete tasks.

## *Brief*
Create a simple 3-screen app for browsing beer styles. The “beers” page will display a list of beers. The “styles” page will display all the different beer styles and their descriptions. The “favorites” page will show two lists, of the beers and styles that the user has favorited.


 ## *Details*
Here is the API to use for this project: https://www.brewerydb.com/developers/docs You can easily register for a free developer account that allows 10k calls per day.

The beers page will use the /beers endpoint, and should have the option to sort alphabetically (ascending or descending), or by ABV (ascending or descending). There should also be a style filter dropdown that allows for selecting one of all the possible styles and showing only the beers of that style. Each beer entry will have some “favorite” button. The API returns up to 50 results per page, so have your screen do the same, with a “load more results” button at the bottom that will request the next page of results and then slot them in under existing ones, without any kind of page reload. (https://www.brewerydb.com/developers/docs/endpoint/beer-index)

The styles page will get its data from /styles and list out the names of all the styles, with a clickable “accordion” expansion to show the description of the style. Also have a link like “Browse beers of this style” alongside each name that brings the user to the beers page with that style filter selected. Finally, the user can click some “favorite” button alongside each style. (https://www.brewerydb.com/developers/docs/endpoint/style-index)

The favorites page will show a list of the beer names that the user has favorited, and a list of the beer styles they have favorited. A button alongside each allows them to “unfavorite”. For persisting those favorites even when the app is reloaded, make use of the browser’s localStorage. However the beer and style data should be requested fresh from the API each time the app is reloaded. Only supporting one user so just need to store one set of favorites in localStorage, no other user info.


 ## *Guidance (what we’d like to see)*
We’re interested in code quality and organization much more than a pretty appearance on the frontend. So don’t worry about spending a lot of time styling things, a very basic look is all you need.

Use Next.js, React, and either Redux or React's default `setState()` or Apollo for state management. You should make use of Next’s `getInitialProps()` lifecycle function, it will be used to get the data for populating your state https://nextjs.org/docs#fetching-data-and-component-lifecycle

Spend time at the start of the project to plan things out. You want to make sure that you have exactly as many reducers and actions as it would make sense to use.
