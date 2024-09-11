import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r}from"./index-DJO9vBfz.js";/* empty css               */const v=({placeholder:o,variant:S,reset:p})=>{const[d,a]=r.useState(!1),[g,t]=r.useState(!1),[m,w]=r.useState(null),[l,j]=r.useState(null),[C,u]=r.useState(),x=["Buyer 1","Buyer 2","Buyer 3"],D=["25","50","75","100"],k=[{p1:"Est. Thu, Apr 04 from PA",p2:"UPS Ground Freight Saver"},{p1:"Est. Wed, Apr 03 from PA",p2:"1 Day UPS Air (Red)"},{p1:"Est. Thu, Apr 03 from PA",p2:"1 Day UPS (Early AM)"}];r.useEffect(()=>{p&&(a(!1),t(!1),t(!1),w(null),j(null),u()),p=!1},[p]);const c=()=>{a(!d)},y=s=>{u(s),a(!1)},A=s=>{s.preventDefault(),a(!1),u(s.target.value)},h=s=>{w(s),a(!d),t(!0)},$=s=>{j(s),a(!d),t(!0)};switch(S){case"default":return e.jsxs("div",{className:`dropdown-container ${d?"dropdown-active":""} !w-[400px]`,onClick:c,children:[e.jsxs("button",{className:"dropdown-button",children:[e.jsxs("p",{className:"dropdown-placeholder",children:[m??o," ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("i",{className:"fa-solid fa-caret-down"})]}),e.jsx("div",{className:`dropdown-options-container ${d?"":"hidden"}`,children:x.map((s,n)=>e.jsx("div",{className:"dropdown-option",onClick:()=>h(s),children:s},n))})]});case"disabled":return e.jsxs("div",{className:"dropdown-label dropdown-disabled",children:[e.jsx("p",{children:"Label"}),e.jsx("div",{className:"dropdown-container dropdown-disabled !w-[400px]",children:e.jsxs("button",{className:"dropdown-button dropdown-disabled",disabled:!0,children:[e.jsxs("p",{className:"dropdown-placeholder dropdown-disabled",children:[o," ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("i",{className:"fa-solid fa-caret-down"})]})})]});case"with label":return e.jsxs("div",{className:"dropdown-label",children:[e.jsx("p",{children:"Label"}),e.jsxs("div",{className:`dropdown-container ${d?"dropdown-active":""} !w-[400px]`,onClick:c,children:[e.jsxs("button",{className:"dropdown-button",children:[e.jsxs("p",{className:"dropdown-placeholder",children:[m??o," ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("i",{className:"fa-solid fa-caret-down"})]}),e.jsx("div",{className:`dropdown-options-container ${d?"":"hidden"}`,children:x.map((s,n)=>e.jsx("div",{className:"dropdown-option",onClick:()=>h(s),children:s},n))})]})]});case"with label on top":return e.jsxs("div",{className:`dropdown-container ${d?"dropdown-active":""} !w-[400px]`,onClick:c,children:[e.jsx("p",{className:`dropdown-label-top ${g?"":"hidden"}`,children:o}),e.jsxs("button",{className:"dropdown-button",children:[e.jsx("p",{className:"dropdown-placeholder ",children:m??o}),e.jsx("i",{className:"fa-solid fa-caret-down"})]}),e.jsx("div",{className:`dropdown-options-container ${d?"":"hidden"}`,children:x.map((s,n)=>e.jsx("div",{className:"dropdown-option",onClick:()=>h(s),children:s},n))})]});case"double":return e.jsxs("div",{className:`msc-double-dropdown-container ${d?"double-dropdown-active":""} !w-[400px]`,onClick:c,children:[e.jsxs("button",{className:"dropdown-button",children:[e.jsx("div",{className:"text-left",children:l?e.jsxs(e.Fragment,{children:[e.jsxs("p",{class:"text-sm",children:[l.p1.slice(0,5),e.jsx("b",{children:l.p1.slice(5,16)}),l.p1.slice(16,24)]}),e.jsx("p",{class:"text-xs",children:l.p2})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{class:"text-sm",children:["Est. ",e.jsx("b",{children:"Wed, Apr 03"})," from PA"]}),e.jsx("p",{class:"text-xs",children:"Standard UPS Ground"})]})}),e.jsx("i",{className:"fa-solid fa-caret-down"})]}),e.jsx("div",{className:`double-dropdown-options-container ${d?"":"hidden"}`,children:k.map((s,n)=>e.jsxs("div",{class:"double-dropdown-option text-left",onClick:()=>$(s),children:[e.jsxs("p",{class:"text-sm",children:[s.p1.slice(0,5),e.jsx("b",{children:s.p1.slice(5,16)}),s.p1.slice(16,24)]}),e.jsx("p",{class:"text-xs",children:s.p2})]},n))})]});case"numeric":return e.jsxs("div",{className:`numeric-dropdown-container ${d?"dropdown-active":""}`,onClick:c,children:[e.jsxs("div",{className:"numeric-dropdown",children:[e.jsx("input",{type:"number",placeholder:"25",className:"numeric-dropdown-input",onChange:A,value:C||""}),e.jsx("i",{className:"fa-solid fa-caret-down"})]}),d&&e.jsx("div",{className:"numeric-dropdown-options-container",children:D.map(s=>e.jsx("div",{className:"numeric-dropdown-options",onClick:()=>y(s),children:s},s))})]});case"error":return e.jsxs("div",{children:[e.jsx("div",{className:"dropdown-container dropdown-error !w-[400px]",children:e.jsxs("button",{className:"dropdown-button",children:[e.jsxs("p",{className:"dropdown-placeholder dropdown-error",children:[o," *"]}),e.jsx("i",{className:"fa-solid fa-caret-down"})]})}),e.jsx("p",{className:"dropdown-error-message",children:"Error Message"})]})}},E=v;v.__docgenInfo={description:"",methods:[],displayName:"MscDropdown"};const V={title:"Action/Dropdown",component:E,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["default","disabled","with label","with label on top","numeric","double","error"]},placeholder:{control:"text"},reset:{control:"boolean"}}},i={args:{variant:"default",placeholder:"Select a Buyer",reset:!1}};var N,b,f;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: "default",
    placeholder: "Select a Buyer",
    reset: false
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const B=["mscDropdown"];export{B as __namedExportsOrder,V as default,i as mscDropdown};
