import { Schema , model } from 'mongoose';
import { Product } from '../types/product-types';

const productSchema = new Schema<Product>({
	name: { 
		type: String, 
		required: true 
	},
	description: { 
		type: String, 
		required: true 
	},
	price: { 
		type: Number, 
		required: true 
	},
	stock: { 
		type: Number, 
		required: true 
	}
});

export const ProductModel = model('Products', productSchema);