import { IBoard } from 'domain/interfaces/IBoard';
import { IBoardColumn } from 'domain/interfaces/IBoardColumn';
import { ITask } from 'domain/interfaces/ITask';

export default {
  state: [
    {
      id: "1",
      owner: "noel",
      name: "first board",
      editors: ["noel"],
      viewers: ["noel"],
      tags: [{
        id: "1",
        name: "tag1",
        color: "bg-orange-500",
        board: "1",
        createdAt: new Date(),
        modifiedAt: new Date(),
        deleted: false,
        disabled: false
      },{
      id: "2",
      name: "tag2",
      color: "bg-orange-500",
      board: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
      deleted: false,
      disabled: false
    }, {
      id: "1",
      name: "tag3",
      color: "bg-orange-500",
      board: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
      deleted: false,
      disabled: false
    }],
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
          tags: [{
      id: "2",
      name: "tag2",
      color: "bg-orange-500",
      board: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
      deleted: false,
      disabled: false
    }, {
      id: "1",
      name: "tag3",
      color: "bg-orange-500",
      board: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
      deleted: false,
      disabled: false
    }],
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
          tags: [{
      id: "1",
      name: "tag1",
      color: "bg-orange-500",
      board: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
      deleted: false,
      disabled: false
    }, {
      id: "2",
      name: "tag2",
      color: "bg-orange-500",
      board: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
      deleted: false,
      disabled: false
    }],
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
          tags: [{
      id: "1",
      name: "tag1",
      color: "bg-orange-500",
      board: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
      deleted: false,
      disabled: false
    }, {
      id: "2",
      name: "tag2",
      color: "bg-orange-500",
      board: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
      deleted: false,
      disabled: false
    }],
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
      }],
      backlog: [
        {
          id: "1",
          title: "Backlog task",
          description: "Task for the next sprint",
          author: "noel",
          tags: [{
      id: "2",
      name: "tag2",
      color: "bg-orange-500",
      board: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
      deleted: false,
      disabled: false
    }, {
      id: "1",
      name: "tag3",
      color: "bg-orange-500",
      board: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
      deleted: false,
      disabled: false
    }],
          backlog: false,
          deleted: false,
          disabled: false,
          modifiedAt: new Date(),
          createdAt: new Date(),
          column: "1"
        }
      ]
    }
  ],
  mutations: {
    moveTaskToBoard ({ commit }:any, boardName:string, tasks:ITask[]) {
      commit('moveTaskToBoard', boardName, tasks)
    },
    deleteBoard ({ commit }:any, boardID:string) {
      commit('deleteBoard', boardID)
    }
  },
  actions: {
    moveTaskToBoard: (state: any, payload:any) => {
      // get board initial column
      const { boardName, tasks } = payload
      const board:IBoard = state.state.find((c:IBoard) => c.name === boardName)
      
      // Task copy
      let tasksIDs: (string | undefined)[] = tasks.map((t: ITask) => t.id)

      // Find default board column
      const defaultColumn:IBoardColumn | undefined = board.columns.find((c: IBoardColumn) => c.default)
      
      // Remove task from backlog
      board.backlog = board.backlog.filter((t: ITask) => !tasksIDs?.includes(t.id!))
      
      // Add task to initial column
      defaultColumn?.tasks.push(...tasks)
    },
    deleteBoard: (state: any, payload:any) => {
      const { boardID } = payload

      state.state = state.state.filter((b:IBoard) => b.id !== boardID)
    }
  },
  getters: {
    getBoard: (state: IBoard[]) => (name: string) => state.find((b:IBoard) => b.name === name)
  }
}