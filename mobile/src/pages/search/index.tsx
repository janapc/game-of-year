import { useEffect, useState } from 'react'
import { View, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5 } from '@expo/vector-icons'
import { useIsFocused } from '@react-navigation/native'

import { Game, GameApi } from '../../api/GameApi'
import Card from '../../components/card'
import styles from './styles'
import Message from '../../components/message'

export default function Search() {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [listOfGames, setListOfGames] = useState<Game[] | undefined>()
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      setInput('')
      setError(false)
      setLoading(false)
      setListOfGames(undefined)
    }
  }, [isFocused])

  async function searchGamesByName() {
    setLoading(true)
    setError(false)
    const gamesFounds = await GameApi.searchGameByName(input)
    if (!gamesFounds?.length) setError(true)
    setListOfGames(gamesFounds)
    setLoading(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <FontAwesome5
          style={{ alignSelf: 'center' }}
          name="search"
          color="#ccc"
          size={16}
        />
        <TextInput
          style={styles.input}
          onChangeText={(input) => setInput(input)}
          value={input}
          placeholder="Pesquisar..."
          placeholderTextColor={'#ccc'}
          onSubmitEditing={searchGamesByName}
        />
      </View>
      {loading ? (
        <Message message="Carregando..." />
      ) : error ? (
        <Message message="Jogo não encontrado" />
      ) : listOfGames ? (
        <ScrollView>
          {listOfGames.map((game, index) => (
            <View
              style={{
                alignSelf: 'center',
                marginTop: 16,
                marginBottom: index === listOfGames.length - 1 ? 16 : 0,
              }}
              key={game.id}
            >
              <Card {...game} />
            </View>
          ))}
        </ScrollView>
      ) : (
        <Message message="Faça uma busca pelo jogo desejado" />
      )}
    </SafeAreaView>
  )
}
