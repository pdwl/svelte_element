<script lang="ts">
  import Alert from "../../component/Alert.svelte";
  import Meta from "../meta.svelte";
  import Pre from "../pre.svelte";

  function hello() {
    alert("Hello World!");
  }
</script>

<section class="content element-doc content">
  <h2 id="alert-jing-gao"><a href="/#/alert" aria-hidden="true" class="header-anchor">¶</a> Alert 警告</h2>
  <p>用于页面中展示重要的提示信息。</p>
  <h3 id="ji-ben-yong-fa"><a href="/#/alert" aria-hidden="true" class="header-anchor">¶</a> 基本用法</h3>
  <p>页面中的非浮层元素，不会自动消失。</p>
  <div class="demo-block demo-zh-CN demo-alert">
    <div class="source">
      <Alert title="成功提示的文案" type="success" />
      <Alert title="消息提示的文案" type="info" />
      <Alert title="警告提示的文案" type="warning" />
      <Alert title="错误提示的文案" type="error" />
      <Alert type="error">
        <h1>使用slot传入</h1>
      </Alert>
    </div>
    <Meta>
      <div class="description"><div><p>Alert 组件提供四种主题，由<code>type</code>属性指定，默认值为<code>info</code>。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Alert } from '@maiji/svelte_element';

<Alert title="成功提示的文案" type="success" />
<Alert title="消息提示的文案" type="info" />
<Alert title="警告提示的文案" type="warning" />
<Alert title="错误提示的文案" type="error" />
<Alert type="error">
  <h1>使用slot传入</h1>
</Alert>
`}
        />
      </div>
    </Meta>
  </div>

  <h3 id="zhu-ti"><a href="/#/alert" aria-hidden="true" class="header-anchor">¶</a> 主题</h3>
  <p>Alert 组件提供了两个不同的主题：<code>light</code>和<code>dark</code>。</p>
  <div class="demo-block demo-zh-CN demo-alert">
    <div class="source">
      <Alert title="成功提示的文案" type="success" effect="dark" />
      <Alert title="消息提示的文案" type="info" effect="dark" />
      <Alert title="警告提示的文案" type="warning" effect="dark" />
      <Alert title="错误提示的文案" type="error" effect="dark" />
    </div>
    <Meta>
      <div class="description"><div><p>通过设置<code>effect</code>属性来改变主题，默认为<code>light</code>。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Alert } from '@maiji/svelte_element';

<Alert title="成功提示的文案" type="success" effect="dark" />
<Alert title="消息提示的文案" type="info" effect="dark" />
<Alert title="警告提示的文案" type="warning" effect="dark" />
<Alert title="错误提示的文案" type="error" effect="dark" />
`}
        />
      </div>
    </Meta>
  </div>

  <h3 id="zi-ding-yi-guan-bi-an-niu"><a href="/#/alert" aria-hidden="true" class="header-anchor">¶</a> 自定义关闭按钮</h3>
  <p>自定义关闭按钮为文字或其他符号。</p>
  <div class="demo-block demo-zh-CN demo-alert">
    <div class="source">
      <Alert title="不可关闭的 alert" type="success" closable={false} />
      <Alert title="自定义 closeText" type="info" closeText="知道了" />
      <Alert title="设置了回调的 alert" type="warning" on:close={hello} />
    </div>

    <Meta>
      <div class="description"><div><p>在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。<code>closable</code>属性决定是否可关闭，接受<code>boolean</code>，默认为<code>true</code>。你可以设置<code>closeText</code>属性来代替右侧的关闭图标，注意：<code>closeText</code>必须为文本。设置<code>close</code>事件来设置关闭时的回调。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Alert } from '@maiji/svelte_element';

function hello(){
  alert('Hello World!');
}

