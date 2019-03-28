import React from 'react';
import RenderComments from './RenderComments';

const Posts = ({comment, handleSubmit}) => {
    return (
        <div style={{paddingLeft: "20px", marginTop: "20px"}}>
            {comment && comment.map(comment => {
                let key = comment.id;
                return (
                    <RenderComments key={key} comment={comment} handleSubmit={handleSubmit}/>
                );
            })}
        </div>
    );
};

export default Posts;