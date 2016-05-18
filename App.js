import React from 'react';
import {Motion, spring} from 'react-motion';
import presets from './presets';



class App extends React.Component{
    constructor() {
        super();
    }
    
     render() {
    return(
      <Motion defaultStyle={{y: 500}} style={{y: spring(100,presets.woblly)}}>
      {(obj) =>{
          const {y}=obj;
          let style={
              WebkitTransform: `translate3d(0, ${y}px, 0)`,
                  transform: `translate3d(0, ${y}px, 0)`
          }
          return (
                <div style={style} className='block'>
                  
                  </div>
          )
      }}
      </Motion>
    )
  }
}

export default App;
