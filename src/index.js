import React, { Component } from 'react'
import ReactDom from 'react-dom'


 class App extends Component {
    render() {
        return (
            <div>
              <h1>Hi, react</h1>
            </div>
        )
    }
}
export default App;

ReactDom.render(<App/>, document.querySelector("#root") )