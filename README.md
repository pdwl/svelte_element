**我只是一个搬运工，官方ui文档：https://element.eleme.cn/  
I'm just a porter, official UI document: https://element.eleme.cn/**

------------

## 基本说明
- svelte 3.0版本
- 不支持ts 不支持ts 不支持ts 【因为我还没有学会】

## 安装
```shell
npm install @maiji/svelte_element
```

## 配置
- 不使用图标，可以直接引入css，在main.js文件
```shell
import '@maiji/svelte_element/element/index.css'
```
- 使用图标，在public/index.html 添加
```shell
<link rel='stylesheet' href='/Element/index.css'>
```
  Element的主题文件包：[跳转连接](https://element.eleme.cn/#/zh-CN/theme/preview)  
  只需要用到theme文件夹内容
  
## 使用

```
<script>
	import { Button, ButtonGroup } from "@maiji/svelte_element";
	function onclick(e) {
		alert("ok");
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
</main>
```
## 写在后面
- 劲量做到与官方文档一致
- 本是后端php程序员，接触前端让我看到了新世界的大门。代码写的不好，初学者见谅。
- 本人是独立开发者，都是自学，未接触开放式学习，希望能接触大佬，带我飞 ^_^
- email：pd87@qq.com