<script>
    import clsx from "../common/clsx";
    import { getContext, createEventDispatcher } from "svelte";

    export let text = undefined;
    export let group = [];
    export let value = undefined;
    export let label = undefined;
    export let disabled = false;
    export let border = false;
    export let size = undefined;
    export let name = undefined;
    export let indeterminate = false;
    export let invalue = undefined;
    export let unvalue = undefined;
    const dispatch = createEventDispatcher();
    const CheckboxGroup_props = getContext("CheckboxGroup_props");
    const CheckboxGroup_min = getContext("CheckboxGroup_min");
    const CheckboxGroup_max = getContext("CheckboxGroup_max");
    const CheckboxGroup_dispatch = getContext("CheckboxGroup_dispatch");
    const isGroup = getContext("CheckboxGroup_group");
    let isLimitExceeded = false;
    let focus = false;
    $: size = isGroup ? CheckboxGroup_props.size : size;
    $: isinvalue = _isinvalue(isGroup, invalue, label);
    $: isChecked = _isChecked(isGroup, group, value, isinvalue);
    $: isDisabled = _isDisabled(isGroup, disabled, group, CheckboxGroup_min, CheckboxGroup_max, isChecked);
    function _isinvalue(isGroup, invalue, label) {
        if (!isGroup) {
            if (invalue !== undefined) {
                return invalue;
            }
            return undefined;
        }
        if (invalue !== undefined) {
            return invalue;
        }

        if (label !== undefined) {
            return label;
        }
        return undefined;
    }
    function _isChecked(isGroup, group, value, isinvalue) {
        if (!isGroup) {
            if (isinvalue === undefined) {
                return Boolean(value);
            } else {
                return value === isinvalue;
            }
        } else {
            const groupSet = new Set(group);
            return groupSet.has(isinvalue);
        }
    }

    function _isDisabled(isGroup, disabled, group, CheckboxGroup_min, CheckboxGroup_max, isChecked) {
        if (!isGroup) {
            return disabled;
        }
        const max = Number(CheckboxGroup_max);
        const min = Number(CheckboxGroup_min);
        if (max && group.length >= max && !isChecked) {
            return true;
        }
        if (min && group.length <= min && isChecked) {
            return true;
        }
        return CheckboxGroup_props.disabled ? true : disabled;;
    }

    let classList = [];

    $: {
        classList[0] = clsx("el-checkbox", [border && size ? "el-checkbox--" + size : "", { "is-disabled": isDisabled }, { "is-bordered": border }, { "is-checked": isChecked }], $$props["class"]);
        classList[1] = clsx(
            "el-checkbox__input",
            {
                "is-disabled": isDisabled,
                "is-checked": isChecked,
                "is-indeterminate": indeterminate,
                "is-focus": focus,
            },
            $$props["class"]
        );
    }
    $: tabindex = indeterminate ? 0 : false;
    $: role = indeterminate ? "checkbox" : false;
    $: ariaChecked = indeterminate ? "mixed" : false;

    function handleChange({ target }) {
        if (isLimitExceeded) {
            return;
        }
        isChecked = target.checked;
        value = _getvalue(isChecked,invalue);
        group = _getgroup(isGroup, isChecked, group, label);
        dispatch("change", value);
        if (isGroup) {
            CheckboxGroup_dispatch(group);
        }
    }

    function _getvalue(isChecked,invalue) {
        if (isChecked) {
            if (invalue === undefined) {
                 return true
            }
            return invalue
        } else {
            return false
        }
    }

    function _getgroup(isGroup, checked, group, label) {
        if (isGroup === false) {
            return group;
        }
        const groupSet = new Set(group);
        if (checked) {
            groupSet.add(label);
            return Array.from(groupSet);
        }
        groupSet.delete(label);
        return Array.from(groupSet);
    }
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={classList[0]} style={$$props["style"]} >
    <span class={classList[1]} {tabindex} {role} aria-checked={ariaChecked}>
        <span class="el-checkbox__inner" />
        <input
            class="el-checkbox__original"
            type="checkbox"
            aria-controls={Boolean(indeterminate)}
            checked={isChecked}
            aria-hidden={indeterminate ? "true" : "false"}
            {name}
            disabled={isDisabled}
            on:change={handleChange}
            on:focus={() => (focus = true)}
            on:blur={() => (focus = false)}
        />
    </span>
    <span class="el-checkbox__label" on:keydown|stopPropagation>
        {#if $$slots.default}
            <slot />
        {:else if text != undefined}
            {text}
        {:else}
            {label}
        {/if}
    </span>
</label>
