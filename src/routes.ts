// Import the wrap method
import { wrap } from "svelte-spa-router/wrap";
import { push } from "svelte-spa-router";

import Test from "./Test.svelte";
import Error from "./Error.svelte";
import Layout from "./page/lib/layout.svelte";
import Container from "./page/lib/container.svelte";
import Color from "./page/lib/color.svelte";
import Changelog from "./page/lib/changelog.svelte";
import Alert from "./page/lib/alert.svelte";
import Typography from "./page/lib/typography.svelte";
import Border from "./page/lib/border.svelte";
import Icon from "./page/lib/icon.svelte";
import Button from "./page/lib/button.svelte";
import Link from "./page/lib/link.svelte";
import Radio from "./page/lib/radio.svelte";

export default {
  "/alert": Alert,
  "/changelog": Changelog,
  "/layout": Layout,
  "/container": Container,
  "/color": Color,
  "/typography": Typography,
  "/border": Border,
  "/icon": Icon,
  "/button": Button,
  "/link": Link,
  "/radio": Radio,

  "/test": Test,
  "/": wrap({
    component: Changelog,
    conditions: [
      () => {
        // 如果在首页，自动跳转日志页面
        let url = window.location.hash.substring(2);
        if (url == "") {
          push("/changelog");
        }
        return true;
      },
    ],
  }),
  "*": Error,
};
