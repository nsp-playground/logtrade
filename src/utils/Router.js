import parseQueryString from "./parseQueryString.js";

const Router = (
  routes = [], 
  query = 'page', 
  fallbackRoute,
) => {
  if (!routes || !routes.length) {
    console.info('No routes detected, rendering default fallback page');
    return fallbackRoute.page(fallbackRoute?.props || {});
  }

  if (!fallbackRoute) {
    console.log('Please provide a `fallbackRoute` property to router')
  }

  const parsedQuery = parseQueryString(window?.location?.search);

  if (!parsedQuery[query]) {
    console.info(`No [${query}] query detected, rendering default fallback page`);
    return fallbackRoute.page(fallbackRoute?.props || {});
  }
  
  const matchingPage = routes.find(route => 
    route.matchingQuery.toLowerCase() === parsedQuery[query].toLowerCase());
  

  if (!matchingPage) {
    console.info(`No matching [${query}] query detected, rendering default fallback page`);
    return fallbackRoute.page(fallbackRoute?.props || {});
  } else {
    console.info(
      `Matching [${query}] query detected, rendering [${matchingPage.matchingQuery}] page`
    );
    return matchingPage.page(matchingPage?.props || {});
  }
};

export default Router;