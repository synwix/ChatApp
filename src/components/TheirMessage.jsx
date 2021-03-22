const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username; //checking if the given message is the first by the given user
    return(
        <div className="message-row">
            {isFirstMessageByUser &&(
                <div
                    className="message-avatar"
                    style={{backgroundImage: message.sender && `url(${message.sender.avatar})`}} //making the background image the users avatar if the message is the senders first message
                />
            )}
            {message.attachments && message.attachments.length > 0
                ?(
                     <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"  
                        stlye={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                    />
                ) : (
                    <div className="message" style={{float: 'left', backgroundColor: '#CABCDC',marginLeft: isFirstMessageByUser ? '4px' : '48px'}}>
                        {message.text}
                    </div>
                )
            }
            
        </div>
    );
};

export default TheirMessage;