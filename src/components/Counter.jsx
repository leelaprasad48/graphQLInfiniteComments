import React from 'react';
import {Query} from 'react-apollo';
import Comments from './Comments';
import {Mutation} from 'react-apollo';
import {GET_POSTS, START_NEW_THREAD} from './Constants';
import {CommentContainer} from "./styles";
import Input from '@beans/input';
import Button from '@beans/button';




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

    nameComponent = () => {
        return(
            <Input placeholder="name" onChange={(e) => this.handleChangeText("name", e)}/>
        );
    };

    commentComponent = () => {
        return(
            <Input placeholder="comment" onChange={(e) => this.handleChangeText("comment", e)}/>
        );
    };

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

                    <CommentContainer>
                        {this.nameComponent()}
                        {this.commentComponent()}
                    </CommentContainer>
                    <Mutation mutation={START_NEW_THREAD} variables={{parentId, inputName, inputComment}}>
                        {(startNewThread) => (
                            <Button variant="primary" onClick={startNewThread}>{"Post"}</Button>
                        )}
                    </Mutation>

                </form>
            </div>
        );
    }
}

export default Counter;