import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Onboarding from "./src/screens/Onboarding";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { NativeWindStyleSheet } from "nativewind";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Signup from "./src/screens/Signup";
import SignIn from "./src/screens/SignIn";
import Dashboard from "./src/screens/Dashboard";
import {
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { Octicons } from "@expo/vector-icons";

import ExploreIcon from "./assets/icons/explore_icon.svg";
import CalendarIcon from "./assets/icons/calendar_icon.svg";
import TicketIcon from "./assets/icons/ticket_icon.svg";
import ShopIcon from "./assets/icons/shop-add_icon.svg";
import ProfileIcon from "./assets/icons/profile_icon.svg";
import AddEventIcon from "./assets/icons/add_event.svg";
import FontText from "./src/reuseable/FontText";
import Ticket from "./src/screens/Ticket";
import Calendar from "./src/screens/Calendar";
import Profile from "./src/screens/Profile";
import PersonalInfo from "./src/screens/Profile/PersonalInfo";
import History from "./src/screens/Profile/History";
import Settings from "./src/screens/Profile/Settings";
import EventDetails from "./src/screens/components/EventDetails";

import { AppProvider } from "./src/lib/appReducer";
import { useGlobalState } from "./src/lib/appContext";
import AddEvent from "./src/screens/PlannerMode/AddEvent";
import PlannerEventDetails from "./src/screens/PlannerMode/PlannerEventDetails";
// import { IoAlbums } from "react-icons/io5";
import Svg, { Circle, Path } from "react-native-svg";
import GuestList from "./src/screens/PlannerMode/GuestList";

NativeWindStyleSheet.setOutput({
  default: "native",
});

let customFonts = {
  "Chillax-Bold": require("./assets/fonts/chillax/OTF/Chillax-Bold.otf"),
  "Chillax-Semibold": require("./assets/fonts/chillax/OTF/Chillax-Semibold.otf"),
  "Chillax-Light": require("./assets/fonts/chillax/OTF/Chillax-Light.otf"),
  "Chillax-Extralight": require("./assets/fonts/chillax/OTF/Chillax-Extralight.otf"),
  "Chillax-Medium": require("./assets/fonts/chillax/OTF/Chillax-Medium.otf"),
  "Chillax-Regular": require("./assets/fonts/chillax/OTF/Chillax-Regular.otf"),
  "Satoshi-Black": require("./assets/fonts/satoshi/OTF/Satoshi-Black.otf"),
  "Satoshi-BlackItalic": require("./assets/fonts/satoshi/OTF/Satoshi-BlackItalic.otf"),
  "Satoshi-Bold": require("./assets/fonts/satoshi/OTF/Satoshi-Bold.otf"),
  "Satoshi-BoldItalic": require("./assets/fonts/satoshi/OTF/Satoshi-BoldItalic.otf"),
  "Satoshi-Italic": require("./assets/fonts/satoshi/OTF/Satoshi-Italic.otf"),
  "Satoshi-Light": require("./assets/fonts/satoshi/OTF/Satoshi-Light.otf"),
  "Satoshi-LightItalic": require("./assets/fonts/satoshi/OTF/Satoshi-LightItalic.otf"),
  "Satoshi-Medium": require("./assets/fonts/satoshi/OTF/Satoshi-Medium.otf"),
  "Satoshi-MediumItalic": require("./assets/fonts/satoshi/OTF/Satoshi-MediumItalic.otf"),
  "Satoshi-Regular": require("./assets/fonts/satoshi/OTF/Satoshi-Regular.otf"),
  "Trap-Black": require("./assets/fonts/trap/OTF/Trap-Black.otf"),
  "Trap-ExtraBold": require("./assets/fonts/trap/OTF/Trap-ExtraBold.otf"),
  "Trap-SemiBold": require("./assets/fonts/trap/OTF/Trap-SemiBold.otf"),
  "Trap-Bold": require("./assets/fonts/trap/OTF/Trap-Bold.otf"),
  "Trap-Light": require("./assets/fonts/trap/OTF/Trap-Light.otf"),
  "Trap-Medium": require("./assets/fonts/trap/OTF/Trap-Medium.otf"),
  "Trap-Regular": require("./assets/fonts/trap/OTF/Trap-Regular.otf"),
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  // Load the custom font asynchronously
  React.useEffect(() => {
    async function loadFont() {
      await Font.loadAsync(customFonts);
      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (fontLoaded) {
    SplashScreen.hideAsync();
  }

  if (!fontLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <SafeAreaProvider>
        <NavigationProvider />
      </SafeAreaProvider>
    </AppProvider>
  );
}

function NavigationProvider() {
  const { mode } = useGlobalState();

  console.log(mode);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="SignIn" component={SignIn} />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        <Stack.Screen
          name="Dashboard"
          component={mode == false ? HomeView : PlannerView}
          // options={{
          //   // headerTitle: (props) => <LogoTitle {...props} />,
          //   headerRight: () => (
          //     <Button
          //       onPress={() => alert("This is a button!")}
          //       title="Info"
          //       color="#fff"
          //     />
          //   ),
          // }}
        />
        {/* planner mode: guest list */}
        <Stack.Screen name="GuestList" component={GuestList} />
        <Stack.Screen
          name="PlannerEventDetails"
          component={PlannerEventDetails}
        />
        {/* user mode: */}

        <Stack.Screen name="EventDetails" component={EventDetails} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabsFocused(props) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontText
        className="font-chillaxMedium"
        style={{ color: "#7E62F0", fontSize: 13 }}
      >
        {props.name}
      </FontText>
      <Octicons name="dot-fill" size={16} color="#7E62F0" />
    </View>
  );
}

function TabsInactive(props) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginBottom: 1.5 }}>{props.children}</View>
      {props.name !== "AddEvent" && (
        <FontText
          className="font-chillaxRegular"
          style={{ color: "#9A9898", fontSize: 13 }}
        >
          {props.name}
        </FontText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    top: -200,
  },
  button: {
    top: -22.5,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: "#E94F37",
  },
  buttonIcon: {
    fontSize: 16,
    color: "#F6F7EB",
  },
});

