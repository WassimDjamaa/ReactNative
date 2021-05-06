import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [email, setText] = React.useState('');
  const [password, setPassword] = React.useState('');

  const showMessage = () => {
    return(
      <View>
        {
          email.length == 0 || password.length == 0?
          (alert('Veuillez entrer une adresse mail ou un mdp please')) :
          (alert('Authentication success !'))
        }
      </View>
    );
  }

  return (
   
    <View style={styles.container}>

     <Text style={styles.title}>
         Welcome to starPort
      </Text>

     <TextInput
      label="Email"
      value={email}
      style={styles.inputEmail}
      onChangeText={text => setText(text)}
    />

     <TextInput
      secureTextEntry={true}
      label="Password "
      value={password}
      style={styles.inputPassword}
      onChangeText={password => setPassword(password)}
    />

    <Button 
      mode="contained" 
      onPress={showMessage}
      style={styles.button}
    >
      Login
    </Button>

    <Text style={styles.footer}>
         Read conditioned and teams
      </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },

  title:{
    backgroundColor: "#8A2BE2",
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    margin: 24,
    fontSize: 18,
    paddingVertical: 40,
  },

  inputEmail: {
    margin: 12,
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 3
  },

  inputPassword: {
    margin: 12,
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 3
  },

  button:{
    margin: 24,
    fontSize: 18,
  },

  footer:{
    textAlign: "center"
  }
});
