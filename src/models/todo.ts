export interface UserOutput {
	id: number;
	name: string;
	username: string;
}

export interface TodosOutput {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
}
