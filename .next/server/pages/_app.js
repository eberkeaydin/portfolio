"use strict";(()=>{var a={};a.id=636,a.ids=[636],a.modules={2552:(a,b,c)=>{c.r(b),c.d(b,{default:()=>j});var d=c(8732),e=c(2770);let f={fonts:{title:"Space Grotesk, sans-serif",main:"Space Grotesk, sans-serif"},colors:{primary1:"hsl(204,23.8%,95.9%)",background1:"#0F1624",accent1:"hsl(34.9,98.6%,72.9%)",button:"hsl(205.1,100%,36.1%)",background2:"hsl(232.7,27.3%,23.7%)"},breakpoints:{sm:"screen and (max-width: 640px)",md:"screen and (max-width: 768px)",lg:"screen and (max-width: 1024px)",xl:"screen and (max-width: 1280px)"}},g=require("styled-normalize"),h=(0,e.createGlobalStyle)`
  ${g.normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${a=>a.theme.fonts.main};
    font-size: 1.6rem;
    background: ${a=>a.theme.colors.background1};
    color: ${a=>a.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${a=>a.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`,i=({children:a})=>(0,d.jsxs)(e.ThemeProvider,{theme:f,children:[(0,d.jsx)(h,{}),a]});function j({Component:a,pageProps:b}){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(i,{children:(0,d.jsx)(a,{...b})})})}},2770:a=>{a.exports=require("styled-components")},8732:a=>{a.exports=require("react/jsx-runtime")}};var b=require("../webpack-runtime.js");b.C(a);var c=b(b.s=2552);module.exports=c})();