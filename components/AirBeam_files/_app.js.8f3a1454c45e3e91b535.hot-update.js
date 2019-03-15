webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-jss/lib/JssProvider */ "./node_modules/react-jss/lib/JssProvider.js");
/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_getPageContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/getPageContext */ "./src/getPageContext.js");







var _jsxFileName = "/Users/johnfritz/projects/airbeam/website/pages/_app.js";









var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  function MyApp() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp).call(this));
    _this.pageContext = Object(_src_getPageContext__WEBPACK_IMPORTED_MODULE_14__["default"])();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Remove the server-side injected CSS.
      var jssStyles = document.querySelector('#jss-server-side');

      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "AirBeam")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["Global"], {
        styles:
        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_6__["css"])( false ? undefined : {
          name: "pjbiv4-MyApp",
          styles: "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,hr{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}html{min-height:10000px;}table{border-collapse:collapse;border-spacing:0;}*,*:before,*:after{box-sizing:border-box;}::-moz-selection{background-color:#2d90ea;color:#fff;}::selection{background-color:#2d90ea;color:#fff;}input:-webkit-autofill{-webkit-box-shadow:0 0 0 50px white inset;}a{text-decoration:none;color:#fff;transition:color 200ms;}svg{transition:color 200ms,fill 200ms;}body{line-height:1;display:flex;flex-direction:column;min-width:320px;font-size:16px;line-height:1.5em;color:#fff;background-color:#fff;background-size:20px;background-repeat:repeat;}label:MyApp;",
          map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2huZnJpdHovcHJvamVjdHMvYWlyYmVhbS93ZWJzaXRlL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNxQiIsImZpbGUiOiIvVXNlcnMvam9obmZyaXR6L3Byb2plY3RzL2FpcmJlYW0vd2Vic2l0ZS9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgR2xvYmFsLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nO1xuXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IEpzc1Byb3ZpZGVyIGZyb20gJ3JlYWN0LWpzcy9saWIvSnNzUHJvdmlkZXInO1xuaW1wb3J0IGdldFBhZ2VDb250ZXh0IGZyb20gJy4uL3NyYy9nZXRQYWdlQ29udGV4dCc7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VDb250ZXh0ID0gZ2V0UGFnZUNvbnRleHQoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKTtcbiAgICBpZiAoanNzU3R5bGVzICYmIGpzc1N0eWxlcy5wYXJlbnROb2RlKSB7XG4gICAgICBqc3NTdHlsZXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+QWlyQmVhbTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEdsb2JhbFxuICAgICAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBkaXYsXG4gICAgICAgICAgICBzcGFuLFxuICAgICAgICAgICAgYXBwbGV0LFxuICAgICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgICAgaWZyYW1lLFxuICAgICAgICAgICAgaDEsXG4gICAgICAgICAgICBoMixcbiAgICAgICAgICAgIGgzLFxuICAgICAgICAgICAgaDQsXG4gICAgICAgICAgICBoNSxcbiAgICAgICAgICAgIGg2LFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICAgIGJsb2NrcXVvdGUsXG4gICAgICAgICAgICBwcmUsXG4gICAgICAgICAgICBhLFxuICAgICAgICAgICAgYWJicixcbiAgICAgICAgICAgIGFjcm9ueW0sXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYmlnLFxuICAgICAgICAgICAgY2l0ZSxcbiAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICBkZWwsXG4gICAgICAgICAgICBkZm4sXG4gICAgICAgICAgICBlbSxcbiAgICAgICAgICAgIGltZyxcbiAgICAgICAgICAgIGlucyxcbiAgICAgICAgICAgIGtiZCxcbiAgICAgICAgICAgIHEsXG4gICAgICAgICAgICBzLFxuICAgICAgICAgICAgc2FtcCxcbiAgICAgICAgICAgIHNtYWxsLFxuICAgICAgICAgICAgc3RyaWtlLFxuICAgICAgICAgICAgc3Ryb25nLFxuICAgICAgICAgICAgc3ViLFxuICAgICAgICAgICAgc3VwLFxuICAgICAgICAgICAgdHQsXG4gICAgICAgICAgICB2YXIsXG4gICAgICAgICAgICBiLFxuICAgICAgICAgICAgdSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBjZW50ZXIsXG4gICAgICAgICAgICBkbCxcbiAgICAgICAgICAgIGR0LFxuICAgICAgICAgICAgZGQsXG4gICAgICAgICAgICBvbCxcbiAgICAgICAgICAgIHVsLFxuICAgICAgICAgICAgbGksXG4gICAgICAgICAgICBmaWVsZHNldCxcbiAgICAgICAgICAgIGZvcm0sXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGxlZ2VuZCxcbiAgICAgICAgICAgIHRhYmxlLFxuICAgICAgICAgICAgY2FwdGlvbixcbiAgICAgICAgICAgIHRib2R5LFxuICAgICAgICAgICAgdGZvb3QsXG4gICAgICAgICAgICB0aGVhZCxcbiAgICAgICAgICAgIHRyLFxuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCxcbiAgICAgICAgICAgIGFydGljbGUsXG4gICAgICAgICAgICBhc2lkZSxcbiAgICAgICAgICAgIGNhbnZhcyxcbiAgICAgICAgICAgIGRldGFpbHMsXG4gICAgICAgICAgICBlbWJlZCxcbiAgICAgICAgICAgIGZpZ3VyZSxcbiAgICAgICAgICAgIGZpZ2NhcHRpb24sXG4gICAgICAgICAgICBmb290ZXIsXG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBoZ3JvdXAsXG4gICAgICAgICAgICBtZW51LFxuICAgICAgICAgICAgbmF2LFxuICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgcnVieSxcbiAgICAgICAgICAgIHNlY3Rpb24sXG4gICAgICAgICAgICBzdW1tYXJ5LFxuICAgICAgICAgICAgdGltZSxcbiAgICAgICAgICAgIG1hcmssXG4gICAgICAgICAgICBhdWRpbyxcbiAgICAgICAgICAgIHZpZGVvLFxuICAgICAgICAgICAgaHIge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnRpY2xlLFxuICAgICAgICAgICAgYXNpZGUsXG4gICAgICAgICAgICBkZXRhaWxzLFxuICAgICAgICAgICAgZmlnY2FwdGlvbixcbiAgICAgICAgICAgIGZpZ3VyZSxcbiAgICAgICAgICAgIGZvb3RlcixcbiAgICAgICAgICAgIGhlYWRlcixcbiAgICAgICAgICAgIGhncm91cCxcbiAgICAgICAgICAgIG1lbnUsXG4gICAgICAgICAgICBuYXYsXG4gICAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbCxcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrcXVvdGUsXG4gICAgICAgICAgICBxIHtcbiAgICAgICAgICAgICAgcXVvdGVzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2txdW90ZTpiZWZvcmUsXG4gICAgICAgICAgICBibG9ja3F1b3RlOmFmdGVyLFxuICAgICAgICAgICAgcTpiZWZvcmUsXG4gICAgICAgICAgICBxOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICosXG4gICAgICAgICAgICAqOmJlZm9yZSxcbiAgICAgICAgICAgICo6YWZ0ZXIge1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOjotbW96LXNlbGVjdGlvbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDkwZWE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOjpzZWxlY3Rpb24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ5MGVhO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDUwcHggd2hpdGUgaW5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcywgZmlsbCAyMDBtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgIGB9XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiBXcmFwIGV2ZXJ5IHBhZ2UgaW4gSnNzIGFuZCBUaGVtZSBwcm92aWRlcnMgKi99XG4gICAgICAgIDxKc3NQcm92aWRlciByZWdpc3RyeT17dGhpcy5wYWdlQ29udGV4dC5zaGVldHNSZWdpc3RyeX0gZ2VuZXJhdGVDbGFzc05hbWU9e3RoaXMucGFnZUNvbnRleHQuZ2VuZXJhdGVDbGFzc05hbWV9PlxuICAgICAgICAgIHsvKiBNdWlUaGVtZVByb3ZpZGVyIG1ha2VzIHRoZSB0aGVtZSBhdmFpbGFibGUgZG93biB0aGUgUmVhY3RcbiAgICAgICAgICAgICAgdHJlZSB0aGFua3MgdG8gUmVhY3QgY29udGV4dC4gKi99XG4gICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoaXMucGFnZUNvbnRleHQudGhlbWV9IHNoZWV0c01hbmFnZXI9e3RoaXMucGFnZUNvbnRleHQuc2hlZXRzTWFuYWdlcn0+XG4gICAgICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgIHsvKiBQYXNzIHBhZ2VDb250ZXh0IHRvIHRoZSBfZG9jdW1lbnQgdGhvdWdoIHRoZSByZW5kZXJQYWdlIGVuaGFuY2VyXG4gICAgICAgICAgICAgICAgdG8gcmVuZGVyIGNvbGxlY3RlZCBzdHlsZXMgb24gc2VydmVyLXNpZGUuICovfVxuICAgICAgICAgICAgPENvbXBvbmVudCBwYWdlQ29udGV4dD17dGhpcy5wYWdlQ29udGV4dH0gey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvSnNzUHJvdmlkZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl19 */"
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_13___default.a, {
        registry: this.pageContext.sheetsRegistry,
        generateClassName: this.pageContext.generateClassName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["MuiThemeProvider"], {
        theme: this.pageContext.theme,
        sheetsManager: this.pageContext.sheetsManager,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        pageContext: this.pageContext
      }, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      })))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.8f3a1454c45e3e91b535.hot-update.js.map