const express = require('express');
const authRoute = require('./userRoute');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
];

router.get('/', (req, res) => {
  res.json({
    message: 'Api den selamlar',
  });
});

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;