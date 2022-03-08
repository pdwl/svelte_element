<script>
    import clsx from "./../common/clsx/index";
    export let value = undefined;
    export let label = undefined;
    export let checked = false;
    export let disabled = false;
    export let border = false;
    export let size = undefined;
    export let name = undefined;
    import { setContext, getContext, createEventDispatcher, onMount } from "svelte";
    import { writable, derived } from "svelte/store";
    let focus = false;
    let model = undefined;

    // const q = get(value)
    // console.log(q,$q);
    // const a = writable(label);
    // console.log($a);

    // let a = 1;
    // const _derived = derived(a, ($a) => $a * 2);
    // console.log($_derived);

    // const test = getContext(value);
    // console.log('2222222222',test);
    // setContext(value,label);
    // const _model = getContext(value);
    // console.log(_model);
    // console.log(value,label);
    const dispatch = createEventDispatcher();
    const _RadioGroup = getContext("RadioGroup");
    const _RadioGroup_value = _RadioGroup != undefined ? _RadioGroup.value : undefined;
    let _input = undefined;
    const isGroup = () => {
        return _RadioGroup != undefined ? true : false;
    };
    // model = checked != undefined ? label : _model;
    // name = value;
    // console.log("cccccccccccccc", checked, model);
    const isDisabled = () => {
        return isGroup() ? _RadioGroup.disabled || disabled : disabled;
    };
    // const handleChange = (e) => {
    //     console.log(e);
    //     console.log(label);
    // };
    model = isDisabled() ? _RadioGroup_value : label;
    // console.log(model);
    // $: {
    // model = value;
    // console.log(model);
    //     model = isDisabled() ? _RadioGroup_value : value;
    //     console.log(model);
    // }
    // console.log(_RadioGroup, model);
    const tabIndex = () => {
        return isDisabled() || (isDisabled() && model !== label) ? -1 : 0;
    };
    console.log(isDisabled(),tabIndex());
    let classList;
    $: {
        classList = clsx(
            "el-radio",
            [border && size != undefined ? "el-radio--" + radioSize : "", { "is-disabled": isDisabled() }, { "is-focus": focus }, { "is-bordered": border }, { "is-checked": checked }],
            $$props["class"]
        );
    }
    // console.log(isGroup(), isDisabled(), checked, label, checked);
    // console.log($$props);
    const onChange = (e) => {
        model = false;
        model = e.target.value;
        console.log(checked);
        dispatch("click", e);
    };
    onMount(() => {
        // console.log(model === label);
    });
    // console.log(checked);
    // :focus={focus == true}
    // :blur={focus == false}
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={classList} style={$$props["style"]} role="radio" tabindex={tabIndex()} >
    <span
        class={clsx("el-radio__input", {
            "is-disabled": isDisabled(),
            "is-checked": checked,
        })}
    >
        <span class="el-radio__inner" />
        <input ref="radio" class="el-radio__original" value={label} bind:group={value} type="radio" aria-hidden="true" bind:this={_input} {checked} on:change={onChange} {name} disabled={isDisabled()} tabindex={tabIndex()} autocomplete="off" />
    </span>
    <span class="el-radio__label">
        {#if $$slots.default}
            <slot />
        {:else}
            {label}
        {/if}
    </span>
</label>

<!-- <label
    
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span class="el-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="el-radio__inner"></span>
      <input
        ref="radio"
        class="el-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
        autocomplete="off"
      >
    </span>
    <span class="el-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label> -->
