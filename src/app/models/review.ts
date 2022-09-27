import { Offer } from "./offer";
import { User } from "./user";

export interface Review {
    id: number;
    review: string;
    offerId?: number;
    userId?: number;
    offer: Offer;
    user: User;
}