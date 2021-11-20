import CardDashboardSkeleton from '../CardHomePageSkeleton';

type Props = {
	cards: any;
};

const SkeletonFinalPage = ({ cards }: Props) => {
	return (
		<div className="homepage__content">
			{cards.map((slug: string) => (
				<CardDashboardSkeleton key={slug} />
			))}
		</div>
	);
};

export default SkeletonFinalPage;
