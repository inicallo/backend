type IAuthor = {
    id: number,
    role: string;
}

declare namespace Express {
    export interface Request {
        author? :IAuthor
    }
}