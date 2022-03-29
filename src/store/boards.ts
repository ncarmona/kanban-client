import { IBoard } from 'domain/interfaces/IBoard';

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
      }]}
  ],
  mutations: {},
  actions: {},
  getters: {
    getBoard: (state: IBoard[]) => (name: string) => state.find((b:IBoard) => b.name === name)
  }
}