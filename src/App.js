import './App.css';

const App = props => {
  const result = ['a', 'b', 'c'].map(el => {
    return el + '100'; // 👈️ Using explicit return
  });

  console.log(result);

  return <div>hello world</div>;
};

const mapStateToProps = state => {
  return {todos: ['walk the dog', 'buy groceries']}; // 👈️ Using explicit return
};

export default App;
