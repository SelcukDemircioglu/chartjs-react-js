# chartjs reactjs

npm i chartjs-react-js

Include [chart.js](https://www.npmjs.com/package/chart.js) and [React](https://www.npmjs.com/package/react) and [xlsx](https://www.npmjs.com/package/xslx) as dependencies.

## Example Usage

Note: ---> type: multi chart only line with bar

  <p align="center">
    <img src="https://github.com/SelcukDemircioglu/chartjs-react-js/blob/master/src/assets/examples.png">
  </p>
  
<br/>
  <br/>

   <table width="623">
<tbody>
<tr>
<td colspan="2" width="348">ChartJS</td>
<td width="275">&nbsp;</td>
</tr>
<tr>
<td width="262">props</td>
<td>descriptions</td>
<td width="275">type</td>
</tr>
<tr>
<td width="262">title</td>
<td width="86">chartjs</td>
<td width="275">string</td>
</tr>
<tr>
<td width="262">type</td>
<td width="86">chartjs</td>
<td width="275">&nbsp;'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter';</td>
</tr>
<tr>
<td width="262">titleVisible</td>
<td width="86">&nbsp;</td>
<td width="275">boolean;</td>
</tr>
<tr>
<td width="262">backgroundColor</td>
<td width="86">chartjs</td>
<td width="275">string|object|[];</td>
</tr>
<tr>
<td width="262">align</td>
<td width="86">chartjs</td>
<td width="275">start|"center"|"end"; //this.align</td>
</tr>
<tr>
<td width="262">position&nbsp;</td>
<td width="86">chartjs</td>
<td width="275">'top'|'left'|'bottom'|'right'|'chartArea';</td>
</tr>
<tr>
<td width="262">titleFont</td>
<td width="86">chartjs</td>
<td width="275">{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; size: number,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fontColor: string,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; family:&nbsp; string,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lineHeight:string,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; style: "normal" | "italic" | "oblique" | "initial" | "inherit",<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; weight:100|200|300|400|500|600|700|800|900<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</td>
</tr>
<tr>
<td width="262">xtitle</td>
<td width="86">chartjs</td>
<td width="275">string;&nbsp;</td>
</tr>
<tr>
<td width="262">ytitle</td>
<td width="86">chartjs</td>
<td width="275">string;&nbsp;</td>
</tr>
<tr>
<td width="262">labels</td>
<td width="86">chartjs</td>
<td width="275">Array []</td>
</tr>
<tr>
<td width="262">indexAxis</td>
<td width="86">chartjs</td>
<td width="275">x|"y";&nbsp;</td>
</tr>
<tr>
<td width="262">mode</td>
<td width="86">chartjs</td>
<td width="275">'point'|'nearest'|'index'|'dataset'|'x'|'y';</td>
</tr>
<tr>
<td width="262">intersect</td>
<td width="86">chartjs</td>
<td width="275">boolean;</td>
</tr>
<tr>
<td width="262">islegend</td>
<td width="86">chartjs</td>
<td width="275">boolean;</td>
</tr>
<tr>
<td width="262">plugins</td>
<td width="86">chartjs</td>
<td width="275">object;//plugins,</td>
</tr>
<tr>
<td width="262">xstacked</td>
<td width="86">chartjs</td>
<td width="275">boolean|object;</td>
</tr>
<tr>
<td width="262">xAxesmin</td>
<td width="86">chartjs</td>
<td width="275">number|object;</td>
</tr>
<tr>
<td width="262">xAxesmax</td>
<td width="86">chartjs</td>
<td width="275">number|object;</td>
</tr>
<tr>
<td width="262">xtitleColor</td>
<td width="86">chartjs</td>
<td width="275">string|object;</td>
</tr>
<tr>
<td width="262">xAxesstep</td>
<td width="86">chartjs</td>
<td width="275">number|object;</td>
</tr>
<tr>
<td width="262">xlabelsFont</td>
<td width="86">chartjs</td>
<td width="275">{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; size: number,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fontColor: string,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; family:&nbsp; string,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lineHeight:string,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; style: "normal" | "italic" | "oblique" | "initial" | "inherit",<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; weight:100|200|300|400|500|600|700|800|900<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</td>
</tr>
<tr>
<td width="262">xgrid</td>
<td width="86">chartjs</td>
<td width="275">boolean</td>
</tr>
<tr>
<td width="262">ystacked</td>
<td width="86">chartjs</td>
<td width="275">boolean|object;</td>
</tr>
<tr>
<td width="262">yAxesmin</td>
<td width="86">chartjs</td>
<td width="275">number|object;</td>
</tr>
<tr>
<td width="262">yAxesmax</td>
<td width="86">chartjs</td>
<td width="275">number|object;</td>
</tr>
<tr>
<td width="262">ytitleColor</td>
<td width="86">chartjs</td>
<td width="275">string|object;</td>
</tr>
<tr>
<td width="262">yAxesstep</td>
<td width="86">chartjs</td>
<td width="275">number|object;</td>
</tr>
<tr>
<td width="262">ylabelsFont</td>
<td width="86">chartjs</td>
<td width="275">{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; size: number,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fontColor: string,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; family:&nbsp; string,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lineHeight:string,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; style: "normal" | "italic" | "oblique" | "initial" | "inherit",<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; weight:100|200|300|400|500|600|700|800|900<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</td>
</tr>
<tr>
<td width="262">ygrid</td>
<td width="86">chartjs</td>
<td width="275">boolean;</td>
</tr>
<tr>
<td width="262">xlabelBackground</td>
<td width="86">chartjs</td>
<td width="275">string|object;</td>
</tr>
<tr>
<td width="262">ylabelBackground</td>
<td width="86">chartjs</td>
<td width="275">string|object;</td>
</tr>
<tr>
<td width="262">aspectRatio</td>
<td width="86">chartjs</td>
<td width="275">number;</td>
</tr>
<tr>
<td width="262">responsive</td>
<td width="86">chartjs</td>
<td width="275">boolean;</td>
</tr>
<tr>
<td width="262">yAxesRightAdd</td>
<td width="86">chartjs</td>
<td width="275">boolean|object;</td>
</tr>
<tr>
<td width="262">yAxesLeftAdd</td>
<td width="86">chartjs</td>
<td width="275">boolean|object;</td>
</tr>
<tr>
<td width="262">xAxesPosition</td>
<td width="86">chartjs</td>
<td width="275">boolean|object;</td>
</tr>
<tr>
<td width="262">yAxesPosition</td>
<td width="86">chartjs</td>
<td width="275">boolean|object;</td>
</tr>
<tr>
<td width="262">width</td>
<td width="86">&nbsp;</td>
<td width="275">string;</td>
</tr>
<tr>
<td width="262">height</td>
<td width="86">&nbsp;</td>
<td width="275">string;</td>
</tr>
<tr>
<td width="262">children</td>
<td width="86">&nbsp;</td>
<td width="275">[Array&lt;React.ReactNode&gt;];</td>
</tr>
<tr>
<td width="262">mobil</td>
<td width="86">&nbsp;</td>
<td width="275">boolean;</td>
</tr>
<tr>
<td width="262">mobilMinSize</td>
<td width="86">&nbsp;</td>
<td width="275">number;</td>
</tr>
<tr>
<td width="262">ticksYcallback</td>
<td width="86">chartjs</td>
<td width="275">Function;</td>
</tr>
<tr>
<td width="262">ticksXcallback</td>
<td width="86">chartjs</td>
<td width="275">Function;</td>
</tr>
<tr>
<td width="262">tooltipCallbacks</td>
<td width="86">chartjs</td>
<td width="275">Object;</td>
</tr>
<tr>
<td width="262">style</td>
<td width="86">chartjs</td>
<td width="275">React.CSSProperties;</td>
</tr>
<tr>
<td width="262">print</td>
<td width="86">chartjs</td>
<td width="275">Number;</td>
</tr>
<tr>
<td width="262">canvasid</td>
<td width="86">chartjs</td>
<td width="275">String;</td>
</tr>
<tr>
<td width="262">layoutPadding</td>
<td width="86">chartjs</td>
<td width="275">number|{left:number,right:number,top:number,bottom:number};</td>
</tr>
<tr>
<td width="262">onClickLabel(e: ChartEvent, legendItem: LegendItem, legend: Function)</td>
<td width="86">&nbsp;</td>
<td width="275">Function;</td>
</tr>
<tr>
<td width="262">labelsFont</td>
<td width="86">chartjs</td>
<td width="275">{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; size: number,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fontColor: string,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; family:&nbsp; string,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lineHeight:string,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; style: "normal" | "italic" | "oblique" | "initial" | "inherit",<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; weight:100|200|300|400|500|600|700|800|900<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</td>
</tr>
<tr>
<td width="262">usePointStyleLegend</td>
<td width="86">chartjs</td>
<td width="275">boolean;</td>
</tr>
<tr>
<td width="262">usePointStyleTooltip</td>
<td width="86">chartjs</td>
<td width="275">boolean;</td>
</tr>
<tr>
<td width="262">LegendPointStyle</td>
<td width="86">chartjs</td>
<td width="275">Function|"textrect"|'circle' | 'cross' | 'crossRot' | 'dash' | 'line' | 'rect' | 'rectRounded' | 'rectRot' | 'star' | 'triangle'|</td>
</tr>
<tr>
<td width="262">onChartOptions(e:methodProps)</td>
<td width="86">&nbsp;</td>
<td width="275">Function;</td>
</tr>
<tr>
<td width="262">downloadOptions</td>
<td width="86">&nbsp;</td>
<td width="275">boolean;</td>
</tr>
<tr>
<td width="262">changeTypes</td>
<td width="86">&nbsp;</td>
<td width="275">boolean;</td>
</tr>
<tr>
<td width="262">className</td>
<td width="86">&nbsp;</td>
<td width="275">string;</td>
</tr>
<tr>
<td width="262">autoSkip</td>
<td width="86">chartjs</td>
<td width="275">boolean;</td>
</tr>
<tr>
<td width="262">autoSkipPadding</td>
<td width="86">chartjs</td>
<td width="275">boolean;</td>
</tr>
<tr>
<td width="262">maxLabelsRotation</td>
<td width="86">chartjs</td>
<td width="275">undefined;</td>
</tr>
<tr>
<td width="262">minLabelsRotation</td>
<td width="86">chartjs</td>
<td width="275">undefined;</td>
</tr>
</tbody>
</table>
  
  <br/>
  <br/>
  
   <table width="1187">
<tbody>
<tr>
<td colspan="2" width="320">ChartjsNode</td>
<td width="867">&nbsp;</td>
</tr>
<tr>
<td>props</td>
<td>descriptions</td>
<td>type</td>
</tr>
<tr>
<td>id</td>
<td width="160">&nbsp;</td>
<td>number|string;</td>
</tr>
<tr>
<td>type</td>
<td width="160">chartjs</td>
<td>&nbsp;'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter';</td>
</tr>
<tr>
<td>label</td>
<td width="160">chartjs</td>
<td>string;&nbsp;&nbsp;</td>
</tr>
<tr>
<td>order</td>
<td width="160">chartjs</td>
<td>number;&nbsp;&nbsp;</td>
</tr>
<tr>
<td>data</td>
<td width="160">chartjs</td>
<td>[];&nbsp;&nbsp;</td>
</tr>
<tr>
<td>dataViews</td>
<td width="160">&nbsp;</td>
<td>Array&lt;pointViewProps&gt;;</td>
</tr>
<tr>
<td>hidden</td>
<td width="160">chartjs</td>
<td>boolean;</td>
</tr>
<tr>
<td>backgroundColor</td>
<td width="160">chartjs</td>
<td>string|Function|[];&nbsp;</td>
</tr>
<tr>
<td>defaultbackgroundColor</td>
<td width="160">&nbsp;</td>
<td>string|[];&nbsp;</td>
</tr>
<tr>
<td>borderColor</td>
<td width="160">chartjs</td>
<td>string|Function|[];&nbsp;&nbsp;</td>
</tr>
<tr>
<td>borderWidth</td>
<td width="160">chartjs</td>
<td>string|Function|[];&nbsp;&nbsp;</td>
</tr>
<tr>
<td>tension</td>
<td width="160">chartjs</td>
<td>number; //this.lineSmooth ? 0.4 : 0.000001,&nbsp;</td>
</tr>
<tr>
<td>fill</td>
<td width="160">chartjs</td>
<td>origin| "start"|"end"|boolean;&nbsp;&nbsp;</td>
</tr>
<tr>
<td>spanGaps</td>
<td width="160">chartjs</td>
<td>&nbsp;boolean;</td>
</tr>
<tr>
<td>stepped</td>
<td width="160">chartjs</td>
<td>boolean|"before"|"after"|"middle";&nbsp;&nbsp;&nbsp;</td>
</tr>
<tr>
<td>hoverBorderWidth</td>
<td width="160">chartjs</td>
<td>&nbsp;number|undefined|Function;&nbsp;</td>
</tr>
<tr>
<td>hoverBackgroundColor</td>
<td width="160">chartjs</td>
<td>&nbsp;string|undefined|Function&nbsp;</td>
</tr>
<tr>
<td>pointStyle</td>
<td width="160">chartjs</td>
<td>Function|"textrect"|'circle' | 'cross' | 'crossRot' | 'dash' | 'line' | 'rect' | 'rectRounded' | 'rectRot' | 'star' | 'triangle'|HTMLImageElement|</td>
</tr>
<tr>
<td>hitRadius</td>
<td width="160">chartjs</td>
<td>number|Function;&nbsp;</td>
</tr>
<tr>
<td>hoverRadius</td>
<td width="160">chartjs</td>
<td>number|Function;&nbsp;</td>
</tr>
<tr>
<td>rotation</td>
<td width="160">chartjs</td>
<td>number|Function;&nbsp;&nbsp;</td>
</tr>
<tr>
<td>borderDash</td>
<td width="160">chartjs</td>
<td>Function|number|[]|undefined;&nbsp;&nbsp;</td>
</tr>
<tr>
<td>borderDashOffset</td>
<td width="160">chartjs</td>
<td>Function|string;</td>
</tr>
<tr>
<td>radius</td>
<td width="160">chartjs</td>
<td>number|Function;&nbsp;</td>
</tr>
<tr>
<td>borderAlign</td>
<td width="160">chartjs</td>
<td>string;&nbsp;&nbsp;</td>
</tr>
<tr>
<td>hoverOffset</td>
<td width="160">chartjs</td>
<td>string,</td>
</tr>
<tr>
<td>bgColor</td>
<td width="160">&nbsp;</td>
<td>string|Function;</td>
</tr>
<tr>
<td>bdrColor</td>
<td width="160">&nbsp;</td>
<td>string|Function;</td>
</tr>
<tr>
<td>categoryPercentage</td>
<td width="160">chartjs</td>
<td>Number|Function;&nbsp;&nbsp;</td>
</tr>
<tr>
<td>barPercentage</td>
<td width="160">chartjs</td>
<td>Number|Function;&nbsp;&nbsp;</td>
</tr>
<tr>
<td>base</td>
<td width="160">chartjs</td>
<td>Number|Function;&nbsp;</td>
</tr>
<tr>
<td>linearGradient</td>
<td width="160">chartjs</td>
<td>Function|{0:string,0.5:string,1:string};</td>
</tr>
<tr>
<td>barThickness</td>
<td width="160">chartjs</td>
<td>number|string;</td>
</tr>
<tr>
<td>maxBarThickness</td>
<td width="160">chartjs</td>
<td>number;</td>
</tr>
<tr>
<td>minBarLength</td>
<td width="160">chartjs</td>
<td>number;</td>
</tr>
<tr>
<td>pointTextAllShow</td>
<td width="160">bar,line and pie point value show area</td>
<td>boolean;</td>
</tr>
<tr>
<td>pointTextAddFirstValue</td>
<td width="160">value add first value</td>
<td>string;</td>
</tr>
<tr>
<td>pointTextAddLastValue</td>
<td width="160">value add last value</td>
<td>string;</td>
</tr>
<tr>
<td>pointText</td>
<td width="160">pointTextAllShow and dataViews &gt;0 with true</td>
<td>boolean;</td>
</tr>
<tr>
<td>pointTextAbsvalue</td>
<td width="160">value convert to value&gt;0</td>
<td>boolean;</td>
</tr>
<tr>
<td>pointDrop</td>
<td width="160">only line and bar item&nbsp;&nbsp; show animation</td>
<td>boolean;</td>
</tr>
<tr>
<td>pointAllDrop</td>
<td width="160">only line and bar item&nbsp; with pointDrop=true</td>
<td>boolean;</td>
</tr>
</tbody>
</table>

  <br/>
  <br/>

   look settings [chart.js information and settings](https://www.chartjs.org/docs/latest/charts)
  
   <br/>
   <br/>

 ```jsx
 
 import { ChartJS,ChartJSNode} from './chartjs-react-js';

    <div style={{
       display: "flex",
       flexDirection: "row",
       flexWrap: "wrap",
       justifyContent: "center"}}  >

         <ChartJS
            width="45vw"
            height="250px"
            yAxesmin={0}
            indexAxis="x"
            xtitle="xtitle"
            ytitle="ytitle"
            title="ChartJS Line"
            position="top"
            type="line"
            labels={RandomData(5, 50, 5).labels}
            backgroundColor={Colors.TRANSPARENT}

            downloadOptions
            changeTypes
          >

            <ChartJSNode

              order={1}
              data={[1,2,3,2,6]}
              backgroundColor={Colors.ORANGE}
              borderColor={Colors.HEADER_COLOR}
              rotation={45}
              pointStyle="rect"
              type="pie"
              label="dataline"
              borderWidth={1}
              borderColor="#fff"
              pointTextAllShow
              pointText
              pointTextAddLastValue="%"
            />

          </ChartJS>


         <ChartJS

           xstacked
           ystacked
           width="45vw"
           height="250px"
           pointText={true}
           yAxesmin={0}
           indexAxis="x"
           title="ChartJS Pie"
           position="top"
           type="pie"
           labels={RandomData(5, 50, 5).labels}
           backgroundColor={Colors.TRANSPARENT}
           changeTypes
           downloadOptions

         >

           <ChartJSNode

             order={0}
             data={RandomData(5, 50, 5).data}
             backgroundColor={RandomData(5, 50, 5).colors}
             rotation={45}
             pointStyle="rect"
             type="pie"
             label="data"
           />
           <ChartJSNode

             order={0}
             data={RandomData(5, 50, 5).data}
             backgroundColor={RandomData(5, 50, 5).colors}
             rotation={45}
             pointStyle="rect"
             type="pie"
             label="data"
           />
            <ChartJSNode

             order={0}
             data={RandomData(5, 50, 5).data}
             backgroundColor={RandomData(5, 50, 5).colors}
             rotation={45}
             pointStyle="rect"
             type="pie"
             label="data"
           />
         </ChartJS>

         <ChartJS
           width="45vw"
           height="250px"
           pointText={true}
           yAxesmin={0}
           indexAxis="x"
           title="ChartJS PolarArea"
           position="top"
           type="polarArea"
           labels={RandomData(5, 50, 5).labels}
           backgroundColor={Colors.TRANSPARENT}
         >

           <ChartJSNode
             order={0}
             data={RandomData(5, 50, 5).data}
             backgroundColor={RandomData(5, 50, 5).colors}
             rotation={45}
             pointStyle="rect"
             type="polarArea"
             label="data"
           />

         </ChartJS>
         <ChartJS
           width="45vw"
           height="250px"
           yAxesmin={0}
           indexAxis="x"
           title="ChartJS Radar"
           position="top"
           type="radar"
           labels={RandomData(5, 50, 5).labels}
           backgroundColor={Colors.TRANSPARENT}
         >

           <ChartJSNode
             order={0}
             data={RandomData(5, 50, 5).data}
             backgroundColor={RandomData(5, 50, 5).colors}
             rotation={45}
             pointStyle="rect"
             type="radar"
             label="data1"
           />
            <ChartJSNode
             order={1}
             data={RandomData(5, 50, 5).data}
             backgroundColor={RandomData(5, 50, 5).colors}
             rotation={45}
             pointStyle="rect"
             type="radar"
             label="data2"
           />
            <ChartJSNode
             order={2}
             data={RandomData(5, 50, 5).data}
             backgroundColor={RandomData(5, 50, 5).colors}
             rotation={45}
             pointStyle="rect"
             type="radar"
             label="data3"
           />
         </ChartJS>


         <ChartJS
           width="45vw"
           height="250px"
            yAxesmin={0}
           indexAxis="x"
           xtitle="xtitle"
           ytitle="ytitle"
           title="ChartJS Bar"
           position="top"
           type="bar"
           labels={RandomData(5, 50, 5).labels}
           backgroundColor={Colors.TRANSPARENT}
           pointText
         >

           <ChartJSNode
             order={0}
             data={RandomData(5, 50, 5).data}
             backgroundColor={Colors.ORANGE}
             borderColor={Colors.HEADER_COLOR}
             rotation={45}
             pointStyle="rect"
             type="bar"
             label="data"
           />

         </ChartJS>

         <ChartJS
           width="45vw"
           height="250px"
            yAxesmin={0}
           indexAxis="x"
           xtitle="xtitle"
           ytitle="ytitle"
           title="ChartJS Multi Bar"
           position="top"
           type="bar"
           labels={RandomData(5, 50, 5).labels}
           backgroundColor={Colors.TRANSPARENT}
         >

           <ChartJSNode
             order={1}
             data={RandomData(5, 50, 5).data}
             backgroundColor={Colors.ORANGE}
             borderColor={Colors.HEADER_COLOR}
             rotation={45}
             pointStyle="rect"
             type="bar"
             label="data"
           />
               <ChartJSNode
             order={0}
             data={RandomData(5, 50, 5).data}
             backgroundColor={Colors.ORANGE}
             borderColor={Colors.PRİMARY_COLOR}
             rotation={45}
             pointStyle="rect"
             type="line"
             label="data"
             pointText
             pointTextAllShow
             pointTextAddLastValue=" m2"
           />
         </ChartJS>

         <ChartJS
           width="45vw"
           height="500px"
            yAxesmin={0}
           indexAxis="y"
           xtitle="xtitle"
           ytitle="ytitle"
           title="ChartJS Multi Bar"
           position="top"
           type="bar"
           labels={RandomData(5, 50, 5).labels}
           backgroundColor={Colors.TRANSPARENT}

         >

           <ChartJSNode

             order={1}
             data={RandomData(5, 50, 5).data}
             backgroundColor={Colors.ORANGE}
             borderColor={Colors.HEADER_COLOR}
             rotation={45}
             pointStyle="rect"
             type="bar"
             label="data"

           />
               <ChartJSNode
             order={0}
             data={RandomData(5, 50, 5).data}
             backgroundColor={Colors.ORANGE}
             borderColor={Colors.PRİMARY_COLOR}
             rotation={45}
             pointStyle="rect"
             type="line"
             label="data"
           />
         </ChartJS>
       </div>
  

  

        ```

 