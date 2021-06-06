<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
        v-for="user in activeUser"
        :key="user.id"
        :id="user.id"
      :full-name="user.name"
      :info-text="user.description"
      :roles="user.role"
    ></user-info>
  </div>
  <div class="container-fluid">
    <h2>Notes</h2>
    <div class="notes">
      <ul>
        <li><span class="commit">Global vs. local components</span>
        <p>Up to now we always registered the components in the <code>main.js</code> file. This is <em>per se</em>
        not a problem but could influence performance if we have dozens of components in our app, since everything declared
        in main.js is going to be preloaded when the app is created. <br> A more advance way to register components is to divide those who should be
        globally available (and thus registered in main.js) from those that are needed just in some subparts of the app. In that case we can
        register the components locally in the parent component</p>
        </li>
      </ul>
    </div>
    <div id="bikeleasing"><svg viewBox="-108 170 350 400">
      <path
          style="stroke-width:1.1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:.1;fill:transparent;stroke: transparent"
              d="M 0,270 c 0, -64, 123 -125, -9 12"
          id="path14" />
      <text>
        <textPath xlink:href="#path14" fill="teal">Bikeleasing </textPath> </text>
    </svg></div>

  </div>

</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default {
  components: {"the-header" : TheHeader},
  data() {
    return {
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

.commit {
  font-size: 20px;
  font-weight: bolder;


  text-decoration: darkturquoise solid underline;
  text-decoration-skip: ink;
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
</style>