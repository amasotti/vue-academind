import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact';
import AddFriend from './components/AddFriend';

const app = createApp(App);

// Register component
app.component('friend-contact', FriendContact);
app.component('add-friend', AddFriend);


app.mount('#app');

