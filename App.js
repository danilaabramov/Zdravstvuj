import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Start from "./screens/Start";

const Stack = createNativeStackNavigator();

function App() {

  return (<NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: "none" }}>

        {Array(100).fill({}).map((_, index) => (
          <Stack.Screen key={index} name={"Start" + index} component={Start} options={{
            headerShown: false,
          }} />))}

      </Stack.Navigator>

    </NavigationContainer>);
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32, paddingHorizontal: 24,
//   }, sectionTitle: {
//     fontSize: 24, fontWeight: "600",
//   }, sectionDescription: {
//     marginTop: 8, fontSize: 18, fontWeight: "400",
//   }, highlight: {
//     fontWeight: "700",
//   },
// });


export default App;
