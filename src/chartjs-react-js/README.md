# chartjs reactjs 
  
  Include [chart.js](https://www.npmjs.com/package/chart.js) and [React](https://www.npmjs.com/package/react) as dependencies.


  
 ## Example  Usage
  <p align="center">
    <img src="/src/assets/examples.png">
  </p>
  
  Note: --->   type: multi chart only line with bar 

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
         >
        
           <ChartJSNode
             order={0}
             data={RandomData(5, 50, 5).data}
             backgroundColor={Colors.ORANGE}
             borderColor={Colors.HEADER_COLOR}
             rotation={45}
             pointStyle="rect"
             type="line"
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

 

 
 
