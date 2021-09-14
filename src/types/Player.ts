export interface Player {
    name: string;
    surname: string;
    fullName?: string;
    img: string;
    jerseys: Jersey[];
    id?: number;
}

export interface Jersey {
    title: string;
    img: string;
}