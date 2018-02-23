import React, {Component} from "react";
import {Title,  TodoForm, TodoList} from "./Widgets";
import  axios from "axios";
import { connect } from 'react-redux';
import Api from "./RestApi";

console.log(Api);
// Contaner Component
// Todo Id
window.id = 0;
class TodoApp extends Component{
    constructor(props){
        // Pass props to parent class
        super(props);
        // Set initial state
    //    this.state = {
    //        data: []
    //    }

        this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos';
    }

    // Lifecycle method
    componentWillMount(){
        // Make HTTP reques with Axios
        axios.get(this.apiUrl)
            .then((res) => {
                // Set state with result
              //  this.setState({data:res.data});
                this.props.initData(res.data);
            });
    }

    // Add todo handler
    addTodo(val){
        // Assemble data
        const todo = {text: val}
        // Update data
        axios.post(this.apiUrl, todo)
            .then((res) => {
             //   this.state.data.push(res.data);
             //   this.setState({data: this.state.data});
               this.props.addTodo(res.data);
            });
    }
    // Handle remove
    handleRemove(id){
        // Filter all todos except the one to be removed
        //const remainder = this.state.data.filter(
        // (todo) => {
            const remainder = this.props.data.filter((todo) => {
            if(todo.id !== id) return todo;
        });
        // Update state with filter
        axios.delete(this.apiUrl+'/'+id)
            .then((res) => {
                //this.setState({data: remainder});
                this.props.initData(remainder);
            })
    }
    render(){
        // Render JSX
        return (
            <div>
                <Title />
                <TodoForm addTodo={this.addTodo.bind(this)}/>
                <TodoList
                    todos={
                        //this.state.data
                        this.props.data}
                    remove={this.handleRemove.bind(this)}
                />
            </div>
        );
    }
}

//export default TodoApp;
export default connect(
    store=>({data: store.data}),
     dispatch=>({
        initData: data=>dispatch({type: "INIT_DATA", payload: data}),
         addTodo: data=>dispatch({type: "ADD_TODO", payload: data}),
     })
)(TodoApp)