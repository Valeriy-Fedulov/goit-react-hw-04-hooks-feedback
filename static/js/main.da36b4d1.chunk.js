(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(3),o=n.n(r),s=(n(13),n(14),n(4)),i=n(5),d=n(6),b=n(8),u=n(7),j=n(0),l=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:t}),n]})},h=function(e){return Object(j.jsx)(j.Fragment,{children:e.options.map((function(t){return Object(j.jsx)("button",{id:t,type:"button",onClick:function(t){e.onLeaveFeedback(t)},children:t},t)}))})},O=function(e){var t=e.message;return Object(j.jsx)("h2",{children:t})},f=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("span",{children:["Good: ",t]}),Object(j.jsxs)("span",{children:["Neutral: ",n]}),Object(j.jsxs)("span",{children:["Bad: ",a]}),Object(j.jsxs)("span",{children:["Total: ",c]}),Object(j.jsxs)("span",{children:["Positive feedback: ",r,"%"]})]})},g=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){t.preventDefault(),e.setState(Object(s.a)({},t.target.id,e.state[t.target.id]+1))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(100/e.countTotalFeedback()*e.state.good)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{title:"Please leave feedback",children:Object(j.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(j.jsx)(l,{title:"Statistics",children:this.countTotalFeedback()?Object(j.jsx)(f,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(O,{message:"No feedback given"})})]})}}]),n}(c.a.Component),v=g;var p=function(){return Object(j.jsx)(v,{})};o.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.da36b4d1.chunk.js.map