<script lang="ts">
  import Link from "../../component/Link.svelte";
  import Meta from "../meta.svelte";
  import Pre from "../pre.svelte";
</script>

<section class="content element-doc content">
  <h2 id="link-wen-zi-lian-jie"><a href="https://element.eleme.cn/#/zh-CN/component/link#link-wen-zi-lian-jie" aria-hidden="true" class="header-anchor">¶</a> Link 文字链接</h2>
  <p>文字超链接</p>
  <h3 id="ji-chu-yong-fa"><a href="https://element.eleme.cn/#/zh-CN/component/link#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a> 基础用法</h3>
  <p>基础的文字链接用法。</p>
  <div class="demo-block demo-zh-CN demo-link">
    <div class="source">
      <Link href="https://element.eleme.io" target="_blank">默认链接</Link>
      <Link type="primary">主要链接</Link>
      <Link type="success">成功链接</Link>
      <Link type="warning">警告链接</Link>
      <Link type="danger">危险链接</Link>
      <Link type="info">信息链接</Link>
    </div>
    <Meta>
      <div class="highlight">
        <Pre
          code={`
import { Link } from '@maiji/svelte_element';

<Link href="https://element.eleme.io" target="_blank">默认链接</Link>
<Link type="primary">主要链接</Link>
<Link type="success">成功链接</Link>
<Link type="warning">警告链接</Link>
<Link type="danger">危险链接</Link>
<Link type="info">信息链接</Link>
`}
        />
      </div>
    </Meta>
  </div>

  <h3 id="jin-yong-zhuang-tai"><a href="https://element.eleme.cn/#/zh-CN/component/link#jin-yong-zhuang-tai" aria-hidden="true" class="header-anchor">¶</a> 禁用状态</h3>
  <p>文字链接不可用状态。</p>
  <div class="demo-block demo-zh-CN demo-link">
    <div class="source">
      <Link disabled>默认链接</Link>
      <Link type="primary" disabled>主要链接</Link>
      <Link type="success" disabled>成功链接</Link>
      <Link type="warning" disabled>警告链接</Link>
      <Link type="danger" disabled>危险链接</Link>
      <Link type="info" disabled>信息链接</Link>
    </div>
    <Meta>
      <div class="highlight">
        <Pre
          code={`
import { Link } from '@maiji/svelte_element';

<Link disabled>默认链接</Link>
<Link type="primary" disabled>主要链接</Link>
<Link type="success" disabled>成功链接</Link>
<Link type="warning" disabled>警告链接</Link>
<Link type="danger" disabled>危险链接</Link>
<Link type="info" disabled>信息链接</Link>
  `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="xia-hua-xian"><a href="https://element.eleme.cn/#/zh-CN/component/link#xia-hua-xian" aria-hidden="true" class="header-anchor">¶</a> 下划线</h3>
  <p>文字链接下划线。</p>
  <div class="demo-block demo-zh-CN demo-link">
    <div class="source">
      <Link underline={false}>无下划线</Link>
      <Link>有下划线</Link>
    </div>
    <Meta>
      <div class="highlight">
        <Pre
          code={`
import { Link } from '@maiji/svelte_element';

<Link underline={false}>无下划线</Link>
<Link>有下划线</Link>
  `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="tu-biao"><a href="https://element.eleme.cn/#/zh-CN/component/link#tu-biao" aria-hidden="true" class="header-anchor">¶</a> 图标</h3>
  <p>带图标的文字链接可增强辨识度。</p>
  <div class="demo-block demo-zh-CN demo-link">
    <div class="source">
      <Link icon="el-icon-edit">编辑</Link>
      <Link>查看<i class="el-icon-view el-icon--right" /></Link>
    </div>
    <Meta>
      <div class="highlight">
        <Pre
          code={`
import { Link } from '@maiji/svelte_element';

<Link icon="el-icon-edit">编辑</Link>
<Link>查看<i class="el-icon-view el-icon--right" /> </Link>
  `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="attributes"><a href="https://element.eleme.cn/#/zh-CN/component/link#attributes" aria-hidden="true" class="header-anchor">¶</a> Attributes</h3>

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
        <td>type</td>
        <td>类型</td>
        <td>string</td>
        <td>primary / success / warning / danger / info</td>
        <td>default</td>
      </tr>
      <tr>
        <td>underline</td>
        <td>是否下划线</td>
        <td>boolean</td>
        <td>—</td>
        <td>true</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用状态</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>href</td>
        <td>原生 href 属性</td>
        <td>string</td>
        <td>—</td>
        <td>-</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>图标类名</td>
        <td>string</td>
        <td>—</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
</section>
