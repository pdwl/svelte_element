<script lang="ts">
  import Router from "svelte-spa-router";
  import { location } from "svelte-spa-router";
  import routes from "./routes";
  import Index from "./page/index.svelte";
</script>

<!-- 这个是官方的链接跳转路由 -->
{#if $location == "/test"}
  <Router {routes} />
{:else}
  <Index>
    <Router {routes} />
  </Index>
{/if}
