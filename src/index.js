import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './form.css';


 class App extends Component {
    
        constructor(props){
            super(props)
           
            this.state={
                username:'',
                lesson:'',
                date:''
            }
        }
        reset=()=>{
            this.setState(
                {
                    username:'',
                    lesson:'',
                    date:'' 
                }
            )
        }
    
        usernameHandler=(event)=>{
            this.setState({
                username : event.target.value
            })
        }
        lessonHandler=(event)=>{
            this.setState({
                lesson : event.target.value
            })
        }
        dateHandler=(event)=>{
            this.setState({
                date : event.target.value
            })
        }
    
        submitHandler=(event)=>{
            alert(`
            Kullanici: ${this.state.username}
            Ders: ${this.state.lesson}
            Tarih: ${this.state.date}`)
            event.preventDefault()
        }
    
    
    render(){
       
        return (
            <div>
                <h1 className="box">Basic Form with React</h1>
               <form className="form"
               onSubmit={this.submitHandler}>
                   <div className="formBox">
                    <div>
                        <input 
                        onChange={this.usernameHandler}
                        value={this.state.username} 
                        type="text"/>
                    </div>
                    <div>
                        <select 
                        onChange={this.lessonHandler}
                        value={this.state.lesson}>
                            <option>Pyton</option>
                            <option>Javascript</option>
                            <option>React</option>
                        </select>
                    </div>
    
                    <div>
                        <input 
                        onChange={this.dateHandler}
                        value={this.state.date}
                        type="date"/>
                    </div>
                    </div>
                   
                    <button type="submit">Send</button>
               </form>
              
               <button  onClick={this.reset}type="submit">Reset</button>
    
            </div>
        )
    }
}
export default App;

ReactDom.render(<App/>, document.querySelector("#root") )