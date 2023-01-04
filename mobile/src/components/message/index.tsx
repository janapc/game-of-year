import { Text, View } from 'react-native'

import styles from './styles'

type Message = {
  message: string
}

export default function message({ ...props }: Message) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.message}</Text>
    </View>
  )
}
