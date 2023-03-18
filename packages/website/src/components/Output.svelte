<script lang="ts">
import InTranslation from "./InTranslation.svelte"

export let loading: boolean;
export let result: string;
</script>

<div class="output flex-1 h-40vw ml-14px">
  <div class="top w-94% flex text-20px py-21px m-auto select-none border-b-1">
    <div>Target Language</div>
    <div class="font-bold ml-6px cursor-pointer">(English)</div>
    <img src="./down.svg" alt="">
  </div>
  <div class="main">
    {#if loading}
    <div class="flex justify-center mt-10vw">
      <InTranslation />
    </div>
    {:else}
      <div class="result w-94% m-auto mt-30px text-20px">{result}</div>
    {/if}
  </div>
</div>

<style>
  .output {
    background: rgba(217, 217, 217, 0.68);
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }
  .top{
    border-color: rgba(0, 0, 0, 0.2);
  }
</style>
