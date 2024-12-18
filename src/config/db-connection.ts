import { connect } from "mongoose";
import config from "./config";

export const initMongoDB = async (): Promise<void> => {
	try {
		await connect(config.MONGO_URL);

	} catch (error) {
		console.error(error);
		throw new Error("Error connecting to MongoDB");
	}
}