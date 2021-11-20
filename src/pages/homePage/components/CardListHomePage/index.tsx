//components
import CardHomePage from '../CardHomePage';

// Interfaces
import { HomePageCardOutput } from 'models/homepage';

type Props = {
	cards: HomePageCardOutput[];
};

const CardListHomePage = ({ cards }: Props) => {
	return (
		<div className="homepage__content">
			{cards.map(
				({ icon, slug, path }: HomePageCardOutput, index: number) => (
					<CardHomePage
						icon={icon}
						index={index}
						path={path}
						key={slug}
					/>
				),
			)}
		</div>
	);
};

export default CardListHomePage;
