<script lang="ts">
  import { getContext, setContext } from "svelte";
  import { writable } from "svelte/store";
  let ELEMENT = getContext("ELEMENT");
  let elFormItem = getContext("elFormItem");
  if (elFormItem === undefined) {
    elFormItem = "";
  }

  export let value: string | number | boolean = undefined;
  export let size: string = "";
  export let fill: string = "";
  export let textColor: string = "";
  export let disabled: boolean = false;

  // 父级写入
  const _radioGroup = writable({ value, size, fill, textColor, disabled });
  setContext("_radioGroup", _radioGroup);
  // console.log("🚀 ~ file: RadioGroup.svelte:19 ~ _radioGroup:", $_radioGroup);
 
  // 监控写入的变量，这边实时回调赋值
  _radioGroup.subscribe((e) => {
    value = e.value;
    size = e.size;
    fill = e.fill;
    textColor = e.textColor;
    disabled = e.disabled;
  });

  function _elFormItemSize() {
    return (elFormItem || {}).elFormItemSize;
  }
  function radioGroupSize() {
    return size || _elFormItemSize() || (ELEMENT || {}).size;
  }

  function mounted() {
    // 当radioGroup没有默认选项时，第一个可以选中Tab导航
    const radios = this.$el.querySelectorAll("[type=radio]");
    const firstLabel = this.$el.querySelectorAll("[role=radio]")[0];
    if (![].some.call(radios, (radio) => radio.checked) && firstLabel) {
      firstLabel.tabIndex = 0;
    }
  }
  function handleKeydown(e) {
    if (e.code !== "Space") {
      return;
    }
    // value = isDisabled() ? value : label;
    e.stopPropagation();
    e.preventDefault();
  }
  // console.log("fu", $$props);
  // console.log("fufu", $$restProps);
</script>

<div class="el-radio-group" on:keydown={handleKeydown} on:change>
  <slot />
</div>

<!-- TODO 这个位置不知道怎么处理 2023年7月3日15:54:08 -->
<!-- <component :is="_elTag" class="el-radio-group" role="radiogroup" on:keydown={handleKeydown}>
  <slot />
</component> -->
