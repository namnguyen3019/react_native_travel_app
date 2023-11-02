import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import ReusableText from "./ReusableText";
import WidthSpacer from "./WidthSpacer";
import reusable from "./reusable.style";

const ProfileTile = ({ onPress, icon, title }) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("flex-start")}>
          <AntDesign name={icon} size={20} />

          <WidthSpacer width={15} />

          <ReusableText
            text={title}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
            align={undefined}
          />
        </View>
        <AntDesign name="right" size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;

const styles = StyleSheet.create({
  tile: {
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 15,
  },
});
