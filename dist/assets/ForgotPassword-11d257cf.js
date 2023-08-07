import{r,u as y,b as n,F as E,j as t,d as u}from"./index-b820c58a.js";import{L as m,A as v}from"./Alert-92fa6f30.js";function D(){const[c,F]=r.useState(""),[o,C]=r.useState(""),[i,f]=r.useState(!1),[d,e]=r.useState(!1),[h,s]=r.useState({mainColor:"",secondaryColor:"",symbol:"",title:"",text:"",val:!1}),p=y();return n(E,{children:[t("div",{className:"full-page",children:n("div",{className:"insidebox",children:[t("div",{className:"title2",children:t("p",{className:"FED",children:"FED"})}),n("div",{className:"whitebox1",children:[t("div",{className:"hellopart1",children:t("p",{className:"welc1",children:"Forgot Password"})}),n("div",{className:"user",children:[t("input",{type:"text",placeholder:"Email",className:"username1",onChange:l=>C(l.target.value)}),i&&t("input",{type:"password",placeholder:"Enter OTP",className:"username1",onChange:l=>F(l.target.value)})]}),!i&&t("button",{className:"logtwo1",onClick:async l=>{if(l.preventDefault(),e(!0),o===""){e(!1),s({mainColor:"#FFC0CB",secondaryColor:"#FF69B4",symbol:"pets",title:"Check it out",text:"Please Fill All The Details",val:!0});return}try{const a=await u.post("/auth/sendotp",{email:o});console.log(a),a.status===200&&(f(!0),e(!1),s({mainColor:"#EDFEEE",secondaryColor:"#5CB660",symbol:"check_circle",title:"Success",text:"Please check your mail !",val:!0}))}catch(a){if(console.log(a),a.response.status===401){e(!1),s({mainColor:"#FFF4E5",secondaryColor:"#FFA117",symbol:"warning",title:"Warning",text:"Email does not exist.",val:!0});return}else e(!1),s({mainColor:"#FDEDED",secondaryColor:"#F16360",symbol:"error",title:"Error",text:"An Unexpected Error Occured",val:!0})}},children:d?t(m,{}):"Send OTP"}),i&&t("button",{className:"logtwo1",onClick:async l=>{if(l.preventDefault(),e(!0),console.log(o),o===""){e(!1),s({mainColor:"#FFC0CB",secondaryColor:"#FF69B4",symbol:"pets",title:"Check it out",text:"Please Fill All The Details",val:!0});return}else if(c===""){e(!1),s({mainColor:"#FFC0CB",secondaryColor:"#FF69B4",symbol:"pets",title:"Check it out",text:"Please Fill All The Details",val:!0});return}try{(await u.post("/auth/validate",{email:o,otp:c})).status===200&&(e(!1),s({mainColor:"#EDFEEE",secondaryColor:"#5CB660",symbol:"check_circle",title:"Success",text:"OTP Verified successfully",val:!0}),localStorage.setItem("Email",o),p("/resetpassword"))}catch(a){console.log(a),a.response.status===401?(e(!1),s({mainColor:"#FFF4E5",secondaryColor:"#FFA117",symbol:"warning",title:"Warning",text:"Email does not exist.",val:!0})):a.response.status===403?(e(!1),s({mainColor:"#FFF4E5",secondaryColor:"#FFA117",symbol:"warning",title:"Warning",text:"Incorrect OTP.",val:!0})):(e(!1),s({mainColor:"#FDEDED",secondaryColor:"#F16360",symbol:"error",title:"Error",text:"An Unexpected Error Occured",val:!0}))}},children:d?t(m,{}):"Verify OTP"})]})]})}),t(v,{variant:h,val:s})]})}export{D as default};
