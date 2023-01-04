import api from '.'

export type Game = {
  cover: string
  description: string
  id: number
  name: string
  votes: number
}

export class GameApi {
  static async getAllGames(): Promise<Game[] | undefined> {
    try {
      const result = await api.get('/games')
      if (result.status >= 200 && result.status < 300) return result.data
    } catch (error) {
      console.error(error)
    }
  }

  static async getGameWinner(): Promise<Game | undefined> {
    try {
      const result = await api.get(`/games/winner`)
      if (result.status >= 200 && result.status < 300) return result.data
    } catch (error) {
      console.error(error)
    }
  }

  static async updateGameVote(id: number): Promise<void> {
    try {
      await api.patch(`/games/${id}/vote`)
    } catch (error) {
      throw new Error('Error')
    }
  }

  static async searchGameByName(name: string): Promise<Game[] | undefined> {
    try {
      const result = await api.get('/games/search', {
        params: {
          name,
        },
      })
      if (result.status >= 200 && result.status < 300) return result.data
    } catch (error) {
      console.error(error)
    }
  }
}
