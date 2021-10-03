# chartjs reactjs 
  
  npm i chartjs-react-js
  
  Include [chart.js](https://www.npmjs.com/package/chart.js) and [React](https://www.npmjs.com/package/react) as dependencies.

  
  
 ## Example  Usage

  Note: --->   type: multi chart only line with bar 

 ```jsx
 import { ChartJS,ChartJSNode} from './chartjs-react-js';

 
  Example 1 
 <ChartJS
           width="100%"
           pointText={true}
           yAxesmin={0}
           indexAxis="x"
           xlabelBackground="#34f3"
           title="ChartJS"
           position="top"
           backgroundColor="#fff545"
           xtitle="xlabel"
           ytitle="test"
           labels={RandomData(5, 50, 5).labels}
         >
           <ChartJSNode
             dataViews={[]}
             order={2}
             data={RandomData(5, 50, 5).data}
             rotation={45}
             pointStyle="rect"
             bdrColor="black"
             backgroundColor="#34f"
             type="bar"
             label="data"
           />
           <ChartJSNode
             order={0}
             data={RandomData(5, 50, 5).data}
             rotation={45}
             pointStyle="rect"
             borderColor="#45f243"
             type="line"
             label="data"
           />
           <ChartJSNode
             order={1}
             data={RandomData(5, 50, 5).data}
             rotation={45}
             pointStyle="rect"
             borderColor="#fb3"
             type="line"
             label="data"
           />
         </ChartJS>

         
Example 2

 const chartnodes =fetchDatabase.map((val,ind)=>{

     return<ChartJSNode
             order={ind}
             data={val.data}
             rotation={val.rotation}
             pointStyle={val.pointStyle}
             borderColor="#45f243"
             type={val.type} 
             label={val.label}
           />
 }) 

       <ChartJS
           width="100%"
           pointText={true}
           yAxesmin={0}
           indexAxis="x"
           xlabelBackground="#34f3"
           title="ChartJS2"
           position="top"
           backgroundColor="#fff545"
           xtitle="xlabel"
           ytitle="test"
           labels={RandomData(5, 50, 5).labels}
         >
            
           {chartnodes}
           
         </ChartJS>

        ```

 

 
 
