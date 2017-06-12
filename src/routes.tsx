import * as Koa from "koa";
import * as Router from "koa-router";
// import { renderToString } from "react-dom/server";
// import * as React from "react";
// import App from "../client/App";

const app = new Koa;
const router = new Router;

router.get("/", function(ctx, next)
{
  ctx.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Crusoe</title>
      </head>
      <body>
        <main id="app"></main>
        <script src="public/bundle.js"></script>
      </body>
    </html>
  `;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8008, function()
{
  console.log("Listening on port 8008");
});

