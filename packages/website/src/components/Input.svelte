<script lang="ts">
  import debounce from 'lodash-es/debounce';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let input;
  let translateData = '';

  const handleInput = debounce(() => {
    translateData = input.value;
    dispatch('input', {
      text: translateData
    });
  }, 900);
</script>

<div class="input relative flex-1 h-40vw">
  <div class="top w-94% flex text-20px py-21px m-auto select-none border-b-1">
    <div>Origin Language</div>
    <div class="font-bold ml-6px cursor-pointer">(Chinese)</div>
    <img src="./down.svg" alt="" />
  </div>
  <textarea
    class="main w-94% relative h-32vw m-auto text-20px mt-30px"
    on:input={handleInput}
    bind:this={input}
    placeholder={translateData === '' ? 'Export or paste text for translation' : ''}
  />
  <!-- select file -->
  {#if translateData === ''}
    <div class="select-file absolute w-318px h-68px text-#1A237E rounded-10px flex justify-center items-center cursor-pointer text-24px font-light">
      Select File (.pdf, .docx)
    </div>
  {/if}
</div>

<style>
  .input {
    background: rgba(217, 217, 217, 0.68);
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }
  .top {
    border-color: rgba(0, 0, 0, 0.2);
  }
  .main {
    display: block;
    background-color: transparent;
    outline: none;
    overflow-y: auto;
  }
  /* 更改textarea的placeholder样式 */
  .main::-webkit-input-placeholder {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.38);
  }
  .select-file {
    border: 2px dashed #1a237e;
    font-family: 'Inter';
    font-style: italic;
    bottom: 97px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
