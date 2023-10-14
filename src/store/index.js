import { defineStore } from 'pinia'

export const useTaskStore = defineStore({
  id: 'task',
  state: () => ({
      tasks: { pending: [], processing: [], done: [] },
      task: null
  }),
  getters: {
      getTasksByStatus: (state) => {return (status) => state.tasks[status]}
  },
    actions: {
        moveTask(status, item) {
            this.tasks[status].push(item)
            //this.state.task[status].push(item)
        },

        deleteTask(status, index) {
            if (status in this.tasks && index >= 0 && index < this.tasks[status].length) {
                this.tasks[status].splice(index, 1);
            }

        }
    }
})




