import { Post } from "./post";

export interface PostList {
    isLoading: boolean;
    isError: any;
    postList: Post[];
}