webpackJsonp([1],{"5W1q":function(t,e){},"9BzU":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a=i("zL8q"),s=i.n(a),o=(i("tvR6"),i("5W1q"),i("X6nt"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var r=i("VU/8")({name:"App"},o,!1,function(t){i("XPM2")},null,null).exports,l=i("/ocq"),c={data:function(){return{range:null,title:"New document",content:"<p><br></p>",link:{text:"链接",url:"",isUrl:!1,show:!1},img:{show:!1,isLink:!1,isImgLink:!1},formatBlock:""}},mounted:function(){var t=this;this.$nextTick(function(){t.$refs.editor.focus()})},methods:{focus:function(){this.range=window.getSelection().rangeCount&&window.getSelection().getRangeAt(0),this.formatBlock=document.queryCommandValue("formatBlock")},mouseup:function(){this.range=window.getSelection().getRangeAt(0),this.formatBlock=document.queryCommandValue("formatBlock")},keyup:function(){this.range=window.getSelection().getRangeAt(0)},change:function(){var t=this.$refs.editor.innerHTML;""==t&&(this.$refs.editor.innerHTML="<p><br></p>"),this.content=t,this.range=window.getSelection().getRangeAt(0)},enter:function(t){document.execCommand("formatBlock",!1,"P");var e=this.range.commonAncestorContainer;if("editor"==e.className)return!1;for(;"P"!=e.tagName;)e=e.parentNode;e.removeAttribute("style"),e.removeAttribute("class"),e.children[0]&&"B"==e.children[0].tagName&&(e.innerHTML=e.innerText),e.children[0]&&"I"==e.children[0].tagName&&(e.innerHTML=e.innerText),e.children[0]&&"U"==e.children[0].tagName&&(e.innerHTML=e.innerText),e.children[0]&&"STRIKE"==e.children[0].tagName&&(e.innerHTML=e.innerText)},showLink:function(){this.range&&(this.link.text=this.range.toString()||"链接",this.range.commonAncestorContainer.parentNode.href?(this.link.href="",this.$refs.url.value="",this.link.isUrl=!1,this.range.collapsed||(this.link.href=this.range.commonAncestorContainer.parentNode.href,this.$refs.url.value=this.link.href,this.link.isUrl=!0)):(this.link.href="",this.$refs.url.value="",this.link.isUrl=!1))},urlInput:function(t){this.link.isUrl=/^http(s)?:\/\/(.*)?$/.test(t.target.value)},insertLink:function(){if(!this.range)return!1;if(this.link.url=this.$refs.url.value,!/^http(s)?:\/\/(.*)?$/.test(this.link.url))return this.$message.error("请输入链接"),!1;var t=document.createElement("a");t.setAttribute("href",this.link.url),t.appendChild(document.createTextNode(this.link.text)),this.range.deleteContents(),this.range.insertNode(t),this.link.show=!1},unLinkClick:function(){document.execCommand("unlink",!1,null)},showImg:function(){this.img.isLink=!1,this.$refs.img.value="",this.img.isImgLink=!1},imgLinkInput:function(t){this.img.isImgLink=/^http(s)?:\/\/(.*)?$/.test(t.target.value)},insertImg:function(){if(this.range){var t=this.range.commonAncestorContainer;if("editor"==t.className)return!1;for(;"editor"!=t.parentNode.className;)t=t.parentNode;if("H1"==t.tagName)return this.$message.error("标题不支持插入图片"),!1;if("BLOCKQUOTE"==t.tagName)return this.$message.error("引用不支持插入图片"),!1;var e=this.$refs.img.value;if(!/^http(s)?:\/\/(.*)$/.test(e))return this.$message.error("请图片链接"),!1;var i=document.createElement("img");i.setAttribute("src",e),this.range.deleteContents(),this.range.insertNode(i),this.img.show=!1}},changeFile:function(t){if(console.log(t.target.files[0]),this.$refs.imgfile.value="",!this.range)return!1;var e=this.range.commonAncestorContainer;if("editor"==e.className)return console.log("123"),!1;for(;"editor"!=e.parentNode.className;)e=e.parentNode;if("H1"==e.tagName)return this.$message.error("标题不支持插入图片"),!1;if("BLOCKQUOTE"==e.tagName)return this.$message.error("引用不支持插入图片"),!1;var i=document.createElement("img");i.setAttribute("src","http://video.yingtu.co/8/image/288559ae-3365-4130-b9dc-b7a5ef187dea.jpg"),this.range.deleteContents(),this.range.insertNode(i),this.img.show=!1},headingClick:function(){var t=document.queryCommandValue("formatBlock");"h1"==t&&document.execCommand("formatBlock",!1,"P"),"p"==t&&document.execCommand("formatBlock",!1,"H1")},quoteClick:function(){var t=document.queryCommandValue("formatBlock");"blockquote"==t&&document.execCommand("formatBlock",!1,"P"),"p"==t&&document.execCommand("formatBlock",!1,"BLOCKQUOTE")},fontClick:function(t){document.execCommand(t,!1,null)},alignClick:function(t){document.execCommand(t,!1,null)},dentClick:function(t){console.log(this.range);var e=this.range.commonAncestorContainer;if("editor"==e.className)return!1;for(;"P"!=e.tagName;)e=e.parentNode;"indent"==t?e.setAttribute("class",t):e.removeAttribute("class")},blurEditor:function(){this.range=window.getSelection().getRangeAt(0)},paste:function(t){t.preventDefault(),t.stopPropagation();for(var e=t.clipboardData||window.clipboardData,i=0;i<e.items.length;i++)console.log(e.items[i]);var n=e.getData("text/plain");document.execCommand("insertText",!1,n)}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-main"},[i("el-popover",{ref:"popover-link",attrs:{placement:"bottom",width:"200",trigger:"click"},on:{show:t.showLink},model:{value:t.link.show,callback:function(e){t.$set(t.link,"show",e)},expression:"link.show"}},[i("div",{staticClass:"link-wrap"},[i("div",{staticClass:"link-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.link.text,expression:"link.text"}],staticClass:"input",domProps:{value:t.link.text},on:{input:function(e){e.target.composing||t.$set(t.link,"text",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"link-item",staticStyle:{"margin-top":"10px"}},[i("input",{ref:"url",staticClass:"input",attrs:{placeholder:"链接地址"},on:{input:t.urlInput}})]),t._v(" "),i("div",{staticClass:"link-item",staticStyle:{"margin-top":"10px"}},[i("button",{staticClass:"button button-primary button-min",attrs:{disabled:!t.link.isUrl},on:{click:t.insertLink}},[t._v("确认")]),t._v(" "),i("button",{staticClass:"button button-min",on:{click:function(e){t.link.show=!1}}},[t._v("取消")])])])]),t._v(" "),i("el-popover",{ref:"popover-img",attrs:{placement:"bottom",width:"200",trigger:"click"},on:{show:t.showImg},model:{value:t.img.show,callback:function(e){t.$set(t.img,"show",e)},expression:"img.show"}},[i("div",{staticClass:"img-wrap"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.img.isLink,expression:"!img.isLink"}],staticClass:"img-item"},[i("div",{staticClass:"btn-upload"},[i("span",[t._v("上传图片")]),t._v(" "),i("input",{ref:"imgfile",attrs:{type:"file",accept:"image/png,image/jpg,image/jpeg"},on:{change:t.changeFile}})])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.img.isLink,expression:"!img.isLink"}],staticClass:"img-item",staticStyle:{"margin-top":"10px"}},[i("button",{staticClass:"button button-full",on:{click:function(e){t.img.isLink=!0}}},[t._v("网络图片")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.img.isLink,expression:"img.isLink"}],staticClass:"img-item"},[i("input",{ref:"img",staticClass:"input",attrs:{placeholder:"图片地址"},on:{input:t.imgLinkInput}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.img.isLink,expression:"img.isLink"}],staticClass:"img-item",staticStyle:{"margin-top":"10px"}},[i("button",{staticClass:"button button-primary button-min",attrs:{disabled:!t.img.isImgLink},on:{click:t.insertImg}},[t._v("确认")]),t._v(" "),i("button",{staticClass:"button button-min",on:{click:function(e){t.img.isLink=!1}}},[t._v("取消")])])])]),t._v(" "),i("div",{staticClass:"top"},[i("div",{staticClass:"left"},[i("div",{staticClass:"tools"},[i("div",{staticClass:"tools-group"},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"标题和正文",placement:"bottom"}},[i("button",{staticClass:"tool-btn",attrs:{type:"button"},on:{click:t.headingClick}},[i("i",{staticClass:"fa fa-header"})])]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"粗体",placement:"bottom"}},[i("button",{staticClass:"tool-btn",attrs:{type:"button"},on:{click:function(e){t.fontClick("bold")}}},[i("i",{staticClass:"fa fa-bold"})])]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"斜体",placement:"bottom"}},[i("button",{staticClass:"tool-btn",attrs:{type:"button"},on:{click:function(e){t.fontClick("italic")}}},[i("i",{staticClass:"fa fa-italic"})])]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下划线",placement:"bottom"}},[i("button",{staticClass:"tool-btn",attrs:{type:"button"},on:{click:function(e){t.fontClick("underline")}}},[i("i",{staticClass:"fa fa-underline"})])]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除线",placement:"bottom"}},[i("button",{staticClass:"tool-btn",attrs:{type:"button"},on:{click:function(e){t.fontClick("strikethrough")}}},[i("i",{staticClass:"fa fa-strikethrough"})])])],1),t._v(" "),i("div",{staticClass:"tools-group"},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"插入链接",placement:"bottom"}},[i("button",{directives:[{name:"popover",rawName:"v-popover:popover-link",arg:"popover-link"}],staticClass:"tool-btn",attrs:{disabled:"p"!=t.formatBlock,type:"button"}},[i("i",{staticClass:"fa fa-link"})])]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"取消链接",placement:"bottom"}},[i("button",{staticClass:"tool-btn",attrs:{type:"button"},on:{click:t.unLinkClick}},[i("i",{staticClass:"fa fa-chain-broken"})])]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"插入图片",placement:"bottom"}},[i("button",{directives:[{name:"popover",rawName:"v-popover:popover-img",arg:"popover-img"}],staticClass:"tool-btn",attrs:{disabled:"p"!=t.formatBlock,type:"button"}},[i("i",{staticClass:"fa fa-picture-o"})])]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"插入引用",placement:"bottom"}},[i("button",{staticClass:"tool-btn",attrs:{disabled:"p"!=t.formatBlock&&"blockquote"!=t.formatBlock,type:"button"},on:{click:t.quoteClick}},[i("i",{staticClass:"fa  fa-quote-left"})])])],1),t._v(" "),i("div",{staticClass:"tools-group"},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"左对齐",placement:"bottom"}},[i("button",{staticClass:"tool-btn",attrs:{type:"button"},on:{click:function(e){t.alignClick("justifyLeft")}}},[i("i",{staticClass:"fa fa-align-left"})])]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"居中对齐",placement:"bottom"}},[i("button",{staticClass:"tool-btn",attrs:{type:"button"},on:{click:function(e){t.alignClick("justifyCenter")}}},[i("i",{staticClass:"fa fa-align-center"})])]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"右对齐",placement:"bottom"}},[i("button",{staticClass:"tool-btn",attrs:{type:"button"},on:{click:function(e){t.alignClick("justifyRight")}}},[i("i",{staticClass:"fa fa-align-right"})])]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"两端对齐",placement:"bottom"}},[i("button",{staticClass:"tool-btn",attrs:{type:"button"},on:{click:function(e){t.alignClick("justifyFull")}}},[i("i",{staticClass:"fa fa-align-justify"})])])],1),t._v(" "),i("div",{staticClass:"tools-group"},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"文本缩进",placement:"bottom"}},[i("button",{staticClass:"tool-btn",attrs:{type:"button"},on:{click:function(e){t.dentClick("indent")}}},[i("i",{staticClass:"fa fa-indent"})])]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"取消缩进",placement:"bottom"}},[i("button",{staticClass:"tool-btn",attrs:{type:"button"},on:{click:function(e){t.dentClick("outdent")}}},[i("i",{staticClass:"fa fa-outdent"})])])],1)])]),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"title"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),i("div",{ref:"editor",staticClass:"editor",attrs:{contenteditable:"true"},on:{blur:t.blurEditor,keyup:[t.keyup,function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.enter(e):null}],input:t.change,paste:t.paste,focus:t.focus,mouseup:t.mouseup}},[t._m(1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right"},[e("button",{staticClass:"button button-primary",attrs:{type:"button"}},[e("i",{staticClass:"fa fa-paper-plane"}),this._v(" 发布")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("br")])}]};var m=i("VU/8")(c,u,!1,function(t){i("f+bZ"),i("9BzU")},"data-v-409cafb8",null).exports;n.default.use(l.a);var f=new l.a({routes:[{path:"/",name:"main",component:m}]});n.default.use(s.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:f,components:{App:r},template:"<App/>"})},X6nt:function(t,e){},XPM2:function(t,e){},"f+bZ":function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9313e2c27152ded76fcd.js.map