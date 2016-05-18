import React from 'react';
import {Motion, spring} from 'react-motion';
import presets from './presets';



class App extends React.Component{
    constructor() {
        super();
    }
    
     render() {
    return(
      <Motion 
      defaultStyle={{y: 500,z:10}} 
      style={{y: spring(100,presets.moble),z:spring(2)}}>
      {(obj) =>{
          const {y,z}=obj;
          let style={
              WebkitTransform: `translate3d(100px, ${y}px,0) scale(${z}) `,
                  transform: `translate3d(100px, ${y}px,0) scale(${z}) `
          }
          return (
                <div style={style} className='block'></div>
          )
      }}
      </Motion>
    )
  }
}

export default App;
