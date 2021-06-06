<template>
  <div>
    <active-element
        :topic-title="activeTopic && activeTopic.title"
        :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <knowledge-base></knowledge-base>

    <hr>

    <div class="container notes">
      <h2>Notes</h2>
      <section>
        <p>In the original implementation the <samp>Prop</samp> <em>topics</em> was passed through two components and
          retrieved in App.vue.
          This is not really bad but makes the code difficult to read and the stack of requests longer. For that reason,
          the changes you will see in the commits of
          this repository implement a new Vue feature called <samp>Provide + Inject</samp>. </p>

        <p>
          <strong>Provide</strong> can be implemented as an array (similar to <samp>methods</samp>) and in that case we
          will have to duplicate the arrays we're <em>providing</em> (if they're needed also as data being target of some
          methods). Alternatively we can declare <samp>provide</samp> as a method (similar somehow to <samp>data</samp>).
          In this scenario we can pass data with the <code>this</code> keyword connecting them.

        </p>

        <p>The Vue functionality <code>Provide + Inject</code> can also be applied to methods and emitted methods but this
          requires some adjustments.

        </p>

        <button class="btn btn-danger">Try button</button>

      </section>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
              'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
              'Components are a core concept for building Vue UIs and apps',
          fullText:
              'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
        {
          id: 'default',
          title: 'Welcome',
          description:
              'This page will show you some important information about Vue',
          fullText:
              'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: 'default',
    };
  },
  provide() {
    return {
      topics: this.topics,
      selectTopic: this.activateTopic
    }
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}

.container {
  border-radius: 20px;
  box-shadow: 0 2px 3px 1px slategray;
  width: 65vw;
  margin: auto;
}

.container h2 {
  color: #524747;
  background-color: #65e875;
  padding-bottom: 3px;
}
</style>