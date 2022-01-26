class CounterApp extends React.Component {
    constructor (props){
        super(props)
        this.handleIncr = this.handleIncr.bind(this)
        this.handleDecr = this.handleDecr.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state ={
            count : 0
            // count : props.count
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count')
        const count = parseInt(stringCount, 10)
    
        if (!isNaN(count)) {
          this.setState(() => ({ count }))
        }
      }
      componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
          localStorage.setItem('count', this.state.count)
        }
      }

    handleIncr(){
        this.setState((prevState)=>({count:prevState.count +1}))

    }handleDecr(){
        this.setState((prevState)=>({count:prevState.count -1}))
    }handleReset(){
        this.setState(()=>({count:0}))
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