<script lang="ts">
  import clsx from "clsx";
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  
  const dispatchers = createEventDispatcher();

  const TYPE_CLASSES_MAP = {
    success: "el-icon-success",
    warning: "el-icon-warning",
    error: "el-icon-error",
  };

  export let title: string = "";
  export let type: string = "info";
  export let description: string = "";
  export let closable: boolean = true;
  export let closeText: string = "";
  export let showIcon: boolean = false;
  export let center: boolean = false;
  export let effect: string = "light";
  // 动画效果延迟时间，默认300
  export let duration: number = 300;

  let visible: boolean = true;

  function close(e) {
    visible = false;
    dispatchers("close",e);
  }
  function typeClass() {
    return `el-alert--${type}`;
  }

  function iconClass() {
    return TYPE_CLASSES_MAP[type] || "el-icon-info";
  }

  function isBigIcon() {
    return description ? "is-big" : "";
  }

  function isBoldTitle() {
    return description ? "is-bold" : "";
  }
  $: {
    effect = ["light", "dark"].indexOf(effect) === -1 ? "light" : effect;
  }
</script>

{#if visible}
  <div class={clsx("el-alert", typeClass(), center ? "is-center" : "", "is-" + effect)} role="alert" transition:fade={{ duration: duration }}>
    {#if showIcon}
      <i class={clsx("el-alert__icon", iconClass(), isBigIcon())} />
    {/if}
    <div class="el-alert__content">
      {#if title || $$slots.default}
        <span class={clsx("el-alert__title", isBoldTitle())}>
          <slot name="title">{title}</slot>
        </span>
      {/if}
      {#if $$slots.default && !description}
        <p class="el-alert__description"><slot /></p>
      {/if}
      {#if !$$slots.default && description}
        <p class="el-alert__description">{description}</p>
      {/if}

      {#if closable}
        <i class={clsx("el-alert__closebtn", closeText !== "" && "is-customed", closeText === "" && "el-icon-close")} on:click={close}>{closeText}</i>
      {/if}
    </div>
  </div>
{/if}
