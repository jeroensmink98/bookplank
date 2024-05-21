<script lang="ts">
	import { newBookPreview } from '../../stores';

	let isbn: string;
	let hasSearched = false;
	$: book = $newBookPreview;

	async function searchBook() {
		const isbn10Regex = /^\d{9}[\dX]$/;
		const isbn13Regex = /^\d{13}$/;

		if (isbn && (isbn10Regex.test(isbn) || isbn13Regex.test(isbn))) {
			const res = await fetch(`/api/isbn?isbn=${isbn}`);

			if (res.status == 200) {
				const data = await res.json();
				newBookPreview.set(data);
			} else {
				newBookPreview.set(null);
				hasSearched = true;
			}
			
		} else {
			console.log('isbn not valid');
		}
	}

	async function clearPreview() {
		newBookPreview.set(null);
		hasSearched = false
	}
</script>

<div class="flex gap-2">
	<div class="card w-full bg-base-200 shadow-md">
		<div class="card-body">
			<h2 class="card-title">Add new book to your list</h2>
			<form>
				<label class="input input-bordered flex items-center gap-2">
					<input
						type="text"
						class="grow w-1/2"
						placeholder="ISBN-10 or ISBN-13"
						bind:value={isbn}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="w-4 h-4 opacity-70"
						><path
							fill-rule="evenodd"
							d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
							clip-rule="evenodd"
						/></svg
					>
				</label>
				<div class="pt-2">
					<button class="btn btn-primary" on:click={searchBook}>Search book</button>
				</div>
			</form>
		</div>
	</div>
	<div class="card w-full bg-base-200 shadow-md mx-auto">
		<div class="card-body">
			<div class="flex flex-row">
				{#if book}
					<div class="">
						<!-- svelte-ignore a11y-img-redundant-alt -->
						<a href="{book.infoLink}">
							<img src={book.imageLinks.thumbnail} alt="Book Image" class="w-full object-cover" />
						</a>
					</div>
					<div class="w-2/3 pl-4">
						<h2 class="card-title">{book.title}</h2>
						<p class="text-lg">{book.subtitle}</p>
						<p class="text-md mt-1"><strong>Author(s):</strong> {book.authors.join(', ')}</p>
						<p class="text-md"><strong>Publisher:</strong> {book.publisher}</p>
						<p class="text-md"><strong>Published Date:</strong> {book.publishedDate}</p>
						<p class="text-md"><strong>Description:</strong> {book.description}</p>
					</div>
				{:else if hasSearched}
					<div class="w-full text-center">
						<p class="text-lg text-red-500">Book not found</p>
					</div>
				{/if}
			</div>
			{#if book}
				<div class="flex items-center">
					<div class="">
						<button class="btn btn-primary">Add book to list</button>
					</div>
					<div class="pl-2">
						<button class="btn btn-warning" on:click={clearPreview}>Clear</button>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
