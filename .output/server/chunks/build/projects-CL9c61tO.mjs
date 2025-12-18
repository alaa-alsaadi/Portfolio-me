import { u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { a as projects } from './portfolioData-DDv_3iM-.mjs';
import '../_/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'ipx';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Projects - Alaa Abdulhussein",
      meta: [
        {
          name: "description",
          content: "Explore my portfolio of web development projects, mobile apps, and IT solutions. Featuring Laravel, Vue.js, Flutter, and more."
        },
        { property: "og:title", content: "Projects - Alaa Abdulhussein" },
        { property: "og:description", content: "Showcasing 23+ completed projects across web development, mobile apps, and IT infrastructure." },
        { property: "og:type", content: "website" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "dashboard" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen py-24"${_scopeId}><section class="container mx-auto px-4 md:px-6 lg:px-8 mb-16"${_scopeId}><div class="text-center max-w-3xl mx-auto animate-slide-up"${_scopeId}><h1 class="text-5xl md:text-6xl font-bold text-foreground mb-6"${_scopeId}> Crafting Digital Experiences </h1><p class="text-lg text-muted-foreground"${_scopeId}> Explore a curated selection of my work, showcasing innovative solutions and technical expertise across various domains. </p></div></section><section class="container mx-auto px-4 md:px-6 lg:px-8 mb-16"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(unref(projects), (project, index) => {
              _push2(`<div class="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col border border-border hover:border-primary/50 group animate-scale-in relative" style="${ssrRenderStyle({ animationDelay: `${index * 0.05}s` })}"${_scopeId}><div class="absolute top-4 right-4 z-10"${_scopeId}>`);
              if (project.status === "completed") {
                _push2(`<span class="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full"${_scopeId}> \u2713 Completed </span>`);
              } else if (project.status === "active") {
                _push2(`<span class="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full animate-pulse"${_scopeId}> \u25CF Active </span>`);
              } else if (project.status === "in-progress") {
                _push2(`<span class="px-3 py-1 bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full"${_scopeId}> \u27F3 In Progress </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><img${ssrRenderAttr("src", project.thumbnail)}${ssrRenderAttr("alt", project.title)} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"${_scopeId}><div class="p-6 flex flex-col flex-grow"${_scopeId}><h3 class="text-xl font-bold text-foreground mb-2"${_scopeId}>${ssrInterpolate(project.title)}</h3><p class="text-sm text-muted-foreground mb-4 flex-grow"${_scopeId}>${ssrInterpolate(project.description)}</p><div class="flex flex-wrap gap-2 mb-4"${_scopeId}><!--[-->`);
              ssrRenderList(project.techStack.slice(0, 4), (tech) => {
                _push2(`<span class="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"${_scopeId}>${ssrInterpolate(tech)}</span>`);
              });
              _push2(`<!--]-->`);
              if (project.techStack.length > 4) {
                _push2(`<span class="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md"${_scopeId}> +${ssrInterpolate(project.techStack.length - 4)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex gap-3 mt-auto pt-4 border-t border-border/50"${_scopeId}>`);
              if (project.demoLink) {
                _push2(`<a${ssrRenderAttr("href", project.demoLink)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-sm text-primary hover:underline"${_scopeId}><span class="i-lucide-external-link w-4 h-4"${_scopeId}></span><span${_scopeId}>Demo</span></a>`);
              } else {
                _push2(`<!---->`);
              }
              if (project.githubLink) {
                _push2(`<a${ssrRenderAttr("href", project.githubLink)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-sm text-primary hover:underline"${_scopeId}><span class="i-lucide-github w-4 h-4"${_scopeId}></span><span${_scopeId}>Code</span></a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
            });
            _push2(`<!--]--></div></section><section class="container mx-auto px-4 md:px-6 lg:px-8"${_scopeId}><div class="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-12 text-center animate-scale-in"${_scopeId}><div class="max-w-2xl mx-auto"${_scopeId}><h2 class="text-3xl font-bold text-foreground mb-4"${_scopeId}> Explore More Projects </h2><p class="text-muted-foreground mb-8"${_scopeId}> Curious about my other work? I have many more open-source projects and contributions waiting for you to discover! </p><a href="https://github.com/alaa-abdulhussein" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all group"${_scopeId}><span class="i-lucide-github w-5 h-5"${_scopeId}></span><span${_scopeId}>View My GitHub Profile</span><span class="i-lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform"${_scopeId}></span></a></div></div></section></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen py-24" }, [
                createVNode("section", { class: "container mx-auto px-4 md:px-6 lg:px-8 mb-16" }, [
                  createVNode("div", { class: "text-center max-w-3xl mx-auto animate-slide-up" }, [
                    createVNode("h1", { class: "text-5xl md:text-6xl font-bold text-foreground mb-6" }, " Crafting Digital Experiences "),
                    createVNode("p", { class: "text-lg text-muted-foreground" }, " Explore a curated selection of my work, showcasing innovative solutions and technical expertise across various domains. ")
                  ])
                ]),
                createVNode("section", { class: "container mx-auto px-4 md:px-6 lg:px-8 mb-16" }, [
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project, index) => {
                      return openBlock(), createBlock("div", {
                        key: project.id,
                        class: "bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col border border-border hover:border-primary/50 group animate-scale-in relative",
                        style: { animationDelay: `${index * 0.05}s` }
                      }, [
                        createVNode("div", { class: "absolute top-4 right-4 z-10" }, [
                          project.status === "completed" ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full"
                          }, " \u2713 Completed ")) : project.status === "active" ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full animate-pulse"
                          }, " \u25CF Active ")) : project.status === "in-progress" ? (openBlock(), createBlock("span", {
                            key: 2,
                            class: "px-3 py-1 bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                          }, " \u27F3 In Progress ")) : createCommentVNode("", true)
                        ]),
                        createVNode("img", {
                          src: project.thumbnail,
                          alt: project.title,
                          class: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", { class: "p-6 flex flex-col flex-grow" }, [
                          createVNode("h3", { class: "text-xl font-bold text-foreground mb-2" }, toDisplayString(project.title), 1),
                          createVNode("p", { class: "text-sm text-muted-foreground mb-4 flex-grow" }, toDisplayString(project.description), 1),
                          createVNode("div", { class: "flex flex-wrap gap-2 mb-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(project.techStack.slice(0, 4), (tech) => {
                              return openBlock(), createBlock("span", {
                                key: tech,
                                class: "px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
                              }, toDisplayString(tech), 1);
                            }), 128)),
                            project.techStack.length > 4 ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md"
                            }, " +" + toDisplayString(project.techStack.length - 4), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "flex gap-3 mt-auto pt-4 border-t border-border/50" }, [
                            project.demoLink ? (openBlock(), createBlock("a", {
                              key: 0,
                              href: project.demoLink,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              class: "flex items-center gap-1 text-sm text-primary hover:underline"
                            }, [
                              createVNode("span", { class: "i-lucide-external-link w-4 h-4" }),
                              createVNode("span", null, "Demo")
                            ], 8, ["href"])) : createCommentVNode("", true),
                            project.githubLink ? (openBlock(), createBlock("a", {
                              key: 1,
                              href: project.githubLink,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              class: "flex items-center gap-1 text-sm text-primary hover:underline"
                            }, [
                              createVNode("span", { class: "i-lucide-github w-4 h-4" }),
                              createVNode("span", null, "Code")
                            ], 8, ["href"])) : createCommentVNode("", true)
                          ])
                        ])
                      ], 4);
                    }), 128))
                  ])
                ]),
                createVNode("section", { class: "container mx-auto px-4 md:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-12 text-center animate-scale-in" }, [
                    createVNode("div", { class: "max-w-2xl mx-auto" }, [
                      createVNode("h2", { class: "text-3xl font-bold text-foreground mb-4" }, " Explore More Projects "),
                      createVNode("p", { class: "text-muted-foreground mb-8" }, " Curious about my other work? I have many more open-source projects and contributions waiting for you to discover! "),
                      createVNode("a", {
                        href: "https://github.com/alaa-abdulhussein",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all group"
                      }, [
                        createVNode("span", { class: "i-lucide-github w-5 h-5" }),
                        createVNode("span", null, "View My GitHub Profile"),
                        createVNode("span", { class: "i-lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" })
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-CL9c61tO.mjs.map
