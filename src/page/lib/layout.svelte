<script lang="ts">
  import Row from "../../component/Row.svelte";
  import Col from "../../component/Col.svelte";
  import Meta from "../meta.svelte";
  import Pre from "../pre.svelte";
</script>

<section class="content element-doc content">
  <h2 id="layout-bu-ju"><a href="/#/layout" aria-hidden="true" class="header-anchor">¶</a> Layout 布局</h2>
  <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
  <h3 id="ji-chu-bu-ju"><a href="/#/layout" aria-hidden="true" class="header-anchor">¶</a> 基础布局</h3>
  <p>使用单一分栏创建基础的栅格布局。</p>
  <div class="demo-block demo-zh-CN demo-layout">
    <div class="source">
      <Row>
        <Col span={24}>
          <div class="grid-content bg-purple-dark" />
        </Col>
      </Row>
      <Row>
        <Col span={12}><div class="grid-content bg-purple" /></Col>
        <Col span={12}><div class="grid-content bg-purple-light" /></Col>
      </Row>
      <Row>
        <Col span={8}><div class="grid-content bg-purple" /></Col>
        <Col span={8}><div class="grid-content bg-purple-light" /></Col>
        <Col span={8}><div class="grid-content bg-purple" /></Col>
      </Row>
      <Row>
        <Col span={6}><div class="grid-content bg-purple" /></Col>
        <Col span={6}><div class="grid-content bg-purple-light" /></Col>
        <Col span={6}><div class="grid-content bg-purple" /></Col>
        <Col span={6}><div class="grid-content bg-purple-light" /></Col>
      </Row>
      <Row>
        <Col span={4}><div class="grid-content bg-purple" /></Col>
        <Col span={4}><div class="grid-content bg-purple-light" /></Col>
        <Col span={4}><div class="grid-content bg-purple" /></Col>
        <Col span={4}><div class="grid-content bg-purple-light" /></Col>
        <Col span={4}><div class="grid-content bg-purple" /></Col>
        <Col span={4}><div class="grid-content bg-purple-light" /></Col>
      </Row>
    </div>

    <Meta>
      <div class="description"><div><p>通过 row 和 col 组件，并通过 col 组件的 <code>span</code> 属性我们就可以自由地组合布局。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Row, Col } from '@maiji/svelte_element';

<Row>
  <Col span={24}>
    <div class="grid-content bg-purple-dark" />
  </Col>
</Row>
<Row>
  <Col span={12}><div class="grid-content bg-purple" /></Col>
  <Col span={12}><div class="grid-content bg-purple-light" /></Col>
</Row>
<Row>
  <Col span={8}><div class="grid-content bg-purple" /></Col>
  <Col span={8}><div class="grid-content bg-purple-light" /></Col>
  <Col span={8}><div class="grid-content bg-purple" /></Col>
</Row>
<Row>
  <Col span={6}><div class="grid-content bg-purple" /></Col>
  <Col span={6}><div class="grid-content bg-purple-light" /></Col>
  <Col span={6}><div class="grid-content bg-purple" /></Col>
  <Col span={6}><div class="grid-content bg-purple-light" /></Col>
</Row>
<Row>
  <Col span={4}><div class="grid-content bg-purple" /></Col>
  <Col span={4}><div class="grid-content bg-purple-light" /></Col>
  <Col span={4}><div class="grid-content bg-purple" /></Col>
  <Col span={4}><div class="grid-content bg-purple-light" /></Col>
  <Col span={4}><div class="grid-content bg-purple" /></Col>
  <Col span={4}><div class="grid-content bg-purple-light" /></Col>
</Row>

