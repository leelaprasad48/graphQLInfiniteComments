import gql from 'graphql-tag';
let nextCommentId = 20;

export default {
    Mutation: {
        addComment: (_, {parentId, name, content}, {cache}) => {
            const query = gql`
              {
                messages @client {
                    id
                    name
                    content
                    comments {
                        id
                        name
                        content
                        comments {
                            id
                            name
                            content
                            comments {
                                id
                                name
                                content
                                    comments {
                                    id
                                    name
                                    content
                                    comments {
                                        id
                                        name
                                        content
                                         comments
                                    }
                                }
                            }
                        }
                    }
                }
              }
              
            `;
            const previous = cache.readQuery({ query });
            const newMessage = {
                id: nextCommentId++,
                content: content,
                name: name,
                comments: [],
                __typename: 'POST'
            };
            let messagesArray = previous.messages;
            let findObjectById = function (obj, parentId, newMessage) {
                obj.forEach(innerObj => {
                    if(innerObj.id === parentId) {
                        let comments = innerObj.comments;
                        comments.push(newMessage);
                        return true;
                    }
                    else{
                        let innerComments = innerObj.comments;
                        if(innerComments && innerComments.length) {
                            findObjectById(innerComments, parentId, newMessage);
                        }
                    }
                })
            };
            findObjectById(messagesArray, parentId, newMessage);
            const data = {
                messages: messagesArray
            };
            cache.writeQuery({query, data });
            return newMessage;
        },
        startNewThread: (_, {parentId, name, content}, {cache}) => {
            const query = gql`
              {
                messages @client {
                    id
                    name
                    content
                    comments {
                        id
                        name
                        content
                        comments {
                            id
                            name
                            content
                            comments {
                                id
                                name
                                content
                                    comments {
                                    id
                                    name
                                    content
                                    comments {
                                        id
                                        name
                                        content
                                         comments
                                    }
                                }
                            }
                        }
                    }
                }
              }
              
            `;
            const previous = cache.readQuery({ query });
            const newMessage = {
                id: nextCommentId++,
                content: content,
                name: name,
                comments: [],
                __typename: 'POST'
            };
            const data = {
                messages: previous.messages.concat([newMessage])
            };
            cache.writeQuery({query, data });
            return newMessage;
        }
    }
}