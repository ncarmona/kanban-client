import { IProfile } from 'domain/interfaces/IProfile';

export default {
  state: {
    name: 'Noel',
    mail: 'ncarm89@gmail.com',
    boards: [
      'first board'
    ]
  },
  getters: {
    getProfile: (state: IProfile): IProfile => state,
    getProfileBoards: (state: IProfile): string[] => state.boards
  }
}