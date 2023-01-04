import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    height: '10%',
    backgroundColor: '#FFC947',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  containerHeader: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  name: {
    alignSelf: 'center',
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
    color: '#343434',
  },
  totalVotes: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  votes: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    color: '#FF8A00',
  },
  img: {
    width: 250,
    height: 300,
    marginTop: '30%',
    alignSelf: 'center',
    borderRadius: 8,
    borderColor: '#FFC947',
    borderWidth: 5,
    overflow: 'hidden',
  },
  details: {
    alignSelf: 'center',
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    color: '#FFC947',
  },
  description: {
    alignSelf: 'center',
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#F7F7F7',
  },
  gameNotFound: {
    alignSelf: 'center',
    color: '#f7f7f7',
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
})

export default styles
