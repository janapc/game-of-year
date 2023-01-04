import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A17',
    flexDirection: 'column',
    paddingTop: 20,
  },
  search: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    width: '95%',
    paddingLeft: 16,
    alignSelf: 'center',
    height: 46,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    paddingLeft: 6,
  },
  containerMessage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  message: {
    color: '#F7F7F7',
    textAlign: 'center',
  },
})
