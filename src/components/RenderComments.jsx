import React from "react";
import Comments from './Comments';
import {Mutation} from 'react-apollo';
import {POST_MUTATION} from './Constants'
import Button from '@beans/button';
import Icon from '@beans/icon';
import Input from '@beans/input';
import {CommentContainer} from './styles';

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

    nameComponent = () => {
        return(
            <Input placeholder="name" onChange={(e) => this.handleChange("name", e)}/>
        );
    };

    commentComponent = () => {
        return(
            <Input placeholder="comment" onChange={(e) => this.handleChange("comment", e)}/>
        );
    };

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
                    <div>
                        <CommentContainer>
                            {this.nameComponent()}
                            {this.commentComponent()}
                        </CommentContainer>
                        <Mutation mutation={POST_MUTATION} variables={{parentId, inputName, inputComment}}>
                            {(addComment) => (
                                <Button variant="primary" onClick={addComment}>{"Post"}</Button>
                            )}
                        </Mutation>
                    </div>
                )}
                <Comments key={comment.id} comments={comment.comments} handleSubmit={handleSubmit}
                          show={this.state.show}/>
            </React.Fragment>
        );
    }
}

export default RenderComments;