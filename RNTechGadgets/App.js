import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Image, ImageBackground, Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';


function Separator() 
{
  return <View style={styles.separator}/>;
}

const Stack = createStackNavigator();

function App() 
{     
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tech Gadgets" options={{title: 'BMI Calculator'}}>
        <Stack.Screen name="Tech Gadgets" component={HomeScreen} />
        <Stack.Screen name="TechGadget1" component={TechGadget1} />
        <Stack.Screen name="TechGadget2" component={TechGadget2} />
        <Stack.Screen name="TechGadget3" component={TechGadget3} />
        <Stack.Screen name="TechGadget4" component={TechGadget4} />
        <Stack.Screen name="TechGadget5" component={TechGadget5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

function HomeScreen({navigation}) 
{

    const [selectedValue, setSelectedValue] = useState([

      {title: 'Peak Design Tech Pouch', key: '1'},
      {title: 'Floating Globe', key: '2'},
      {title: 'Wave Smart Notebook', key: '3'},
      {title: 'Laptop Backpack', key: '4'},
      {title: '3-D Pen', key: '5'},
    ]);    

  return (    
      <ImageBackground source={{uri: 'https://img.freepik.com/free-vector/gadgets-doodle-set_160308-197.jpg?size=626&ext=jpg'}}  style={styles.container}>
      <Text style={styles.header}>TECH</Text>
        <Separator/>
        <FlatList
          data={selectedValue}          
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('TechGadget'+ item.key, item)}>              
              <Text style={styles.list}>{ item.title }</Text>
            </TouchableOpacity>
          )}
        />  
        <Text style={styles.footer}>GADGETS</Text>       
      </ImageBackground>     
  ); 
}

function TechGadget1({navigation}) 
{
  return (
    
    <ImageBackground source={{uri: 'https://img.freepik.com/free-vector/gadgets-doodle-set_160308-197.jpg?size=626&ext=jpg'}}  style={styles.container}>
      

      <Image style={styles.image1} source={{uri: 'https://m.media-amazon.com/images/I/71+hGsJcw0L._SR500,500_.jpg'}}/>

      <View>
        <Text style={styles.header}>Peak Design Tech Pouch</Text>
      </View>

      <Separator /> 

      <Button 
          style={styles.btn1}                             
          title="Read More"           
          onPress={() => Linking.openURL('https://www.amazon.com/BAGSMART-Universal-Organizer-Electronics-Accessories/dp/B017SKRWL4?ref_=fsclp_pl_dp_1')} /> 

    </ImageBackground>     
  );
}

function TechGadget2({navigation}) 
{
  return (    
    <ImageBackground source={{uri: 'https://img.freepik.com/free-vector/gadgets-doodle-set_160308-197.jpg?size=626&ext=jpg'}}  style={styles.container}>
      <Image style={styles.image1} source={{uri: 'https://m.media-amazon.com/images/I/612N2ojiS7L._SR500,500_.jpg'}}/>

      <View>
        <Text style={styles.header}>Floating Globe w/LED Lights</Text>
      </View>

      <Separator /> 

      <Button 
          style={styles.btn1}                             
          title="Read More"           
          onPress={() => Linking.openURL('https://www.amazon.com/Senders-Floating-Levitation-Decoration-Black-Silver/dp/B0191DLEBU?ref_=fsclp_pl_dp_8')} />

    
    </ImageBackground>
    
  );
}

function TechGadget3({navigation}) 
{
  return (    
    <ImageBackground source={{uri: 'https://img.freepik.com/free-vector/gadgets-doodle-set_160308-197.jpg?size=626&ext=jpg'}}  style={styles.container}>

      <Image style={styles.image1} source={{uri: 'https://m.media-amazon.com/images/I/71npg1qupjL._SR500,500_.jpg'}}/>

      <View>
        <Text style={styles.header}>Wave Smart Notebook</Text>
      </View>

      <Separator /> 

      <Button 
          style={styles.btn1}                             
          title="Read More"           
          onPress={() => Linking.openURL('https://www.amazon.com/Rocketbook-Wave-Smart-Notebook-Standard/dp/B01GU6TINM?ref_=fsclp_pl_dp_2')} />

    
    </ImageBackground>
    
  );
}

function TechGadget4({navigation}) 
{
  return (    
    <ImageBackground source={{uri: 'https://img.freepik.com/free-vector/gadgets-doodle-set_160308-197.jpg?size=626&ext=jpg'}}  style={styles.container}>

      <Image style={styles.image1} source={{uri: 'https://m.media-amazon.com/images/I/715l-lFU91L._SR500,500_.jpg'}}/>

      <View>
        <Text style={styles.header}>Laptop Backpack</Text>
      </View>

      <Separator /> 

      <Button 
          style={styles.btn1}                             
          title="Read More"           
          onPress={() => Linking.openURL('https://www.amazon.com/kopack-Backpack-Anti-Theft-Resistant-Lightweight/dp/B01N7KJO5X?ref_=fsclp_pl_dp_7')} />

    
    </ImageBackground>
    
  );
}

function TechGadget5({navigation}) 
{
  return (    
    <ImageBackground source={{uri: 'https://img.freepik.com/free-vector/gadgets-doodle-set_160308-197.jpg?size=626&ext=jpg'}}  style={styles.container}>

      <Image style={styles.image1} source={{uri: 'https://m.media-amazon.com/images/I/417I7cLIoZL._SR500,500_.jpg'}}/>

      <View>
        <Text style={styles.header}>3-D Pen</Text>
      </View>

      <Separator /> 

      <Button 
          style={styles.btn1}                             
          title="Read More"           
          onPress={() => Linking.openURL('https://www.amazon.com/CreoPop-Professional-Printer-Innovative-Clogging/dp/B06XBCDBX7?ref_=fsclp_pl_dp_11')} />

    
    </ImageBackground>
    
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
    list:
    {      
      backgroundColor:'#4a9d74',
      fontSize: 30,
      fontWeight:"bold",
      textAlign: "center",
      color: 'black',
      borderWidth: 2,
      padding: 8,
      margin: 10,
      borderColor:'black',
    }, 
    header: 
    {
        fontSize: 40,
        fontWeight: "bold",
        color: '#4a9d74',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3,
        textShadowColor: 'black',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 15,
    },  
    footer:
    {
      fontSize: 40,
      fontWeight: "bold",
      color: '#4a9d74',
      textShadowOffset: { width: 3, height: 3 },
      textShadowRadius: 3,
      textShadowColor: 'black',
      textAlign: 'center',
      marginBottom: 40,
    },  
    image1: 
    {      
        width: 400,
        height: 400, 
        borderWidth: 3,
        borderColor: '#777',      
        margin: 20,      
    },     
    btn1: 
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
  
