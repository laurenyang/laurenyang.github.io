const ReactDOM = require('react-dom');
const Overview = require('./components/Overview');
const DetailedView = require('./components/DetailedView');
const reviews = require('./data.json');

// Render the overview page by default
ReactDOM.render(<Overview />, document.getElementById('root'));

// Handle navigation to the detailed view page
const handleClick = id => {
  ReactDOM.render(<DetailedView id={id} />, document.getElementById('root'));
};

// Add click event listeners to the book summary cards
const summaryCards = document.querySelectorAll('.book-summary');
summaryCards.forEach(card => {
  card.addEventListener('click', () => handleClick(card.id));
});
