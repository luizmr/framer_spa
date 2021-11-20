export interface PostOutput {
	id: number;
	userId: number;
	title: string;
	body: string;
}

export interface CommentOutput {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}
