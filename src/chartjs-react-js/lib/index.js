 
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './index.css';
import SvgView from './SvgView';

export function ChartJSNode({
    type = "line",
    hidden=true,
    indexAxis = "x", //this.props.indexAxis,//yatay ve düşey grafik görünümü için
    label = undefined, //this.datatitle === undefined  "veri" = this.datatitle,//line gibi dataların renk başlıkları aç ma kapamada
    order = undefined, //this.order,// layer katmanı belirleme alt veye üstünde kaldığını gösterme 0 en üst sırayla alta doğru 1 2 3 chart sayısına göre
    data = [], //this.data,//data
    dataViews = [],
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
    hoverBorderWidth = undefined,// hoverBorderWidth mouse üzerine gelince kalınlığı
    hoverBackgroundColor = undefined,//hoverBackgroundColor mouse üzerine gelince rengi
    //noktaların konfigrasyonları
    pointStyle = 'circle', // this.pointStyle, // circle' | 'cross' | 'crossRot' | 'dash' | 'line' | 'rect' | 'rectRounded' | 'rectRot' | 'star' | 'triangle'|HTMLImageElement,
    hitRadius = undefined,//this.hitRadius,
    hoverRadius = 0,//this.hoverRadius,
    rotation = undefined, //this.rotation,	 
    borderDash = undefined,//this.borderDash, //[a,b] =>[5,5] a=çizği uzunluğu b=çizği arası mesafe 
    borderDashOffset = undefined,
    radius = undefined, //this.radius,//point size,
    radiusValue=undefined,
    borderAlign = undefined, //arc line
    hoverOffset = undefined,
    bgColor = undefined,
    bdrColor = undefined,
    categoryPercentage = undefined, // grublarda  genişlik  %si  0-1 arasında dış çerceve
    barPercentage = undefined, // gerub içinde aldığı % göre %si   iç çerceve
    base = undefined,// çizim başlangıc değeri eksene bağlı olup eksen eksen den yüksek değerde olmalıdır.
    linearGradient=undefined,
     barThickness=undefined,
     maxBarThickness=undefined,
     minBarLength=undefined
}) {

    return {
        type:type,
        hidden:hidden,
        indexAxis:indexAxis,
        label:label,
        order:order,
        data:data,
        dataViews:dataViews,
        lineAddViews:lineAddViews,
        id:id,
        //line bar  element konfigrasyonlar
        backgroundColor:backgroundColor,
        borderColor:borderColor,
        borderWidth:borderWidth,
        tension:tension,
        fill:fill,
        spanGaps:spanGaps,
        stepped:stepped,
        hoverBorderWidth:hoverBorderWidth,
        hoverBackgroundColor:hoverBackgroundColor,
        //noktaların konfigrasyonları
        pointStyle:pointStyle,
        hitRadius:hitRadius,
        hoverRadius:hoverRadius,
        rotation:rotation,
        borderDash:borderDash,
        borderDashOffset:borderDashOffset,
        radius:radius,
        radiusValue:radiusValue,
        borderAlign:borderAlign,
        hoverOffset:hoverOffset,
        bgColor:bgColor,
        bdrColor:bdrColor,
        categoryPercentage:categoryPercentage,
        barPercentage:barPercentage,
        base:base,
        linearGradient:linearGradient,
        barThickness:barThickness,
        maxBarThickness:maxBarThickness,
        minBarLength:minBarLength
    }
}

/**
    *  benzersiz id oluşturma
    * @returns 
    */
 export const generateUid=()=>{
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
 }

