/*
* grrd's Puzzle
* Copyright (c) 2012 Gerard Tyedmers, grrd@gmx.net
* Licensed under the MPL License
*/
!function(){"use strict";function a(a,b){var c,d=document.createElement("canvas");d.width=1,d.height=b;var e=d.getContext("2d");e.drawImage(a,0,0);for(var f=e.getImageData(0,0,1,b).data,g=0,h=b,i=b;i>g;)c=f[4*(i-1)+3],0===c?h=i:g=i,i=h+g>>1;var j=i/b;return 0===j?1:j}function b(a){var b,c,d,e;if(na&&(b=new Kinetic.Image({x:0,y:0,width:G,height:H,Image:a,opacity:.1}),Z.add(b),Z.draw()),ma)for(c=0;ea>c;c+=1)for(d=0;fa>d;d+=1)e=new Kinetic.Rect({x:d*U,y:c*V,width:U,height:V,stroke:"#333333",strokeWidth:2}),Z.add(e);_.add(Z),Z.moveToBottom()}function c(){ja=!0,ia=!1}function d(){var a,b;$.mobile.hidePageLoadingMsg(),$.mobile.changePage("#game",{transition:"slide"}),setTimeout(function(){var d=Y.getChildren();for(b=0;b<d.length;b+=1)d[b].setZIndex(Math.floor(Math.random()*fa*ea));for(b=0;b<d.length;b+=1)ka?(a=new Kinetic.Tween({node:d[b],x:Math.floor(Math.random()*U*(fa-1))+U/2,y:Math.floor(Math.random()*V*(ea-1))+V/2,rotation:.5*Math.PI*Math.floor(4*Math.random()),duration:1,onFinish:c()}),a.play()):(a=new Kinetic.Tween({node:d[b],x:Math.floor(Math.random()*U*(fa-1))+U/2,y:Math.floor(Math.random()*V*(ea-1))+V/2,duration:1,onFinish:c()}),a.play())},2e3)}function e(a,b,c,d){!function(){var e;if(la){var f=new Kinetic.Shape({drawFunc:function(d){d.beginPath(),d.moveTo(S,T),0===b?d.lineTo(S+U,T):(d.bezierCurveTo(S+.8*U,T+.1*V*c,S,T-.25*V*c,S+U/2,T-.25*V*c),d.bezierCurveTo(S+U,T-.25*V*c,S+.2*U,T+.1*V*c,S+U,T)),a===fa-1?d.lineTo(S+U,T+V):(d.bezierCurveTo(S+U+.1*U*c,T+.8*V,S+U-.25*U*c,T,S+U-.25*U*c,T+V/2),d.bezierCurveTo(S+U-.25*U*c,T+V,S+U+.1*U*c,T+.2*V,S+U,T+V)),b===ea-1?d.lineTo(S,T+V):(d.bezierCurveTo(S+.2*U,T+V-.1*V*c,S+U,T+V+.25*V*c,S+U/2,T+V+.25*V*c),d.bezierCurveTo(S,T+V+.25*V*c,S+.8*U,T+V-.1*V*c,S,T+V)),0===a?d.lineTo(S,T):(d.bezierCurveTo(S-.1*U*c,T+.2*V,S+.25*U*c,T+V,S+.25*U*c,T+V/2),d.bezierCurveTo(S+.25*U*c,T,S-.1*U*c,T+.8*V,S,T)),d.closePath(),d.fillStrokeShape(this)},fillPatternImage:d,fillPatternOffset:[a*U,b*V],stroke:"black",strokeWidth:4});f.toImage({width:U+.6*U,height:V+.6*V,x:.3*-U,y:.3*-V,callback:function(c){e=new Kinetic.Image({image:c,x:a*U+U/2,origX:a*U+U/2,y:b*V+V/2,origY:b*V+V/2,row:b,col:a,offset:[U/2+.3*U,V/2+.3*V],draggable:!0,dragBoundFunc:function(a){var b=a.y,c=a.x;return 0>c&&(c=0),c>G&&(c=G),0>b&&(b=0),b>H&&(b=H),{x:c,y:b}},name:"part_z"+b+"_s"+a}),s(e),e.createImageHitRegion(function(){Y.drawHit()})}}),f.setStrokeWidth(null),f.setStroke(null),f.toImage({width:U+.6*U,height:V+.6*V,x:.3*-U,y:.3*-V,callback:function(c){O[b][a]=c}})}else e=new Kinetic.Image({x:a*U+U/2,origX:a*U+U/2,y:b*V+V/2,origY:b*V+V/2,row:b,col:a,width:U,height:V,offset:[U/2,V/2],crop:{x:d.width/fa*a,y:d.height/ea*b,width:d.width/fa,height:d.height/ea},stroke:"black",strokeWidth:4,fill:"black",Image:d,draggable:!0,dragBoundFunc:function(a){var b=a.y,c=a.x;return 0>c&&(c=0),c>G&&(c=G),0>b&&(b=0),b>H&&(b=H),{x:c,y:b}},name:"part_z"+b+"_s"+a}),s(e)}()}function f(){var c,f;for(O=[],c=0;ea>c;c+=1)O[c]=[];ha=0,Y.removeChildren(),Z.removeChildren(),_.removeChildren(),_.setWidth(G),_.setHeight(H),S=0,T=0,U=G/fa,V=H/ea,La=1,_.add(Y);var g=G,h=H;if(aa){var i=a(ca,ca.naturalHeight);h/=i}0!==W.getPos()||5!==D&&6!==D&&7!==D&&8!==D||(g=H,h=G);var j=new Kinetic.Image({width:g,height:h,crop:{x:0,y:0,width:ca.width,height:ca.height},Image:ca});0!==W.getPos()||5!==D&&6!==D||(j.setRotationDeg(90),j.setX(G)),0!==W.getPos()||3!==D&&4!==D||(j.setRotationDeg(180),j.setX(G),j.setY(H)),0!==W.getPos()||7!==D&&8!==D||(j.setRotationDeg(270),j.setY(H)),j.toImage({width:G,height:H,callback:function(a){if((ma||na)&&b(a),la)j.toImage({width:G,height:H,callback:function(a){for(f=0;ea>f;f+=1)for(c=0;fa>c;c+=1)La=f%2!==0&&c%2!==0||f%2===0&&c%2===0?1:-1,e(c,f,La,a);Y.draw(),d()}});else{for(f=0;ea>f;f+=1)for(c=0;fa>c;c+=1)La=f%2!==0&&c%2!==0||f%2===0&&c%2===0?1:-1,e(c,f,La,a);Y.draw(),d()}}})}function g(){return Q=W.getPos(),P=$("input:radio[name=image-set-"+Q+"]:checked").val(),ia?void 0:void 0===P?void $("#popup_choose").popup("open"):void 0===C&&0===Q?void $("#popup_choose").popup("open"):void(qa&&$("#image"+Q+"-"+P).hasClass("locked")||(ia=!0,$.mobile.showPageLoadingMsg("a",document.webL10n.get("lb_load"),!1),ma="on"===ua.val(),na="on"===va.val(),ka="on"===wa.val(),oa="on"===xa.val(),Ma&&(localStorage.setItem("s_back_g_grid",ua.val()),localStorage.setItem("s_backg_image",va.val()),localStorage.setItem("s_rotate",wa.val()),localStorage.setItem("s_sound",xa.val())),document.getElementById("container").width=E,document.getElementById("container").height=F,H=F-4,G=E,J=da,B=0!==Q?"Images/"+z+"/image-set-"+Q+"/sujet"+da+P+".jpg":C,$("#g_imageObj").one("load",function(){ca=document.getElementById("g_imageObj"),f()}).attr("src",B).each(function(){navigator.sayswho.indexOf("MSIE")>=0&&this.complete&&$(this).trigger("load")})))}function h(){R="1",F>E?pa?(ea=9,fa=6):(ea=3,fa=2):pa?(ea=6,fa=9):(ea=2,fa=3),g()}function i(){R="2",F>E?pa?(ea=12,fa=8):(ea=6,fa=4):pa?(ea=8,fa=12):(ea=4,fa=6),g()}function j(){R="3",F>E?pa?(ea=18,fa=12):(ea=8,fa=5):pa?(ea=12,fa=18):(ea=5,fa=8),g()}function k(a,b,c,d){var e,f,g,h,i,j,k;if("g_layer"===a.getParent().attrs.name)if("g_layer"===b.getParent().attrs.name){b.setX(c),b.setY(d);var l=new Kinetic.Group({draggable:!0,dragBoundFunc:function(a){var b=a.y,c=a.x;return 0>c&&(c=0),c>G&&(c=G),0>b&&(b=0),b>H&&(b=H),{x:c,y:b}}});a.moveTo(l),b.moveTo(l),a.setDraggable(!1),b.setDraggable(!1),Y.add(l)}else h=a.getX(),i=a.getY(),b.getParent().setX(b.getParent().getX()+c-b.getAbsolutePosition().x),b.getParent().setY(b.getParent().getY()+d-b.getAbsolutePosition().y),a.moveTo(b.getParent()),a.setRotationDeg(b.getRotationDeg()),j=h-a.getAbsolutePosition().x,k=i-a.getAbsolutePosition().y,0===a.getParent().getRotationDeg()&&(a.setX(a.getX()+j),a.setY(a.getY()+k)),90===a.getParent().getRotationDeg()&&(a.setY(a.getY()-j),a.setX(a.getX()+k)),180===a.getParent().getRotationDeg()&&(a.setX(a.getX()-j),a.setY(a.getY()-k)),270===a.getParent().getRotationDeg()&&(a.setY(a.getY()+j),a.setX(a.getX()-k)),a.setDraggable(!1);else if("g_layer"===b.getParent().attrs.name)b.moveTo(a.getParent()),b.setAbsolutePosition(c,d),b.setRotationDeg(a.getRotationDeg()),b.setDraggable(!1);else{f=b.getParent().getChildren();for(var m=c-b.getAbsolutePosition().x,n=d-b.getAbsolutePosition().y;f.length>0;)void 0!==f[0]&&(g=f[0],h=g.getAbsolutePosition().x,i=g.getAbsolutePosition().y,g.moveTo(a.getParent()),g.setRotationDeg(a.getRotationDeg()),j=h-g.getAbsolutePosition().x+m,k=i-g.getAbsolutePosition().y+n,0===a.getParent().getRotationDeg()&&(g.setX(g.getX()+j),g.setY(g.getY()+k)),90===a.getParent().getRotationDeg()&&(g.setY(g.getY()-j),g.setX(g.getX()+k)),180===a.getParent().getRotationDeg()&&(g.setX(g.getX()-j),g.setY(g.getY()-k)),270===a.getParent().getRotationDeg()&&(g.setY(g.getY()+j),g.setX(g.getX()-k)))}f=a.getParent().getChildren();var o=f[0].getAbsolutePosition().x,p=f[0].getAbsolutePosition().x,q=f[0].getAbsolutePosition().y,r=f[0].getAbsolutePosition().y;for(e=0;e<f.length;e+=1)f[e].getAbsolutePosition().x<o&&(o=f[e].getAbsolutePosition().x),f[e].getAbsolutePosition().x>p&&(p=f[e].getAbsolutePosition().x),f[e].getAbsolutePosition().y<q&&(q=f[e].getAbsolutePosition().y),f[e].getAbsolutePosition().y>r&&(r=f[e].getAbsolutePosition().y);h=a.getAbsolutePosition().x,i=a.getAbsolutePosition().y,a.getParent().setOffset(0,0),a.getParent().setX((o+p)/2),a.getParent().setY((q+r)/2),j=h-a.getAbsolutePosition().x,k=i-a.getAbsolutePosition().y,0===a.getParent().getRotationDeg()&&a.getParent().setOffset(-1*j,-1*k),90===a.getParent().getRotationDeg()&&a.getParent().setOffset(-1*k,j),180===a.getParent().getRotationDeg()&&a.getParent().setOffset(j,k),270===a.getParent().getRotationDeg()&&a.getParent().setOffset(k,-1*j),"g_layer"===b.getParent().attrs.name?b.moveToTop():b.getParent().moveToTop(),Y.draw(),oa&&document.getElementById("click_sound").play()}function l(a){var b,c,d,e,f=[-1,1,0,0],g=[0,0,-1,1];for(L="g_layer"===a.getParent().attrs.name?a.getRotationDeg():(a.getRotationDeg()+a.getParent().getRotationDeg())%360,b=0;b<f.length;b+=1)e=_.get(".part_z"+(a.attrs.row+g[b])+"_s"+(a.attrs.col+f[b])),e.length>0&&(M="g_layer"===e[0].getParent().attrs.name?e[0].getRotationDeg():(e[0].getRotationDeg()+e[0].getParent().getRotationDeg())%360,0===L&&(c=a.getAbsolutePosition().x+U*f[b],d=a.getAbsolutePosition().y+V*g[b]),90===L&&(c=a.getAbsolutePosition().x-V*g[b],d=a.getAbsolutePosition().y+U*f[b]),180===L&&(c=a.getAbsolutePosition().x-U*f[b],d=a.getAbsolutePosition().y-V*g[b]),270===L&&(c=a.getAbsolutePosition().x+V*g[b],d=a.getAbsolutePosition().y-U*f[b]),Math.abs(c-e[0].getAbsolutePosition().x)<ga&&Math.abs(d-e[0].getAbsolutePosition().y)<ga&&L===M&&("g_layer"===a.getParent().attrs.name||"g_layer"===e[0].getParent().attrs.name||a.getParent()!==e[0].getParent())&&k(a,e[0],c,d))}function m(a){void 0!==a&&(a.setX(a.attrs.origX),a.setY(a.attrs.origY),a.setRotationDeg(0),a.moveToBottom(),a.setStrokeWidth(null),a.setStroke(null),a.setDraggable(!1),la&&a.setImage(O[a.attrs.row][a.attrs.col]),Y.draw(),la&&a.disableShadow(),oa&&document.getElementById("click_sound").play(),document.body.style.cursor="default",setTimeout(function(){ha+=1,ha===fa*ea&&(Ha.css("display","none"),oa&&document.getElementById("ding_sound").play())},500))}function n(a){var b,c,d;if(L="g_layer"===a.getParent().attrs.name?a.getRotationDeg():(a.getRotationDeg()+a.getParent().getRotationDeg())%360,Math.abs(a.getAbsolutePosition().x-a.attrs.origX)<ga&&Math.abs(a.getAbsolutePosition().y-a.attrs.origY)<ga&&0===L)if("g_layer"===a.getParent().attrs.name)m(a);else for(c=a.getParent().getChildren();c.length>0;)d=c[0],d.moveTo(Y),m(d);else if("g_layer"===a.getParent().attrs.name)l(a);else for(c=a.getParent().getChildren(),b=0;b<c.length;b+=1)l(c[b])}function o(a){za.val(a).slider("refresh"),Ma&&localStorage.setItem("s_gold",za.val()),"on"===za.val()?(pa=!0,$("#img_easy").attr("src","Images/easy_gold.png"),$("#img_med").attr("src","Images/medium_gold.png"),$("#img_hard").attr("src","Images/hard_gold.png")):(pa=!1,$("#img_easy").attr("src","Images/easy.png"),$("#img_med").attr("src","Images/medium.png"),$("#img_hard").attr("src","Images/hard.png"))}function p(){var a,b,c,d,e=0;for(a=1;5>a;a+=1)for(b=1;4>b;b+=1)c=Ma?localStorage.getItem(z+a+da+b)||0:0,e+=parseInt(c),qa?c>0?(d=$("#medal"+a+"-"+b),d.removeClass("dn"),d.attr("src","Images/medal"+c+".png"),3>b&&($("#image"+a+"-"+(b+1)).removeClass("locked"),$("#lock"+a+"-"+(b+1)).addClass("dn"))):($("#medal"+a+"-"+b).addClass("dn"),3>b&&($("#image"+a+"-"+(b+1)).addClass("locked"),$("#lock"+a+"-"+(b+1)).removeClass("dn"))):($("#medal"+a+"-"+b).addClass("dn"),$("#image"+a+"-"+(b+1)).removeClass("locked"),$("#lock"+a+"-"+(b+1)).addClass("dn"));36===e?(Aa.show(),o("on"),za.slider({theme:"d"}).slider("refresh"),Ba.hide()):(Ba.show(),o("off"),za.slider({theme:"d"}).slider("refresh"),Aa.hide())}function q(){var a,b;if(F=$(window).height(),E=$(window).width(),da="",F>E?(da="p",$("#img_title").attr("style","width:100%;"),$(".image0").attr("style","height:"+1.5*(E/3-50)+"px;"),$(".lock").css({left:"10%",bottom:(E-70)/9.8,width:"80%"})):($("#img_title").attr("style","max-height:"+F/5+"px;"),$(".image0").attr("style","height:"+(E/3-50)/1.5+"px;"),$(".lock").css({left:"25%",bottom:(E-70)/30,width:"50%"})),Ja.css("max-height",F-10+"px"),Ka.css("max-width",E-10+"px"),Ea.attr("style","width:"+(E/3-12)+"px;"),Fa.attr("style","width:"+(E/3-12)+"px;"),Ga.attr("style","width:"+(E/3-12)+"px;"),navigator.onLine){for(a=1;5>a;a+=1)for(b=1;4>b;b+=1)$("#radio"+a+"-"+b).attr("style","width:"+(E/3-12)+"px;"),$("#image"+a+"-"+b).attr("src","Images/"+z+"/image-set-"+a+"/sujet"+da+b+"s.jpg");$(".offline").hide(),$(".online").show()}else $(".offline").show(),$(".online").hide(),W.slide(0,0);(z!==A||da!==I)&&(A=z,I=da,p())}function r(a){var b;Ha.css("display","inline"),a&&(b=Ma?localStorage.getItem(z+Q+J+P)||0:0,parseInt(R)>parseInt(b)&&(Ma&&localStorage.setItem(z+Q+J+P,R),p(),oa&&document.getElementById("ding_sound").play())),$.mobile.changePage("#title",{transition:"slide",reverse:!0}),q(),setTimeout(function(){q()},500)}function s(a){var b,c;a.on("mouseover",function(){(a.getDraggable()||a.getParent().getDraggable())&&ja&&(document.body.style.cursor="pointer")}),a.on("click tap",function(){sa!==!1&&((a.getDraggable()||a.getParent().getDraggable())&&ja&&ka&&K===Y.getChildren().length-1?"g_layer"===a.getParent().attrs.name?(b=a.getRotation(),ja=!1,c=new Kinetic.Tween({node:a,duration:.5,rotation:b+Math.PI/2,onFinish:function(){ja=!0,360===a.getRotationDeg()&&a.setRotationDeg(0),a.fire("dragend")}}),c.play()):(b=a.getParent().getRotation(),ja=!1,c=new Kinetic.Tween({node:a.getParent(),duration:.5,rotation:b+Math.PI/2,onFinish:function(){ja=!0,360===a.getParent().getRotationDeg()&&a.getParent().setRotationDeg(0),a.fire("dragend")}}),c.play()):ha===fa*ea?(ja=!1,r(!0)):a.fire("dragend"))}),a.on("mousedown touchstart",function(){sa=!0,setTimeout(function(){sa=!1},500),N=a,(a.getDraggable()||a.getParent().getDraggable())&&ja&&("g_layer"===a.getParent().attrs.name?(K=a.getZIndex(),a.moveToTop()):(K=a.getParent().getZIndex(),a.getParent().moveToTop()))}),a.on("dragend",function(){(a.getDraggable()||a.getParent().getDraggable())&&ja?n(a):ha===fa*ea&&(ja=!1,r(!0))}),a.on("mouseout",function(){document.body.style.cursor="default"}),Y.add(a),Y.draw(),_.draw()}function t(a){var b;if("Safari,5.1.7"===navigator.sayswho||"MSIE,9.0"===navigator.sayswho)return void $("#popup_own_img").popup("open");if(b=a.target.files[0],b.type.match("image.*")){var c=new FileReader;c.onload=function(){return function(b){C=b.target.result,EXIF.getData(a.target.files[0],function(){D=EXIF.getTag(this,"Orientation")}),$(".image0").attr("src",C),q(),setTimeout(function(){q()},500)}}(b),c.readAsDataURL(b)}}function u(a){z=a,ta.attr("src","Images/"+z+"/theme.png"),ba&&$("#select_theme").html(document.webL10n.get("lb_"+z)),Ma&&localStorage.setItem("s_theme",a),ta.attr("style","width:59px; float:left;"),q(),ta.attr("style","width:60px; float:left;")}function v(){0===W.getPos()?$("#bullets0").attr("src","Images/bullets1o.png"):$("#bullets0").attr("src","Images/bullets0o.png"),1===W.getPos()?$("#bullets1").attr("src","Images/bullets1.png"):$("#bullets1").attr("src","Images/bullets0.png"),2===W.getPos()?$("#bullets2").attr("src","Images/bullets1.png"):$("#bullets2").attr("src","Images/bullets0.png"),3===W.getPos()?$("#bullets3").attr("src","Images/bullets1.png"):$("#bullets3").attr("src","Images/bullets0.png"),4===W.getPos()?$("#bullets4").attr("src","Images/bullets1.png"):$("#bullets4").attr("src","Images/bullets0.png")}function w(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b="[\\?&]"+a+"=([^&#]*)",c=new RegExp(b),d=c.exec(window.location.href);return null!==d?d[1]:!1}function x(){new Date("10/25/2014")>new Date&&"flowers"!==z&&Ma&&"flowers"!==localStorage.getItem("s_new_theme")&&(Ka.popup("open"),q(),setTimeout(function(){q()},500))}var y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=!!window.HTMLCanvasElement,Y=new Kinetic.Layer({name:"g_layer"}),Z=new Kinetic.Layer({name:"g_back_g_layer"}),_=new Kinetic.Stage({container:"container",width:document.getElementById("container").width,height:document.getElementById("container").height}),aa=!!navigator.userAgent.match(/(iPad|iPhone|iPod)/g),ba=!1,ca=new Image,da="",ea=4,fa=6,ga=15,ha=0,ia=!1,ja=!1,ka=!1,la=!0,ma=!0,na=!0,oa=!0,pa=!1,qa=!0,ra=!0,sa=!1,ta=$("#select_theme_img"),ua=$("#b_back_g_grid"),va=$("#b_back_g_image"),wa=$("#b_rotate"),xa=$("#b_sound"),ya=$("#container"),za=$("#b_gold"),Aa=$("#b_gold_enabled"),Ba=$("#b_gold_disabled"),Ca=$("#b_prev"),Da=$("#b_next"),Ea=$("#bt_easy"),Fa=$("#bt_med"),Ga=$("#bt_hard"),Ha=$("#bt_close"),Ia=$("#b_image_input"),Ja=$("#popupTheme"),Ka=$("#popupNewTheme"),La=1,Ma=function(){var a="modernizr";try{return localStorage.setItem(a,a),localStorage.removeItem(a),!0}catch(b){return!1}}();"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").then(function(a){},function(a){})}),ya.mouseup(function(){void 0!==N&&"g_layer"!==N.getParent().attrs.name&&setTimeout(function(){N.fire("dragend")},350)}),ya.touchend(function(){void 0!==N&&"g_layer"!==N.getParent().attrs.name&&setTimeout(function(){N.fire("dragend")},350)}),$(".own_image").click(function(){if("Safari,5.1.7"===navigator.sayswho||"MSIE,9.0"===navigator.sayswho)return void $("#popup_own_img").popup("open");if("file"!==Ia.attr("type")){if(window.MozActivity){var a=new MozActivity({name:"pick",data:{type:"image/jpeg"}});a.onsuccess=function(){C=window.URL.createObjectURL(this.result.blob),$(".image0").attr("src",C),q(),setTimeout(function(){q()},500)}}}else Ia.click()}).show(),za.on("change",function(){o(za.val())}),window.onload=function(){ra&&(ra=!1,X||$("#popup_canvas").popup("open"),W=new Swipe(document.getElementById("image_slider"),{startSlide:1,callback:function(a,b){0===b?$("#bullets0").attr("src","Images/bullets1o.png"):$("#bullets0").attr("src","Images/bullets0o.png"),1===b?$("#bullets1").attr("src","Images/bullets1.png"):$("#bullets1").attr("src","Images/bullets0.png"),2===b?$("#bullets2").attr("src","Images/bullets1.png"):$("#bullets2").attr("src","Images/bullets0.png"),3===b?$("#bullets3").attr("src","Images/bullets1.png"):$("#bullets3").attr("src","Images/bullets0.png"),4===b?$("#bullets4").attr("src","Images/bullets1.png"):$("#bullets4").attr("src","Images/bullets0.png")}}),document.getElementById("b_image_input").addEventListener("change",t,!1),Ca.click(function(a){W.prev(),v(),a.preventDefault()}),Da.click(function(a){W.next(),v(),a.preventDefault()}),Ea.click(function(a){h(),a.preventDefault()}),Fa.click(function(a){i(),a.preventDefault()}),Ga.click(function(a){j(),a.preventDefault()}),Ha.click(function(a){ja=!1,r(!1),a.preventDefault()}),Ka.click(function(a){u("flowers"),$("#popupNewTheme").popup("close"),a.preventDefault()}),Ja.find("a").click(function(a){u(this.children[0].getAttribute("alt")),Ja.popup("close"),a.preventDefault()}),Ja.css({"overflow-y":"auto","min-width":"270px"}),za.slider(),Ma?(null===localStorage.getItem("s_back_g_grid")?ua.val("on"):ua.val(localStorage.getItem("s_back_g_grid")),null===localStorage.getItem("s_backg_image")?va.val("on"):va.val(localStorage.getItem("s_backg_image")),null===localStorage.getItem("s_rotate")?wa.val("off"):wa.val(localStorage.getItem("s_rotate")),null===localStorage.getItem("s_sound")?xa.val("on"):xa.val(localStorage.getItem("s_sound")),o(null===localStorage.getItem("s_gold")?"off":localStorage.getItem("s_gold")),u(null===localStorage.getItem("s_theme")?"animals":localStorage.getItem("s_theme"))):(ua.val("on"),va.val("on"),wa.val("off"),xa.val("on"),o("off"),u("animals")),y=w("theme"),y&&u(y),/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)&&(Ca.attr("style","display:none;"),Da.attr("style","display:none;")),/Android/i.test(navigator.userAgent)||(Ia.attr("style","display:none;"),$("#b_tit_image_input").attr("style","display:none;")),$("#popupSettings").find("label").attr("style","display:inline;"),q(),setTimeout(function(){q()},500))},$(window).resize(function(){q()}),navigator.sayswho=function(){var a=navigator.appName,b=navigator.userAgent,c=b.match(/version\/([.\d]+)/i),d=b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return d&&null!==c&&(d[2]=c[1]),d=d?[d[1],d[2]]:[a,navigator.appVersion,"-?"]}(),document.webL10n.ready(function(){ba=!0,y=w("lang"),y&&y!==document.webL10n.getLanguage()&&(document.webL10n.setLanguage(y),ba=!1)}),document.addEventListener("localized",function(){ba&&($("html").attr("lang",document.webL10n.getLanguage().substr(0,2)),$("meta[name=description]").attr("content",document.webL10n.get("lb_desc")),$("link[rel=manifest]").attr("href","Manifest/appmanifest_"+document.webL10n.getLanguage().substr(0,2)+".json"),$("#select_theme").html(document.webL10n.get("lb_"+z)),setTimeout(function(){x()},500)),ba=!0})}();