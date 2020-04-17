import { Document } from 'mongoose';

export interface User extends Document {
    readonly id: string;
    readonly username: string;
    readonly discordId: string;
    readonly nintendoFriendCode: string;
    readonly twitter: string;
    readonly password: string;
}