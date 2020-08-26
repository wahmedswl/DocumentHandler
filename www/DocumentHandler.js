var handleDocument = function (
  successHandler, 
  failureHandler, 
  url) {
  cordova.exec(
      successHandler, 
      failureHandler, 
      "DocumentHandler", 
      "HandleDocumentWithURL", 
      [{"url" : url}]);
};

window.handleDocumentWithURL = handleDocument;

if(module && module.exports) {
  module.exports = handleDocument;
}