<style>
  .Row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .Col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
    `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="fen-lan-jian-ge"><a href="/#/layout" aria-hidden="true" class="header-anchor">¶</a> 分栏间隔</h3>
  <p>分栏之间存在间隔。</p>
  <div class="demo-block demo-zh-CN demo-layout">
    <div class="source">
      <Row gutter={20}>
        <Col span={6}><div class="grid-content bg-purple" /></Col>
        <Col span={6}><div class="grid-content bg-purple" /></Col>
        <Col span={6}><div class="grid-content bg-purple" /></Col>
        <Col span={6}><div class="grid-content bg-purple" /></Col>
      </Row>
    </div>

    <Meta>
      <div class="description"><div><p>Row 组件 提供 <code>gutter</code> 属性来指定每一栏之间的间隔，默认间隔为 0。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Row, Col } from '@maiji/svelte_element';
    
<Row gutter={20}>
  <Col span={6}><div class="grid-content bg-purple" /></Col>
  <Col span={6}><div class="grid-content bg-purple" /></Col>
  <Col span={6}><div class="grid-content bg-purple" /></Col>
  <Col span={6}><div class="grid-content bg-purple" /></Col>
</Row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

`}
        />
      </div>
    </Meta>
  </div>

  <h3 id="hun-he-bu-ju"><a href="/#/layout" aria-hidden="true" class="header-anchor">¶</a> 混合布局</h3>
  <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
  <div class="demo-block demo-zh-CN demo-layout">
    <div class="source">
      <Row gutter={20}>
        <Col span={16}><div class="grid-content bg-purple" /></Col>
        <Col span={8}><div class="grid-content bg-purple" /></Col>
      </Row>
      <Row gutter={20}>
        <Col span={8}><div class="grid-content bg-purple" /></Col>
        <Col span={8}><div class="grid-content bg-purple" /></Col>
        <Col span={4}><div class="grid-content bg-purple" /></Col>
        <Col span={4}><div class="grid-content bg-purple" /></Col>
      </Row>
      <Row gutter={20}>
        <Col span={4}><div class="grid-content bg-purple" /></Col>
        <Col span={16}><div class="grid-content bg-purple" /></Col>
        <Col span={4}><div class="grid-content bg-purple" /></Col>
      </Row>
    </div>

    <Meta>
      <div class="highlight">
        <Pre
          code={`
import { Row, Col } from '@maiji/svelte_element';

<Row gutter={20}>
  <Col span={16}><div class="grid-content bg-purple" /></Col>
  <Col span={8}><div class="grid-content bg-purple" /></Col>
</Row>
<Row gutter={20}>
  <Col span={8}><div class="grid-content bg-purple" /></Col>
  <Col span={8}><div class="grid-content bg-purple" /></Col>
  <Col span={4}><div class="grid-content bg-purple" /></Col>
  <Col span={4}><div class="grid-content bg-purple" /></Col>
</Row>
<Row gutter={20}>
  <Col span={4}><div class="grid-content bg-purple" /></Col>
  <Col span={16}><div class="grid-content bg-purple" /></Col>
  <Col span={4}><div class="grid-content bg-purple" /></Col>
</Row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
    
    `}
        />
      </div>
    </Meta>
  </div>
  <h3 id="fen-lan-pian-yi"><a href="/#/layout" aria-hidden="true" class="header-anchor">¶</a> 分栏偏移</h3>
  <p>支持偏移指定的栏数。</p>
  <div class="demo-block demo-zh-CN demo-layout">
    <div class="source">
      <Row gutter={20}>
        <Col span={6}><div class="grid-content bg-purple" /></Col>
        <Col span={6} offset={6}><div class="grid-content bg-purple" /></Col>
      </Row>
      <Row gutter={20}>
        <Col span={6} offset={6}><div class="grid-content bg-purple" /></Col>
        <Col span={6} offset={6}><div class="grid-content bg-purple" /></Col>
      </Row>
      <Row gutter={20}>
        <Col span={12} offset={6}><div class="grid-content bg-purple" /></Col>
      </Row>
    </div>

    <Meta>
      <div class="description"><div><p>通过制定 col 组件的 <code>offset</code> 属性可以指定分栏偏移的栏数。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Row, Col } from '@maiji/svelte_element';

<Row gutter={20}>
  <Col span={6}><div class="grid-content bg-purple" /></Col>
  <Col span={6} offset={6}><div class="grid-content bg-purple" /></Col>
</Row>
<Row gutter={20}>
  <Col span={6} offset={6}><div class="grid-content bg-purple" /></Col>
  <Col span={6} offset={6}><div class="grid-content bg-purple" /></Col>
</Row>
<Row gutter={20}>
  <Col span={12} offset={6}><div class="grid-content bg-purple" /></Col>
