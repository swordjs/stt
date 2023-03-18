<script lang="ts">
  import Input from './Input.svelte';
  import Output from './Output.svelte';

  let loading = false;
  let result = '';

  const handleInput = (e: { detail: { text: string } }) => {
    loading = true;
    fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: e.detail.text })
    })
      .then((res) => res.json())
      .then((data) => {
        result = data.message;
        loading = false;
      })
      .catch((err) => {
        console.log(err);
        loading = false;
      });
  };
</script>

<div class="flex justify-center">
  <Input on:input={handleInput} />
  <Output {loading} {result} />
</div>
