<template>
    <v-card class="bg-white mt-3 p-2 shadow border rounded">
        <v-img
        v-if="item.attachment"
        :height="150"
        aspect-ratio="16/9"
        cover
        :src="getImageSource()"
        ></v-img>
        <v-row>
            <v-col>
                <v-btn>Edit</v-btn>
                <v-btn @click="onDeleteTask()">Delete</v-btn>  
            </v-col>
        </v-row>
        <v-card-title>
                Title: {{ item.title }}
                </v-card-title>
        <v-card-text>Description: {{ item.description }}</v-card-text>
        <v-card-text>Date: {{ item.estimatedTime }}</v-card-text>
        <v-card-text>Labels: {{ item.labels }}</v-card-text>
    </v-card>
</template>

<script>
import { useTaskStore } from '../store/index';

export default {
    props: ["item"],
    methods: {
        getImageSource() {
            return URL.createObjectURL(this.item.attachment[0])
        },
        onDeleteTask() {
            const taskStore = useTaskStore();
            for (const status in taskStore.tasks) {
                const index = taskStore.tasks[status].indexOf(this.item);
                if (index !== -1) {
                    taskStore.deleteTask(status, index);
                    break;
                }
            }
        },
    },
};
</script>


