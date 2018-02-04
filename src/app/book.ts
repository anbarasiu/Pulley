export class Book {
    title: string;
    isbn: string;
    description: string;
    author: string;
    'average_rating': number;
}

export class Author {
    name: string
}

export class Authors {
    author: Author
}

export class Review {
    book: Book;
    'date_added': Date;
}

export class Reviews {
    '@end': string;
    '@start': string;
    '@total': string;
    review: Review[]
}

export class Heading {
    title: string;
    isSorted: boolean;
    key1: string;
    key2?: string;
}