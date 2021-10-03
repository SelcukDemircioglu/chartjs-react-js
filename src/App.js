import React from 'react';
import { ChartJS,ChartJSNode} from './chartjs-react-js';
 const RandomData=(min,max,count=10)=>{
  var data=[];
  var labels=[];
  for (let index = 0; index < count; index++) {
     data= data.concat(Math.floor(Math.random() * (max - min) ) + min)
     labels=labels.concat("labels"+index);
  }
  return {data:data,labels:labels};
}
export const Colors={
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
  {value:5,backgroundColor:Colors.ORANGE},
  {value:15,backgroundColor:Colors.TURKUAZ},
  {value:6,backgroundColor:Colors.SECOND_COLOR},
  {value:13,backgroundColor:Colors.RED},
];




     return (
       <div  >
       <div >
         <ul>
           <li>

           </li>
         </ul>
       </div>
        
         <ChartJS
           width="100%"
           pointText={true}
           yAxesmin={0}
           indexAxis="x"
           xlabelBackground="#34f3"
           title="ChartJS"
           position="top"
           backgroundColor="#fffd22"
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
       </div>
     );
}

export default App;