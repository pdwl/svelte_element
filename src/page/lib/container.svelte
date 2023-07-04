<script lang="ts">
  import Meta from "../meta.svelte";
  import Pre from "../pre.svelte";

  import Container from "./../../component/Container.svelte";
  import Header from "./../../component/Header.svelte";
  import Main from "./../../component/Main.svelte";
  import Footer from "./../../component/Footer.svelte";
  import Aside from "./../../component/Aside.svelte";
</script>

<section class="content element-doc content">
  <h2 id="container-bu-ju-rong-qi"><a href="https://element.eleme.cn/#/zh-CN/component/container#container-bu-ju-rong-qi" aria-hidden="true" class="header-anchor">¶</a> Container 布局容器</h2>
  <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
  <p><code>&lt;container&gt;</code>：外层容器。当子元素中包含 <code>&lt;header&gt;</code> 或 <code>&lt;footer&gt;</code> 时，全部子元素会垂直上下排列，否则会水平左右排列。</p>
  <p><code>&lt;header&gt;</code>：顶栏容器。</p>
  <p><code>&lt;aside&gt;</code>：侧边栏容器。</p>
  <p><code>&lt;main&gt;</code>：主要区域容器。</p>
  <p><code>&lt;footer&gt;</code>：底栏容器。</p>
  <div class="tip"><p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，<code>&lt;container&gt;</code> 的子元素只能是后四者，后四者的父元素也只能是 <code>&lt;container&gt;</code>。</p></div>
  <h3 id="chang-jian-ye-mian-bu-ju"><a href="https://element.eleme.cn/#/zh-CN/component/container#chang-jian-ye-mian-bu-ju" aria-hidden="true" class="header-anchor">¶</a> 常见页面布局</h3>
  <div class="demo-block demo-zh-CN demo-container">
    <div class="source">
      <Container>
        <Header>Header</Header>
        <Main>Main</Main>
      </Container>

      <Container>
        <Header>Header</Header>
        <Main>Main</Main>
        <Footer>Footer</Footer>
      </Container>

      <Container>
        <Aside width={"200px"}>Aside</Aside>
        <Main>Main</Main>
      </Container>

      <Container>
        <Header>Header</Header>
        <Container>
          <Aside width={"200px"}>Aside</Aside>
          <Main>Main</Main>
        </Container>
      </Container>

      <Container>
        <Header>Header</Header>
        <Container>
          <Aside width={"200px"}>Aside</Aside>
          <Container>
            <Main>Main</Main>
            <Footer>Footer</Footer>
          </Container>
        </Container>
      </Container>

      <Container>
        <Aside width={"200px"}>Aside</Aside>
        <Container>
          <Header>Header</Header>
          <Main>Main</Main>
        </Container>
      </Container>

      <Container>
        <Aside width={"200px"}>Aside</Aside>
        <Container>
          <Header>Header</Header>
          <Main>Main</Main>
          <Footer>Footer</Footer>
        </Container>
      </Container>
    </div>

    <Meta>
      <div class="highlight">
        <Pre
          code={`
import { Container, Header, Main, Footer, Aside  } from '@maiji/svelte_element';

<Container>
  <Header>Header</Header>
  <Main>Main</Main>
</Container>
<Container>
  <Header>Header</Header>
  <Main>Main</Main>
  <Footer>Footer</Footer>
</Container>
<Container>
  <Aside width={"200px"}>Aside</Aside>
  <Main>Main</Main>
</Container>
<Container>
  <Header>Header</Header>
  <Container>
    <Aside width={"200px"}>Aside</Aside>
    <Main>Main</Main>
  </Container>
</Container>
<Container>
  <Header>Header</Header>
  <Container>
    <Aside width={"200px"}>Aside</Aside>
    <Container>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </Container>
  </Container>
</Container>
<Container>
  <Aside width={"200px"}>Aside</Aside>
  <Container>
    <Header>Header</Header>
    <Main>Main</Main>
  </Container>
</Container>
<Container>
  <Aside width={"200px"}>Aside</Aside>
  <Container>
    <Header>Header</Header>
    <Main>Main</Main>
    <Footer>Footer</Footer>
  </Container>
</Container>
    `}
        />
      </div>
    </Meta>
  </div>

  
  <h3 id="shi-li"><a href="https://element.eleme.cn/#/zh-CN/component/container#shi-li" aria-hidden="true" class="header-anchor">¶</a> 实例</h3>
  <div class="demo-block demo-zh-CN demo-container">
    <div class="source">
      <div>
        <section class="container" style="height: 500px; border: 1px solid rgb(238, 238, 238);">
          <aside class="aside" style="width: 200px; background-color: rgb(238, 241, 246);">
            <ul role="menubar" class="menu">
              <li role="menuitem" aria-haspopup="true" aria-expanded="true" class="submenu is-opened">
                <div class="submenu__title" style="padding-left: 20px;"><i class="icon-message" />导航一<i class="submenu__icon-arrow icon-arrow-down" /></div>
                <ul role="menu" class="menu menu--inline">
                  <li class="menu-item-group">
                    <div class="menu-item-group__title" style="padding-left: 40px;">分组一</div>
                    <ul>
                      <li role="menuitem" tabindex="-1" class="menu-item" style="padding-left: 40px;">选项1</li>
                      <li role="menuitem" tabindex="-1" class="menu-item" style="padding-left: 40px;">选项2</li>
                    </ul>
                  </li>
                  <li class="menu-item-group">
                    <div class="menu-item-group__title" style="padding-left: 40px;">分组2</div>
                    <ul><li role="menuitem" tabindex="-1" class="menu-item" style="padding-left: 40px;">选项3</li></ul>
                  </li>
                  <li role="menuitem" aria-haspopup="true" class="submenu">
                    <div class="submenu__title" style="padding-left: 40px;">选项4<i class="submenu__icon-arrow icon-arrow-down" /></div>
                    <ul role="menu" class="menu menu--inline" style="display: none;"><li role="menuitem" tabindex="-1" class="menu-item" style="padding-left: 60px;">选项4-1</li></ul>
                  </li>
                </ul>
              </li>
              <li role="menuitem" aria-haspopup="true" class="submenu">
                <div class="submenu__title" style="padding-left: 20px;"><i class="icon-menu" />导航二<i class="submenu__icon-arrow icon-arrow-down" /></div>
                <ul role="menu" class="menu menu--inline" style="display: none;">
                  <li class="menu-item-group">
                    <div class="menu-item-group__title" style="padding-left: 40px;">分组一</div>
                    <ul>
                      <li role="menuitem" tabindex="-1" class="menu-item" style="padding-left: 40px;">选项1</li>
                      <li role="menuitem" tabindex="-1" class="menu-item" style="padding-left: 40px;">选项2</li>
                    </ul>
                  </li>
                  <li class="menu-item-group">
                    <div class="menu-item-group__title" style="padding-left: 40px;">分组2</div>
                    <ul><li role="menuitem" tabindex="-1" class="menu-item" style="padding-left: 40px;">选项3</li></ul>
                  </li>
                  <li role="menuitem" aria-haspopup="true" class="submenu">
                    <div class="submenu__title" style="padding-left: 40px;">选项4<i class="submenu__icon-arrow icon-arrow-down" /></div>
                    <ul role="menu" class="menu menu--inline" style="display: none;"><li role="menuitem" tabindex="-1" class="menu-item" style="padding-left: 60px;">选项4-1</li></ul>
                  </li>
                </ul>
              </li>
              <li role="menuitem" aria-haspopup="true" aria-expanded="true" class="submenu is-opened">
                <div class="submenu__title" style="padding-left: 20px;"><i class="icon-setting" />导航三<i class="submenu__icon-arrow icon-arrow-down" /></div>
                <ul role="menu" class="menu menu--inline">
                  <li class="menu-item-group">
                    <div class="menu-item-group__title" style="padding-left: 40px;">分组一</div>
                    <ul>
                      <li role="menuitem" tabindex="-1" class="menu-item" style="padding-left: 40px;">选项1</li>
                      <li role="menuitem" tabindex="-1" class="menu-item" style="padding-left: 40px;">选项2</li>
                    </ul>
                  </li>
                  <li class="menu-item-group">
                    <div class="menu-item-group__title" style="padding-left: 40px;">分组2</div>
                    <ul><li role="menuitem" tabindex="-1" class="menu-item" style="padding-left: 40px;">选项3</li></ul>
                  </li>
                  <li role="menuitem" aria-haspopup="true" class="submenu">
                    <div class="submenu__title" style="padding-left: 40px;">选项4<i class="submenu__icon-arrow icon-arrow-down" /></div>
                    <ul role="menu" class="menu menu--inline" style="display: none;"><li role="menuitem" tabindex="-1" class="menu-item" style="padding-left: 60px;">选项4-1</li></ul>
                  </li>
                </ul>
              </li>
            </ul>
          </aside>
          <section class="container is-vertical">
            <header class="header" style="height: 60px; text-align: right; font-size: 12px;">
              <div class="dropdown">
                <i class="icon-setting dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-7700" role="button" tabindex="0" style="margin-right: 15px;" />
                <ul class="dropdown-menu popper" id="dropdown-menu-7700" style="display: none;">
                  <li tabindex="-1" class="dropdown-menu__item"><!---->查看</li>
                  <li tabindex="-1" class="dropdown-menu__item"><!---->新增</li>
                  <li tabindex="-1" class="dropdown-menu__item"><!---->删除</li>
                </ul>
              </div>
              <span>王小虎</span>
            </header>
            <main class="main">
              <div class="table table--fit table--enable-row-hover table--enable-row-transition">
                <div class="hidden-columns">
                  <div />
                  <div />
                  <div />
                </div>
                <div class="table__header-wrapper">
                  <table cellspacing="0" cellpadding="0" border="0" class="table__header" style="width: 514px;">
                    <colgroup><col name="table_25_column_102" width="140" /><col name="table_25_column_103" width="120" /><col name="table_25_column_104" width="254" /><col name="gutter" width="0" /></colgroup><thead class="has-gutter"><tr class=""><th colspan="1" rowspan="1" class="table_25_column_102     is-leaf table__cell"><div class="cell">日期</div></th><th colspan="1" rowspan="1" class="table_25_column_103     is-leaf table__cell"><div class="cell">姓名</div></th><th colspan="1" rowspan="1" class="table_25_column_104     is-leaf table__cell"><div class="cell">地址</div></th><th class="table__cell gutter" style="width: 0px; display: none;" /></tr></thead>
                  </table>
                </div>
                <div class="table__body-wrapper is-scrolling-none">
                  <table cellspacing="0" cellpadding="0" border="0" class="table__body" style="width: 514px;">
                    <colgroup><col name="table_25_column_102" width="140" /><col name="table_25_column_103" width="120" /><col name="table_25_column_104" width="254" /></colgroup><tbody
                      ><tr class="table__row"><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr><tr class="table__row"
                        ><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr
                      ><tr class="table__row"><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr><tr class="table__row"
                        ><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr
                      ><tr class="table__row"><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr><tr class="table__row"
                        ><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr
                      ><tr class="table__row"><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr><tr class="table__row"
                        ><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr
                      ><tr class="table__row"><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr><tr class="table__row"
                        ><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr
                      ><tr class="table__row"><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr><tr class="table__row"
                        ><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr
                      ><tr class="table__row"><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr><tr class="table__row"
                        ><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr
                      ><tr class="table__row"><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr><tr class="table__row"
                        ><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr
                      ><tr class="table__row"><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr><tr class="table__row"
                        ><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr
                      ><tr class="table__row"><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr><tr class="table__row"
                        ><td rowspan="1" colspan="1" class="table_25_column_102   table__cell"><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="table_25_column_103   table__cell"><div class="cell">王小虎</div></td><td rowspan="1" colspan="1" class="table_25_column_104   table__cell"><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr
                      ><!----></tbody
                    >
                  </table>
                  <!----><!---->
                </div>
                <!----><!----><!----><!---->
                <div class="table__column-resize-proxy" style="display: none;" />
              </div>
            </main>
          </section>
        </section>
      </div>
    </div>
    <div class="meta">
      <!---->
      <div class="highlight" style="width: 100%;" />
    </div>
    <div class="demo-block-control"><i class="icon-caret-bottom" /><span style="display: none;">显示代码</span><button type="button" class="button control-button tooltip button--text button--small" style="display: none;" aria-describedby="tooltip-9537" tabindex="0"><!----><!----><span> 在线运行 </span></button></div>
  </div>
  <h3 id="container-attributes"><a href="https://element.eleme.cn/#/zh-CN/component/container#container-attributes" aria-hidden="true" class="header-anchor">¶</a> Container Attributes</h3>
  <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>子元素的排列方向</td><td>string</td><td>horizontal / vertical</td><td>子元素中有 <code>header</code> 或 <code>footer</code> 时为 vertical，否则为 horizontal</td></tr></tbody></table>
  <h3 id="header-attributes"><a href="https://element.eleme.cn/#/zh-CN/component/container#header-attributes" aria-hidden="true" class="header-anchor">¶</a> Header Attributes</h3>
  <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>顶栏高度</td><td>string</td><td>—</td><td>60px</td></tr></tbody></table>
  <h3 id="aside-attributes"><a href="https://element.eleme.cn/#/zh-CN/component/container#aside-attributes" aria-hidden="true" class="header-anchor">¶</a> Aside Attributes</h3>
  <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>侧边栏宽度</td><td>string</td><td>—</td><td>300px</td></tr></tbody></table>
  <h3 id="footer-attributes"><a href="https://element.eleme.cn/#/zh-CN/component/container#footer-attributes" aria-hidden="true" class="header-anchor">¶</a> Footer Attributes</h3>
  <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>底栏高度</td><td>string</td><td>—</td><td>60px</td></tr></tbody></table>
</section>
