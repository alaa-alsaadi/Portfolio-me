import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-CD-lJ1FB.js";
import { _ as _sfc_main$3 } from "./NuxtImg-CZI1WIPY.js";
import { p as personalInfo } from "./portfolioData-DDv_3iM-.js";
import { _ as _export_sfc } from "../server.mjs";
import "D:/Portfolio-me/node_modules/ufo/dist/index.mjs";
import "D:/Portfolio-me/node_modules/defu/dist/defu.mjs";
import "D:/Portfolio-me/node_modules/h3/dist/index.mjs";
import "D:/Portfolio-me/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/Portfolio-me/node_modules/hookable/dist/index.mjs";
import "D:/Portfolio-me/node_modules/unctx/dist/index.mjs";
import "D:/Portfolio-me/node_modules/klona/dist/index.mjs";
import "vue-router";
import "D:/Portfolio-me/node_modules/radix3/dist/index.mjs";
import "D:/Portfolio-me/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "D:/Portfolio-me/node_modules/scule/dist/index.mjs";
import "@unhead/schema-org/vue";
import "D:/Portfolio-me/node_modules/devalue/index.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DashboardNav",
  __ssrInlineRender: true,
  setup(__props) {
    const navItems = [
      { label: "Home", href: "/#", icon: "i-lucide-home" },
      { label: "Projects", href: "#projects", icon: "i-lucide-briefcase" },
      { label: "Skills", href: "#skills", icon: "i-lucide-code-2" },
      { label: "Experience", href: "#experience", icon: "i-lucide-trophy" },
      { label: "Contact", href: "#contact", icon: "i-lucide-mail" }
    ];
    const mobileMenuOpen = ref(false);
    const isDark = ref(true);
    const scrollProgress = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$3;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 right-0 z-50 glass border-b border-border/30" }, _attrs))} data-v-a7179b52><div class="container mx-auto px-6 lg:px-8" data-v-a7179b52><div class="flex items-center justify-between h-16" data-v-a7179b52>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative" data-v-a7179b52${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: unref(personalInfo).avatar,
              alt: "Alaa",
              width: "40",
              height: "40",
              format: "webp",
              class: "w-10 h-10 rounded-full object-cover ring-2 ring-primary/30 group-hover:ring-primary transition-all"
            }, null, _parent2, _scopeId));
            _push2(`<span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary border-2 border-background rounded-full" data-v-a7179b52${_scopeId}></span></div><div class="hidden sm:block" data-v-a7179b52${_scopeId}><span class="font-bold text-base text-foreground" data-v-a7179b52${_scopeId}>Alaa Abdulhussein</span></div>`);
          } else {
            return [
              createVNode("div", { class: "relative" }, [
                createVNode(_component_NuxtImg, {
                  src: unref(personalInfo).avatar,
                  alt: "Alaa",
                  width: "40",
                  height: "40",
                  format: "webp",
                  class: "w-10 h-10 rounded-full object-cover ring-2 ring-primary/30 group-hover:ring-primary transition-all"
                }, null, 8, ["src"]),
                createVNode("span", { class: "absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary border-2 border-background rounded-full" })
              ]),
              createVNode("div", { class: "hidden sm:block" }, [
                createVNode("span", { class: "font-bold text-base text-foreground" }, "Alaa Abdulhussein")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center gap-1" data-v-a7179b52><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.href,
          to: item.href,
          class: "px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex items-center gap-2" data-v-a7179b52><button class="p-2.5 rounded-lg hover:bg-accent/10 transition-all" aria-label="Toggle theme" data-v-a7179b52>`);
      if (isDark.value) {
        _push(`<span class="i-lucide-sun w-5 h-5 text-primary" data-v-a7179b52></span>`);
      } else {
        _push(`<span class="i-lucide-moon w-5 h-5 text-primary" data-v-a7179b52></span>`);
      }
      _push(`</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#contact",
        class: "hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-a7179b52${_scopeId}>Contact</span>`);
          } else {
            return [
              createVNode("span", null, "Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="md:hidden p-2.5 rounded-lg hover:bg-accent/10 transition-all" aria-label="Toggle menu" data-v-a7179b52>`);
      if (!mobileMenuOpen.value) {
        _push(`<span class="i-lucide-menu w-5 h-5" data-v-a7179b52></span>`);
      } else {
        _push(`<span class="i-lucide-x w-5 h-5" data-v-a7179b52></span>`);
      }
      _push(`</button></div></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div class="md:hidden py-4 border-t border-border/30" data-v-a7179b52><div class="space-y-1" data-v-a7179b52><!--[-->`);
        ssrRenderList(navItems, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.href,
            to: item.href,
            class: "flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all",
            onClick: ($event) => mobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="${ssrRenderClass([item.icon, "w-4 h-4 text-primary"])}" data-v-a7179b52${_scopeId}></span><span data-v-a7179b52${_scopeId}>${ssrInterpolate(item.label)}</span>`);
              } else {
                return [
                  createVNode("span", {
                    class: [item.icon, "w-4 h-4 text-primary"]
                  }, null, 2),
                  createVNode("span", null, toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div><div class="mt-4 px-4" data-v-a7179b52>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#contact",
          class: "flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium",
          onClick: ($event) => mobileMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="i-lucide-send w-4 h-4" data-v-a7179b52${_scopeId}></span><span data-v-a7179b52${_scopeId}>Get In Touch</span>`);
            } else {
              return [
                createVNode("span", { class: "i-lucide-send w-4 h-4" }),
                createVNode("span", null, "Get In Touch")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="absolute bottom-0 left-0 right-0 h-0.5 bg-border/30" data-v-a7179b52><div class="h-full bg-primary transition-all duration-150" style="${ssrRenderStyle({ width: scrollProgress.value + "%" })}" data-v-a7179b52></div></div></nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DashboardNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DashboardNav = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a7179b52"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DashboardFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const socialLinks = [
      { name: "GitHub", url: "https://github.com/munafio", icon: "i-lucide-github" },
      { name: "LinkedIn", url: "https://linkedin.com/in/munafio", icon: "i-lucide-linkedin" },
      { name: "Instagram", url: "https://instagram.com/munafio", icon: "i-lucide-instagram" },
      { name: "YouTube", url: "https://youtube.com/munafio", icon: "i-lucide-youtube" }
    ];
    const quickLinks = [
      { label: "Home", href: "/" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "#contact" }
    ];
    const showBackToTop = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-background border-t border-border mt-32" }, _attrs))}><div class="container mx-auto px-4 md:px-6 lg:px-8 py-12"><div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"><div class="md:col-span-2"><div class="flex items-center gap-3 mb-4">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: unref(personalInfo).avatar,
        alt: "Alaa Abdulhussein",
        width: "48",
        height: "48",
        format: "webp",
        class: "w-12 h-12 rounded-full object-cover"
      }, null, _parent));
      _push(`<div><h3 class="font-bold text-lg">Alaa Abdulhussein</h3><p class="text-sm text-muted-foreground">Full Stack Developer</p></div></div><p class="text-sm text-muted-foreground max-w-md"> Passionate about creating amazing digital experiences with modern web technologies. Available for freelance projects and collaborations. </p><div class="flex items-center gap-4 mt-6"><!--[-->`);
      ssrRenderList(socialLinks, (social) => {
        _push(`<a${ssrRenderAttr("href", social.url)} target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg hover:bg-accent transition-colors"${ssrRenderAttr("aria-label", social.name)}><span class="${ssrRenderClass([social.icon, "w-5 h-5"])}"></span></a>`);
      });
      _push(`<!--]--></div></div><div><h4 class="font-semibold mb-4">Quick Links</h4><ul class="space-y-3"><!--[-->`);
      ssrRenderList(quickLinks, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.href,
          class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div><h4 class="font-semibold mb-4">Get in Touch</h4><ul class="space-y-3"><li class="flex items-start gap-3"><span class="i-lucide-mail w-5 h-5 text-primary mt-0.5"></span><a href="mailto:contact@munafio.com" class="text-sm text-muted-foreground hover:text-foreground transition-colors"> contact@gmail.com </a></li><li class="flex items-start gap-3"><span class="i-lucide-map-pin w-5 h-5 text-primary mt-0.5"></span><span class="text-sm text-muted-foreground">Iraq</span></li><li class="flex items-start gap-3"><span class="i-lucide-clock w-5 h-5 text-primary mt-0.5"></span><span class="text-sm text-muted-foreground">UTC+3</span></li></ul></div></div><div class="pt-8 border-t border-border"><div class="flex flex-col md:flex-row items-center justify-between gap-4"><p class="text-sm text-muted-foreground text-center md:text-left"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Alaa Abdulhussein. All rights reserved. </p><div class="flex items-center gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Privacy Policy `);
          } else {
            return [
              createTextVNode(" Privacy Policy ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Terms of Service `);
          } else {
            return [
              createTextVNode(" Terms of Service ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><button class="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all z-40" aria-label="Back to top" style="${ssrRenderStyle(showBackToTop.value ? null : { display: "none" })}"><span class="i-lucide-arrow-up w-5 h-5"></span></button></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DashboardFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(DashboardNav, null, null, _parent));
      _push(`<main class="flex-1 pt-16">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=dashboard-CYqI5ytk.js.map
