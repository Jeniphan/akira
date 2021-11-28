"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=7802,exports.ids=[7802],exports.modules={7330:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>attachComponent,d:()=>detachComponent});var _Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8239),_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2377);const attachComponent=function(){var _ref=(0,_Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.Z)(function*(delegate,container,component,cssClasses,componentProps){if(delegate)return delegate.attachViewToDom(container,component,componentProps,cssClasses);if("string"!=typeof component&&!(component instanceof HTMLElement))throw new Error("framework delegate is missing");const el="string"==typeof component?container.ownerDocument&&container.ownerDocument.createElement(component):component;return cssClasses&&cssClasses.forEach(c=>el.classList.add(c)),componentProps&&Object.assign(el,componentProps),container.appendChild(el),yield new Promise(resolve=>(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__.c)(el,resolve)),el});return __name(function(_x,_x2,_x3,_x4,_x5){return _ref.apply(this,arguments)},"attachComponent")}(),detachComponent=__name((delegate,element)=>{if(element){if(delegate){const container=element.parentElement;return delegate.removeViewFromDom(container,element)}element.remove()}return Promise.resolve()},"detachComponent")},7802:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_tab:()=>Tab,ion_tabs:()=>Tabs});var _Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8239),_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3150),_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7330);const Tab=__name(class{constructor(hostRef){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.loaded=!1,this.active=!1}componentWillLoad(){var _this=this;return(0,_Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.Z)(function*(){_this.active&&(yield _this.setActive())})()}setActive(){var _this2=this;return(0,_Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.Z)(function*(){yield _this2.prepareLazyLoaded(),_this2.active=!0})()}changeActive(isActive){isActive&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}render(){const{tab,active,component}=this;return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"tabpanel","aria-hidden":active?null:"true","aria-labelledby":`tab-button-${tab}`,class:{"ion-page":void 0===component,"tab-hidden":!active}},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get el(){return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.i)(this)}static get watchers(){return{active:["changeActive"]}}},"Tab");Tab.style=":host(.tab-hidden){display:none !important}";const Tabs=__name(class{constructor(hostRef){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionNavWillLoad=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=ev=>{const{href,tab}=ev.detail;if(this.useRouter&&void 0!==href){const router=document.querySelector("ion-router");router&&router.push(href)}else this.select(tab)}}componentWillLoad(){var _this3=this;return(0,_Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.Z)(function*(){if(_this3.useRouter||(_this3.useRouter=!!document.querySelector("ion-router")&&!_this3.el.closest("[no-router]")),!_this3.useRouter){const tabs=_this3.tabs;tabs.length>0&&(yield _this3.select(tabs[0]))}_this3.ionNavWillLoad.emit()})()}componentWillRender(){const tabBar=this.el.querySelector("ion-tab-bar");if(tabBar){const tab=this.selectedTab?this.selectedTab.tab:void 0;tabBar.selectedTab=tab}}select(tab){var _this4=this;return(0,_Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.Z)(function*(){const selectedTab=getTab(_this4.tabs,tab);return!!_this4.shouldSwitch(selectedTab)&&(yield _this4.setActive(selectedTab),yield _this4.notifyRouter(),_this4.tabSwitch(),!0)})()}getTab(tab){var _this5=this;return(0,_Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.Z)(function*(){return getTab(_this5.tabs,tab)})()}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}setRouteId(id){var _this6=this;return(0,_Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.Z)(function*(){const selectedTab=getTab(_this6.tabs,id);return _this6.shouldSwitch(selectedTab)?(yield _this6.setActive(selectedTab),{changed:!0,element:_this6.selectedTab,markVisible:()=>_this6.tabSwitch()}):{changed:!1,element:_this6.selectedTab}})()}getRouteId(){var _this7=this;return(0,_Users_jeniphanpukkham_Documents_akira_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.Z)(function*(){const tabId=_this7.selectedTab&&_this7.selectedTab.tab;return void 0!==tabId?{id:tabId,element:_this7.selectedTab}:void 0})()}setActive(selectedTab){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=selectedTab,this.ionTabsWillChange.emit({tab:selectedTab.tab}),selectedTab.active=!0,Promise.resolve())}tabSwitch(){const selectedTab=this.selectedTab,leavingTab=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,selectedTab&&leavingTab!==selectedTab&&(leavingTab&&(leavingTab.active=!1),this.ionTabsDidChange.emit({tab:selectedTab.tab}))}notifyRouter(){if(this.useRouter){const router=document.querySelector("ion-router");if(router)return router.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(selectedTab){const leavingTab=this.selectedTab;return void 0!==selectedTab&&selectedTab!==leavingTab&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.H,{onIonTabButtonClick:this.onTabClicked},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"top"}),(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"tabs-inner"},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"bottom"}))}get el(){return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.i)(this)}},"Tabs"),getTab=__name((tabs,tab)=>{const tabEl="string"==typeof tab?tabs.find(t=>t.tab===tab):tab;return tabEl||console.error(`tab with id: "${tabEl}" does not exist`),tabEl},"getTab");Tabs.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}};