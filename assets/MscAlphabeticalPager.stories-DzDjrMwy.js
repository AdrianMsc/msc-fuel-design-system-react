import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";/* empty css               */const g=()=>{const u=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ","0-9"],l=s.useRef(null),n=s.useRef(null),[p,o]=s.useState(750);return s.useEffect(()=>{const r=()=>{const e=window.innerWidth;e<=1024&&e>=768?o(550):e<=768&&e>=640?o(700):e<=640&&o(750)};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),s.useEffect(()=>{const r=()=>{const i=n.current,t=l.current;i.scrollLeft>=p?t.classList.remove("msc-pager-container-after"):i.scrollLeft>1?(t.classList.add("msc-pager-container-before"),t.classList.add("msc-pager-container-after")):i.scrollLeft<1&&t.classList.remove("msc-pager-container-before")},e=n.current;return e.addEventListener("scroll",r),()=>{e.removeEventListener("scroll",r)}},[p]),a.jsx("div",{id:"pagerContainer",className:"msc-pager-container msc-pager-container-after mt-[200px] mx-5",ref:l,children:a.jsx("ul",{id:"pagerList",className:"msc-pager-list",ref:n,children:u.map((r,e)=>a.jsx("li",{children:a.jsx("button",{className:`msc-pager-item${r==="0-9"?" msc-pager-last-item":""}`,children:r})},e))})})},h=g;g.__docgenInfo={description:"",methods:[],displayName:"MscAlphabeticalPager"};const v={title:"Navigation/AlphabeticalPager",component:h,parameters:{layout:"fullscreen"},argTypes:{}},c={args:{}};var m,d,f;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(f=(d=c.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const E=["mscAlphabeticalPager"];export{E as __namedExportsOrder,v as default,c as mscAlphabeticalPager};
