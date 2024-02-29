# Chuck Norris Jokes Example

This example showcases the [chucknorris-api](https://api.chucknorris.io/).

## Technologies

-   Nextjs
-   tanstack react-query (never used it, so i wanted to try it out)
-   Redix UI

## Some thoughts

### What i did

-   follwoed the KISS (but not simpler) principle
-   I implemented the abort controller api to abort the request when the user navigates away from the page or if the user is thrashing the shuffle button.
-   tried to keep as close to the requirements as possible

### What i didn't

-   did not use SSR as the API is public and not hosted at the same data center as the frontend. IMHO there would no advantage in doing so.
-   did not use a state management library as i did not want to introduce a new dependency.
-   did not implement the 404 page 🙈
-   did no optimization of any kind (ui / performance / bundlesize etc.)
-   No unit-tests as required 😭
-   Could have used `fetch` instead of `axios`, but i wanted to try out latest `axios` version even if i used very little of the api.

## How to use

```
npm run dev
```
