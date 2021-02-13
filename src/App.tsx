import { useEffect, useState } from "react"
import { getPostList } from "./actions/post-actions/post-actions";
import { postListState } from "./global-states/post-states/post-states";
import { Post } from "./models/post/post";
import { PostList } from "./models/post/post-list";

export default function App() {

  const [postState, setPostState] = useState<PostList>();

  useEffect(() => {
    getPostList();

    const subscribe = postListState.subscribe(res => {
      setPostState(res);
    });

    return () => {
      subscribe.unsubscribe();
    }
  }, []);

  if (postState?.isLoading) {
    return <div>loading...</div>;
  }

  if (postState?.isError) {
    return <div>Error: {postState.isError.message}</div>
  }

  return (
    <div>
      {
        postState?.postList.map((item: Post) => (
          <div key={`post-${item.id}`}>{item.title}</div>
        ))
      }
    </div>
  )
}