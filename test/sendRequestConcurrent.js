function sendRequest(urls, max, callback) {
  // 如果 没有超过 max 限制直接请求
  if (urls.length <= max) {
    const requests = urls.map((url) => fetch(url));
    Promise.allSettled(requests).then((res) => {
      callback(res);
    });
    return;
  }
  // 如果超过 则 监控完成一个请求一个新的
  const requests = [];
  const urlsIterator = urls.entries();
  for (let i = max; i >= 0; i--) {
    request();
  }
  function request() {
    const { value, done } = urlsIterator.next().value;
    if (done === true) {
      Promise.allSettled(requests).then((res) => {
        callback(res);
      });
      return;
    }
    requests[value[0]] = fetch(value[1]).finally(() => {
      request();
    });
  }
}
