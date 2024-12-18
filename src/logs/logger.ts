import log4js from "log4js";

log4js.configure({
  appenders: {
	console: { type: "console" },
	fileAppender: { type: "file", filename: "./src/logs/logs.log" },
  },
  categories: {
	default: { appenders: ["console", "fileAppender"], level: "warn" },
  },
});

export const logger = log4js.getLogger();