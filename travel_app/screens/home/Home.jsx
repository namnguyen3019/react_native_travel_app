import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import {
  BestHotels,
  HeightSpacer,
  Places,
  Recomendations,
  ReusableText,
} from "../../components";
import reusable from "../../components/Reusable/reusable.style";
import { COLORS, TEXT } from "../../constants/theme";
import styles from "./home.style";
const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Hi User"}
            family={"regular"}
            size={TEXT.large}
            color={COLORS.black}
            align={"center"}
          />

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>
        <HeightSpacer height={10} />

        <ReusableText
          text={"Places"}
          family={"bold"}
          size={TEXT.large}
          color={COLORS.black}
          align={"left"}
        />
        <Places />
        <HeightSpacer height={15} />
        <Recomendations />
        <BestHotels />
      </View>
    </SafeAreaView>
  );
};

export default Home;
