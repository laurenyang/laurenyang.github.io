import BookSummary from './BookSummary';

function Overview() {
  return (
    <div className="overview">
      {reviews.map(review => (
        <BookSummary
          key={review.id}
          author={review.author}
          title={review.title}
          cover={review.cover}
          rating={review.rating}
          date={review.date}
        />
      ))}
    </div>
  );
}

export default Overview;
