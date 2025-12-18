import { _ as _export_sfc, u as useHead, a as __nuxt_component_0$1 } from "../server.mjs";
import { defineComponent, h, Comment, mergeProps, cloneVNode, Fragment, toRefs, ref, getCurrentInstance, reactive, watch, watchEffect, markRaw, nextTick, computed, effectScope, inject, provide, unref, withCtx, renderSlot, useSSRContext, createVNode, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$9 } from "./NuxtImg-CZI1WIPY.js";
import { clsx } from "clsx";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { _ as __nuxt_component_0 } from "./nuxt-link-CD-lJ1FB.js";
import { s as skills, m as metrics, p as personalInfo, a as projects, e as experience, b as achievements } from "./portfolioData-DDv_3iM-.js";
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
function te(a2, t) {
  const e = typeof a2 == "string" && !t ? `${a2}Context` : t, n = Symbol(e);
  return [(r) => {
    const i = inject(n, r);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(a2) ? `one of the following components: ${a2.join(
        ", "
      )}` : `\`${a2}\``}`
    );
  }, (r) => (provide(n, r), r)];
}
function li(a2) {
  let t = false, e;
  const n = effectScope(true);
  return (...l) => (t || (e = n.run(() => a2(...l)), t = true), e);
}
function je(a2) {
  return typeof a2 == "function" ? a2() : unref(a2);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function $e(a2) {
  var t;
  const e = je(a2);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
const Rt = void 0;
function qa(a2) {
  return a2 ? a2.flatMap((t) => t.type === Fragment ? qa(t.children) : [t]) : [];
}
function zl(a2, t) {
  const e = ref(a2);
  function n(s) {
    return t[e.value][s] ?? e.value;
  }
  return {
    state: e,
    dispatch: (s) => {
      e.value = n(s);
    }
  };
}
const Jn = defineComponent({
  name: "PrimitiveSlot",
  inheritAttrs: false,
  setup(a2, { attrs: t, slots: e }) {
    return () => {
      var u, d;
      if (!e.default)
        return null;
      const n = qa(e.default()), l = n.findIndex((c) => c.type !== Comment);
      if (l === -1)
        return n;
      const s = n[l];
      (u = s.props) == null || delete u.ref;
      const r = s.props ? mergeProps(t, s.props) : t;
      t.class && ((d = s.props) != null && d.class) && delete s.props.class;
      const i = cloneVNode(s, r);
      for (const c in r)
        c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = r[c]);
      return n.length === 1 ? i : (n[l] = i, n);
    };
  }
}), O = defineComponent({
  name: "Primitive",
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(a2, { attrs: t, slots: e }) {
    const n = a2.asChild ? "template" : a2.as;
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => h(n, t) : n !== "template" ? () => h(a2.as, t, { default: e.default }) : () => h(Jn, t, { default: e.default });
  }
});
function Re() {
  const a2 = ref(), t = computed(() => {
    var e, n;
    return ["#text", "#comment"].includes((e = a2.value) == null ? void 0 : e.$el.nodeName) ? (n = a2.value) == null ? void 0 : n.$el.nextElementSibling : $e(a2);
  });
  return {
    primitiveElement: a2,
    currentElement: t
  };
}
function Xi(a2, t) {
  var _;
  const e = ref({}), n = ref("none"), l = ref(a2), s = a2.value ? "mounted" : "unmounted";
  let r;
  const i = ((_ = t.value) == null ? void 0 : _.ownerDocument.defaultView) ?? Rt, { state: u, dispatch: d } = zl(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  }), c = (C) => {
  };
  watch(
    a2,
    async (C, $) => {
      var E;
      const h2 = $ !== C;
      if (await nextTick(), h2) {
        const P = n.value, D = Ia(t.value);
        C ? (d("MOUNT"), D === "none" && c()) : D === "none" || ((E = e.value) == null ? void 0 : E.display) === "none" ? (d("UNMOUNT"), c()) : $ && P !== D ? (d("ANIMATION_OUT"), c()) : (d("UNMOUNT"), c());
      }
    },
    { immediate: true }
  );
  const f = (C) => {
    const $ = Ia(t.value), h2 = $.includes(
      C.animationName
    );
    u.value === "mounted" ? "enter" : "leave";
    if (C.target === t.value && h2 && (d("ANIMATION_END"), !l.value)) {
      const P = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", r = i == null ? void 0 : i.setTimeout(() => {
        var D;
        ((D = t.value) == null ? void 0 : D.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = P);
      });
    }
    C.target === t.value && $ === "none" && d("ANIMATION_END");
  }, v = (C) => {
    C.target === t.value && (n.value = Ia(t.value));
  };
  watch(
    t,
    (C, $) => {
      C ? (e.value = getComputedStyle(C), C.addEventListener("animationstart", v), C.addEventListener("animationcancel", f), C.addEventListener("animationend", f)) : (d("ANIMATION_END"), r !== void 0 && (i == null || i.clearTimeout(r)), $ == null || $.removeEventListener("animationstart", v), $ == null || $.removeEventListener("animationcancel", f), $ == null || $.removeEventListener("animationend", f));
    },
    { immediate: true }
  );
  watch(u, () => {
    const C = Ia(t.value);
    n.value = u.value === "mounted" ? C : "none";
  });
  return {
    isPresent: computed(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function Ia(a2) {
  return a2 && getComputedStyle(a2).animationName || "none";
}
defineComponent({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: true
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(a2, { slots: t, expose: e }) {
    var d;
    const { present: n, forceMount: l } = toRefs(a2), s = ref(), { isPresent: r } = Xi(n, s);
    e({ present: r });
    let i = t.default({ present: r });
    i = qa(i || []);
    const u = getCurrentInstance();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((f) => `  - ${f}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => l.value || n.value || r.value ? h(t.default({ present: r })[0], {
      ref: (c) => {
        const f = $e(c);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-radix-popper-content-wrapper") ? s.value = f.firstElementChild : s.value = f), f;
      }
    }) : null;
  }
});
reactive({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
li(() => ref([]));
const [oo] = te("CollectionProvider");
defineComponent({
  name: "CollectionSlot",
  setup(a2, { slots: t }) {
    const e = oo(), { primitiveElement: n, currentElement: l } = Re();
    return watch(l, () => {
      e.collectionRef.value = l.value;
    }), () => h(Jn, { ref: n }, t);
  }
});
defineComponent({
  name: "CollectionItem",
  inheritAttrs: false,
  props: {
    value: {
      // It accepts any value
      validator: () => true
    }
  },
  setup(a2, { slots: t, attrs: e }) {
    const n = oo(), { primitiveElement: l, currentElement: s } = Re();
    return watchEffect((r) => {
      if (s.value) {
        const i = markRaw(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: a2.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => h(Jn, { ...e, [n.attrName]: "", ref: l }, t);
  }
});
function xp() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
xp() === "coarse";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    asChild: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(O), mergeProps({
        "as-child": __props.asChild,
        class: unref(cn)(unref(buttonVariants)({ variant: __props.variant, size: __props.size }), _ctx.$attrs.class ?? "")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Button.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "MetricsDisplay",
  __ssrInlineRender: true,
  props: {
    metrics: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" }, _attrs))}><div class="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all hover:transform hover:scale-105 cursor-pointer animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}"><div class="flex items-center justify-between"><div><h4 class="text-3xl md:text-4xl font-bold text-foreground tabular-nums">${ssrInterpolate(__props.metrics.yearsExperience)}+</h4><p class="text-sm text-muted-foreground mt-1.5">Years of Experience</p></div><div class="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors"><span class="i-lucide-award w-8 h-8 text-blue-500"></span></div></div></div><div class="group relative overflow-hidden bg-gradient-to-br from-green-500/10 to-green-600/5 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all hover:transform hover:scale-105 cursor-pointer animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}"><div class="flex items-center justify-between"><div><h4 class="text-3xl md:text-4xl font-bold text-foreground tabular-nums">${ssrInterpolate(__props.metrics.completedProjects)}+</h4><p class="text-sm text-muted-foreground mt-1.5">Completed Projects</p></div><div class="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors"><span class="i-lucide-check-circle w-8 h-8 text-green-500"></span></div></div></div><div class="group relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105 cursor-pointer animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}"><div class="flex items-center justify-between"><div><h4 class="text-3xl md:text-4xl font-bold text-foreground tabular-nums">${ssrInterpolate(__props.metrics.clientCollaborations)}+ </h4><p class="text-sm text-muted-foreground mt-1.5">Client Collaborations</p></div><div class="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors"><span class="i-lucide-users w-8 h-8 text-purple-500"></span></div></div></div><div class="group relative overflow-hidden bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:transform hover:scale-105 cursor-pointer animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.4s" })}"><div class="flex items-center justify-between"><div><h4 class="text-3xl md:text-4xl font-bold text-foreground tabular-nums">${ssrInterpolate(__props.metrics.githubStars.toLocaleString())}</h4><p class="text-sm text-muted-foreground mt-1.5">GitHub Stars</p></div><div class="p-3 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors"><span class="i-lucide-star w-8 h-8 text-yellow-500"></span></div></div></div><div class="group relative overflow-hidden bg-gradient-to-br from-orange-500/10 to-orange-600/5 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all hover:transform hover:scale-105 cursor-pointer animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.5s" })}"><div class="flex items-center justify-between"><div><h4 class="text-3xl md:text-4xl font-bold text-foreground tabular-nums">${ssrInterpolate(__props.metrics.coreTechnologies.length)}+ </h4><p class="text-sm text-muted-foreground mt-1.5">Core Technologies</p></div><div class="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors"><span class="i-lucide-cpu w-8 h-8 text-orange-500"></span></div></div></div><div class="group relative overflow-hidden bg-gradient-to-br from-pink-500/10 to-pink-600/5 p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all hover:transform hover:scale-105 cursor-pointer animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.6s" })}"><div class="flex items-center justify-between"><div><h4 class="text-3xl md:text-4xl font-bold text-foreground tabular-nums">${ssrInterpolate(__props.metrics.projectCompletionRate)}% </h4><p class="text-sm text-muted-foreground mt-1.5">Success Rate</p></div><div class="p-3 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors"><span class="i-lucide-trending-up w-8 h-8 text-pink-500"></span></div></div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MetricsDisplay.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  props: {
    personalInfo: {},
    metrics: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$9;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen flex items-center justify-center overflow-hidden animate-fade-in" }, _attrs))} data-v-5a0728b4><div class="absolute inset-0 bg-grid-pattern opacity-5" data-v-5a0728b4></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-5a0728b4><div class="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style="${ssrRenderStyle({ "animation-duration": "20s" })}" data-v-5a0728b4></div><div class="absolute bottom-32 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style="${ssrRenderStyle({ "animation-duration": "15s", "animation-delay": "-5s" })}" data-v-5a0728b4></div><div class="absolute top-40 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-float" style="${ssrRenderStyle({ "animation-duration": "18s", "animation-delay": "-8s" })}" data-v-5a0728b4></div><div class="absolute bottom-20 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-float" style="${ssrRenderStyle({ "animation-duration": "22s", "animation-delay": "-3s" })}" data-v-5a0728b4></div><div class="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rotate-45 animate-spin-slow" data-v-5a0728b4></div><div class="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rotate-12 animate-pulse-slow" data-v-5a0728b4></div></div><div class="absolute top-20 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" data-v-5a0728b4></div><div class="absolute bottom-20 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" data-v-5a0728b4></div><div class="container mx-auto px-4 md:px-6 lg:px-8 py-20 relative z-10" data-v-5a0728b4><div class="flex flex-col lg:flex-row items-center justify-between gap-12" data-v-5a0728b4><div class="flex-1 text-center lg:text-left space-y-8 animate-slide-up" data-v-5a0728b4><div class="flex flex-col lg:flex-row items-center lg:items-start gap-6" data-v-5a0728b4><div class="relative" data-v-5a0728b4>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: __props.personalInfo.avatar,
        alt: __props.personalInfo.name,
        width: "128",
        height: "128",
        format: "webp",
        loading: "eager",
        class: "w-32 h-32 rounded-full object-cover ring-4 ring-primary/20 shadow-xl"
      }, null, _parent));
      _push(`<div class="absolute -bottom-2 -right-2 px-3 py-1 bg-green-500 dark:bg-green-600 text-white text-xs font-medium rounded-full shadow-lg flex items-center gap-1.5 animate-pulse-slow" data-v-5a0728b4><span class="w-2 h-2 bg-white rounded-full animate-pulse" data-v-5a0728b4></span> Available </div></div><div class="flex-1" data-v-5a0728b4><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight animate-slide-up" data-v-5a0728b4> Hi, I&#39;m <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-v-5a0728b4>${ssrInterpolate(__props.personalInfo.name)}</span></h1><p class="mt-3 text-xl md:text-2xl text-secondary-foreground font-medium" data-v-5a0728b4>${ssrInterpolate(__props.personalInfo.title)}</p></div></div><p class="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed" data-v-5a0728b4>${ssrInterpolate(__props.personalInfo.bio)}</p><div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" data-v-5a0728b4>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        variant: "default",
        as: "a",
        href: __props.personalInfo.cvDownloadLink,
        target: "_blank",
        class: "w-full sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="i-lucide-download w-4 h-4 mr-2" data-v-5a0728b4${_scopeId}></span> Download CV `);
          } else {
            return [
              createVNode("span", { class: "i-lucide-download w-4 h-4 mr-2" }),
              createTextVNode(" Download CV ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        variant: "outline",
        as: "a",
        href: "#contact",
        class: "w-full sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="i-lucide-mail w-4 h-4 mr-2" data-v-5a0728b4${_scopeId}></span> Contact Me `);
          } else {
            return [
              createVNode("span", { class: "i-lucide-mail w-4 h-4 mr-2" }),
              createTextVNode(" Contact Me ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-center lg:justify-start gap-4" data-v-5a0728b4><!--[-->`);
      ssrRenderList(__props.personalInfo.socialLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.url)} target="_blank" rel="noopener noreferrer" class="p-3 rounded-lg bg-card hover:bg-accent border border-border hover:border-primary transition-all group"${ssrRenderAttr("aria-label", link.name)} data-v-5a0728b4><span class="${ssrRenderClass([link.icon, "w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"])}" data-v-5a0728b4></span></a>`);
      });
      _push(`<!--]--></div></div><div class="flex-1 w-full max-w-xl animate-scale-in" data-v-5a0728b4><div class="bg-card rounded-xl shadow-2xl overflow-hidden border border-border" data-v-5a0728b4><div class="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border" data-v-5a0728b4><div class="flex gap-2" data-v-5a0728b4><div class="w-3 h-3 rounded-full bg-red-500" data-v-5a0728b4></div><div class="w-3 h-3 rounded-full bg-yellow-500" data-v-5a0728b4></div><div class="w-3 h-3 rounded-full bg-green-500" data-v-5a0728b4></div></div><span class="text-xs text-muted-foreground ml-2 font-mono" data-v-5a0728b4>developer.ts</span></div><div class="p-6 font-mono text-sm" data-v-5a0728b4><pre class="text-foreground" data-v-5a0728b4><code data-v-5a0728b4><span class="text-purple-500" data-v-5a0728b4>const</span> <span class="text-blue-400" data-v-5a0728b4>developer</span> <span class="text-white" data-v-5a0728b4>=</span> {
  <span class="text-green-400" data-v-5a0728b4>name</span><span class="text-white" data-v-5a0728b4>:</span> <span class="text-amber-400" data-v-5a0728b4>&quot;${ssrInterpolate(__props.personalInfo.name)}&quot;</span>,
  <span class="text-green-400" data-v-5a0728b4>role</span><span class="text-white" data-v-5a0728b4>:</span> <span class="text-amber-400" data-v-5a0728b4>&quot;${ssrInterpolate(__props.personalInfo.title)}&quot;</span>,
  <span class="text-green-400" data-v-5a0728b4>skills</span><span class="text-white" data-v-5a0728b4>:</span> [
    <span class="text-amber-400" data-v-5a0728b4>&quot;Vue.js&quot;</span>, 
    <span class="text-amber-400" data-v-5a0728b4>&quot;Nuxt.js&quot;</span>, 
    <span class="text-amber-400" data-v-5a0728b4>&quot;Laravel&quot;</span>,
    <span class="text-amber-400" data-v-5a0728b4>&quot;Flutter&quot;</span>
  ],
  <span class="text-green-400" data-v-5a0728b4>passion</span><span class="text-white" data-v-5a0728b4>:</span> <span class="text-amber-400" data-v-5a0728b4>&quot;Building amazing experiences&quot;</span>,
  <span class="text-green-400" data-v-5a0728b4>available</span><span class="text-white" data-v-5a0728b4>:</span> <span class="text-orange-400" data-v-5a0728b4>true</span>
};</code></pre></div><div class="px-6 pb-6 flex items-center gap-4 flex-wrap" data-v-5a0728b4><div class="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full flex items-center gap-2" data-v-5a0728b4><span class="i-lucide-code w-4 h-4 text-primary" data-v-5a0728b4></span><span class="text-xs font-medium" data-v-5a0728b4>${ssrInterpolate(__props.metrics.yearsExperience)}+ Years</span></div><div class="px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full flex items-center gap-2" data-v-5a0728b4><span class="i-lucide-star w-4 h-4 text-accent" data-v-5a0728b4></span><span class="text-xs font-medium" data-v-5a0728b4>${ssrInterpolate(__props.metrics.githubStars)} GitHub Stars</span></div></div></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        metrics: __props.metrics,
        class: "mt-20"
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5a0728b4"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsSection",
  __ssrInlineRender: true,
  props: {
    projects: {}
  },
  setup(__props) {
    const props = __props;
    const featuredProjects = computed(() => {
      return props.projects.filter((p) => p.featured).slice(0, 6);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$9;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "container mx-auto py-16 px-4 md:px-6 lg:px-8"
      }, _attrs))}><h2 class="text-4xl font-bold text-foreground mb-4 text-center animate-slide-up">Featured Projects</h2><p class="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto"> Explore a selection of my best work, showcasing innovative solutions and technical expertise. </p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"><!--[-->`);
      ssrRenderList(featuredProjects.value, (project, index) => {
        _push(`<div class="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col border border-border hover:border-primary/50 group animate-scale-in" style="${ssrRenderStyle({ animationDelay: `${index * 0.1}s` })}"><div class="absolute top-4 right-4 z-10">`);
        if (project.status === "completed") {
          _push(`<span class="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full"> ✓ Completed </span>`);
        } else if (project.status === "active") {
          _push(`<span class="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full animate-pulse"> ● Active </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: project.thumbnail,
          alt: project.title,
          format: "webp",
          loading: "lazy",
          height: "300",
          class: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        }, null, _parent));
        _push(`<div class="p-6 flex flex-col flex-grow"><h3 class="text-xl font-bold text-foreground mb-2">${ssrInterpolate(project.title)}</h3><p class="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">${ssrInterpolate(project.description)}</p><div class="flex flex-wrap gap-2 mb-4"><!--[-->`);
        ssrRenderList(project.techStack.slice(0, 3), (tech) => {
          _push(`<span class="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]-->`);
        if (project.techStack.length > 3) {
          _push(`<span class="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md"> +${ssrInterpolate(project.techStack.length - 3)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>View All Projects</span><span class="i-lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", null, "View All Projects"),
              createVNode("span", { class: "i-lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectsSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ExperienceSection",
  __ssrInlineRender: true,
  props: {
    experience: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "experience",
        class: "container mx-auto py-16 px-4 md:px-6 lg:px-8"
      }, _attrs))}><h2 class="text-4xl font-bold text-foreground mb-4 text-center animate-slide-up">Experience</h2><p class="text-lg text-secondary-foreground mb-12 text-center max-w-2xl mx-auto"> My professional journey and key milestones. </p><div class="space-y-8"><!--[-->`);
      ssrRenderList(__props.experience, (item, index) => {
        _push(`<div class="flex items-start gap-4 group animate-slide-up" style="${ssrRenderStyle({ animationDelay: `${index * 0.1}s` })}"><div class="w-12 h-12 flex-shrink-0 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xl font-bold shadow-lg group-hover:shadow-primary/50 transition-all group-hover:scale-110"><span class="i-lucide-briefcase w-6 h-6"></span></div><div><h3 class="text-xl font-semibold text-foreground">${ssrInterpolate(item.role)}</h3><p class="text-md text-secondary-foreground">${ssrInterpolate(item.company)}</p><p class="text-sm text-muted-foreground">${ssrInterpolate(item.period)}</p><ul class="list-disc list-inside text-base text-muted-foreground mt-2"><!--[-->`);
        ssrRenderList(item.description, (desc) => {
          _push(`<li>${ssrInterpolate(desc)}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AchievementsSection",
  __ssrInlineRender: true,
  props: {
    achievements: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "achievements",
        class: "container mx-auto py-16 px-4 md:px-6 lg:px-8"
      }, _attrs))}><h2 class="text-4xl font-bold text-foreground mb-4 text-center animate-slide-up">Achievements &amp; Certifications </h2><p class="text-lg text-secondary-foreground mb-12 text-center max-w-2xl mx-auto"> Highlights of my professional growth and recognized expertise. </p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(__props.achievements.certifications, (cert, index) => {
        _push(`<div class="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 p-6 flex flex-col items-start border border-border hover:border-primary/50 transition-all duration-300 group animate-scale-in" style="${ssrRenderStyle({ animationDelay: `${index * 0.1}s` })}"><div class="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl font-bold mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all"><span class="i-lucide-award w-6 h-6"></span></div><h3 class="text-xl font-semibold text-foreground mb-2">${ssrInterpolate(cert.title)}</h3><p class="text-sm text-muted-foreground mb-2">${ssrInterpolate(cert.issuer)}</p><p class="text-sm text-muted-foreground mb-4">Issued: ${ssrInterpolate(cert.date)}</p>`);
        if (cert.verificationUrl) {
          _push(ssrRenderComponent(_sfc_main$8, {
            variant: "link",
            class: "mt-auto text-primary-DEFAULT",
            as: "a",
            href: cert.verificationUrl,
            target: "_blank"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`View Credential`);
              } else {
                return [
                  createTextVNode("View Credential")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AchievementsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContactSection",
  __ssrInlineRender: true,
  props: {
    personalInfo: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "container mx-auto py-16 px-4 md:px-6 lg:px-8"
      }, _attrs))}><h2 class="text-4xl font-bold text-foreground mb-4 text-center animate-slide-up">Contact &amp; Availability</h2><p class="text-lg text-secondary-foreground mb-12 text-center max-w-2xl mx-auto"> I&#39;m currently <span class="text-primary-DEFAULT">${ssrInterpolate(__props.personalInfo.availability)}</span>. Feel free to reach out! </p><div class="max-w-xl mx-auto bg-card/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-border animate-scale-in"><form class="space-y-6"><div><label for="name" class="block text-sm font-medium text-foreground">Name</label><input type="text" id="name" name="name" class="mt-1 block w-full bg-input border-border rounded-md shadow-sm p-3 text-foreground focus:ring-primary-DEFAULT focus:border-primary-DEFAULT"></div><div><label for="email" class="block text-sm font-medium text-foreground">Email</label><input type="email" id="email" name="email" class="mt-1 block w-full bg-input border-border rounded-md shadow-sm p-3 text-foreground focus:ring-primary-DEFAULT focus:border-primary-DEFAULT"></div><div><label for="message" class="block text-sm font-medium text-foreground">Message</label><textarea id="message" name="message" rows="5" class="mt-1 block w-full bg-input border-border rounded-md shadow-sm p-3 text-foreground focus:ring-primary-DEFAULT focus:border-primary-DEFAULT"></textarea></div>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        type: "submit",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Send Message`);
          } else {
            return [
              createTextVNode("Send Message")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><div class="mt-8 text-center"><p class="text-md text-secondary-foreground">You can also find me on:</p><div class="mt-4 flex justify-center space-x-6"><!--[-->`);
      ssrRenderList(__props.personalInfo.socialLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="text-secondary-foreground hover:text-primary-DEFAULT transition-colors"><span class="${ssrRenderClass([link.icon, "w-8 h-8"])}"></span></a>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SkillsVisualization",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))} data-v-1d89ceb5><h2 class="bg-gradient-to-t from-dark-1 to-dark-4 dark:from-[#9d9d9d] dark:to-white inline-block text-transparent bg-clip-text text-[2rem] text-xl mb-6" data-v-1d89ceb5> Knowledge </h2><div class="relative flex h-[100px] w-full flex-col items-center justify-center overflow-hidden" data-v-1d89ceb5><div class="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]" data-v-1d89ceb5><div class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row" data-v-1d89ceb5><!--[-->`);
      ssrRenderList(unref(skills), (skill) => {
        _push(`<img${ssrRenderAttr("alt", skill.name)}${ssrRenderAttr("src", skill.img)} width="70" height="70" class="w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-4 grayscale transition-all duration-300 hover:grayscale-0 opacity-50 hover:opacity-100" loading="lazy" decoding="async" style="${ssrRenderStyle({ "color": "transparent" })}" data-v-1d89ceb5>`);
      });
      _push(`<!--]--></div><div class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row" aria-hidden="true" data-v-1d89ceb5><!--[-->`);
      ssrRenderList(unref(skills), (skill) => {
        _push(`<img${ssrRenderAttr("alt", skill.name)}${ssrRenderAttr("src", skill.img)} width="70" height="70" class="w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-4 grayscale transition-all duration-300 hover:grayscale-0 opacity-50 hover:opacity-100" loading="lazy" decoding="async" style="${ssrRenderStyle({ "color": "transparent" })}" data-v-1d89ceb5>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillsVisualization.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SkillsVisualization = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1d89ceb5"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Alaa Abdulhussein - Full Stack Developer",
      meta: [
        { property: "og:title", content: "Alaa Abdulhussein - Portfolio" },
        { name: "description", content: "A passionate full-stack software developer and UI/UX designer based in Iraq with 8+ years of experience in building amazing digital experiences." },
        { property: "og:description", content: "Full Stack Developer & UI/UX Designer" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "dashboard" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HeroSection, {
              "personal-info": unref(personalInfo),
              metrics: unref(metrics)
            }, null, _parent2, _scopeId));
            _push2(`<section id="skills" class="container mx-auto px-4 md:px-6 lg:px-8 py-16"${_scopeId}><div class="text-center mb-12"${_scopeId}><h2 class="text-3xl md:text-4xl font-bold mb-4"${_scopeId}>Skills &amp; Technologies</h2><p class="text-lg text-muted-foreground max-w-2xl mx-auto"${_scopeId}> Technologies I work with to build amazing digital experiences </p></div>`);
            _push2(ssrRenderComponent(SkillsVisualization, null, null, _parent2, _scopeId));
            _push2(`</section><section id="projects" class="container mx-auto px-4 md:px-6 lg:px-8 py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, { projects: unref(projects) }, null, _parent2, _scopeId));
            _push2(`</section><section id="experience"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, { experience: unref(experience) }, null, _parent2, _scopeId));
            _push2(`</section><section id="achievements" class="container mx-auto px-4 md:px-6 lg:px-8 py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { achievements: unref(achievements) }, null, _parent2, _scopeId));
            _push2(`</section>`);
            _push2(ssrRenderComponent(_sfc_main$2, { "personal-info": unref(personalInfo) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HeroSection, {
                "personal-info": unref(personalInfo),
                metrics: unref(metrics)
              }, null, 8, ["personal-info", "metrics"]),
              createVNode("section", {
                id: "skills",
                class: "container mx-auto px-4 md:px-6 lg:px-8 py-16"
              }, [
                createVNode("div", { class: "text-center mb-12" }, [
                  createVNode("h2", { class: "text-3xl md:text-4xl font-bold mb-4" }, "Skills & Technologies"),
                  createVNode("p", { class: "text-lg text-muted-foreground max-w-2xl mx-auto" }, " Technologies I work with to build amazing digital experiences ")
                ]),
                createVNode(SkillsVisualization)
              ]),
              createVNode("section", {
                id: "projects",
                class: "container mx-auto px-4 md:px-6 lg:px-8 py-16"
              }, [
                createVNode(_sfc_main$5, { projects: unref(projects) }, null, 8, ["projects"])
              ]),
              createVNode("section", { id: "experience" }, [
                createVNode(_sfc_main$4, { experience: unref(experience) }, null, 8, ["experience"])
              ]),
              createVNode("section", {
                id: "achievements",
                class: "container mx-auto px-4 md:px-6 lg:px-8 py-16"
              }, [
                createVNode(_sfc_main$3, { achievements: unref(achievements) }, null, 8, ["achievements"])
              ]),
              createVNode(_sfc_main$2, { "personal-info": unref(personalInfo) }, null, 8, ["personal-info"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Cfkq23Hd.js.map
