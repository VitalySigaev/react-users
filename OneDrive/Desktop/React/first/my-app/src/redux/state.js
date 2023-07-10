import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hello', likesCount: 12 },
      { id: 2, message: 'QQ', likesCount: 13 },
      { id: 3, message: 'zdravstvyite', likesCount: 14 }
    ],

  },
  messagesPage: {
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'Hello' },
      { id: 3, message: 'Zdracstvuy' },
      { id: 4, message: 'Salamchik' }
    ],
    dialogs: [
      { id: 1, name: 'Victor' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Valery' },
      { id: 4, name: 'Vadim' }
    ],
  },

};
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export default state;

