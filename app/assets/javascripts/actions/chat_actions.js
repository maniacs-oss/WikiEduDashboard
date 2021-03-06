import McFly from 'mcfly';
import API from '../utils/api.js';
const Flux = new McFly();

const ChatActions = Flux.createActions({
  requestAuthToken() {
    return API.chatLogin()
      .then(resp => ({ actionType: 'CHAT_LOGIN_SUCCEEDED', data: resp }))
      .catch(resp => ({ actionType: 'API_FAIL', data: resp }));
  },

  enableForCourse(courseId) {
    return API.enableChat(courseId)
      .then(resp => ({ actionType: 'ENABLE_CHAT_SUCCEEDED', data: resp }))
      .catch(resp => ({ actionType: 'API_FAIL', data: resp }));
  }
});

export default ChatActions;
