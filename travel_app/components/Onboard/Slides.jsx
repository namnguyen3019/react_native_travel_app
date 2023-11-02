import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { HeightSpacer, ReusableBtn, ReusableText } from '../index';
import styles from './Slides.style';
const Slides = ({item}) => {
    const nagivation = useNavigation();

  return (
    <View>
    <Image source={item.image} style={styles.image}/>
        <View style={styles.stack}>
            <ReusableText text={item.title} family={'medium'} size={SIZES.xxLarge} color={COLORS.white} />
            <HeightSpacer height={40} />
            <ReusableBtn onPress={() => nagivation.navigate("Bottom")} btnText={"Let's go"} textColor={COLORS.lightWhite} width={(SIZES.width-50)/2.2} backgroundColor={COLORS.red} borderWidth={0} borderColor={COLORS.red} />
        </View>
    </View>
  )
}

export default Slides

