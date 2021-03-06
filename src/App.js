import React from 'react';
import {ChartJS,ChartJSNode} from './chartjs-react-js/src/'
const getRandomColor=()=>{
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 8; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

 const RandomData=(min,max,count=10)=>{
  var data=[];
  var labels=[];
  var colors=[];
  for (let index = 0; index < count; index++) {
     data= data.concat(Math.floor(Math.random() * (max - min) ) + min)
     labels=labels.concat("labels"+index);
     colors.push(getRandomColor());
  }
  return {data:data,labels:labels,colors:colors};
}
 
const Colors={
  BLACK: '#000',
  WHITE: '#FFF',
  DODGER_BLUE: '#428AF8',
  SILVER: '#BEBEBE',
  TORCH_RED: '#F8262F',
  MISCHKA: '#E5E4E6',
  HEADER_COLOR: '#c7c4b5',
  RED: '#ff1923',
  BACKGROUND: '#F3F4FA',
  ORANGE: '#ff5e3d',
  LEVEL_1: '#4AB19D',
  LEVEL_2: '#EFC958',
  LEVEL_3: '#E17A47',
  PRİMARY_COLOR: '#c9282f' ,
  SECOND_COLOR: '#f25c5a',
  SELECT_COLOR: '#ff6b6b',
  TRANSPARENT: '#ffffff00',
  BORDERCOLOR: '#000',
   CAMGOBEGI: '#00ffff',
  TURKUAZ:'#40E0D0',
 }

const App=()=>{

  
  
   
const dataViews=[
  {value:1,index:0,backgroundColor:Colors.ORANGE, dropColor:Colors.ORANGE},
  {value:2,index:1,backgroundColor:Colors.TURKUAZ, dropColor:Colors.TURKUAZ},
];




     return (
       <div style={{

       display: "flex",
       flexDirection: "row",
       flexWrap: "wrap",
       justifyContent: "center"
       
       }}     >

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
     );
}

export default App;