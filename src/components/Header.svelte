<script>
    import clsx from '../common/clsx'
    import { getContext } from "svelte";
    export let height = '60px';
    const isHeader = getContext("isHeader");
    isHeader.set(1);
</script>

<header class="{clsx(['el-header',$$props['class']])}" style={$$props['style']} style:height={height}>
    <slot />
</header>
