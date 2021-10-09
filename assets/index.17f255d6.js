import{j as c,e as a,r as l,R as u,a as h}from"./vendor.d7e11ed0.js";const m=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};m();const r=c.exports.jsx,p=c.exports.jsxs;a.setOptions({breaks:!0});const f=new a.Renderer,k=`# This is a Markdown Previewer

## This is a subheading

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can make text **bold**
Or you can make a list
- like this
  - or this.

Even make a block quote like this:
> This is a Block quote

You can also embed an image like this:
![sunset](https://i.ibb.co/tP57KZ3/sandmoon.jpg)

[View a Markdown Cheatsheet here.](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)`;function w(){const[n,i]=l.exports.useState(k);return r("div",{className:"App",children:p("div",{className:"text-center px-4",children:[r("h1",{className:"heading",children:"Markdown Previewer"}),r("h4",{children:"Enter your Markdown text here:"}),r("textarea",{className:"textarea",name:"markdown",id:"editor",rows:"10",value:n,onChange:o=>i(o.target.value)}),r("h4",{className:"text-preview",children:"Here's the Markdown Preview:"}),r(v,{markdown:n})]})})}function v({markdown:n}){return r("div",{dangerouslySetInnerHTML:{__html:a(n,{renderer:f})},id:"preview"})}u.render(r(h.StrictMode,{children:r(w,{})}),document.getElementById("root"));
