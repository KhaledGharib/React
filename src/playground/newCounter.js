class CounterApp extends React.Component {
    constructor (props){
        super(props)
        this.handleIncr = this.handleIncr.bind(this)
        this.handleDecr = this.handleDecr.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state ={
            count : props.count
        }
    }



    handleIncr(){
        this.setState((prevState)=> {
            return{
                count : prevState.count +1
            }
        })
    }handleDecr(){
        this.setState((prevState)=>{
            return{
                count : prevState.count -1
            }
        })
    }handleReset(){
        this.setState(()=>{
            return{
                count : 0
            }
        })
    }
    render(){
        
        return(
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick={this.handleIncr}>+1</button>
                <button onClick={this.handleDecr}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}


CounterApp.defaultProps={
    count :0
}

ReactDOM.render(<CounterApp />, document.getElementById("app"))