<script lang="ts">
	import type { Book } from '../../models/book';
	import BooklistItem from './booklistItem.svelte';

	export const books: Book[] = [];

	const book1: Book = {
		title: 'Dr. Space',
		author: 'Bob Ward',
		imageUrl: 'https://m.media-amazon.com/images/I/51Bw98Hh2NL._SY445_SX342_.jpg',
		description:
			'Written by veteran aerospace journalist Bob Ward, who spent years investigating his subject, the father of modern rocketry, this biography presents a revealing but even-handed portrait of the one-time Nazi Party member who brought the United States into the Space Age.',
		url: 'https://www.amazon.nl/Dr-Space-Life-Werner-Braun/dp/1591149274',
		genre: 'biography'
	};

	books.push(book1);
</script>

<h1>Your books</h1>
<div class="grid columns-4">
	{#if books.length > 0}
		{#each books as book}
			<BooklistItem {book} />
		{/each}
	{/if}
</div>
