import Comment from './Comment'

function CommentList(props) {

  // console.log(props.comments)
  const commentItems = props.comments.map(comment => {
    return <Comment comment={comment}/>
    
  });
  return (
    <>
      {commentItems}
    </>
  )
};

export default CommentList;



// const sortedPosts = this.state.posts.sort((a,b) => Date.parse(b.createdAt)-Date.parse(a.createdAt));
//         const postItems = sortedPosts.map(post => {
//             return <PostItem key={post._id} post={post}