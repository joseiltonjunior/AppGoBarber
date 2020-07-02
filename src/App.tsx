import "react-native-gesture-handler";

import React from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import colors from "./styles/colors";
import Routes from "./routes";

const App: React.FC = () => (
  <>
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.DarkGreyPrimary}
      />
      <View style={{ flex: 1, backgroundColor: colors.DarkGreyPrimary }}>
        <Routes />
      </View>
    </NavigationContainer>
  </>
);

export default App;
