import React from "react";

class List extends React.Component{
    constructor(){
        super()
        this.state={
            list:[],
            newItem:''
        }
    }
    updateList(item){
        this.setState({
            newItem:item
        })
    }
    handleClick(value){
        let arr=this.state.list

        arr.push(value)

        this.setState({
            list:arr,
            newItem:''
        })
    }
    render(){
        return(
            <div>
                <input type="text" 
                placeholder="" 
                value={this.state.newItem}
                onChange={(e)=>this.updateList(e.target.value)}></input>
                <button onClick={()=>this.handleClick(this.state.newItem)}>Click</button>
            </div>
        )
    }
}

export default List