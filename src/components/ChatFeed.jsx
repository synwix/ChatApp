import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
//importing chat feed components
const ChatFeed = (props) => {
    const {chats, activeChat, userName, messages } = props;
    //Scructuring the props
    const chat = chats && chats[activeChat]; //finding the currently active chat

    const renderReadReceipts = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div
                key={`read_${index}`}
                className="read-receipt"    
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: `url(${person.person.avatar})`
                }}
            />
        ));
    }


    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1]; //finding the last message
            const isMyMessage = userName === message.sender.username; //checking wether the message is the given users

            return (
                <div key={`msg_${index}`} style = {{width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message}/>
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>//passing props to messages
                        }
                    </div>
                    <div className = "read-receipts" style ={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}/*changing the style depending on wether the message is the given users or not*/>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>

            );
        });
    };

    renderMessages()

    if(!chat) return 'Loading...';

    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}
                
                </div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}}/>
            <div className="message-form-container">
                <MessageForm {... props} chatId={activeChat}/>
            </div>
        </div>//the structure of the chat feed
    );
};

export default ChatFeed;