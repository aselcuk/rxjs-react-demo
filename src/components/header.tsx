import { addDataToPostList, getSelectedPost } from "src/actions/post-actions/post-actions";
import { postListState, selectedPostState } from "src/global-states/post-states/post-states";
import { useGlobalState } from "src/hooks/useGlobalState";
import { Post } from "src/models/post/post";
import { PostList } from "src/models/post/post-list";

export default function Header() {
    const postList = useGlobalState<PostList>(postListState);
    const selectedPost = useGlobalState<Post>(selectedPostState);

    const addData = () => {
        addDataToPostList();
        getSelectedPostAsGlobal({
            id: 1123,
            body: 'sadsdad',
            title: 'global state via useGlobalState hook',
            userId: 234
        })
    }

    const getSelectedPostAsGlobal = (post: Post) => {
        getSelectedPost(post);
    }

    return (
        <div>
            <div>
                <button type="button" onClick={addData}>add</button>
            </div>
            header post count: {postList.postList?.length}
            <hr/>
            selected post title: <span>{selectedPost.title}</span>
        </div>
    )
}
