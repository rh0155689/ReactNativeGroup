import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, SafeAreaView, View, StyleSheet, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Separator() {
  return <View style={styles.separator}/>;
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
          <Text style={styles.header}>Latest Music Scene</Text>
      </View>

      <Separator />

      <View>          
        <Text style={styles.titles}>Ozzy Has Parkinson's!!</Text>
        <Image style={styles.images} source={{uri: 'https://www.dailynews.com/wp-content/uploads/2020/02/LDN-L-OZZY-0206-3.jpg?w=776'}} />  
        <Separator />                  
        <Button 
            style={styles.btn1}                             
            title="Read More"           
            onPress={() => navigation.navigate('Ozzy')} />

        <Separator />

        <Text style={styles.titles}>GreenDay Drops Bombs!</Text>
        <Image style={styles.images} source={{uri: 'https://cdn.cnn.com/cnnnext/dam/assets/200126094526-01-green-day-nhl-all-star-0125-exlarge-169.jpg'}} />

        <Separator />

        <Button 
          style={styles.btn2} 
          title="Read More" 
          onPress={() => navigation.navigate('Greenday')} />

        <Separator />
      </View>  
    </SafeAreaView> 
  );
}

function OzzyScreen() {
  return (
    <View style={styles.pages}>
      
      <Text style={styles.headlines}>Ozzy Has Parkinson's Disease</Text>

      <Separator />

      <Image style={styles.images2} source={{uri: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EAEB/production/_110593106_ozzy_getty.jpg'}} />

      <Separator />

      <Text style={{fontWeight: 'bold', padding: 8}}>Rock star Ozzy Osbourne has revealed he has Parkinson's disease.

      The Black Sabbath singer, 71, told US TV show Good Morning America he has a "mild form" and found out about it after suffering a fall last February.

      Wife Sharon said: "It's not a death sentence but it affects certain nerves in your body. You have a good day, a good day, then a really bad day."

      Ozzy added it was hard to tell whether the numbness symptoms he had were from the Parkinson's or the fall.</Text>
    </View>
  );
}

function GreendayScreen() {
  return (
    <View style={styles.pages}>
      <Text style={styles.headlines2}>Greenday Drops F-Bombs During NHL Show</Text>

      <Separator/>

      <Image style={styles.images2} source={{uri:'https://media.altpress.com/uploads/2019/09/green-day-ap-cover.jpg'}} />

      <Separator/>

      <Text style={{fontWeight: 'bold', padding: 8}}>(CNN)Punk rock band Green Day yelled a few f-bombs during their performance at the NHL All-Star Game on Saturday night in St. Louis.

      Green Day played a set outside the Enterprise Center on Saturday before the game, and then took the ice to play during the second intermission of the All-Star Game.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#c0c0c0',
      alignItems: 'center',
      justifyContent: 'center',

  },
  header: {
      fontSize: 40,
      fontWeight: "bold",
      color: 'blue',
  },
  headlines: {
      fontSize: 25,
      fontWeight: 'bold',      
  },  
  headlines2: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 8,      
},  
  titles: {
      fontSize: 20,
      fontWeight: "bold",
      justifyContent: 'center',
      alignContent: 'center'
  },
  pages: {
    flex: 1,
    backgroundColor: '#c0c0c0', 
    alignItems: 'center', 
    justifyContent: 'center',   
  },
  images: {
      width: 320,
      height: 150,
  },
  images2: {
    width: 250,
    height: 300
  },
  btn1: {
      paddingTop: 10,
  },
  separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
  }, 

});


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'The Latest Music Scene'}} />
        <Stack.Screen name="Ozzy" component={OzzyScreen} />
        <Stack.Screen name="Greenday" component={GreendayScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;