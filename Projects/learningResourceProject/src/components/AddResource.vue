<template>
    <div>
        <hr>
        <h2>Add new Resource</h2>
        <base-dialog v-if=showDialog @closeDialog="closeDialog">

        <template v-slot:header>
            <h2>Something is missing</h2>
        </template>


        <template v-slot:dialogBody>
            Hey guys, we need all three fields to be filled:

            <ul>
                <li><samp>title</samp>: Provide a title for the learning resource</li>
                <li><samp>description</samp>: Provide a short summary for the learning resource</li>
                <li><samp>url</samp>: Provide a url to visit the resource</li>
            </ul>
        </template>
        </base-dialog>
    <form class="form-group">
        <div id="resName">
            <label for="res-name">Resource Name</label>
            <input type="text" name="res-name" v-model="name">
        </div>
        
        <div id="resLink">
            <label for="res-link">Resource Link</label>
            <input type="text" name="res-link" v-model="link">
        </div>
        
        <div id="resSummary">
            <label for="res-summary">Resource Summary</label>
            <textarea name="summary" id="res-summary" cols="50" rows="10" v-model="desc"></textarea>
        </div>
    </form> 
        <div class="addResDiv">
            <button id="addResBtn" type="button" @click="saveNewResource">Save</button>
        </div>
    </div>
</template>



<script lang="js">
import BaseDialog from './Utils/BaseDialog.vue';
export default {
  components: { BaseDialog },
  name: 'addResource',
  inject: ['resources', 'addResource'],
  data() {
    return {
      name: '',
      desc: '',
      link: '',
      showDialog: false,
    };
  },
  methods: {
    saveNewResource() {
      const nameCheck = this.checkResourceIsNotEmpty(this.name);
      const titleCheck = this.checkResourceIsNotEmpty(this.desc);
      const linkCheck = this.checkResourceIsNotEmpty(this.link);

      if (nameCheck && titleCheck && linkCheck) {
        const newResource = {
          id: this.name + Date.now(),
          title: this.name,
          description: this.desc,
          url: this.link,
        };
        this.addResource(newResource);
        console.log('Res added', Object.assign({}, this.resources));
        this.name = '';
        this.desc = '';
        this.link = '';
      } else {
        this.showDialog = true;
      }
    },
    checkResourceIsNotEmpty(input) {
      const check = !(input.trim() === '');
      return check;
    },
    closeDialog() {
      this.showDialog = false;
    },
  },
};
</script>

<style lang="css">

h2 {
    text-align: center;
}

label {
    margin: 2em 0;
}

input {
    margin: 2em 5em;
}

 textarea {
     margin: 2em 4em;
 }

.addResDiv {
    display: flex;
    justify-content: center;
    align-content: center;
}

#addResBtn {
    padding: 1em 2em;
    margin-top: 20px;
    border: none;
    border-radius: 4px;
    background-color: #4fc08d;
}

#addResBtn:hover {
    box-shadow: 2px 2px 0 2px silver;
}
    
</style>