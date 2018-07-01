/**
 * @providesModule RegisterStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    mainCol: {
        backgroundColor: StyleConfig.white,
        width: StyleConfig.getWidthByColumn()
    },
    gridRow: {
        justifyContent:'center'
    },
    girdCol: {
        justifyContent:'center',
        alignItems:'center',
    },
    titleTxtRow: {
        justifyContent:'center',
        alignItems:'center',
    },
    titleText: {
        letterSpacing:1,
        textAlign:'center',
        color:StyleConfig.white,
    },
    inputRow: {
        alignItems:'center',
        height:StyleConfig.countPixelRatio(0),
        width: StyleConfig.getWidthByColumn(),
    },
    input:{
        color: StyleConfig.black,
        fontSize: StyleConfig.fontSizeH3,
        height: StyleConfig.countPixelRatio(20),
        lineHeight: StyleConfig.countPixelRatio(20),
        marginBottom:StyleConfig.countPixelRatio(4)
    },

    registerFormInput:{
        color: StyleConfig.black,
        fontSize: StyleConfig.fontSizeInputH2,
        height: StyleConfig.countPixelRatio(30),
    },
    countryCodeCol:{
        width: StyleConfig.getWidthByColumn(1),
    },
    countryCode:{
        width: StyleConfig.getWidthByColumn(1),
    },
    phoneInputCol:{
        width: StyleConfig.getWidthByColumn(3),
    },
    phoneInput:{
        width: StyleConfig.getWidthByColumn(3),
    },
    submitBtn:{
        height: StyleConfig.buttonHeightH1,
        width:WINDOW.width * 0.19,
        paddingLeft:0,
        paddingRight:0,
        justifyContent:'center',
        marginTop:-8,
    },
    submitBtnTxt:{
        fontWeight:'bold',
        fontSize:((WINDOW.width + WINDOW.height) * 0.013),
        fontFamily: StyleConfig.BariolBold,
        color: StyleConfig.white,
        opacity:0.5,
        textAlign:'center'
    },
    registerForm:{
        backgroundColor: StyleConfig.lightBlue,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    },
    registerFormRowInfo:{
        paddingTop:(WINDOW.height * 0.04),
        borderColor:'red',
        borderWidth:2,
        width: StyleConfig.getWidthByColumn(),
        height: StyleConfig.countPixelRatio(120),
    },
    labelLogin:{
        width: StyleConfig.getWidthByColumn(2),
    },
    labelProfile: {
        width: StyleConfig.getWidthByColumn(3),
    },
    profileCol: {
        marginTop: (WINDOW.width + WINDOW.height) * 0.036
    },
    formFieldIcon:{
        marginTop:StyleConfig.countPixelRatio(2),
        width: StyleConfig.countPixelRatio(14),
        height: StyleConfig.countPixelRatio(14),
        resizeMode:'contain'
    },
    inputleftBtn: {
        marginBottom: StyleConfig.countPixelRatio(0),
    },
    eyeIcon: {
        height: StyleConfig.countPixelRatio(20),
        width: StyleConfig.countPixelRatio(20),
        resizeMode:'contain'
    },
    signupButtonRow: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        marginTop: StyleConfig.countPixelRatio(50),
        marginBottom: StyleConfig.countPixelRatio(30),
        width:StyleConfig.getWidthByColumn(1),
    },
    signupButton: {
        justifyContent:'center',
        alignItems:'center',
        width:StyleConfig.getWidthByColumn(1),
        borderRadius: StyleConfig.getWidthByColumn(1) / 2,
        height: StyleConfig.buttonHeightH1,
        backgroundColor:StyleConfig.darkPink,
        borderColor:StyleConfig.white,
        borderWidth:1,
    },
    signupBtnTxtValid: {
        opacity:1
    },
    signupBtnTxtInValid: {
        opacity:0.5
    },
    btnDisabled: {
        backgroundColor:StyleConfig.darkPink,
    },
    btnEnabled: {
        backgroundColor: StyleConfig.darkPink,
    },
    signupButtonText: {
        letterSpacing:1,
        textAlign:'center',
        backgroundColor:'transparent',
        fontSize: StyleConfig.buttonTextH1,
        fontWeight:'bold',
        color:StyleConfig.white,
        marginTop:StyleConfig.countPixelRatio(0),
    },
    cancelCol: {
        marginVertical: StyleConfig.countPixelRatio(20),
    },
    cancelText: {
        textAlign:'center',
        backgroundColor:'transparent',
        fontFamily: StyleConfig.BariolBold,
        letterSpacing:1,
        color: StyleConfig.gray,
        fontSize: StyleConfig.buttonTextH1
    },
    birthDateRow: {
        flex:1,
    },
    pickerContainer: {
        left: StyleConfig.countPixelRatio(26),
        width: StyleConfig.getWidthByColumn(1),
    },
    dropdownContainer: {
        width: StyleConfig.getWidthByColumn(1)
    },
    monthContainer: {
        width: StyleConfig.getWidthByColumn(4)
    },
    dayContainer: {
        width: StyleConfig.getWidthByColumn(4)
    },
    selectItemText: {
        fontFamily: StyleConfig.BariolBold,
    },
    labelInput: {
        /* marginTop:-8,*/
    },
    signUpRow: {
        alignItems:'center',
        justifyContent:'center',
        marginTop:StyleConfig.countPixelRatio(0),
    },
    signUpTextCol: {
        justifyContent:'center',
        alignItems:'center',
    },
    signUpBtnLabel: {
        color:StyleConfig.black,
        fontSize: StyleConfig.fontSizeH3,
        paddingVertical:StyleConfig.countPixelRatio(12),
    },
    signUpBtn: {
        borderRadius:StyleConfig.buttonHeightH2,
        borderWidth:1,
        borderColor:StyleConfig.navyMediumDark,
        height: StyleConfig.buttonHeightH2,
        width:StyleConfig.getWidthByColumn(2),
        marginTop: StyleConfig.countPixelRatio(0),
    },
    signUpBtnTxt: {
        color:StyleConfig.black,
    },
    signUpBtnTxtValid: {
        opacity:1
    },
    signUpBtnTxtInValid: {
        opacity:0.5
    },
    footerIconRow: {
        width: StyleConfig.getWidthByColumn(0),
        justifyContent:'center',
        alignItems:'center',
    },
    footerIconColFB: {
        width: StyleConfig.getWidthByColumn(4),
        alignItems:'center',
    },
    socialImages: {
        width: StyleConfig.countPixelRatio(50),
        height: StyleConfig.countPixelRatio(50),
        resizeMode:'contain'
    },
    logoCol: {
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop: StyleConfig.countPixelRatio(70),
        height: StyleConfig.countPixelRatio(70),
    },
    logo: {
        width:StyleConfig.getWidthByColumn(1),
        height:'100%',
        resizeMode:'contain'
    },
    iconRow: {
        height:StyleConfig.countPixelRatio(50),
    },
    icon: {
        height: StyleConfig.countPixelRatio(20),
        width: StyleConfig.countPixelRatio(20),
        resizeMode:'contain'
    },
    icon1: {
        resizeMode:'contain',
        opacity:0.9,
        height: StyleConfig.countPixelRatio(10),
        width: StyleConfig.countPixelRatio(10),
//        marginTop: StyleConfig.countPixelRatio(6),
        marginLeft: StyleConfig.countPixelRatio(4)
    },
    signinWithRow:{
        justifyContent:'center',
        alignItems:'center',
        // marginBottom: StyleConfig.countPixelRatio(10),
    },
    signinWithTxt: {
        fontFamily: StyleConfig.BariolBold,
        letterSpacing:1,
        textAlign:'center',
        color:StyleConfig.white,
    },
    bottomImage:{
        width:StyleConfig.countPixelRatio(WINDOW.width+50),
        height:StyleConfig.countPixelRatio(WINDOW.width - WINDOW.width * 0.50),
        bottom:0,
        position:'absolute',
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    birthDateRow: {
        justifyContent:'space-between'
    },
    countryContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor:StyleConfig.white,
        borderBottomWidth: StyleConfig.countPixelRatio(1),
        marginBottom: StyleConfig.countPixelRatio(30),
    },
    statesContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor:StyleConfig.white,
        borderBottomWidth: StyleConfig.countPixelRatio(1),
        marginBottom: StyleConfig.countPixelRatio(30),
    },
    citiesContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor:StyleConfig.white,
        borderBottomWidth: StyleConfig.countPixelRatio(1),
        marginBottom: StyleConfig.countPixelRatio(30),
    },
    dropdownTextStyle: {
        color: StyleConfig.white,
        fontSize: StyleConfig.fontSizeH3,
        fontFamily: StyleConfig.gothamBook,
        letterSpacing: StyleConfig.countPixelRatio(0.5) >= 0.25 ? StyleConfig.countPixelRatio(0.5) : 0.25,
        lineHeight: StyleConfig.countPixelRatio(20),
        paddingLeft: StyleConfig.countPixelRatio(12),
        marginBottom: StyleConfig.countPixelRatio(4)
    },
    dropdownArrow: {
        width: StyleConfig.countPixelRatio(12),
        height: StyleConfig.countPixelRatio(6),
        marginBottom: StyleConfig.countPixelRatio(11),
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    dropdownModalView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dropdownListView:{
        alignItems: 'center',
        justifyContent: 'center',
        width: StyleConfig.getWidthByColumn(),
        height: StyleConfig.countPixelRatio(364),
        backgroundColor: StyleConfig.white,
        shadowColor: StyleConfig.black,
        shadowOffset: { width: StyleConfig.countPixelRatio(1), height: StyleConfig.countPixelRatio(2)},
        shadowOpacity: 0.5,
        shadowRadius: StyleConfig.countPixelRatio(2),
        elevation: 2
    },
    itemViewStyle: {
        height: StyleConfig.countPixelRatio(48),
        width: StyleConfig.getWidthByColumn(),
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    itemSelectedViewStyle: {
        backgroundColor: StyleConfig.selectedItem
    },
    itemTextStyle: {
        marginLeft: StyleConfig.countPixelRatio(22),
        fontSize: StyleConfig.fontSizeParagraph,
        color: StyleConfig.navyMediumDark,
        fontFamily: StyleConfig.gothamBook,
        lineHeight: StyleConfig.countPixelRatio(16)
    },
    itemSelectedTextStyle: {
        fontFamily: StyleConfig.gothamMedium
    },
    sideInputView: {
        marginBottom: StyleConfig.countPixelRatio(22)
    },
    dropdownTextitem:{
        //paddingLeft: StyleConfig.countPixelRatio(40),
    }
});