import { Component } from "react";
import './CreateStory.scss'
class CreateStory extends Component {
    render(){

        return (
            <div>
                <h1>Начнем путешествие</h1>
                <div className="column">
                    <h2>Выберите направление</h2>
                    <input>
                    </input>
                </div>
            </div>
        )
    }
}

/* function mapStateToProps(state){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return {

    }
} */
export default CreateStory