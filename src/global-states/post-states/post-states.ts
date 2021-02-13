import { BehaviorSubject } from "rxjs";
import { Post } from "src/models/post/post";
import { PostList } from "src/models/post/post-list";

export const postListState = new BehaviorSubject<PostList>({
    isError: '',
    isLoading: true,
    postList: new Array<Post>()
});