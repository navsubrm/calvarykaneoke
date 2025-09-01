<script>
	//Code
</script>

<div>
	<p>Never miss an update from Pastor JD! Enter your email below:</p>
	<form action="">
		<input type="email" name="email" placeholder="Your Email" />
		<input type="submit" value="Subscribe" />
	</form>
</div>

<style>
	p {
		color: var(--white-smoke);
		margin-bottom: 20px;
		font-family:
			Open Sans,
			sans-serif;
		font-size: 14px;
		line-height: 19px;
		text-align: center;
	}

	form {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		flex: 1 1 0;
		gap: 20px;
	}

	input[type='email'] {
		border: 1px #0000;
		max-width: 300px;
		width: 100%;
		height: 40px;
		margin-bottom: 0;
		font-size: 12px;
		line-height: 24px;
		padding: 10px;
	}

	@media (min-width: 350px) {
		form {
			flex-wrap: nowrap;
		}
	}

	input[type='submit'] {
		background-color: var(--burlywood);
		letter-spacing: 1px;
		height: 40px;
		padding-left: 20px;
		padding-right: 20px;
		font-family:
			Tenor Sans,
			sans-serif;
		font-size: 12px;
		font-weight: 700;
		border: none;
		transition: all 0.35s ease-in-out;
		color: var(--white-smoke);
		text-transform: uppercase;
		transition: background-color 0.5s ease-in-out;
	}

	input[type='submit']:hover {
		background-color: var(--gold);
	}
</style>
