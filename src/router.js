const {
  handelHtml, handleExtentiion, handleSearch, handelError,
} = require('./handlers');

const router = (request, respone) => {
  const endpoint = request.url;
  if (endpoint === '/') {
    handelHtml(respone);
  } else if (endpoint.includes('public')) {
    handleExtentiion(respone, endpoint);
  } else if (endpoint.includes('search')) {
    handleSearch(respone, endpoint);
  } else {
    handelError(respone);
  }
};

module.exports = router;
