<template>
    <div>
        <base-button> Search and Filter</base-button>
        <base-button @click="redirectToForm" >Add Task</base-button>
    </div>
    <ProgressionBar></ProgressionBar>
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col mx-2 px-2 py-3 bg-light border rounded">
          <h6>Pending</h6>
         <draggable 
          class="draggable-list" 
          :list="tasks.pending" 
          group="tasks"
          item-key="id"
          @change="(item)=>moveItem(item)"
          >
            <template #item="{element}" >
                <div>
                    <TaskCard :item="element"/>
                </div>
            </template>
          </draggable>
        </div>
        <div class="col mx-2 px-2 py-3 bg-light border rounded">
          <h6>Processing</h6>
          <draggable 
          class="draggable-list" 
          :list="tasks.processing" 
          group="tasks"
          item-key="id"
          @change="(item)=>moveItem(item)"
          >
            <template #item="{element}" >
                <div>
                    <TaskCard :item="element"/>
                </div>
            </template>
          </draggable>
        </div>
        <div class="col mx-2 px-2 py-3 bg-light border rounded">
          <h6>Done</h6>
          <draggable
            class="draggable-list"
            :list="tasks.done"
            group="tasks"
            item-key="id"
            @change="(item)=>moveItem(item)"
          >
            <template #item="{element}" >
                <div>
                    <TaskCard :item="element"/>
                </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import draggable from "vuedraggable";
  import { mapState } from 'pinia'
  import { useTaskStore } from '../store/index';
  import TaskCard from "../components/TaskCard"
  import ProgressionBar from "../components/ProgressionBar.vue";
  
  
  export default {
    name: "BoardPage",
    components: {
          draggable,
          TaskCard,
          ProgressionBar
    },
    computed: {
      ...mapState(useTaskStore, ['tasks'])
    },
    methods: {
      moveItem(item) {
        console.log(item)
          },
      redirectToForm() {
      this.$router.push('/form');
          },
    }
  }
  </script>
  
  <style scoped>
  h6 {
    font-weight: 700;
  }
  .col {
    height: 90vh;
  }
  </style>