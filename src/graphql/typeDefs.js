export default `

  type Mutation {
    decrementCounter(unused: Boolean): Int
    incrementCounter(unused: Boolean): Int
    addTodo(text: String!): Todo
    toggleTodo(id: Int!): Todo
    addComment(id: Int!, name:String!, content:String!): Message
    startNewThread(id: Int!, name:String!, content:String!): Message
  }
   
  type Todo {
    id: Int!
    text: String!
    completed: Boolean!
  }
  
  type Query {
    counter: Int
    todos: [Todo]
    messages: [Message]
  }
    
  type Message {
  id: String!
  content: String!
  name: String!
  comments: [Message]
  }
  
  
`;

