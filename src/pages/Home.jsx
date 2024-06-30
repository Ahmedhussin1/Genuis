import AddPostForm from "../components/AddPostForm";
import PostList from "../components/PostList";
import TopTrackChart from "../components/TopTrackChart";

function Home() {
  return (
    <div>
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default Home;
