import React from 'react';
import RenderComments from './RenderComments';

const Comments = ({comments, handleSubmit}) => {
    return (
        <div style={{paddingLeft: "20px", marginTop: "10px"}}>
            {comments && comments.map(comment => {
                let key = comment.id;
                return (
                    <RenderComments key={key} comment={comment} handleSubmit={handleSubmit}/>
                );
            })}
        </div>
    );
};
export default Comments;