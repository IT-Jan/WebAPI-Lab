const Koa = require('koa');

const app = new Koa();

const special = require('../out/routes/special');
const articles = require('../out/routes/articles');
const user = require('../out/routes/users');

app.use(special.router.routes());
app.use(articles.router.routes());
app.use(user.router.routes())

module.exports = app;
