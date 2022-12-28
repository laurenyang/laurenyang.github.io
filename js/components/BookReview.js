function BookReview(props) {
    return (
      <div className="book-review">
        <h2>{props.title}</h2>
        <p>{props.author}</p>
        <img src={props.cover} alt={props.title} />
        <p>Rating: {props.rating}/5</p>
        <p>Date Read: {props.date}</p>
        <p>{props.review}</p>
      </div>
    );
  }
  
  export default BookReview;
  