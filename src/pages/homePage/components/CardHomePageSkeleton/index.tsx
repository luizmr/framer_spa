// Material-ui/icons
import { Card } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles({
	card: {
		width: 144,
		height: 133,
		padding: 4,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
});

const CardHomePageSkeleton = () => {
	const classes = useStyles();
	return (
		<div className="homepage__card-link">
			<Card className={`homepage__skeleton-card ${classes.card}`}>
				<Skeleton
					variant="rectangular"
					animation={'wave'}
					width={35}
					height={35}
					style={{
						marginBottom: '20px',
						marginTop: '8px',
					}}
				/>
				<Skeleton
					variant="rectangular"
					animation={'wave'}
					height={40}
					width={100}
				/>
			</Card>
		</div>
	);
};

export default CardHomePageSkeleton;
