import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components
import SelectComponent from 'components/selectComponent';
import HeaderComponent from 'components/headerComponent';

// models
import { UserOutput } from 'models/todo';
import { PostOutput } from 'models/post';

// services
import { PostService, TodoService } from 'services';
import PostCards from './components/PostCards';

const Posts = () => {
	const [user, setUser] = useState<string>('1');
	const [users, setUsers] = useState<UserOutput[]>([
		{ id: 1, name: 'Carregando', username: 'carregando' },
	]);
	const [posts, setPosts] = useState<PostOutput[]>([]);

	useEffect(() => {
		axios
			.all([PostService.getAllPosts('1'), TodoService.getAllUsers()])
			.then(
				axios.spread(function (posts, users) {
					setUsers(users.data);
					setPosts(posts.data);
				}),
			);
	}, []);

	const handleChangeUser = (e: string) => {
		setUser(e);
		handleTodoSearch(e);
	};

	const handleTodoSearch = (value: string) => {
		PostService.getAllPosts(value).then(({ data }) => {
			setPosts(data);
		});
	};

	return (
		<div className="general">
			<HeaderComponent
				title={'Postagens'}
				subtitle={
					'Escolha um usuário para trazer a sua lista de postagens:'
				}
			/>
			<div className="general__select">
				<SelectComponent
					label={'Usuário'}
					value={user}
					options={users}
					handleChange={handleChangeUser}
				/>
			</div>
			<hr />
			<PostCards posts={posts} />
		</div>
	);
};

export default Posts;
