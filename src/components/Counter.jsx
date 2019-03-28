import React from 'react';
import {Query} from 'react-apollo';
import Comments from './Comments';
import {Mutation} from 'react-apollo';
import {GET_POSTS, START_NEW_THREAD} from './Constants';

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            comment: null
        };
    }

    handleSubmit() {
        console.log("id", this.state.name, this.state.comment);
    }

    handleChangeText(name, e) {
        this.setState({
            [name]: e.target.value
        });
    }

    render() {
        let [parentId, inputName, inputComment] = [1, this.state.name, this.state.comment];

        return (
            <div>
                <Query query={GET_POSTS}>
                    {({data}) => {
                        return (<Comments comments={data.messages}
                                          handleSubmit={(e, key, name, comment) => this.handleSubmit(e, key, name, comment)}/>);
                    }}
                </Query>
                <span style={{paddingLeft: "20px", fontStyle: "italic"}}>
                    Start a new Thread
                </span>
                <form style={{paddingLeft: "20px"}}>
                    <input type="text" placeholder="name" name="name"
                           onChange={(e) => this.handleChangeText("name", e)}/>
                    <input type="text" placeholder="comment" name="comment"
                           onChange={(e) => this.handleChangeText("comment", e)}/>

                    <Mutation mutation={START_NEW_THREAD} variables={{parentId, inputName, inputComment}}>
                        {(startNewThread) => (
                            <input type="button" value="post" className="btn"
                                   onClick={startNewThread}/>
                        )}
                    </Mutation>
                </form>
            </div>
        );
    }
}

export default Counter;