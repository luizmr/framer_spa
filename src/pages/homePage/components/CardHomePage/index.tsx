import { Link } from 'react-router-dom';

import { Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles({
	card: {
		width: 144,
		height: 133,
	},
});

type Props = {
	icon: any;
	index: number;
	path: string;
};

const CardHomePage = ({ icon, index, path }: Props) => {
	const classes = useStyles();

	const names = ['TO-DOs', 'Albuns', 'Postagens'];

	return (
		<>
			<Link to={`${path}`} key={index} className={'homepage__card-link'}>
				<Card className={`homepage__card-link__header ${classes.card}`}>
					<CardContent className="homepage__card-link__header-content">
						<span className="icon">{icon}</span>
						<span> {names[index]} </span>
					</CardContent>
				</Card>
			</Link>
		</>
	);
};

export default CardHomePage;
