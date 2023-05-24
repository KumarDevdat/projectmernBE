const express = require('express');
const router = express.Router();
const activityRoute = require('./activity.route')
// Middleware function
const myMiddleware = (req, res, next) => {
    next();
  };
  
  // Use the middleware function
  router.use(myMiddleware);
const defaultRoutes = [
    {
      path: '/exercise',
      route: activityRoute,
    },
];
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });

module.exports = router;  