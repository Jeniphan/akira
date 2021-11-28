"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=801,exports.ids=[801],exports.modules={6575:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>sanitizeDOMString});const sanitizeDOMString=__name(untrustedString=>{try{if(untrustedString instanceof IonicSafeString)return untrustedString.value;if(!isSanitizerEnabled()||"string"!=typeof untrustedString||""===untrustedString)return untrustedString;const documentFragment=document.createDocumentFragment(),workingDiv=document.createElement("div");documentFragment.appendChild(workingDiv),workingDiv.innerHTML=untrustedString,blockedTags.forEach(blockedTag=>{const getElementsToRemove=documentFragment.querySelectorAll(blockedTag);for(let elementIndex=getElementsToRemove.length-1;elementIndex>=0;elementIndex--){const element=getElementsToRemove[elementIndex];element.parentNode?element.parentNode.removeChild(element):documentFragment.removeChild(element);const childElements=getElementChildren(element);for(let childIndex=0;childIndex<childElements.length;childIndex++)sanitizeElement(childElements[childIndex])}});const dfChildren=getElementChildren(documentFragment);for(let childIndex=0;childIndex<dfChildren.length;childIndex++)sanitizeElement(dfChildren[childIndex]);const fragmentDiv=document.createElement("div");fragmentDiv.appendChild(documentFragment);const getInnerDiv=fragmentDiv.querySelector("div");return null!==getInnerDiv?getInnerDiv.innerHTML:fragmentDiv.innerHTML}catch(err){return console.error(err),""}},"sanitizeDOMString"),sanitizeElement=__name(element=>{if(element.nodeType&&1!==element.nodeType)return;for(let i=element.attributes.length-1;i>=0;i--){const attribute=element.attributes.item(i),attributeName=attribute.name;if(!allowedAttributes.includes(attributeName.toLowerCase())){element.removeAttribute(attributeName);continue}const attributeValue=attribute.value;null!=attributeValue&&attributeValue.toLowerCase().includes("javascript:")&&element.removeAttribute(attributeName)}const childElements=getElementChildren(element);for(let i=0;i<childElements.length;i++)sanitizeElement(childElements[i])},"sanitizeElement"),getElementChildren=__name(el=>null!=el.children?el.children:el.childNodes,"getElementChildren"),isSanitizerEnabled=__name(()=>{const win=window,config=win&&win.Ionic&&win.Ionic.config;return!config||(config.get?config.get("sanitizerEnabled",!0):!0===config.sanitizerEnabled||void 0===config.sanitizerEnabled)},"isSanitizerEnabled"),allowedAttributes=["class","id","href","src","name","slot"],blockedTags=["script","style","iframe","meta","link","object","embed"];class IonicSafeString{constructor(value){this.value=value}}__name(IonicSafeString,"IonicSafeString")},801:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_toast:()=>Toast});var _Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8239),_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3150),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7585),_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7053),_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6575),_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1269),_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4086);const iosEnterAnimation=__name((baseEl,position)=>{const baseAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__.c)(),hostEl=baseEl.host||baseEl,wrapperEl=baseEl.querySelector(".toast-wrapper");switch(wrapperAnimation.addElement(wrapperEl),position){case"top":wrapperAnimation.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":const topPosition=Math.floor(hostEl.clientHeight/2-wrapperEl.clientHeight/2);wrapperEl.style.top=`${topPosition}px`,wrapperAnimation.fromTo("opacity",.01,1);break;default:wrapperAnimation.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return baseAnimation.addElement(hostEl).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(wrapperAnimation)},"iosEnterAnimation"),iosLeaveAnimation=__name((baseEl,position)=>{const baseAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__.c)(),hostEl=baseEl.host||baseEl,wrapperEl=baseEl.querySelector(".toast-wrapper");switch(wrapperAnimation.addElement(wrapperEl),position){case"top":wrapperAnimation.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":wrapperAnimation.fromTo("opacity",.99,0);break;default:wrapperAnimation.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return baseAnimation.addElement(hostEl).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation)},"iosLeaveAnimation"),mdEnterAnimation=__name((baseEl,position)=>{const baseAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__.c)(),hostEl=baseEl.host||baseEl,wrapperEl=baseEl.querySelector(".toast-wrapper");switch(wrapperAnimation.addElement(wrapperEl),position){case"top":wrapperEl.style.top="calc(8px + var(--ion-safe-area-top, 0px))",wrapperAnimation.fromTo("opacity",.01,1);break;case"middle":const topPosition=Math.floor(hostEl.clientHeight/2-wrapperEl.clientHeight/2);wrapperEl.style.top=`${topPosition}px`,wrapperAnimation.fromTo("opacity",.01,1);break;default:wrapperEl.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",wrapperAnimation.fromTo("opacity",.01,1)}return baseAnimation.addElement(hostEl).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(wrapperAnimation)},"mdEnterAnimation"),mdLeaveAnimation=__name(baseEl=>{const baseAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__.c)(),hostEl=baseEl.host||baseEl,wrapperEl=baseEl.querySelector(".toast-wrapper");return wrapperAnimation.addElement(wrapperEl).fromTo("opacity",.99,0),baseAnimation.addElement(hostEl).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation)},"mdLeaveAnimation"),Toast=__name(class{constructor(hostRef){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.didPresent=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionToastDidPresent",7),this.willPresent=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionToastWillPresent",7),this.willDismiss=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionToastWillDismiss",7),this.didDismiss=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionToastDidDismiss",7),this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=ev=>{const role=ev.detail.role;if((0,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.i)(role)){const cancelButton=this.getButtons().find(b=>"cancel"===b.role);this.callButtonHandler(cancelButton)}}}connectedCallback(){(0,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.e)(this.el)}present(){var _this=this;return(0,_Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.Z)(function*(){yield(0,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.d)(_this,"toastEnter",iosEnterAnimation,mdEnterAnimation,_this.position),_this.duration>0&&(_this.durationTimeout=setTimeout(()=>_this.dismiss(void 0,"timeout"),_this.duration))})()}dismiss(data,role){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.f)(this,data,role,"toastLeave",iosLeaveAnimation,mdLeaveAnimation,this.position)}onDidDismiss(){return(0,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el,"ionToastDidDismiss")}onWillDismiss(){return(0,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map(b=>"string"==typeof b?{text:b}:b):[]}buttonClick(button){var _this2=this;return(0,_Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.Z)(function*(){const role=button.role;return(0,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.i)(role)||(yield _this2.callButtonHandler(button))?_this2.dismiss(void 0,role):Promise.resolve()})()}callButtonHandler(button){return(0,_Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.Z)(function*(){if(button&&button.handler)try{if(!1===(yield(0,_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_2__.s)(button.handler)))return!1}catch(e){console.error(e)}return!0})()}renderButtons(buttons,side){if(0===buttons.length)return;const mode=(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),buttonGroupsClasses={"toast-button-group":!0,[`toast-button-group-${side}`]:!0};return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:buttonGroupsClasses},buttons.map(b=>(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{type:"button",class:buttonClass(b),tabIndex:0,onClick:()=>this.buttonClick(b),part:"button"},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"toast-button-inner"},b.icon&&(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon",{icon:b.icon,slot:void 0===b.text?"icon-only":void 0,class:"toast-icon"}),b.text),"md"===mode&&(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-ripple-effect",{type:void 0!==b.icon&&void 0===b.text?"unbounded":"bounded"}))))}render(){const allButtons=this.getButtons(),startButtons=allButtons.filter(b=>"start"===b.side),endButtons=allButtons.filter(b=>"start"!==b.side),mode=(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),wrapperClass={"toast-wrapper":!0,[`toast-${this.position}`]:!0},role=allButtons.length>0?"dialog":"status";return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.H,Object.assign({role,tabindex:"-1"},this.htmlAttributes,{style:{zIndex:`${6e4+this.overlayIndex}`},class:(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.color,Object.assign(Object.assign({[mode]:!0},(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.cssClass)),{"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:wrapperClass},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"toast-container",part:"container"},this.renderButtons(startButtons,"start"),(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"toast-content"},void 0!==this.header&&(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"toast-message",part:"message",innerHTML:(0,_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_6__.s)(this.message)})),this.renderButtons(endButtons,"end"))))}get el(){return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.i)(this)}},"Toast"),buttonClass=__name(button=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==button.icon&&void 0===button.text,[`toast-button-${button.role}`]:void 0!==button.role,"ion-focusable":!0,"ion-activatable":!0},(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_5__.g)(button.cssClass)),"buttonClass");Toast.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},1269:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});var _Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8239);const hostContext=__name((selector,el)=>null!==el.closest(selector),"hostContext"),createColorClasses=__name((color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,"createColorClasses"),getClassList=__name(classes=>void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter(c=>null!=c).map(c=>c.trim()).filter(c=>""!==c):[],"getClassList"),getClassMap=__name(classes=>{const map={};return getClassList(classes).forEach(c=>map[c]=!0),map},"getClassMap"),SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(){var _ref=(0,_Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.Z)(function*(url,ev,direction,animation){if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1});return __name(function(_x,_x2,_x3,_x4){return _ref.apply(this,arguments)},"openURL")}()}};