export const ChartJS =  (
    {
        title = undefined,// basliknull, title //en üst başlık
        titleVisible = true,
        type = "line",
        align = "center", //align
        position = 'top',// position baslikkonumunull, //başlık konumu  type PositionType:stringnull,// 'left' | 'right' | 'top' | 'bottom' | 'chartArea'null,
        titleFont = {
            size: 16,
            fontColor: "black",
            family: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'",
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
            family: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'",
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
            family: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'",
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
            family: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'",
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
      }
) => {
     


    const datasets = [];

    const chartjs={
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

        var letters = "0123456789ABCDEF";
        str = str.replace("#", "").toUpperCase();
        var red = letters.indexOf(str[0]) * 16 + letters.indexOf(str[1]);
        var green = letters.indexOf(str[2]) * 16 + letters.indexOf(str[3]);
        var blue = letters.indexOf(str[4]) * 16 + letters.indexOf(str[5]);
        var alpha = str.length === 8 ? (letters.indexOf(str[6]) * 16 + letters.indexOf(str[7])) / 255 : 1;

        var color = [red, green, blue, alpha.toFixed(2)];

        return color;
    }


    const getRgbCode = (rgb) => {
        var str = null;
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
            var background = new Array(newdataset.data.length);
            var datas = [...newdataset.data];
            var rgb = newdataset.backgroundColor.indexOf("#") >= 0 ? getHexRgbCode(newdataset.backgroundColor) : getRgbCode(newdataset.backgroundColor);//hex yada rgb göre hesapla
            var stepalpha = 0.5 / datas.length; //0.5 kadar alpha step değeri belirleniyor
            var alpha = 1;//alpha değer,
            while (datas.length > 0) {
                var color = "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + alpha.toFixed(2) + ")"; //renk yapılıyor
                var max = Math.max(...datas); //max değer belirleniyor
                var index = newdataset.data.indexOf(max);// mevcut dan index alınıyor
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
       
 
        const poitnBackground = (contex) => {

            var value = contex.raw;
            const { dataset,chart } = contex;
            var id = dataset.id;
            var index = contex.index;
            //sadece görüntieneceklerde value olanları kapatıyoruz
            var item = dataset.dataViews?.filter((v, i) => v.index === index)[0];
            if (item !== undefined) {
                
                if(dataset.linearGradient!==undefined){
                    return onlinearGradient(chart,dataset.linearGradient);
                }
                
                return dataset.backgroundColor;
            }

            if(dataset.linearGradient!==undefined){
                return onlinearGradient(chart,dataset.linearGradient);
            }

            return dataset.bgColor;
        }

        const pointRadius = (ctx) => {
             var value = ctx.raw;
            var index = ctx.index;
            const { dataset } = ctx;
            var id = ctx.type;
            //sadece görüntieneceklerde value olanları kapatıyoruz
            var item = dataset.dataViews.filter((v, i) => v.index === index)[0];
            if (item !== undefined) {
                return item?.radius?item?.radius:8;
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
            newdataset.backgroundColor = poitnBackground;
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

    const chartOptions = () => {
        yAxesPosition = yAxesRightAdd ? "right" : yAxesPosition;
        yAxesPosition = yAxesLeftAdd ? "left" : yAxesPosition;
        if (mobil) {
            var Switdh = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

            var Sheight = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight;
            if (Switdh >= mobilMinSize) {
                responsive = false;
                width = "100%";
            }

        }

        var options = {
            indexAxis: indexAxis,
            responsiveAnimationDuration: 1000,
             responsive: responsive ,
             maintainAspectRatio: false,
             aspectRatio: responsive ? 2 : aspectRatio, //yatay ve düşey oranı belitliyor
             devicePixelRatio: 2,
            layout: {
            padding: layoutPadding
            },
            interaction: {
                intersect:intersect,
                mode:mode, //'point';  'nearest';   'index' 'dataset' 'x' 'y'
                axis: indexAxis
            },
            plugins: {
                title: {
                    text: title, //ana başlık
                    display: titleVisible,
                    aling: align,
                    font: titleFont,
                    color:titleFont.fontColor
                },
                tooltip: {
                    usePointStyle: usePointStyleTooltip,
                    callbacks: tooltipCallbacks,

                },
                legend: {
                    display: islegend,
                    position: position,
                    onClick:onClickLabel,
                    labels: {
                        usePointStyle: usePointStyleLegend,
                        font:labelsFont,
                        color:labelsFont.fontColor,
                        pointStyle:LegendPointStyle,
                    },
                
                }
            }
            ,
            scales: {

                x: {
                    display: xtitle === undefined ? false : true,
                    stacked: xstacked,
                    min: xAxesmin,
                    max: xAxesmax,
                    position: xAxesPosition,
                    backgroundColor: xlabelBackground,
                    grid: {
                        display: xgrid,
                    },
                    title: {
                        display: xtitle === undefined ? false : true,
                        text: xtitle === null ? "" : xtitle,
                        padding: 4,
                        color: xtitleColor,
                    },
                    ticks: {
                        callback: ticksXcallback,
                        display: xtitle === undefined ? false : true,
                        stepSize: xAxesstep,
                        font:xlabelsFont,
                        color:xlabelsFont.fontColor,
                        autoSkip: indexAxis==="x"?autoSkip:true,
                        autoSkipPadding:indexAxis==="x"?autoSkipPadding:false,
                        maxRotation:indexAxis==="x"?maxLabelsRotation:undefined,
                        minRotation:indexAxis==="x"?minLabelsRotation:undefined,
                    },

                },
                y: {
                    display: xtitle === undefined ? false : true,
                    stacked: ystacked,
                    position: yAxesPosition,
                    min: yAxesmin,
                    max: yAxesmax,
                    backgroundColor: ylabelBackground,
                    grid: {
                        display: ygrid === undefined ? true : ygrid,
                    },
                    title: {
                        display: ytitle === undefined ? false : true,
                        text: ytitle === null ? "" : ytitle,
                        padding: 4,
                        color: ytitleColor,
                    },
                    ticks: {
                        callback: ticksYcallback,
                        display: ytitle === undefined ? false : true,
                        stepSize: yAxesstep,
                        font:ylabelsFont,
                        color:ylabelsFont.fontColor,
                        autoSkip: indexAxis==="y"?autoSkip:true,
                        autoSkipPadding:indexAxis==="y"?autoSkipPadding:false,
                        maxRotation:indexAxis==="y"?maxLabelsRotation:undefined,
                        minRotation:indexAxis==="y"?minLabelsRotation:undefined,
                    }
                },
                // x1: {
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

            },


        };


        return options;
    }

    function beforePrintHandler () {
        for (var id in Chart.instances) {
            Chart.instances[id].resize();
        }
    }

    const ArcXYText = (data) => {

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
            return (y0 + value * k);
        }
        return (y0 - value * k);
    }
    const yuzde = (toplam, deger) => {
        return (100 * deger / toplam).toFixed(1);
    }

    const onDrawDropCircle=(chartitem,dataXY=[],radius=10,margin=2,duration=20)=>{
 
        var index=0;
      
         
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
							var ctx = chart.ctx;
							// var chartArea = chart.chartArea;
							//sol üst
							// ctx.fillStyle = backgroundColor;
							//ctx.fillRect(chartArea.left, chartArea.top, (chartArea.right - chartArea.left), (chartArea.bottom - chartArea.top));
							const metasets = chart._metasets;
							const indexAxis = chart.config._config.options.indexAxis;
							const { left, top, right, bottom, height, width } = chart.chartArea;

							for (let ind = 0; ind < metasets.length; ind++) {
								const chartItem = metasets[ind];
								const chartItemData = chartItem.data;
								const parsed = chartItem._parsed;
								const dataViews = chartItem._dataset.dataViews;
								const lineAddViews = chartItem._dataset.lineAddViews;
								const hidden = chartItem._dataset.hidden;
								if (!chartItem) {
									return;
								}
								//console.log(chartItem);
								for (let index = 0; index < chartItemData.length; index++) {
									const point = chartItemData[index];
									//console.log(point);
									var x = point.x;
									var y = point.y;
									var pheight = point.height;
									var color = point.options.borderColor;
									var value = indexAxis === "x" ? parsed[index].y : parsed[index].x;
									var pointStyle = point.options.pointStyle;
									var radius = point.options.radius;
									var textWidth = ctx.measureText(value).width;

									//değerlerin hepsini pozitif yazıyoruz
									if (pointTextAbsvalue) {
										value = typeof value === "number" ? Math.abs(value) : value;
									}

									//--------------------------------ÇİZİM BAŞLANGIÇ YERİ---------------------------------------------
									ctx.save(); //kaydeder

									if (chartItem.type === "pie") {
										const arcXY = ArcXYText(chartItemData[index]);
										if (arcXY) {
											// ctx.fillStyle = "#000";
											// ctx.beginPath();
											// ctx.moveTo(x,y);
											// ctx.lineTo(arcXY.x,arcXY.y);
											// ctx.stroke();
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
										//console.log("line top")
										const k = (y - bottom) / value;
										//console.log(top)
										//console.log(bottom)
										//console.log(k)
										//lineAddViews
										if (lineAddViews) {
											lineAddViews.forEach((element) => {
												var lineY = calcY(chartItemData[0], chartItemData[1], parsed[0].y, parsed[1].y, element.value);

												ctx.strokeStyle = element.backgroundColor;
												ctx.beginPath();
												ctx.moveTo(left, lineY);
												ctx.lineTo(right, lineY);
												ctx.stroke();
											});
										}

										//dataViews
										if (indexAxis === "x") {
											y = y + 2 * radius > bottom ? y - 2 * radius : y + 2 * radius;
											if (x - radius <= left) {
												y = y - 2 * radius;
												x = x + 2 * radius; // : x-radius*0.5;
											}
											radius = 1.5 * radius;
										} else {
											x = x + 2 * radius > right ? x - 2 * radius : x + 2 * radius;
										}
										ctx.translate(x, y);

										//  console.log(chartItem);
										//  console.log("chartItem.hidden");
										//  console.log(chartItem.hidden);

										if (pointText && hidden === false) {
											radius = radius < 13 ? 13 : radius;
											ctx.font = `${radius}px Arial`;
											ctx.fillStyle = "#000";
											ctx.textAlign = "center";

											if (!dataViews) {
												ctx.strokeStyle = "#000";
												textWidth = ctx.measureText(value).width + 2;
												ctx.fillText(value, 5, 0);
												ctx.strokeRect(-textWidth * 0.5, -radius * 0.5 - 2, textWidth, radius + 2);
											} else if (dataViews.filter((v, i) => v.index === index)[0]) {
												var userValue = dataViews.filter((v, i) => v.index === index)[0].value;
												var color = dataViews.filter((v, i) => v.index === index)[0].backgroundColor;
												ctx.strokeStyle = color;
												textWidth = ctx.measureText(userValue ? userValue : value).width + 2;
												const w = textWidth * 0.5;
												var b = 0;
												var px = w + b;
												var py = radius * 0.5 + 2;
												if ((w + x) > right) {
													//layout dışına çıkmaması için kaydırılıyor
													b = w - x + right;
													px = w + b;
												}
												ctx.strokeRect(-px, -py, textWidth, radius + 2);
												ctx.fillText(userValue ? userValue : value, -b, 0);
											}
										}
									}

									if (chartItem.type === "bar") {
										//lineAddViews
										if (lineAddViews) {
											lineAddViews.forEach((element) => {
												var lineY = calcY(chartItemData[0], chartItemData[1], parsed[0].y, parsed[1].y, element.value);
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
											ctx.rotate((-90 * Math.PI) / 180);
										} else {
											ctx.translate(x, y);
											ctx.rotate((0 * Math.PI) / 180);
										}

										if (pointText && !chartItem.hidden) {
											radius = radius > 12 ? 12 : radius;
											ctx.font = `${radius}px Arial`;
											ctx.fillStyle = "#000";
											ctx.textAlign = "center";

											if (!dataViews) {
												ctx.strokeStyle = "#000";
												textWidth = ctx.measureText(value).width + 2;
												ctx.fillText(value, 5, 0);
												ctx.strokeRect(-textWidth * 0.5, -radius * 0.5 - 2, textWidth, radius + 2);
											} else if (dataViews.filter((v, i) => v.index === index)[0]) {
												var userValue = dataViews.filter((v, i) => v.index === index)[0].value;
												var color = dataViews.filter((v, i) => v.index === index)[0].backgroundColor;
												ctx.strokeStyle = color;
												textWidth = ctx.measureText(userValue ? userValue : value).width + 2;
												const w = textWidth * 0.5;
												var b = 0;
												var px = w + b;
												var py = radius + 2;
												if (w + x > right) {
													//layout dışına çıkmaması için kaydırılıyor
													b = w - x + right;
													px = w + b;
												}
												ctx.strokeRect(0, 0, textWidth, radius + 2);
												ctx.fillText(userValue ? userValue : value, w, 0);
											}
										}
									}

									ctx.restore();
								}
							}
						},
					},
					{
						id: "ChartJSBacground",
						beforeDraw: function (chart, args, options) {
							//console.log(chart);
							//console.log(args);
							//console.log(options);
							var ctx = chart.ctx;
							var chartArea = chart.chartArea;
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
							var ctx = chart.ctx;
							// var chartArea = chart.chartArea;
							//sol üst
							// ctx.fillStyle = backgroundColor;
							//ctx.fillRect(chartArea.left, chartArea.top, (chartArea.right - chartArea.left), (chartArea.bottom - chartArea.top));
							const metasets = chart._metasets;
							const indexAxis = chart.config._config.options.indexAxis;
							const { left, top, right, bottom, height, width } = chart.chartArea;

							for (let ind = 0; ind < metasets.length; ind++) {
								const chartItem = metasets[ind];
								const chartItemData = chartItem.data;
								const parsed = chartItem._parsed;
								const label = chartItem.label;
								const visibility = chartItem.hidden | chartItem.visible;
								const dataViews = chartItem._dataset.dataViews;
								if (!chartItem) {
									return;
								}
								//console.log(chartItem);
								for (let index = 0; index < chartItemData.length; index++) {
									const point = chartItemData[index];
									//console.log(point);
									var x = point.x;
									var y = point.y;
									var pheight = point.height;
									var color = point.options.borderColor;
									var value = indexAxis === "x" ? parsed[index].y : parsed[index].x;
									var pointStyle = point.options.pointStyle;
									var radius = point.options.radius;
									var textWidth = ctx.measureText(value);
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
								}
							}

							//animasyon ve data değişim kontrolu yapılıyor
							if (intervalFunction.filter((v, i) => v.id === "ChartJSafterRender")[0]) {
								const intervalItem = intervalFunction.filter((v, i) => v.id === "ChartJSafterRender")[0];
								var update = false;
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

        if (plugins !== null && plugins !== undefined) {
            newplugins = newplugins.concat(plugins);
        }

        return newplugins;

    }


    const addData=(label, data)=> {
        chartmain.data.labels.push(label);
        chartmain.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chartmain.update();
    }
    
    const removeData=(data) =>{
        chartmain.data.labels.pop();
        chartmain.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chartmain.update();
    }

    const canvas = useRef();
    const [chartmain, setChartmain] = useState(null);
     const [charttype, setCharttype] = useState(null);

   
     
  
    

    var ciz=false;
    var draws={
        leftdivider:null,
        rightdivider:null,
        area:null
       };
    const onChartDraws=(ctx,v)=>{
    
        ctx.save();
        switch (v.type) {
          case "leftdivider":
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.setLineDash([5,5])
            ctx.moveTo(v.x, v.y);
            ctx.lineTo(v.x, v.y+v.h);
            ctx.stroke();
            break;
          case "rightdivider":
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.setLineDash([5,5])
            ctx.moveTo(v.x, v.y);
            ctx.lineTo(v.x, v.y+v.h);
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
        
     }
     
    const chartAddEvents=(chartItem= new Chart())=>{
        
    
        const {width,height,top,bottom,right,left} =chartItem.chartArea;

         chartItem.platform.addEventListener(chartItem,"mousedown",(ev)=>{         
            ciz=true;
            draws.leftdivider={x:ev.x,y:top,type:"leftdivider",w:0,h:height,style:chartItem.ctx.fillStyle};
            onChartDraws(chartItem.ctx,draws.leftdivider);
         });

         chartItem.platform.addEventListener(chartItem,"mouseup",(ev)=>{
            
             ciz=false;
             chartItem.clear();
             chartItem.update("none");
         });
 
    
         chartItem.platform.addEventListener(chartItem,"mousemove",(ev)=>{
            chartItem.clear();
            chartItem.stop();
            chartItem.update("none");

 
           
           if(draws.leftdivider!==null&&ciz){
             onChartDraws(chartItem.ctx,draws.leftdivider);
 
             var w =ev.x-draws.leftdivider.x;
             var h =ev.y-draws.leftdivider.y;
             chartItem.ctx.beginPath();
             chartItem.ctx.fillStyle = 'rgba(0, 157, 255,0.3)';
             chartItem.ctx.rect(draws.leftdivider.x, top, w, height);
             chartItem.ctx.fill();
 
             draws.rightdivider={x:ev.x,y:top,type:"rightdivider",w:0,h:height,style:chartItem.ctx.fillStyle};
             
             onChartDraws(chartItem.ctx,draws.rightdivider);
   
            
           }
            
 
         });

    }

   
   
     
 


  

    const canvasSaveImage=()=>{

        if(!canvas?.current){
            return ;
      }
        // var dataURL = this.canvas?.toDataURL("image/jpg", 1.0);
        // var a = document.createElement('a');
        // a.href = dataURL;
        // a.download = filename;
        // document.body.appendChild(a);
        // a.click();

        let downloadLink = document.createElement('a');
        downloadLink.setAttribute('download', 'CanvasAsImage.png');
         let dataURL = canvas?.current?.toDataURL('image/jpg',1.0);
        let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
        downloadLink.setAttribute('href', url);
        downloadLink.click();
    }

    const canvasPrint=()=>{
        var win=window.open();
        if(win.document&&yazdir>1){
            win.document.write("<br><img src='"+canvas.current.toDataURL()+"'/>");

            setTimeout(() => {
                win.print();
            }, 3000);
            
            
        }
       
    }

     const downloadChartData=(filename,fileType="csv")=>{
    
    
        var jsondata = [];
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
           
       }
        
    
     }

    

     useEffect(() => {
        onChartOptions({
            saveImage:canvasSaveImage,
            printImage:canvasPrint,
            dataSave:downloadChartData
       });
     }, [ ])
 
    


    const onChangeType = () => { 

            const index=chartTypes.findIndex(v=>v===charttype)+1;

            if(index<=chartTypes.length-1){
                setCharttype(chartTypes[index]);
            }else{
                setCharttype(chartTypes[0]);
            }

     }
  
 
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
            const data = chartData();
            const options = chartOptions();
            const _plugins = chartPlugins();
            let chartStatus = Chart.getChart(canvas?.current); // <canvas> id
            if (chartStatus !== undefined) {
               chartStatus.destroy();
            }
            var newchart = new Chart(canvas?.current, {
              type:charttype,
              data: data,
              options: options,
              plugins: _plugins,
            });
            setChartmain(newchart);
          } catch (error) {
            console.log(error);
            console.log(chartjs);
          }
      }, [ ]) 

 
      useEffect(() => {
        const ChartRender = () => {
          if (canvas?.current) {
            if (children === null && children === undefined) {
              return null;
            }

            intervalFunction = [];
            const data = chartData();
            const options = chartOptions();
            const _plugins = chartPlugins();
            //  Yüklenmişse sadece güncelle
            if (chartmain && children) {
              intervalFunction?.forEach((v, i) => {
                clearInterval(v.timeout);
              });
              chartmain.data = data;
              chartmain.options = options;
              chartmain.update();
            } 
          }
        };

        ChartRender();
      }, [chartjs,chartmain,charttype]);

    
   
    const Svglist={
        "line":<SvgView name="chart-line" height={"2rem"} fill="#007bff"  />,
        "bar":<SvgView name="chart-bar" height={"2rem"} fill="#007bff"  />,
        "pie":<SvgView name="chart-pie" height={"2rem"} fill="#007bff"  />,
        "polarArea":<SvgView name="chart-area" height={"2rem"} fill="#007bff"  />,
        "radar":<SvgView name="chart-area" height={"2rem"} fill="#007bff"  />,
    }

     return (
        <div className='chartjs'  >
            <div className={className} style={{ position: "relative", height: height, width: width }}>
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

}



 