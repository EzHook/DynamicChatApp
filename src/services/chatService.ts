// services/chatService.js
import axios from 'axios';
import { BASE_URL } from '../constants/api';


export const fetchChats = async (page: number) => {
  const response = await fetch(`https://qa.corider.in/assignment/chat?page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch chats');
  }
  return response.json();
};

