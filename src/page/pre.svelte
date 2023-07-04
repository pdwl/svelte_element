<script lang="ts">
  import { onMount } from "svelte";
  import Highlight from "svelte-highlight";
  import typescript from "svelte-highlight/languages/typescript";
  import github from "svelte-highlight/styles/github";
  export let code = "";
  // onMount(() => {
  //   let s = code.split("\n");
  //   let t = "";
  //   for (let i in s) {
  //     t += s[i].trim() + "\n";
  //   }
  //   code = t;
  // });
</script>

<svelte:head>
  {@html github}
</svelte:head>
<Highlight language={typescript} code={code.trim()} class="press" />
