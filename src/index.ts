import {logger} from "./logger/logger";
if ("a" == "a") {
  console.log("dasds");
}
logger.info(`Starting app: ${process.env.NODE_ENV} mode`);
