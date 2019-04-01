import React from "react";
import Comments from './Comments';
import {Mutation} from 'react-apollo';
import {POST_MUTATION} from './Constants'
import Button from '@beans/button';
import Icon from '@beans/icon';

class RenderComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: null,
            comment: null
        };
    }

    showReply() {
        this.setState({
            show: !this.state.show
        });
    }

    handleChange(name, e) {
        this.setState({
            [name]: e.target.value
        });
    }

    render() {
        let {comment, handleSubmit} = this.props;
        let [inputName, inputComment] = [this.state.name, this.state.comment];
        let parentId = comment.id;
        return (
            <React.Fragment key={comment.id}>
                <div style={{color: "#0000ff"}}>{comment.name} </div>
                <span>{comment.content} </span>
                <Button variant="primary" onClick={() => this.showReply()}><Icon graphic="comments"/></Button>
                {this.state.show && (
                    <form>
                        <input type="text" placeholder="name" name="name"
                               onChange={(e) => this.handleChange("name", e)}/>
                        <input type="text" placeholder="comment" name="comment"
                               onChange={(e) => this.handleChange("comment", e)}/>
                        <Mutation mutation={POST_MUTATION} variables={{parentId, inputName, inputComment}}>
                            {(addComment) => (
                                <input type="button" value="post"
                                       onClick={addComment}/>
                            )}
                        </Mutation>
                    </form>
                )}
                <Comments key={comment.id} comments={comment.comments} handleSubmit={handleSubmit}
                          show={this.state.show}/>
            </React.Fragment>
        );
    }
}

export default RenderComments;