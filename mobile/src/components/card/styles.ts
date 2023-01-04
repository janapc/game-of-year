import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 180,
    borderRadius: 4,
    backgroundColor: '#1B2021',
    flexDirection: 'row',
    marginVertical: 5,
  },
  cardCover: {
    width: '40%',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  cardDetails: {
    padding: 10,
    flexDirection: 'column',
    flexShrink: 1,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  cardTitle: {
    color: '#F7F7F7',
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    marginBottom: 8,
  },
  cardDescription: {
    color: '#F7F7F7',
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  btnVote: {
    backgroundColor: '#FFC947',
    borderRadius: 4,
    alignSelf: 'center',
    padding: 12,
    width: '50%',
    marginTop: 'auto',
  },
  btnText: {
    fontFamily: 'Roboto_700Bold',
    color: '#1B2021',
    fontSize: 14,
    textAlign: 'center',
  },
})

export default styles
