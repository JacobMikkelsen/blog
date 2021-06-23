(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{4132:function(e,t,n){"use strict";var r=n(5893),i=n(3154);t.Z=function(e){var t=e.name,n=e.picture;return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{src:(0,i.JA)(n),className:"w-12 h-12 rounded-full mr-4",alt:t}),(0,r.jsx)("div",{className:"text-xl font-bold",children:t})]})}},7063:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})}},1653:function(e,t,n){"use strict";var r=n(5893),i=n(4184),a=n.n(i),s=n(1664),c=n(3154);t.Z=function(e){var t=e.title,n=e.src,i=e.slug,l=(0,r.jsx)("img",{src:(0,c.JA)(n),alt:"Cover Image for ".concat(t),className:a()("shadow-small",{"hover:shadow-medium transition-shadow duration-200":i})});return(0,r.jsx)("div",{className:"sm:mx-0",children:i?(0,r.jsx)(s.default,{as:"/posts/".concat(i),href:"/posts/[slug]",children:(0,r.jsx)("a",{"aria-label":t,children:l})}):l})}},3453:function(e,t,n){"use strict";var r=n(5893),i=n(3855),a=n(4790);t.Z=function(e){var t=e.dateString,n=(0,i.Z)(t);return(0,r.jsx)("time",{dateTime:t,children:(0,a.Z)(n,"LLLL\td, yyyy")})}},9798:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),i=n(7063),a=function(){return(0,r.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,r.jsx)(i.Z,{children:(0,r.jsx)("div",{className:"py-8 flex flex-col lg:flex-row items-center",children:"\xa9 2021 Nicholas Ho"})})})},s=n(9008),c=n(2624),l=n(3154),o=function(){return(0,r.jsxs)(s.default,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.JA)("/favicon/apple-touch-icon.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.JA)("/favicon/favicon-32x32.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.JA)("/favicon/favicon-16x16.png")}),(0,r.jsx)("link",{rel:"manifest",href:(0,l.JA)("/favicon/site.webmanifest")}),(0,r.jsx)("link",{rel:"mask-icon",href:(0,l.JA)("/favicon/safari-pinned-tab.svg"),color:"#000000"}),(0,r.jsx)("link",{rel:"shortcut icon",href:(0,l.JA)("/favicon/favicon.ico")}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:(0,l.JA)("/favicon/browserconfig.xml")}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat(c.yf,".")}),(0,r.jsx)("meta",{property:"og:image",content:c.vC})]})},d=function(e){e.preview;var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)("div",{className:"min-h-screen",children:(0,r.jsx)("main",{children:t})}),(0,r.jsx)(a,{})]})}},3154:function(e,t,n){"use strict";n.d(t,{JA:function(){return s}});n(2203);var r=n(6470),i=(n(9675),n(1752)),a=n(4155);(0,r.join)(a.cwd(),"_posts");function s(e){var t=(0,i.default)().publicRuntimeConfig;return null!==e&&void 0!==e&&e.startsWith("/")?"".concat(t.basePath||"").concat(e):e}},2624:function(e,t,n){"use strict";n.d(t,{yf:function(){return r},vC:function(){return i}});var r="Markdown",i="https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"},3359:function(e,t,n){"use strict";var r=n(4575),i=n(3913),a=n(2205),s=n(8585),c=n(9754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}var o=n(5318);t.__esModule=!0,t.default=void 0;var d=o(n(7294)),u=o(n(2775)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function m(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var x=function(e){a(n,e);var t=l(n);function n(){return r(this,n),t.apply(this,arguments)}return i(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||f[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:h.error},d.default.createElement(u.default,null,d.default.createElement("title",null,e?"".concat(e,": ").concat(t):"Application error: a client-side exception has occurred")),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:h.h1},e):null,d.default.createElement("div",{style:h.desc},d.default.createElement("h2",{style:h.h2},this.props.title||e?t:d.default.createElement(d.default.Fragment,null,"Application error: a client-side exception has occurred (",d.default.createElement("a",{href:"https://nextjs.org/docs/messages/client-side-exception-occurred"},"developer guidance"),")"),"."))))}}]),n}(d.default.Component);t.default=x,x.displayName="ErrorPage",x.getInitialProps=m,x.origGetInitialProps=m;var h={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},2237:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return y},default:function(){return b}});var r=n(5893),i=n(1163),a=n(2918),s=n(7063),c=n(1255),l=n.n(c),o=function(e){var t=e.content;return(0,r.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,r.jsx)("div",{className:l().markdown,dangerouslySetInnerHTML:{__html:t}})})},d=n(1664),u=function(){return(0,r.jsxs)("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:[(0,r.jsx)(d.default,{href:"/",children:(0,r.jsx)("a",{className:"hover:underline",children:"Blog"})}),"."]})},f=n(4132),m=n(3453),x=n(1653),h=function(e){var t=e.children;return(0,r.jsx)("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:t})},p=function(e){var t=e.title,n=e.coverImage,i=e.date,a=e.author;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{children:t}),(0,r.jsx)("div",{className:"hidden md:block md:mb-12",children:(0,r.jsx)(f.Z,{name:a.name,picture:a.picture})}),(0,r.jsx)("div",{className:"mb-8 md:mb-16 sm:mx-0",children:(0,r.jsx)(x.Z,{title:t,src:n})}),(0,r.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,r.jsx)("div",{className:"block md:hidden mb-6",children:(0,r.jsx)(f.Z,{name:a.name,picture:a.picture})}),(0,r.jsx)("div",{className:"mb-6 text-lg",children:(0,r.jsx)(m.Z,{dateString:i})})]})]})},g=n(9798),v=n(9008),j=n(2624),y=!0,b=function(e){var t=e.post,n=(e.morePosts,e.preview),c=(0,i.useRouter)();return c.isFallback||null!==t&&void 0!==t&&t.slug?(0,r.jsx)(g.Z,{preview:n,children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(u,{}),c.isFallback?(0,r.jsx)(h,{children:"Loading\u2026"}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("article",{className:"mb-32",children:[(0,r.jsxs)(v.default,{children:[(0,r.jsxs)("title",{children:[t.title," | Next.js Blog Example with ",j.yf]}),(0,r.jsx)("meta",{property:"og:image",content:t.ogImage.url})]}),(0,r.jsx)(p,{title:t.title,coverImage:t.coverImage,date:t.date,author:t.author}),(0,r.jsx)(o,{content:t.content})]})})]})}):(0,r.jsx)(a.default,{statusCode:404})}},9035:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(2237)}])},1255:function(e){e.exports={markdown:"markdown-styles_markdown__1x9gM"}},2918:function(e,t,n){e.exports=n(3359)},1163:function(e,t,n){e.exports=n(4651)},2203:function(){},3596:function(){}},function(e){e.O(0,[146,118,774,888,179],(function(){return t=9035,e(e.s=t);var t}));var t=e.O();_N_E=t}]);