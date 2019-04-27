(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["directivePermission"],{"8ee8":function(e,s,i){"use strict";var t=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",[i("div",{staticStyle:{"margin-bottom":"15px"}},[e._v("\n    "+e._s(e.$t("permission.roles"))+"： "+e._s(e.roles)+"\n  ")]),e._v("\n  "+e._s(e.$t("permission.switchRoles"))+"：\n  "),i("el-radio-group",{model:{value:e.switchRoles,callback:function(s){e.switchRoles=s},expression:"switchRoles"}},[i("el-radio-button",{attrs:{label:"editor"}}),i("el-radio-button",{attrs:{label:"admin"}})],1)],1)},n=[],a=i("d225"),r=i("b0b4"),o=i("308d"),c=i("6bb5"),l=i("4e2b"),d=i("9ab4"),m=i("60a3"),p=i("9dba"),v=function(e){function s(){return Object(a["a"])(this,s),Object(o["a"])(this,Object(c["a"])(s).apply(this,arguments))}return Object(l["a"])(s,e),Object(r["a"])(s,[{key:"roles",get:function(){return p["a"].roles}},{key:"switchRoles",get:function(){return this.roles[0]},set:function(e){var s=this;p["a"].ChangeRoles(e).then(function(){s.$emit("change")})}}]),s}(m["c"]);v=d["a"]([m["a"]],v);var u=v,h=u,b=i("0c7c"),f=Object(b["a"])(h,t,n,!1,null,null,null);s["a"]=f.exports},a99f:function(e,s,i){"use strict";i.r(s);var t=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"app-container"},[i("switch-roles",{on:{change:e.handleRolesChange}}),i("div",{key:e.key,staticStyle:{"margin-top":"30px"}},[i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-alert"},[e._v("\n        Only\n        "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" can see this\n      ")],1),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n        v-permission=\"['admin']\"\n      ")])],1),i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-alert"},[e._v("\n        Only\n        "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see this\n      ")],1),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n        v-permission=\"['editor']\"\n      ")])],1),i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin","editor"],expression:"['admin','editor']"}],staticClass:"permission-alert"},[e._v("\n        Both\n        "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" and\n        "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see this\n      ")],1),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["admin","editor"],expression:"['admin','editor']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n        v-permission=\"['admin','editor']\"\n      ")])],1)]),i("div",{key:"checkPermission"+e.key,staticStyle:{"margin-top":"60px"}},[i("aside",[e._v("\n      "+e._s(e.$t("permission.tips"))+"\n      "),i("br"),e._v(" e.g.\n    ")]),i("el-tabs",{staticStyle:{width:"550px"},attrs:{type:"border-card"}},[e.checkPermission(["admin"])?i("el-tab-pane",{attrs:{label:"Admin"}},[e._v("\n        Admin can see this\n        "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n          v-if=\"checkPermission(['admin'])\"\n        ")])],1):e._e(),e.checkPermission(["editor"])?i("el-tab-pane",{attrs:{label:"Editor"}},[e._v("\n        Editor can see this\n        "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n          v-if=\"checkPermission(['editor'])\"\n        ")])],1):e._e(),e.checkPermission(["admin","editor"])?i("el-tab-pane",{attrs:{label:"Admin-OR-Editor"}},[e._v("\n        Both admin or editor can see this\n        "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n          v-if=\"checkPermission(['admin','editor'])\"\n        ")])],1):e._e()],1)],1)],1)},n=[],a=i("d225"),r=i("b0b4"),o=i("308d"),c=i("6bb5"),l=i("4e2b"),d=i("9ab4"),m=i("60a3"),p=(i("6762"),i("2fdb"),i("9dba")),v={inserted:function(e,s){var i=s.value,t=p["a"].roles;if(!(i&&i instanceof Array&&i.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var n=i,a=t.some(function(e){return n.includes(e)});a||e.parentNode&&e.parentNode.removeChild(e)}},u=function(e){if(e&&e instanceof Array&&e.length>0){var s=p["a"].roles,i=e,t=s.some(function(e){return i.includes(e)});return t}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1},h=i("8ee8"),b=function(e){function s(){var e;return Object(a["a"])(this,s),e=Object(o["a"])(this,Object(c["a"])(s).apply(this,arguments)),e.key=1,e}return Object(l["a"])(s,e),Object(r["a"])(s,[{key:"handleRolesChange",value:function(){this.key++}}]),s}(m["c"]);b=d["a"]([Object(m["a"])({components:{SwitchRoles:h["a"]},methods:{checkPermission:u},directives:{permission:v}})],b);var f=b,_=f,g=(i("f844"),i("0c7c")),y=Object(g["a"])(_,t,n,!1,null,"a538727e",null);s["default"]=y.exports},dd85:function(e,s,i){},f844:function(e,s,i){"use strict";var t=i("dd85"),n=i.n(t);n.a}}]);