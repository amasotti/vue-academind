const app = Vue.createApp({})

app.component('friend-item', {
    template: `
    <h2> {{friend.name}} </h2>
    <button @click='toggleDetails'>{{visible ? 'Hide' : 'Show' }} Details</button>
    <ul v-show='visible'>
      <li :key='friend.id'><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}} </li>
    </ul>
  </li>`,
  data() {
      return {
          friend:  {id: 1, name: 'Anthony Pavone', phone: "+49 123 321 456 65", email: "pippo@ferrero.man"},
          visible : false
      }
    },
    methods: {
        toggleDetails() {
            this.visible = !this.visible
        }
    }
})


app.component('friend-item2', {
    template: `
    <h2> {{friend.name}} </h2>
    <button @click='toggleDetails'>{{visible ? 'Hide' : 'Show' }} Details</button>
    <ul v-show='visible'>
      <li :key='friend.id'><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}} </li>
    </ul>
  </li>`,
  data() {
      return {
          friend:   {id: 2, name: 'Jolly Ferrero', phone: "+49 789 987 654 45", email: "jolly@ferrero.man"},
          visible : false
      }
    },
    methods: {
        toggleDetails() {
            this.visible = !this.visible
        }
    }
})

app.mount("#app")