<script lang="ts">
  import Radio from "./component/Radio.svelte";
  import RadioGroup from "./component/RadioGroup.svelte";
  import RadioButton from "./component/RadioButton.svelte";
  let radio = 1;
  let radio2 = "禁用";
  let radio3 = 3;

  let radio11 = "上海";
  let radio12 = "上海";
  let radio13 = "上海";
  let radio14 = "上海";

  // 要注意变量类型噢，整数对整数，字符串对字符串，要与label的值一致，同一个格式
  // 支持类型 num | string | bool
  let radio21 = '1';
  let radio22 = '1';
  let radio23 = 1;
  let radio24 = 1;

  $: {
    console.log("wai1", radio21);
    console.log("wai2", radio22);
    console.log("wai3", radio23);
    console.log("wai4", radio24);
  }
</script>

<div class="demoBlock demo-zh-CN demo-layout">
  <div class="source">
    
  </div>
</div>
