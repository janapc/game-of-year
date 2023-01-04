import { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { useIsFocused } from '@react-navigation/native'

import { GameApi, Game } from '../../api/GameApi'
import Message from '../../components/message'
import styles from './styles'

export default function Winner() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [winner, setWinner] = useState<Game>()

  const isFocused = useIsFocused()

  useEffect(() => {
    async function getWinner() {
      setLoading(true)
      setError(false)
      const result = await GameApi.getGameWinner()
      if (!result) setError(true)
      setWinner(result)
      setLoading(false)
    }
    if (isFocused) {
      getWinner()
    }
  }, [isFocused])

  return (
    <View style={styles.container}>
      {loading ? (
        <Message message="Carregando..." />
      ) : error ? (
        <Message message="Estamos calculando..." />
      ) : winner ? (
        <View style={styles.winner}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: winner.cover,
            }}
          />
          <View style={styles.details}>
            <Text style={styles.title}>{winner.name}</Text>
            <View style={styles.trophy}>
              <FontAwesome5 name="trophy" size={18} color="#343434" />
              <Text style={styles.votes}>{winner.votes}</Text>
            </View>
          </View>
        </View>
      ) : (
        <Message message="Estamos calculando..." />
      )}
    </View>
  )
}
