import { Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Game, GameApi } from '../../api/GameApi'
import { propsStack } from '../../routes'
import styles from './styles'

export default function Card({ ...props }: Game) {
  const navigation = useNavigation<propsStack>()

  async function updateVote(id: number) {
    try {
      await GameApi.updateGameVote(id)
    } catch (error) {
      Alert.alert(
        'Não foi possivel enviar seu voto',
        'Por favor tente novamente mais tarde.'
      )
    }
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Game', props)}
    >
      <View style={styles.cardCover}>
        <Image
          style={styles.cardImage}
          source={{
            uri: props.cover,
          }}
        />
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{props.name}</Text>
        <Text numberOfLines={3} style={styles.cardDescription}>
          {props.description}
        </Text>
        <TouchableOpacity
          style={styles.btnVote}
          onPress={() => updateVote(props.id)}
        >
          <Text style={styles.btnText}>Votar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
