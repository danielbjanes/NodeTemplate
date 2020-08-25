import next from "next";
import express, { Request, Response } from "express";

import config from "./config";

const dev = true;
const port = config.port;

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  express()
    .all("*", (req: Request, res: Response) => {
      return handler(req, res);
    })
    .listen(port, (err?: Error) => {
      if (err) {
        throw err;
      }
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
});