function AddEventTabsInactive(props) {
  const color = "red";

  return (
    <View style={styles.container} pointerEvents="box-none">
      <View style={{ marginBottom: 1.5 }}>{props.children}</View>
      <Svg
        width={75}
        height={61}
        viewBox="0 0 75 61"
        background={styles.background}
        {...props}
      >
        <Path
          d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

function HomeView() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      detachInactiveScreens={false}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50 + insets.bottom,
          paddingTop: 5,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ icon, focused }) => {
          if (route.name === "Explore") {
            icon = focused ? (
              <TabsFocused name={route.name} />
            ) : (
              <TabsInactive name={route.name}>
                <ExploreIcon
                  width={22}
                  height={22}
                  strokeWidth={0.3}
                  fill="none"
                />
              </TabsInactive>
            );
          } else if (route.name === "Ticket") {
            icon = focused ? (
              <TabsFocused name={route.name} />
            ) : (
              <TabsInactive name={route.name}>
                <TicketIcon
                  width={22}
                  height={22}
                  strokeWidth={0.3}
                  fill="none"
                />
              </TabsInactive>
            );
          } else if (route.name === "Calendar") {
            icon = focused ? (
              <TabsFocused name={route.name} />
            ) : (
              <TabsInactive name={route.name}>
                <CalendarIcon
                  width={22}
                  height={22}
                  strokeWidth={0.3}
                  fill="none"
                />
              </TabsInactive>
            );
          } else if (route.name === "Profile") {
            icon = focused ? (
              <TabsFocused name={route.name} />
            ) : (
              <TabsInactive name={route.name}>
                <ProfileIcon
                  width={22}
                  height={22}
                  strokeWidth={0.3}
                  fill="none"
                />
              </TabsInactive>
            );
          }

          // You can return any component that you like here!
          return icon;
        },
        tabBarButton: (props) => <TouchableOpacity {...props} />,
      })}
    >
      <Tab.Screen name="Explore" component={Dashboard} />
      <Tab.Screen name="Ticket" component={Ticket} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function PlannerView() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      detachInactiveScreens={false}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50 + insets.bottom,
          paddingTop: 5,
          borderTopWidth: 0,
          // backgroundColor: "blue",
        },
        tabBarIcon: ({ icon, focused }) => {
          if (route.name === "Explore") {
            icon = focused ? (
              <TabsFocused name={route.name} />
            ) : (
              <TabsInactive name={route.name}>
                <ExploreIcon
                  width={22}
                  height={22}
                  strokeWidth={0.3}
                  fill="none"
                />
              </TabsInactive>
            );
          } else if (route.name === "AddEvent") {
            icon = focused ? (
              <TabsFocused name={route.name} />
            ) : (
              <AddEventTabsInactive {...route}>
                <AddEventIcon
                  style={{ top: 50 }}
                  width={95}
                  height={95}
                  strokeWidth={0.3}
                  fill="none"
                />
              </AddEventTabsInactive>
            );
          } else if (route.name === "Profile") {
            icon = focused ? (
              <TabsFocused name={route.name} />
            ) : (
              <TabsInactive name={route.name}>
                <ProfileIcon
                  width={22}
                  height={22}
                  strokeWidth={0.3}
                  fill="none"
                />
              </TabsInactive>
            );
          }

          // You can return any component that you like here!
          return icon;
        },
        tabBarButton: (props) => <TouchableOpacity {...props} />,
      })}
    >
      <Tab.Screen name="Explore" component={Dashboard} />
      <Tab.Screen
        options={{ tabBarStyle: { display: "none" } }}
        name="AddEvent"
        component={AddEvent}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
