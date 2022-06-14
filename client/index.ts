/*
 * @Descripttion: 
 * @Author: lukasavage
 * @Date: 2022-06-14 21:39:46
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-06-14 21:39:50
 * @FilePath: \next-and-nuxt\client\index.ts
 */
let Koa = require('koa');
let Router = require('koa-router');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: true });
const handler = app.getRequestHandler();
app.prepare().then(() => {
    const server = new Koa();
    let router = new Router();
    server.use(router.routes());
    server.use(async (ctx, next) => {
        await handler(ctx.req, ctx.res);
        ctx.response = false;
    });
    server.listen(3000, () => console.log('server started at port 3000'));
});
