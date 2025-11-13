   let count = 0;

const Message = () => {
    console.log('Message rendered', count);
    count++;
    return <div> Message {count} </div>;
};

export default Message;