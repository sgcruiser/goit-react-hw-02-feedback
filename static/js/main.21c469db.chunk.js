(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={list:"FeedbackOptions_list__1i7IG",item:"FeedbackOptions_item__2NbFQ",button:"FeedbackOptions_button__zJ_i2"}},,function(t,e,n){t.exports={section:"Section_section__9wp9X"}},,function(t,e,n){t.exports={container:"Container_container__3HD2X"}},,,,function(t,e,n){t.exports={list:"Statistics_list__26zD-"}},function(t,e,n){t.exports={notification:"Notification_notification__32XtP"}},function(t,e,n){t.exports={counter:"CounterFeedback_counter__3NS9i"}},,,,,,,,,function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(5),s=n.n(a),o=n(6),r=n.n(o),l=n(0),u=function(t){var e=t.children;return Object(l.jsx)("div",{className:r.a.container,children:e})},d=n(7),b=n(8),j=n(9),h=n(14),p=n(13),O=n(4),f=n.n(O),x=function(t){return Object(l.jsxs)("section",{className:f.a.section,children:[t.title&&Object(l.jsx)("span",{className:f.a.title,children:t.title}),t.children]})};x.defaultProps={title:"",children:[]};var v=x,_=n(2),k=n.n(_),m=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(l.jsx)("ul",{className:k.a.list,children:Object.keys(e).map((function(t){return Object(l.jsx)("li",{className:k.a.item,children:Object(l.jsx)("button",{type:"button",className:k.a.button,onClick:n,children:t})},t)}))})},g=n(10),N=n.n(g),F=function(t){var e=t.good,n=t.neutral,c=t.bad,i=t.total,a=t.positivePercentage;return Object(l.jsxs)("ul",{className:N.a.list,children:[Object(l.jsx)("li",{children:Object(l.jsxs)("span",{children:["Good: ",e]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("span",{children:["Neutral: ",n]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("span",{children:["Bad: ",c]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("span",{children:["Total: ",i]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("span",{children:["Positive feedback: ",a,"%"]})})]})},P=n(11),y=n.n(P),w=function(t){return Object(l.jsx)("p",{className:y.a.notification,children:t.message})};w.defaultProps={text:""};var S=w,C=n(12),T=n.n(C),B=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(b.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={good:t.props.initialGood,neutral:t.props.initialNeutral,bad:t.props.initialBad},t.onLeaveFeedback=function(e){var n=e.target.textContent;t.setState((function(t){return Object(d.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){return 0===t.countTotalFeedback()?0:Math.round(t.state.good/t.countTotalFeedback()*100)},t}return Object(j.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:T.a.counter,children:[Object(l.jsx)(v,{title:"Please leave feedback",children:Object(l.jsx)(m,{options:this.state,onLeaveFeedback:this.onLeaveFeedback})}),Object(l.jsx)(v,{title:"Statistics",children:Object.values(this.state).every((function(t){return 0===t}))?Object(l.jsx)(S,{message:"No feedback given"}):Object(l.jsx)(F,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(i.a.Component);B.defaultProps={initialGood:0,initialNeutral:0,initialBad:0};var G=B;var L=function(){return Object(l.jsx)(u,{children:Object(l.jsx)(G,{})})};n(20);s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.21c469db.chunk.js.map