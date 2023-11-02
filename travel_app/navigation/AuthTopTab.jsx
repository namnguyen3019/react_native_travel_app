import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { ScrollView, View } from "react-native";
import { AssetImage, HeightSpacer } from "../components";
import { COLORS } from "../constants/theme";
import { Registration, Signin } from "../screens";

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <HeightSpacer height={80} />

        <AssetImage
          data={require("../assets/images/bg2.png")}
          width={"100%"}
          height={250}
          mode={"contain"}
          radius={10}
        />

        <View style={{ height: 600 }}>
          <Tab.Navigator>
            <Tab.Screen name="Signin" component={Signin} />
            <Tab.Screen name="Registration" component={Registration} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthTopTab;
