import PostCard from './PostCard';

function PostList(props) {
    if (props.posts.length === 0) {
        return <h3>No posts yet. Add one!</h3>
    };
    const sortedPosts = props.posts.sort((a,b) => Date.parse(b.createdAt)-Date.parse(a.createdAt));
    const postCards = sortedPosts.map(post => {
        return <PostCard key={post._id} post={post} />
    })
    return (
        <div>
            { postCards }
        </div>
    );
};

export default PostList;