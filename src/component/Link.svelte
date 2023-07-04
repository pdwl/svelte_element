<script lang="ts">
  import clsx from "clsx";
  import { createEventDispatcher } from "svelte";

  const dispatchers = createEventDispatcher();

  export let type: String = "default";
  export let underline: boolean = true;
  export let disabled: boolean = false;
  export let href: string = undefined;
  export let icon: string = undefined;
  export let target: string = undefined;
  export let rel: string = undefined;
  export let download: boolean = false;

  function handleClick(e) {
    if (!disabled) {
      if (!href) {
        dispatchers("click", e);
      }
    }
  }
</script>

<a class={clsx(["el-link", type ? `el-link--${type}` : "", disabled && "is-disabled", underline && !disabled && "is-underline"])} href={disabled ? null : href} on:click={handleClick} {target} {rel} download={download ? "download" : undefined}>
  {#if icon}
    <i class={icon} />
  {/if}
  {#if $$slots.default}
    <span class="el-link--inner">
      <slot />
    </span>
  {/if}
  {#if $$slots.icon}
    <slot name="icon" />
  {/if}
</a>
