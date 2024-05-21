<script lang="ts">


	export let book: Book;
</script>

<div class="card bg-base-100 shadow-xl">
	<figure>
		<img src={book.imageUrl} alt="" class="h-64" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{book.title}</h2>
		<p>{book.description}</p>
		<div class="card-actions flex justify-between items-center mt-4">
			<div>
				<button class="btn btn-primary">
					<a href={book.url}>Buy at Amazon</a>
				</button>
			</div>
			<div class="justify-end">
				<div class="flex items-center">
					<div>genre:</div>
					<div class="badge badge-lg">{book.genre}</div>
				</div>
			</div>
		</div>
	</div>
</div>
