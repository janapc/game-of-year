import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'

import Routes from './src/routes'

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <Routes />
      <StatusBar style="inverted" />
    </>
  )
}
