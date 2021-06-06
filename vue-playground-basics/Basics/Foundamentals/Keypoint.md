# 01_basics

Once the Vue app object has been created and mounted to a specific object in the HMTL two important features of Vue become available:

**Interpolation** : allows us to use all variables specified in the `data()` object inside HTML using template syntax.
We can manipulate this through directives like `v-if` or `v-for`.

**Binding** : Beside the Vue directives and commands we can also bind standard HTML tags by preposing `v-bind:`, this will tell Vue that the value of those tags are Vue variables and not standard HTML strings:

> v-bind:hreg="my-beautiful-link"

will search in the data array for a variable called `my-beautiful-link`.

Next to `data()` we can use `methods` inside the Vue app to create functions that will do something when an event is triggered.

**Events modifiers** (Exercise 2) : Event listeners can be implemented very easily in Vue: just use the `v-on:event` directive.