<Alert title="不可关闭的 alert" type="success" closable={false} />
<Alert title="自定义 closeText" type="info" closeText="知道了" />
<Alert title="设置了回调的 alert" type="warning" on:close={hello} />
`}
        />
      </div>
    </Meta>
  </div>

  <h3 id="dai-you-icon"><a href="/#/alert" aria-hidden="true" class="header-anchor">¶</a> 带有 icon</h3>
  <p>表示某种状态时提升可读性。</p>
  <div class="demo-block demo-zh-CN demo-alert">
    <div class="source">
      <Alert title="成功提示的文案" type="success" showIcon />
      <Alert title="消息提示的文案" type="info" showIcon />
      <Alert title="警告提示的文案" type="warning" showIcon />
      <Alert title="错误提示的文案" type="error" showIcon />
    </div>

    <Meta>
      <div class="description"><div><p>通过设置<code>showIcon</code>属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Alert } from '@maiji/svelte_element';
    
<Alert title="成功提示的文案" type="success" showIcon />
<Alert title="消息提示的文案" type="info" showIcon />
<Alert title="警告提示的文案" type="warning" showIcon />
<Alert title="错误提示的文案" type="error" showIcon />
    `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="wen-zi-ju-zhong"><a href="/#/alert" aria-hidden="true" class="header-anchor">¶</a> 文字居中</h3>
  <p>使用 <code>center</code> 属性让文字水平居中。</p>
  <div class="demo-block demo-zh-CN demo-alert">
    <div class="source">
      <Alert title="成功提示的文案" type="success" center showIcon />
      <Alert title="消息提示的文案" type="info" center showIcon />
      <Alert title="警告提示的文案" type="warning" center showIcon />
      <Alert title="错误提示的文案" type="error" center showIcon />
    </div>

    <Meta>
      <div class="highlight">
        <Pre
          code={`
import { Alert } from '@maiji/svelte_element';

<Alert title="成功提示的文案" type="success" center showIcon />
<Alert title="消息提示的文案" type="info" center showIcon />
<Alert title="警告提示的文案" type="warning" center showIcon />
<Alert title="错误提示的文案" type="error" center showIcon />
    `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="dai-you-fu-zhu-xing-wen-zi-jie-shao"><a href="/#/alert" aria-hidden="true" class="header-anchor">¶</a> 带有辅助性文字介绍</h3>
  <p>包含标题和内容，解释更详细的警告。</p>
  <div class="demo-block demo-zh-CN demo-alert">
    <div class="source">
      <Alert title="带辅助性文字介绍" type="success" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……" />
      <Alert type="success">
        <span slot="title">使用slot传入的title</span>
        <h1>使用slot传入的这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……</h1>
      </Alert>
    </div>
    <Meta>
      <div class="description"><div><p>除了必填的<code>title</code>属性外，你可以设置<code>description</code>属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Alert } from '@maiji/svelte_element';

<Alert title="带辅助性文字介绍" type="success" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……" />
<Alert type="success">
  <span slot="title">使用slot传入的title</span>
  <h1>使用slot传入的这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……</h1>
</Alert>
    `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao"><a href="/#/alert" aria-hidden="true" class="header-anchor">¶</a> 带有 icon 和辅助性文字介绍</h3>
  <div class="demo-block demo-zh-CN demo-alert">
    <div class="source">
      <Alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon />
      <Alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon />
      <Alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon />
      <Alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon />
    </div>

    <Meta>
      <div class="description"><div><p>最后，这是一个同时具有 icon 和辅助性文字的样例。</p></div></div>
      <div class="highlight">
        <Pre
          code={`
import { Alert } from '@maiji/svelte_element';

<Alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon />
<Alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon />
<Alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon />
<Alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon />
    `}
        />
      </div>
    </Meta>
  </div>

  <h3 id="attributes"><a href="/#/alert" aria-hidden="true" class="header-anchor">¶</a> Attributes</h3>
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
        <td>title</td>
        <td>标题</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>type</td>
        <td>主题</td>
        <td>string</td>
        <td>success/warning/info/error</td>
        <td>info</td>
      </tr>
      <tr>
        <td>description</td>
        <td>辅助性文字。也可通过默认 slot 传入</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>closable</td>
        <td>是否可关闭</td>
        <td>boolean</td>
        <td>—</td>
        <td>true</td>
      </tr>
      <tr>
        <td>center</td>
        <td>文字是否居中</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>closeText</td>
        <td>关闭按钮自定义文本</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>showIcon</td>
        <td>是否显示图标</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>effect</td>
        <td>选择提供的主题</td>
        <td>string</td>
        <td>light/dark</td>
        <td>light</td>
      </tr>
    </tbody>
  </table>
  <h3 id="slot"><a href="/#/alert" aria-hidden="true" class="header-anchor">¶</a> Slot</h3>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>—</td>
        <td>描述</td>
      </tr>
      <tr>
        <td>title</td>
        <td>标题的内容</td>
      </tr>
    </tbody>
  </table>
  <h3 id="events"><a href="/#/alert" aria-hidden="true" class="header-anchor">¶</a> Events</h3>
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
        <td>close</td>
        <td>关闭alert时触发的事件</td>
        <td>—</td>
      </tr>
    </tbody>
  </table>
</section>
