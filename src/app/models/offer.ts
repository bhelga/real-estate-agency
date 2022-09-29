import { Review } from "./review";
import { User } from "./user";

export interface Offer {
    id: number;
    title: string;
    description: string;
    price: number;
    square: number;
    offerType: number;
    buyType: number;
    userId?: number;
    user: User;
}