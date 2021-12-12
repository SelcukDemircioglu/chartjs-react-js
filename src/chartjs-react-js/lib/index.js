"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartJS = void 0;
exports.ChartJSNode = ChartJSNode;
exports.generateUid = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _auto = _interopRequireDefault(require("chart.js/auto"));

var _xlsx = _interopRequireDefault(require("xlsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ChartJSNode(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "line" : _ref$type,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? true : _ref$hidden,
      _ref$indexAxis = _ref.indexAxis,
      indexAxis = _ref$indexAxis === void 0 ? "x" : _ref$indexAxis,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? undefined : _ref$label,
      _ref$order = _ref.order,
      order = _ref$order === void 0 ? undefined : _ref$order,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$dataViews = _ref.dataViews,
      dataViews = _ref$dataViews === void 0 ? [] : _ref$dataViews,
      _ref$lineAddViews = _ref.lineAddViews,
      lineAddViews = _ref$lineAddViews === void 0 ? [] : _ref$lineAddViews,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? Math.round(Math.random() * 1000) : _ref$id,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? undefined : _ref$backgroundColor,
      _ref$borderColor = _ref.borderColor,
      borderColor = _ref$borderColor === void 0 ? undefined : _ref$borderColor,
      _ref$borderWidth = _ref.borderWidth,
      borderWidth = _ref$borderWidth === void 0 ? undefined : _ref$borderWidth,
      _ref$tension = _ref.tension,
      tension = _ref$tension === void 0 ? 0.000001 : _ref$tension,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? false : _ref$fill,
      _ref$spanGaps = _ref.spanGaps,
      spanGaps = _ref$spanGaps === void 0 ? true : _ref$spanGaps,
      _ref$stepped = _ref.stepped,
      stepped = _ref$stepped === void 0 ? false : _ref$stepped,
      _ref$hoverBorderWidth = _ref.hoverBorderWidth,
      hoverBorderWidth = _ref$hoverBorderWidth === void 0 ? undefined : _ref$hoverBorderWidth,
      _ref$hoverBackgroundC = _ref.hoverBackgroundColor,
      hoverBackgroundColor = _ref$hoverBackgroundC === void 0 ? undefined : _ref$hoverBackgroundC,
      _ref$pointStyle = _ref.pointStyle,
      pointStyle = _ref$pointStyle === void 0 ? 'circle' : _ref$pointStyle,
      _ref$hitRadius = _ref.hitRadius,
      hitRadius = _ref$hitRadius === void 0 ? undefined : _ref$hitRadius,
      _ref$hoverRadius = _ref.hoverRadius,
      hoverRadius = _ref$hoverRadius === void 0 ? 0 : _ref$hoverRadius,
      _ref$rotation = _ref.rotation,
      rotation = _ref$rotation === void 0 ? undefined : _ref$rotation,
      _ref$borderDash = _ref.borderDash,
      borderDash = _ref$borderDash === void 0 ? undefined : _ref$borderDash,
      _ref$borderDashOffset = _ref.borderDashOffset,
      borderDashOffset = _ref$borderDashOffset === void 0 ? undefined : _ref$borderDashOffset,
      _ref$radius = _ref.radius,
      radius = _ref$radius === void 0 ? undefined : _ref$radius,
      _ref$radiusValue = _ref.radiusValue,
      radiusValue = _ref$radiusValue === void 0 ? undefined : _ref$radiusValue,
      _ref$borderAlign = _ref.borderAlign,
      borderAlign = _ref$borderAlign === void 0 ? undefined : _ref$borderAlign,
      _ref$hoverOffset = _ref.hoverOffset,
      hoverOffset = _ref$hoverOffset === void 0 ? undefined : _ref$hoverOffset,
      _ref$bgColor = _ref.bgColor,
      bgColor = _ref$bgColor === void 0 ? undefined : _ref$bgColor,
      _ref$bdrColor = _ref.bdrColor,
      bdrColor = _ref$bdrColor === void 0 ? undefined : _ref$bdrColor,
      _ref$categoryPercenta = _ref.categoryPercentage,
      categoryPercentage = _ref$categoryPercenta === void 0 ? undefined : _ref$categoryPercenta,
      _ref$barPercentage = _ref.barPercentage,
      barPercentage = _ref$barPercentage === void 0 ? undefined : _ref$barPercentage,
      _ref$base = _ref.base,
      base = _ref$base === void 0 ? undefined : _ref$base,
      _ref$linearGradient = _ref.linearGradient,
      linearGradient = _ref$linearGradient === void 0 ? undefined : _ref$linearGradient,
      _ref$barThickness = _ref.barThickness,
      barThickness = _ref$barThickness === void 0 ? undefined : _ref$barThickness,
      _ref$maxBarThickness = _ref.maxBarThickness,
      maxBarThickness = _ref$maxBarThickness === void 0 ? undefined : _ref$maxBarThickness,
      _ref$minBarLength = _ref.minBarLength,
      minBarLength = _ref$minBarLength === void 0 ? undefined : _ref$minBarLength,
      _ref$pointTextAllShow = _ref.pointTextAllShow,
      pointTextAllShow = _ref$pointTextAllShow === void 0 ? false : _ref$pointTextAllShow,
      _ref$pointTextAddFirs = _ref.pointTextAddFirstValue,
      pointTextAddFirstValue = _ref$pointTextAddFirs === void 0 ? undefined : _ref$pointTextAddFirs,
      _ref$pointTextAddLast = _ref.pointTextAddLastValue,
      pointTextAddLastValue = _ref$pointTextAddLast === void 0 ? undefined : _ref$pointTextAddLast,
      _ref$pointText = _ref.pointText,
      pointText = _ref$pointText === void 0 ? false : _ref$pointText,
      _ref$pointTextAbsvalu = _ref.pointTextAbsvalue,
      pointTextAbsvalue = _ref$pointTextAbsvalu === void 0 ? false : _ref$pointTextAbsvalu,
      _ref$pointDrop = _ref.pointDrop,
      pointDrop = _ref$pointDrop === void 0 ? false : _ref$pointDrop,
      _ref$pointAllDrop = _ref.pointAllDrop,
      pointAllDrop = _ref$pointAllDrop === void 0 ? false : _ref$pointAllDrop;
  return {
    type: type,
    hidden: hidden,
    indexAxis: indexAxis,
    label: label,
    order: order,
    data: data,
    dataViews: dataViews,
    lineAddViews: lineAddViews,
    id: id,
    //line bar  element konfigrasyonlar
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderWidth: borderWidth,
    tension: tension,
    fill: fill,
    spanGaps: spanGaps,
    stepped: stepped,
    hoverBorderWidth: hoverBorderWidth,
    hoverBackgroundColor: hoverBackgroundColor,
    //noktaların konfigrasyonları
    pointStyle: pointStyle,
    hitRadius: hitRadius,
    hoverRadius: hoverRadius,
    rotation: rotation,
    borderDash: borderDash,
    borderDashOffset: borderDashOffset,
    radius: radius,
    radiusValue: radiusValue,
    borderAlign: borderAlign,
    hoverOffset: hoverOffset,
    bgColor: bgColor,
    bdrColor: bdrColor,
    categoryPercentage: categoryPercentage,
    barPercentage: barPercentage,
    base: base,
    linearGradient: linearGradient,
    barThickness: barThickness,
    maxBarThickness: maxBarThickness,
    minBarLength: minBarLength,
    pointTextAllShow: pointTextAllShow,
    pointTextAddFirstValue: pointTextAddFirstValue,
    pointTextAddLastValue: pointTextAddLastValue,
    pointText: pointText,
    pointTextAbsvalue: pointTextAbsvalue,
    pointDrop: pointDrop,
    pointAllDrop: pointAllDrop
  };
}
/**
    *  benzersiz id oluşturma
    * @returns 
    */


var generateUid = function generateUid() {
  return Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
};

exports.generateUid = generateUid;

var ChartJS = function ChartJS(_ref2) {
  var _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? undefined : _ref2$title,
      _ref2$titleVisible = _ref2.titleVisible,
      titleVisible = _ref2$titleVisible === void 0 ? true : _ref2$titleVisible,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? "line" : _ref2$type,
      _ref2$align = _ref2.align,
      align = _ref2$align === void 0 ? "center" : _ref2$align,
      _ref2$position = _ref2.position,
      position = _ref2$position === void 0 ? 'top' : _ref2$position,
      _ref2$titleFont = _ref2.titleFont,
      titleFont = _ref2$titleFont === void 0 ? {
    size: 16,
    fontColor: "black",
    family: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'",
    lineHeight: "normal",
    style: "normal",
    //"normal" | "italic" | "oblique" | "initial" | "inherit"
    weight: "bold"
  } : _ref2$titleFont,
      _ref2$xtitle = _ref2.xtitle,
      xtitle = _ref2$xtitle === void 0 ? undefined : _ref2$xtitle,
      _ref2$ytitle = _ref2.ytitle,
      ytitle = _ref2$ytitle === void 0 ? undefined : _ref2$ytitle,
      _ref2$labels = _ref2.labels,
      labels = _ref2$labels === void 0 ? [] : _ref2$labels,
      _ref2$indexAxis = _ref2.indexAxis,
      indexAxis = _ref2$indexAxis === void 0 ? "x" : _ref2$indexAxis,
      _ref2$mode = _ref2.mode,
      mode = _ref2$mode === void 0 ? "nearest" : _ref2$mode,
      _ref2$intersect = _ref2.intersect,
      intersect = _ref2$intersect === void 0 ? false : _ref2$intersect,
      _ref2$islegend = _ref2.islegend,
      islegend = _ref2$islegend === void 0 ? true : _ref2$islegend,
      _ref2$backgroundColor = _ref2.backgroundColor,
      backgroundColor = _ref2$backgroundColor === void 0 ? "white" : _ref2$backgroundColor,
      _ref2$plugins = _ref2.plugins,
      plugins = _ref2$plugins === void 0 ? undefined : _ref2$plugins,
      _ref2$xstacked = _ref2.xstacked,
      xstacked = _ref2$xstacked === void 0 ? false : _ref2$xstacked,
      _ref2$xAxesmin = _ref2.xAxesmin,
      xAxesmin = _ref2$xAxesmin === void 0 ? undefined : _ref2$xAxesmin,
      _ref2$xAxesmax = _ref2.xAxesmax,
      xAxesmax = _ref2$xAxesmax === void 0 ? undefined : _ref2$xAxesmax,
      _ref2$xtitleColor = _ref2.xtitleColor,
      xtitleColor = _ref2$xtitleColor === void 0 ? "black" : _ref2$xtitleColor,
      _ref2$xAxesstep = _ref2.xAxesstep,
      xAxesstep = _ref2$xAxesstep === void 0 ? undefined : _ref2$xAxesstep,
      _ref2$xlabelsFont = _ref2.xlabelsFont,
      xlabelsFont = _ref2$xlabelsFont === void 0 ? {
    size: 12,
    fontColor: "black",
    family: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'",
    lineHeight: "normal",
    style: "normal",
    //"normal" | "italic" | "oblique" | "initial" | "inherit"
    weight: "normal"
  } : _ref2$xlabelsFont,
      _ref2$xgrid = _ref2.xgrid,
      xgrid = _ref2$xgrid === void 0 ? true : _ref2$xgrid,
      _ref2$xlabelBackgroun = _ref2.xlabelBackground,
      xlabelBackground = _ref2$xlabelBackgroun === void 0 ? "white" : _ref2$xlabelBackgroun,
      _ref2$ystacked = _ref2.ystacked,
      ystacked = _ref2$ystacked === void 0 ? false : _ref2$ystacked,
      _ref2$yAxesmin = _ref2.yAxesmin,
      yAxesmin = _ref2$yAxesmin === void 0 ? undefined : _ref2$yAxesmin,
      _ref2$yAxesmax = _ref2.yAxesmax,
      yAxesmax = _ref2$yAxesmax === void 0 ? undefined : _ref2$yAxesmax,
      _ref2$ytitleColor = _ref2.ytitleColor,
      ytitleColor = _ref2$ytitleColor === void 0 ? "black" : _ref2$ytitleColor,
      _ref2$yAxesstep = _ref2.yAxesstep,
      yAxesstep = _ref2$yAxesstep === void 0 ? undefined : _ref2$yAxesstep,
      _ref2$ylabelsFont = _ref2.ylabelsFont,
      ylabelsFont = _ref2$ylabelsFont === void 0 ? {
    size: 12,
    fontColor: "black",
    family: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'",
    lineHeight: "normal",
    style: "normal",
    //"normal" | "italic" | "oblique" | "initial" | "inherit"
    weight: "normal"
  } : _ref2$ylabelsFont,
      _ref2$ygrid = _ref2.ygrid,
      ygrid = _ref2$ygrid === void 0 ? true : _ref2$ygrid,
      _ref2$ylabelBackgroun = _ref2.ylabelBackground,
      ylabelBackground = _ref2$ylabelBackgroun === void 0 ? "white" : _ref2$ylabelBackgroun,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? "100%" : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? "25%" : _ref2$height,
      _ref2$aspectRatio = _ref2.aspectRatio,
      aspectRatio = _ref2$aspectRatio === void 0 ? undefined : _ref2$aspectRatio,
      _ref2$responsive = _ref2.responsive,
      responsive = _ref2$responsive === void 0 ? true : _ref2$responsive,
      _ref2$yAxesRightAdd = _ref2.yAxesRightAdd,
      yAxesRightAdd = _ref2$yAxesRightAdd === void 0 ? false : _ref2$yAxesRightAdd,
      _ref2$yAxesLeftAdd = _ref2.yAxesLeftAdd,
      yAxesLeftAdd = _ref2$yAxesLeftAdd === void 0 ? false : _ref2$yAxesLeftAdd,
      _ref2$xAxesPosition = _ref2.xAxesPosition,
      xAxesPosition = _ref2$xAxesPosition === void 0 ? undefined : _ref2$xAxesPosition,
      _ref2$yAxesPosition = _ref2.yAxesPosition,
      yAxesPosition = _ref2$yAxesPosition === void 0 ? undefined : _ref2$yAxesPosition,
      _ref2$mobil = _ref2.mobil,
      mobil = _ref2$mobil === void 0 ? false : _ref2$mobil,
      _ref2$mobilMinSize = _ref2.mobilMinSize,
      mobilMinSize = _ref2$mobilMinSize === void 0 ? 1024 : _ref2$mobilMinSize,
      children = _ref2.children,
      _ref2$ticksYcallback = _ref2.ticksYcallback,
      ticksYcallback = _ref2$ticksYcallback === void 0 ? function (val, index, values) {
    return indexAxis === "y" ? labels[index] : val;
  } : _ref2$ticksYcallback,
      _ref2$ticksXcallback = _ref2.ticksXcallback,
      ticksXcallback = _ref2$ticksXcallback === void 0 ? function (val, index, values) {
    return indexAxis === "y" ? val : labels[index];
  } : _ref2$ticksXcallback,
      _ref2$tooltipCallback = _ref2.tooltipCallbacks,
      tooltipCallbacks = _ref2$tooltipCallback === void 0 ? undefined : _ref2$tooltipCallback,
      _ref2$style = _ref2.style,
      style = _ref2$style === void 0 ? undefined : _ref2$style,
      _ref2$canvasid = _ref2.canvasid,
      canvasid = _ref2$canvasid === void 0 ? "chartJS" : _ref2$canvasid,
      _ref2$yazdir = _ref2.yazdir,
      yazdir = _ref2$yazdir === void 0 ? 0 : _ref2$yazdir,
      onClickLabel = _ref2.onClickLabel,
      _ref2$intervalFunctio = _ref2.intervalFunction,
      intervalFunction = _ref2$intervalFunctio === void 0 ? [] : _ref2$intervalFunctio,
      _ref2$pluginsData = _ref2.pluginsData,
      pluginsData = _ref2$pluginsData === void 0 ? [] : _ref2$pluginsData,
      _ref2$layoutPadding = _ref2.layoutPadding,
      layoutPadding = _ref2$layoutPadding === void 0 ? undefined : _ref2$layoutPadding,
      _ref2$labelsFont = _ref2.labelsFont,
      labelsFont = _ref2$labelsFont === void 0 ? {
    size: 12,
    fontColor: "black",
    family: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'",
    lineHeight: "normal",
    style: "normal",
    //"normal" | "italic" | "oblique" | "initial" | "inherit"
    weight: "normal"
  } : _ref2$labelsFont,
      _ref2$usePointStyleLe = _ref2.usePointStyleLegend,
      usePointStyleLegend = _ref2$usePointStyleLe === void 0 ? false : _ref2$usePointStyleLe,
      _ref2$usePointStyleTo = _ref2.usePointStyleTooltip,
      usePointStyleTooltip = _ref2$usePointStyleTo === void 0 ? true : _ref2$usePointStyleTo,
      _ref2$LegendPointStyl = _ref2.LegendPointStyle,
      LegendPointStyle = _ref2$LegendPointStyl === void 0 ? undefined : _ref2$LegendPointStyl,
      _ref2$onChartOptions = _ref2.onChartOptions,
      onChartOptions = _ref2$onChartOptions === void 0 ? function (e) {
    return e;
  } : _ref2$onChartOptions,
      _ref2$downloadOptions = _ref2.downloadOptions,
      downloadOptions = _ref2$downloadOptions === void 0 ? false : _ref2$downloadOptions,
      _ref2$changeTypes = _ref2.changeTypes,
      changeTypes = _ref2$changeTypes === void 0 ? false : _ref2$changeTypes,
      className = _ref2.className,
      _ref2$autoSkip = _ref2.autoSkip,
      autoSkip = _ref2$autoSkip === void 0 ? true : _ref2$autoSkip,
      _ref2$autoSkipPadding = _ref2.autoSkipPadding,
      autoSkipPadding = _ref2$autoSkipPadding === void 0 ? false : _ref2$autoSkipPadding,
      _ref2$maxLabelsRotati = _ref2.maxLabelsRotation,
      maxLabelsRotation = _ref2$maxLabelsRotati === void 0 ? undefined : _ref2$maxLabelsRotati,
      _ref2$minLabelsRotati = _ref2.minLabelsRotation,
      minLabelsRotation = _ref2$minLabelsRotati === void 0 ? undefined : _ref2$minLabelsRotati;
  var canvas = (0, _react.useRef)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      chartmain = _useState2[0],
      setChartmain = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      charttype = _useState4[0],
      setCharttype = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      ciz = _useState6[0],
      setCiz = _useState6[1];

  var _useState7 = (0, _react.useState)({
    leftdivider: null,
    rightdivider: null,
    area: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      draws = _useState8[0],
      setDraws = _useState8[1];

  var datasets = [];
  var chartjs = {
    title: title,
    titleVisible: titleVisible,
    type: type,
    align: align,
    position: position,
    titleFont: titleFont,
    xtitle: xtitle,
    ytitle: ytitle,
    labels: labels,
    indexAxis: indexAxis,
    islegend: islegend,
    backgroundColor: backgroundColor,
    plugins: plugins,
    xstacked: xstacked,
    xAxesmin: xAxesmin,
    xAxesmax: xAxesmax,
    xtitleColor: xtitleColor,
    xAxesstep: xAxesstep,
    xlabelsFont: xlabelsFont,
    xgrid: xgrid,
    xlabelBackground: xlabelBackground,
    ystacked: ystacked,
    yAxesmin: yAxesmin,
    yAxesmax: yAxesmax,
    ytitleColor: ytitleColor,
    yAxesstep: yAxesstep,
    ylabelsFont: ylabelsFont,
    ygrid: ygrid,
    ylabelBackground: ylabelBackground,
    width: width,
    height: height,
    aspectRatio: aspectRatio,
    responsive: responsive,
    yAxesRightAdd: yAxesRightAdd,
    yAxesLeftAdd: yAxesLeftAdd,
    xAxesPosition: xAxesPosition,
    yAxesPosition: yAxesPosition,
    mobil: mobil,
    mobilMinSize: mobilMinSize,
    children: children,
    ticksYcallback: ticksYcallback,
    ticksXcallback: ticksXcallback,
    tooltipCallbacks: tooltipCallbacks,
    style: style,
    layoutPadding: layoutPadding,
    labelsFont: labelsFont,
    usePointStyleLegend: usePointStyleLegend,
    usePointStyleTooltip: usePointStyleTooltip,
    LegendPointStyle: LegendPointStyle,
    onChartOptions: onChartOptions,
    downloadOptions: downloadOptions,
    changeTypes: changeTypes,
    className: className,
    autoSkip: autoSkip,
    autoSkipPadding: autoSkipPadding,
    maxLabelsRotation: maxLabelsRotation,
    minLabelsRotation: minLabelsRotation
  };

  var getHexRgbCode = function getHexRgbCode(str) {
    var letters = "0123456789ABCDEF";
    str = str.replace("#", "").toUpperCase();
    var red = letters.indexOf(str[0]) * 16 + letters.indexOf(str[1]);
    var green = letters.indexOf(str[2]) * 16 + letters.indexOf(str[3]);
    var blue = letters.indexOf(str[4]) * 16 + letters.indexOf(str[5]);
    var alpha = str.length === 8 ? (letters.indexOf(str[6]) * 16 + letters.indexOf(str[7])) / 255 : 1;
    var color = [red, green, blue, alpha.toFixed(2)];
    return color;
  };

  var getRgbCode = function getRgbCode(rgb) {
    var str = null;

    if (rgb.indexOf("a") > 0) {
      str = rgb.trim().replace("rgb", "").replace("a", "").replace("(", "").replace(")", "").split(",");
    } else {
      str = rgb.trim().replace("rgb", "").replace("(", "").replace(")", "").split(",");
      str = [].concat(_toConsumableArray(str), ["1"]); //alpha
    }

    return str;
  };

  var chartNodeConvert = function chartNodeConvert(newdataset) {
    var _newdataset$dataViews;

    if (charttype) {
      newdataset.type = charttype;
    }

    newdataset.radiusValue = typeof newdataset.radius === "number" ? newdataset.radius : undefined;

    if (newdataset.type === "doughnut" && !Array.isArray(newdataset.backgroundColor)) {
      var background = new Array(newdataset.data.length);

      var datas = _toConsumableArray(newdataset.data);

      var rgb = newdataset.backgroundColor.indexOf("#") >= 0 ? getHexRgbCode(newdataset.backgroundColor) : getRgbCode(newdataset.backgroundColor); //hex yada rgb göre hesapla

      var stepalpha = 0.5 / datas.length; //0.5 kadar alpha step değeri belirleniyor

      var alpha = 1; //alpha değer,

      while (datas.length > 0) {
        var color = "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + alpha.toFixed(2) + ")"; //renk yapılıyor

        var max = Math.max.apply(Math, _toConsumableArray(datas)); //max değer belirleniyor

        var index = newdataset.data.indexOf(max); // mevcut dan index alınıyor

        background[index] = color; // index ge renk atanıyor 

        alpha = alpha - stepalpha; //alpha değeri açılıyor

        datas.splice(datas.indexOf(max), 1); // değer datadan siliniyor
      }

      newdataset.backgroundColor = background;
    }

    var onlinearGradient = function onlinearGradient(chart) {
      var dataColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        0: "",
        0.5: "",
        1: ""
      };
      var ctx = chart.ctx,
          chartArea = chart.chartArea;

      if (!chartArea) {
        // This case happens on initial chart load
        return null;
      } // Create the gradient because this is either the first render
      // or the size of the chart has changed


      var gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      gradient.addColorStop(0, dataColor[0]);
      gradient.addColorStop(0.5, dataColor[0.5]);
      gradient.addColorStop(1, dataColor[1]);
      return gradient;
    };

    var poitnBackground = function poitnBackground(contex) {
      var _dataset$dataViews;

      var dataset = contex.dataset,
          chart = contex.chart;
      var Index = contex.index; //sadece görüntieneceklerde value olanları kapatıyoruz

      var item = (_dataset$dataViews = dataset.dataViews) === null || _dataset$dataViews === void 0 ? void 0 : _dataset$dataViews.filter(function (v, i) {
        return v.index === Index;
      })[0];

      if (item !== undefined) {
        if (dataset.linearGradient !== undefined) {
          return onlinearGradient(chart, dataset.linearGradient);
        }

        return dataset.backgroundColor;
      }

      if (dataset.linearGradient !== undefined) {
        return onlinearGradient(chart, dataset.linearGradient);
      }

      return dataset.bgColor;
    };

    var pointRadius = function pointRadius(ctx) {
      var Index = ctx.index;
      var dataset = ctx.dataset; //sadece görüntieneceklerde value olanları kapatıyoruz

      var item = dataset.dataViews.filter(function (v, i) {
        return v.index === Index;
      })[0];

      if (item !== undefined) {
        return item !== null && item !== void 0 && item.radius ? item === null || item === void 0 ? void 0 : item.radius : 8;
      }

      return dataset.radiusValue;
    };

    if (newdataset.dataViews && ((_newdataset$dataViews = newdataset.dataViews) === null || _newdataset$dataViews === void 0 ? void 0 : _newdataset$dataViews.length) > 0) {
      newdataset.bgColor = newdataset.backgroundColor;
      newdataset.radius = pointRadius;
      newdataset.backgroundColor = poitnBackground;
    }

    return newdataset;
  };

  var chartData = function chartData() {
    var _iterator = _createForOfIteratorHelper(_react.default.Children.toArray(children)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var chartnode = _step.value;

        if (chartnode.props) {
          datasets.push(chartNodeConvert(Object.assign({}, chartnode.props)));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (type === "scatter") {
      return {
        datasets: datasets
      };
    }

    return {
      labels: labels,
      datasets: datasets
    };
  };

  var chartOptions = function chartOptions() {
    yAxesPosition = yAxesRightAdd ? "right" : yAxesPosition;
    yAxesPosition = yAxesLeftAdd ? "left" : yAxesPosition;

    if (mobil) {
      var Switdh = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var Sheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

      if (Switdh >= mobilMinSize) {
        responsive = false;
        width = "100%";
      }
    }

    var options = {
      indexAxis: indexAxis,
      responsiveAnimationDuration: 1000,
      responsive: responsive,
      maintainAspectRatio: false,
      aspectRatio: responsive ? 2 : aspectRatio,
      //yatay ve düşey oranı belitliyor
      devicePixelRatio: responsive ? 1 : 2,
      layout: {
        padding: layoutPadding
      },
      interaction: {
        intersect: intersect,
        mode: mode,
        //'point';  'nearest';   'index' 'dataset' 'x' 'y'
        axis: indexAxis
      },
      plugins: {
        title: {
          text: title,
          //ana başlık
          display: titleVisible,
          aling: align,
          font: titleFont,
          color: titleFont.fontColor
        },
        tooltip: {
          usePointStyle: usePointStyleTooltip,
          callbacks: tooltipCallbacks
        },
        legend: {
          display: islegend,
          position: position,
          onClick: onClickLabel,
          labels: {
            usePointStyle: usePointStyleLegend,
            font: labelsFont,
            color: labelsFont.fontColor,
            pointStyle: LegendPointStyle
          }
        }
      },
      scales: {
        x: {
          display: xtitle === undefined ? false : true,
          stacked: xstacked,
          min: xAxesmin,
          max: xAxesmax,
          position: xAxesPosition,
          backgroundColor: xlabelBackground,
          grid: {
            display: xgrid
          },
          title: {
            display: xtitle === undefined ? false : true,
            text: xtitle === null ? "" : xtitle,
            padding: 4,
            color: xtitleColor
          },
          ticks: {
            callback: ticksXcallback,
            display: xtitle === undefined ? false : true,
            stepSize: xAxesstep,
            font: xlabelsFont,
            color: xlabelsFont.fontColor,
            autoSkip: indexAxis === "x" ? autoSkip : true,
            autoSkipPadding: indexAxis === "x" ? autoSkipPadding : false,
            maxRotation: indexAxis === "x" ? maxLabelsRotation : undefined,
            minRotation: indexAxis === "x" ? minLabelsRotation : undefined
          }
        },
        y: {
          display: xtitle === undefined ? false : true,
          stacked: ystacked,
          position: yAxesPosition,
          min: yAxesmin,
          max: yAxesmax,
          backgroundColor: ylabelBackground,
          grid: {
            display: ygrid === undefined ? true : ygrid
          },
          title: {
            display: ytitle === undefined ? false : true,
            text: ytitle === null ? "" : ytitle,
            padding: 4,
            color: ytitleColor
          },
          ticks: {
            callback: ticksYcallback,
            display: ytitle === undefined ? false : true,
            stepSize: yAxesstep,
            font: ylabelsFont,
            color: ylabelsFont.fontColor,
            autoSkip: indexAxis === "y" ? autoSkip : true,
            autoSkipPadding: indexAxis === "y" ? autoSkipPadding : false,
            maxRotation: indexAxis === "y" ? maxLabelsRotation : undefined,
            minRotation: indexAxis === "y" ? minLabelsRotation : undefined
          }
        } // x1: {
        //     display: true,
        //     min: yAxesmin,
        //     max: yAxesmax,
        //     backgroundColor: ylabelBackground,
        //     grid: {
        //         display: false,
        //     },
        //     ticks: {
        //         display: false,
        //     }
        // },
        // y1: {
        //     display: true,
        //     position: "center",
        //     min: yAxesmin,
        //     max: yAxesmax,
        //     backgroundColor: ylabelBackground,
        //     grid: {
        //         display: false,
        //     },
        //     ticks: {
        //         display: false,
        //     }
        // }

      }
    };
    return options;
  };

  function beforePrintHandler() {
    for (var id in _auto.default.instances) {
      _auto.default.instances[id].resize();
    }
  }

  var ArcXYText = function ArcXYText(data) {
    var px = data.x;
    var py = data.y;
    var angle = data.circumference;
    var startAngle = data.startAngle;
    var endAngle = data.endAngle;
    var diameter = data.outerRadius;
    var totalAngle = endAngle - angle * 0.5;
    var aci = 0;

    if (startAngle === endAngle) {
      return false;
    } //90-180


    if (-Math.PI * 0.5 <= totalAngle && totalAngle < 0) {
      aci = Math.abs(totalAngle);
      py = py - diameter * 0.5 * Math.sin(aci);
      px = px + 0.5 * diameter * Math.cos(aci);
    } //180-270


    if (Math.PI * 0.5 >= totalAngle && totalAngle > 0) {
      aci = Math.abs(totalAngle);
      py = py + diameter * 0.5 * Math.sin(aci);
      px = px + 0.5 * diameter * Math.cos(aci);
    } //270-360


    if (Math.PI * 0.5 < totalAngle && totalAngle <= Math.PI && totalAngle > 0) {
      aci = Math.PI - Math.abs(totalAngle);
      py = py + diameter * 0.5 * Math.sin(aci);
      px = px - 0.5 * diameter * Math.cos(aci);
    } //360-90


    if (Math.PI * 1.5 >= totalAngle && totalAngle > Math.PI && totalAngle > 0) {
      aci = Math.abs(totalAngle) - Math.PI;
      py = py - diameter * 0.5 * Math.sin(aci);
      px = px - 0.5 * diameter * Math.cos(aci);
    }

    return {
      x: px,
      y: py
    };
  };

  var calcY = function calcY(p1, p2, val1, val2, value) {
    var k = 0;
    var y0 = 0;
    var x0 = 0;

    if (val2 < 0) {
      val2 = -val2;
    }

    if (val2 < 0) {
      val1 = -val1;
    }

    var x1 = p1.x;
    var x2 = p2.x;
    var y1 = p1.y;
    var y2 = p2.y;
    k = (y2 - y1) / (val1 - val2);
    y0 = y1 + val1 * k;

    if (value < 0) {
      return y0 + value * k;
    }

    return y0 - value * k;
  };

  var yuzde = function yuzde(toplam, deger) {
    return (100 * deger / toplam).toFixed(1);
  };

  var onDrawDropCircle = function onDrawDropCircle(chartitem) {
    var dataXY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var margin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
    var duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 20;
    var index = 0;
    console.log("dataXY");
    console.log(dataXY);
    return setInterval(function () {
      chartitem.clear();
      chartitem.update("none");
      chartitem.ctx.save();
      index++; // chart.ctx.shadowBlur = 15;

      dataXY.forEach(function (v, i) {
        chartitem.ctx.lineWidth = 1;
        chartitem.ctx.filter = "blur(".concat(margin, "px)");
        chartitem.ctx.strokeStyle = v.color ? v.color : "red";
        chartitem.ctx.beginPath();
        chartitem.ctx.arc(v.x, v.y, index * margin, 0, 2 * Math.PI);
        chartitem.ctx.stroke();
        chartitem.ctx.closePath();
      });
      chartitem.ctx.restore();

      if (index === radius) {
        index = 0;
      }
    }, duration);
  };

  var textPointCalc = function textPointCalc(text, x, y, fontSize, canvasCtx, chartAreaValues) {
    var w = (canvasCtx.measureText(text).width + 2) * 0.5;
    var textWidth = canvasCtx.measureText(text).width + 2;
    var b = 0;
    var px = w + b;
    var py = fontSize * 0.5 + 2;

    if (w + x > chartAreaValues.right) {
      //layout dışına çıkmaması için kaydırılıyor
      b = w - x + chartAreaValues.right;
      px = w + b;
    }

    return {
      px: px,
      py: py,
      b: b,
      width: w,
      textWidth: textWidth
    };
  };

  var chartPlugins = function chartPlugins() {
    var newplugins = [{
      id: "ChartJSPointText",
      afterDraw: function afterDraw(chart, args, options) {
        //console.log(chart);
        //console.log(args);
        //console.log(options);
        var ctx = chart.ctx; // var chartArea = chart.chartArea;
        //sol üst
        // ctx.fillStyle = backgroundColor;
        //ctx.fillRect(chartArea.left, chartArea.top, (chartArea.right - chartArea.left), (chartArea.bottom - chartArea.top));

        var metasets = chart._metasets;
        var indexAxis = chart.config._config.options.indexAxis;
        var _chart$chartArea = chart.chartArea,
            left = _chart$chartArea.left,
            top = _chart$chartArea.top,
            right = _chart$chartArea.right,
            bottom = _chart$chartArea.bottom,
            height = _chart$chartArea.height,
            width = _chart$chartArea.width;

        var _iterator2 = _createForOfIteratorHelper(metasets),
            _step2;

        try {
          var _loop = function _loop() {
            var chartItem = _step2.value;
            var chartItemData = chartItem.data;
            var parsed = chartItem._parsed;
            var dataViews = chartItem._dataset.dataViews;
            var lineAddViews = chartItem._dataset.lineAddViews;
            var pointTextAllShow = chartItem._dataset.pointTextAllShow;
            var pointTextAddFirstValue = chartItem._dataset.pointTextAddFirstValue ? chartItem._dataset.pointTextAddFirstValue : "";
            var pointTextAddLastValue = chartItem._dataset.pointTextAddLastValue ? chartItem._dataset.pointTextAddLastValue : "";
            var visibility = chartItem.visible;
            var pointText = chartItem._dataset.pointText;
            var pointTextAbsvalue = chartItem._dataset.pointTextAbsvalue;

            if (pointText && visibility) {
              var _loop2 = function _loop2(index) {
                //--------------------------------ÇİZİM BAŞLANGIÇ YERİ---------------------------------------------
                ctx.save(); //kaydeder 

                chartItem.type === "pie" && console.log(chartItem);

                if (chartItem.type === "pie") {
                  var point = chartItemData[index];
                  var arcXY = ArcXYText(chartItemData[index]);
                  var pradius = 12;

                  if (arcXY) {
                    var total = chartItem.total;
                    var pieValue = parsed[index];
                    ctx.translate(arcXY.x, arcXY.y);
                    var valuelast = pointTextAddFirstValue + yuzde(total, pieValue) + pointTextAddLastValue;
                    ctx.font = "bold ".concat(pradius ? pradius * 0.9 : 10, "px sans-serif");
                    ctx.fillStyle = "#000";
                    ctx.textAlign = 'center';
                    ctx.fillText(valuelast, 0, 0);
                  }
                }

                if (chartItem.type === "line") {
                  var _point = chartItemData[index]; //console.log(point);

                  lx = _point.x;
                  ly = _point.y;
                  lheight = _point.height;
                  lcolor = _point.options.borderColor;
                  lvalue = indexAxis === "x" ? parsed[index].y : parsed[index].x;
                  lpointStyle = _point.options.pointStyle;
                  lradius = _point.options.radius;
                  ltextWidth = ctx.measureText(lvalue).width;
                  ltextHeight = ctx.measureText(lvalue).actualBoundingBoxDescent;

                  if (pointTextAbsvalue) {
                    lvalue = typeof lvalue === "number" ? Math.abs(lvalue) : lvalue;
                  }

                  if (lineAddViews) {
                    lineAddViews.forEach(function (element) {
                      var lineY = calcY(chartItemData[0], chartItemData[1], parsed[0].y, parsed[1].y, element.value);
                      ctx.strokeStyle = element.backgroundColor;
                      ctx.beginPath();
                      ctx.moveTo(left, lineY);
                      ctx.lineTo(right, lineY);
                      ctx.stroke();
                    });
                  } //dataViews


                  if (indexAxis === "x") {
                    ly = ly + 2 * lradius > bottom ? ly - 2 * lradius : ly + 2 * lradius;

                    if (lx - lradius <= left) {
                      ly = ly - 2 * lradius;
                      lx = lx + 2 * lradius; // : lx-lradius*0.5;
                    }

                    lradius = 1.5 * lradius;
                  } else {
                    lx = lx + 2 * lradius > right ? lx - 2 * lradius : lx + 2 * lradius;
                  }

                  ctx.translate(lx, ly);

                  if (pointText) {
                    lradius = lradius < 13 ? 13 : lradius;
                    ctx.font = "".concat(lradius, "px Arial");
                    ctx.fillStyle = "#000";
                    ctx.textAlign = 'center';

                    var _valuelast = pointTextAddFirstValue + lvalue + pointTextAddLastValue;

                    if (pointTextAllShow && !dataViews || (dataViews === null || dataViews === void 0 ? void 0 : dataViews.length) <= 0) {
                      ctx.strokeStyle = "#000";
                      ctx.fillText(_valuelast, 0, ltextHeight);
                    }

                    if (!pointTextAllShow && dataViews !== null && dataViews !== void 0 && dataViews.filter(function (v, i) {
                      return v.index === index;
                    })[0]) {
                      var userValueLine = dataViews.filter(function (v, i) {
                        return v.index === index;
                      })[0].value;
                      var colorLine = dataViews.filter(function (v, i) {
                        return v.index === index;
                      })[0].backgroundColor;
                      ctx.strokeStyle = colorLine; //yazını noktasının alan hesaplama ve noktayı belirleme

                      var itemCalc = textPointCalc(userValueLine ? userValueLine : lvalue, lx, ly, lradius, ctx, chart.chartArea);
                      ctx.strokeRect(-itemCalc.px, -itemCalc.py, itemCalc.width, lradius + 2);
                      ctx.fillText(userValueLine ? userValueLine : lvalue, -itemCalc.b, 0);
                    }
                  }
                }

                if (chartItem.type === "bar") {
                  var _point2 = chartItemData[index];
                  bx = _point2.x;
                  by = _point2.y;
                  bheight = _point2.height;
                  bcolor = _point2.options.borderColor;
                  var bvalue = indexAxis === "x" ? parsed[index].y : parsed[index].x;
                  bstyle = _point2.options.pointStyle;
                  bradius = _point2.options.radius;
                  btextWidth = ctx.measureText(bvalue).width;
                  btextHeight = ctx.measureText(bvalue).actualBoundingBoxDescent; //değerlerin hepsini pozitif yazıyoruz

                  if (pointTextAbsvalue) {
                    bvalue = typeof bvalue === "number" ? Math.abs(bvalue) : bvalue;
                  } //lineAddViews


                  if (lineAddViews) {
                    lineAddViews.forEach(function (element) {
                      var lineY = calcY(chartItemData[0], chartItemData[1], parsed[0].y, parsed[1].y, element.value);
                      ctx.lineWidth = 2;
                      ctx.strokeStyle = element.backgroundColor;
                      ctx.beginPath();
                      ctx.moveTo(left + 5, lineY);
                      ctx.lineTo(right - 5, lineY);
                      ctx.stroke();
                      ctx.font = "".concat(20, "px Arial");
                      ctx.fillStyle = element.backgroundColor;
                      ctx.fillText("GSYH=" + element.value, left + 5, lineY + 15);
                    });
                  }

                  ctx.translate(bx, by);

                  if (indexAxis === "x") {
                    ctx.rotate(-90 * Math.PI / 180);
                  } else {
                    ctx.rotate(0 * Math.PI / 180);
                  }

                  if (pointText && !chartItem.hidden) {
                    bradius = bradius > 12 ? 12 : bradius;
                    ctx.font = "".concat(bradius, "px Arial");
                    ctx.fillStyle = "#000";
                    ctx.textAlign = 'center';

                    var _valuelast2 = pointTextAddFirstValue + bvalue + pointTextAddLastValue;

                    if (pointTextAllShow && !dataViews || (dataViews === null || dataViews === void 0 ? void 0 : dataViews.length) <= 0) {
                      ctx.strokeStyle = "#000";
                      btextWidth = ctx.measureText(bvalue).width + 2;
                      ctx.fillText(_valuelast2, 5, 0);
                      ctx.strokeRect(-btextWidth * 0.5, -bradius * 0.5 - 2, btextWidth, bradius + 2);
                    }

                    if (dataViews !== null && dataViews !== void 0 && dataViews.filter(function (v, i) {
                      return v.index === index;
                    })[0]) {
                      var userValueBar = dataViews.filter(function (v, i) {
                        return v.index === index;
                      })[0].value;
                      userColorBar = dataViews.filter(function (v, i) {
                        return v.index === index;
                      })[0].backgroundColor;
                      ctx.strokeStyle = userColorBar;

                      var _itemCalc = textPointCalc(userValueBar ? userValueBar : bvalue, bx, by, bradius, ctx, chart.chartArea);

                      ctx.strokeRect(0, 0, _itemCalc.textWidth, bradius + 2);
                      ctx.fillText(userValueBar ? userValueBar : bvalue, _itemCalc.textWidth, 0);
                    }
                  }
                }

                ctx.restore();
              };

              for (var index = 0; index < chartItemData.length; index++) {
                _loop2(index);
              }
            }
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var lx;
            var ly;
            var lheight;
            var lcolor;
            var lvalue;
            var lpointStyle;
            var lradius;
            var ltextWidth;
            var ltextHeight;
            var bx;
            var by;
            var bheight;
            var bcolor;
            var bstyle;
            var bradius;
            var btextWidth;
            var btextHeight;
            var userColorBar;

            _loop();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }, {
      id: "ChartJSBacground",
      beforeDraw: function beforeDraw(chart, args, options) {
        //console.log(chart);
        //console.log(args);
        //console.log(options);
        var ctx = chart.ctx;
        var chartArea = chart.chartArea;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      }
    }, {
      id: "ChartJPointDrop",
      afterRender: function afterRender(chart, args, options) {
        var dataXY = []; //console.log(chart);
        //console.log(args);
        //console.log(options);

        var ctx = chart.ctx; // var chartArea = chart.chartArea;
        //sol üst
        // ctx.fillStyle = backgroundColor;
        //ctx.fillRect(chartArea.left, chartArea.top, (chartArea.right - chartArea.left), (chartArea.bottom - chartArea.top));

        var metasets = chart._metasets;
        var IndexAxis = chart.config._config.options.indexAxis; //const {left,top,right,bottom,height,width}=chart.chartArea;

        for (var ind = 0; ind < metasets.length; ind++) {
          var chartItem = metasets[ind];
          var chartItemData = chartItem.data;
          var label = chartItem.label;
          var visibility = chartItem.visible;
          var dataViews = chartItem._dataset.dataViews;
          var pointDrop = chartItem._dataset.pointDrop;
          var pointAllDrop = chartItem._dataset.pointAllDrop;

          if (pointDrop && visibility) {
            var _loop3 = function _loop3(index) {
              var point = chartItemData[index]; //console.log(point);

              x = point.x;
              y = point.y;
              color = point.options.borderColor;
              var pointkey = label + ind + index; //değerlerin hepsini pozitif yazıyoruz
              //--------------------------------ÇİZİM BAŞLANGIÇ YERİ---------------------------------------------

              if (chartItem.type === "pie") {
                var arcXY = ArcXYText(chartItemData[index]);

                if (arcXY) {
                  x = arcXY.x;
                  y = arcXY.y;

                  if (pointAllDrop && (!dataViews || (dataViews === null || dataViews === void 0 ? void 0 : dataViews.length) <= 0)) {
                    dataXY.push({
                      x: x,
                      y: y,
                      key: pointkey,
                      color: "red"
                    });
                  }

                  if (dataViews !== null && dataViews !== void 0 && dataViews.filter(function (v, i) {
                    return v.index === index;
                  })[0]) {
                    var pointColor = dataViews.filter(function (v, i) {
                      return v.index === index;
                    })[0].dropColor;
                    dataXY.push({
                      x: x,
                      y: y,
                      key: pointkey,
                      color: pointColor
                    });
                  }
                }
              }

              if (chartItem.type === "line") {
                if (pointAllDrop && (!dataViews || (dataViews === null || dataViews === void 0 ? void 0 : dataViews.length) <= 0)) {
                  dataXY.push({
                    x: x,
                    y: y,
                    key: pointkey,
                    color: color
                  });
                }

                if (dataViews !== null && dataViews !== void 0 && dataViews.filter(function (v, i) {
                  return v.index === index;
                })[0]) {
                  var _pointColor = dataViews.filter(function (v, i) {
                    return v.index === index;
                  })[0].dropColor;
                  dataXY.push({
                    x: x,
                    y: y,
                    key: pointkey,
                    color: _pointColor
                  });
                }
              }

              if (chartItem.type === "bar") {
                if (pointAllDrop && (!dataViews || (dataViews === null || dataViews === void 0 ? void 0 : dataViews.length) <= 0)) {
                  dataXY.push({
                    x: x,
                    y: y,
                    key: pointkey,
                    color: "red"
                  });
                }

                if (dataViews !== null && dataViews !== void 0 && dataViews.filter(function (v, i) {
                  return v.index === index;
                })[0]) {
                  var _pointColor2 = dataViews.filter(function (v, i) {
                    return v.index === index;
                  })[0].dropColor;
                  dataXY.push({
                    x: x,
                    y: y,
                    key: pointkey,
                    color: _pointColor2
                  });
                }
              }
            };

            //console.log(chartItem);
            for (var index = 0; index < chartItemData.length; index++) {
              var x;
              var y;
              var color;

              _loop3(index);
            }
          }
        } //animasyon ve data değişim kontrolu yapılıyor


        if (intervalFunction.filter(function (v, i) {
          return v.id === "ChartJPointDrop";
        })[0]) {
          var intervalItem = intervalFunction.filter(function (v, i) {
            return v.id === "ChartJPointDrop";
          })[0];
          var update = false;
          intervalItem.dataXY.forEach(function (v, i) {
            var _dataXY$i, _dataXY$i2, _dataXY$i3;

            if (v.x !== ((_dataXY$i = dataXY[i]) === null || _dataXY$i === void 0 ? void 0 : _dataXY$i.x) | v.y !== ((_dataXY$i2 = dataXY[i]) === null || _dataXY$i2 === void 0 ? void 0 : _dataXY$i2.y) | v.key !== ((_dataXY$i3 = dataXY[i]) === null || _dataXY$i3 === void 0 ? void 0 : _dataXY$i3.key)) {
              update = true;
            }
          }); // değişim varsa 

          if (update && dataXY.length > 0) {
            //animasyon duruduruluyor
            clearInterval(intervalItem.timeout);
            intervalFunction = []; //yeni anismasyon yükleniyor

            var timeout = onDrawDropCircle(chart, dataXY, 10, 2, 100);
            intervalFunction.push({
              id: "ChartJPointDrop",
              dataXY: dataXY,
              timeout: timeout
            });
          }

          if (update && dataXY.length <= 0) {
            clearInterval(intervalItem.timeout);
            intervalFunction = [];
          }
        } //hiç anismasyon yok sa


        if (!intervalFunction.filter(function (v, i) {
          return v.id === "ChartJPointDrop";
        })[0] && dataXY.length > 0) {
          var _timeout = onDrawDropCircle(chart, dataXY, 10, 2, 100);

          intervalFunction.push({
            id: "ChartJPointDrop",
            dataXY: dataXY,
            timeout: _timeout
          });
        }
      }
    }];

    if (plugins !== null && plugins !== undefined) {
      return newplugins.concat(plugins);
    }

    return newplugins;
  };

  var addData = function addData(label, data) {
    chartmain.data.labels.push(label);
    chartmain.data.datasets.forEach(function (dataset) {
      dataset.data.push(data);
    });
    chartmain.update();
  };

  var removeData = function removeData(data) {
    chartmain.data.labels.pop();
    chartmain.data.datasets.forEach(function (dataset) {
      dataset.data.pop();
    });
    chartmain.update();
  };

  var ChartRender = function ChartRender() {
    if (!children) {
      return null;
    }

    if (canvas.current && !chartmain) {
      var data = chartData();
      var options = chartOptions();
      plugins = chartPlugins();

      if (chartmain) {
        chartmain.destroy();
        setChartmain(null);
      }

      var newchart = new _auto.default(canvas === null || canvas === void 0 ? void 0 : canvas.current, {
        type: type,
        data: data,
        options: options,
        plugins: plugins
      });
      setChartmain(newchart);
      return;
    }

    if (chartmain && children) {
      intervalFunction.forEach(function (v, i) {
        try {
          clearInterval(v.timeout);
        } catch (error) {}
      });
      intervalFunction = [];

      var _data = chartData();

      var _options = chartOptions();

      chartmain.data = _data;
      chartmain.options = _options;
      chartmain.update();
      console.log(chartmain);
    }
  };

  var onChartDraws = function onChartDraws(ctx, v) {
    ctx.save();

    switch (v.type) {
      case "leftdivider":
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo(v.x, v.y);
        ctx.lineTo(v.x, v.y + v.h);
        ctx.stroke();
        break;

      case "rightdivider":
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo(v.x, v.y);
        ctx.lineTo(v.x, v.y + v.h);
        ctx.stroke();
        break;

      case "area":
        ctx.beginPath();
        ctx.fillStyle = v.style;
        ctx.rect(v.x, v.y, v.w, v.h);
        ctx.fill();
        break;

      default:
        break;
    }

    ctx.restore();
  };

  var chartAddEvents = function chartAddEvents() {
    var chartItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _auto.default();
    var _chartItem$chartArea = chartItem.chartArea,
        width = _chartItem$chartArea.width,
        height = _chartItem$chartArea.height,
        top = _chartItem$chartArea.top,
        bottom = _chartItem$chartArea.bottom,
        right = _chartItem$chartArea.right,
        left = _chartItem$chartArea.left;
    chartItem.platform.addEventListener(chartItem, "mousedown", function (ev) {
      setCiz(true);
      var leftdivider = {
        x: ev.x,
        y: top,
        type: "leftdivider",
        w: 0,
        h: height,
        style: chartItem.ctx.fillStyle
      };
      setDraws(Object.assign(draws, {
        leftdivider: leftdivider
      }));
      onChartDraws(chartItem.ctx, leftdivider);
    });
    chartItem.platform.addEventListener(chartItem, "mouseup", function (ev) {
      setCiz(false);
      chartItem.clear();
      chartItem.update("none");
    });
    chartItem.platform.addEventListener(chartItem, "mousemove", function (ev) {
      chartItem.clear();
      chartItem.stop();
      chartItem.update("none");

      if (draws.leftdivider !== null && ciz) {
        onChartDraws(chartItem.ctx, draws.leftdivider);
        var w = ev.x - draws.leftdivider.x;
        var h = ev.y - draws.leftdivider.y;
        chartItem.ctx.beginPath();
        chartItem.ctx.fillStyle = 'rgba(0, 157, 255,0.3)';
        chartItem.ctx.rect(draws.leftdivider.x, top, w, height);
        chartItem.ctx.fill();
        draws.rightdivider = {
          x: ev.x,
          y: top,
          type: "rightdivider",
          w: 0,
          h: height,
          style: chartItem.ctx.fillStyle
        };
        onChartDraws(chartItem.ctx, draws.rightdivider);
      }
    });
  };

  (0, _react.useEffect)(function () {
    ChartRender();
  }, [children, width, height, chartjs, charttype]);

  var canvasSaveImage = function canvasSaveImage() {
    var _canvas$current;

    if (!(canvas !== null && canvas !== void 0 && canvas.current)) {
      return;
    } // var dataURL = this.canvas?.toDataURL("image/jpg", 1.0);
    // var a = document.createElement('a');
    // a.href = dataURL;
    // a.download = filename;
    // document.body.appendChild(a);
    // a.click();


    var downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'CanvasAsImage.png');
    var dataURL = canvas === null || canvas === void 0 ? void 0 : (_canvas$current = canvas.current) === null || _canvas$current === void 0 ? void 0 : _canvas$current.toDataURL('image/jpg', 1.0);
    var url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream');
    downloadLink.setAttribute('href', url);
    downloadLink.click();
  };

  var canvasPrint = function canvasPrint() {
    var win = window.open();

    if (win.document && yazdir > 1) {
      win.document.write("<br><img src='" + canvas.current.toDataURL() + "'/>");
      setTimeout(function () {
        win.print();
      }, 3000);
    }
  };

  var downloadChartData = function downloadChartData(filename) {
    var fileType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "csv";
    var jsondata = [];

    var _loop4 = function _loop4(i) {
      var label = labels[i];
      var row = {};
      Object.defineProperty(row, "label", {
        value: label,
        writable: true,
        configurable: true,
        enumerable: true
      });
      datasets.forEach(function (v, ind) {
        if (v.data[i]) {
          Object.defineProperty(row, v.label, {
            value: v.data[i].toString(),
            writable: true,
            configurable: true,
            enumerable: true
          });
        }
      });
      jsondata.push(row);
    };

    for (var i = 0; i < labels.length; i++) {
      _loop4(i);
    }

    downloadXlSX(jsondata, filename, fileType);
  }; // import XLSX from 'xlsx'


  var downloadXlSX = function downloadXlSX() {
    var jsondata = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ChartExportData";
    var fileType = arguments.length > 2 ? arguments[2] : undefined;

    try {
      var worksheet = _xlsx.default.utils.json_to_sheet(jsondata, {
        dateNF: "dd-mm-YYYY"
      });

      var workbook = {
        Sheets: {
          'data': worksheet
        },
        SheetNames: ['data']
      };

      _xlsx.default.writeFile(workbook, fileName + '_' + new Date().getTime() + "." + (fileType || "csv"), {
        bookType: fileType || "csv",
        type: "array"
      });
    } catch (error) {}
  };

  (0, _react.useEffect)(function () {
    onChartOptions({
      saveImage: canvasSaveImage,
      printImage: canvasPrint,
      dataSave: downloadChartData
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative"
    }
  }, downloadOptions && /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      canvasSaveImage();
    },
    style: {
      marginLeft: "0.1rem",
      backgroundColor: "white",
      borderWidth: "0.1px",
      borderColor: "ButtonFace"
    }
  }, "JPG"), downloadOptions && /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      downloadChartData();
    },
    style: {
      marginLeft: "0.1rem",
      backgroundColor: "white",
      borderWidth: "0.1px",
      borderColor: "ButtonFace"
    }
  }, "CSV"), changeTypes && /*#__PURE__*/_react.default.createElement("select", {
    onChange: function onChange(e) {
      setCharttype(e.target.value === "default" ? null : e.target.value);
    },
    style: {
      marginLeft: "0.1rem",
      backgroundColor: "white",
      borderWidth: "0.1px",
      borderColor: "ButtonFace"
    }
  }, /*#__PURE__*/_react.default.createElement("option", {
    style: {
      backgroundColor: "white",
      borderWidth: "0.1px",
      borderColor: "ButtonFace"
    },
    selected: true,
    value: "line"
  }, "Line"), /*#__PURE__*/_react.default.createElement("option", {
    style: {
      backgroundColor: "white",
      borderWidth: "0.1px",
      borderColor: "ButtonFace"
    },
    value: "bar"
  }, "Bar"), /*#__PURE__*/_react.default.createElement("option", {
    style: {
      backgroundColor: "white",
      borderWidth: "0.1px",
      borderColor: "ButtonFace"
    },
    value: "pie"
  }, "Pie"), /*#__PURE__*/_react.default.createElement("option", {
    style: {
      backgroundColor: "white",
      borderWidth: "0.1px",
      borderColor: "ButtonFace"
    },
    value: "polarArea"
  }, "PolarArea"), /*#__PURE__*/_react.default.createElement("option", {
    style: {
      backgroundColor: "white",
      borderWidth: "0.1px",
      borderColor: "ButtonFace"
    },
    value: "radar"
  }, "Radar"), /*#__PURE__*/_react.default.createElement("option", {
    style: {
      backgroundColor: "white",
      borderWidth: "0.1px",
      borderColor: "ButtonFace"
    },
    value: "default"
  }, "default")), /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    style: {
      position: "relative",
      height: height,
      width: width
    }
  }, /*#__PURE__*/_react.default.createElement("canvas", {
    ref: canvas,
    id: generateUid()
  })));
};

exports.ChartJS = ChartJS;