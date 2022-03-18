<script>
	import { Row, Button, ButtonGroup } from "./index.js";
	function onclick(e) {
		alert("按钮");
	}
</script>

<main>
	<Button />
	<Button type="primary" text={"主要按钮"} />
	<br /><br />
	<Button on:click={onclick}>默认按钮</Button>
	<Button type="primary">主要按钮</Button>
	<Button type="success">成功按钮</Button>
	<Button type="info">信息按钮</Button>
	<Button type="warning">警告按钮</Button>
	<Button type="danger">危险按钮</Button>
	<br />
	<br />
	<Button plain>朴素按钮</Button>
	<Button type="primary" plain>主要按钮</Button>
	<Button type="success" plain>成功按钮</Button>
	<Button type="info" plain>信息按钮</Button>
	<Button type="warning" plain>警告按钮</Button>
	<Button type="danger" plain>危险按钮</Button>
	<br />
	<br />
	<Button round>圆角按钮</Button>
	<Button type="primary" round>主要按钮</Button>
	<Button type="success" round>成功按钮</Button>
	<Button type="info" round>信息按钮</Button>
	<Button type="warning" round>警告按钮</Button>
	<Button type="danger" round>危险按钮</Button>
	<br />
	<br />
	<Button icon="search" circle />
	<Button type="primary" icon="edit" circle />
	<Button type="success" icon="check" circle />
	<Button type="info" icon="message" circle />
	<Button type="warning" icon="star-off" circle />
	<Button type="danger" icon="delete" circle />
	<br />
	<br />
	<Row>
		<Button disabled>默认按钮</Button>
		<Button type="primary" disabled>主要按钮</Button>
		<Button type="success" disabled>成功按钮</Button>
		<Button type="info" disabled>信息按钮</Button>
		<Button type="warning" disabled>警告按钮</Button>
		<Button type="danger" disabled>危险按钮</Button>
	</Row>
	<br />
	<br />
	<Row>
		<Button plain disabled>朴素按钮</Button>
		<Button type="primary" plain disabled>主要按钮</Button>
		<Button type="success" plain disabled>成功按钮</Button>
		<Button type="info" plain disabled>信息按钮</Button>
		<Button type="warning" plain disabled>警告按钮</Button>
		<Button type="danger" plain disabled>危险按钮</Button>
	</Row>
	<br />
	<br />
	<Button type="text">文字按钮</Button>
	<Button type="text" disabled>文字按钮</Button>
	<br />
	<br />
	<Button type="primary" icon="edit" />
	<Button type="primary" icon="share" />
	<Button type="primary" icon="delete" />
	<Button type="primary" icon="search">搜索</Button>
	<Button type="primary">上传<i class="upload -right" /></Button>
	<br />
	<br />
	<ButtonGroup>
		<Button type="primary" icon="arrow-left">上一页</Button>
		<Button type="primary">下一页<i class="arrow-right -right" /></Button>
	</ButtonGroup>
	<ButtonGroup>
		<Button type="primary" icon="edit" />
		<Button type="primary" icon="share" />
		<Button type="primary" icon="delete" />
	</ButtonGroup>
	<br />
	<br />
	<Button type="primary" loading>加载中</Button>
	<br />
	<br />
	<Row>
		<Button>默认按钮</Button>
		<Button size="medium">中等按钮</Button>
		<Button size="small">小型按钮</Button>
		<Button size="mini">超小按钮</Button>
	</Row>
	<Row>
		<Button round>默认按钮</Button>
		<Button size="medium" round>中等按钮</Button>
		<Button size="small" round>小型按钮</Button>
		<Button size="mini" round>超小按钮</Button>
	</Row>
	<br />
	<br />

	<ButtonGroup
		options={[
			{ type: "primary", icon: "edit",text:'按钮一' },
			{ type: "primary", icon: "share",text:'按钮二' },
			{ type: "primary", icon: "delete" ,text:'按钮三'},
		]}
	/>
</main>

<style>
</style>
