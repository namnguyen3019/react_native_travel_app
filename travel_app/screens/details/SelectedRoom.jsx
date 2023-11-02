import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  AppBar,
  AssetImage,
  Counter,
  HeightSpacer,
  NetworkImage,
  Rating,
  ReusableBtn,
  ReusableText,
  WidthSpacer,
} from "../../components";
import reusable from "../../components/Reusable/reusable.style";
import { COLORS, SIZES } from "../../constants/theme";

const SelectedRoom = ({ navigation }) => {
  const router = useRoute();
  const { item } = router.params;
  console.log(item);
  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={item.title}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
          color1={undefined}
          icon={undefined}
          onPress1={undefined}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 16 }}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={200}
            radius={16}
          />

          <HeightSpacer height={20} />

          <View style={{ marginHorizontal: 10 }}>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={item.title}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
                align={undefined}
              />
              <View style={reusable.rowWithSpace("flex-start")}>
                <Rating rating={item.rating} />

                <WidthSpacer width={10} />

                <ReusableText
                  text={`(${item.review})`}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                  align={undefined}
                />
              </View>
            </View>

            <HeightSpacer height={10} />

            <ReusableText
              text={item.location}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.gray}
              align={undefined}
            />

            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.lightGrey,
                marginVertical: 15,
              }}
            ></View>

            <ReusableText
              text={"Room Requirements"}
              family={"regular"}
              size={SIZES.medium}
              color={COLORS.black}
              align={undefined}
            />

            <HeightSpacer height={30} />
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Price per night"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
                align={undefined}
              />

              <ReusableText
                text={"$ 400"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
                align={undefined}
              />
            </View>

            <HeightSpacer height={15} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Payment Method"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
                align={undefined}
              />
              <View style={reusable.rowWithSpace("flex-start")}>
                <AssetImage
                  mode={"contain"}
                  width={30}
                  height={20}
                  data={require("../../assets/images/Visa.png")}
                  radius={undefined}
                />
                <ReusableText
                  text={"Visa"}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.black}
                  align={undefined}
                />
              </View>
            </View>

            <HeightSpacer height={15} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"4 Guest"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
                align={undefined}
              />

              <Counter />
            </View>
            <HeightSpacer height={30} />

            <ReusableBtn
              onPress={() => navigation.navigate("Success")}
              btnText={"Book Now"}
              width={SIZES.width - 50}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />

            <HeightSpacer height={30} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({});
