export default {
    counter: 0,
    todos: [
        {
            id: 1,
            text: "hello",
            completed: false,
            __typename: 'TodoItem'
        }
    ],
    messages: [
        {
            id: 1,
            name: "Tony stark",
            content: "Food ran out 4 days ago",
            __typename: 'POST',
            comments: [
                {
                    id: 2,
                    name: "Loki",
                    content: "he is the king of Asgard",
                    __typename: 'POST',
                    comments: [
                        {
                            id: 3,
                            name: "Black widow",
                            content: "Hello",
                            __typename: 'POST',
                            comments: []
                        }
                    ]
                },
                {
                    id: 10,
                    name: "Thor",
                    content: "There is no Asgard",
                    __typename: 'POST',
                    comments: []
                }
            ]
        },
        {
            id: 4,
            name: "captain marvel",
            content: "she is powerful than Thor",
            __typename: 'POST',
            comments: [
                {
                    id: 5,
                    name: "Falcon",
                    content: "he does not think so ",
                    __typename: 'POST',
                    comments: [
                        {
                            id: 6,
                            name: "Captain America",
                            content: "Lets check that out",
                            __typename: 'POST',
                            comments: [
                                {
                                    id: 7,
                                    name: "Black panther",
                                    content: "Wakanda forever",
                                    __typename: 'POST',
                                    comments: [
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};