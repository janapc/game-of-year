import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B1A17',
  },
  winner: {
    width: '80%',
    height: '70%',
    borderColor: '#FFC947',
  },
  image: {
    height: '86%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  details: {
    height: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FFC947',
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  title: {
    color: '#343434',
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
  },
  trophy: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  votes: {
    alignSelf: 'center',
    color: '#343434',
    marginLeft: 4,
  },
})
