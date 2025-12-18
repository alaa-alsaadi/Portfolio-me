import { defineAsyncComponent, defineComponent, onErrorCaptured, createVNode } from "vue";
import { i as injectHead, c as createError } from "../server.mjs";
import "D:/Portfolio-me/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/Portfolio-me/node_modules/hookable/dist/index.mjs";
import "D:/Portfolio-me/node_modules/unctx/dist/index.mjs";
import "D:/Portfolio-me/node_modules/h3/dist/index.mjs";
import "D:/Portfolio-me/node_modules/klona/dist/index.mjs";
import "D:/Portfolio-me/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "D:/Portfolio-me/node_modules/radix3/dist/index.mjs";
import "D:/Portfolio-me/node_modules/ufo/dist/index.mjs";
import "D:/Portfolio-me/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "D:/Portfolio-me/node_modules/scule/dist/index.mjs";
import "@unhead/schema-org/vue";
import "D:/Portfolio-me/node_modules/devalue/index.js";
import "vue/server-renderer";
const islandComponents = {
  "BrandedLogo": defineAsyncComponent(() => import(
    "./BrandedLogo-sMbZll9O.js"
    /* webpackChunkName: "components/branded-logo-server" */
  ).then((c) => c.default || c)),
  "Frame": defineAsyncComponent(() => import(
    "./Frame-CQj9VkP4.js"
    /* webpackChunkName: "components/frame-server" */
  ).then((c) => c.default || c)),
  "Nuxt": defineAsyncComponent(() => import(
    "./Nuxt-FMzKJBot.js"
    /* webpackChunkName: "components/nuxt-server" */
  ).then((c) => c.default || c)),
  "NuxtSeo": defineAsyncComponent(() => import(
    "./NuxtSeo-Bdz_FuQU.js"
    /* webpackChunkName: "components/nuxt-seo-server" */
  ).then((c) => c.default || c)),
  "Pergel": defineAsyncComponent(() => import(
    "./Pergel-CjikIUP-.js"
    /* webpackChunkName: "components/pergel-server" */
  ).then((c) => c.default || c)),
  "SimpleBlog": defineAsyncComponent(() => import(
    "./SimpleBlog-CbRHAiWq.js"
    /* webpackChunkName: "components/simple-blog-server" */
  ).then((c) => c.default || c)),
  "UnJs": defineAsyncComponent(() => import(
    "./UnJs-CwVq-bWy.js"
    /* webpackChunkName: "components/un-js-server" */
  ).then((c) => c.default || c)),
  "Wave": defineAsyncComponent(() => import(
    "./Wave-qdArrv7Z.js"
    /* webpackChunkName: "components/wave-server" */
  ).then((c) => c.default || c)),
  "WithEmoji": defineAsyncComponent(() => import(
    "./WithEmoji-CpVBYVMB.js"
    /* webpackChunkName: "components/with-emoji-server" */
  ).then((c) => c.default || c))
};
const islandRenderer = defineComponent({
  name: "IslandRenderer",
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const head = injectHead();
    head.entries.clear();
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
      console.log(e);
    });
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});
export {
  islandRenderer as default
};
//# sourceMappingURL=island-renderer-1SsJF8V9.js.map
