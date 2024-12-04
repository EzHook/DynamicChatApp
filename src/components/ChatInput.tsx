import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

// Import your assets here
import attach from '../assets/images/attach.png'; // Replace with your correct image paths
import send from '../assets/images/send.png';
import cameraIcon from '../assets/images/camera-02.png';
import videoIcon from '../assets/images/video.png';
import documentIcon from '../assets/images/Document.png';

const ChatInput: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Type a message" style={styles.input} />
      <View style={styles.sendContainer}>
        <Menu onSelect={value => Alert.alert(`Selected option: ${value}`)}>
          <MenuTrigger>
            <Image source={attach} style={styles.icon} />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionsContainer: {
                borderRadius: 50,
                backgroundColor: '#008000',
                paddingHorizontal: 10,
                marginBottom: 20,
                // width: 124,
              },
              optionWrapper: {
                flexDirection: 'row',
              },
              optionsWrapper: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              },
            }}>
            <MenuOption value="camera">
              <View style={styles.menuOption}>
                <Image source={cameraIcon} style={styles.menuIcon} />
                {/* <Text style={styles.menuText}>Camera</Text> */}
              </View>
            </MenuOption>
            <MenuOption value="video">
              <View style={styles.menuOption}>
                <Image source={videoIcon} style={styles.menuIcon} />
                {/* <Text style={styles.menuText}>Video</Text> */}
              </View>
            </MenuOption>
            <MenuOption value="document">
              <View style={styles.menuOption}>
                <Image source={documentIcon} style={styles.menuIcon} />
                {/* <Text style={styles.menuText}>Document</Text> */}
              </View>
            </MenuOption>
          </MenuOptions>
        </Menu>
        <TouchableOpacity>
          <Image source={send} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  input: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'System',
    flex: 1,
  },
  sendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginRight: 10,
  },
  image: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    // marginRight: 10,
    tintColor: '#FFFFFF', // Make icons white to fit the green background
  },
  menuText: {
    fontSize: 16,
    color: '#FFFFFF', // White text to contrast green background
    fontFamily: 'System',
  },
});
