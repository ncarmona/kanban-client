<template>
  <div class="flex justify-items-center">
    <BoardColumnComponent class="ml-14" v-for="column in board.columns" :column="column" :key="column.id"/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BoardColumnComponent from './BoardColumn/BoardColumnComponent.vue'
import { IBoard } from '../../domain/interfaces/IBoard'
import { ITag } from 'domain/interfaces/ITag'

export default defineComponent({
  components: { BoardColumnComponent },
  setup() {
    const tag1: ITag = {
      id: "1",
      name: "tag1",
      color: "bg-orange-500",
      board: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
      deleted: false,
      disabled: false
    }
    const tag2: ITag = {
      id: "2",
      name: "tag2",
      color: "bg-orange-500",
      board: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
      deleted: false,
      disabled: false
    }
    const tag3: ITag = {
      id: "1",
      name: "tag3",
      color: "bg-orange-500",
      board: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
      deleted: false,
      disabled: false
    }

    const board: IBoard = {
      id: "1",
      owner: "noel",
      editors: ["noel"],
      viewers: ["noel"],
      tags: [tag1, tag2, tag3],
      disabled: false,
      deleted: false,
      modifiedAt: new Date(),
      createdAt: new Date(),
      columns: [{
        name: "todo",
        default: true,
        position: 0,
        board: "1",
        createdAt: new Date(),
        modifiedAt: new Date(),
        deleted: false,
        disabled: false,
        tasks: [{
          id: "1",
          title: "Task1",
          description: "Task 1 description",
          author: "noel",
          tags: [tag2, tag3],
          backlog: false,
          deleted: false,
          disabled: false,
          modifiedAt: new Date(),
          createdAt: new Date(),
          column: "1"
        }, {
          id: "2",
          title: "Task1",
          description: "Task 2 description",
          author: "noel",
          tags: [tag1, tag2],
          backlog: false,
          deleted: false,
          disabled: false,
          modifiedAt: new Date(),
          createdAt: new Date(),
          column: "1"
        }, {
          id: "3",
          title: "Task3",
          description: "Task 3 description",
          author: "noel",
          tags: [tag1, tag2],
          backlog: false,
          deleted: false,
          disabled: false,
          modifiedAt: new Date(),
          createdAt: new Date(),
          column: "1"
        }]
      }, {
        name: "done",
        default: false,
        position: 0,
        board: "1",
        createdAt: new Date(),
        modifiedAt: new Date(),
        deleted: false,
        disabled: false,
        tasks: []
      }]
    }

    return { board }
  }
})
</script>
