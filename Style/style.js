import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale, horizontalScale } from '../helper/Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9FFC6',
  },
  header: {
    backgroundColor: '#044700',
    flexDirection: 'row',
    
  },
  footer: {
    backgroundColor: '#044700',
    flexDirection: 'row',
    
  },
  title: {
    color: '#670D41',
    fontWeight: 'bold',
    fontSize: moderateScale(23),
    textAlign: 'center',
    
  },
  titleHeader: {
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    fontSize: moderateScale(23),
    textAlign: 'center',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  author: {
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    fontSize: moderateScale(15),
    textAlign: 'center',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  gameboard: {
    backgroundColor: '#C9FFC6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gameinfo: {
    backgroundColor: '#C9FFC6',
    color: '#670D41',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: moderateScale(14),
    marginHorizontal: horizontalScale(10)
  },
  homeinfo: {
    color: '#670D41',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: moderateScale(20),
    marginTop: verticalScale(10),
  },
  home: {
    flex: 1,
    backgroundColor: '#C9FFC6',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  homeIcon: {
    alignSelf: 'center',
    marginTop: verticalScale(10),
  },
  nameHome: {
    color: '#670D41',
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  nameGameboard: {
    color: '#670D41',
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(10),
  },
  gameboardText: {
    backgroundColor: '#C9FFC6',
    color: '#670D41',
    alignSelf: 'center',
    fontSize: moderateScale(20),
  },
  gameboardText2: {
    backgroundColor: '#C9FFC6',
    color: '#670D41',
    alignSelf: 'center',
    fontSize: moderateScale(20),
    marginTop: verticalScale(10),
  },
  numberPoints: {
    color: '#670D41',
    textAlign: 'center',
    fontSize: moderateScale(20),
    flexDirection: 'row',
  },
  pointsText: {
    color: '#670D41',
    fontSize: moderateScale(25),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bonus: {
    flex: 1,
    color: '#670D41',
    fontSize: moderateScale(20),
    textAlign: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  flex: {
    flexDirection: "row",
  },
  dices: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  button: {
    backgroundColor: "#670D41",
    borderRadius: moderateScale(15),
    alignSelf: 'center',
    width: horizontalScale(200),
    marginVertical: verticalScale(10),
  },
  gameboardbutton: {
    backgroundColor: "#670D41",
    borderRadius: moderateScale(15),
    alignSelf: 'center',
    width: horizontalScale(200),
  },
  buttonText: {
    color: "white",
    alignSelf: 'center',
    fontSize: moderateScale(20),
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(12),
  },
  textInput: {
    backgroundColor: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    padding: moderateScale(10),
    fontSize: moderateScale(20),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(2),
    borderColor: '#670D41',
    color: '#670D41',
    marginTop: verticalScale(10),
    width: horizontalScale(175),
  },
  modal: {
    marginTop: verticalScale(100),
    alignSelf: 'center',
    width: horizontalScale(375),
    backgroundColor: '#C9FFC6',
    flex: 1,
    justifyContent:'space-between',
    marginBottom: verticalScale(75),
  },
  tabBar: {
    backgroundColor: '#C9FFC6',
    color: '#670D41',
  },
  scoreboard: {
    flex: 1,
    backgroundColor: '#C9FFC6',
    alignItems: 'center',
  },
  scoreboardText: {
    color: '#670D41',
    fontSize: moderateScale(20),
    marginHorizontal: horizontalScale(1),
    borderWidth: moderateScale(1),
    borderColor: '#670D41',
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  scoreboardTitle: {
    color: '#670D41',
    textAlign: 'center',
    fontSize: moderateScale(25),
    marginTop: verticalScale(10),
    fontWeight: 'bold'
  },
  scoreboardButton: {
    backgroundColor: "#670D41",
    borderRadius: moderateScale(15),
    alignSelf: 'center',
    width: horizontalScale(200),
    marginBottom: verticalScale(10),
  },
  scoreboardList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
    borderWidth: moderateScale(1),
    padding: moderateScale(5),
    borderRadius: moderateScale(10),
    borderColor: '#670D41',
  },
  scoreboardIndex: {
    color: '#670D41',
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  scoreboardName: {
    color: '#670D41',
    fontSize: moderateScale(15),
  },
  scoreboardDate: {
    color: '#670D41',
    fontSize: moderateScale(15),
  },
  scoreboardPoints: {
    color: '#670D41',
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  tabBarSyle: {
    backgroundColor: '#56986A',
    borderTopColor: '#56986A',
  },
  tabBarLabelStyle: {
    color: '#670D41'
  }, 
  headerStyle: {
  backgroundColor: '#56986A', 
  borderBottomColor: '#56986A'
  },
});