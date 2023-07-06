 
import React, { memo, useEffect, useRef, useState } from 'react';
import {  Plugin_AxisCrossair, Plugin_BarFloating, Plugin_LineAdd} from './plugins';
import Chart  from 'chart.js/auto';
import SvgView from './SvgView';
import "./index.css";
import { sayiFormatla } from './utils';
 
export function ChartJSNode({
  type = undefined,
  hidden = true,
  yAxisID = undefined,
  yAxisPosition="left",
  xAxisID = undefined,
  xAxisPosition="bottom",
  indexAxis = undefined, //-->this.props.indexAxis,//yatay ve düşey grafik görünümü için
  label = undefined, //-->this.datatitle === undefined  "veri" = this.datatitle,//line gibi dataların renk başlıkları aç ma kapamada
  order = undefined, //-->this.order,// layer katmanı belirleme alt veye üstünde kaldığını gösterme 0 en üst sırayla alta doğru 1 2 3 chart sayısına göre
  data = [], //-->this.data
  dataViews = [],
  onDataViews=(index,value)=>{ return null},
  lineAddViews = [],
  id = Math.round(Math.random() * 1000),
  //line bar  element konfigrasyonlar
  backgroundColor = undefined, //this.backgroundColor,//tarama rengi
  borderColor = undefined, //this.borderColor,//çizgi rengi
  borderWidth = undefined, //this.borderWidth, //dış çiği kalılığı
  tension = 0.000001, //this.lineSmooth  0.4 = 0.000001,//düz ya eğrisel çizgi
  fill = false, //this.fill,//altı tarama şekli
  spanGaps = true,
  stepped = false, //this.steppedLine,// çizgi nasıl olacak
  hoverBorderWidth = undefined, // hoverBorderWidth mouse üzerine gelince kalınlığı
  hoverBackgroundColor = undefined, //hoverBackgroundColor mouse üzerine gelince rengi
  //noktaların konfigrasyonları
  pointStyle = "circle", // this.pointStyle, // circle' | 'cross' | 'crossRot' | 'dash' | 'line' | 'rect' | 'rectRounded' | 'rectRot' | 'star' | 'triangle'|HTMLImageElement,
  hitRadius = undefined, //this.hitRadius,
  hoverRadius = 0, //this.hoverRadius,
  rotation = undefined, //this.rotation,
  borderDash = undefined, //this.borderDash, //[a,b] =>[5,5] a=çizği uzunluğu b=çizği arası mesafe
  borderDashOffset = undefined,
  radius = undefined, //this.radius,//point size,
  radiusValue = undefined,
  borderAlign = undefined, //arc line
  hoverOffset = undefined,
  bgColor = undefined,
  bdrColor = undefined,
  categoryPercentage = undefined, // grublarda  genişlik  %si  0-1 arasında dış çerceve
  barPercentage = undefined, // gerub içinde aldığı % göre %si   iç çerceve
  base = undefined, // çizim başlangıc değeri eksene bağlı olup eksen eksen den yüksek değerde olmalıdır.
  linearGradient = undefined,
  barThickness = undefined,
  maxBarThickness = undefined,
  minBarLength = undefined,
  pointTextDecimalCount = 2,
  pointTextDecimalChar = ".",
  pointTextIsAbove = false,
  yAxesmin=undefined,
  yAxesmax=undefined,
  xAxesmin=undefined,
  xAxesmax=undefined,
  yAxisTitle=undefined,
  xAxisTitle=undefined,
  xGrid=false,
  yGrid=false,
}) {
  return {
    yAxisID : yAxisID,
    xAxisID : xAxisID,
    yAxisPosition:xAxisPosition,
    xAxisPosition:yAxisPosition,
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
    pointTextDecimalCount: pointTextDecimalCount,
    pointTextDecimalChar: pointTextDecimalChar,
    pointTextIsAbove: pointTextIsAbove,
    onDataViews:onDataViews,
    yAxesmin:yAxesmin,
    yAxesmax:yAxesmax,
    xAxesmin:xAxesmin,
    xAxesmax:xAxesmax,
    yAxisTitle:yAxisTitle,
    xAxisTitle:xAxisTitle,
    xGrid:xGrid,
    yGrid:yGrid,
  };
}

/**
    *  benzersiz id oluşturma
    * @returns 
    */
 export const generateUid=()=>{
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
 }