</Row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
`}
        />
      </div>
    </Meta>
  </div>

  <h3 id="dui-qi-fang-shi"><a href="/#/layout" aria-hidden="true" class="header-anchor">¶</a> 对齐方式</h3>
  <p>通过 <code>flex</code> 布局来对分栏进行灵活的对齐。</p>
  <div class="demo-block demo-zh-CN demo-layout">
    <div class="source">
      <Row type="flex" class="row-bg">
        <Col span={6}><div class="grid-content bg-purple" /></Col>
        <Col span={6}><div class="grid-content bg-purple-light" /></Col>
        <Col span={6}><div class="grid-content bg-purple" /></Col>
      </Row>
      <Row type="flex" class="row-bg" justify="center">
        <Col span={6}><div class="grid-content bg-purple" /></Col>
        <Col span={6}><div class="grid-content bg-purple-light" /></Col>
        <Col span={6}><div class="grid-content bg-purple" /></Col>
      </Row>
      <Row type="flex" class="row-bg" justify="end">
        <Col span={6}><div class="grid-content bg-purple" /></Col>
        <Col span={6}><div class="grid-content bg-purple-light" /></Col>
        <Col span={6}><div class="grid-content bg-purple" /></Col>
      </Row>
      <Row type="flex" class="row-bg" justify="space-between">
        <Col span={6}><div class="grid-content bg-purple" /></Col>
        <Col span={6}><div class="grid-content bg-purple-light" /></Col>
        <Col span={6}><div class="grid-content bg-purple" /></Col>
      </Row>
      <Row type="flex" class="row-bg" justify="space-around">
        <Col span={6}><div class="grid-content bg-purple" /></Col>
        <Col span={6}><div class="grid-content bg-purple-light" /></Col>
        <Col span={6}><div class="grid-content bg-purple" /></Col>
      </Row>
    </div>

    <Meta>
      <div class="description"><div><p>将 <code>type</code> 属性赋值为 'flex'，可以启用 flex 布局，并可通过 <code>justify</code> 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Row, Col } from '@maiji/svelte_element';

<Row type="flex" class="row-bg">
  <Col span={6}><div class="grid-content bg-purple" /></Col>
  <Col span={6}><div class="grid-content bg-purple-light" /></Col>
  <Col span={6}><div class="grid-content bg-purple" /></Col>
</Row>
<Row type="flex" class="row-bg" justify="center">
  <Col span={6}><div class="grid-content bg-purple" /></Col>
  <Col span={6}><div class="grid-content bg-purple-light" /></Col>
  <Col span={6}><div class="grid-content bg-purple" /></Col>
</Row>
<Row type="flex" class="row-bg" justify="end">
  <Col span={6}><div class="grid-content bg-purple" /></Col>
  <Col span={6}><div class="grid-content bg-purple-light" /></Col>
  <Col span={6}><div class="grid-content bg-purple" /></Col>
</Row>
<Row type="flex" class="row-bg" justify="space-between">
  <Col span={6}><div class="grid-content bg-purple" /></Col>
  <Col span={6}><div class="grid-content bg-purple-light" /></Col>
  <Col span={6}><div class="grid-content bg-purple" /></Col>
</Row>
<Row type="flex" class="row-bg" justify="space-around">
  <Col span={6}><div class="grid-content bg-purple" /></Col>
  <Col span={6}><div class="grid-content bg-purple-light" /></Col>
  <Col span={6}><div class="grid-content bg-purple" /></Col>
</Row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
    `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="xiang-ying-shi-bu-ju"><a href="/#/layout" aria-hidden="true" class="header-anchor">¶</a> 响应式布局</h3>
  <p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code> 和 <code>xl</code>。</p>
  <div class="demo-block demo-zh-CN demo-layout">
    <div class="source">
      <Row gutter={10}>
        <Col xs={8} sm={6} md={4} lg={3} xl={1}><div class="grid-content bg-purple" /></Col>
        <Col xs={4} sm={6} md={8} lg={9} xl={11}><div class="grid-content bg-purple-light" /></Col>
        <Col xs={4} sm={6} md={8} lg={9} xl={11}><div class="grid-content bg-purple" /></Col>
        <Col xs={8} sm={6} md={4} lg={3} xl={1}><div class="grid-content bg-purple-light" /></Col>
      </Row>
    </div>

    <Meta>
      <div class="highlight">
        <Pre
          code={`
import { Row, Col } from '@maiji/svelte_element';
    
<Row gutter={10}>
  <Col xs={8} sm={6} md={4} lg={3} xl={1}><div class="grid-content bg-purple" /></Col>
  <Col xs={4} sm={6} md={8} lg={9} xl={11}><div class="grid-content bg-purple-light" /></Col>
  <Col xs={4} sm={6} md={8} lg={9} xl={11}><div class="grid-content bg-purple" /></Col>
  <Col xs={8} sm={6} md={4} lg={3} xl={1}><div class="grid-content bg-purple-light" /></Col>
</Row>

<style>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
    `}
        />
      </div>
    </Meta>
  </div>
  <h3 id="ji-yu-duan-dian-de-yin-cang-lei"><a href="/#/layout" aria-hidden="true" class="header-anchor">¶</a> 基于断点的隐藏类</h3>
  <p>Element 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。如果需要，请自行引入以下文件：</p>
  <pre><code class="language-js hljs javascript"
      ><span class="hljs-keyword">import</span> <span class="hljs-string">'element-ui/lib/theme-chalk/display.css'</span>;
