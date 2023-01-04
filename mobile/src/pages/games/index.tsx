import { useEffect, useState } from 'react'
import { RefreshControl, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

import Card from '../../components/card'
import Message from '../../components/message'
import { GameApi, Game } from '../../api/GameApi'
import styles from './styles'

export default function Games() {
  const [refreshing, setRefreshing] = useState(false)
  const [sortByAsc, setSortByAsc] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [games, setGames] = useState<Game[] | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(false)
    const abort = new AbortController()
    async function getAll() {
      const result = await GameApi.getAllGames()
      if (result) setGames(result)
      else setError(true)
      setLoading(false)
    }
    getAll()
    return () => {
      abort.abort()
    }
  }, [])

  async function refreshingGames() {
    setRefreshing(true)
    let result = await GameApi.getAllGames()
    if (result) setGames(result)
    else setError(true)
    setRefreshing(false)
  }

  function sortByName(games: Game[]) {
    let sortGamesByname
    if (!sortByAsc) {
      sortGamesByname = games.sort((a, b) => (a.name < b.name ? -1 : 0))
    } else {
      sortGamesByname = games.sort((a, b) => (a.name > b.name ? -1 : 0))
    }
    setSortByAsc(!sortByAsc)
    setGames(sortGamesByname)
  }

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <Message
          message="Estamos passando por uma instabilidade no sistema mais já estamos
        resolvendo"
        />
      ) : loading ? (
        <Message message="carregando..." />
      ) : games?.length ? (
        <>
          <Ionicons
            name="funnel-outline"
            style={styles.sort}
            size={24}
            onPress={() => sortByName(games)}
            color="#FFC947"
          />
          <FlatList
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            data={games}
            renderItem={({ item }) => <Card {...item} />}
            keyExtractor={(item) => String(item.id)}
            refreshControl={
              <RefreshControl
                colors={['white', '#FFC947']}
                tintColor={'#FFC947'}
                refreshing={refreshing}
                onRefresh={refreshingGames}
              />
            }
          />
        </>
      ) : (
        <Message message="Conteúdo não encontrado" />
      )}
    </SafeAreaView>
  )
}
