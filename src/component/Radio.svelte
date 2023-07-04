<script lang="ts">
  import { clsx } from "clsx";
  import { getContext, createEventDispatcher, setContext } from "svelte";

  const dispatch = createEventDispatcher();

  const elForm = getContext("elForm");
  const elFormItem = getContext("elFormItem");
  const ELEMENT = getContext("ELEMENT");
  const _radioGroup: any = getContext("_radioGroup");

  export let value: string | number | boolean = undefined;
  export let label: string | number | boolean = undefined;
  export let disabled: boolean = false;
  export let name: string = "";
  export let border: boolean = false;
  export let size: String = "";

  let focus: boolean = false;

  function isGroup() {
    return _radioGroup !== undefined ? true : false;
  }
  // console.log("zi", $$props, isGroup(), _radioGroup);
  function _elFormItemSize() {
    return (elFormItem || {}).elFormItemSize;
  }
  function radioSize() {
    const temRadioSize = size || _elFormItemSize() || (ELEMENT || {}).size;
    return isGroup() ? $_radioGroup.size || temRadioSize : temRadioSize;
  }

  function handleChange(e) {
    if (isGroup()) {
      $_radioGroup.value = label;
    } else {
      value = label;
    }
    dispatch("change", e);
    // isGroup() && dispatch("ElRadioGroup", "handleChange", value);
  }
  function handleKeydown(e) {
    if (e.code !== "Space") {
      return;
    }
    value = isDisabled() ? value : label;
    e.stopPropagation();
    e.preventDefault();
  }

  $: value = isGroup() ? $_radioGroup.value : value;
  $: isDisabled = () => {
    return isGroup() ? $_radioGroup.disabled || disabled || (elForm || {}).disabled : disabled || (elForm || {}).disabled;
  };
</script>

<label class={clsx(["el-radio", border && radioSize() ? "el-radio--" + radioSize() : "", { "is-disabled": isDisabled() }, { "is-focus": focus }, { "is-bordered": border }, { "is-checked": value === label }])} on:keydown={handleKeydown}>
  <span
    class={clsx("el-radio__input", {
      "is-disabled": isDisabled(),
      "is-checked": value === label,
    })}
  >
    <span class="el-radio__inner" />
    <input
      class="el-radio__original"
      value={label}
      bind:group={value}
      type="radio"
      aria-hidden="true"
      on:focus={() => {
        focus = true;
      }}
      on:blur={() => {
        focus = false;
      }}
      on:change={handleChange}
      {name}
      disabled={isDisabled()}
      autocomplete="off"
    />
  </span>
  <span class="el-radio__label" on:keydown|stopPropagation>
    <slot />
    {#if !$$slots.default}
      {label}
    {/if}
  </span>
</label>
