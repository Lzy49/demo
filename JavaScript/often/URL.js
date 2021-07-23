/**
 * 关于 URL 的操作
 * - 创建
 *  - new URL('url','base') // 传入 url 连接  , base 域名（如果携带后续路径会被截取）
 * - propert
 *  - href // origin + pathname + search + hash
 *  - origin // protocol + hostname
 *  - protocol // => url 协议名
 *  - host // => url 主机名 + 端口号
 *  - hostname // => url 域名
 *  - pathname // => url 后续 path
 *  - hash // url # 之后的 hash
 *  - search // url 参数
 *  - srarchParams // url 参数对象
 */
searchParamsTest();

function urlTest() {
  const url = new URL(
    'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=1fwaefwa&oq=1&rsv_pq=ff0010ca0024728d&rsv_t=23baMdX6z9uwD3Qq4RLoNKgTeszrSElbs%2BXYnvzRuUhhhB%2Fn%2BGkT7RVZVTg&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=8&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=t&inputT=694&rsv_sug4=712#page2'
  );
  console.log(url.href);
  console.log(url.origin);
  console.log(url.protocol);
  console.log(url.host);
  console.log(url.hostname);
  console.log(url.pathname);
  console.log(url.hash);
  console.log(url.search);
  console.log(url.searchParams);
}
/**
 * 关于 URL 的 searchParams
 * - 方法
 *  - has(key);
 *  - get(key);
 *  - getAll(key);
 *  - set(key,value)
 *  - append(key,value)
 *  - sort
 */
function searchParamsTest() {
  const url = new URL(
    'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=1fwaefwa&oq=1&rsv_pq=ff0010ca0024728d&rsv_t=23baMdX6z9uwD3Qq4RLoNKgTeszrSElbs%2BXYnvzRuUhhhB%2Fn%2BGkT7RVZVTg&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=8&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=t&inputT=694&rsv_sug4=712#page2'
  );
  const searchParams = url.searchParams;
  console.log(searchParams.has('newKey')); // false 
  searchParams.append('newKey', 'newValue');
  searchParams.set('newKey', 'newValue2');
  console.log(searchParams.get('newKey')); // newValue2
  searchParams.append('newKey', '233');
  console.log(searchParams.getAll('newKey')); // [ 'newValue2', '233' ]
}
