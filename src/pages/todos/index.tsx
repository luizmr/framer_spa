import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components
import SelectComponent from 'components/selectComponent';
import TodoCards from './components/TodoCards';
import HeaderComponent from 'components/headerComponent';

// models
import { TodosOutput, UserOutput } from 'models/todo';

// services
import { TodoService } from 'services';

const Todos = () => {
	const [user, setUser] = useState<string>('1');
	const [users, setUsers] = useState<UserOutput[]>([
		{ id: 1, name: 'Carregando', username: 'carregando' },
	]);
	const [todos, setTodos] = useState<TodosOutput[]>([]);

	useEffect(() => {
		axios
			.all([TodoService.getAllTodos('1'), TodoService.getAllUsers()])
			.then(
				axios.spread(function (todos, users) {
					setUsers(users.data);
					setTodos(todos.data);
				}),
			);
	}, []);

	const handleChangeUser = (e: string) => {
		setUser(e);
		handleTodoSearch(e);
	};

	const handleTodoSearch = (value: string) => {
		TodoService.getAllTodos(value).then(({ data }) => {
			setTodos(data);
		});
	};

	return (
		<div className="general">
			<HeaderComponent
				title={'TO-DOs'}
				subtitle={
					'Escolha um usuário para trazer a sua respectiva lista de TO-DOs:'
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
			<TodoCards todos={todos} />
		</div>
	);
};

export default Todos;
