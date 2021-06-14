import ListGroup from 'react-bootstrap/ListGroup';

function CommentItem(props) {
  console.log(props.comment)
  const ms = Date.now() - Date.parse(props.comment.createdAt);
  let days = Math.floor(ms/(1000*60*60*24));
  if (days === 0) {
      days = 'Today'
  } else {
      days = `${days} days ago`;
  };
  return (

    <>
      <ListGroup.Item className="post">
        <p>{props.comment.user} says:</p>
        <p>-{props.comment.body}</p>
        <p>Posted: {days}</p>
          
      </ListGroup.Item>
    </>
  )
};

export default CommentItem;