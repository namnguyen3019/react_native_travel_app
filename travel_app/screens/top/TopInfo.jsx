import React from "react";
import { StyleSheet, View } from "react-native";
import { ProfileTile } from "../../components";

const TopInfo = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={{ margin: 20 }}>
      <ProfileTile
        title="Personal Info"
        icon={"user"}
        onPress={() => navigation.navigate("Profile")}
      />
      <ProfileTile
        title="Payment"
        icon={"creditcard"}
        onPress={() => navigation.navigate("Payments")}
      />
      <ProfileTile
        title="Settings"
        icon={"setting"}
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default TopInfo;

const styles = StyleSheet.create({});
