import { useEffect, useState } from "react";
import { addDataToPostList } from "src/actions/post-actions/post-actions";
import { postListState } from "src/global-states/post-states/post-states";
import { PostList } from "src/models/post/post-list";

export default function Header() {
    const [postList, setPostList] = useState<PostList>();

    useEffect(() => {


        const subscribe = postListState.subscribe(res => setPostList(res));

        return () => {
            subscribe.unsubscribe();
        }
    }, []);

    const addData = () => {
        addDataToPostList();
    }

    return (
        <div>
            <div>
                <button type="button" onClick={addData}>add</button>
            </div>
            header post count: {postList && postList.postList.length}
        </div>
    )
}
