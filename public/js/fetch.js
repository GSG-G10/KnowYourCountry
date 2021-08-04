// To fetch data // using in apiDom
const fetch = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const data = JSON.parse(xhr.responseText);
      cb(data);
    }
  };
  xhr.open('GET', url);
  xhr.send();
};
