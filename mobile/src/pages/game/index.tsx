import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

import { propsNavigationStack } from '../../routes'
import styles from './styles'

export default function GameScreen() {
  let { params } = useRoute<RouteProp<propsNavigationStack, 'Game'>>()
  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#1B1A17',
      }}
    >
      <StatusBar style="dark" backgroundColor="#FFC947" />
      {Object.keys(params).length ? (
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <View>
              <Ionicons
                name="arrow-back"
                size={28}
                color="#343434"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={styles.containerHeader}>
              <Text style={styles.name}>{params.name}</Text>
              <View style={styles.totalVotes}>
                <Text style={styles.votes}>{params.votes}</Text>
                <Ionicons name="trophy" size={20} color="#343434" />
              </View>
            </View>
          </View>

          <View style={styles.img}>
            <Image
              style={{ height: '100%' }}
              source={{
                uri: params.cover,
              }}
            />
          </View>

          <View style={{ width: '90%', alignSelf: 'center' }}>
            <Text style={styles.details}>Descrição:</Text>
            <Text style={styles.description}>{params.description}</Text>
          </View>
        </View>
      ) : (
        <>
          <View style={{ height: '5%', backgroundColor: '#FFC947' }}>
            <View>
              <Ionicons
                name="arrow-back"
                size={28}
                color="#343434"
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
          <Text style={styles.gameNotFound}>Jogo não encontrado</Text>
        </>
      )}
    </SafeAreaView>
  )
}
