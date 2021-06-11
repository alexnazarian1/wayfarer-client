function PostCard(props) {
    const ms = Date.now() - Date.parse(props.post.createdAt);
    let days = Math.floor(ms/(1000*60*60*24));
    if (days === 0) {
        days = 'Today'
    } else {
        days = `${days} days ago`;
    };
    return (
        <div>
            <h3>{props.post.title} by {props.post.user}</h3>
            <p>{props.post.body}</p>
            <p>Posted: {days}</p>
        </div>
    );
};

export default PostCard;