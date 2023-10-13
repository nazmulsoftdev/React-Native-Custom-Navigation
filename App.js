import {Provider} from 'react-redux';
import Store from './app/Store';
import Main from './src/main';

const App = () => {
  // const {user} = useSelector(state => state.auth);
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
};

export default App;
