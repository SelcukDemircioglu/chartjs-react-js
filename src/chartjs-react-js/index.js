import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
 


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
    linearGradient=undefined
}) {

    return {}
}

/**
    *  benzersiz id oluşturma
    * @returns 
    */
 export const generateUid=()=>{
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
 }

export const ChartJS = (
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
        ticksXcallback = (val, index, values) => { return  labels[index] },
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
      }
) => {
    var id=0;
    
 

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
        labelsFont:labelsFont
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
            var item = dataset.dataViews.filter((v, i) => v.index === index)[0];
            if (item !== undefined) {
                
                if(dataset.linearGradient!==undefined){
                    return onlinearGradient(chart,dataset.linearGradient);
                }
                
                return item.backgroundColor;
            }

            if(dataset.linearGradient!==undefined){
                return onlinearGradient(chart,dataset.linearGradient);
            }

            return dataset.bgColor;
        }

        const pointRadius = (ctx) => {
            debugger;
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
                backgroundColor: poitnBackground,
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
              if(chartnode.props){
                datasets.push(chartNodeConvert(Object.assign({}, chartnode.props)));
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
            //    responsiveAnimationDuration: 1000,
             responsive: responsive ,
            //  maintainAspectRatio: responsive,
            // aspectRatio: responsive ? 2 : aspectRatio, //yatay ve düşey oranı belitliyor
            //  devicePixelRatio: responsive ?1:2,
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
       console.log("dataXY")
        console.log(dataXY);
         
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
                                        ctx.font = `bold ${radius ? radius : 14}px sans-serif`
                                        ctx.fillStyle = "#000";
                                        ctx.textAlign = 'center';
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

                                    lineAddViews.forEach(element => {


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
                                    y = (y + 2 * radius) > bottom ? (y - 2 * radius) : (y + 2 * radius);
                                    if ((x - radius) <= left) {
                                        y = y - 2 * radius;
                                        x = x + 2 * radius;// : x-radius*0.5;
                                    }
                                    radius = 1.5 * radius;

                                }
                                else {
                                    x = (x + 2 * radius) > right ? (x - 2 * radius) : (x + 2 * radius);

                                }
                                ctx.translate(x, y);

                                //  console.log(chartItem);
                                //  console.log("chartItem.hidden");
                                //  console.log(chartItem.hidden);

                                if (pointText && hidden === false) {
                                    radius = radius < 13 ? 13 : radius;
                                    ctx.font = `${radius}px Arial`
                                    ctx.fillStyle = "#000";
                                    ctx.textAlign = 'center';


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
                                        if ((w + x) > right) {  //layout dışına çıkmaması için kaydırılıyor
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


                                    lineAddViews.forEach(element => {


                                        var lineY = calcY(chartItemData[0], chartItemData[1], parsed[0].y, parsed[1].y, element.value);
                                        ctx.lineWidth = 2;
                                        ctx.strokeStyle = element.backgroundColor;
                                        ctx.beginPath();
                                        ctx.moveTo(left + 5, lineY);
                                        ctx.lineTo(right - 5, lineY);
                                        ctx.stroke();
                                        ctx.font = `${20}px Arial`
                                        ctx.fillStyle = element.backgroundColor;
                                        ctx.fillText("GSYH=" + element.value, left + 5, lineY + 15);
                                    });

                                }

                                if (indexAxis === "x") {
                                    ctx.translate(x, y);
                                    ctx.rotate(-90 * Math.PI / 180);

                                } else {
                                    ctx.translate(x, y);
                                    ctx.rotate(0 * Math.PI / 180);
                                }

                                if (pointText && !chartItem.hidden) {

                                    radius = radius > 12 ? 12 : radius;
                                    ctx.font = `${radius}px Arial`
                                    ctx.fillStyle = "#000";
                                    ctx.textAlign = 'center';


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
                                        if ((w + x) > right) {  //layout dışına çıkmaması için kaydırılıyor
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


                }
            },
            {
                id: "ChartJSBacground", beforeDraw: function (chart, args, options) {

                    //console.log(chart);
                    //console.log(args);
                    //console.log(options);
                    var ctx = chart.ctx;
                    var chartArea = chart.chartArea;
                    ctx.fillStyle = backgroundColor;
                    ctx.fillRect(chartArea.left, chartArea.top, (chartArea.right - chartArea.left), (chartArea.bottom - chartArea.top));

                }
            },
            { id:"ChartJSafterRender",afterRender: function(chart, args, options) {
      
    
              

                if(pointDrop===false){
                    return;
                }

               
                const dataXY=[];
                 
               //console.log(chart);
               //console.log(args);
               //console.log(options);
               var ctx = chart.ctx;
               // var chartArea = chart.chartArea;
               //sol üst
              // ctx.fillStyle = backgroundColor;
               //ctx.fillRect(chartArea.left, chartArea.top, (chartArea.right - chartArea.left), (chartArea.bottom - chartArea.top));
               const metasets=chart._metasets;
               const indexAxis=chart.config._config.options.indexAxis;
               const {left,top,right,bottom,height,width}=chart.chartArea;
               
              for (let ind = 0; ind < metasets.length; ind++) {
                 const chartItem=metasets[ind];
                const chartItemData=chartItem.data;
                const parsed=chartItem._parsed;
                const label=chartItem.label;
                const visibility=chartItem.hidden|chartItem.visible;
                const dataViews=chartItem._dataset.dataViews;
                 if(!chartItem){
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
                      const pointkey=label+ind+index;
                        //değerlerin hepsini pozitif yazıyoruz
                      if(pointTextAbsvalue){
                          value=typeof value === "number"?Math.abs(value):value;
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
                                 dataXY.push({x:x,y:y,key:pointkey,color:"red"})                    
                              }
                          }
                    }
            
                      if (chartItem.type === "line") {
                          
                          if (pointDrop&&visibility) {
                            
                            if (dataViews.filter((v, i) => v.index === index)[0]) {
                             const pointColor=dataViews.filter((v, i) => v.index === index)[0].dropColor;
                                dataXY.push({x:x,y:y,key:pointkey,color:pointColor})                    
            
                            }
                        }
                      }
            
                     
                      if (chartItem.type === "bar") {
                          
                          if (pointDrop&&visibility) {
                               
                            
                            if (dataViews.filter((v, i) => v.index === index)[0]) {
                                const pointColor=dataViews.filter((v, i) => v.index === index)[0].dropColor
                                dataXY.push({x:x,y:y,key:pointkey,color:pointColor})                    
             
                            }
                        }
                      }
                    
                      
                  }
            
              }
               
              //animasyon ve data değişim kontrolu yapılıyor
              if(intervalFunction.filter((v,i)=>v.id==="ChartJSafterRender")[0]){
                const intervalItem=intervalFunction.filter((v,i)=>v.id==="ChartJSafterRender")[0];
                var update=false;
                intervalItem.dataXY.forEach((v,i)=>{
                   if(v.x!==dataXY[i]?.x | v.y!==dataXY[i]?.y | v.key!==dataXY[i]?.key){
                       update=true;
                   }
                })


                // değişim varsa 
                if(update){
                    //animasyon duruduruluyor
                     clearInterval(intervalItem.timeout);
                     intervalFunction=[];
                     //yeni anismasyon yükleniyor
                    const timeout=onDrawDropCircle(chart,dataXY,10,2,100);
                    intervalFunction.push({id:"ChartJSafterRender",dataXY:dataXY,timeout:timeout})
                }
                
             } 

              //hiç anismasyon yok sa
              if(!intervalFunction.filter((v,i)=>v.id==="ChartJSafterRender")[0]&&dataXY.length>0){
                 const timeout=onDrawDropCircle(chart,dataXY,10,2,100);
                 intervalFunction.push({id:"ChartJSafterRender",dataXY:dataXY,timeout:timeout})
                 
              }  
            
             
            
               }
            
            
           
            }
            

        ]

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

    const ChartRender=()=>{
         
        if(children===null&&children===undefined){
            return null;
        }
         
        if(canvas.current){
              
              setTimeout(() => {
               
                const data = chartData();
                const options = chartOptions();
                plugins = chartPlugins();
                
                if(chartmain){
                    chartmain.destroy();
                    setChartmain(null);
                }
        

                var newchart = new Chart(canvas?.current, {
                    type:type,
                    data:  data,
                    options: options ,
                    plugins: plugins
                });

                   newchart.update();
 

                     setChartmain(newchart);
              }, 10);
              
           
        }
        
       
         
    }

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


   

    useEffect(() => {
      
        ChartRender();
 
    }, [ ])
 

    useEffect(() => {
        if(chartmain&&children){
           
            intervalFunction.forEach((v,i)=>{

                clearInterval(v.timeout);

            })

            intervalFunction=[];
             const data = chartData();
             const options = chartOptions();
              
             chartmain.data=data;
             chartmain.options=options;
             chartmain.update();
              
        }
      
 
    }, [children,width,height,chartjs])


    function canvasSaveImage(){
        let downloadLink = document.createElement('a');
        downloadLink.setAttribute('download', 'CanvasAsImage.png');
         let dataURL = canvas.current.toDataURL('image/png');
        let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
        downloadLink.setAttribute('href', url);
        downloadLink.click();
    }
    function canvasPrint(){
        var win=window.open();
        if(win.document&&yazdir>1){
            win.document.write("<br><img src='"+canvas.current.toDataURL()+"'/>");

            setTimeout(() => {
                win.print();
            }, 3000);
            
            
        }
       
    }

    
    
    return (
        <canvas   ref={canvas} id={generateUid()}  height={height.replace("px","")} style={style}   width={width.replace("px","")} ></canvas>
    )

}




