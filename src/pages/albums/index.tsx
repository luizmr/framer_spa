import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components
import HeaderComponent from 'components/headerComponent';
import SelectComponent from 'components/selectComponent';

// models
import { UserOutput } from 'models/todo';
import { AlbumOutput } from 'models/album';

// services
import { AlbumService, TodoService } from 'services';
import AlbumCards from './components/AlbumCards';

const Albums = () => {
	const [user, setUser] = useState<string>('1');
	const [users, setUsers] = useState<UserOutput[]>([
		{ id: 1, name: 'Carregando', username: 'carregando' },
	]);
	const [albums, setAlbums] = useState<AlbumOutput[]>([]);

	useEffect(() => {
		axios
			.all([AlbumService.getAllAlbums('1'), TodoService.getAllUsers()])
			.then(
				axios.spread(function (albums, users) {
					console.log(albums.data);
					setUsers(users.data);
					setAlbums(albums.data);
				}),
			);
	}, []);

	const handleChangeUser = (e: string) => {
		setUser(e);
		handleTodoSearch(e);
	};

	const handleTodoSearch = (value: string) => {
		AlbumService.getAllAlbums(value).then(({ data }) => {
			setAlbums(data);
		});
	};

	return (
		<div className="general">
			<HeaderComponent
				title={'Albums'}
				subtitle={
					'Escolha um usuário para trazer o seu respectivo album:'
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
			<AlbumCards albums={albums} />
		</div>
	);
};

export default Albums;
