<template>
  <div>
    <the-header></the-header>
    <base-card>
      <badge-list></badge-list>
    </base-card>
    <base-card>
      <user-info
          v-for="user in activeUser"
          :id="user.id"
          :key="user.id"
          :full-name="user.name"
          :info-text="user.description"
          :roles="user.role"
      ></user-info>
    </base-card>
    <div class="btn-container">
      <button class="btn btn-primary" @click="toggleGoals">{{ showGoals ? 'Hide' : 'Show' }} Goals</button>
    </div>
    <div class="btn-container">
      <button class="btn btn-primary" @click="toggleNotes">{{ showNotes ? 'Hide' : 'Show' }} Notes</button>
    </div>

    <base-card v-if="showGoals">
      <hr>
      <keep-alive>
        <component :is="activeComponent">
          <h2>A goal:</h2>
          <template #goalItem="item">
            <h3>{{ item['goal'] }}</h3>
          </template>
        </component>
      </keep-alive>
      <hr>
    </base-card>

  </div>
  <!--  Placing the modal here to test teleport  -->
  <teleport to="body">
    <modal-message @exit="reload" @continue="toggleModal" v-if="showDialog">
      <template #default>
        You are about to hide the notes, want to proceed?
      </template>
    </modal-message>
  </teleport>

  <div class="container-fluid" v-if="showNotes">
    <h2>Notes</h2>
    <div class="notes">
      <ul>
        <li><span class="commit">Global vs. local components</span>
          <p>Up to now we always registered the components in the <code>main.js</code> file. This is <em>per se</em>
            not a problem but could influence performance if we have dozens of components in our app, since everything
            declared
            in main.js is going to be preloaded when the app is created. <br> A more advance way to register components
            is to divide those who should be
            globally available (and thus registered in main.js) from those that are needed just in some subparts of the
            app. In that case we can
            register the components locally in the parent component</p>
        </li>
        <li><span class="commit">Slots</span>
          <p>Slots are to HTML what props are to data: a functionality in Vue to inject - possibly complex - HTML code
            inside custom Vue-HTML tags for components.
            In this example the content is injected inside a base-card component that takes care of the styling.
          </p>
          <p>We can also have multiple slots for one and the same component but then we have to name them with the
            <code>name</code> attribute:</p>

          <pre>
            &lt;slot name="whatever"&gt;
              &lt;h3&gt;Default&lt;/h3&gt;
            &lt;/slot&gt;
          </pre>
          <p>
            Notice also in the example before that we can have code inside the slot that will be rendered only and only
            if no other HTML is provided when the slot is used.</p>


          <p>
            Using slots also activates a special keyword: <samp>this.$slots</samp> that can be used to console-log
            informations about the slots or to check the presence of content
            in a slot and improve performance.
            Even empty slots are mounted and rendered and just hang empty in the DOM possibly causing problems. So it's
            a good (pro) practice to check the presence of content if it
            could be the case that the slots remains empty:</p>

          <pre>
            &lt;slot name="xy" v-if="$slots.xy"&gt;
          </pre>
          <p>
            If no content is provided, this will eval to <code>undefined</code> and thus <code>false</code> and will not
            be rendered.</p>
          <p>Last but not list, remember the shorthands:</p>
          <ul>
            <li><b>:key</b> : v-bind:key</li>
            <li><b>@click</b> : v-on.click</li>
            <li><b>#xy</b> : v-slot:"xy"</li>
          </ul>

        </li>
      </ul>
      <p>Finally I've also tested a separated feature: <code>dynamic components</code> which allow to dynamically toggle
        (or render or modify) components using the bound <samp>:is</samp> directive</p>
    </div>
    <div id="bikeleasing">
      <svg viewBox="-108 170 350 400">
        <path
            id="path14"
            d="M 0,270 c 0, -64, 123 -125, -9 12"
            style="stroke-width:1.1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:.1;fill:transparent;stroke: transparent"/>
        <text>
          <textPath fill="teal" xlink:href="#path14">Bikeleasing</textPath>
        </text>
      </svg>
    </div>

  </div>

</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import Goal from './components/Scoped.vue';
import MyModal from './components/MyModal.vue';


export default {
  components: {
    "the-header": TheHeader,
    'badge-list': BadgeList,
    'user-info': UserInfo,
    'user-goal': Goal,
    'modal-message': MyModal
  },
  data() {
    return {
      showGoals: false,
      showNotes: true,
      activeComponent: null,
      showDialog: false,
      activeUser: [
        {
          id: 1,
          name: 'Maximilian Schwarzmüller',
          description: 'Site owner and admin',
          role: ['admin', "author"]
        },
        {
          id: 2,
          name: 'Antonio Masotti',
          description: 'Student and creator',
          role: ['creator', 'dev', "author"]
        }
      ],
    };
  },
  methods: {
    toggleGoals() {
      //this.showNotes = !this.showNotes;
      this.showGoals = !this.showGoals;
      this.activeComponent = 'user-goal';
    },
    toggleNotes() {
      if (this.showNotes) {
        this.showDialog = true;
        console.log(this.showDialog)
      }
      this.showNotes = !this.showNotes;
    },
    toggleModal() {
      this.showNotes = false;
      this.showDialog = false;
    },
    reload() {
      this.showDialog = false;
      this.showNotes = true;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container-fluid {
  width: 70vw;
  margin: auto;
}

@media only screen and (max-width: 768px) {
  .container-fluid {
    width: 100vw;
  }
}

.commit {
  font-size: 20px;
  font-weight: bolder;
  text-decoration: darkturquoise solid underline;

}

.container-fluid h2 {
  background-color: teal;
  box-shadow: 0 3px 7px cadetblue;
  border-radius: 5px;
  color: antiquewhite;
  text-align: center;

}

.notes {
  position: relative;
  border: solid 0.5px silver;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 5px 5px 0 silver;
}

#bikeleasing {
  font-family: "Computer Modern", monospace;
  font-size: 16px;
  width: 70%;
  position: absolute;
}

.btn-container {
  margin: auto;
  text-align: center;
  padding-block-end: 20px;
}

.btn-container button {
  border-radius: 4px;
  box-shadow: 3px 3px 4px 1px rgba(86, 135, 241, 0.7);
  z-index: 3;
}
</style>
