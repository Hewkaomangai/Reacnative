import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import ViewBoxesWithColorAndText from './components/ViewBoxesWithColorAndText';
// import DisplayandImage from './components/DisplayandImage';
//import LotsOfGreeting from './components/LotsOfGreeting';
//import CustomText from './components/CustomText';
// import Counter from './components/Counter';
// import MyInput from './components/MyInput';
// import IncrementCounter from './components/IncrementCounter';
// import Form from './components/Form';
// import Login from './components/Login';
// import RecapLogin from './components/RecapLogin';
// import TouchableExample from './components/TouchableExample';
// import TouchablePratice from './components/TouchablePratice';
// import Example_useEffect from './components/Example_useEffect';
import UseEffectFlatList from './components/UseEffectFlatList';

export default function App() {
  return (
    <View style = {styles.container}>
      {/* <ViewBoxesWithColorAndText /> */}
      {/* <DisplayandImage/> */}
      {/* <LotsOfGreeting/> */}
      {/* <CustomText/> */}
      {/* <Counter /> */}
      {/* <MyInput/> */}
      {/* <IncrementCounter/> */}
      {/* <Form/> */}
      {/* <Login/>
      {/* <RecapLogin/> */}
      {/* <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableExample/>
      </View> */}
      {/* <TouchablePratice/> */}
      {/* <Example_useEffect/> */}
      <UseEffectFlatList/>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});