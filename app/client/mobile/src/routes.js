import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Cadastro from './pages/Cadastro';

const Routes = createAppContainer(
  createStackNavigator({
      Main:{
        screen: Main,
        navigationOptions: {
          title: 'HIT'
        }
      },
      Login:{
        screen: Login,
        navigationOptions: {
          title: 'Login'
        }
      },
      Profile:{
        screen: Profile,
        navigationOptions: {
          title: 'Profile'
        }
      },
      Cadastro:{
        screen: Cadastro,
        navigationOptions: {
          title: 'Cadastro'
        }
      },
  }, 
  {
    defaultNavigationOptions:{
      headerTintColor: '#FFF',
      headerBackTitleVisible: false,
      headerStyle:{
        backgroundColor: '#7a1a1a',
      },
    },
  })  
);

export default Routes;