</code></pre>
  <p>包含的类名及其含义为：</p>
  <ul>
    <li><code>hidden-xs-only</code> - 当视口在 <code>xs</code> 尺寸时隐藏</li>
    <li><code>hidden-sm-only</code> - 当视口在 <code>sm</code> 尺寸时隐藏</li>
    <li><code>hidden-sm-and-down</code> - 当视口在 <code>sm</code> 及以下尺寸时隐藏</li>
    <li><code>hidden-sm-and-up</code> - 当视口在 <code>sm</code> 及以上尺寸时隐藏</li>
    <li><code>hidden-md-only</code> - 当视口在 <code>md</code> 尺寸时隐藏</li>
    <li><code>hidden-md-and-down</code> - 当视口在 <code>md</code> 及以下尺寸时隐藏</li>
    <li><code>hidden-md-and-up</code> - 当视口在 <code>md</code> 及以上尺寸时隐藏</li>
    <li><code>hidden-lg-only</code> - 当视口在 <code>lg</code> 尺寸时隐藏</li>
    <li><code>hidden-lg-and-down</code> - 当视口在 <code>lg</code> 及以下尺寸时隐藏</li>
    <li><code>hidden-lg-and-up</code> - 当视口在 <code>lg</code> 及以上尺寸时隐藏</li>
    <li><code>hidden-xl-only</code> - 当视口在 <code>xl</code> 尺寸时隐藏</li>
  </ul>
  <h3 id="row-attributes"><a href="/#/layout" aria-hidden="true" class="header-anchor">¶</a> Row Attributes</h3>

  <table>
    <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>gutter</td>
        <td>栅格间隔</td>
        <td>number</td>
        <td>—</td>
        <td>0</td>
      </tr>
      <tr>
        <td>type</td>
        <td>布局模式，可选 flex，现代浏览器下有效</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>justify</td>
        <td>flex 布局下的水平排列方式</td>
        <td>string</td>
        <td>start/end/center/space-around/space-between</td>
        <td>start</td>
      </tr>
      <tr>
        <td>align</td>
        <td>flex 布局下的垂直排列方式</td>
        <td>string</td>
        <td>top/middle/bottom</td>
        <td>—</td>
      </tr>
      <tr>
        <td>tag</td>
        <td>自定义元素标签</td>
        <td>string</td>
        <td>*</td>
        <td>div</td>
      </tr>
    </tbody>
  </table>
  <h3 id="col-attributes"><a href="/#/layout" aria-hidden="true" class="header-anchor">¶</a> Col Attributes</h3>

  <table>
    <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>span</td>
        <td>栅格占据的列数</td>
        <td>number</td>
        <td>—</td>
        <td>24</td>
      </tr>
      <tr>
        <td>offset</td>
        <td>栅格左侧的间隔格数</td>
        <td>number</td>
        <td>—</td>
        <td>0</td>
      </tr>
      <tr>
        <td>push</td>
        <td>栅格向右移动格数</td>
        <td>number</td>
        <td>—</td>
        <td>0</td>
      </tr>
      <tr>
        <td>pull</td>
        <td>栅格向左移动格数</td>
        <td>number</td>
        <td>—</td>
        <td>0</td>
      </tr>
      <tr>
        <td>xs</td>
        <td><code>{@html "<768px"}</code> 响应式栅格数或者栅格属性对象</td>
        <td>number/object (例如： {@html "{span: 4, offset: 4}"})</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>sm</td>
        <td><code>≥768px</code> 响应式栅格数或者栅格属性对象</td>
        <td>number/object (例如： {@html "{span: 4, offset: 4}"})</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>md</td>
        <td><code>≥992px</code> 响应式栅格数或者栅格属性对象</td>
        <td>number/object (例如： {@html "{span: 4, offset: 4}"})</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>lg</td>
        <td><code>≥1200px</code> 响应式栅格数或者栅格属性对象</td>
        <td>number/object (例如： {@html "{span: 4, offset: 4}"})</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>xl</td>
        <td><code>≥1920px</code> 响应式栅格数或者栅格属性对象</td>
        <td>number/object (例如： {@html "{span: 4, offset: 4}"})</td>
        <td>—</td>
        <td>—</td>
      </tr>
    </tbody>
  </table>
</section>

<style>
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
