import React from 'react';
import {TransitionMotion, StaggeredMotion, Motion, spring} from './react-motion-src/react-motion';
import presets from './presets';



// work
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [0, 1, 2, 3],
            currentCount: 3
        }
    }

    handleAdd = (key) => {
        let items = this.state.items;
        let currentCount = this.state.currentCount + 1;
        items.push(currentCount);
        this.setState({ items, currentCount });
    }

    handleRemove = (key) => {
        let items = this.state.items;
        let keyIndex = items.indexOf(+ key);
        if (keyIndex !== -1) {
            items.splice(keyIndex, 1);
            this.setState({ items });
        }
    }


    render() {
        return (
            <div>
                <button onClick={() => this.handleAdd() }>Add Box</button>
                <hr/>
                <div>
                    {this.state.items.map((key) => {
                        const sign = key % 2 === 0 ? 1 : -1;
                        return <Motion key={key} defaultStyle={{ rotate: 0, scale:0,opacity:1 }}
                            style={{ rotate: spring(sign * 360, presets.moble), scale:spring(1) }}>
                            {(obj) => {
                                const {rotate,scale} = obj;
                                let style = {
                                    transform: `rotate(${rotate}deg) scale(${scale})`
                                    
                                }
                                return <div style={style} onClick={this.handleRemove.bind(null, key) } className="block"></div>
                            } }
                        </Motion>
                    }) }
                </div>
            </div>
        )
    }
}
/*
//work
     render() {
    return(
      <Motion 
      defaultStyle={{y: 500,x:450,z:10}} 
      style={{y: spring(100,presets.moble),x:spring(450),z:spring(2,presets.moble)}}>
      {(obj) =>{
          const {y,x,z}=obj;
          let style={
              WebkitTransform: `translate3d(${x}px, ${y}px,0) scale(${z}) `,
                  transform: `translate3d(${x}px, ${y}px,0) scale(${z}) `
          }
          return (
              <div style={style} className='block'>
                  <h1>Wellcome to Todor's page</h1>
              </div>
          )
      }}
      </Motion>
 
    )
  }
 
}
*/
/*
//not work
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: Array.from(Array(8).keys())
        }
    }
/*
    getDefaults=()=> {
        return this.state.items.map((key) => ({
        ...items, val:{
                rotate: 0,
                scale: 1
            }
        }))
}
 getEnds=()=> {
     return this.state.items.map((key) => ({
        ...items, val:{
             rotate: 360,
             scale: 1
         }
        }))
}
  
    getDefaults = () => {
        let obj = {};
       this.state.items.forEach((key) => {
            obj[key] = {
                    rotate: 0,
                    scale: 1
            }
        })
        console.log(obj);
        return obj;
    }

    getEnds = () => {
        let obj = {};
        this.state.items.forEach((key) => {
             obj[key] = {
                    rotate: spring(360),
                    sclae: spring(1)
            }
        })
        console.log(obj);
        return obj;
    }

    render() {
        return (
            <Motion
                defaultStyle={{rotate:360} }
                style={this.getEnds() }>
                {(current) =>
                    <div>
                        {Object.keys(current).map((key) => {
                            const {rotate, scale} = current[key];
                            
                            let style = {
                                transform: `rotate(${rotate}deg) scale(${scale})`
                            }
                            return (
                                <div
                                    className="blockContent"
                                    key={key}
                                    style={style}>
                                    {key}
                                </div>
                            )
                        }) }
                    </div>
                }
            </Motion>
        )
    }
}
*/
/*
//work
class App extends React.Component {
    constructor() {
        super();
        const totalNumber = 8;
        this.state = {
            items: Array.from(Array(totalNumber).keys())
        }
    }


    render() {
        return (
            <div>
                {this.state.items.map((key) => {
                    const sign = key % 2 === 0 ? 1: -1;
                    return <Motion key={key} defaultStyle={{ rotate: 0 }}
                        style={{ rotate: spring(sign*360, presets.moble) }}>
                        {(obj) => {
                            const {rotate} = obj;
                            let style = {
                                transform: `rotate(${rotate}deg)`
                            }
                            return <div style={style} className="block"></div>
                        } }
                    </Motion>
                })}        
           </div>
        )
    }
}
*/
export default App;
