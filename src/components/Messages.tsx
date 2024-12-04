import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Chat} from '../types/apiDataTypes';
import {
  COLOR_WHITE,
  FONT_MEDIUM,
  FONT_REGULAR,
  SECONDARY_COLOR,
  TEXT_COLOR,
} from '../constants/colors';
import verify from '../assets/images/verify.png';

type MessageProps = {
  chats: Chat[];
  loadMoreChats: () => void;
  isLoadingMore: boolean;
};

const Messages: React.FC<MessageProps> = ({
  chats,
  loadMoreChats,
  isLoadingMore,
}) => {
  const groupedChats = chats.reduce((acc: Record<string, Chat[]>, chat) => {
    const date = new Date(chat.time).toDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(chat);
    return acc;
  }, {});

  const processedChats = Object.entries(groupedChats).flatMap(
    ([date, messages]) => [
      {type: 'date', date},
      ...messages.map(message => ({type: 'message', ...message})),
    ],
  );

  const renderMessage = ({item}: {item: any}) => {
    if (item.type === 'date') {
      // Render date header
      return (
        <View style={styles.dateContainer}>
          <View style={styles.dateLine} />
          <Text style={styles.dateText}>{item.date}</Text>
          <View style={styles.dateLine} />
        </View>
      );
    }

    return (
      <View
        style={[
          styles.messageContainer,
          item.sender.self ? styles.self : styles.other,
        ]}>
        <View>
          {!item.sender.self && (
            <Image source={{uri: item.sender.image}} style={styles.avatar} />
          )}
          {!item.sender.self && item.sender.is_kyc_verified && (
            <Image source={verify} style={styles.verify} />
          )}
        </View>

        <View
          style={[
            styles.textContainer,
            {
              backgroundColor: item.sender.self ? SECONDARY_COLOR : COLOR_WHITE,
              borderBottomRightRadius: item.sender.self ? 0 : 12,
              borderTopLeftRadius: item.sender.self ? 12 : 0,
            },
          ]}>
          <Text
            style={[
              styles.messageText,
              {
                color: item.sender.self ? COLOR_WHITE : TEXT_COLOR,
                fontFamily: item.sender.self ? FONT_MEDIUM : FONT_REGULAR,
              },
            ]}>
            {item.message.replace(/<br>/g, '\n')}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={processedChats}
      keyExtractor={(item: any, index) =>
        item.type === 'date' ? `date-${item.date}` : item.id
      }
      renderItem={renderMessage}
      contentContainerStyle={styles.listContainer}
      inverted
      onEndReached={loadMoreChats}
      onEndReachedThreshold={0}
      ListFooterComponent={
        isLoadingMore ? (
          <ActivityIndicator
            size="large"
            color={SECONDARY_COLOR}
            style={styles.loader}
          />
        ) : null
      }
    />
  );
};

export default Messages;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  dateContainer: {
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  dateText: {
    fontSize: 16,
    color: TEXT_COLOR,
    fontFamily: FONT_MEDIUM,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  self: {
    justifyContent: 'flex-end',
  },
  other: {
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    borderRadius: 50,
    marginRight: 10,
  },
  dateLine: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '35%',
    marginBottom: 5,
  },
  textContainer: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 12,
    borderTopLeftRadius: 0,
    padding: 10,
    maxWidth: '80%',
    elevation: 4,
  },
  verify: {
    height: 8,
    width: 8,
    resizeMode: 'contain',
    position: 'absolute',
    right: 10,
    bottom: 0,
  },
  messageText: {
    fontSize: 14,
    color: TEXT_COLOR,
    fontFamily: FONT_REGULAR,
  },
  loader: {
    padding: 10,
    alignItems: 'center',
  },
});
