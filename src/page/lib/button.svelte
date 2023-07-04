<script lang="ts">
	import ButtonGroup from '../../component/ButtonGroup.svelte';
  import Button from "../../component/Button.svelte";
  import Row from "../../component/Row.svelte";
  import Meta from "../meta.svelte";
  import Pre from "../pre.svelte";
</script>

<section class="content element-doc content">
  <h2 id="button-an-niu"><a href="https://element.eleme.cn/#/zh-CN/component/button#button-an-niu" aria-hidden="true" class="header-anchor">¶</a> Button 按钮</h2>
  <p>常用的操作按钮。</p>
  <h3 id="ji-chu-yong-fa"><a href="https://element.eleme.cn/#/zh-CN/component/button#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a> 基础用法</h3>
  <p>基础的按钮用法。</p>
  <div class="demo-block demo-zh-CN demo-button">
    <div class="source">
      <Row>
        <Button>默认按钮</Button>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="info">信息按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
      </Row>

      <Row>
        <Button plain>朴素按钮</Button>
        <Button type="primary" plain>主要按钮</Button>
        <Button type="success" plain>成功按钮</Button>
        <Button type="info" plain>信息按钮</Button>
        <Button type="warning" plain>警告按钮</Button>
        <Button type="danger" plain>危险按钮</Button>
      </Row>

      <Row>
        <Button round>圆角按钮</Button>
        <Button type="primary" round>主要按钮</Button>
        <Button type="success" round>成功按钮</Button>
        <Button type="info" round>信息按钮</Button>
        <Button type="warning" round>警告按钮</Button>
        <Button type="danger" round>危险按钮</Button>
      </Row>

      <Row>
        <Button icon="el-icon-search" circle />
        <Button type="primary" icon="el-icon-edit" circle />
        <Button type="success" icon="el-icon-check" circle />
        <Button type="info" icon="el-icon-message" circle />
        <Button type="warning" icon="el-icon-star-off" circle />
        <Button type="danger" icon="el-icon-delete" circle />
      </Row>
    </div>
    <Meta>
      <div class="description"><div><p>使用<code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Button, Row } from '@maiji/svelte_element';

<Row>
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="info">信息按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">危险按钮</Button>
</Row>
<Row>
  <Button plain>朴素按钮</Button>
  <Button type="primary" plain>主要按钮</Button>
  <Button type="success" plain>成功按钮</Button>
  <Button type="info" plain>信息按钮</Button>
  <Button type="warning" plain>警告按钮</Button>
  <Button type="danger" plain>危险按钮</Button>
</Row>
<Row>
  <Button round>圆角按钮</Button>
  <Button type="primary" round>主要按钮</Button>
  <Button type="success" round>成功按钮</Button>
  <Button type="info" round>信息按钮</Button>
  <Button type="warning" round>警告按钮</Button>
  <Button type="danger" round>危险按钮</Button>
</Row>
<Row>
  <Button icon="el-icon-search" circle />
  <Button type="primary" icon="el-icon-edit" circle />
  <Button type="success" icon="el-icon-check" circle />
  <Button type="info" icon="el-icon-message" circle />
  <Button type="warning" icon="el-icon-star-off" circle />
  <Button type="danger" icon="el-icon-delete" circle />
</Row>
  `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="jin-yong-zhuang-tai"><a href="https://element.eleme.cn/#/zh-CN/component/button#jin-yong-zhuang-tai" aria-hidden="true" class="header-anchor">¶</a> 禁用状态</h3>
  <p>按钮不可用状态。</p>
  <div class="demo-block demo-zh-CN demo-button">
    <div class="source">
      <Row>
        <Button disabled>默认按钮</Button>
        <Button type="primary" disabled>主要按钮</Button>
        <Button type="success" disabled>成功按钮</Button>
        <Button type="info" disabled>信息按钮</Button>
        <Button type="warning" disabled>警告按钮</Button>
        <Button type="danger" disabled>危险按钮</Button>
      </Row>

      <Row>
        <Button plain disabled>朴素按钮</Button>
        <Button type="primary" plain disabled>主要按钮</Button>
        <Button type="success" plain disabled>成功按钮</Button>
        <Button type="info" plain disabled>信息按钮</Button>
        <Button type="warning" plain disabled>警告按钮</Button>
        <Button type="danger" plain disabled>危险按钮</Button>
      </Row>
    </div>
    <Meta>
      <div class="description"><div><p>你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Row, Button, } from '@maiji/svelte_element';

<Row>
  <Button disabled>默认按钮</Button>
  <Button type="primary" disabled>主要按钮</Button>
  <Button type="success" disabled>成功按钮</Button>
  <Button type="info" disabled>信息按钮</Button>
  <Button type="warning" disabled>警告按钮</Button>
  <Button type="danger" disabled>危险按钮</Button>
</Row>

<Row>
  <Button plain disabled>朴素按钮</Button>
  <Button type="primary" plain disabled>主要按钮</Button>
  <Button type="success" plain disabled>成功按钮</Button>
  <Button type="info" plain disabled>信息按钮</Button>
  <Button type="warning" plain disabled>警告按钮</Button>
  <Button type="danger" plain disabled>危险按钮</Button>
</Row>
`}
        />
      </div>
    </Meta>
  </div>

  <h3 id="wen-zi-an-niu"><a href="https://element.eleme.cn/#/zh-CN/component/button#wen-zi-an-niu" aria-hidden="true" class="header-anchor">¶</a> 文字按钮</h3>
  <p>没有边框和背景色的按钮。</p>
  <div class="demo-block demo-zh-CN demo-button">
    <div class="source">
      <Button type="text">文字按钮</Button>
      <Button type="text" disabled>文字按钮</Button>
    </div>
    <Meta>
      <div class="highlight">
        <Pre
          code={`
import { Button } from '@maiji/svelte_element';

<Button type="text">文字按钮</Button>
<Button type="text" disabled>文字按钮</Button>
  `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="tu-biao-an-niu"><a href="https://element.eleme.cn/#/zh-CN/component/button#tu-biao-an-niu" aria-hidden="true" class="header-anchor">¶</a> 图标按钮</h3>
  <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
  <div class="demo-block demo-zh-CN demo-button">
    <div class="source">
      <Button type="primary" icon="el-icon-edit" />
      <Button type="primary" icon="el-icon-share" />
      <Button type="primary" icon="el-icon-delete" />
      <Button type="primary" icon="el-icon-search">搜索</Button>
      <Button type="primary">上传<i class="el-icon-upload el-icon--right" /></Button>
    </div>
    <Meta>
      <div class="description"><div><p>设置<code>icon</code>属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用<code>i</code>标签即可，可以使用自定义图标。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Row, Button, } from '@maiji/svelte_element';

