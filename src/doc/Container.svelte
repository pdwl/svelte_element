<script>
  import { Container, Header, Main, Footer, Aside } from "./index";

  const item = {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  };
</script>

<Container>
  <Header style="width:400px">Header</Header>
  <Main>Main</Main>
</Container>

<Container>
  <Header>Header</Header>
  <Main>Main</Main>
  <Footer>Footer</Footer>
</Container>

<Container>
  <Aside width="200px">Aside</Aside>
  <Main>Main</Main>
</Container>

<Container>
  <Header>Header</Header>
  <Container>
    <Aside width="200px">Aside</Aside>
    <Main>Main</Main>
  </Container>
</Container>

<Container>
  <Header>Header</Header>
  <Container>
    <Aside width="200px">Aside</Aside>
    <Container>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </Container>
  </Container>
</Container>

<Container>
  <Aside width="200px">Aside</Aside>
  <Container>
    <Header>Header</Header>
    <Main>Main</Main>
  </Container>
</Container>

<Container>
  <Aside width="200px">Aside</Aside>
  <Container>
    <Header class="el-header">Header</Header>
    <Main>Main</Main>
    <Footer>Footer</Footer>
  </Container>
</Container>
<!-- 
<Container style="height: 500px; border: 1px solid #eee">
  <Aside width="200px" style="background-color: rgb(238, 241, 246)">
    <Menu default-openeds="['1', '3']">
      <Submenu index="1">
        <template slot="title"><i class="el-icon-message" />导航一</template>
        <Menu-item-group>
          <template slot="title">分组一</template>
          <Menu-item index="1-1">选项1</Menu-item>
          <Menu-item index="1-2">选项2</Menu-item>
        </Menu-item-group>
        <Menu-item-group title="分组2">
          <Menu-item index="1-3">选项3</Menu-item>
        </Menu-item-group>
        <Submenu index="1-4">
          <template slot="title">选项4</template>
          <Menu-item index="1-4-1">选项4-1</Menu-item>
        </Submenu>
      </Submenu>
      <Submenu index="2">
        <template slot="title"><i class="el-icon-menu" />导航二</template>
        <Menu-item-group>
          <template slot="title">分组一</template>
          <Menu-item index="2-1">选项1</Menu-item>
          <Menu-item index="2-2">选项2</Menu-item>
        </Menu-item-group>
        <Menu-item-group title="分组2">
          <Menu-item index="2-3">选项3</Menu-item>
        </Menu-item-group>
        <Submenu index="2-4">
          <template slot="title">选项4</template>
          <Menu-item index="2-4-1">选项4-1</Menu-item>
        </Submenu>
      </Submenu>
      <Submenu index="3">
        <template slot="title"><i class="el-icon-setting" />导航三</template>
        <Menu-item-group>
          <template slot="title">分组一</template>
          <Menu-item index="3-1">选项1</Menu-item>
          <Menu-item index="3-2">选项2</Menu-item>
        </Menu-item-group>
        <Menu-item-group title="分组2">
          <Menu-item index="3-3">选项3</Menu-item>
        </Menu-item-group>
        <Submenu index="3-4">
          <template slot="title">选项4</template>
          <Menu-item index="3-4-1">选项4-1</Menu-item>
        </Submenu>
      </Submenu>
    </Menu>
  </Aside>

  <Container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140" />
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column prop="address" label="地址" />
      </el-table>
    </el-main>
  </Container>
</Container> -->

<style>
</style>
