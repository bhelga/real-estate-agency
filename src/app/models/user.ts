import { Offer } from "./offer";
import { Review } from "./review";

export interface User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    telephone: string;
    email: string;
    login: string;
    password: string;
    role: number;
}