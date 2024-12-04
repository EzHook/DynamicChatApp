import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import back from '../assets/images/back.png';
import edit from '../assets/images/edit.png';
import {COLOR_HEADING, FONT_BOLD, TEXT_COLOR} from '../constants/colors';
const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity>
          <Image source={back} style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.heading}>Trip 1</Text>
      </View>
      <TouchableOpacity>
        <Image source={edit} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 24,
    color: COLOR_HEADING,
    fontFamily: FONT_BOLD,
  },
  backContainer: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
});
