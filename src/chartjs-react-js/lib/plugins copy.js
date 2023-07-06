import  Chart  from "chart.js/auto";


// Chart.defaults.onHover=(ev,elm,chart)=>{
//     const { ctx,chartArea } = chart;
   
//     ctx.save();
//     ctx.beginPath();
//     ctx.setLineDash([5, 3]);
//     ctx.moveTo(chartArea.top,ev.y);
//     ctx.lineTo(chartArea.bottom, ev.y);
//     ctx.stroke();
//     ctx.restore();
// }

export const Plugin_BarFloating = () => {
     return{
        id: 'BarFloating',
        afterDraw(chart=new Chart, easing) {
            // Only activate the plugin if it's made available
            // in the options
         
            // To only draw at the end of animation, check for easing === 1
            const { ctx } = chart;
            
            chart.data.datasets.forEach((dataset, i) => {
                const meta = chart.getDatasetMeta(i);
    
                if (!meta.hidden) {
                    meta.data.forEach((element, index) => {
                        // Draw the text in black, with the specified font
                        ctx.fillStyle =   'rgba(0, 0, 0, 0.87)';
                        const fontSize = 12;
                        const fontStyle = 'normal';
                        const fontFamily = 'Muli, Roboto, Helvetica Neue, Arial, sans-serif';
                        ctx.font =  fontStyle+" "+fontSize+"px "+fontFamily;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        
                        // Make sure alignment settings are correct
                        
                        ctx.save();
                        // ctx.setLineDash([5, 3]);
                        // ctx.moveTo(position.x, startY + padding);
                        // ctx.lineTo(position.x, position.y - padding);
                        // ctx.strokeStyle =   'rgba(0, 0, 0, 0.87)';
                        
                        const p1x= element.x-element?.width;
                        const p2x= element.x;
                        const p1y= element.y;
                        const p2y= element.y;
                        const r=(element.height+element.height*0.2)*0.5;
                        
                        const p1text=dataset.data[index][0]?.toString();
                        const p2text=dataset.data[index][1]?.toString();
                        
                        const text1w=ctx.measureText(p1text).width;
                        const text2w=ctx.measureText(p2text).width;

                        ctx.fillText(p1text,(p1x-2*r-text1w*0.5),p1y)
                        ctx.fillText(p2text,(p2x+2*r+text2w*0.5),p2y)

                        ctx.beginPath();
                        // ctx.shadowBlur = 5;
                        // ctx.shadowColor = "black";
                        ctx.arc(p1x, p1y, r, 0, 2 * Math.PI);
                        ctx.fillStyle =   '#009ACE';
                        ctx.fill();

                        ctx.beginPath();
                        // ctx.shadowBlur = 5;
                        // ctx.shadowColor = "black";
                        ctx.arc(p2x, p2y, r, 0, 2 * Math.PI);
                        ctx.fillStyle  =   '#44D62C';
                        ctx.fill();
  
                        ctx.restore();
                    });
                }
            });
        }
    }
    
}



export const Plugin_AxisCrossair = () => {
    return{
       id: 'AxisCrossair',
       afterDatasetsDraw(chart=new Chart, easing) {
           // Only activate the plugin if it's made available
           // in the options
        
   
           // To only draw at the end of animation, check for easing === 1
           const { ctx } = chart;
   
           chart.data.datasets.forEach((dataset, i) => {
               const meta = chart.getDatasetMeta(i);
   
               if (!meta.hidden) {
                   meta.data.forEach((element, index) => {
                       // Draw the text in black, with the specified font
                       ctx.fillStyle =   'rgba(0, 0, 0, 0.87)';
                       const fontSize = 13;
                       const fontStyle = 'normal';
                       const fontFamily = 'Muli, Roboto, Helvetica Neue, Arial, sans-serif';
                    //    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
   
                       // Just naively convert to string for now
                       const dataString = `${dataset.data[index].toString()}k`;
   
                       // Make sure alignment settings are correct
                       ctx.textAlign = 'center';
                       ctx.textBaseline = 'middle';
                       const padding = 15;
                       const startY = 24;
                       const position = element.tooltipPosition();
                       ctx.fillText(dataString, position.x, startY);
   
                       ctx.save();
   
                       ctx.beginPath();
                       ctx.setLineDash([5, 3]);
                       ctx.moveTo(position.x, startY + padding);
                       ctx.lineTo(position.x, position.y - padding);
                       ctx.strokeStyle =   'rgba(0, 0, 0, 0.87)';
   
                       ctx.stroke();
   
                       ctx.restore();
                   });
               }
           });
       }
   }
   
}
const name = (params) => {
    
    Chart.register({
          
        afterDatasetsDraw(chart, easing) {
            // Only activate the plugin if it's made available
            // in the options
         
            // To only draw at the end of animation, check for easing === 1
            const { ctx } = chart;
    
            chart.data.datasets.forEach((dataset, i) => {
                const meta = chart.getDatasetMeta(i);
    
                if (!meta.hidden) {
                    meta.data.forEach((element, index) => {
                        // Draw the text in black, with the specified font
                        ctx.fillStyle = chart.options.plugins.xLabelsOnTop.fontColor || 'rgba(0, 0, 0, 0.87)';
                        const fontSize = 13;
                        const fontStyle = 'normal';
                        const fontFamily = 'Muli, Roboto, Helvetica Neue, Arial, sans-serif';
                        ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
    
                        // Just naively convert to string for now
                        const dataString = `${dataset.data[index].toString()}k`;
    
                        // Make sure alignment settings are correct
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        const padding = 15;
                        const startY = 24;
                        const position = element.tooltipPosition();
                        ctx.fillText(dataString, position.x, startY);
    
                        ctx.save();
    
                        ctx.beginPath();
                        ctx.setLineDash([5, 3]);
                        ctx.moveTo(position.x, startY + padding);
                        ctx.lineTo(position.x, position.y - padding);
                        ctx.strokeStyle = chart.options.plugins.xLabelsOnTop.borderColor || 'rgba(0, 0, 0, 0.87)';
    
                        ctx.stroke();
    
                        ctx.restore();
                    });
                }
            });
        }
    });
}
