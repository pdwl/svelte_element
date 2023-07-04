<script lang="ts">
  import clsx from "clsx";
  import { getContext, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let elForm: string = getContext("elForm");
  let elFormItem: string = getContext("elFormItem");
  const ELEMENT: any = getContext("ELEMENT");
  const _radioGroup: any = getContext("_radioGroup");

  if (elForm === undefined) {
    elForm = "";
  }
  if (elFormItem === undefined) {
    elFormItem = "";
  }

  export let value: string | number | boolean = "";
  export let label: string | number | boolean = "";
  export let disabled: boolean = false;
  export let name: string = "";

  let focus: boolean = false;

  $: value = $_radioGroup.value;

  function activeStyle() {
    return clsx({
      backgroundColor: $_radioGroup.fill || "",
      borderColor: $_radioGroup.fill || "",
      boxShadow: $_radioGroup.fill ? `-1px 0 0 0 ${$_radioGroup.fill}` : "",
      color: $_radioGroup.textColor || "",
    });
  }
  function _elFormItemSize() {
    return (elFormItem || {}).elFormItemSize;
  }
  function size() {
    return $_radioGroup.size || _elFormItemSize() || (ELEMENT || {}).size;
  }

  function handleChange() {
    $_radioGroup.value = label;
    dispatch("handleChange", label);
  }

  function handleKeydown(e) {
    if (e.code !== "Space") {
      return;
    }
    value = isDisabled() ? value : label;
    e.stopPropagation();
    e.preventDefault();
  }

  let isDisabled = () => {
    return disabled || $_radioGroup.disabled || (elForm || {}).disabled;
  };
</script>

<label class={clsx(["el-radio-button", size() ? "el-radio-button--" + size() : "", { "is-active": value === label }, { "is-disabled": isDisabled }, { "is-focus": focus }])} aria-checked={value === label} aria-disabled={isDisabled()} on:keydown={handleKeydown}>
  <input
    class="el-radio-button__orig-radio"
    value={label}
    type="radio"
    bind:group={value}
    {name}
    on:change={handleChange}
    disabled={isDisabled()}
    tabindex="-1"
    on:focus={() => {
      focus = true;
    }}
    on:blur={() => {
      focus = false;
    }}
    autocomplete="off"
  />
  <span class="el-radio-button__inner" style={value === label ? activeStyle() : undefined} on:keydown|stopPropagation>
    <slot />
    {#if !$$slots.default}
      {label}
    {/if}
  </span>
</label>
