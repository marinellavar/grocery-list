
import { Component } from "react";
import check from './check.jpg';

class GroseryList extends Component{
    state = {
        userInput: "",
        groseryList:[]

    }
    onChangeEvent(e){
        this.setState({userInput: e});
        console.log(e)
        }

        addItem(input){
            if (input ===''){
                alert("Please enter an item")
            }
            else {
            let listArray = this.state.groseryList;
            listArray.push(input);
            this.setState({groseryList: listArray, userInput: ""})
            console.log(listArray);
            }
        }
        deleteItem(){
            let listArray = this.state.groseryList;
            listArray = [];
            this.setState({groseryList:listArray})
        }

        crossedWord(e){
            const li = e.target;
            li.classList.toggle('crossed');
        }

        onFormSubmit(e){
            e.preventDefault();

        }




    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="conteiner">
                <input type="text"
                placeholder="What do you want to buy today?"
                onChange={(e) =>{this.onChangeEvent (e.target.value)}}
                value = {this.state.userInput}/>
            </div>
            <div className="conteiner">
            <button onClick={() => this.addItem(this.state.userInput)} className ="btn-add">Add</button>
            </div>
            <ul>
                {this.state.groseryList.map((item, index) =>(
                    <li onClick={this.crossedWord} key = {index}>
                    <img src ={check} width = '40px' alt="check-box"/>
                    {item}
                    </li>
                    
                ))}
            <div className="conteiner">
            <button onClick={() => this.deleteItem()} className ="btn-delete">Delete</button>
            </div>
            </ul>
            </form>
            </div>
        )
    }
}
export default GroseryList;