import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";/* empty css               */const n=({title:r="Title",text:u="Lorem ipsum",buttonOne:c="Button 1",buttonTwo:i="Button 2",loading:d=!1})=>{const m=[1,2,3];return t.jsx(t.Fragment,{children:t.jsxs("article",{className:"msc-dialog",children:[t.jsx("h4",{className:"msc-dialog-title",children:r}),t.jsx("p",{children:u}),t.jsxs("div",{className:"msc-dialog-footer",children:[t.jsx("button",{className:"msc-btn msc-btn-transparent",children:c}),d===!1?t.jsx("button",{className:"msc-btn msc-btn-blue-solid",children:i}):t.jsx("button",{className:"msc-btn msc-btn-blue-solid",children:t.jsx("div",{class:"msc-btn-dots-container",children:m.map(s=>t.jsx("div",{className:`msc-btn-dot${s}`},s))})})]})]})})},f=n;n.__docgenInfo={description:"",methods:[],displayName:"MscDialog",props:{title:{defaultValue:{value:'"Title"',computed:!1},required:!1},text:{defaultValue:{value:'"Lorem ipsum"',computed:!1},required:!1},buttonOne:{defaultValue:{value:'"Button 1"',computed:!1},required:!1},buttonTwo:{defaultValue:{value:'"Button 2"',computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1}}};const x={title:"Action/Dialog",component:f,parameters:{layout:"centered"},argTypes:{title:{control:"text"},text:{control:"text"},buttonOne:{control:"text"},buttonTwo:{control:"text"},loading:{control:"boolean"}}},e={args:{title:"Are you sure?",text:" You are setting your status as Out of Office. Your organization will see this status until you turn it off.",buttonOne:"cancel",buttonTwo:"continue",loading:!1}};var o,a,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: "Are you sure?",
    text: " You are setting your status as Out of Office. Your organization will see this status until you turn it off.",
    buttonOne: "cancel",
    buttonTwo: "continue",
    loading: false
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const h=["mscLabels"];export{h as __namedExportsOrder,x as default,e as mscLabels};
