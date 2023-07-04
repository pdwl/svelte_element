<script lang="ts">
  import Radio from "../../component/Radio.svelte";
  import RadioGroup from "../../component/RadioGroup.svelte";
  import RadioButton from "../../component/RadioButton.svelte";
  import Meta from "../meta.svelte";
  import Pre from "../pre.svelte";

  let radio = 1;

  let radio2 = "选中且禁用";

  let radio3 = 3;

  let radio11 = "上海";
  let radio12 = "上海";
  let radio13 = "上海";
  let radio14 = "上海";

  // 要注意变量类型噢，整数对整数，字符串对字符串，要与label的值一致，同一个格式
  // 支持类型 num | string | bool
  let radio21 = "1";
  let radio22 = "1";
  let radio23 = 1;
  let radio24 = 1;
</script>

<section class="content element-doc content">
  <h2 id="radio-dan-xuan-kuang"><a href="https://element.eleme.cn/#/zh-CN/component/radio#radio-dan-xuan-kuang" aria-hidden="true" class="header-anchor">¶</a> Radio 单选框</h2>
  <p>在一组备选项中进行单选</p>
  <h3 id="ji-chu-yong-fa"><a href="https://element.eleme.cn/#/zh-CN/component/radio#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a> 基础用法</h3>
  <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
  <div class="demo-block demo-zh-CN demo-radio">
    <div class="source">
      <Radio bind:value={radio} label={1}>备选项1</Radio>
      <Radio bind:value={radio} label={2}>备选项2</Radio>
    </div>
    <Meta>
      <div class="description"><div><p>要使用 Radio 组件，只需要设置<code>v-value</code>绑定变量，选中意味着变量的值为相应 Radio <code>label</code>属性的值，<code>label</code>可以是<code>String</code>、<code>Number</code>或<code>Boolean</code>。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Radio } from '@maiji/svelte_element';

let radio = 1;

<Radio bind:value={radio} label={1}>备选项1</Radio>
<Radio bind:value={radio} label={2}>备选项2</Radio>

`}
        />
      </div>
    </Meta>
  </div>

  <h3 id="jin-yong-zhuang-tai"><a href="https://element.eleme.cn/#/zh-CN/component/radio#jin-yong-zhuang-tai" aria-hidden="true" class="header-anchor">¶</a> 禁用状态</h3>
  <p>单选框不可用的状态。</p>
  <div class="demo-block demo-zh-CN demo-radio">
    <div class="source">
      <Radio bind:value={radio2} disabled label={"禁用"}>备选项1</Radio>
      <Radio bind:value={radio2} disabled label={"选中且禁用"}>备选项2</Radio>
    </div>
    <Meta>
      <div class="description"><div><p>只要在<code>el-radio</code>元素中设置<code>disabled</code>属性即可，它接受一个<code>Boolean</code>，<code>true</code>为禁用。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Radio } from '@maiji/svelte_element';

let radio2 = "选中且禁用";

<Radio bind:value={radio2} disabled label={"禁用"}>备选项1</Radio>
<Radio bind:value={radio2} disabled label={"选中且禁用"}>备选项2</Radio>
  `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="dan-xuan-kuang-zu"><a href="https://element.eleme.cn/#/zh-CN/component/radio#dan-xuan-kuang-zu" aria-hidden="true" class="header-anchor">¶</a> 单选框组</h3>
  <p>适用于在多个互斥的选项中选择的场景</p>
  <div class="demo-block demo-zh-CN demo-radio">
    <div class="source">
      <RadioGroup bind:value={radio3}>
        <Radio label={3}>备选项</Radio>
        <Radio label={6}>备选项</Radio>
        <Radio label={9}>备选项</Radio>
      </RadioGroup>
    </div>
    <Meta>
      <div class="description"><div><p>结合<code>el-radio-group</code>元素和子元素<code>el-radio</code>可以实现单选组，在<code>el-radio-group</code>中绑定<code>v-value</code>，在<code>el-radio</code>中设置好<code>label</code>即可，无需再给每一个<code>el-radio</code>绑定变量，另外，还提供了<code>change</code>事件来响应变化，它会传入一个参数<code>value</code>。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Radio,RadioGroup } from '@maiji/svelte_element';

let radio3 = 3;