<Button type="primary" icon="el-icon-edit"></Button>
<Button type="primary" icon="el-icon-share"></Button>
<Button type="primary" icon="el-icon-delete"></Button>
<Button type="primary" icon="el-icon-search">搜索</Button>
<Button type="primary">上传<i class="el-icon-upload el-icon--right"></i></Button>
  `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="an-niu-zu"><a href="https://element.eleme.cn/#/zh-CN/component/button#an-niu-zu" aria-hidden="true" class="header-anchor">¶</a> 按钮组</h3>
  <p>以按钮组的方式出现，常用于多项类似操作。</p>
  <div class="demo-block demo-zh-CN demo-button">
    <div class="source">
      <ButtonGroup>
        <Button type="primary" icon="el-icon-arrow-left">上一页</Button>
        <Button type="primary">下一页<i class="el-icon-arrow-right el-icon--right" /></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" icon="el-icon-edit" />
        <Button type="primary" icon="el-icon-share" />
        <Button type="primary" icon="el-icon-delete" />
      </ButtonGroup>
    </div>
    <Meta>
      <div class="description"><div><p>使用<code>&lt;el-button-group&gt;</code>标签来嵌套你的按钮。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { ButtonGroup, Button, } from '@maiji/svelte_element';
<ButtonGroup>
  <Button type="primary" icon="el-icon-arrow-left">上一页</Button>
  <Button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></Button>
</ButtonGroup>
<ButtonGroup>
  <Button type="primary" icon="el-icon-edit"></Button>
  <Button type="primary" icon="el-icon-share"></Button>
  <Button type="primary" icon="el-icon-delete"></Button>
</ButtonGroup>
  `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="jia-zai-zhong"><a href="https://element.eleme.cn/#/zh-CN/component/button#jia-zai-zhong" aria-hidden="true" class="header-anchor">¶</a> 加载中</h3>
  <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
  <div class="demo-block demo-zh-CN demo-button">
    <div class="source">
      <Button type="primary" loading={true}>加载中</Button>
    </div>
    <Meta>
      <div class="description"><div><p>要设置为 loading 状态，只要设置<code>loading</code>属性为<code>true</code>即可。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Button, } from '@maiji/svelte_element';
  
<Button type="primary" loading={true}>加载中</Button>
  `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="bu-tong-chi-cun"><a href="https://element.eleme.cn/#/zh-CN/component/button#bu-tong-chi-cun" aria-hidden="true" class="header-anchor">¶</a> 不同尺寸</h3>
  <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
  <div class="demo-block demo-zh-CN demo-button">
    <div class="source">
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
    </div>
    <Meta>
      <div class="description"><div><p>额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Row, Button, } from '@maiji/svelte_element';

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
  `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="attributes"><a href="https://element.eleme.cn/#/zh-CN/component/button#attributes" aria-hidden="true" class="header-anchor">¶</a> Attributes</h3>
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
        <td>size</td>
        <td>尺寸</td>
        <td>string</td>
        <td>medium / small / mini</td>
        <td>—</td>
      </tr>
      <tr>
        <td>type</td>
        <td>类型</td>
        <td>string</td>
        <td>primary / success / warning / danger / info / text</td>
        <td>—</td>
      </tr>
      <tr>
        <td>plain</td>
        <td>是否朴素按钮</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>round</td>
        <td>是否圆角按钮</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>circle</td>
        <td>是否圆形按钮</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>是否加载中状态</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用状态</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>图标类名</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>autofocus</td>
        <td>是否默认聚焦</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>native-type</td>
        <td>原生 type 属性</td>
        <td>string</td>
        <td>button / submit / reset</td>
        <td>button</td>
      </tr>
    </tbody>
  </table>
</section>
