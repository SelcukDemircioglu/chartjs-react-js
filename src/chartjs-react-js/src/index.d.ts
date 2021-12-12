import * as React from 'react';
import {LegendElement,LegendItem,ChartEvent, ChartTypeRegistry} from 'chart.js';


interface pointViewProps {
     value?:Number;
     index?:Number;
     backgroundColor?:String;
     dropColor?:String;
}
interface  ChartJSNodeProps{
     id?:number|string;
     type?: 'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter';
     label?:string; //this.datatitle === undefined ? "veri" : this.datatitle,//line gibi dataların renk başlıkları aç ma kapamada
     order?:number; //this.order,// layer katmanı belirleme alt veye üstünde kaldığını gösterme 0 en üst sırayla alta doğru 1 2 3 chart sayısına göre
     data?:[]; //this.data,//data
     lineAddViews:Array<pointViewProps>,//istenen yatay veya düşey value değerine yatay çizği ve değerin yazıdırılması
     dataViews?:Array<pointViewProps>;
     hidden?:boolean;
     //line bar  element konfigrasyonlar
     backgroundColor?:string|Function|[]; //this.backgroundColor,//tarama rengi
     defaultbackgroundColor?:string|[]; //this.backgroundColor,//tarama rengi
     borderColor?:string|Function|[]; //this.borderColor,//çizgi rengi
     borderWidth?:string|Function|[]; //this.borderWidth, //dış çiği kalılığı
     tension?:number; //this.lineSmooth ? 0.4 : 0.000001,//düz ya eğrisel çizgi
     fill?:"origin"| "start"|"end"|boolean; //this.fill,//altı tarama şekli
     spanGaps?: boolean;
     stepped?:boolean|"before"|"after"|"middle"; //this.steppedLine,// çizgi nasıl olacak 
     hoverBorderWidth?: number|undefined|Function;// hoverBorderWidth mouse üzerine gelince kalınlığı
     hoverBackgroundColor?: string|undefined|Function;//hoverBackgroundColor mouse üzerine gelince rengi
     //noktaların konfigrasyonları
     pointStyle?:Function|"textrect"|'circle' | 'cross' | 'crossRot' | 'dash' | 'line' | 'rect' | 'rectRounded' | 'rectRot' | 'star' | 'triangle'|HTMLImageElement|HTMLCanvasElement; // this.pointStyle, // circle' | 'cross' | 'crossRot' | 'dash' | 'line' | 'rect' | 'rectRounded' | 'rectRot' | 'star' | 'triangle'|HTMLImageElement;
     hitRadius?:number|Function;//this.pointHitRadius,
     hoverRadius?:number|Function;//this.pointRadius,	 
     rotation?:number|Function; //this.pointRotation,	 
     borderDash?:Function|number|[]|undefined;//this.borderDash, //[a,b] =>[5,5] a=çizği uzunluğu b=çizği arası mesafe 
     borderDashOffset?:Function|string;
     radius?:number|Function; //this.radius,//point size,
     borderAlign?:string; //arc line
     hoverOffset?:string,
     bgColor?:string|Function;
     bdrColor?:string|Function;
     categoryPercentage?:Number|Function; // grublarda  genişlik  %si  0-1 arasında dış çerceve
     barPercentage?:Number|Function; // gerub içinde aldığı % göre %si   iç çerceve
     base?:Number|Function;// çizim başlangıc değeri eksene bağlı olup eksen eksen den yüksek değerde olmalıdır.
     linearGradient?:Function|{0:string,0.5:string,1:string};
     barThickness?:number|string;
     maxBarThickness?:number;
     minBarLength?:number;
     pointTextAllShow?:boolean;
     pointTextAddFirstValue?:string;
     pointTextAddLastValue?:string;
     pointText?:boolean;
     pointTextAbsvalue?:boolean;
     pointDrop?:boolean;
     pointAllDrop?:boolean;

 }

export  declare class ChartJSNode extends React.Component<ChartJSNodeProps,any> {}


