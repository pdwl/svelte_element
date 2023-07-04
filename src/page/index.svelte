<script lang="ts">
  import { location } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import { onMount } from "svelte";

  // 来源于https://github.com/ItalyPaleAle/svelte-spa-router#highlight-active-links
  function IsActive(url) {
    return { path: "/" + url, className: "router-link-exact-active active", inactiveClassName: "" };
  }
</script>

<div class="is-component">
  <div class="main-cnt">
    <div class="page-component__scroll el-scrollbar">
      <div class="el-scrollbar__wrap" style="margin-bottom: -15px; margin-right: -17px;">
        <div class="el-scrollbar__view">
          <div class="page-container page-component">
            <div class="page-component__nav el-scrollbar">
              <div class="el-scrollbar__wrap" style="margin-bottom: -15px; margin-right: -17px;">
                <div class="el-scrollbar__view">
                  <div class="side-nav" style="opacity: 1;">
                    <ul>
                      <li class="nav-item"><a href="#/changelog" use:active={IsActive("changelog")}>更新日志</a></li>
                      <!-- <li class="nav-item">
                        <a>开发指南</a>
                        <ul class="pure-menu-list sub-nav" style="height: auto;">
                          <li class="nav-item"><a href="#/installation" use:active={IsActive("changelog")}>安装</a></li>
                          <li class="nav-item"><a href="#/quickstart" use:active={IsActive("changelog")}>快速上手</a></li>
                          <li class="nav-item"><a href="#/i18n" use:active={IsActive("changelog")}>国际化</a></li>
                          <li class="nav-item"><a href="#/custom-theme" use:active={IsActive("changelog")}>自定义主题</a></li>
                          <li class="nav-item"><a href="#/transition" use:active={IsActive("changelog")}>内置过渡动画</a></li>
                        </ul>
                      </li> -->
                      <li class="nav-item">
                        <a>组件</a>
                        <div class="nav-group">
                          <div class="nav-group__title">Basic</div>
                          <ul class="pure-menu-list" style="height: auto;">
                            <li class="nav-item"><a href="#/layout" use:active={IsActive("layout")}>Layout 布局</a></li>
                            <li class="nav-item"><a href="#/container" use:active={IsActive("container")}>Container 布局容器</a></li>
                            <li class="nav-item"><a href="#/color" use:active={IsActive("color")}>Color 色彩</a></li>
                            <li class="nav-item"><a href="#/typography" use:active={IsActive("typography")}>Typography 字体</a></li>
                            <li class="nav-item"><a href="#/border" use:active={IsActive("border")}>Border 边框</a></li>
                            <li class="nav-item"><a href="#/icon" use:active={IsActive("icon")}>Icon 图标</a></li>
                            <li class="nav-item"><a href="#/button" use:active={IsActive("button")}>Button 按钮</a></li>
                            <li class="nav-item"><a href="#/link" use:active={IsActive("link")}>Link 文字链接</a></li>
                          </ul>
                        </div>
                        <div class="nav-group">
                          <div class="nav-group__title">Form</div>
                          <ul class="pure-menu-list" style="height: auto;">
                            <li class="nav-item"><a href="#/radio" use:active={IsActive("radio")}>Radio 单选框</a></li>
                            <li class="nav-item"><a href="#/checkbox" use:active={IsActive("checkbox")}>Checkbox 多选框</a></li>
                            <li class="nav-item"><a href="#/input" use:active={IsActive("input")}>Input 输入框</a></li>
                            <li class="nav-item"><a href="#/input-number" use:active={IsActive("input-number")}>InputNumber 计数器</a></li>
                            <li class="nav-item"><a href="#/select" use:active={IsActive("select")}>Select 选择器</a></li>
                            <li class="nav-item"><a href="#/cascader" use:active={IsActive("cascader")}>Cascader 级联选择器</a></li>
                            <li class="nav-item"><a href="#/switch" use:active={IsActive("switch")}>Switch 开关</a></li>
                            <li class="nav-item"><a href="#/slider" use:active={IsActive("slider")}>Slider 滑块</a></li>
                            <li class="nav-item"><a href="#/time-picker" use:active={IsActive("time-picker")}>TimePicker 时间选择器</a></li>
                            <li class="nav-item"><a href="#/date-picker" use:active={IsActive("date-picker")}>DatePicker 日期选择器</a></li>
                            <li class="nav-item"><a href="#/datetime-picker" use:active={IsActive("datetime-picker")}>DateTimePicker 日期时间选择器</a></li>
                            <li class="nav-item"><a href="#/upload" use:active={IsActive("upload")}>Upload 上传</a></li>
                            <li class="nav-item"><a href="#/rate" use:active={IsActive("rate")}>Rate 评分</a></li>
                            <li class="nav-item"><a href="#/color-picker" use:active={IsActive("color-picker")}>ColorPicker 颜色选择器</a></li>
                            <li class="nav-item"><a href="#/transfer" use:active={IsActive("transfer")}>Transfer 穿梭框</a></li>
                            <li class="nav-item"><a href="#/form" use:active={IsActive("form")}>Form 表单</a></li>
                          </ul>
                        </div>
                        <div class="nav-group">
                          <div class="nav-group__title">Data</div>
                          <ul class="pure-menu-list" style="height: auto;">
                            <li class="nav-item"><a href="#/table" use:active={IsActive("table")}>Table 表格</a></li>
                            <li class="nav-item"><a href="#/tag" use:active={IsActive("tag")}>Tag 标签</a></li>
                            <li class="nav-item"><a href="#/progress" use:active={IsActive("progress")}>Progress 进度条</a></li>
                            <li class="nav-item"><a href="#/tree" use:active={IsActive("tree")}>Tree 树形控件</a></li>
                            <li class="nav-item"><a href="#/pagination" use:active={IsActive("pagination")}>Pagination 分页</a></li>
                            <li class="nav-item"><a href="#/badge" use:active={IsActive("badge")}>Badge 标记</a></li>
                            <li class="nav-item"><a href="#/avatar" use:active={IsActive("avatar")}>Avatar 头像</a></li>
                            <li class="nav-item"><a href="#/skeleton" use:active={IsActive("skeleton")}>Skeleton 骨架屏</a></li>
                            <li class="nav-item"><a href="#/empty" use:active={IsActive("empty")}>Empty 空状态</a></li>
                            <li class="nav-item"><a href="#/descriptions" use:active={IsActive("descriptions")}>Descriptions 描述列表</a></li>
                            <li class="nav-item"><a href="#/result" use:active={IsActive("result")}>Result 结果</a></li>
                            <li class="nav-item"><a href="#/statistic" use:active={IsActive("statistic")}>Statistic 统计数值</a></li>
                          </ul>
                        </div>
                        <div class="nav-group">
                          <div class="nav-group__title">Notice</div>
                          <ul class="pure-menu-list" style="height: auto;">
                            <li class="nav-item"><a href="#/alert" use:active={IsActive("alert")}>Alert 警告</a></li>
                            <li class="nav-item"><a href="#/loading" use:active={IsActive("loading")}>Loading 加载</a></li>
                            <li class="nav-item"><a href="#/message" use:active={IsActive("message")}>Message 消息提示</a></li>
                            <li class="nav-item"><a href="#/message-box" use:active={IsActive("message-box")}>MessageBox 弹框</a></li>
                            <li class="nav-item"><a href="#/notification" use:active={IsActive("notification")}>Notification 通知</a></li>
                          </ul>
                        </div>
                        <div class="nav-group">
                          <div class="nav-group__title">Navigation</div>
                          <ul class="pure-menu-list" style="height: auto;">
                            <li class="nav-item"><a href="#/menu" use:active={IsActive("menu")}>NavMenu 导航菜单</a></li>
                            <li class="nav-item"><a href="#/tabs" use:active={IsActive("tabs")}>Tabs 标签页</a></li>
                            <li class="nav-item"><a href="#/breadcrumb" use:active={IsActive("breadcrumb")}>Breadcrumb 面包屑</a></li>
                            <li class="nav-item"><a href="#/page-header" use:active={IsActive("page-header")}>PageHeader 页头</a></li>
                            <li class="nav-item"><a href="#/dropdown" use:active={IsActive("dropdown")}>Dropdown 下拉菜单</a></li>
                            <li class="nav-item"><a href="#/steps" use:active={IsActive("steps")}>Steps 步骤条</a></li>
                          </ul>
                        </div>
                        <div class="nav-group">
                          <div class="nav-group__title">Others</div>
                          <ul class="pure-menu-list" style="height: auto;">
                            <li class="nav-item"><a href="#/dialog" use:active={IsActive("dialog")}>Dialog 对话框</a></li>
                            <li class="nav-item"><a href="#/tooltip" use:active={IsActive("tooltip")}>Tooltip 文字提示</a></li>
                            <li class="nav-item"><a href="#/popover" use:active={IsActive("popover")}>Popover 弹出框</a></li>
                            <li class="nav-item"><a href="#/popconfirm" use:active={IsActive("popconfirm")}>Popconfirm 气泡确认框</a></li>
                            <li class="nav-item"><a href="#/card" use:active={IsActive("card")}>Card 卡片</a></li>
                            <li class="nav-item"><a href="#/carousel" use:active={IsActive("carousel")}>Carousel 走马灯</a></li>
                            <li class="nav-item"><a href="#/collapse" use:active={IsActive("collapse")}>Collapse 折叠面板</a></li>
                            <li class="nav-item"><a href="#/timeline" use:active={IsActive("timeline")}>Timeline 时间线</a></li>
                            <li class="nav-item"><a href="#/divider" use:active={IsActive("divider")}>Divider 分割线</a></li>
                            <li class="nav-item"><a href="#/calendar" use:active={IsActive("calendar")}>Calendar 日历</a></li>
                            <li class="nav-item"><a href="#/image" use:active={IsActive("image")}>Image 图片</a></li>
                            <li class="nav-item"><a href="#/backtop" use:active={IsActive("backtop")}>Backtop 回到顶部</a></li>
                            <li class="nav-item"><a href="#/infiniteScroll" use:active={IsActive("infiniteScroll")}>InfiniteScroll 无限滚动</a></li>
                            <li class="nav-item"><a href="#/drawer" use:active={IsActive("drawer")}>Drawer 抽屉</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="el-scrollbar__bar is-horizontal"><div class="el-scrollbar__thumb" style="transform: translateX(0%);" /></div>
              <div class="el-scrollbar__bar is-vertical"><div class="el-scrollbar__thumb" style="height: 26.6687%; transform: translateY(15%);" /></div>
            </div>
            <div class="page-component__content">
              <slot />
            </div>
          </div>
        </div>
      </div>
      <div class="el-scrollbar__bar is-horizontal"><div class="el-scrollbar__thumb" style="transform: translateX(0%);" /></div>
      <div class="el-scrollbar__bar is-vertical"><div class="el-scrollbar__thumb" style="transform: translateY(0%);" /></div>
    </div>
  </div>
</div>
