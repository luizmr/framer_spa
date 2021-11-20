import { useEffect, useState } from 'react';

// material-ui
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

// components
import CardListHomePage from './components/CardListHomePage';
import SkeletonFinalPage from './components/SkeletonFinalPage';

// Interfaces
import { HomePageCardOutput } from 'models/homepage';

const HomePage = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const cards: HomePageCardOutput[] = [
		{
			icon: <ListAltRoundedIcon />,
			slug: 'todo',
			path: '/todos',
		},
		{
			icon: <PhotoLibraryOutlinedIcon />,
			slug: 'albuns',
			path: '/albums',
		},
		{
			icon: <TextsmsOutlinedIcon />,
			slug: 'postagens',
			path: '/posts',
		},
	];

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	return (
		<>
			<div className="homepage">
				<div className="homepage__header">
					<p>Seja bem vindo a escolha de listagens:</p>
				</div>
				{!loading ? (
					<CardListHomePage cards={cards} />
				) : (
					<SkeletonFinalPage cards={cards} />
				)}
			</div>
		</>
	);
};

export default HomePage;
