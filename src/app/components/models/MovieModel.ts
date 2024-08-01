export interface Movie
{
    id: number;
    title: string;
    releaseDate: Date;
    runtime: number;
    description: string;
    posterUrl: string;
    trailerUrl: string
    genres: string[];
}