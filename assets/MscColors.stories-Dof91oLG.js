import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const c=({palette:o})=>{const a={monochromes:{main:"#212121",grey_xdark:"#2D2D2D",grey_dark:"#3E3E3E",grey:"#717171",grey_light:"#A6A6A6",grey_xlight:"#DBDBDB"},white:{white:"#FFFFFF"},off_white:{off_white:"#F2F2F2"},primary:{blue_xdark:"#0A2C7F",blue_dark:"#0D3AA9",blue:"#1C58EE",blue_light:"#B3C7F9",blue_xlight:"#F1F5FE"},brand_blue:{dark:"#012169",bold:"#0057BB",bright:"#00A3E0"},success:{green_xdark:"#084B2F",green_dark:"#0E754A",green:"#24E594",green_light:"#B6F6DB",green_xlight:"#F1FDF8"},warning:{orange_xdark:"#6C3E00",orange_dark:"#A66000",orange:"#FF980A",orange_light:"#FFDDAD",orange_xlight:"#FFF9F0"},error:{red_xdark:"#6C1400",red_dark:"#A61E00",red:"#CC2500",red_light:"#FFBCAD",red_xlight:"#FFF3F0"}},s=a[o]||a.primary;return r.jsx(r.Fragment,{children:r.jsx("div",{className:"flex",children:Object.keys(s).map(t=>r.jsx("div",{className:`w-16 h-16 flex items-center justify-center text-[12px] ${o==="white"||o==="off_white"?"text-black border":"text-white"}`,style:{backgroundColor:s[t]},children:s[t]},t))})})},d=c;c.__docgenInfo={description:"",methods:[],displayName:"MscColors"};const _={title:"Foundations/Colors",component:d,parameters:{layout:"centered"},argTypes:{palette:{control:"select",options:["monochromes","white","off_white","primary","brand_blue","success","warning","error"]}}},e={args:{palette:"primary"}};var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    palette: "primary"
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const m=["mscColors"];export{m as __namedExportsOrder,_ as default,e as mscColors};
