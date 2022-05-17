import { Message } from "./message.model";

export class Sujet {
    id?: string;
    title?: string;
    likes?: number;
    messages!: Message[];
    createdDate?: Date;
    updatedDate?: Date;
}