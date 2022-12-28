import BookReview from './BookReview';

function DetailedView(props) {
  const review = reviews.find(r => r.id === props.id);
  return (
    <BookReview
      author={review.author}
      title={review.title}
      cover={review.cover}
      rating={review.rating}
      date={review.date}
      review={review.review}
    />
  );
}

export default DetailedView;