class MathLines {

    addPoints(id, x1, y1, x2, y2) {
        this.points = [];
        if (id === null) {
            id = "id" + this.points.length;
        }
        this.points.push({ id: id, x1: x1, y1: y1, x2: x2, y2: y2 });
    }

    twoPointsChecked(id1, id2) {
        if (this.points === undefined || this.points === null || this.points.length <= 0) {
            return;
        }
        var point1 = this.points.filter((v, i) => v.id === id1)[0];
        var point2 = this.points.filter((v, i) => v.id === id2)[0];

        var m1 = (point1.y2 - point1.y1) / (point1.x2 - point1.x1);
        var m2 = (point2.y2 - point2.y1) / (point2.x2 - point2.x1);

        var y = (point2.y2 - point2.x2 * m2 - point1.y2 + point1.x2 * m1) / (m2 - m1);
        var x = (y - point1.y2 + point1.x2 * m1) / m1;

        if (x === 0 && y === 0) {
            return { x: x, y: y, to: false }
        }

        return { x: x, y: y, to: true }

    }

    pointLineUnder(x, y, id) {
        if (this.points === undefined || this.points === null || this.points.length <= 0) {
            return;
        }
        var point1 = this.points.filter((v, i) => v.id === id)[0];
        if (point1 === undefined) {
            console.log("points id and data add error !");
            return null;
        }
        var m1 = (point1.y2 - point1.y1) / (point1.x2 - point1.x1);
        var yPoint = m1 * (x - point1.x2) + point1.y2;
        //üstünde
        if (y > yPoint) {
            return { x: x, y: yPoint, to: "on" }
        }
        //altında
        if (y < yPoint) {
            return { x: x, y: yPoint, to: "under" }
        }
        //üzerinde
        if (y === yPoint) {
            return { x: x, y: yPoint, to: "over" }
        }
    }

}

