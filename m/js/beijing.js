    //背景.js
    // 设置图片或视频为背景，输出到<div class="beijing"></div>中
    var mediaList = [
//        { type: "video", src: "video/1.mp4" },
        { type: "image", src: "img/测试用背景.jpg" },
      
      
        // type中的值只能是image或video
      ];
      
      /// 当前计数器
      var i = 0;
      
      // 背景更改时间间隔（毫秒）
      var bgInterval = 190000 ;
      
      // 切换背景
      function changeBg() {
        var media = mediaList[i];
      
        var beijing = document.querySelector(".beijing");
      
        // 清空背景容器
        beijing.innerHTML = "";
      
        if (media.type === "image") {
          var newMedia = new Image();
          newMedia.src = media.src;
          newMedia.style.objectFit = "cover";
          newMedia.style.position = "fixed";
          newMedia.style.top = "0";
          newMedia.style.left = "0";
          newMedia.style.width = "100%";
          newMedia.style.height = "100%";
          newMedia.style.opacity = "0";
          newMedia.style.filter = "alpha(opacity=0)";
          newMedia.style.transition = "opacity 1s ease-in-out";
          newMedia.style.zIndex = "-1";
      
          beijing.appendChild(newMedia);
      
          // 设置定时器，将新的媒体元素的透明度从0渐变到1
          setTimeout(function () {
            newMedia.style.opacity = "1";
            newMedia.style.filter = "alpha(opacity=100)";
          }, 10);
        } else if (media.type === "video") {
          var newMedia = document.createElement("video");
          newMedia.src = media.src;
          newMedia.style.objectFit = "cover";
          newMedia.style.position = "fixed";
          newMedia.style.top = "0";
          newMedia.style.left = "0";
          newMedia.style.width = "100%";
          newMedia.style.height = "100%";
          newMedia.style.opacity = "0";
          newMedia.style.filter = "alpha(opacity=0)";
          newMedia.style.transition = "opacity 1s ease-in-out";
          newMedia.style.zIndex = "-1";
          newMedia.autoplay = true;
          newMedia.loop = true;
          newMedia.muted = true;
          newMedia.setAttribute("playsinline", "true");
      
          beijing.appendChild(newMedia);
      
          // 设置定时器，将新的媒体元素的透明度从0渐变到1
          setTimeout(function () {
            newMedia.style.opacity = "1";
            newMedia.style.filter = "alpha(opacity=100)";
          }, 10);
        }
      
        // 更新计数器
        i = (i + 1) % mediaList.length;
      }
      
      // 初始化背景
      changeBg();
      
      // 自动切换背景
      setInterval(changeBg, bgInterval);