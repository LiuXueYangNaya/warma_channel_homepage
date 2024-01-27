function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  window.onload = function() {
    if (isMobileDevice()) {
      window.location.href = "https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=1HkgxK&businessType=9#/pc";
    }
  }
  