<RadioGroup bind:value={radio3}>
  <Radio label={3}>备选项</Radio>
  <Radio label={6}>备选项</Radio>
  <Radio label={9}>备选项</Radio>
</RadioGroup>
  `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="an-niu-yang-shi"><a href="https://element.eleme.cn/#/zh-CN/component/radio#an-niu-yang-shi" aria-hidden="true" class="header-anchor">¶</a> 按钮样式</h3>
  <p>按钮样式的单选组合。</p>
  <div class="demo-block demo-zh-CN demo-radio">
    <div class="source">
      <div>
        <RadioGroup bind:value={radio11}>
          <RadioButton label={"上海"} />
          <RadioButton label={"北京"} />
          <RadioButton label={"广州"} />
          <RadioButton label={"深圳"} />
        </RadioGroup>
      </div>
      <div style="margin-top: 20px">
        <RadioGroup bind:value={radio12} size="medium">
          <RadioButton label="上海" />
          <RadioButton label="北京" />
          <RadioButton label="广州" />
          <RadioButton label="深圳" />
        </RadioGroup>
      </div>
      <div style="margin-top: 20px">
        <RadioGroup bind:value={radio13} size="small">
          <RadioButton label="上海" />
          <RadioButton label="北京" disabled />
          <RadioButton label="广州" />
          <RadioButton label="深圳" />
        </RadioGroup>
      </div>
      <div style="margin-top: 20px">
        <RadioGroup bind:value={radio14} disabled size="mini">
          <RadioButton label="上海" />
          <RadioButton label="北京" />
          <RadioButton label="广州" />
          <RadioButton label="深圳" />
        </RadioGroup>
      </div>
    </div>
    <Meta>
      <div class="description"><div><p>只需要把<code>el-radio</code>元素换成<code>el-radio-button</code>元素即可，此外，Element 还提供了<code>size</code>属性。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { RadioGroup,RadioButton } from '@maiji/svelte_element';

let radio11 = "上海";
let radio12 = "上海";
let radio13 = "上海";
let radio14 = "上海";

<div>
  <RadioGroup bind:value={radio11}>
    <RadioButton label={"上海"} />
    <RadioButton label={"北京"} />
    <RadioButton label={"广州"} />
    <RadioButton label={"深圳"} />
  </RadioGroup>
</div>
<div style="margin-top: 20px">
  <RadioGroup bind:value={radio12} size="medium">
    <RadioButton label="上海" />
    <RadioButton label="北京" />
    <RadioButton label="广州" />
    <RadioButton label="深圳" />
  </RadioGroup>
</div>
<div style="margin-top: 20px">
  <RadioGroup bind:value={radio13} size="small">
    <RadioButton label="上海" />
    <RadioButton label="北京" disabled />
    <RadioButton label="广州" />
    <RadioButton label="深圳" />
  </RadioGroup>
</div>
<div style="margin-top: 20px">
  <RadioGroup bind:value={radio14} disabled size="mini">
    <RadioButton label="上海" />
    <RadioButton label="北京" />
    <RadioButton label="广州" />
    <RadioButton label="深圳" />
  </RadioGroup>
</div>
  `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="dai-you-bian-kuang"><a href="https://element.eleme.cn/#/zh-CN/component/radio#dai-you-bian-kuang" aria-hidden="true" class="header-anchor">¶</a> 带有边框</h3>
  <div class="demo-block demo-zh-CN demo-radio">
    <div class="source">
      <div>
        <Radio bind:value={radio21} label={"1"} border>备选项1</Radio>
        <Radio bind:value={radio21} label={"2"} border>备选项2</Radio>
      </div>
      <div style="margin-top: 20px">
        <Radio bind:value={radio22} label={"1"} border size="medium">备选项1</Radio>
        <Radio bind:value={radio22} label={"2"} border size="medium">备选项2</Radio>
      </div>
      <div style="margin-top: 20px">
        <RadioGroup bind:value={radio23} size="small">
          <Radio label={1} border>备选项1</Radio>
          <Radio label={2} border disabled>备选项2</Radio>
        </RadioGroup>
      </div>
      <div style="margin-top: 20px">
        <RadioGroup bind:value={radio24} size="mini" disabled>
          <Radio label={1} border>备选项1</Radio>
          <Radio label={2} border>备选项2</Radio>
        </RadioGroup>
      </div>
    </div>
    <Meta>
      <div class="description"><div><p>设置<code>border</code>属性可以渲染为带有边框的单选框。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Radio,RadioGroup  } from '@maiji/svelte_element';

