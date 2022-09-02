/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;class o{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}}const n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const r=window,h=r.trustedTypes,d=h?h.emptyScript:"",c=r.reactiveElementPolyfillSupport,a={toAttribute(t,i){switch(i){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:u};class p extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var s;const e=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{i?s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((i=>{const e=document.createElement("style"),o=t.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,s.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=v){var e;const o=this.constructor._$Ep(t,s);if(void 0!==o&&!0===s.reflect){const n=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:a).toAttribute(i,s.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,o=e._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=e.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:a;this._$El=o,this[o]=n.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:p}),(null!==(l=r.reactiveElementVersions)&&void 0!==l?l:r.reactiveElementVersions=[]).push("1.4.1");const f=window,y=f.trustedTypes,m=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,w="?"+g,$=`<${w}>`,S=document,k=(t="")=>S.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,E=/>/g,M=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),N=/'/g,U=/"/g,O=/^(?:script|style|textarea|title)$/i,R=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),T=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),P=new WeakMap,z=S.createTreeWalker(S,129,null,!1),D=(t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":"",l=C;for(let i=0;i<s;i++){const s=t[i];let r,h,d=-1,c=0;for(;c<s.length&&(l.lastIndex=c,h=l.exec(s),null!==h);)c=l.lastIndex,l===C?"!--"===h[1]?l=x:void 0!==h[1]?l=E:void 0!==h[2]?(O.test(h[2])&&(o=RegExp("</"+h[2],"g")),l=M):void 0!==h[3]&&(l=M):l===M?">"===h[0]?(l=null!=o?o:C,d=-1):void 0===h[1]?d=-2:(d=l.lastIndex-h[2].length,r=h[1],l=void 0===h[3]?M:'"'===h[3]?U:N):l===U||l===N?l=M:l===x||l===E?l=C:(l=M,o=void 0);const a=l===M&&t[i+1].startsWith("/>")?" ":"";n+=l===C?s+$:d>=0?(e.push(r),s.slice(0,d)+"$lit$"+s.slice(d)+g+a):s+g+(-2===d?(e.push(void 0),i):a)}const r=n+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(r):r,e]};class I{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const l=t.length-1,r=this.parts,[h,d]=D(t,i);if(this.el=I.createElement(h,s),z.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=z.nextNode())&&r.length<l;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(g)){const s=d[n++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(g),i=/([.?@])?(.*)/.exec(s);r.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?W:"?"===i[1]?q:"@"===i[1]?K:J})}else r.push({type:6,index:o})}for(const i of t)e.removeAttribute(i)}if(O.test(e.tagName)){const t=e.textContent.split(g),i=t.length-1;if(i>0){e.textContent=y?y.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],k()),z.nextNode(),r.push({type:2,index:++o});e.append(t[i],k())}}}else if(8===e.nodeType)if(e.data===w)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(g,t+1));)r.push({type:7,index:o}),t+=g.length-1}o++}}static createElement(t,i){const s=S.createElement("template");return s.innerHTML=t,s}}function L(t,i,s=t,e){var o,n,l,r;if(i===T)return i;let h=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const d=A(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==d&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===d?h=void 0:(h=new d(t),h._$AT(t,s,e)),void 0!==e?(null!==(l=(r=s)._$Cl)&&void 0!==l?l:r._$Cl=[])[e]=h:s._$Cu=h),void 0!==h&&(i=L(t,h._$AS(t,i.values),h,e)),i}class B{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:S).importNode(s,!0);z.currentNode=o;let n=z.nextNode(),l=0,r=0,h=e[0];for(;void 0!==h;){if(l===h.index){let i;2===h.type?i=new H(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new F(n,this,t)),this.v.push(i),h=e[++r]}l!==(null==h?void 0:h.index)&&(n=z.nextNode(),l++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class H{constructor(t,i,s,e){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$C_=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=L(this,t,i),A(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>_(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==j&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(S.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=I.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new B(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=P.get(t.strings);return void 0===i&&P.set(t.strings,i=new I(t)),i}O(t){_(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new H(this.S(k()),this.S(k()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class J{constructor(t,i,s,e,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=L(this,t,i,0),n=!A(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const e=t;let l,r;for(t=o[0],l=0;l<o.length-1;l++)r=L(this,e[s+l],i,l),r===T&&(r=this._$AH[l]),n||(n=!A(r)||r!==this._$AH[l]),r===j?t=j:t!==j&&(t+=(null!=r?r:"")+o[l+1]),this._$AH[l]=r}n&&!e&&this.P(t)}P(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends J{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===j?void 0:t}}const Z=y?y.emptyScript:"";class q extends J{constructor(){super(...arguments),this.type=4}P(t){t&&t!==j?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class K extends J{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=L(this,t,i,0))&&void 0!==s?s:j)===T)return;const e=this._$AH,o=t===j&&e!==j||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==j&&(e===j||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const G=f.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,V;null==G||G(I,H),(null!==(b=f.litHtmlVersions)&&void 0!==b?b:f.litHtmlVersions=[]).push("2.3.1");class X extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new H(i.insertBefore(k(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}X.finalized=!0,X._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:X});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:X}),(null!==(V=globalThis.litElementVersions)&&void 0!==V?V:globalThis.litElementVersions=[]).push("3.2.2");class tt extends X{createRenderRoot(){return this}static get properties(){return{chance:{type:Number},blue:{type:Number},red:{type:Number},numOfDiamonds:{type:Number}}}constructor(){super(),this.chance=75,this.blue=0,this.red=0,this.numOfDiamonds=10}render(){return R`
      <div class="main card container border border-5 border-dark">
        <div class="row first-row">
          <div class="col-6">
            ${this.renderDiamonds("blue",this.numOfDiamonds)}
          </div>
          <div class="btn-column col-2">
            <button
              @click="${()=>this._onClick("first","blue")}"
              type="button"
              class="cut-btn btn btn-light"
            >
              <i class="bi bi-play-fill"></i>
            </button>
          </div>
          <div class="border rounded border-4 fs-5 col-2">
            <p class="text">${this.chance}%</p>
          </div>
          <div class="fs-5 col-2">
            <button
              @click="${this.refresh}"
              type="button"
              class="refresh btn btn-secondary"
            >
              <i class="bi bi-arrow-clockwise"></i>
            </button>
          </div>
        </div>
        <br />
        <div class="row second-row">
          <div class="col-6">
            ${this.renderDiamonds("blue",this.numOfDiamonds)}
          </div>
          <div class="btn-column col-2">
            <button
              @click="${()=>this._onClick("second","blue")}"
              type="button"
              class="cut-btn btn btn-light"
            >
              <i class="bi bi-play-fill"></i>
            </button>
          </div>
          <div class="border border-primary rounded border-4 fs-5 col-2">
            <p class="text">${this.blue}</p>
          </div>
          <div class="fs-5 col-2">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nodes
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" @click="${()=>this.updateDiamonds(4)}">4</a></li>
                <li><a class="dropdown-item" @click="${()=>this.updateDiamonds(5)}">5</a></li>
                <li><a class="dropdown-item" @click="${()=>this.updateDiamonds(6)}">6</a></li>
                <li><a class="dropdown-item" @click="${()=>this.updateDiamonds(7)}">7</a></li>
                <li><a class="dropdown-item" @click="${()=>this.updateDiamonds(8)}">8</a></li>
                <li><a class="dropdown-item" @click="${()=>this.updateDiamonds(9)}">9</a></li>
                <li><a class="dropdown-item" @click="${()=>this.updateDiamonds(10)}">10</a></li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div class="row third-row">
          <div class="col-6">${this.renderDiamonds("red",this.numOfDiamonds)}</div>
          <div class="btn-column col-2">
            <button
              @click="${()=>this._onClick("third","red")}"
              type="button"
              class="cut-btn btn btn-light"
            >
              <i class="bi bi-play-fill"></i>
            </button>
          </div>
          <div class="border border-danger rounded border-4 fs-5 col-2">
            <p class="text">${this.red}</p>
          </div>
        </div>
      </div>
    `}_onClick(t,i){const s=this.getElementsByClassName(t+"-row")[0].firstElementChild.querySelector("."+i+"-diamond.empty");if(null!==s){let t=s.classList;Math.floor(100*Math.random())<=this.chance?(t.add(i+"-success"),this.chance>25&&(this.chance-=10),"blue"==i?this.blue++:this.red++):(t.add("failure"),this.chance<75&&(this.chance+=10)),t.remove("empty")}}renderDiamonds(t,i){let s=[],e=0;for(;e<i;)s.push(R`<div class="${t}-diamond empty"></div>`),e++;return s}updateDiamonds(t){this.numOfDiamonds=t,this.refresh()}refresh(){this.chance=75,this.blue=0,this.red=0,this.querySelectorAll(".red-success, .blue-success, .failure").forEach((t=>{t.classList.remove("red-success"),t.classList.remove("blue-success"),t.classList.remove("failure"),t.classList.add("empty")}))}}window.customElements.define("ability-stone-facet",tt);export{tt as AbilityStoneFacet};