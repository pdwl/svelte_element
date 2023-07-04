# Svelte + TS + Vite + elementUI

# Svelte ElemeUI 组件

这个项目提供了一套基于Svelte框架和ElemeUI技术的可重用组件集合。ElemeUI是一个功能强大的UI组件库，提供了许多常用的UI组件，可以帮助您快速构建漂亮的用户界面。

## 安装

使用此组件集合之前，请确保您已经安装了Svelte框架和ElemeUI。如果您尚未安装它们，可以按照以下步骤进行安装：

1. 在命令行中，进入您的项目目录。
2. 运行以下命令安装Svelte框架：

   ```
   npx degit sveltejs/template svelte-app
   cd svelte-app
   npm install
   ```

3. 运行以下命令安装ElemeUI：

   ```
   npm install @maiji/svelte_element
   ```

## 使用示例

在您的Svelte项目中，您可以通过以下步骤来使用ElemeUI组件：

1. 导入需要的组件：

   ```javascript
   import { Button, Input, Modal } from '@maiji/svelte_element';
   ```

2. 在您的组件中使用这些组件：

   ```html
   <Button>点击我</Button>
   <Input placeholder="请输入内容" />
   ```

3. 根据ElemeUI文档中提供的配置选项和事件，调整组件的外观和行为。

## 贡献指南

欢迎贡献您的Svelte ElemeUI组件！如果您希望修复错误、添加新功能或提供改进建议，请按照以下步骤操作：

1. 提交问题：如果您发现任何问题，请在GitHub存储库中创建一个新的Issue来描述它。
2. 分支：创建一个新的分支以进行更改。
3. 修改：在分支上进行所需的更改。
4. 测试：在本地测试您的更改，确保没有引入新的问题。
5. 提交：将您的更改提交到GitHub存储库中。
6. 请求合并：创建一个Pull Request请求将您的更改合并到主分支中。

请记住，在贡献代码之前，请阅读我们的贡献指南，以了解更多详细信息。

## 联系我们

如果您有任何相关问题或疑问，请随时联系我们。您可以在以下位置找到我们：

- GitHub存储库：[https://github.com/pdwl/svelte_element](https://github.com/pdwl/svelte_element)
- 电子邮件：pd87@qq.com

## 许可证

此项目基于[MIT许可证](LICENSE)进行授权。请阅读许可证以了解更多详细信息。