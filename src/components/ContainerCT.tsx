import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from 'iconsax-react-native';
import React, {ReactNode} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {RowCT, TextCT} from '.';
import {images} from '../assets/images/png';
import {fontFamilies} from '../constants/fontFamilies';
import {appColors} from '../constants/themeColor';
import {globalStyles} from '../styles/globalStyles';
interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
  back?: boolean;
}
const ContainerCT = (props: Props) => {
  const {isImageBackground, isScroll, title, children, back} = props;

  const navigation: any = useNavigation();

  const headerCT = () => {
    return (
      <View style={{flex: 1}}>
        {(title || back) && (
          <RowCT
            styles={{
              paddingHorizontal: 16,
              paddingVertical: 10,
              minWidth: 48,
              minHeight: 48,
              justifyContent: 'flex-start',
            }}>
            {back && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{marginRight: 12}}>
                <ArrowLeft size={24} color={appColors.text} />
              </TouchableOpacity>
            )}
            {title ? (
              <TextCT
                text={title}
                font={fontFamilies.medium}
                flex={1}
                size={16}
              />
            ) : (
              <></>
            )}
          </RowCT>
        )}
        {returnContainer}
      </View>
    );
  };

  const returnContainer = isScroll ? (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <View style={{flex: 1}}>{children}</View>
  );

  return isImageBackground ? (
    <ImageBackground
      source={images.bg_lobby}
      style={{flex: 1}}
      imageStyle={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>{headerCT()}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container]}>
      <StatusBar barStyle={'dark-content'} />
      <View style={[globalStyles.container]}>{headerCT()}</View>
    </SafeAreaView>
  );
};

export default ContainerCT;
