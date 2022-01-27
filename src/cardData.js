import { v4 as uuidv4 } from 'uuid';

const cardData =[
    {
        title:"Ticket1",
        description: "This is description for Ticket1",
        cardId: uuidv4()
    },
    {
        title:"Ticket2",
        description: "This is description for Ticket2",
        cardId: uuidv4()
    },
    {
        title:"Ticket3",
        description: "This is description for Ticket3",
        cardId: uuidv4()
    },
    {
        title:"Ticket4",
        description: "This is description for Ticket4",
        cardId: uuidv4()
    },
    {
        title:"Ticket5",
        description: "This is description for Ticket5"
    }
]

export default cardData;