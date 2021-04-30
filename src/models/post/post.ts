import { Base } from '../item/Base'
export interface Post extends Base {
    id: number;
    userId: number;
    title: string;
    body: string;
}