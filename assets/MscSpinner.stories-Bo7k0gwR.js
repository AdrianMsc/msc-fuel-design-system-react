import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const o=({loadText:i="Loading",variant:s="light"})=>{const c={light:"#212121",dark:"#717171"};return e.jsx(e.Fragment,{children:e.jsx("div",{className:s==="dark"?"msc-spinner-overlay-dark":"msc-spinner-overlay",children:e.jsxs("div",{className:"msc-spinner-wrapper",children:[e.jsxs("svg",{className:"msc-spinner",viewBox:"0 0 62 62",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"31",cy:"31",r:"28",stroke:"white",strokeWidth:"6"}),e.jsx("circle",{opacity:"0.38",cx:"31",cy:"31",r:"28",stroke:c[s],strokeWidth:"6"})," ",e.jsx("path",{opacity:"0.8",d:"M3 31C3 15.536 15.536 3 31 3",stroke:"#212121",strokeWidth:"6",strokeLinecap:"round"})]}),e.jsx("label",{className:s==="dark"?"msc-spinner-label-dark":"msc-spinner-label",children:i})]})})})},l=o;o.__docgenInfo={description:"",methods:[],displayName:"MscSpinner",props:{loadText:{defaultValue:{value:'"Loading"',computed:!1},required:!1},variant:{defaultValue:{value:'"light"',computed:!1},required:!1}}};const m={title:"Action/Spinner",component:l,parameters:{layout:"centered"},argTypes:{loadText:{control:"text"},variant:{control:"select",options:["light","dark"]}}},r={args:{loadText:"Loading Spinner",variant:"light"}};var n,a,t;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    loadText: "Loading Spinner",
    variant: "light"
  }
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const x=["mscSpinner"];export{x as __namedExportsOrder,m as default,r as mscSpinner};
