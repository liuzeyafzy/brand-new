//2、——jQuery.js ajax配置——
function asyncRequest() {

  $.ajax({
    ...,
   /* async: true/false,
    默认设置的是true*/
    ...,
    success: () => {},
    error: () => {},
    complete: () => {}
  });
}

//——3、XMLHttpRequest——
let request;
function LoadXMLRequest(){
  request = null;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }

  if (request != null) {
    request.onreadystatechange = stateChange(); // EventHandler防止在服务端没有任何反馈时得不到响应
    request.open("GET/POST", url, true); // 参数分别为请求方式，请求地址，async配置，其中配置true，send后可以继续执行脚本逻辑
    request.send(null);
  } else {
    alert("your browser does not support xmlhttp");
  }
}

/*XMLHttpRequest.readyState;
XMLHttpRequest.response/responseText/responseType;
XMLHttpRequest.status/statusText;
XMLHttpRequest.timeout/ontimeout;//ontimeout后会执行EventHandler，此处的stateChange
XMLHttpRequest.mozSystem;//强制执行同源策略，true-否*/

function stateChange() {
  if (request.readyState === 4) { //0-4，4（loaded）
    if (request.status === 200) {
      return true;
    } else {
      alert("problem retrieving xml data");
    }
  }
}

//axios关于request与response
// chain mode:
axios.get/post(url, {}).then().catch().then()