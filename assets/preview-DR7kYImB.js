const __vite__fileDeps=["./DocsRenderer-PKQXORMH--mTGTYb8.js","./iframe-D27mZb60.js","./index-DJO9vBfz.js","./react-18-CYlqeV5r.js","./index-DLC2J04D.js","./index-DFHVm_6N.js","./index-D-8MO0q_.js","./index-0wbOH00J.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-D27mZb60.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH--mTGTYb8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
