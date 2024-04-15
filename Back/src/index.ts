import { createServer } from "http";
import createDebug from "debug";
import "dotenv/config";
import { createApp } from "./app.js";
import { exit } from "process";

const debug = createDebug("W7E:server");

const port = process.env.PORT ?? 3400;

const server = createServer(createApp());

server.listen(port);

server.on("error", (error) => {
  debug("Error", error);
  exit(1);
});

server.on("listening", () => {
  debug(`server open on http://localhost:${port}`);
});
