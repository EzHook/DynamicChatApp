// screens/HomeScreen.js
import React, {useEffect, useState} from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {PRIMARY_COLOR} from '../constants/colors';
import Header from '../components/Header';
import GroupHeader from '../components/GroupHeader';
import Messages from '../components/Messages';
import {fetchChats} from '../services/chatService';
import ChatInput from '../components/ChatInput';
import {Chat} from '../types/apiDataTypes';

const HomeScreen = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0); // Pagination state
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const getChats = async () => {
      try {
        const data = await fetchChats(0); // Fetch initial chats
        setChats(data.chats);
      } catch (error) {
        console.error('Failed to load chats:', error);
      } finally {
        setLoading(false);
      }
    };
    getChats();
  }, []);

  const loadMoreChats = async () => {
    if (isLoadingMore) return; // Prevent multiple API calls

    setIsLoadingMore(true);
    try {
      const nextPage = page + 1;
      const data = await fetchChats(nextPage);
      if (data?.chats?.length) {
        setChats(prevChats => [...data.chats, ...prevChats]); // Append older messages
        setPage(nextPage); // Increment the page number
      }
    } catch (error) {
      console.error('Failed to load more chats:', error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={PRIMARY_COLOR} barStyle="dark-content" />
      <Header />
      <GroupHeader />
      <View style={styles.separator} />
      {loading ? (
        <ActivityIndicator size="large" color="#000" style={styles.loader} />
      ) : (
        <Messages
          chats={chats}
          loadMoreChats={loadMoreChats}
          isLoadingMore={isLoadingMore}
        />
      )}
      <View style={styles.chatContainer}>
        <ChatInput />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
  },
  chatContainer: {
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#E5E5E0',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
