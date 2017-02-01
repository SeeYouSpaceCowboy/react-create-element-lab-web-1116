const javascript = React.createElement('li', {}, 'JavaScript');
const react = React.createElement('li', {}, 'React');
const movies = React.createElement('li', {}, 'Movies');
const iceCream = React.createElement('li', {}, 'Ice cream');

const ul = React.createElement('ul', { className: 'me__interests'}, [javascript, react, movies, iceCream]);
const p = React.createElement('p', {}, 'Who is learning React');
const h1 = React.createElement('h1', {}, 'An Awesome Person');
const meInReact = React.createElement('div', { className: 'me' }, [h1, p, ul]);

ReactDOM.render(
  meInReact,
  document.getElementById('main')
);
