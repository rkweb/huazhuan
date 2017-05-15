// preload 
// arr:{预加载的图片数组} 
// return:done回调
;(function(){
    "use strict";
    if(/micromessenger/.test(navigator.userAgent.toLocaleLowerCase())){
    	NE(".share_btn").hide()
    }
	function preventDefault(ev) {
		ev.preventDefault();
	}
	document.addEventListener('touchmove', preventDefault, false);
	// 处理安卓
	document.addEventListener('touchstart', preventDefault, false);
	NE(".reload").bind("touchstart",function(){
		window.location.reload();
	})
	NE(".share_btn").bind("touchend",function(){
		h5Share.share();
	})
	NE(".tie").bind("touchend",function(){
		window.location.href=this.href;
	})
	NE(".review").bind("touchend",function(){
		window.location.href=this.href;
	})
	// LShot
	function LShot(el){
		this.canvas = el;
		this.ctx = this.canvas.getContext("2d");
		this.audio = NE("#audio")[0];
		this.imgList = [
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/1.jpg?1520",
				imgW : "750",
				imgH : "1206"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/2.jpg?1520",
				imgW : "1875",
				imgH : "3015",
				areaW: "375",
				areaH: "603",
				areaL: "1379",
				areaT: "103",
				limitMax : 0.3,
				limitMin : 0.2
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/3.jpg?1520",
				limitMax : 0.12,
				limitMin : 0.08,
				imgW : "1875",
				imgH : "3015",
				areaW: "152",
				areaH: "244",
				areaL: "791",
				areaT: "1193"
			},
			{
				link : "http://img4.cache.netease.com/f2e/ent/ent_painting2016/images/4.jpg?44",
				limitMax : 0.22,
				limitMin : 0.15,
				imgW : "1875",
				imgH : "3015",
				areaW: "282",
				areaH: "454",
				areaL: "857",
				areaT: "413"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/5.jpg?44",
				limitMax : 0.18,
				limitMin : 0.123,
				imgW : "1875",
				imgH : "3015",
				areaW: "232",
				areaH: "372",
				areaL: "388",
				areaT: "844"
			},
			{
				link : "http://img4.cache.netease.com/f2e/ent/ent_painting2016/images/6.jpg?1200",
				imgW : "1875",
				imgH : "3015",
				areaW: "187",
				areaH: "300",
				areaL: "359",
				areaT: "1226"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/6_5.jpg?1520",
				limitMax : 0.6,
				limitMin : 0.415,
				imgW : "1875",
				imgH : "3015",
				areaW: "778",
				areaH: "1251",
				areaL: "133",
				areaT: "856"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/7.jpg?1520",
				imgW : "1875",
				imgH : "3015",
				areaW: "278",
				areaH: "446",
				areaL: "794",
				areaT: "783"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/7_5.jpg?1520",
				limitMax : 0.75,
				limitMin : 0.5,
				imgW : "1875",
				imgH : "3015",
				areaW: "938",
				areaH: "1507",
				areaL: "428",
				areaT: "454"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/8.jpg?1520",
				imgW : "1875",
				imgH : "3015",
				areaW: "290",
				areaH: "466",
				areaL: "1276",
				areaT: "665"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/8_5.jpg?1520",
				limitMax : 0.6,
				limitMin : 0.415,
				imgW : "1875",
				imgH : "3015",
				areaW: "782",
				areaH: "1258",
				areaL: "977",
				areaT: "557"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/9.jpg?1520",
				imgW : "1875",
				imgH : "3015",
				areaW: "238",
				areaH: "382",
				areaL: "1206",
				areaT: "2310"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/9_5.jpg?1520",
				limitMax : 0.47,
				limitMin : 0.355,
				imgW : "1875",
				imgH : "3015",
				areaW: "669",
				areaH: "1076",
				areaL: "894",
				areaT: "1608"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/10.jpg?1520",
				imgW : "1875",
				imgH : "3015",
				areaW: "247",
				areaH: "396",
				areaL: "285",
				areaT: "45"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/10_5.jpg?1520",
				limitMax : 0.75,
				limitMin : 0.5,
				imgW : "1875",
				imgH : "3015",
				areaW: "938",
				areaH: "1507",
				areaL: "264",
				areaT: "21"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/11.jpg?1520",
				imgW : "1875",
				imgH : "3015",
				areaW: "434",
				areaH: "698",
				areaL: "1059",
				areaT: "192"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/11_5.jpg?1520",
				limitMax : 0.6,
				limitMin : 0.415,
				imgW : "1875",
				imgH : "3015",
				areaW: "780",
				areaH: "1256",
				areaL: "1038",
				areaT: "679"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/12.jpg?1520",
				imgW : "1875",
				imgH : "3015",
				areaW: "415",
				areaH: "668",
				areaL: "226",
				areaT: "2210"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/12_5.jpg?1520",
				limitMax : 0.6,
				limitMin : 0.415,
				imgW : "1875",
				imgH : "3015",
				areaW: "782",
				areaH: "1258",
				areaL: "356",
				areaT: "1652"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/13.jpg?1520",
				imgW : "1875",
				imgH : "3015",
				areaW: "288",
				areaH: "462",
				areaL: "1494",
				areaT: "528"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/13_5.jpg?1520",
				limitMax : 0.6,
				limitMin : 0.415,
				imgW : "1875",
				imgH : "3015",
				areaW: "782",
				areaH: "1257",
				areaL: "1017",
				areaT: "482"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/14.jpg?1520",
				imgW : "1875",
				imgH : "3015",
				areaW: "99",
				areaH: "160",
				areaL: "1158",
				areaT: "2312"
			},
			{
				link : "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/15.jpg?1520",
				limitMax : 0.1,
				limitMin : 0.053,
				imgW : "1875",
				imgH : "3015",
				areaW: "469",
				areaH: "753",
				areaL: "1001",
				areaT: "2034 "
			}
		];
		this.radio = 1;
		this.index = 0;
		this.fps = 40;
		this.scale = 0.985;
		this.scaleSlow = 0.995;
	}
	LShot.prototype.initCanvas = function(){
		this.w = window.innerWidth ;
		this.h = window.innerHeight;
		if(this.w > this.h){
			this.w = 725;
			this.h = 1206;
			NE("body").css({"width":"725px","height":"1206px","margin":"0 auto","position":"relative","overflow":"hidden"})
			NE("html").css({"width":"100%","height":"100%"})
		}
		this.canvas.setAttribute("width", this.w );
		this.canvas.setAttribute("height",this.h);
	}
	LShot.prototype.preload = function(){
		var loadedimages = 0, self = this;
		var postaction = function(){}  
		var arr = this.imgList;
		function imageloadpost(){
			loadedimages++
			if(loadedimages == arr.length){
				postaction(self.imgList)
			}
		}
		for (var i=0; i<arr.length; i++){
			this.imgList[i].image = new Image();
			this.imgList[i].image.src = arr[i].link;
			this.imgList[i].image.i = i;
			this.imgList[i].image.name = i;
			this.imgList[i].image.className = "item";
			this.imgList[i].image.onload = function(){
				NE(".collection").append(self.imgList[this.i].image)
				imageloadpost()
			}
			this.imgList[i].image.onerror = function(){
				console.log("失败"+this.i)
				imageloadpost()
				NE(".collection").append(self.imgList[this.i].image)
			}
		}
		return {
			done:function(f){
				postaction=f || postaction
			}
		}
	}
	LShot.prototype.showend = function(){
		NE(".backcover").removeClass("hidden")
		NE("#start").hide()
		setTimeout(function(){
			NE(".backcover").addClass("active")
		},200)
	}
	LShot.prototype.init = function(){
		audioAutoPlay('audio');
		NE(".music").removeClass("music_close")
		var self = this;
		this.initCanvas();
		this.preload().done(function(){
			NE(".loading").hide();
			NE(".cover").addClass("active");
			setTimeout(function(){
				NE(".title").css({"background-image":"url(http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/title.gif?"+new Date().getTime()+")"})
				NE(".title_bg").css({"background-image":"url(http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/title_bg.gif?"+new Date().getTime()+")"})
			},1000)
			self.domList = NE(".collection .item").sort(function(a,b){
				return a.name - b.name;
			})
			// console.log(self.domList)
			self.img_oversize = self.domList[self.index + 1].image
			self.img_minisize = self.domList[self.index].image
			self.draw();
			self.touchEvent();
		});
	}
	LShot.prototype.draw = function(){
		if(this.index + 1 == this.imgList.length){
			return;
		}
		if(this.radio < this.imgList[this.index+1].areaW/this.imgList[this.index+1].imgW){
			this.index++;
			this.radio = 1;
			if(!this.imgList[this.index + 1]){
				this.showend();
				return;
			}
		}
		this.imgNext = this.imgList[this.index + 1], this.imgCur = this.imgList[this.index];
		this.img_oversize = this.domList[this.index + 1]
		this.img_minisize = this.domList[this.index]

		this.ctx.clearRect(0,0,this.w,this.h)

		// console.log(this.img_oversize)
		// console.log(this.radio);

		this.drawImgOversize(this.img_oversize, this.imgNext.imgW, this.imgNext.imgH, this.imgNext.areaW, this.imgNext.areaH, this.imgNext.areaL, this.imgNext.areaT, this.radio)
		this.drawImgMinisize(this.img_minisize, this.imgCur.imgW,  this.imgCur.imgH, this.imgNext.imgW, this.imgNext.imgH, this.imgNext.areaW, this.imgNext.areaH, this.imgNext.areaL, this.imgNext.areaT, this.radio)
	}
	LShot.prototype.touchEvent = function(){
		var self = this, y = 0;
		NE("#start").bind("touchstart",function(){
			cancelAnimationFrame(self.timer)
			NE(".cover").length&&NE(".cover")[0].remove();
			var then = new Date().getTime();
			self.timer = requestAnimationFrame(doAnimation)
			function doAnimation(){
				var now = new Date().getTime();
				if(self.index + 1 == self.imgList.length){
					return;
				}
				if(now - then < 1000/self.fps){
					self.timer = requestAnimationFrame(doAnimation)
					return;
				}

				// if(self.audio.paused){
				// 	self.audio.play()
				// }

				then = now;

				if(self.imgList[self.index+1].limitMax && self.imgList[self.index+1].limitMin && self.radio < self.imgList[self.index+1].limitMax && self.radio > self.imgList[self.index+1].limitMin){
					self.radio = self.scaleSlow * self.radio;
					// console.log(self.scaleSlow);
					// console.log(self.radio);
				}else{
					self.radio = self.scale * self.radio;
				}

				self.draw()
				self.timer = requestAnimationFrame(doAnimation)
			}
		})
		NE("#start").bind("touchmove",function(){
		})
		NE("#start").bind("touchend",function(){
			cancelAnimationFrame(self.timer)
		})
		
		NE(".music").bind("touchend",function(){
			if(NE(".music").hasClass("music_close")){
				NE(".music").removeClass("music_close");
				NE("#audio")[0].play();
			}else{
				NE(".music").addClass("music_close");
				NE("#audio")[0].pause();
			}
		})
		
	}
	LShot.prototype.drawImgOversize = function (img,imgW,imgH,areaW,areaH,areaL,areaT,radio){
		console.log(areaW/radio);
		this.ctx.drawImage(img, areaL-(areaW/radio-areaW)*(areaL/(imgW-areaW)), areaT-(areaH/radio-areaH)*(areaT/(imgH-areaH)), areaW/radio, areaH/radio, 0, 0, 750, 1206)
	}
	LShot.prototype.drawImgMinisize = function (img,imgW,imgH,nxtImgW,nxtImgH,areaW,areaH,areaL,areaT,radio){
		this.ctx.drawImage(img, 0, 0, imgW, imgH, (areaW/radio-areaW)*(areaL/(nxtImgW-areaW))*radio*750/areaW, (areaH/radio-areaH)*(areaT/(nxtImgH-areaH))*radio*1206/areaH, 750*radio, 1206*radio)
	}	
	var longshot = new LShot(NE("#app")[0]); longshot.init();

	// 音频控制
    function audioAutoPlay(id){
        var audio = document.getElementById(id);

        var play = function() {
            document.removeEventListener("WeixinJSBridgeReady", play);
            document.removeEventListener("YixinJSBridgeReady", play);
            audio.play();
        };
        
        audio.play();
        if(window.WeixinJSBridge){
            audio.play();
        }
        //weixin
        if (typeof WeixinJSBridge == "undefined"){
            document.addEventListener("WeixinJSBridgeReady", play, false);
        }else{
            //yixin
            document.addEventListener('YixinJSBridgeReady', play, false);
             audio.play();
        }
    }
})();
