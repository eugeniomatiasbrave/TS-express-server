import { Document } from "mongoose";

export interface Product {
	name: string;
	description: string;
	price: number;
	stock: number;
}

export type ProductType = {
	name: string;
	description: string;
	price: number;
	stock: number;
}

export type ProductMongoose = Product & Document