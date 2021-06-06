# About

This repo contains my coding-along the Academind Vue3.js course.

# Vue Intro

Vuejs is a **framework** which means that adds many functionalities to JS but also imposes some rules, some precise way
to do things. Vue makes simple to write complexes applications that otherwise would be dauting to build in short time.
It also helps to avoid _continually reinventing the wheel_ since it provides many standard web functionalities already
out of the box.

There are two main approaches in using Vue:

- Widget-like: within an application written in vanilla HTML, CSS and JS with the addition of some component
  implementing Vuejs.
- SPA (_Single Page Application_): The whole application is written in Vue and updated by event-driven components and
  functions.

**Comparison between the three most popular
frameworks:** [Article](https://academind.com/tutorials/angular-vs-react-vs-vue-my-thoughts/)

# Structure

1. Widget Approach This directory contains small code snippets and minimal apps to test functionalities of Vue and
   eventually compare it with other frameworks.

    - Getting started: Compare vanilla JS and Vue in building a trivial formular field to get track of some tasks. No
      backend --> no persistence. JS must work procedurally here: we find the button, add an Event listener, execute a
      function, do something. Vuejs instead looks directly at the result you want and implements the other steps under
      the hood.

    - Foundamentals:
        1. Basics: Interpolation and Bindings, `data` and `methods` in the VueApp.
        2. Native events: (Intro to `v-on` and `v-bind`)
        3. Binding von style elements and `Css`-classes.
    - Conditionals: Basic usage of conditional statements.


2. SPA Vue This directory contains examples implementing Vue as the real engine of a Single Page application
