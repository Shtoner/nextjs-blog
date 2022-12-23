import Layout from "./layout";
import React, { useState, useEffect,useRef } from 'react';
import PropTypes from 'prop-types';
import {ColorPicker,useColor} from 'react-color-palette'
// const Canvas = props => {
//     const [coords, setCoords] = useState({x: 0, y: 0});
//     const [prevcoords, setPrevCoords] = useState({x: 0, y: 0});
//     const canvasRef = React.useRef();
//     //   console.log(canvasRef)
//     // const { draw, ...rest } = props
// // function Ye(){
//     // let coord = { x: 0, y: 0 };

//     const Reposition =(event)=> {
//         // console.log(event.clientX)
//         // console.log(coords)
//         // console.log(prevcoords)
//         // console.log('reposition')
//         setPrevCoords({ ...coords });
// console.log(event)
//         setCoords({
//           x: event.offsetX ,
//           y: event.offsetY ,
//         });
//         // coords.x = event.clientX - canvasRef.current.offsetLeft;
//         // coords.y = event.clientY - canvasRef.current.offsetTop;
//       } 





//       const draw = () => {
//         // requestAnimationFrame(draw)

//         document.addEventListener('mousedown',function(evt){
//             const canvas = canvasRef.current
//             const contxt = canvas.getContext('2d')
//             Reposition(event)


//         // function resize() {
//         //     canvas.width = window.innerWidth;
//         //     canvas.height = window.innerHeight;
//         // }
// //         console.log(contxt)
// //         /         setPrevCoords({ ...coords });
// // console.log(event)
// //         setCoords({
// //           x: event.offsetX ,
// //           y: event.offsetY ,
// //         });
//         // contxt.beginPath(coord.x, coord.y)
        
        
//         // let animationFrameId
//         // timer = setInterval(function(){

//         // const render = () =>{
//         // requestAnimationFrame(draw)

//             console.log('fire')
//             contxt.lineWidth = 5;
//             contxt.lineCap = 'round';
//             contxt.strokeStyle = '#ACD3ED';
//             // contxt.beginPath(coords.x,coords.y)
//             contxt.moveTo(prevcoords.x, prevcoords.y);
//             contxt.lineTo(coords.x, coords.y);
//             contxt.stroke();
            
//         })
            
//         //     // draw(ctx)
//             // window.requestAnimationFrame(render)
//         //             //     return() =>{
//         // //     // console.log(draw)
            
//             // window.cancelAnimationFrame(render)
//         // // }
//         // }
//         // render()
//     //  }, 5);
// }
//     const D=()=>{
// window.addEventListener('mousemove',function(){
// draw()
// // })
// })
// }
//         useEffect(()=>{
//             function resize() {
//                 const canvas = canvasRef.current
//                 // const contxt = canvas.getContext('2d')
//                 canvas.width = window.innerWidth;
//                 canvas.height = window.innerHeight;
//             }resize()
//          },[])
//         // let timer = null

// //         timer = setInterval(function(){
// // console.log('rr')
// //      }, 5);

//         //     return() =>{
//         //     // console.log(draw)
            
//         //     window.cancelAnimationFrame(animationFrameId)
//         // }
    
//     // const render = () => {
//     //     contxt.lineWidth = 5;
//     //     contxt.lineCap = 'round';
//     //     contxt.strokeStyle = '#ACD3ED';
      
//     //     // Save the current position before moving to a new position
//     //     const currentPos = { x: coords.x, y: coords.y };
      
//     //     // Move to the current position
//     //     contxt.moveTo(currentPos.x, currentPos.y);
      
//     //     // Draw a line to the new position
//     //     contxt.lineTo(coords.x, coords.y);
//     //     contxt.stroke();
      
//     //     frameCount++;
      
//     //     // Update the current position to the new position
//     //     setCoords(currentPos);
      
//     //     animationFrameId = window.requestAnimationFrame(render);
//     //   }
//         // return() =>{
//         //     // console.log(draw)
            
//         //     window.cancelAnimationFrame(animationFrameId)
//         // }
    
//     //  function start(event) {
//     //     console.log('start')
//     //     document.addEventListener('mousemove', draw);
//     //     Reposition;

//     //   }
//     const Stop =()  => {
//         console.log('stop')
// // cancelAnimationFrame(draw)

//         window.removeEventListener('mousemove', D);
//       }   
//     // const draw = ctx => {
//     //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
//     //     ctx.fillStyle = '#000000'
//     //     ctx.beginPath()
//     //     ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
//     //     ctx.fill()
//     //   }            ctx.beginPath();


