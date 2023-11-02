import React from "react";
import { View } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";
import DescriptionText from "../../Reusable/DescriptionText";
import NetworkImage from "../../Reusable/NetworkImage";
import Rating from "../../Reusable/Rating";
import ReusableText from "../../Reusable/ReusableText";
import WidthSpacer from "../../Reusable/WidthSpacer";
import reusable from "../../Reusable/reusable.style";
import styles from "./review.style";

const ReviewTle = ({ review }) => {
  return (
    <View style={styles.reviewBorder}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("flex-start")}>
          <NetworkImage
            source={review.user.profile}
            width={54}
            height={54}
            radius={10}
          />

          <WidthSpacer width={20} />

          <View style={{ width: "80%" }}>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={review.user.username}
                family={"medium"}
                size={SIZES.small + 2}
                color={COLORS.black}
                align={undefined}
              />
              <WidthSpacer width={"30%"} />

              <View style={reusable.rowWithSpace("space-between")}>
                <Rating rating={review.rating} />
                <WidthSpacer width={10} />
                <ReusableText
                  text={review.updatedAt}
                  family={"medium"}
                  size={SIZES.small + 2}
                  color={COLORS.black}
                  align={undefined}
                />
              </View>
            </View>

            <DescriptionText text={review.review} lines={2} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewTle;
