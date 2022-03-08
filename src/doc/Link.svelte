<script>
    import { Link } from "./index";
    function onclcick(){
        alert('ok')
    }
</script>

<div class="demo-icon source">
    <div>
        <Link href="https://element.eleme.io" target="_blank">默认链接</Link>
        <Link type="primary" on:click={onclcick}>主要链接可点击</Link>
        <Link type="success">成功链接</Link>
        <Link type="warning">警告链接</Link>
        <Link type="danger">危险链接</Link>
        <Link type="info">信息链接</Link>
    </div>
    <br />
    <br />
    <div>
        <Link disabled>默认链接</Link>
        <Link type="primary" disabled>主要链接</Link>
        <Link type="success" disabled>成功链接</Link>
        <Link type="warning" disabled>警告链接</Link>
        <Link type="danger" disabled>危险链接</Link>
        <Link type="info" disabled>信息链接</Link>
    </div>
    <br />
    <br />
    <div>
        <Link underline={false}>无下划线</Link>
        <Link>有下划线</Link>
    </div>
    <br />
    <br />
    <div>
        <Link icon="el-icon-edit">编辑</Link>
        <Link>查看<i class="el-icon-view el-icon--right" /></Link>
    </div>
    <br />
    <br />
</div>

<style>
</style>
