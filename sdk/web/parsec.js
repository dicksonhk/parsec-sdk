'use strict';var n;function q(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:q(a)}}var w="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,x="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)};
function y(a,b){if(b){var d=w;a=a.split(".");for(var c=0;c<a.length-1;c++){var g=a[c];g in d||(d[g]={});d=d[g]}a=a[a.length-1];c=d[a];b=b(c);b!=c&&null!=b&&x(d,a,{configurable:!0,writable:!0,value:b})}}
y("Promise",function(a){function b(e){this.c=0;this.h=void 0;this.b=[];var f=this.f();try{e(f.resolve,f.reject)}catch(l){f.reject(l)}}function d(){this.b=null}function c(e){return e instanceof b?e:new b(function(f){f(e)})}if(a)return a;d.prototype.c=function(e){if(null==this.b){this.b=[];var f=this;this.f(function(){f.h()})}this.b.push(e)};var g=w.setTimeout;d.prototype.f=function(e){g(e,0)};d.prototype.h=function(){for(;this.b&&this.b.length;){var e=this.b;this.b=[];for(var f=0;f<e.length;++f){var l=
e[f];e[f]=null;try{l()}catch(p){this.g(p)}}}this.b=null};d.prototype.g=function(e){this.f(function(){throw e;})};b.prototype.f=function(){function e(p){return function(r){l||(l=!0,p.call(f,r))}}var f=this,l=!1;return{resolve:e(this.o),reject:e(this.g)}};b.prototype.o=function(e){if(e===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.s(e);else{a:switch(typeof e){case "object":var f=null!=e;break a;case "function":f=!0;break a;default:f=!1}f?this.m(e):this.i(e)}};
b.prototype.m=function(e){var f=void 0;try{f=e.then}catch(l){this.g(l);return}"function"==typeof f?this.A(f,e):this.i(e)};b.prototype.g=function(e){this.j(2,e)};b.prototype.i=function(e){this.j(1,e)};b.prototype.j=function(e,f){if(0!=this.c)throw Error("Cannot settle("+e+", "+f+"): Promise already settled in state"+this.c);this.c=e;this.h=f;this.l()};b.prototype.l=function(){if(null!=this.b){for(var e=0;e<this.b.length;++e)h.c(this.b[e]);this.b=null}};var h=new d;b.prototype.s=function(e){var f=this.f();
e.v(f.resolve,f.reject)};b.prototype.A=function(e,f){var l=this.f();try{e.call(f,l.resolve,l.reject)}catch(p){l.reject(p)}};b.prototype.then=function(e,f){function l(m,u){return"function"==typeof m?function(v){try{p(m(v))}catch(A){r(A)}}:u}var p,r,k=new b(function(m,u){p=m;r=u});this.v(l(e,p),l(f,r));return k};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.v=function(e,f){function l(){switch(p.c){case 1:e(p.h);break;case 2:f(p.h);break;default:throw Error("Unexpected state: "+
p.c);}}var p=this;null==this.b?h.c(l):this.b.push(l)};b.resolve=c;b.reject=function(e){return new b(function(f,l){l(e)})};b.race=function(e){return new b(function(f,l){for(var p=t(e),r=p.next();!r.done;r=p.next())c(r.value).v(f,l)})};b.all=function(e){var f=t(e),l=f.next();return l.done?c([]):new b(function(p,r){function k(v){return function(A){m[v]=A;u--;0==u&&p(m)}}var m=[],u=0;do m.push(void 0),u++,c(l.value).v(k(m.length-1),r),l=f.next();while(!l.done)})};return b});
function z(){z=function(){};w.Symbol||(w.Symbol=aa)}function B(a,b){this.b=a;x(this,"description",{configurable:!0,writable:!0,value:b})}B.prototype.toString=function(){return this.b};var aa=function(){function a(d){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new B("jscomp_symbol_"+(d||"")+"_"+b++,d)}var b=0;return a}();
function C(){z();var a=w.Symbol.iterator;a||(a=w.Symbol.iterator=w.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&x(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ba(q(this))}});C=function(){}}function ba(a){C();a={next:a};a[w.Symbol.iterator]=function(){return this};return a}function D(){this.g=!1;this.c=null;this.i=void 0;this.b=1;this.l=this.h=0;this.f=null}function E(a){if(a.g)throw new TypeError("Generator is already running");a.g=!0}
D.prototype.j=function(a){this.i=a};function F(a,b){a.f={D:b,T:!0};a.b=a.h||a.l}D.prototype.return=function(a){this.f={return:a};this.b=this.l};function G(a,b,d){a.b=d;return{value:b}}function ca(a){this.b=new D;this.c=a}function da(a,b){E(a.b);var d=a.b.c;if(d)return H(a,"return"in d?d["return"]:function(c){return{value:c,done:!0}},b,a.b.return);a.b.return(b);return I(a)}
function H(a,b,d,c){try{var g=b.call(a.b.c,d);if(!(g instanceof Object))throw new TypeError("Iterator result "+g+" is not an object");if(!g.done)return a.b.g=!1,g;var h=g.value}catch(e){return a.b.c=null,F(a.b,e),I(a)}a.b.c=null;c.call(a.b,h);return I(a)}function I(a){for(;a.b.b;)try{var b=a.c(a.b);if(b)return a.b.g=!1,{value:b.value,done:!1}}catch(d){a.b.i=void 0,F(a.b,d)}a.b.g=!1;if(a.b.f){b=a.b.f;a.b.f=null;if(b.T)throw b.D;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ea(a){this.next=function(b){E(a.b);a.b.c?b=H(a,a.b.c.next,b,a.b.j):(a.b.j(b),b=I(a));return b};this.throw=function(b){E(a.b);a.b.c?b=H(a,a.b.c["throw"],b,a.b.j):(F(a.b,b),b=I(a));return b};this.return=function(b){return da(a,b)};C();this[Symbol.iterator]=function(){return this}}function fa(a){function b(c){return a.next(c)}function d(c){return a.throw(c)}return new Promise(function(c,g){function h(e){e.done?c(e.value):Promise.resolve(e.value).then(b,d).then(h,g)}h(a.next())})}
function J(a){return fa(new ea(new ca(a)))}y("Object.entries",function(a){return a?a:function(b){var d=[],c;for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&d.push([c,b[c]]);return d}});
y("Array.from",function(a){return a?a:function(b,d,c){d=null!=d?d:function(f){return f};var g=[],h="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof h){b=h.call(b);for(var e=0;!(h=b.next()).done;)g.push(d.call(c,h.value,e++))}else for(h=b.length,e=0;e<h;e++)g.push(d.call(c,b[e],e));return g}});function ha(a,b){if(null==a)throw new TypeError("The 'this' value for String.prototype."+b+" must not be null or undefined");return a+""}
y("String.prototype.repeat",function(a){return a?a:function(b){var d=ha(this,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var c="";b;)if(b&1&&(c+=d),b>>>=1)d+=d;return c}});y("String.prototype.padStart",function(a){return a?a:function(b,d){var c=ha(this,"padStart");b-=c.length;d=void 0!==d?String(d):" ";return(0<b&&d?d.repeat(Math.ceil(b/d.length)).substring(0,b):"")+c}});
var K={PARSEC_OK:0,PARSEC_CONNECTING:20,PARSEC_WRN_BROWSER:30,CONNECT_WRN_APPROVAL:6,CONNECT_WRN_DECLINED:8,CONNECT_WRN_PEER_GONE:99,CONNECT_WRN_UNCONFIRMED:100,PARSEC_NOT_RUNNING:-3,WS_ERR_CONNECT:-6101,WS_ERR_CLOSE:-6105,NAT_ERR_WEBRTC:-6200};function L(a,b,d,c){d=c?d.bind(c):d;a.addEventListener(b,d);return[a,b,d]}function ia(a){a=t(a);for(var b=a.next();!b.done;b=a.next())b=b.value,b[0].removeEventListener(b[1],b[2])}
function M(a,b,d,c,g){a=new DataView(a);a.setInt32(0,d);a.setInt32(4,c);a.setInt32(8,g);a.setInt8(12,b)}function N(a,b,d,c){var g=new ArrayBuffer(13);M(g,a,b,d,c);return g}function ja(a,b,d){var c=new ArrayBuffer(13+d.length+1);M(c,a,d.length+1,b,0);a=(new TextEncoder).encode(d);b=new Int8Array(c,13);for(var g=0;g<d.length;g++)b[g]=a[g];return c}
function ka(a,b){a=JSON.stringify({_version:1,_max_w:6E4,_max_h:6E4,_flags:0,resolutionX:a,resolutionY:b,refreshRate:60,mediaContainer:2});return ja(11,0,a)}
function la(a,b){switch(a.type){case 4:if(!a.relative){var d=b.videoWidth,c=b.videoHeight,g=Math.round(b.offsetWidth*window.devicePixelRatio),h=Math.round(b.offsetHeight*window.devicePixelRatio),e=Math.min(g/d,h/c);b=d*e;e*=c;h=Math.max((h-e)/2,0);g=Math.round(d/b*(a.x-Math.max((g-b)/2,0)));g===d-1&&(g=d);g>d&&(g=d);0>g&&(g=0);a.x=g;d=Math.round(c/e*(a.y-h));d===c-1&&(d=c);d>c&&(d=c);0>d&&(d=0);a.y=d}return N(3,a.relative?1:0,a.x,a.y);case 8:return c=new ArrayBuffer(28),M(c,23,a.id,0,0),d=new DataView(c),
d.setUint16(16,a.buttons),d.setInt16(18,a.thumbLX),d.setInt16(20,a.thumbLY),d.setInt16(22,a.thumbRX),d.setInt16(24,a.thumbRY),d.setUint8(26,a.leftTrigger),d.setUint8(27,a.rightTrigger),c;case 2:return N(1,a.button,a.pressed?1:0,0);case 1:return N(0,a.code,a.mod,a.pressed?1:0);case 3:return N(2,a.x,a.y,0);case 5:return N(4,a.button,a.pressed?1:0,a.id);case 6:return N(5,a.axis,a.value,a.id);case 7:return N(6,0,0,a.id);case 9:return N(24,0,0,0)}}var O={},ma=1;
function na(a){var b=ma++;O[b]=a;return b}function oa(a){var b=a.getInt16(32),d=a.getInt32(16),c=0<d?new Uint8Array(a.buffer,34,d):null;c=c?na(c):0;return{type:1,cursor:{size:d,positionX:a.getInt16(24),positionY:a.getInt16(26),width:a.getInt16(20),height:a.getInt16(22),hotX:a.getInt16(28),hotY:a.getInt16(30),imageUpdate:0<c,relative:!!(b&256),hidden:!!(b&512),stream:0},key:c}}function pa(a,b){b=na(new Uint8Array(b.buffer,13,a.u));return{type:3,id:a.w,key:b}}
function qa(){var a=new Uint8Array(16);crypto.getRandomValues(a);return a.map(function(b){return b%10}).join("")}
function P(a){var b=this;this.l=a;this.i=!1;this.j="";this.h=!1;this.b=this.sdp=null;this.c={};this.g=[];this.f=null;this.b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.parsec.gg:3478"}]});this.b.onicecandidate=function(d){d.candidate&&(d=d.candidate.candidate.replace("candidate:","").split(" "),8<=d.length&&"udp"===d[2].toLowerCase()&&b.l(d[4],parseInt(d[5],10),!1,"srflx"===d[7],"host"===d[7]))}}
P.prototype.close=function(){for(var a=t(Object.entries(this.c)),b=a.next();!b.done;b=a.next())b.value[1].close();this.b.close()};function Q(a,b,d,c,g){a.c[d]=a.b.createDataChannel(b,{negotiated:!0,id:d});a.c[d].binaryType="arraybuffer";a.c[d].onopen=c;a.c[d].onmessage=g}
function ra(a){var b;return J(function(d){if(1==d.b)return b=a,G(d,a.b.createOffer(),2);b.f=d.i;for(var c=a.f.sdp.split("\n"),g={},h=0;h<c.length;h++){var e=c[h].split("="),f=e[0];e=e[1];f&&("a"===f?(g.a||(g.a={}),f=e.split(/:(.+)/),g.a[f[0]]=f[1]):g[f]=e)}a.sdp=g;return d.return({ice_ufrag:a.sdp.a["ice-ufrag"],ice_pwd:a.sdp.a["ice-pwd"],fingerprint:a.sdp.a.fingerprint})})}P.prototype.send=function(a,b){"open"==this.c[b].readyState&&this.c[b].send(a)};
function sa(a){for(;0<a.g.length;){var b=a.g.shift();a.b.addIceCandidate(new RTCIceCandidate({candidate:"candidate:2395300328 1 udp 2113937151 "+b.ip+" "+(b.port+" typ "+(b.from_stun?"srflx":"host")+" generation 0 ufrag "+a.j+" network-cost 50"),sdpMid:a.sdp.a.mid,sdpMLineIndex:0}))}}
function ta(a,b,d,c){var g,h;J(function(e){switch(e.b){case 1:if(!a.f)throw"Offer is not set";if(a.h){e.b=0;break}a.j=b;return G(e,a.b.setLocalDescription(a.f),3);case 3:e.h=4;var f=a.sdp.a.mid;g="v=0\r\no=- "+(qa()+" 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE ")+(f+"\r\na=msid-semantic: WMS *\r\nm=application 9 DTLS/SCTP 5000\r\nc=IN IP4 0.0.0.0\r\nb=AS:30\r\na=ice-ufrag:")+(b+"\r\na=ice-pwd:")+(d+"\r\na=ice-options:trickle\r\na=fingerprint:")+(c+"\r\na=setup:active\r\na=mid:")+(f+"\r\na=sendrecv\r\na=sctpmap:5000 webrtc-datachannel 256\r\na=max-message-size:1073741823\r\n");
return G(e,a.b.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:g})),6);case 6:e.b=5;e.h=0;break;case 4:e.h=0,f=e.f.D,e.f=null,h=f,console.log(h);case 5:a.i&&sa(a),a.h=!0,e.b=0}})}function ua(a,b,d,c,g){c?(a.i=!0,setTimeout(function(){a.l("1.2.3.4",1234,!0,!1,!1)},500)):a.g.push({ip:b.replace("::ffff:",""),port:d,from_stun:g});a.h&&a.i&&sa(a)}function va(a,b){this.c=b;this.g=a;this.f="";this.b=null;this.h=[];this.i=this.j=!1;this.timeout=null}
function wa(a,b,d,c,g,h,e){a.b=new WebSocket("wss://kessel-ws.parsecgaming.com:443/?session_id=_&role=client&version=1&sdk_version=0",b);a.f=d;a.b.onclose=function(){a.i||a.c(K.WS_ERR_CLOSE)};a.b.onerror=function(){a.c(K.WS_ERR_CONNECT)};a.b.onopen=function(){for(;0<a.h.length;)a.b.send(a.h.shift());R(a,{action:"offer",version:1,payload:{to:a.f,attempt_id:a.g,secret:c?c:"",data:{ver_data:1,creds:g,mode:2,versions:{p2p:1,bud:1,init:1,video:1,audio:1,control:1}}}});a.timeout=setTimeout(function(){a.c(K.CONNECT_WRN_APPROVAL)},
3E4)};a.b.onmessage=function(f){f=JSON.parse(f.data);switch(f.action){case "answer_relay":a.j=!0;if(!f.payload.approved){a.c(K.CONNECT_WRN_DECLINED);break}a.timeout&&clearTimeout(a.timeout);a.timeout=setTimeout(function(){a.c(K.NAT_ERR_WEBRTC)},1E4);f=f.payload.data.creds;h(f.ice_ufrag,f.ice_pwd,f.fingerprint);break;case "candex_relay":f=f.payload.data;e(f.ip,f.port,f.sync,f.from_stun);break;case "close":var l=K.WS_ERR_CLOSE;switch(f.payload.reason){case "HOST_NOT_FOUND":l=K.CONNECT_WRN_PEER_GONE;
break;case "USER_UNCONFIRMED":l=K.CONNECT_WRN_UNCONFIRMED}a.c(l)}}}function R(a,b){a.b&&(b=JSON.stringify(b),a.b.readyState==WebSocket.OPEN?a.b.send(b):a.h.push(b))}va.prototype.close=function(a){this.i=!0;this.b&&(this.b.close(a),this.b=null);this.timeout&&(clearTimeout(this.timeout),this.timeout=null)};var S=1E3/60/1E3,T=(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?200:100)/1E3;function U(a,b){a.playbackRate=b;a.play().catch(function(){})}
function V(a,b,d){var c=this;this.b=a;this.l=!0;this.type=b;this.o=d;this.f=this.c=null;this.m='video/mp4; codecs="avc1.64001e"'===this.type;this.g=[];this.j=[];this.h=null;this.i=0;this.A=function(){var g=c.b.seekable;if(g&&0<g.length){g=g.end(0);var h=g-c.b.currentTime;'video/mp4; codecs="avc1.64001e"'===c.type?(c.i=h>1.5*S?c.i+1:0,60<c.i&&1==c.b.playbackRate?U(c.b,h>3*S?10:1.25):h<S&&1!=c.b.playbackRate&&U(c.b,1)):h>3*T?c.b.currentTime=g+1E3:h>1.5*T&&1==c.b.playbackRate?U(c.b,10):h<T&&10==c.b.playbackRate&&
U(c.b,1)}}}V.prototype.s=function(){if(0<this.j.length&&this.c&&!this.c.updating)try{var a=this.j.shift();this.c.appendBuffer(a)}catch(b){console.warn(b),X(this),this.o&&this.o()}};
function xa(a){a.f=new MediaSource;a.b.src=URL.createObjectURL(a.f);a.b.load();a.g.push(L(a.b,"error",function(){console.error(a.b.error.message)},null));a.g.push(L(a.f,"sourceopen",function(){a.c=a.f.addSourceBuffer(a.type);a.c.mode="sequence";a.g.push(L(a.c,"update",a.s,a));a.b.play().catch(function(){});a.h=setInterval(a.A,1)},null))}
function X(a){a.h&&clearInterval(a.h);a.b.pause();ia(a.g);a.f&&(a.c&&(a.f.removeSourceBuffer(a.c),a.c=null),a.f.endOfStream(),URL.revokeObjectURL(a.b.src),a.f=null);a.b.src="";'video/mp4; codecs="avc1.64001e"'===a.type&&a.b.load();a.l=!0;a.m='video/mp4; codecs="avc1.64001e"'===a.type;a.g=[];a.j=[];a.h=null;a.i=0}
function ya(a,b){b=new Uint8Array(b);'audio/mp4; codecs="opus"'===a.type&&a.l&&(a.l=!1,xa(a));'video/mp4; codecs="avc1.64001e"'===a.type&&102===b[4]&&(X(a),xa(a),a.m=!1);a.m||(a.j.push(b),a.s())}function za(){for(var a=[],b=new Uint8Array(4),d=0;6>d;d++)crypto.getRandomValues(b),a.push(Array.from(b).map(function(c){return c.toString(16).padStart(2,"0")}).join(""));return a.join("-")}
function Y(a,b){var d=this;this.status=K.PARSEC_NOT_RUNNING;this.o=performance.now();this.s={encodeLatency:0,decodeLatency:0,networkLatency:0};this.c=[];this.signal=this.b=null;this.h=[];this.g="";this.video=a;this.l=[];this.j={};this.m=0;this.i=new V(b,'audio/mp4; codecs="opus"',null);this.f=new V(a,'video/mp4; codecs="avc1.64001e"',function(){console.warn("Attempting to recover stream...");d.b&&d.b.send(N(13,0,0,1),0)});this.h.push(L(window,"beforeunload",function(){d.B();return null},null))}
function Z(a,b){if(a.signal&&a.status==K.PARSEC_CONNECTING){var d=a.signal;R(d,{action:"offer_cancel",version:1,payload:{to:d.f,attempt_id:d.g}})}a.signal&&(a.signal.close(1E3),a.signal=null);b!=K.PARSEC_OK&&(a.b&&a.status==K.PARSEC_OK&&a.b.send(N(10,0,0,0),0),a.b&&(a.b.close(),a.b=null),X(a.f),X(a.i));a.status=b;a.l=[];a.j={};a.m=0}n=Y.prototype;n.B=function(){ia(this.h);this.C()};n.U=function(){};n.R=function(){return this.g};
n.S=function(a){var b=O[a];void 0!=b&&delete O[a];return void 0==b?null:b};
n.F=function(a,b,d){var c=this,g,h,e,f,l,p;return J(function(r){if(1==r.b){g=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);if(!g)return c.status=K.PARSEC_WRN_BROWSER,r.return();if(c.status!=K.PARSEC_NOT_RUNNING)return r.return();c.status=K.PARSEC_CONNECTING;O={};ma=1;X(c.i);X(c.f);c.c=[];c.g=za();c.signal=new va(c.g,function(k){Z(c,k)});h=function(k,m,u,v,A){if(c.signal){var W=c.signal;R(W,{action:"candex",version:1,payload:{to:W.f,attempt_id:W.g,data:{ver_data:1,ip:k,port:m,
lan:A,from_stun:v,sync:u}}})}};e=function(){c.h.push(L(document,"visibilitychange",function(){document.hidden?(X(c.f),c.b&&c.b.send(N(19,0,0,0),0)):c.b&&c.b.send(N(13,0,0,0),0)},null));var k=window.screen.width,m=window.screen.height;if(800>k||600>m||1920<k||1080<m)k=1920,m=1080;c.b&&c.b.send(ka(k,m),0);Z(c,K.PARSEC_OK)};c.b=new P(h);Q(c.b,"control",0,e,function(k){c.o=performance.now();var m=new DataView(k.data);k={u:m.getInt32(0),w:m.getInt32(4),P:m.getInt32(8),type:m.getInt8(12)};switch(k.type){case 10:c.status=
k.u;break;case 21:c.s={encodeLatency:parseFloat(k.w)/1E3,decodeLatency:0,networkLatency:0,packetsSent:0,fastRTs:0,slowRTs:0,bitrate:0};break;case 20:c.c.push({type:2,gamepadID:k.u,motorBig:k.w,motorSmall:k.P});break;case 16:c.c.push({type:k.u?4:5});break;case 28:c.m=k.u;break;case 17:c.c.push(pa(k,m));break;case 9:c.c.push(oa(m));break;case 25:m=JSON.parse((new TextDecoder("utf-8")).decode(new Uint8Array(m.buffer,13,k.u-1)));for(var u={},v=0;v<m.length;v++)m[v].id==k.w&&(u=m[v]);k={list:m,me:u};c.l=
k.list;c.j=k.me}});Q(c.b,"video",1,null,function(k){ya(c.f,k.data)});Q(c.b,"audio",2,null,function(k){ya(c.i,k.data)});return G(r,ra(c.b),2)}f=r.i;l=function(k,m,u){c.b&&ta(c.b,k,m,u)};p=function(k,m,u,v){c.b&&ua(c.b,k,m,u,v)};c.signal&&wa(c.signal,a,b,d,f,l,p);r.b=0})};n.K=function(){return this.status};n.J=function(){return this.j};n.H=function(){return this.m};n.G=function(){return this.l};n.C=function(){Z(this,K.PARSEC_NOT_RUNNING)};
n.O=function(a,b){this.b&&this.status==K.PARSEC_OK&&this.b.send(ja(17,a,b),0)};n.N=function(a){this.b&&this.status==K.PARSEC_OK&&this.b.send(la(a,this.video),0)};n.M=function(){return this.c.shift()};n.I=function(){return this.s};n.L=function(){return this.status==K.PARSEC_OK&&5E3<performance.now()-this.o};Y.prototype.destroy=Y.prototype.B;Y.prototype.setLogCallback=Y.prototype.U;Y.prototype.getAttemptID=Y.prototype.R;Y.prototype.getBuffer=Y.prototype.S;Y.prototype.clientConnect=Y.prototype.F;
Y.prototype.clientGetStatus=Y.prototype.K;Y.prototype.clientGetSelf=Y.prototype.J;Y.prototype.clientGetHostMode=Y.prototype.H;Y.prototype.clientGetGuests=Y.prototype.G;Y.prototype.clientDisconnect=Y.prototype.C;Y.prototype.clientSendUserData=Y.prototype.O;Y.prototype.clientSendMessage=Y.prototype.N;Y.prototype.clientPollEvents=Y.prototype.M;Y.prototype.clientGetMetrics=Y.prototype.I;Y.prototype.clientNetworkFailure=Y.prototype.L;Y.prototype.Status=K;window.Parsec=Y;