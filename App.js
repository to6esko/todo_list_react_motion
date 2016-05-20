import React from 'react';
import {TransitionMotion, Motion, spring} from './react-motion-src/react-motion';
import presets from './presets';



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
    getDefaults = () => {
        let obj = {};
        obj = this.state.items.map((key) => {
            return obj[key] = {
                width: 0,
                opacity: 0,
                scale: 1
            }
        });
        return obj;
    }
    getEnds = () => {
        let obj = {};
        obj = this.state.items.map((key) => {
            return obj[key] = {
                width: spring(100),
                opacity: spring(1),
                scale: spring(1)
            }
        });
        return obj;
    }

    willLeave = () => {
        return {
            width: 0,
            opacity: 0,
            scale: 0
        }
    }
    willEnter = () => {
        return {
            width: 0,
            opacity: 0,
            scale: 1
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleAdd() }>Add Box</button>
                <hr/>
                <TransitionMotion
                    defaultStyles={this.getDefaults() }
                    styles={this.getEnds() }

                    willEnter={this.willEnter}
                    willLeave={this.willLeave}>
                    {(current) =>
                        <div>
                            {Object.keys(current).map((key) => {
                                let {width, opacity, scale} = current[key];
                                let style = {
                                    width,
                                    opacity,
                                    WebkitTransform: `scale(${scale})`,
                                    transform: `scale(${scale})`
                                }
                                return (
                                    <div
                                        className="blockContent"
                                        onClick={this.handleRemove.bind(null, key) }
                                        key={key}
                                        style={style}>
                                        {key}
                                    </div>
                                );
                            }) }
                        </div>
                    }
                </TransitionMotion>
            </div>
        )
    }
    /*   
         render() {
        return(
          <Motion 
          defaultStyle={{y: 500,x:450,z:10}} 
          style={{y: spring(100,presets.moble),x:spring(450),z:spring(2)}}>
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
    */
}

export default App;
