import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import group from '../assets/images/groupPic.png';
import {
  COLOR_HEADING,
  FONT_BOLD,
  FONT_MEDIUM,
  FONT_REGULAR,
  TEXT_COLOR,
} from '../constants/colors';
import dots from '../assets/images/3Dots.png';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import members from '../assets/images/members.png';
import phone from '../assets/images/call.png';
import report from '../assets/images/report.png';

const GroupHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={group} />
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.subHeading}>From</Text>
            <Text style={styles.heading}>Trip 1</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.subHeading}>To</Text>
            <Text style={styles.heading}>Trip 2</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity>
        <Menu onSelect={value => Alert.alert(`Selected number: ${value}`)}>
          <MenuTrigger>
            <Image source={dots} style={styles.icon} />
          </MenuTrigger>
          <MenuOptions
            customStyles={{optionsContainer: {borderRadius: 8, width: 156}}}>
            <MenuOption value={1}>
              <View style={styles.menuButtonContainer}>
                <Image source={members} style={styles.menuImage} />
                <Text style={styles.normalHeading}>Members</Text>
              </View>
            </MenuOption>
            <View style={styles.separator} />
            <MenuOption value={2}>
              <View style={styles.menuButtonContainer}>
                <Image source={phone} style={styles.menuImage} />
                <Text style={styles.normalHeading}>Share Number</Text>
              </View>
            </MenuOption>
            <View style={styles.separator} />
            <MenuOption value={3}>
              <View style={styles.menuButtonContainer}>
                <Image source={report} style={styles.menuImage} />
                <Text style={styles.normalHeading}>Report</Text>
              </View>
            </MenuOption>
            <View style={styles.separator} />
          </MenuOptions>
        </Menu>
      </TouchableOpacity>
    </View>
  );
};

export default GroupHeader;

const styles = StyleSheet.create({
  image: {
    height: 48,
    width: 48,
    resizeMode: 'contain',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E5E0',
  },
  menuButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    padding: 10,
    gap: 10,
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  menuImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  innerContainer: {
    // flexDirection: 'row',
    gap: 4,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  subHeading: {
    fontSize: 16,
    color: TEXT_COLOR,
    fontFamily: FONT_REGULAR,
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  normalHeading: {
    fontSize: 14,
    color: COLOR_HEADING,
    fontFamily: FONT_MEDIUM,
  },
  heading: {
    fontSize: 18,
    color: COLOR_HEADING,
    fontFamily: FONT_BOLD,
  },
});
