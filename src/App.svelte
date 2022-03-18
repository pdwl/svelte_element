<script>
    // spa路由
    import Router from "svelte-spa-router";

    import Index from './doc/Index.svelte';
    import Button from './doc/Button.svelte';
    import Row from './doc/Row.svelte';
    import Container from './doc/Container.svelte';
    import Icon from './doc/Icon.svelte';
    import Link from './doc/Link.svelte';
    import Radio from './doc/Radio.svelte';
    import Checkbox from './doc/Checkbox.svelte';
    import Input from './doc/Input.svelte';
    let routes = {
        '/input':Input,
        '/checkbox':Checkbox,
        '/radio':Radio,
        '/link':Link,
        '/icon':Icon,
        '/container':Container,
        '/row':Row,
        '/button':Button,
        '/':Index
    }
</script>
<!-- 这个是官方的链接跳转路由 -->
<Router {routes}/>