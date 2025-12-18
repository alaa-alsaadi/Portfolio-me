import { _ as __nuxt_component_0 } from "./nuxt-link-CD-lJ1FB.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "D:/Portfolio-me/node_modules/ufo/dist/index.mjs";
import "D:/Portfolio-me/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/Portfolio-me/node_modules/hookable/dist/index.mjs";
import "D:/Portfolio-me/node_modules/unctx/dist/index.mjs";
import "D:/Portfolio-me/node_modules/h3/dist/index.mjs";
import "D:/Portfolio-me/node_modules/klona/dist/index.mjs";
import "D:/Portfolio-me/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "D:/Portfolio-me/node_modules/radix3/dist/index.mjs";
import "D:/Portfolio-me/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "D:/Portfolio-me/node_modules/scule/dist/index.mjs";
import "@unhead/schema-org/vue";
import "D:/Portfolio-me/node_modules/devalue/index.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}><header class="bg-background border-b border-border p-4 sticky top-0 z-50"><nav class="container mx-auto flex items-center justify-between">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-lg font-bold text-foreground"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`My Portfolio`);
      } else {
        return [
          createTextVNode("My Portfolio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="space-x-4">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#projects",
    class: "text-secondary-foreground hover:text-primary-DEFAULT"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects`);
      } else {
        return [
          createTextVNode("Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#experience",
    class: "text-secondary-foreground hover:text-primary-DEFAULT"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Experience`);
      } else {
        return [
          createTextVNode("Experience")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#achievements",
    class: "text-secondary-foreground hover:text-primary-DEFAULT"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Achievements `);
      } else {
        return [
          createTextVNode("Achievements ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#contact",
    class: "text-secondary-foreground hover:text-primary-DEFAULT"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></nav></header><main class="flex-grow">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer class="bg-background border-t border-border p-4 text-center text-muted-foreground"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} My Portfolio. All rights reserved. </footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-CxhxRnXy.js.map
