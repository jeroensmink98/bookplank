import { GOOGLE_BOOKS_API_URL } from "$env/static/private";
import { type RequestHandler } from "@sveltejs/kit";
import { newBookPreview } from '../../../stores';
import type { BookInfo } from '../../../models/book';

export const GET: RequestHandler = async ({ url }) => {
    const isbn = String(url.searchParams.get('isbn'));

    if (!isbn) {
        return new Response(JSON.stringify({ error: 'ISBN parameter is required' }), { status: 400 });
    }

    const res = await fetch(`${GOOGLE_BOOKS_API_URL}/volumes?q=isbn:${isbn}`);

    if (!res.ok) {
        return new Response(JSON.stringify({ error: 'Failed to fetch book data' }), { status: 500 });
    }

    const bookData = await res.json();

    if (bookData.totalItems === 0) {
        return new Response(JSON.stringify({ error: 'No books found for the given ISBN' }), { status: 404 });
    }

    const firstBook = bookData.items[0];

    const bookInfo: BookInfo = {
        title: firstBook.volumeInfo.title,
        subtitle: firstBook.volumeInfo.subtitle,
        authors: firstBook.volumeInfo.authors,
        publisher: firstBook.volumeInfo.publisher,
        publishedDate: firstBook.volumeInfo.publishedDate,
        description: firstBook.volumeInfo.description,
        industryIdentifiers: firstBook.volumeInfo.industryIdentifiers,
        readingModes: firstBook.volumeInfo.readingModes,
        pageCount: firstBook.volumeInfo.pageCount,
        printType: firstBook.volumeInfo.printType,
        categories: firstBook.volumeInfo.categories,
        maturityRating: firstBook.volumeInfo.maturityRating,
        allowAnonLogging: firstBook.volumeInfo.allowAnonLogging,
        contentVersion: firstBook.volumeInfo.contentVersion,
        panelizationSummary: firstBook.volumeInfo.panelizationSummary,
        imageLinks: firstBook.volumeInfo.imageLinks,
        language: firstBook.volumeInfo.language,
        previewLink: firstBook.volumeInfo.previewLink,
        infoLink: firstBook.volumeInfo.infoLink,
        canonicalVolumeLink: firstBook.volumeInfo.canonicalVolumeLink,
    };

    newBookPreview.set(bookInfo);

    return new Response(JSON.stringify(bookInfo), { status: 200 });
};
