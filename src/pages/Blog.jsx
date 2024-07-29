import AddPostForm from '../components/AddPostForm';
import PostList from '../components/PostList';

function Blog() {
  return (
    <div className='flex flex-col gap-10'>
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default Blog