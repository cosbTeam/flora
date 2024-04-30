import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js";

// 跳转页面（新开标签页）
/**
 *
 * @param {string} url
 * @param {string} target // _blank - URL加载到一个新的窗口。这是默认 _parent - URL加载到父框架 _self - URL替换当前页面 _top - URL替换任何可加载的框架集 name - 窗口名称
 */
self.handleJump = (url, target) => {
  window.open(url, target);
};
