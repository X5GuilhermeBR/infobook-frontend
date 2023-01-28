"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.css");
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));
var _reactRouterDom = require("react-router-dom");
var _Home = _interopRequireDefault(require("./pages/Home"));
var _Search = _interopRequireDefault(require("./pages/Search"));
var _searchContext = _interopRequireDefault(require("./context/searchContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var root = _client.default.createRoot(document.getElementById('root'));
var router = (0, _reactRouterDom.createBrowserRouter)([{
  path: '/',
  element: <_Home.default />
}, {
  path: '/search',
  element: <_Search.default />
}]);
root.render(<_react.default.StrictMode>
    <_searchContext.default>
      <_reactRouterDom.RouterProvider router={router} />
    </_searchContext.default>
  </_react.default.StrictMode>);
(0, _reportWebVitals.default)();
