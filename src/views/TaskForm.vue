<template>
    <div>
      <base-button @click="redirectToBoard()">Go Back</base-button>
      <v-container>
        <v-form @submit.prevent="createTask">
          <v-text-field v-model="task.title" label="Title"></v-text-field>
          <v-textarea v-model="task.description" label="Description"></v-textarea>
          <v-file-input class="v-file-input" v-model="task.attachment" label="Upload File"/>
          <!-- <v-btn @click="removeAttachment" v-if="task.attachment">Remove Attachment</v-btn> -->
          <!-- <v-date-picker v-model="task.estimatedTime" label="Estimated Time"></v-date-picker> -->
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ props }">
              <v-text-field
                v-bind="props"
                :value="task.estimatedTime"
                variant="outlined"
                append-inner-icon="mdi-calendar"
                @input="updateDate"

              ></v-text-field>
            </template>
            <v-date-picker
              :modelValue="task.estimatedTime"
              @update:modelValue="updateDate"
            ></v-date-picker>
          </v-menu>
          <v-select v-model="task.selectedBoard" :items="boards" label="Select Board"></v-select>
          <v-combobox v-model="task.labels" multiple chips :items="labels" label="Add Labels/Tags"></v-combobox>
          <base-button type="submit" @click="redirectToBoard()">Create New Task</base-button>
        </v-form>
      </v-container>
    </div>
  </template>
  
  <script >
  import { useTaskStore } from '../store/index';
  import { VDatePicker } from 'vuetify/labs/VDatePicker'

  export default {
    name: "TaskForm",
    components: {
      VDatePicker,
    },
    setup() {
      const store = useTaskStore();
      return {
        store,
      }
    },
    data() {
      return {
        task: {
          id: '',
          title: '',
          description: '',
          attachment: null,
          estimatedTime: null,
          selectedBoard: null,
          labels: [],
        },
        boards: ['Pending', 'Processing', 'Done'], // Replace with your board data
        labels: ['Label 1', 'Label 2', 'Label 3'], // Replace with your label data
        menu: false,
      };
    },
    computed: {
      dateFormatted() {
      return new Date();
      },
    getDate() {
    const date =  new Date()
    return [date]
      }
    },
    methods: {
      onChange(val) {
          this.task.estimatedTime = val;
    },
    updateDate(val) {
      this.menu = false;
      this.task.estimatedTime = val;
    },
      createTask() {
        console.log(this.task.selectedBoard)
        // Implement your task creation logic here
        this.store.moveTask(this.task.selectedBoard.toLowerCase(), this.task)
        
      },
      removeAttachment() {
        this.task.attachment = null;
      },
      redirectToBoard() {
      this.$router.push('/');
        },
    },
  };
  </script>
  
  <style>
  .v-file-input {
  flex-direction: row-reverse;
}
</style>