// 要注意变量类型噢，整数对整数，字符串对字符串，要与label的值一致，同一个格式
// 支持类型 num | string | bool
let radio21 = '1';
let radio22 = '1';
let radio23 = 1;
let radio24 = 1;
<div>
    <Radio bind:value={radio21} label={'1'} border>备选项1</Radio>
    <Radio bind:value={radio21} label={'2'} border>备选项2</Radio>
  </div>
  <div style="margin-top: 20px">
    <Radio bind:value={radio22} label={'1'} border size="medium">备选项1</Radio>
    <Radio bind:value={radio22} label={'2'} border size="medium">备选项2</Radio>
  </div>
  <div style="margin-top: 20px">
    <RadioGroup bind:value={radio23} size="small">
      <Radio label={1} border>备选项1</Radio>
      <Radio label={2} border disabled>备选项2</Radio>
    </RadioGroup>
  </div>
  <div style="margin-top: 20px">
    <RadioGroup bind:value={radio24} size="mini" disabled>
      <Radio label={1} border>备选项1</Radio>
      <Radio label={2} border>备选项2</Radio>
    </RadioGroup>
  </div>
`}
        />
      </div>
    </Meta>
  </div>
  <h3 id="radio-attributes"><a href="https://element.eleme.cn/#/zh-CN/component/radio#radio-attributes" aria-hidden="true" class="header-anchor">¶</a> Radio Attributes</h3>

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
        <td>value / v-value</td>
        <td>绑定值</td>
        <td>string / number / boolean</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>label</td>
        <td>Radio 的 value</td>
        <td>string / number / boolean</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>border</td>
        <td>是否显示边框</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>size</td>
        <td>Radio 的尺寸，仅在 border 为真时有效</td>
        <td>string</td>
        <td>medium / small / mini</td>
        <td>—</td>
      </tr>
      <tr>
        <td>name</td>
        <td>原生 name 属性</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
    </tbody>
  </table>
  <h3 id="radio-events"><a href="https://element.eleme.cn/#/zh-CN/component/radio#radio-events" aria-hidden="true" class="header-anchor">¶</a> Radio Events</h3>

  <table>
    <thead>
      <tr>
        <th>事件名称</th>
        <th>说明</th>
        <th>回调参数</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>input</td>
        <td>绑定值变化时触发的事件</td>
        <td>选中的 Radio label 值</td>
      </tr>
    </tbody>
  </table>
  <h3 id="radio-group-attributes"><a href="https://element.eleme.cn/#/zh-CN/component/radio#radio-group-attributes" aria-hidden="true" class="header-anchor">¶</a> Radio-group Attributes</h3>

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
        <td>value / v-value</td>
        <td>绑定值</td>
        <td>string / number / boolean</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>size</td>
        <td>单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效</td>
        <td>string</td>
        <td>medium / small / mini</td>
        <td>—</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>text-color</td>
        <td>按钮形式的 Radio 激活时的文本颜色</td>
        <td>string</td>
        <td>—</td>
        <td>#ffffff</td>
      </tr>
      <tr>
        <td>fill</td>
        <td>按钮形式的 Radio 激活时的填充色和边框色</td>
        <td>string</td>
        <td>—</td>
        <td>#409EFF</td>
      </tr>
    </tbody>
  </table>
  <h3 id="radio-group-events"><a href="https://element.eleme.cn/#/zh-CN/component/radio#radio-group-events" aria-hidden="true" class="header-anchor">¶</a> Radio-group Events</h3>

  <table>
    <thead>
      <tr>
        <th>事件名称</th>
        <th>说明</th>
        <th>回调参数</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>input</td>
        <td>绑定值变化时触发的事件</td>
        <td>选中的 Radio label 值</td>
      </tr>
    </tbody>
  </table>
  <h3 id="radio-button-attributes"><a href="https://element.eleme.cn/#/zh-CN/component/radio#radio-button-attributes" aria-hidden="true" class="header-anchor">¶</a> Radio-button Attributes</h3>

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
        <td>label</td>
        <td>Radio 的 value</td>
        <td>string / number</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>name</td>
        <td>原生 name 属性</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
    </tbody>
  </table>
</section>
