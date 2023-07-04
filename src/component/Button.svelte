<script lang="ts">
  import clsx from "clsx";
  import { createEventDispatcher, getContext } from "svelte";

  const elForm = getContext("elForm");
  const elFormItem = getContext("elFormItem");
  const ELEMENT = getContext("ELEMENT");

  const dispatchers = createEventDispatcher();

  function _elFormItemSize() {
    return (elFormItem || {}).elFormItemSize;
  }
  function buttonSize() {
    return size || _elFormItemSize() || (ELEMENT || {}).size;
  }
  function buttonDisabled() {
    return disabled ? disabled : (elForm || {}).disabled;
  }
  function handleClick(evt) {
    dispatchers("click", evt);
  }

  export let type: string = "";
  export let size: String = "";
  export let icon: string = "";
  export let nativeType: string = "button";
  export let loading: boolean = false;
  export let disabled: boolean = false;
  export let plain: boolean = false;
  export let autofocus: boolean = false;
  export let round: boolean = false;
  export let circle: boolean = false;
</script>

<button
  on:click={handleClick}
  disabled={buttonDisabled() || loading}
  {autofocus}
  type={nativeType}
  class={clsx("el-button", type ? "el-button--" + type : "", buttonSize() ? "el-button--" + buttonSize() : "", {
    "is-disabled": buttonDisabled(),
    "is-loading": loading,
    "is-plain": plain,
    "is-round": round,
    "is-circle": circle,
  })}
>
  {#if loading}
    <i class="el-icon-loading" />
  {/if}
  {#if icon && !loading}
    <i class={icon} />
  {/if}
  {#if $$slots.default}
    <span><slot /></span>
  {/if}
</button>
