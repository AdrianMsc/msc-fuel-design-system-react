import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as d}from"./index-DJO9vBfz.js";/* empty css               */const l=({labels:s=["Tab 1","Tab 2","Tab 3"]})=>{const[i,p]=d.useState(0);s.length>3&&(console.error("The MscTabs component only supports 3 tabs. Only the first 3 tabs will be displayed."),s=s.slice(0,3));const m=r=>{p(r)};return e.jsx(e.Fragment,{children:e.jsx("ul",{className:"msc-tabs grid-cols-6",children:s.map((r,t)=>e.jsx("li",{className:`col-span-6 md:col-span-2 ${i===t?"active":""}`,onClick:()=>m(t),children:e.jsx("a",{children:r})},t))})})},b=l;l.__docgenInfo={description:"",methods:[],displayName:"MscTabs",props:{labels:{defaultValue:{value:'["Tab 1", "Tab 2", "Tab 3"]',computed:!1},required:!1}}};const h={title:"Action/Tabs",component:b,parameters:{layout:"centered"},argTypes:{labels:{control:"array"}}},a={args:{labels:["General Purpose & Heavy Duty","Specialized & High Performance","Maintenance"]}};var c,o,n;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    labels: ["General Purpose & Heavy Duty", "Specialized & High Performance", "Maintenance"]
  }
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const y=["mscTabs"];export{y as __namedExportsOrder,h as default,a as mscTabs};
