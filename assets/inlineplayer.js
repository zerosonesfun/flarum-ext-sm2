!function(){"use strict";function s(){var t=this,e=this,i=soundManager,s=navigator.userAgent.match(/msie/i);this.playableClass="inline-playable",this.excludeClass="inline-exclude",this.links=[],this.sounds=[],this.soundsByURL=[],this.indexByURL=[],this.lastSound=null,this.soundCount=0,this.config={playNext:!1,autoPlay:!1},this.css={sDefault:"sm2_link",sLoading:"sm2_loading",sPlaying:"sm2_playing",sPaused:"sm2_paused"},this.addEventHandler=void 0!==window.addEventListener?function(s,e,n){return s.addEventListener(e,n,!1)}:function(s,e,n){s.attachEvent("on"+e,n)},this.removeEventHandler=void 0!==window.removeEventListener?function(s,e,n){return s.removeEventListener(e,n,!1)}:function(s,e,n){return s.detachEvent("on"+e,n)},this.classContains=function(s,e){return void 0!==s.className&&s.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},this.addClass=function(s,e){s&&e&&!t.classContains(s,e)&&(s.className=(s.className?s.className+" ":"")+e)},this.removeClass=function(s,e){s&&e&&t.classContains(s,e)&&(s.className=s.className.replace(new RegExp("( "+e+")|("+e+")","g"),""))},this.getSoundByURL=function(s){return void 0!==t.soundsByURL[s]?t.soundsByURL[s]:null},this.isChildOfNode=function(s,e){if(!s||!s.parentNode)return!1;for(e=e.toLowerCase();s=s.parentNode,s&&s.parentNode&&s.nodeName.toLowerCase()!==e;);return s.nodeName.toLowerCase()===e?s:null},this.events={play:function(){e.removeClass(this._data.oLink,this._data.className),this._data.className=e.css.sPlaying,e.addClass(this._data.oLink,this._data.className)},stop:function(){e.removeClass(this._data.oLink,this._data.className),this._data.className=""},pause:function(){e.removeClass(this._data.oLink,this._data.className),this._data.className=e.css.sPaused,e.addClass(this._data.oLink,this._data.className)},resume:function(){e.removeClass(this._data.oLink,this._data.className),this._data.className=e.css.sPlaying,e.addClass(this._data.oLink,this._data.className)},finish:function(){var s;e.removeClass(this._data.oLink,this._data.className),this._data.className="",!e.config.playNext||(s=e.indexByURL[this._data.oLink.href]+1)<e.links.length&&e.handleClick({target:e.links[s]})}},this.stopEvent=function(s){return void 0!==s&&void 0!==s.preventDefault?s.preventDefault():"undefined"!=typeof event&&void 0!==event.returnValue&&(event.returnValue=!1),!1},this.getTheDamnLink=s?function(s){return s&&s.target?s.target:window.event.srcElement}:function(s){return s.target},this.handleClick=function(s){if(void 0!==s.button&&1<s.button)return!0;var e=t.getTheDamnLink(s);if("a"!==e.nodeName.toLowerCase()&&!(e=t.isChildOfNode(e,"a")))return!0;if(!e.href||!i.canPlayLink(e)&&!t.classContains(e,t.playableClass)||t.classContains(e,t.excludeClass))return!0;var n=e.href,a=t.getSoundByURL(n);return a?(a===t.lastSound||(i._writeDebug("sound different than last sound: "+t.lastSound.id),t.lastSound&&t.stopSound(t.lastSound)),a.togglePause()):(t.lastSound&&t.stopSound(t.lastSound),(a=i.createSound({id:"inlineMP3Sound"+t.soundCount++,url:n,onplay:t.events.play,onstop:t.events.stop,onpause:t.events.pause,onresume:t.events.resume,onfinish:t.events.finish,type:e.type||null}))._data={oLink:e,className:t.css.sPlaying},t.soundsByURL[n]=a,t.sounds.push(a),a.play()),t.lastSound=a,void 0!==s&&void 0!==s.preventDefault?s.preventDefault():event.returnValue=!1,!1},this.stopSound=function(s){soundManager.stop(s.id),soundManager.unload(s.id)},this.init=function(){i._writeDebug("inlinePlayer.init()");for(var s=document.getElementsByTagName("a"),e=0,n=0,a=s.length;n<a;n++)!i.canPlayLink(s[n])&&!t.classContains(s[n],t.playableClass)||t.classContains(s[n],t.excludeClass)||(t.addClass(s[n],t.css.sDefault),t.links[e]=s[n],t.indexByURL[s[n].href]=e,e++);0<e&&(t.addEventHandler(document,"click",t.handleClick),t.config.autoPlay&&t.handleClick({target:t.links[0],preventDefault:function(){}})),i._writeDebug("inlinePlayer.init(): Found "+e+" relevant items.")},this.init()}window.inlinePlayer=null,soundManager.setup({debugMode:!1,preferFlash:!1,useFlashBlock:!1,url:"../../swf/",flashVersion:9}),soundManager.onready(function(){new s})}();
