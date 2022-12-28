function BookSummary(props) {
    return (
      <div className="book-summary">
        <img src={props.cover} alt={props.title} />
        <div className="book-info">
          <h3>{props.title}</h3>
          <p>{props.author}</p>
          <p>Rating: {props.rating}/5</p>
          <p>Date Read: {props.date}</p>
        </div>
      </div>
    );
  }
  
  export default BookSummary;
  