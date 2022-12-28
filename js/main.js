import { render } from 'react-dom';
import Overview from './components/Overview';
import DetailedView from './components/DetailedView';
import reviews from './data.json';

// Render the overview page by default
render(<Overview />, document.getElementById('root'));

// Handle navigation to the detailed view page
const handleClick = id => {
  render(<DetailedView id={id} />, document.getElementById('root'));
};

// Add click event listeners to the book summary cards
const summaryCards = document.querySelectorAll('.book-summary');
summaryCards.forEach(card => {
  card.addEventListener('click', () => handleClick(card.id));
});
