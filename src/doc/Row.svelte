<script>
	import Row from "./../components/Row.svelte";
	import Col from "./../components/Col.svelte";
</script>
基础布局
<Row style="width:400px;">
	<Col span="24" style="width:400px;"><div class="grid-content bg-purple-dark" /></Col>
</Row>
<Row>
	<Col span="12"><div class="grid-content bg-purple" /></Col>
	<Col span="12"><div class="grid-content bg-purple-light" /></Col>
</Row>
<Row>
	<Col span="8"><div class="grid-content bg-purple" /></Col>
	<Col span="8"><div class="grid-content bg-purple-light" /></Col>
	<Col span="8"><div class="grid-content bg-purple" /></Col>
</Row>
<Row>
	<Col span="6"><div class="grid-content bg-purple" /></Col>
	<Col span="6"><div class="grid-content bg-purple-light" /></Col>
	<Col span="6"><div class="grid-content bg-purple" /></Col>
	<Col span="6"><div class="grid-content bg-purple-light" /></Col>
</Row>
<Row>
	<Col span="4"><div class="grid-content bg-purple" /></Col>
	<Col span="4"><div class="grid-content bg-purple-light" /></Col>
	<Col span="4"><div class="grid-content bg-purple" /></Col>
	<Col span="4"><div class="grid-content bg-purple-light" /></Col>
	<Col span="4"><div class="grid-content bg-purple" /></Col>
	<Col span="4"><div class="grid-content bg-purple-light" /></Col>
</Row>
<br>
<br>
<br>
分栏间隔
<Row gutter="20">
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
  </Row>

<br>
<br>
<br>
混合布局
<Row gutter="20">
	<Col span="16"><div class="grid-content bg-purple"></div></Col>
	<Col span="8"><div class="grid-content bg-purple"></div></Col>
  </Row>
  <Row gutter="20">
	<Col span="8"><div class="grid-content bg-purple"></div></Col>
	<Col span="8"><div class="grid-content bg-purple"></div></Col>
	<Col span="4"><div class="grid-content bg-purple"></div></Col>
	<Col span="4"><div class="grid-content bg-purple"></div></Col>
  </Row>
  <Row gutter="20">
	<Col span="4"><div class="grid-content bg-purple"></div></Col>
	<Col span="16"><div class="grid-content bg-purple"></div></Col>
	<Col span="4"><div class="grid-content bg-purple"></div></Col>
  </Row>
<br>
<br>
<br>
分栏偏移
<Row gutter="20">
	<Col span="6" style="width:100px;"><div class="grid-content bg-purple"></div></Col>
	<Col span="6" offset="6"><div class="grid-content bg-purple"></div></Col>
  </Row>
  <Row gutter="20">
	<Col span="6" offset="6"><div class="grid-content bg-purple"></div></Col>
	<Col span="6" offset="6"><div class="grid-content bg-purple"></div></Col>
  </Row>
  <Row gutter="20">
	<Col span="12" offset="6"><div class="grid-content bg-purple"></div></Col>
  </Row>
<br>
<br>
<br>
对齐方式
<Row type="flex" class="row-bg">
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
	<Col span="6"><div class="grid-content bg-purple-light"></div></Col>
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
  </Row>
  <Row type="flex" class="row-bg" justify="center">
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
	<Col span="6"><div class="grid-content bg-purple-light"></div></Col>
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
  </Row>
  <Row type="flex" class="row-bg" justify="end">
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
	<Col span="6"><div class="grid-content bg-purple-light"></div></Col>
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
  </Row>
  <Row type="flex" class="row-bg" justify="space-between">
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
	<Col span="6"><div class="grid-content bg-purple-light"></div></Col>
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
  </Row>
  <Row type="flex" class="row-bg" justify="space-around">
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
	<Col span="6"><div class="grid-content bg-purple-light"></div></Col>
	<Col span="6"><div class="grid-content bg-purple"></div></Col>
  </Row>
<br>
<br>
响应式布局
<Row gutter="10">
	<Col xs="8" sm="6" md="4" lg="3" xl="1"><div class="grid-content bg-purple"></div></Col>
	<Col xs="4" sm="6" md="8" lg="9" xl="11"><div class="grid-content bg-purple-light"></div></Col>
	<Col xs="4" sm="6" md="8" lg="9" xl="11"><div class="grid-content bg-purple"></div></Col>
	<Col xs="8" sm="6" md="4" lg="3" xl="1"><div class="grid-content bg-purple-light"></div></Col>
  </Row>
<br>
<br>
test
<Row gutter="10">
	<Col xs={{span:6,offset:6}} ><div class="grid-content bg-purple"></div></Col>
	<Col sm={{span:6,offset:6}} ><div class="grid-content bg-purple"></div></Col>
	<Col xs="8" sm="6" md="4" lg="3" xl="1"><div class="grid-content bg-purple-light"></div></Col>
  </Row>
<br>
<br>

<br>
<br>

<br>
<br>

<br>
<br>


<style>
	
  </style>
