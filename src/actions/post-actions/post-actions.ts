import { map } from "rxjs/operators";
import { Post } from "src/models/post/post";
import { getPosts } from "src/services/post-service/post-service";
import { postListState, selectedPostState } from 'src/global-states/post-states/post-states'
import { AxiosResponse } from "axios";

export function getPostList(): void {
    postListState.next({
        ...postListState.value,
        isLoading: true
    });

    const response = getPosts();

    response
        .pipe(
            map((res: AxiosResponse<any>) => {

                const data: Array<any> = res.data;

                return data.map(item => {
                    return {
                        id: item.id,
                        userId: item.userId,
                        title: item.title,
                        body: item.body
                    } as Post;
                })
            })
        )
        .subscribe({
            next: (val: Post[]) => {
                postListState.next({
                    ...postListState.value,
                    postList: [...val]
                });
            },
            complete: () => {
                postListState.next({
                    ...postListState.value,
                    isLoading: false,
                    isError: false
                });
            },
            error: (err: any) => {
                postListState.next({
                    ...postListState.value,
                    isLoading: false,
                    isError: err
                });
            }
        });
}

export function addDataToPostList(): void {
    postListState.next({
        ...postListState.value,
        isLoading: true
    });

    setTimeout(() => {
        const newItem: Post = {
            id: 213223,
            userId: 2343,
            body: 'deneme',
            title: 'test'
        };

        postListState.next({
            ...postListState.value,
            postList: [...postListState.value.postList, newItem],
            isLoading: false
        });
    }, 800);
}

export function getSelectedPost(post: Post): void {
    selectedPostState.next({
        ...selectedPostState.value,
        isLoading: true
    });

    setTimeout(() => {
        const asSelectedItem: Post = {
            id: post.id,
            userId: post.userId,
            body: post.body,
            title: post.title
        };

        selectedPostState.next({
            ...asSelectedItem,
            isLoading: false
        });
    }, 800);
}