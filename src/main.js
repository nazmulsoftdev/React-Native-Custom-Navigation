import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigations/AuthNavigator';
import {useSelector} from 'react-redux';
import DrawerNavigator from './navigations/DrawerNavigator';
const Main = () => {
  const {user} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Main;