export const ChartJS = memo ((
    {
        title = undefined,// basliknull, title //en üst başlık
        titleVisible = true,
        type = undefined,
        align = "center", //align
        position = 'top',// position baslikkonumunull, //başlık konumu  type PositionType:stringnull,// 'left' | 'right' | 'top' | 'bottom' | 'chartArea'null,
        titleFont = {
            size: 16,
            fontColor: "black",
            family: "'Poppins-Regular','-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'",
            lineHeight: "normal",
            style: "normal",  //"normal" | "italic" | "oblique" | "initial" | "inherit"
            weight:"bold"
        },// fontSizenull, // başlık yazı uzunluğu
        xtitle = undefined,// yataylabelnull, // yatay data adı
        ytitle = undefined,// duseylabelnull, //düşey data adı
        labels = [],// labelsnull,// data nın x adı
        indexAxis = "x",//"x"null, indexAxis //yatay mı düşey mi chart belirleme
        mode="nearest",//'point';  'nearest';   'index' 'dataset' 'x' 'y'
        intersect=false,
        islegend = true,
        backgroundColor = "white",
        plugins = undefined,//plugins
        xstacked = false,
        xAxesmin = undefined,
        xAxesmax = undefined,
        xtitleColor = "black",
        xAxesstep = undefined,
        xlabelsFont = {
            size: 12,
            fontColor: "black",
            family: "'Poppins-Regular','-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'",
            lineHeight: "normal",
            style: "normal",  //"normal" | "italic" | "oblique" | "initial" | "inherit"
            weight:"normal"
        },
        xgrid = true,
        xlabelBackground = "white",
        ystacked = false,
        yAxesmin = undefined,
        yAxesmax = undefined,
        ytitleColor = "black",
        yAxesstep = undefined,
        ylabelsFont = {
            size: 12,
            fontColor: "black",
            family: "'Poppins-Regular','-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'",
            lineHeight: "normal",
            style: "normal",  //"normal" | "italic" | "oblique" | "initial" | "inherit"
            weight:"normal"
        },
        ygrid = true,
        ylabelBackground = "white",
        width = "100%",
        height = "25%",
        aspectRatio = undefined,
        responsive = true,
        yAxesRightAdd = false,
        yAxesLeftAdd = false,
        xAxesPosition = undefined,
        yAxesPosition = undefined,
        pointText = false,
        pointTextAbsvalue=false,
        mobil = false,
        mobilMinSize = 1024,
        children,
        ticksYcallback = (val, index, values) => {   return  indexAxis === "y" ? labels[index] : val },
        ticksXcallback = (val, index, values) => { return indexAxis === "y"?val: labels[index] },
        tooltipCallbacks = undefined,
        style=undefined,
        canvasid="chartJS",
        yazdir=0,
        onClickLabel,
        intervalFunction=[],
        pluginsData=[],
        pointDrop=false,
        layoutPadding=undefined,
        labelsFont= {
            size: 12,
            fontColor: "black",
            family: "'Poppins-Regular','-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'",
            lineHeight: "normal",
            style: "normal",  //"normal" | "italic" | "oblique" | "initial" | "inherit"
            weight:"normal"
        },
        usePointStyleLegend=false,
        usePointStyleTooltip=true,
        LegendPointStyle=undefined,
        onChartOptions=(e)=>{ return e},
        isDownload=false,
        isChangeTypes=false,
        className,
        autoSkip=true,
        autoSkipPadding=false,
        maxLabelsRotation=undefined,
        minLabelsRotation=undefined,
        isLineShowHide=false,
        chartTypes = ["line", "bar", "pie", "polarArea", "radar"],
        isAxisCrossair=false,
        isFloatingBar=false,
        isLineAdd=false,
      }
) => {
     


    const datasets = [];

    const chartjs={
        isAxisCrossair:isAxisCrossair,
        isLineAdd:isLineAdd,
        isFloatingBar:isFloatingBar,
        title :title ,
        titleVisible :titleVisible ,
        type :type ,
        align :align ,
        position :position ,
        titleFont :titleFont ,
        xtitle :xtitle ,
        ytitle :ytitle ,
        labels :labels ,
        indexAxis :indexAxis ,
        islegend :islegend ,
        backgroundColor :backgroundColor ,
        plugins :plugins ,
        xstacked :xstacked ,
        xAxesmin :xAxesmin ,
        xAxesmax :xAxesmax ,
        xtitleColor :xtitleColor ,
        xAxesstep :xAxesstep ,
        xlabelsFont :xlabelsFont ,
        xgrid :xgrid ,
        xlabelBackground :xlabelBackground ,
        ystacked :ystacked ,
        yAxesmin :yAxesmin ,
        yAxesmax :yAxesmax ,
        ytitleColor :ytitleColor ,
        yAxesstep :yAxesstep ,
        ylabelsFont :ylabelsFont ,
        ygrid :ygrid ,
        ylabelBackground :ylabelBackground ,
        width :width ,
        height :height ,
        aspectRatio :aspectRatio ,
        responsive :responsive ,
        yAxesRightAdd :yAxesRightAdd ,
        yAxesLeftAdd :yAxesLeftAdd ,
        xAxesPosition :xAxesPosition ,
        yAxesPosition :yAxesPosition ,
        pointText :pointText ,
        pointTextAbsvalue:pointTextAbsvalue,
        mobil :mobil ,
        mobilMinSize :mobilMinSize ,
        children:children,
        ticksYcallback :ticksYcallback ,
        ticksXcallback :ticksXcallback ,
        tooltipCallbacks :tooltipCallbacks ,
        style:style,
        pointDrop:pointDrop,
        layoutPadding:layoutPadding,
        labelsFont:labelsFont,
        usePointStyleLegend:usePointStyleLegend,
        usePointStyleTooltip:usePointStyleTooltip,
        LegendPointStyle:LegendPointStyle,
        onChartOptions:onChartOptions,
        isDownload:isDownload,
        isChangeTypes:isChangeTypes,
        className:className,
        autoSkip:autoSkip,
        autoSkipPadding:autoSkipPadding,
        maxLabelsRotation:maxLabelsRotation,
        minLabelsRotation:minLabelsRotation,
        isLineShowHide:isLineShowHide,
        chartTypes:chartTypes,
    }

    const getHexRgbCode = (str) => {

        let letters = "0123456789ABCDEF";
        str = str.replace("#", "").toUpperCase();
        let red = letters.indexOf(str[0]) * 16 + letters.indexOf(str[1]);
        let green = letters.indexOf(str[2]) * 16 + letters.indexOf(str[3]);
        let blue = letters.indexOf(str[4]) * 16 + letters.indexOf(str[5]);
        let alpha = str.length === 8 ? (letters.indexOf(str[6]) * 16 + letters.indexOf(str[7])) / 255 : 1;

        let color = [red, green, blue, alpha.toFixed(2)];

        return color;
    }


    const getRgbCode = (rgb) => {
        let str = null;
        if (rgb.indexOf("a") > 0) {
            str = rgb.trim().replace("rgb", "").replace("a", "").replace("(", "").replace(")", "").split(",");
        } else {
            str = rgb.trim().replace("rgb", "").replace("(", "").replace(")", "").split(",");
            str = [...str, "1"]; //alpha
        }

        return str;
    }
    
   

    const chartNodeConvert = (newdataset) => {

        if(charttype){
            newdataset.type=charttype;
          }

        newdataset.radiusValue=typeof newdataset.radius ==="number"?newdataset.radius:undefined;
        

        if (newdataset.type === "doughnut" && !Array.isArray(newdataset.backgroundColor)) {
            let background = new Array(newdataset.data.length);
            let datas = [...newdataset.data];
            let rgb = newdataset.backgroundColor.indexOf("#") >= 0 ? getHexRgbCode(newdataset.backgroundColor) : getRgbCode(newdataset.backgroundColor);//hex yada rgb göre hesapla
            let stepalpha = 0.5 / datas.length; //0.5 kadar alpha step değeri belirleniyor
            let alpha = 1;//alpha değer,
            while (datas.length > 0) {
                let color = "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + alpha.toFixed(2) + ")"; //renk yapılıyor
                let max = Math.max(...datas); //max değer belirleniyor
                let index = newdataset.data.indexOf(max);// mevcut dan index alınıyor
                background[index] = color; // index ge renk atanıyor 
                alpha = alpha - stepalpha; //alpha değeri açılıyor
                datas.splice(datas.indexOf(max), 1); // değer datadan siliniyor
            }
            newdataset.backgroundColor = background;
        }


         
        const onlinearGradient=(chart,dataColor={0:"",0.5:"",1:""})=>{
            const {ctx, chartArea} = chart;

            if (!chartArea) {
              // This case happens on initial chart load
              return null;
            }
          const chartWidth = chartArea.right - chartArea.left;
          const chartHeight = chartArea.bottom - chartArea.top;
          
            // Create the gradient because this is either the first render
            // or the size of the chart has changed
             
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, dataColor[0]);
            gradient.addColorStop(0.5, dataColor[0.5]);
            gradient.addColorStop(1,  dataColor[1]);
           
          return gradient;
        }
       
 
        //  element ve point style   dolgu rengi
        const poitnBackground = (contex, val) => {
                
            const  dataset  = contex.chart.data.datasets[contex.datasetIndex];
            let index = contex.index;
            //sadece görüntieneceklerde value olanları kapatıyoruz
            let item = dataset.dataViews?.filter((v, i) => v.index === index)[0];
            if (item !== undefined) {
                
                if(dataset.linearGradient!==undefined){
                    return onlinearGradient(contex.chart,dataset.linearGradient);
                }
                
                return item?.backgroundColor;
            }

            if(dataset.linearGradient!==undefined){
                return onlinearGradient(contex.chart,dataset.linearGradient);
            }

            return dataset.bgColor;
        }

           //  element ve point style   çerceve rengi
        const poitnBorderColor = (contex, val) => {
          

          const  dataset  = contex.chart.data.datasets[contex.datasetIndex];
             
          let index = contex.p0DataIndex;
          //sadece görüntieneceklerde value olanları kapatıyoruz
          // let item = dataset.dataViews?.filter((v, i) => v.index === index)[0];
          // if (item !== undefined) {
              
          //     if(dataset.linearGradient!==undefined){
          //         return onlinearGradient(contex.chart,dataset.linearGradient);
          //     }
              
          //     return item?.borderColor??item?.backgroundColor??"transparent";
          // }

          // if(dataset.linearGradient!==undefined){
          //     return onlinearGradient(contex.chart,dataset.linearGradient);
          // }

          return dataset.bgColor;
      }

       //  element ve point style  boyutu
        const pointRadius = (ctx) => {
             let value = ctx.raw;
            let index = ctx.index;
            const { dataset } = ctx;
            let id = ctx.type;
            //sadece görüntieneceklerde value olanları kapatıyoruz
            let item = dataset.dataViews.filter((v, i) => v.index === index)[0];
            if (item !== undefined) {
                return item?.radius??8;
            }
            return dataset.radiusValue;
        }

   

        //point text iptal olacak chart şekilleri
        if ("linebarpie".indexOf(newdataset.type) === -1) {
             indexAxis = undefined;
             pointText = false;
             newdataset.radius = undefined;
        }

        if (newdataset.type === "pie") {
            newdataset = {
                type: newdataset.type,
                label: newdataset.label,
                data: newdataset.data,
                backgroundColor: newdataset.backgroundColor,
                hoverOffset: 20,
                dataViews: newdataset.dataViews,
            }

            return newdataset;
        }


        if (newdataset.dataViews !== undefined && newdataset.dataViews.length > 0) {
            newdataset.bgColor = newdataset.backgroundColor;
            newdataset.radius = pointRadius;
            newdataset.backgroundColor=poitnBackground;
            newdataset.borderColor=poitnBackground;
            newdataset.spanGaps= true;
            newdataset.segment= {
              borderColor: poitnBorderColor,
            }
        }

        return newdataset;


    }
 
    const chartData = () => {

        for (const chartnode of React.Children.toArray(children)) {
             
					if (chartnode && typeof chartnode === "object") {
						if (typeof chartnode?.props === "object") {
							datasets.push(chartNodeConvert(Object.assign({}, chartnode.props)));
						}
					}
				}

        if (type === "scatter") {
            return { datasets: datasets };
        }
        return {
            labels: labels,
            datasets: datasets
        }
    }

    const chartOptions = (data) => {
 
      
          

        yAxesPosition = yAxesRightAdd ? "right" : yAxesPosition;
        yAxesPosition = yAxesLeftAdd ? "left" : yAxesPosition;
        if (mobil) {
            let Switdh = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

            let Sheight = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight;
            if (Switdh >= mobilMinSize) {
                responsive = false;
                width = "100%";
            }

        }

        const options = {
          indexAxis: indexAxis,
          responsiveAnimationDuration: 1000,
          responsive: responsive,
          maintainAspectRatio: false,
          aspectRatio: responsive ? 2 : aspectRatio, //yatay ve düşey oranı belitliyor
          devicePixelRatio: 2,
          layout: {
            padding: layoutPadding,
          },
          interaction: {
            intersect: intersect,
            mode: mode, //'point';  'nearest';   'index' 'dataset' 'x' 'y'
            axis: indexAxis,
          },
          plugins: {
            title: {
              text: title, //ana başlık
              display: titleVisible,
              aling: align,
              font: titleFont,
              color: titleFont.fontColor,
            },
            tooltip: {
              usePointStyle: usePointStyleTooltip,
              callbacks: tooltipCallbacks,
            },
            legend: {
              display: islegend,
              position: position,
              onClick: onClickLabel,
              labels: {
                usePointStyle: usePointStyleLegend,
                font: labelsFont,
                color: labelsFont.fontColor,
                pointStyle: LegendPointStyle,
                generateLabels:(chart,item)=>{
                 
                  const legendItems=chart._plugins._init.find(x=>x.plugin.id==="legend").plugin?.defaults?.labels?.generateLabels(chart);;
                
                  return chart._metasets.map((item,ind)=>{
                    const dataset=item._dataset;
                    const legendItem=legendItems[ind];
                    //dataviews olması durumunda legend karda renk düzenini doğru hale getirmek
                    legendItem.fillStyle=typeof dataset.backgroundColor ==="function"?dataset.bgColor:dataset.backgroundColor;
                    legendItem.strokeStyle=typeof dataset.borderColor ==="function"?dataset.bgColor:dataset.borderColor;
                    return legendItem;
                  })

                  
                }
              },
            },
          },
          scales: {
            x:{display:false},
            y:{display:false},
          },
        };

           
       
         
       if(data?.datasets&&data?.datasets.length>0){
         for(const dataset of data.datasets){
            if(dataset.type==="pie"||dataset.type==="polar"||dataset.type==="doughnut"){
               delete options.plugins.legend.labels;
               setCharttype(dataset.type);
              continue;
            }
          const tempAxisY= {
            display:  true,
            stacked: ystacked,
            position: yAxesPosition,
            backgroundColor: ylabelBackground,
            grid: {
              display:true,
            },
            title: {
              display: true,
              padding: 4,
              color: ytitleColor,
            },
            ticks: {
              
               callback: ticksYcallback,
              align:"center",
              display:  true,
              stepSize: yAxesstep,
              font: ylabelsFont,
              color: ylabelsFont.fontColor,
              autoSkip: indexAxis === "y" ? autoSkip : true,
              autoSkipPadding: indexAxis === "y" ? autoSkipPadding : false,
              maxRotation: indexAxis === "y" ? maxLabelsRotation : undefined,
              minRotation: indexAxis === "y" ? minLabelsRotation : undefined,
            } 
          };
          const tempAxisX=  {
            display:  true,
            stacked: xstacked,
            position: xAxesPosition,
            backgroundColor: xlabelBackground,
            grid: {
              display: true,
            },
            title: {
              display:   true,
              padding: 4,
              color: xtitleColor,
            },
            ticks: {
              callback: ticksXcallback,
              display: true,
              stepSize: xAxesstep,
              align:"center",
              font: xlabelsFont,
              color: xlabelsFont.fontColor,
              autoSkip: indexAxis === "x" ? autoSkip : true,
              autoSkipPadding: indexAxis === "x" ? autoSkipPadding : false,
              maxRotation: indexAxis === "x" ? maxLabelsRotation : undefined,
              minRotation: indexAxis === "x" ? minLabelsRotation : undefined,
            },
           
          }
              //  farklı aynı AxisId den farklı max ve min var sa 
              const myMax= data.datasets.filter(x=>x.yAxisID===dataset.yAxisID).map(x=>x?.yAxesmax??yAxesmax);
              const myMin= data.datasets.filter(x=>x.yAxisID===dataset.yAxisID).map(x=>x?.yAxesmin??yAxesmin);
              const mxMax= data.datasets.filter(x=>x.xAxisID===dataset.xAxisID).map(x=>x?.xAxesmax??xAxesmax);
              const mxMin= data.datasets.filter(x=>x.xAxisID===dataset.xAxisID).map(x=>x?.xAxesmin??xAxesmin);
              if(indexAxis==="x"){
                tempAxisY.max=isNaN(Math.max(...myMax))?undefined:Math.max(...myMax);
                tempAxisY.min=isNaN(Math.min(...myMin))?undefined:Math.min(...myMin);
              }
              if(indexAxis==="y"){
                tempAxisX.max=isNaN(Math.max(...mxMax))?undefined:Math.max(...mxMax);
                tempAxisX.min=isNaN(Math.min(...mxMin))?undefined:Math.min(...mxMin);
              }
              
             

            if((dataset.yAxisID === "y"||!dataset.yAxisID)&&! options.scales["y1"] ){
              tempAxisY.position=dataset?.yAxisPosition??yAxesPosition;
              tempAxisY.title=dataset.yAxisTitle;
              tempAxisY.grid.display=dataset.yGrid??false;
              options.scales["y1"]=tempAxisY;
            }
           
            if((dataset.xAxisID === "x"||!dataset.xAxisID) &&! options.scales["x1"]){
             
              tempAxisX.position=dataset?.xAxisPosition??xAxesPosition;
              tempAxisX.title=dataset.xAxisTitle;
              tempAxisX.grid.display=dataset.xGrid??false;

              options.scales["x1"]=tempAxisX;
            }

            if (dataset.yAxisID !== "y" && dataset.yAxisID&&! options.scales[dataset.yAxisID]) {
             
              tempAxisY.position=dataset?.yAxisPosition??yAxesPosition;
              tempAxisY.title=dataset.yAxisTitle;
              tempAxisY.grid.display=dataset.yGrid??false;  
              options.scales[dataset.yAxisID]=tempAxisY;
               
            }

            if (dataset.xAxisID !== "x" && dataset.xAxisID&&! options.scales[dataset.xAxisID]) {
             
              tempAxisX.position=dataset?.xAxisPosition??xAxesPosition;
              tempAxisX.title=dataset.xAxisTitle;
              tempAxisX.grid.display=dataset.xGrid??false;
              options.scales[dataset.xAxisID]=tempAxisX;
            }
        }
       }
       
      console.log(options)
;           
       

        return options;
    }
 

    const ArcXYText = (data) => {

        let px = data.x;
        let py = data.y;
        let angle = data.circumference;
        let startAngle = data.startAngle;
        let endAngle = data.endAngle;
        let diameter = data.outerRadius;
        let totalAngle = endAngle - angle * 0.5;
        let aci = 0;

        if (startAngle === endAngle) {
            return false;
        }

        //90-180
        if (-Math.PI * 0.5 <= totalAngle && totalAngle < 0) {
            aci = Math.abs(totalAngle);
            py = py - (diameter * 0.5 * Math.sin(aci));
            px = px + (0.5 * diameter * Math.cos(aci));
        }

        //180-270
        if (Math.PI * 0.5 >= totalAngle && totalAngle > 0) {
            aci = Math.abs(totalAngle);
            py = py + diameter * 0.5 * Math.sin(aci);
            px = px + 0.5 * diameter * Math.cos(aci);
        }

        //270-360
        if (Math.PI * 0.5 < totalAngle && totalAngle <= Math.PI && totalAngle > 0) {
            aci = Math.PI - Math.abs(totalAngle);
            py = py + diameter * 0.5 * Math.sin(aci);
            px = px - 0.5 * diameter * Math.cos(aci);
        }

        //360-90
        if (Math.PI * 1.5 >= totalAngle && totalAngle > Math.PI && totalAngle > 0) {
            aci = Math.abs(totalAngle) - Math.PI;
            py = py - diameter * 0.5 * Math.sin(aci);
            px = px - 0.5 * diameter * Math.cos(aci);
        }

        return { x: px, y: py };
    }

    const calcY = (p1, p2, val1, val2, value) => {
        let k = 0;
        let y0 = 0;
        let x0 = 0;
        if (val2 < 0) {
            val2 = -val2;
        }
        if (val2 < 0) {
            val1 = -val1;
        }
        let x1 = p1.x;
        let x2 = p2.x;
        let y1 = p1.y;
        let y2 = p2.y;
        k = (y2 - y1) / (val1 - val2);
        y0 = y1 + val1 * k;

        if (value < 0) {
            return (y0 + value * k);
        }
        return (y0 - value * k);
    }
    const yuzde = (toplam, deger) => {
        return (100 * deger / toplam).toFixed(1);
    }

    const onDrawDropCircle=(chartitem,dataXY=[],radius=10,margin=2,duration=20)=>{
 
        let index=0;
      
         
           return  setInterval(() => {
    
                    chartitem.clear();
                    chartitem.update("none");
                    chartitem.ctx.save(); 
                    index++;
                     
                   // chart.ctx.shadowBlur = 15;
                  
                    dataXY.forEach((v,i)=>{
                        chartitem.ctx.lineWidth=1;
                        chartitem.ctx.filter = `blur(${margin}px)`;
                        chartitem.ctx.strokeStyle = v.color?v.color:"red";
                        chartitem.ctx.beginPath();
                        chartitem.ctx.arc(v.x, v.y, index*margin, 0, 2 * Math.PI);
                        chartitem.ctx.stroke();
                        chartitem.ctx.closePath();
    
                    })
                  
                   
                   chartitem.ctx.restore(); 
                    
                   if(index===radius){
                       index=0;
                   }
    
                },  duration);
               
                  
        
    
    }

    const onPointCalc = (p1,p2,width,height) => {
        
        

    }
    
    
    const numberDecimalFixed = (value = 0, count = 2, pointTextDecimalChar = ".") => {
      if (count === 0) {
        return Number.parseInt(value);
      } else {
        return (Math.round(value * Math.pow(10, count)) / Math.pow(10, count))
          .toFixed(count)
          .replaceAll(".", pointTextDecimalChar);
      }
    };

    const getShortFont=(font={})=>{
     const def={
      size: 12,
      family:  "Arial",
      weight:"bold"
    }
    font=font??def;

    return  `${font.weight} ${font.size}px ${font.family}   `;
  
  }

    const onPointTextCompare = (chart,datasetIndex,dataIndex) => {
        const indexAxis = chart.config._config.options.indexAxis;
       const { left, top, right, bottom, height, width } = chart.chartArea;
        const ctx = chart.ctx;
       const metasets = chart._metasets;
       const points=metasets.map((dataset,i)=>{
            
          let value = dataset.indexAxis === "x" ? dataset._parsed[dataIndex].y : dataset._parsed[dataIndex].x;
          let textWidth = ctx.measureText(value).width;
          let textHeight = ctx.measureText(value).fontBoundingBoxAscent;
          let x = dataset.data[dataIndex].x;
          let y = dataset.data[dataIndex].y;

          return {x,y,textHeight,textWidth,value}
       });

       const currentPoint=points[datasetIndex];
       points.sort((a, b) => b.y - a.y)

       if(points[points.length-1].value===currentPoint.value){
      
         return 1;

       }

       if(points[0].value===currentPoint.value){
      
        return -1;

      }

      
        return 0;

       
     

    }
    
    const chartPlugins = () => {

      let newplugins = [
        {
          id: "ChartJSPointText",
          afterDraw: function (chart, args, options) {
            if (pointText === false) {
              return;
            }

            //console.log(chart);
            //console.log(args);
            //console.log(options);
            let ctx = chart.ctx;
            // let chartArea = chart.chartArea;
            //sol üst
            // ctx.fillStyle = backgroundColor;
            //ctx.fillRect(chartArea.left, chartArea.top, (chartArea.right - chartArea.left), (chartArea.bottom - chartArea.top));
            const metasets = chart._metasets;
            const indexAxis = chart.config._config.options.indexAxis;
            const { left, top, right, bottom, height, width } = chart.chartArea;
          
            const countItems=metasets.length;
            let datasetIndex=0;
            for (const chartItem of metasets) {
 
              const chartItemData = chartItem.data;
              const parsed = chartItem._parsed;
              const dataViews = chartItem._dataset.dataViews;
              const lineAddViews = chartItem._dataset.lineAddViews;
              const hidden = chartItem.hidden;
              const pointTextDecimalCount = chartItem._dataset.pointTextDecimalCount;
              const pointTextDecimalChar = chartItem._dataset.pointTextDecimalChar;
              const pointTextIsAbove = chartItem._dataset.pointTextIsAbove;
              const onDataViews=chartItem._dataset.onDataViews;
              const isDataViews = chartItem._dataset?.dataViews?.length>0 ||onDataViews;
              if (!chartItem) {
                return;
              }
             


                
              for (const point of chartItemData) {
                let x = point.x;
                let y = point.y;
                const index=point?.$context?.dataIndex ||chartItemData.findIndex(x=>x===point)
                let pheight = point.height;
                let color = point.options.borderColor;
                let value = indexAxis === "x" ? parsed[index].y : parsed[index].x;
                let pointStyle = point.options.pointStyle;
                let radius = point.options.radius;
                let textWidth = ctx.measureText(value).width;
                let textHeight = ctx.measureText(value).fontBoundingBoxAscent;
              
                const ItemDataViews=dataViews?.find(x=>x.index===index)||(typeof onDataViews==="function"?onDataViews(index,value):null);
                //değerlerin hepsini pozitif yazıyoruz
                if (pointTextAbsvalue) {
                  value = typeof value === "number" ? Math.abs(value) : value;
                }

                //--------------------------------ÇİZİM BAŞLANGIÇ YERİ---------------------------------------------
                ctx.save(); //kaydeder

                if (chartItem.type === "pie") {
                  const arcXY = ArcXYText(chartItemData[index]);
                  if (arcXY) {
                    const total = chartItem.total;
                    value = parsed[index];
                    x = arcXY.x;
                    y = arcXY.y;
                    ctx.translate(x, y);
                    if (pointText && !chartItem.hidden) {
                      ctx.font = `bold ${radius ? radius : 14}px sans-serif`;
                      ctx.fillStyle = "#000";
                      ctx.textAlign = "center";
                      ctx.fillText(yuzde(total, value), 0, 0);
                    }
                  }
                }

                if (chartItem.type === "line") {
                  ctx.strokeStyle = "transparent";
                
                  //console.log(top)
                  //console.log(bottom)
                  //console.log(k)
                  //lineAddViews
                  if (lineAddViews) {
                    lineAddViews.forEach((element) => {
                      let lineY = calcY(chartItemData[0], chartItemData[1], parsed[0].y, parsed[1].y, element.value);

                      ctx.strokeStyle = element.backgroundColor;
                      ctx.beginPath();
                      ctx.moveTo(left, lineY);
                      ctx.lineTo(right, lineY);
                      ctx.stroke();
                    });
                  }

                 
                  ctx.translate(x, y);
                  
              
                  if (pointText && !hidden ) {
                    
                    
                    ctx.fillStyle = "#000";
                    ctx.textAlign = "center";

                    if (!ItemDataViews&&!isDataViews) {
                      ctx.strokeStyle = "#000";
                      textWidth = ctx.measureText(value).width + 2;
                      const fixedvalue = numberDecimalFixed(value, pointTextDecimalCount, pointTextDecimalChar);

                      ctx.fillText(fixedvalue, 5, 0);
                      ctx.strokeRect(-textWidth * 0.5, -radius * 0.5 - 2, textWidth, radius + 2);
                    } 
                    
                    if (ItemDataViews) {
                      let userValue = ItemDataViews.value;
                      let color = ItemDataViews.backgroundColor;
                      ctx.strokeStyle = color??"TRANSPARENT";
                      textWidth = ctx.measureText(userValue ? userValue : value).width + 2;

                       
                     
                      const w = textWidth ;
                      let b = 0;
                      let px = 0;
                      let py = 0;
                      if (w + x > right) {
                        //layout dışına çıkmaması için kaydırılıyor
                         px=-textWidth*0.25
                      }
                       
                      
                      const position=onPointTextCompare(chart,datasetIndex,index);

                       if(position===-1){
                          py=textHeight+radius;
                       }
                    
                       if(position===1){
                         py=-radius-textHeight;
                      }

                      const fixedvalue = numberDecimalFixed(userValue ?? value, pointTextDecimalCount, pointTextDecimalChar);
                      ctx.font =getShortFont(ItemDataViews?.font??null);
                      ctx.fillText(fixedvalue, px,py);
                    }
                  }
                }

                if (chartItem.type === "bar") {
                  ctx.strokeStyle = "transparent";
                   
                  if (lineAddViews) {
                    lineAddViews.forEach((element) => {
                      let lineY = calcY(chartItemData[0], chartItemData[1], parsed[0].y, parsed[1].y, element.value);
                      ctx.lineWidth = 2;
                      ctx.strokeStyle = element.backgroundColor;
                      ctx.beginPath();
                      ctx.moveTo(left + 5, lineY);
                      ctx.lineTo(right - 5, lineY);
                      ctx.stroke();
                      ctx.font = `${20}px Arial`;
                      ctx.fillStyle = element.backgroundColor;
                      ctx.fillText("GSYH=" + element.value, left + 5, lineY + 15);
                    });
                  }
                  
                  if (indexAxis === "x") {
                      ctx.translate(x, y);
                    // ctx.rotate((-90 * Math.PI) / 180);
                  } else {
                    ctx.translate(x, y);
                    ctx.rotate((0 * Math.PI) / 180);
                  }
                   
                  if (pointText && !hidden) {
                     
                  
                    const fixedvalue = numberDecimalFixed(value, pointTextDecimalCount, pointTextDecimalChar);

                    if (!ItemDataViews&&!isDataViews) {
                      ctx.strokeStyle = "#000";
                      textWidth = ctx.measureText(value).width + 2;
                      textHeight = ctx.measureText(value).fontBoundingBoxAscent + 2;
                     
                      ctx.fillText(fixedvalue, textWidth*0.5+2, 0);
                      ctx.strokeRect(-textWidth * 0.5, -radius * 0.5 - 2, textWidth, radius + 2);
                    } 
                    
                    if (ItemDataViews) {
                      const userValue = ItemDataViews.value;

                    

                      textWidth = ctx.measureText(userValue ? userValue : value).width + 2;
                      textHeight = ctx.measureText(value).fontBoundingBoxAscent + 2;

                      const w = textWidth ;
                      let b = 0;
                      let px = 0;
                      let py = 0;
                      if (w + x > right) {
                        //layout dışına çıkmaması için kaydırılıyor
                         px=-textWidth*0.25
                      }
                       
                      const fixedvalue = numberDecimalFixed(
                        userValue ?? value,
                        pointTextDecimalCount,
                        pointTextDecimalChar
                      );
                      
                      
                      const position=onPointTextCompare(chart,datasetIndex,index);

                       if(position===-1){
                          py=textHeight*0.5;
                       }
                    
                       if(position===1){
                         py=0;
                      }

                      ctx.font =getShortFont(ItemDataViews?.font??null);
                      ctx.fillStyle = "#000";
                      ctx.textAlign = "center";
                      ctx.fillText(fixedvalue, px, py);
                    }
                  }
                }

                ctx.restore();
                 
              }
              datasetIndex++;
            }
          },
        },
        {
          id: "ChartJSBacground",
          beforeDraw: function (chart, args, options) {
            //console.log(chart);
            //console.log(args);
            //console.log(options);
            let ctx = chart.ctx;
            let chartArea = chart.chartArea;
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
          },
        },
        {
          id: "ChartJSafterRender",
          afterRender: function (chart, args, options) {
            if (pointDrop === false) {
              return;
            }

            const dataXY = [];

            //console.log(chart);
            //console.log(args);
            //console.log(options);
            let ctx = chart.ctx;
            // let chartArea = chart.chartArea;
            //sol üst
            // ctx.fillStyle = backgroundColor;
            //ctx.fillRect(chartArea.left, chartArea.top, (chartArea.right - chartArea.left), (chartArea.bottom - chartArea.top));
            const metasets = chart._metasets;
            const indexAxis = chart.config._config.options.indexAxis;
            const { left, top, right, bottom, height, width } = chart.chartArea;
            let ind = 0;
            for (const chartItem of metasets) {
              
              const chartItemData = chartItem.data;
              const parsed = chartItem._parsed;
              const label = chartItem.label;
              const visibility = chartItem.hidden | chartItem.visible;
              const dataViews = chartItem._dataset.dataViews;
              const pointTextDecimalCount = chartItem._dataset.pointTextDecimalCount;
              const pointTextDecimalChar = chartItem._dataset.pointTextDecimalChar;
              const pointTextIsAbove = chartItem._dataset.pointTextIsAbove;
              if (!chartItem) {
                return;
              }
              //console.log(chartItem);
              let index = 0;
              for (const point of chartItemData) {
                //console.log(point);
                let x = point.x;
                let y = point.y;
                let pheight = point.height;
                let color = point.options.borderColor;
                let value = indexAxis === "x" ? parsed[index].y : parsed[index].x;
                let pointStyle = point.options.pointStyle;
                let radius = point.options.radius;
                let textWidth = ctx.measureText(value);
                const pointkey = label + ind + index;
                //değerlerin hepsini pozitif yazıyoruz
                if (pointTextAbsvalue) {
                  value = typeof value === "number" ? Math.abs(value) : value;
                }

                //--------------------------------ÇİZİM BAŞLANGIÇ YERİ---------------------------------------------

                if (chartItem.type === "pie") {
                  const arcXY = ArcXYText(chartItemData[index]);
                  if (arcXY) {
                    const total = chartItem.total;
                    value = parsed[index];

                    x = arcXY.x;
                    y = arcXY.y;

                    if (pointDrop && visibility) {
                      dataXY.push({ x: x, y: y, key: pointkey, color: "red" });
                    }
                  }
                }

                if (chartItem.type === "line") {
                  if (pointDrop && visibility) {
                    if (dataViews.filter((v, i) => v.index === index)[0]) {
                      const pointColor = dataViews.filter((v, i) => v.index === index)[0].dropColor;
                      dataXY.push({ x: x, y: y, key: pointkey, color: pointColor });
                    }
                  }
                }

                if (chartItem.type === "bar") {
                  if (pointDrop && visibility) {
                    if (dataViews.filter((v, i) => v.index === index)[0]) {
                      const pointColor = dataViews.filter((v, i) => v.index === index)[0].dropColor;
                      dataXY.push({ x: x, y: y, key: pointkey, color: pointColor });
                    }
                  }
                }

                index++;
              }
              ind++;
            }

            //animasyon ve data değişim kontrolu yapılıyor
            if (intervalFunction.filter((v, i) => v.id === "ChartJSafterRender")[0]) {
              const intervalItem = intervalFunction.filter((v, i) => v.id === "ChartJSafterRender")[0];
              let update = false;
              intervalItem.dataXY.forEach((v, i) => {
                if ((v.x !== dataXY[i]?.x) | (v.y !== dataXY[i]?.y) | (v.key !== dataXY[i]?.key)) {
                  update = true;
                }
              });

              // değişim varsa
              if (update) {
                //animasyon duruduruluyor
                clearInterval(intervalItem.timeout);
                intervalFunction = [];
                //yeni anismasyon yükleniyor
                const timeout = onDrawDropCircle(chart, dataXY, 10, 2, 100);
                intervalFunction.push({ id: "ChartJSafterRender", dataXY: dataXY, timeout: timeout });
              }
            }

            //hiç anismasyon yok sa
            if (!intervalFunction.filter((v, i) => v.id === "ChartJSafterRender")[0] && dataXY.length > 0) {
              const timeout = onDrawDropCircle(chart, dataXY, 10, 2, 100);
              intervalFunction.push({ id: "ChartJSafterRender", dataXY: dataXY, timeout: timeout });
            }
          },
        },
      ];
      if(isAxisCrossair){
        newplugins = newplugins.concat(Plugin_AxisCrossair());
      }
      if(isFloatingBar){
        newplugins = newplugins.concat(Plugin_BarFloating());
      }
      if(isLineAdd){
        newplugins = newplugins.concat(Plugin_LineAdd());
      }
      if (plugins !== null && plugins !== undefined) {
          newplugins = newplugins.concat(plugins);
      }

      return newplugins;

  }



  

    const canvas = useRef();
    const [chartmain, setChartmain] = useState(null);
    const [charttype, setCharttype] = useState(type);

    
     
    const canvasSaveImage=()=>{

        if(!canvas?.current){
            return ;
       }
        
        let downloadLink = document.createElement('a');
        downloadLink.setAttribute('download', 'CanvasAsImage.png');
         let dataURL = canvas?.current?.toDataURL('image/jpg',1.0);
        let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
        downloadLink.setAttribute('href', url);
        downloadLink.click();
    }

    const canvasPrint=()=>{
        let win=window.open();
        if(win.document&&yazdir>1){
            win.document.write("<br><img src='"+canvas.current.toDataURL()+"'/>");

            setTimeout(() => {
                win.print();
            }, 3000);
            
            
        }
       
    }

     const downloadChartData=(filename,fileType="csv")=>{
    
    
        let jsondata = [];
        for (let i = 0; i <  labels.length; i++) {
            
          const label =  labels[i];
    
          const row = {};
    
          Object.defineProperty(row, "label", {
            value: label,
            writable: true,
            configurable: true,
            enumerable:true,
          });
    
          datasets.forEach((v, ind) => {
             if (v.data[i]) {
              Object.defineProperty(row, v.label, {
                value: v.data[i].toString(),
                writable: true,
                configurable: true,
                enumerable:true,
              });
            }
          });
    
          jsondata.push(row);
        }
    
        downloadXlSX(jsondata, filename,fileType);
    }
    
        // import XLSX from 'xlsx'
        
      const downloadXlSX= (jsondata=[],fileName="ChartExportData",fileType)=>{
          
       try {
        import('xlsx').then(XLSX => {
            const worksheet = XLSX.utils.json_to_sheet(jsondata,{dateNF:"dd-mm-YYYY"});
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
             XLSX.writeFile(workbook,fileName + '_' + new Date().getTime()+"."+(fileType||"csv"),{bookType:(fileType||"csv"),type:"array"});
            
         })
        
       } catch (error) {
         console.log(error)
       }
        
    
     }

    

     useEffect(() => {
        onChartOptions({
            saveImage:canvasSaveImage,
            printImage:canvasPrint,
            dataSave:downloadChartData
       });
     }, [ ])
 
    


   
 
     const chartLinesShowHide = () => {
        if (chartmain) {
          chartmain.data.datasets.forEach(function (ds) {
            ds.hidden = !ds.hidden;
          });
          chartmain.update();
          
        }

      };


      useEffect(() => {
        try {

            if(!canvas?.current){
              return;
            }

            if (children === null && children === undefined) {
              return null;
            }

            const data = chartData();
            const options = chartOptions(data);
            const _plugins = chartPlugins();
            // let chartStatus = Chart.getChart(canvas?.current); // <canvas> id
            // if (chartStatus !== undefined) {
            //    chartStatus.destroy();
            // }
            
            if(!chartmain){
              let newchart = new Chart(canvas?.current, {
                 data: data,
                 options: options,
                 plugins: _plugins,
              });
              setChartmain(newchart);
            }else{
              intervalFunction?.forEach((v, i) => {
                clearInterval(v.timeout);
              });
              chartmain.reset();
              chartmain.config.type=charttype;
              chartmain.data = data;
              chartmain.options = options;
              chartmain.update();
            }
            
             
          } catch (error) {
            console.log(error);
           }
      }, [chartjs,chartmain,charttype]) 

  
    const Svglist={
        "line":<SvgView name="chart-line" height={"2rem"} fill="#007bff"  />,
        "bar":<SvgView name="chart-bar" height={"2rem"} fill="#007bff"  />,
        "pie":<SvgView name="chart-pie" height={"2rem"} fill="#007bff"  />,
        "polarArea":<SvgView name="chart-area" height={"2rem"} fill="#007bff"  />,
        "radar":<SvgView name="chart-area" height={"2rem"} fill="#007bff"  />,
    }

     return (
        <div className='chartjs'  >
            <div className={className} style={{ backgroundColor:'transparent',position: "relative", height: height, width: width }}>
                <canvas ref={canvas}       ></canvas>
            </div>
            <div className='chartjs-menu'>
            {isLineShowHide && <div className='chartjs-button'   onClick={(e) =>{chartLinesShowHide()}}    ><SvgView name="eye-slash" height={"2rem"} fill="#007bff"  /></div>}
            {isDownload && <div className='chartjs-button' onClick={() => { canvasSaveImage() }}    > <SvgView name="file-image" height={"2rem"} fill="#007bff"  /></div>}
            {isDownload && <div className='chartjs-button' onClick={() => { downloadChartData() }}   ><SvgView name="file-excel" height={"2rem"} fill="#007bff"  /></div>}
            {isChangeTypes &&chartTypes.map((v,i)=>{
                return(<div className='chartjs-button' key={i} onClick={() => setCharttype(v)}   >{Svglist[v]}</div>)
            })}
            </div>
           
        </div>

    )

});
 


 