(this["webpackJsonpnx-amplience-tree"]=this["webpackJsonpnx-amplience-tree"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),l=n(39),c=n.n(l),d=n(70),s=n(31),u=n(32),h=n(83),p=n(71),f=n(46),m=n(84),v=n(72),b=n(26),g=n(28),y=n(145),N=n(147),O=n(105),E=n(140),j=n(5),I=n(2),k=function(){function e(t){if(Object(s.a)(this,e),this.schema=t,this.nodeTypes={},this.rootNodeTypes=void 0,"array"!==t.type)throw new Error('the field must have a type of "array"');this.rootNodeTypes=this.findNodeTypes(t.items.oneOf||[]).map((function(e){return e.name}))}return Object(u.a)(e,[{key:"findNodeTypes",value:function(e){var t=[],n=!0,a=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var l=o.value;if("object"!==l.type)throw new Error('nodes must have a type of "object"');if(!l.properties||!l.properties.type||!l.properties.type.const)throw new Error('nodes must define a constant "type" property');var c=l.properties.type.const;if(this.nodeTypes[c])t.push(this.nodeTypes[c]);else{var d=l.properties.data||{};!d.title&&l.title&&(d.title=l.title);var s=[];l.properties.children&&l.properties.children.items&&l.properties.children.items.oneOf&&(s=this.findNodeTypes(l.properties.children.items.oneOf).map((function(e){return e.name})));var u={name:c,label:l.title||c,dataSchema:d,childNodeTypes:s,rawSchema:l};l.labelField&&(u.labelField=l.labelField),this.nodeTypes[c]=u,t.push(u)}}}catch(h){a=!0,r=h}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}return t}}]),e}(),x=n(82),w=n(24),T=r.a.createContext({isExpanded:function(){return!1},isSelected:function(){return!1},toggle:function(){},select:function(){}}),S=Object(j.a)({root:{padding:0,margin:0,listStyle:"none"}},{name:"DcTreeView"})((function(e){var t=e.children,n=e.classes,a=e.onSelectNode,o=e.defaultExpandedNodes,i=Object(w.a)(e,["children","classes","onSelectNode","defaultExpandedNodes"]),l=r.a.useState(void 0),c=Object(g.a)(l,2),d=c[0],s=c[1],u=r.a.useState(o||[]),h=Object(g.a)(u,2),p=h[0],f=h[1],m=p||[],v=r.a.useCallback((function(e){return-1!==m.indexOf(e)}),[m]);return r.a.createElement(T.Provider,{value:{isExpanded:v,isSelected:function(e){return d===e},toggle:function(e,t){var n=-1!==m.indexOf(t)?m.filter((function(e){return e!==t})):[t].concat(Object(x.a)(m));f(n)},select:function(e){s(e),a&&a(e)}}},r.a.createElement("ul",Object.assign({role:"tree",className:Object(I.a)(n.root)},i),t))})),C=n(17);function D(e,t){var n=t.split("/"),a=e,r=!0,o=!1,i=void 0;try{for(var l,c=n[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){if(!(a=a[l.value]))return a}}catch(d){o=!0,i=d}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return a}var V=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"type",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"data",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"children";Object(s.a)(this,e),this.value=n,this.fieldPointer=a,this.treeSchema=r,this.typeProperty=o,this.dataProperty=i,this.childrenProperty=l,this.children=void 0,this.allNodes=void 0,this.rawValues=void 0,this.rawValues={},this.allNodes={};var c=function e(n,a){for(var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],d=arguments.length>3?arguments[3]:void 0,s=[],u=0;u<c.length;u++){var h=c[u],p=a.concat("".concat(u)),f=p.join("/"),m=h[o],v=r.nodeTypes[m],b="".concat(d,"/").concat(u),g=b+"/".concat(l),y=b+"/".concat(i),N={nodeId:f,nodeType:m,label:h[o],children:e(f,p,h[l],g),parentId:n,nodePointer:b,childrenPointer:g,dataPointer:y};if(v&&(N.label=v.label,v.labelField)){var O=D(h.data,v.labelField);N.label=O?"".concat(O):v.label}t.rawValues[f]=h,t.allNodes[f]=N,s.push(N)}return s};this.children=c(void 0,[],n,a)}return Object(u.a)(e,[{key:"canInsertNode",value:function(e,t){var n=this.allNodes[t].nodeType;if(e){var a=this.allNodes[e];return-1!==this.treeSchema.nodeTypes[a.nodeType].childNodeTypes.indexOf(n)}return-1!==this.treeSchema.rootNodeTypes.indexOf(n)}},{key:"insertNodeBefore",value:function(t,n){if(t===n)return this;var a=this.allNodes[t],r=this.allNodes[n];if(!a||!r)return this;if(!this.canInsertNode(r.parentId,t))return this;var o=this.cloneValue(),i=this.getNodeValue(o,t),l=this.getNodeValue(o,n),c=a.parentId?this.getNodeValue(o,a.parentId).children:o,d=r.parentId?this.getNodeValue(o,r.parentId).children:o,s=c.indexOf(i);if(-1===s)return this;c.splice(s,1);var u=d.indexOf(l);return-1===u?this:(d.splice(u,0,i),new e(o,this.fieldPointer,this.treeSchema))}},{key:"setNodeData",value:function(t,n){var a=this.cloneValue();return this.getNodeValue(a,t).data=n,new e(a,this.fieldPointer,this.treeSchema)}},{key:"insertNode",value:function(t,n){var a=this.cloneValue(),r=this.createNode(n);if(t){var o=this.getNodeValue(a,t);o.children||(o.children=[]),o.children.push(r)}else a.push(r);return new e(a,this.fieldPointer,this.treeSchema)}},{key:"deleteNode",value:function(t){if(!t)return this;var n=this.cloneValue();return this.walkNodeValues(n,(function(e,a,r,o){e===t&&(r?r.children:n).splice(o,1)})),new e(n,this.fieldPointer,this.treeSchema)}},{key:"createNode",value:function(e){var t;return t={},Object(C.a)(t,this.typeProperty,e),Object(C.a)(t,this.dataProperty,{}),Object(C.a)(t,this.childrenProperty,[]),t}},{key:"cloneValue",value:function(){return JSON.parse(JSON.stringify(this.value))}},{key:"getNodeValue",value:function(e,t){var n=null;return this.walkNodeValues(e,(function(e,a){e===t&&(n=a)})),n}},{key:"walkNodeValues",value:function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=0;r<e.length;r++){var o=e[r],i=n.concat("".concat(r)),l=i.join("/");t(l,o,a,r),o.children&&this.walkNodeValues(o.children,t,i,o)}}}]),e}(),P=n(146),B=n(150),F=n(149),A=Object(F.a)("tree-item",{canDrop:function(e,t){return!!e.canDropNodeId&&e.canDropNodeId(t.getItem().nodeId)},drop:function(e,t){e.dropNodeId&&e.dropNodeId(t.getItem().nodeId)}},(function(e,t){return{connectDropTarget:e.dropTarget(),canDrop:t.canDrop(),isDropping:t.isOver({shallow:!0})&&t.canDrop()}}))(Object(j.a)((function(e){return{root:{height:3,width:"100%"},dropping:{background:e.palette.primary.main}}}),{name:"DcDraggableTreeItemInsertTarget"})((function(e){var t=e.classes;Object(w.a)(e,["classes"]);return e.connectDropTarget(r.a.createElement("div",{className:Object(I.a)(t.root,Object(C.a)({},t.dropping,e.isDropping))}))}))),R=n(139),J=n(141),G=n(142),z=Object(j.a)((function(e){return{root:{listStyle:"none",margin:0,padding:0,outline:0,WebkitTapHighlightColor:"transparent",color:e.palette.text.secondary},selected:{},expanded:{},group:{margin:0,padding:0,marginLeft:26},content:{width:"100%",display:"flex",alignItems:"center",cursor:"pointer","&:hover":{color:e.palette.text.primary}},iconContainer:{marginRight:2,width:15,display:"flex",justifyContent:"center"},indent:{width:18},label:{width:"100%"}}}),{name:"DcTreeItem"})((function(e){var t,n=e.children,a=e.classes,o=e.nodeId,i=void 0===o?"":o,l=e.label,c=Object(w.a)(e,["children","classes","nodeId","label"]),d=r.a.useContext(T),s=d.isExpanded,u=d.isSelected,h=d.toggle,p=d.select,f=(r.a.useRef(null),r.a.useRef(null)),m=Boolean(Array.isArray(n)?n.length:n),v=!!s&&s(i),b=!!u&&u(i),g=m?v?r.a.createElement(J.a,{style:{width:15,height:15}}):r.a.createElement(G.a,{style:{width:15,height:15}}):null;return r.a.createElement("li",Object.assign({className:Object(I.a)(a.root,(t={},Object(C.a)(t,a.expanded,v),Object(C.a)(t,a.selected,b),t)),role:"treeitem","aria-expanded":m?v:void 0},c),r.a.createElement("div",{className:a.content,ref:f,onClick:function(e){b||p(i),m&&!v&&h&&h(e,i)}},g?r.a.createElement("div",{onClick:function(e){m&&h&&h(e,i)},className:a.iconContainer},g):r.a.createElement("div",{className:Object(I.a)(a.indent)}),r.a.createElement(E.a,{component:"div",className:a.label},l)),n&&r.a.createElement(R.a,{unmountOnExit:!0,className:a.group,in:v,component:"ul"},n))})),H=Object(B.a)("tree-item",{beginDrag:function(e,t,n){return{nodeId:e.nodeId}},endDrag:function(e,t,n){t.didDrop()},canDrag:function(e,t){return!0}},(function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}))(Object(j.a)({root:{}},{name:"DcDraggableTreeItem"})((function(e){e.classes;var t=e.children,n=e.canInsertNodeIdBefore,a=e.onInsertNodeIdBefore,o=Object(w.a)(e,["classes","children","canInsertNodeIdBefore","onInsertNodeIdBefore"]);return e.connectDragSource(r.a.createElement("div",null,r.a.createElement(A,{canDropNodeId:n,dropNodeId:a}),r.a.createElement(z,o,t)))}))),L=n(81),M=n(151),W=Object(j.a)({root:{}},{name:"DcEditorTreeFieldInsertNodeButton"})((function(e){var t=e.treeSchema,n=e.nodeTypes,a=e.onClick,o=r.a.useState(null),i=Object(g.a)(o,2),l=i[0],c=i[1],d=function(e){c(null),a(e)};return r.a.createElement("div",null,r.a.createElement(O.a,{variant:"outlined",color:"primary",disabled:0===n.length,onClick:function(e){c(e.currentTarget)}},r.a.createElement(E.a,null,"+ Add")),r.a.createElement(L.a,{open:Boolean(l),onClose:function(){c(null)},anchorEl:l},n.map((function(e){return r.a.createElement(M.a,{key:e,onClick:function(){return d(e)}},t.nodeTypes[e].label)}))))})),q=n(148),K=n(80),Q=Object(j.a)((function(e){return{root:{display:"flex",border:"1px solid rgba(157,162,162,.3)","border-radius":5},treePane:{flex:.4,"border-right":"1px solid #e5e5e5"},tree:{padding:"10px 10px 10px 10px"},toolbar:{"background-color":"#f5f5f5","border-bottom":"1px solid #e5e5e5","border-radius":5,color:e.palette.primary.main,"padding-left":10,"padding-right":10},dataPane:{flex:.7,padding:"10px 10px 10px 10px"},grow:{flexGrow:1}}}),{name:"DcEditorTreeField"})((function(e){var t=e.schema,n=e.value,a=e.onChange,o=e.classes,i=e.pointer,l=new k(t),c=new V(n,i,l),d=r.a.useState(),s=Object(g.a)(d,2),u=s[0],h=s[1],p=r.a.useCallback((function(e){h(e)}),[]),f=u?c.allNodes[u]:void 0,m=f?l.nodeTypes[f.nodeType].childNodeTypes:l.rootNodeTypes,v=r.a.useCallback((function(e){if(u){var t=c.setNodeData(u,e);a&&a(t.value)}}),[u,c]),j=r.a.useCallback((function(e){var t=c.insertNode(u,e);a&&a(t.value)}),[u,c]),x=r.a.useCallback((function(){var e=c.deleteNode(u);a&&a(e.value)}),[u,h,c]),w=r.a.useCallback((function(e,t){var n=c.allNodes[t];return c.canInsertNode(n.parentId,e)}),[c]),T=r.a.useCallback((function(e,t){var n=c.insertNodeBefore(e,t);a&&a(n.value)}),[c]),C=[void 0];return r.a.createElement("div",{className:Object(I.a)(o.root)},r.a.createElement("div",{className:Object(I.a)(o.treePane)},r.a.createElement(y.a,{className:Object(I.a)(o.toolbar),variant:"dense",disableGutters:!0},r.a.createElement(P.a,null),r.a.createElement("div",{className:o.grow}),r.a.createElement(N.a,{variant:"outlined"},r.a.createElement(W,{onClick:j,treeSchema:l,nodeTypes:m}),r.a.createElement(O.a,{onClick:x,variant:"outlined",color:"primary",disabled:!Boolean(f)},r.a.createElement(E.a,null,"Delete")))),r.a.createElement("div",{className:Object(I.a)(o.tree)},r.a.createElement(q.a,{backend:K.a},r.a.createElement(S,{defaultExpandedNodes:C,onSelectNode:p},r.a.createElement(z,{label:t.title||"Root",nodeId:""},function e(t){return t.map((function(t){return r.a.createElement(H,{key:t.nodeId,nodeId:t.nodeId,label:t.label,canInsertNodeIdBefore:function(e){return w(e,t.nodeId)},onInsertNodeIdBefore:function(e){return T(e,t.nodeId)}},e(t.children))}))}(c.children)))))),r.a.createElement("div",{className:Object(I.a)(o.dataPane)},f?r.a.createElement(b.b,Object.assign({},e,{onChange:v,schema:l.nodeTypes[f.nodeType].dataSchema,value:c.rawValues[f.nodeId].data,pointer:f.dataPointer})):r.a.createElement("div",null)))})),U=Object(b.d)();U.fieldProviders.splice(0,0,(function(e){return e&&"tree"===e["ui:widget"]?Q:void 0}));var X=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={connected:!1},n.handleValueChange=n.handleValueChange.bind(Object(f.a)(n)),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.handleConnect()}},{key:"handleConnect",value:function(){var e,t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(Object(v.a)());case 2:return(e=n.sent).frame.startAutoResizer(),n.next=6,c.a.awrap(e.field.getValue());case 6:t=n.sent,this.setState({sdk:e,connected:!0,value:t,schema:Object(d.a)({},e.field.schema,{"ui:widget":"tree"})});case 8:case"end":return n.stop()}}),null,this)}},{key:"handleValueChange",value:function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.state.connected||!this.state.sdk){t.next=8;break}return t.prev=1,t.next=4,c.a.awrap(this.state.sdk.field.setValue(e));case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:case"end":return t.stop()}}),null,this,[[1,6]])}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},!0===this.state.connected?r.a.createElement("div",null,this.state.sdk?r.a.createElement(b.c.Provider,{value:{sdk:this.state.sdk}},Object(b.f)(r.a.createElement(b.a,{pointer:Object(b.e)(this.state.sdk.field.schema,{}).pointer,onChange:this.handleValueChange,schema:this.state.schema,value:this.state.value,registry:U}))):null):r.a.createElement("div",null,"\xa0"))}}]),t}(r.a.Component);i.a.render(r.a.createElement(X,null),document.getElementById("root"))},93:function(e,t,n){e.exports=n(103)}},[[93,1,2]]]);
//# sourceMappingURL=main.0558d595.chunk.js.map