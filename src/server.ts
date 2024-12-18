import express from "express";
import { initMongoDB } from "./config/db-connection";
import { logger } from "./logs/logger";
import { errorHandler } from "./middlewares/error-handler";
import productRouter from "./routes/product-router";

const app = express();

app.use(express.json());

app.use("/api/products", productRouter);

app.use(errorHandler);

initMongoDB()
	.then(() => {
		logger.info("Connected to MongoDB");
	})
	.catch((error) => {
		logger.error(error);
	});



app.listen(8080, () => {
	const currentTime = new Date().toLocaleString();
	console.log(`Server is running on http://localhost:8080 - ${currentTime}`);
});