type methodProps={
     saveImage:void,
     printImage:void,
     dataSave:void
}
type methodChange = React.ReactNode | ((props: methodProps) => React.ReactNode);

  
interface ChartJSProps{
     title?:string;// baslik; this.title //en üst başlık
     type?: 'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter';
     titleVisible?:boolean;
     backgroundColor?:string|object;
     align?:"start"|"center"|"end"; //this.align
     position?:'top'|'left'|'bottom'|'right'|'chartArea';// position baslikkonumu; //başlık konumu  type PositionType?:string;// 'left' | 'right' | 'top' | 'bottom' | 'chartArea';
     titleFont?:{
          size: number,
          fontColor: string,
          family:  string,
          lineHeight:string,
          style: "normal" | "italic" | "oblique" | "initial" | "inherit",
          weight:100|200|300|400|500|600|700|800|900
      };// fontSize; // başlık yazı uzunluğu
     xtitle?:string;// yataylabel; // yatay data adı
     ytitle?:string;// duseylabel; //düşey data adı
     labels?:[];// labels;// data nın x adı
     indexAxis?:"x"|"y";//"x"; this.indexAxis //yatay mı düşey mi chart belirleme
     mode?:'point'|'nearest'|'index'|'dataset'|'x'|'y';
     intersect?:boolean;
     islegend?:boolean;
     plugins?:object;//plugins,
     xstacked?:boolean|object;
     xAxesmin?:number|object;
     xAxesmax?:number|object;
     xtitleColor?:string|object;
     xAxesstep?:number|object;
     xlabelsFont?:{
          size: number,
          fontColor: string,
          family:  string,
          lineHeight:string,
          style: "normal" | "italic" | "oblique" | "initial" | "inherit",
          weight:100|200|300|400|500|600|700|800|900
      };
     xgrid?:boolean;
     ystacked?:boolean|object;
     yAxesmin?:number|object;
     yAxesmax?:number|object;
     ytitleColor?:string|object;
     yAxesstep?:number|object;
     ylabelsFont?:{
          size: number,
          fontColor: string,
          family:  string,
          lineHeight:string,
          style: "normal" | "italic" | "oblique" | "initial" | "inherit",
          weight:100|200|300|400|500|600|700|800|900
      };
     ygrid?:boolean;
     xlabelBackground?:string|object;
     ylabelBackground?:string|object;
     aspectRatio?:number;
     responsive?:boolean;
     yAxesRightAdd?:boolean|object;
     yAxesLeftAdd?:boolean|object;
     xAxesPosition?:boolean|object;
     yAxesPosition?:boolean|object;
     width?:string;
     height?:string;
   
     children?:[Array<React.ReactNode>];
     mobil?:boolean;
     mobilMinSize?:number;
     ticksYcallback?:Function;
     ticksXcallback?:Function;
     tooltipCallbacks?:Object;
     style?:React.CSSProperties;
     print?:Number;
     canvasid?:String;
   
     layoutPadding?:number|{left:number,right:number,top:number,bottom:number};
     onClickLabel(e: ChartEvent, legendItem: LegendItem, legend: Function):Function;
     labelsFont?:{
          size: number,
          fontColor: string,
          family:  string,
          lineHeight:string,
          style: "normal" | "italic" | "oblique" | "initial" | "inherit",
          weight:100|200|300|400|500|600|700|800|900
      };
      usePointStyleLegend?:boolean;
      usePointStyleTooltip?:boolean;
      LegendPointStyle?:Function|"textrect"|'circle' | 'cross' | 'crossRot' | 'dash' | 'line' | 'rect' | 'rectRounded' | 'rectRot' | 'star' | 'triangle'|HTMLImageElement|HTMLCanvasElement;
      onChartOptions(e:methodProps):Function;
      downloadOptions?:boolean;
      changeTypes?:boolean;
      className?:string;
      autoSkip?:boolean;
      autoSkipPadding?:boolean;
      maxLabelsRotation?:undefined;
      minLabelsRotation?:undefined;
}



export  declare class ChartJS extends  React.Component<ChartJSProps,any> {}

  

 