//     // useEffect(() => {
//         // document.addEventListener('mousedown', start);
//         // document.addEventListener('mouseup', stop);
//         // window.addEventListener('resize', resize);
//         // const canvas = canvasRef.current
//         // const contxt = canvas.getContext('2d')
        
//         // function resize() {
//         //     canvas.width = window.innerWidth;
//         //     canvas.height = window.innerHeight;
//         //   }
//         // let animationFrameId


//             // document.addEventListener('mousedown', start);
//             // document.addEventListener('mouseup', stop);

//         //draw here
//         // const draw = (ctx, frameCount) => {
//         //     console.log(draw)
//         //     // document.addEventListener('mousedown', start);
//         //     // document.addEventListener('mouseup', stop);
//         //     ctx.beginPath();
//         //         ctx.lineWidth = 5;
//         //         ctx.lineCap = 'round';
//         //         ctx.strokeStyle = '#ACD3ED';
//         //         ctx.moveTo(coord.x, coord.y);
//         //         Reposition;
//         //         ctx.lineTo(coords.x, coords.y);
//         //         ctx.stroke();
//         //       }

//     // },[])}
//     return (<div onClick={D}  onMouseUp={Stop}
//         >
//     <canvas   style={{"backgroundColor":"white",
//     "width":"100%",
//     }}  ref={canvasRef} {...props}/>
//     </div>)
// };

// Canvas.propTypes = {
//   draw: PropTypes.func.isRequired,
// };

const Canvas = props => {
    // const { draw, ...rest } = props
    const [coords, setCoords] = useState({x: 0, y: 0});
    const [prevcoords, setPrevCoords] = useState({x: 0, y: 0});  
    const [color, setColor] = useColor("hex", "#121212")
    const [isMouseDown, setisMouseDown] = useState(false)
    const canvasRef = React.useRef(null);

    const Reposition =(event)=> {   
      console.log(event);
    if(!event){
      return
    }else{
  setPrevCoords({ ...coords });
console.log(event)

console.log(prevcoords)
console.log(coords)
  setCoords({
    x: event.clientX ,
    y: event.clientY ,
  });
}
   }

        
        
         let frameCount=0
         let animationFrameId
    const draw = () => {
        const canvas = canvasRef.current
        const contxt = canvas.getContext('2d')
     
        Reposition(event)
        console.log(color)
            contxt.lineWidth = 5;
            contxt.lineCap = 'round';
            contxt.strokeStyle =  color.hex;

        contxt.beginPath()

            contxt.moveTo(prevcoords.x, prevcoords.y);
            contxt.lineTo(coords.x, coords.y);
            contxt.stroke();  


              // render()
            }

           function handledraw(){
  

            }
    const handlemouseup=()=>{
       setisMouseDown(false)
       console.log(isMouseDown)

    }
const handlemousedown =()=>{
setisMouseDown(true)

      console.log(isMouseDown)
}
 // requestAnimationFrame(draw)    
 const handlemousemove=()=>{
  if(isMouseDown===true){
    draw()
  }else{
    return
  } 
 } 


// const Run = ()=>{
//   const timerId = setInterval(() => {
//     draw()
//                 }, 500)
              
//                 return () => clearInterval(timerId)
// }
// document.addEventListener('mousedown',)

//     const D=()=>{
// window.addEventListener('mousemove',function(){
// draw()})
// }  
// const canvas = canvasRef.current
// const contxt = canvas.getContext('2d')
      useEffect(()=>{
 

   
            function resize() {
        const canvas = canvasRef.current

                // const contxt = canvas.getContext('2d')
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            resize()

            // const render = () => {

        
            //   // frameCount++
            //   draw()
            //   animationFrameId = window.requestAnimationFrame(render)
            //           }
            // render()
            // return cancelAnimationFrame(animationFrameId)
  }, [])

//           const Stop =()  => {
//         console.log('stop')
// // cancelAnimationFrame(draw)

//         window.removeEventListener('mousemove', D);
//       }      
return (
  <>
    <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHEX hideHSV/>
       <div onMouseMove={handlemousemove} onMouseDown={(e)=>{handlemousedown()}} 
        onMouseUp={(e)=>{handlemouseup()}} 
        >
    <canvas style={{"background-color":"black"}}    ref={canvasRef} />
    </div>
    </>)

}
export default function Aye(){
 

    return(
<Layout>
  <Canvas />
</Layout>    )
}