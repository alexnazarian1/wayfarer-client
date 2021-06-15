import ListGroup from 'react-bootstrap/ListGroup';

function CommentItem(props) {
  const ms = Date.now() - Date.parse(props.comment.createdAt);
  let days = Math.floor(ms/(1000*60*60*24));
  if (days === 0) {
      days = 'Today'
  } else {
      days = `${days} days ago`;
  };
  return (
      <div className="comment-container">
        <ListGroup.Item className="post">
          <strong><p>{props.comment.user} says:</p></strong>
          <p>-{props.comment.body}</p>
          <p className="day-posted">Posted: {days}</p>
        </ListGroup.Item>
      </div>
  )
};

export default CommentItem;