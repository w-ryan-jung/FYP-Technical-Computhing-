import express from "express";
import { setupLogging } from "./logging.js";
import { setupProxies } from "./proxy.js";
import { ROUTES } from "./routes.js";
import { config } from "./config.js";
import { verifyToekn } from "./auth.js";

const app = express();
const port = config.host.port;

setupLogging(app);
setupProxies(app, verifyToekn, ROUTES);

app.listen(port, () => {
  console.log(`api gateway server on ${config.host.port}`);
});