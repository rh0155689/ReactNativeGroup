import React, { useState } from 'react';
import {StyleSheet, View, Text, Button, Image, TextInput, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Separator() 
{
  return <View style={styles.separator}/>;
}

const Stack = createStackNavigator();

function App() 
{     
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Check Your BMI" options={{title: 'BMI Calculator'}}>
        <Stack.Screen name="Check Your BMI" component={HomeScreen} />
        <Stack.Screen name="Your Calculated BMI" component={BMICalculatedScreen} />
        <Stack.Screen name="Compare Your BMI" component={CompareBMIScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
  
function HomeScreen({navigation}) 
{
  const [weight, setWeight] = useState (null);
  const [height, setHeight] = useState (null);  
  const setBmi = (weight / (height * height) * 703).toFixed(2);

  return (
    // <ScrollView style={{flex:1}}>
      <View style={styles.container}>

      <View>
        <Text style={styles.header}>Body Mass Index Calculator</Text>
      </View>

      <Separator/>

      <View>
        <Image style={styles.image1} source={{uri: 'https://cosmos-images1.imgix.net/file/spina/photo/15480/140618_Incurable_Engineer_01.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=1920'}} />       
      </View>     

      <Separator />

      <Text>Enter weight in pounds:</Text>
      <TextInput       
      keyboardType= 'numeric'
      style={styles.input}
      placeholder= 'e.g. 125 = 125 pounds' 
      onChangeText={(val) => setWeight(val)}
      />

      <Separator />

      <Text>Enter height in inches:</Text>
      <TextInput  
      clearButtonMode="always"    
      keyboardType= 'numeric'
      style={styles.input}
      placeholder= 'e.g. 72 = 6 feet'
      onChangeText={(val) => setHeight(val)}
      />
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Press Button to Calculate Your BMI</Text>
        <Button 
          style={styles.btn1}                             
          title="Calculate BMI"           
          onPress={() => navigation.push('Your Calculated BMI', { setBmi },
          setWeight(null),
          setHeight(null))}/>                      
      </View>  
      </View>
    // </ScrollView> 
  );
}

function BMICalculatedScreen({route, navigation}) 
{  
  const {setBmi} = route.params;

    return (
      
      <View style={styles.container}>

        <View>
          <Text style={styles.header}>Body Mass Index Calculator</Text>
        </View>

        <Separator/>  

        <View>        
          <Image style={styles.image2} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYNBWpYU1E6IZKcDX3Y6rFZWPZGHZVp-D59FG5R22ybPrfbtwZ&usqp=CAU'}} />        

          <Separator />        
        
          <Text style={styles.result}>
            Your calculated BMI is: {setBmi} 
          </Text> 
        </View>

        <Separator/>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text styles={{padding: 15}}>Press Button to Compare Your BMI</Text>
          <Button 
            style={styles.btn2}                             
            title="Compare BMI"           
            onPress={() => navigation.navigate('Compare Your BMI')}/>    
        </View>   
            
      </View>
    );  
}

function CompareBMIScreen({navigation}) 
{ 
    return (
      
      <View style={styles.container}>       

        <View>
          <Text style={styles.header}>Body Mass Index Calculator</Text>
        </View>

        <Separator />

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>        
          <Image style={styles.image3} source={{uri: 'https://bmicalculator.mes.fm/img/bmi-chart.png'}} /> 
        

        <Separator/>

        
          <Text styles={{padding: 15}}>Perform Another Calculation</Text>
          <Button 
            style={styles.btn3}                             
            title="New BMI"           
            onPress={() => navigation.navigate('Check Your BMI')}/>            
        </View>   

      </View>
    );  
}

const styles = StyleSheet.create(
  {
  container:{
      flex: 1,
      backgroundColor: '#c0c0c0',
      alignItems: 'center',
      justifyContent: 'center',
  },  
  header: 
  {
      fontSize: 30,
      fontWeight: "bold",
      color: 'blue',
  },
  input: 
  {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },  
  result: 
  {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 60,
  },  
  image1: 
  {      
      width: 400,
      height: 250, 
      borderWidth: 3,
      borderColor: '#777',      
      margin: 20,      
  }, 
  image2:
  {
    width: 400,
    height: 250, 
    borderWidth: 3,
    borderColor: '#777',     
   // marginBottom: 280, 
  },
  image3:
  {
    //marginTop: 20,
    width:400,
    height:350,
    borderWidth: 3,
    borderColor: '#777',     
    paddingBottom: 100, 
  },
  btn1: 
  {     
    flex:1, 
    paddingTop: 10,      
  },
  btn2:
  {
    flex:1, 
    paddingTop: 10,  
  },
  btn3:
  {
    flex:1, 
    paddingTop: 10, 
  },
  separator: 
  {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
  }, 

});




  
