# chartjs reactjs 
  

  npm i chartjs-react-js
  
  Include [chart.js](https://www.npmjs.com/package/chart.js) and [React](https://www.npmjs.com/package/react) and  [xlsx](https://www.npmjs.com/package/xslx) as dependencies.

   
 ## Example  Usage

  Note: --->   type: multi chart only line with bar 
  
 
  <p align="center">
    <img src="assets/examples.png">
  </p>

   
   <table style="width: 569px;">
	<tbody>
		<tr style="height: 23px;">
			<td style="width: 62px; height: 23px;">prop</td>
			<td style="width: 444.016px; height: 23px;">descriptions</td>
			<td style="width: 269.984px; height: 23px;">type</td>
		</tr>
		<tr style="height: 15.5px;">
			<td style="width: 62px; height: 15.5px;">&nbsp;changeTypes
				<div>&nbsp;</div>
			</td>
			<td style="width: 444.016px; height: 15.5px;">datasets Line or Bar convert chart</td>
			<td style="width: 269.984px; height: 15.5px;">boolean</td>
		</tr>
		<tr style="height: 43px;">
			<td style="width: 62px; height: 43px;">&nbsp;
				<div>
					<div>downloadOptions</div>
				</div>
			</td>
			<td style="width: 444.016px; height: 43px;">&nbsp;data csv and chart image save or download</td>
			<td style="width: 269.984px; height: 43px;">boolean</td>
		</tr>
		<tr style="height: 43px;">
			<td style="width: 62px; height: 43px;">
				<div>
					<div>pointText</div>
				</div>
			</td>
			<td style="width: 444.016px; height: 43px;">
				<p>Lİne Bar and Pie points add text value&nbsp;</p>
				<p>Not: only has been&nbsp;dataViews add Points</p>
				<p>type dataPoint={</p>
				<div>
					<div>&nbsp; &nbsp; &nbsp;value?:Number;</div>
					<div>&nbsp; &nbsp; &nbsp;index?:Number;</div>
					<div>&nbsp; &nbsp; &nbsp;backgroundColor?:String;</div>
					<div>&nbsp; &nbsp; &nbsp;dropColor?:String;</div>
				</div>
				<p>}</p>
				<div>
					<div>dataViews= new Array(dataPoint);</div>
				</div>
			</td>
			<td style="width: 269.984px; height: 43px;">boolean</td>
		</tr>
		<tr style="height: 43px;">
			<td style="width: 62px; height: 43px;">
				<div>
					<div>
						<div>
							<div>pointDrop</div>
						</div>
					</div>
				</div>
			</td>
			<td style="width: 444.016px; height: 43px;">
				<p>Lİne Bar and Pie points drop efect</p>
				<p>Not: only has been&nbsp;dataViews add Points</p>
				<p>type dataPoint={</p>
				<div>
					<div>&nbsp; &nbsp; &nbsp;value?:Number;</div>
					<div>&nbsp; &nbsp; &nbsp;index?:Number;</div>
					<div>&nbsp; &nbsp; &nbsp;backgroundColor?:String;</div>
					<div>&nbsp; &nbsp; &nbsp;dropColor?:String;</div>
				</div>
				<p>}</p>
				<div>
					<div>dataViews= new Array(dataPoint);</div>
					<div>&nbsp;</div>
					<div>
						<div>
							<div>&lt;ChartJSNode
								<div>
									<div>dataViews /&gt;</div>
								</div>
							</div>
						</div>
					</div>
					<div>&nbsp;</div>
				</div>
			</td>
			<td style="width: 269.984px; height: 43px;">&nbsp;boolean</td>
		</tr>
	</tbody>
</table>
   
   look settings [chart.js information and settings](https://www.chartjs.org/docs/latest/charts)
   
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
           pointText={true}
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
           title="ChartJS Line"
           position="top"
           type="line"
           labels={RandomData(5, 50, 5).labels}
           backgroundColor={Colors.TRANSPARENT}
            pointText={true}
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
             type="line"
             label="data"
             dataViews={dataViews}
             
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

 

 
 
