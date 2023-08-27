import{r as s,A as O,u as j,f as G,d as x,b as l,F as y,j as e,L as N}from"./index-5280db37.js";import{b as K}from"./bcrypt-6fade0b1.js";import{g as W,C as H,O as Y,H as $}from"./Header-3ea36deb.js";import{p as z,A as L,L as V}from"./Alert-6fb9f75f.js";import"./jsx-runtime_commonjs-proxy-9ac0f94c.js";const J="_mDiv_1pg4k_1",Q="_mtMDiv_1pg4k_23",X="_signupErrDiv_1pg4k_53",Z="_glassDiv_1pg4k_61",ee="_FED_1pg4k_81",te="_wFFFDiv_1pg4k_99",oe="_helloDiv_1pg4k_127",ae="_plsDiv_1pg4k_141",le="_googleDiv_1pg4k_157",se="_googleText_1pg4k_183",ne="_OrText_1pg4k_185",re="_form_1pg4k_219",ie="_inpTag_1pg4k_237",ce="_hrs_1pg4k_275",de="_btn_1pg4k_285",me="_member_1pg4k_309",ge="_nameInpDiv_1pg4k_323",pe="_spn_1pg4k_339",ue="_year_1pg4k_369",he="_modal_1pg4k_397",_e="_modalcontent_1pg4k_419",ve="_ok_1pg4k_439",Ce="_mobileno_container_1pg4k_471",fe="_mobileno91_1pg4k_487",De="_CollegeInpmDIv_1pg4k_529",ye="_DropDownmDiv_1pg4k_537",be="_tandCDiv_1pg4k_571",Fe="_acceptLabel_1pg4k_585",t={mDiv:J,mtMDiv:Q,signupErrDiv:X,glassDiv:Z,FED:ee,wFFFDiv:te,helloDiv:oe,plsDiv:ae,googleDiv:le,googleText:se,OrText:ne,form:re,inpTag:ie,hrs:ce,btn:de,member:me,nameInpDiv:ge,spn:pe,year:ue,modal:he,modalcontent:_e,ok:ve,mobileno_container:Ce,mobileno91:fe,CollegeInpmDIv:De,DropDownmDiv:ye,tandCDiv:be,acceptLabel:Fe},B=({setLoad:_})=>{const[n,v]=s.useState(),[b,C]=s.useState([]),[u,d]=s.useState({mainColor:"",secondaryColor:"",symbol:"",title:"",text:"",val:!1}),m=s.useContext(O),D=j(),r=G({onSuccess:g=>v(g)});s.useEffect(()=>{n&&F()},[n]);const F=async()=>{try{_(!0);const g=await x.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${n.access_token}`,{headers:{Authorization:`Bearer ${n.access_token}`,Accept:"application/json"}}),k=g.data.email,a=await x.post("/auth/googleverification",{email:k});if(console.log(a),a.status===202){_(!1),m.login(a.data.user.name,a.data.user.email,a.data.user.img,a.data.user.RollNumber,a.data.user.School,a.data.user.College,a.data.user.MobileNo,a.data.user.selected,Number(a.data.user.access),a.data.token,108e5),m.target==""?D("/MyProfile"):(D(`/${m.target}`),m.settarget(null));return}else _(!1),C(g.data)}catch(g){console.log(g),_(!1),d({mainColor:"#FDEDED",secondaryColor:"#F16360",symbol:"error",title:"Error",text:"The action was not carried out succesfully please try again.",val:!0})}};return l(y,{children:[l("div",{className:t.googleDiv,onClick:()=>r(),children:[e("img",{src:W,className:"icon"}),e("p",{className:t.googleText,children:"SignUp with google"})]}),e(L,{variant:u,val:d}),e(H,{data:b,set:C})]})};B.propTypes={setLoad:z.func.isRequired};function ke(){const[_,n]=s.useState(!1),[v,b]=s.useState(""),[C,u]=s.useState(!1),[d,m]=s.useState({email:"",Password:"",FirstName:"",LastName:"",RollNumber:"",School:"",College:"",MobileNo:"+91",tandC:!1}),[D,r]=s.useState({mainColor:"",secondaryColor:"",symbol:"",title:"",text:"",val:!1}),F=[{value:"1st",text:"1st year"},{value:"2nd",text:"2nd year"},{value:"3rd",text:"3rd year"},{value:"4th",text:"4th year"},{value:"5th",text:"5th year"}];let g=s.useRef();const k=async o=>{o.preventDefault();const{email:i,Password:c,FirstName:M,LastName:q,RollNumber:w,School:T,College:E,MobileNo:h,tandC:S}=d,I=M+" "+q;if(I!==""&&w!==""&&T!==""&&E!==""&&h!==""&&h.length<=12&&h.length>=10&&i!==""&&c!==""&&v!==""&&S){n(!0);const R=K.hashSync(c,{}.VITE_BCRYPT),U={name:I,email:i,password:R,RollNumber:w,School:T,College:E,MobileNo:h,selected:v};try{(await x.post("/auth/register",U)).status===200&&(n(!1),r({mainColor:"#E5F6FD",secondaryColor:"#1AB1F5",symbol:"info",title:"Information",text:"Please check your mail",val:!0}))}catch(f){if(n(!1),console.log(f),console.log(f.response.data.code===1),f.response.data.code===1){r({mainColor:"#FFC0CB",secondaryColor:"#FF69B4",symbol:"pets",title:"Check it out",text:"User already exists",val:!0});return}if(f.response.data.code===2){r({mainColor:"#FFF4E5",secondaryColor:"#FFA117",symbol:"warning",title:"Warning",text:"Invalid email format",val:!0});return}else{r({mainColor:"#FDEDED",secondaryColor:"#F16360",symbol:"error",title:"Error",text:"An Unexpected Error Occurred",val:!0});return}}}else n(!1),h===""||h.length<=12&&h.length>=10?r({mainColor:"#FFC0CB",secondaryColor:"#FF69B4",symbol:"pets",title:"Check it out",text:"Please Fill All The Details",val:!0}):r({mainColor:"#FFF4E5",secondaryColor:"#FFA117",symbol:"warning",title:"Warning",text:"Invalid mobile number",val:!0}),S!=!0&&r({mainColor:"#FFF4E5",secondaryColor:"#FFA117",symbol:"warning",title:"Warning",text:"Please accept the terms and condition",val:!0})},a=o=>{b(o.target.value)},p=o=>{const i=o.target.name,c=o.target.value;c===""?(o.target.style.borderBottom="1px solid  #FF0000",o.target.style.outline="none"):o.target.style.borderBottom="1px solid  black",i==="email"&&(c.indexOf("@")===-1||c.indexOf(".")===-1?(o.target.style.borderBottom="1px solid  #FF0000",o.target.style.outline="none"):o.target.style.borderBottom="1px solid  black"),i==="MobileNo"&&(c.length==10?o.target.style.borderBottom="1px solid  black":(o.target.style.outline="none",o.target.style.borderBottom="1px solid  #FF0000")),i=="College"&&("Kalinga Institute of Industrial Technology".toLowerCase().includes(c)?u(!0):u(!1),c===""?(u(!1),o.target.style.borderBottom="1px solid  #FF0000",o.target.style.outline="none"):o.target.style.borderBottom="1px solid  black"),m(i==="tandC"?{...d,tandC:o.target.checked}:{...d,[i]:c})};s.useEffect(()=>{C&&document.addEventListener("mousedown",P)});const P=o=>{try{g.current.contains(o.target)||u(!1)}catch(i){console.log(i)}},A=()=>{"Kalinga Institute of Industrial Technology".toLowerCase().includes(d.College)&&u(!0)};return l(y,{children:[e(B,{setLoad:n}),e(Y,{}),l("div",{className:t.form,children:[l("form",{children:[l("div",{className:t.nameInpDiv,children:[e("input",{id:"first_name",type:"text",name:"FirstName",placeholder:"First Name",className:t.inpTag,onChange:p,required:!0}),e("input",{type:"text",id:"last_name",name:"LastName",placeholder:"Last Name",className:t.inpTag,onChange:p,required:!0})]}),e("input",{type:"email",id:"email",name:"email",placeholder:"Email",className:t.inpTag,onChange:p,required:!0}),l("div",{className:t.mobileno_container,children:[e("p",{className:t.mobileno91,children:"+91"}),e("input",{type:"number",id:"number",name:"MobileNo",placeholder:"Mobile Number",className:t.inpTag,onChange:p,required:!0})]}),l("div",{ref:g,className:t.CollegeInpmDIv,children:[e("input",{type:"text",id:"college",name:"College",placeholder:"College",className:t.inpTag,value:d.College,onChange:p,onFocus:()=>{A()},spellcheck:"true",autocomplete:"off",required:!0}),e("div",{className:t.DropDownmDiv,id:C?"showDropMenuClg":"hideDropMenuClg",onClick:()=>{m({...d,College:"Kalinga Institute of Industrial Technology"}),u(!1)},children:"Kalinga Institute of Industrial Technology"})]}),e("input",{type:"text",id:"school",name:"School",placeholder:"School",className:t.inpTag,onChange:p,required:!0}),e("input",{type:"text",id:"rollNum",name:"RollNumber",placeholder:"Roll Number",className:t.inpTag,onChange:p,required:!0}),l("select",{value:v,onChange:a,required:!0,className:t.year,children:[e("option",{hidden:!0,children:" Year"}),F.map(o=>e("option",{value:o.value,children:o.text},o.value))]}),e("input",{type:"password",id:"password",name:"Password",placeholder:"Password",className:t.inpTag,onChange:p,required:!0}),l("div",{className:t.tandCDiv,children:[e("input",{type:"checkbox",name:"tandC",id:"tandC",checked:m.tandC,onChange:p,required:!0}),l("label",{htmlFor:"tandC",className:t.acceptLabel,children:["I agree to FED's"," ",e(N,{to:"/T&C",className:"LinkStyle",target:"_blank",children:"Terms and Conditions"})," ","and"," ",e(N,{to:"/PrivacyPolicies",className:"LinkStyle",target:"_blank",children:"Privacy Policy"}),"."]})]}),e("button",{type:"submit",className:t.btn,onClick:k,children:_?e(V,{}):"SignUp"})]}),l("p",{className:t.member,children:["Already a member?"," ",e(N,{to:"/Login",className:"LinkStyle",children:e("span",{className:t.spn,children:"Login"})})]})]}),e(L,{variant:D,val:r})]})}function Ne(){return e(y,{children:e("div",{className:t.mDiv,children:e("div",{className:t.mtMDiv,children:l("div",{className:t.glassDiv,children:[e("p",{className:t.FED,children:"FED"}),l("div",{className:t.wFFFDiv,children:[e($,{title:"Hello There",des:"Please enter Your Details"}),e(ke,{})]})]})})})})}function Ie(){return s.useEffect(()=>{window.scrollTo(0,0)},[]),e(y,{children:e(Ne,{})})}export{Ie as default};