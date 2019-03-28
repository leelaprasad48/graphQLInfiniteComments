import gql from "graphql-tag";

export const GET_POSTS = gql`
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

export const POST_MUTATION = gql`
mutation addComment($parentId:Int!, $inputName: String!, $inputComment: String!) {
  addComment(parentId: $parentId, name: $inputName, content: $inputComment) @client {
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
export const START_NEW_THREAD = gql`
mutation startNewThread($parentId:Int!, $inputName: String!, $inputComment: String!) {
  startNewThread(parentId: $parentId, name: $inputName, content: $inputComment) @client {
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