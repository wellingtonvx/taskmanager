import { StyleSheet } from 'react-native'
import { FONTS } from '../../utils/theme'

export const styles = StyleSheet.create({
  HomeContainer: {
    marginHorizontal: 30,
    marginVertical: 60
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 40,
    height: 40
  },
  greetings: { marginVertical: 30 },
  textName: FONTS.h1,

  salution: FONTS.body3
})
