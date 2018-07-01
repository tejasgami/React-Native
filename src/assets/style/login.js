/**
 * @providesModule LoginStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    gridRow: {
        justifyContent:'center'
    },
    gridInputRow: {
        justifyContent:'center',
        marginTop:StyleConfig.countPixelRatio(80)
    },
    girdCol: {
        justifyContent:'center',
        alignItems:'center',
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
        marginTop: StyleConfig.countPixelRatio(6),
        marginLeft: StyleConfig.countPixelRatio(4)
    },
    input: {
        color: StyleConfig.black,
        fontSize: StyleConfig.fontSizeInputH2,
        height: StyleConfig.countPixelRatio(30),
    },
    inputHiddenBtn: {
        marginBottom:StyleConfig.countPixelRatio(0),
    },
    btnDisabled: {
        backgroundColor:StyleConfig.darkPink,
    },
    btnEnabled: {
        backgroundColor: StyleConfig.darkPink,
    },
    loginBtn: {
        justifyContent:'center',
        alignItems:'center',
        width:StyleConfig.getWidthByColumn(0),
        borderRadius: StyleConfig.getWidthByColumn(4) / 2,
        height: StyleConfig.buttonHeightH1,
        backgroundColor:StyleConfig.darkPink,
        borderColor:StyleConfig.white,
        borderWidth:1,
    },
    loginBtnTxt: {
        letterSpacing:1,
        textAlign:'center',
        backgroundColor:'transparent',
        fontSize: StyleConfig.buttonTextH1,
        fontWeight:'bold',
        color:StyleConfig.white,
        marginTop:StyleConfig.countPixelRatio(0),
    },
    loginBtnTxtValid: {
        opacity:1
    },
    loginBtnTxtInValid: {
        opacity:0.5
    },
    signUpBtnLabel: {
        color:StyleConfig.black,
        fontSize: StyleConfig.fontSizeH3,
        paddingVertical:StyleConfig.countPixelRatio(12),
    },
    signUpBtnTxt: {
        textAlign:'center',
        backgroundColor:'transparent',
        color:StyleConfig.black,
        letterSpacing:1,
        fontSize: StyleConfig.fontSizeH3,
        fontWeight:'bold'
    },
    loginWithColLeft: {
        alignItems:'center',
        justifyContent:'space-around',
    },
    iconRow: {
        marginTop: StyleConfig.countPixelRatio(50),
    },
    inputRow: {
        alignItems:'center',
        height:StyleConfig.countPixelRatio(110),
        width: StyleConfig.getWidthByColumn(),
    },
    loginRow: {
        justifyContent:'center',
        alignItems:'center',
        marginTop: StyleConfig.countPixelRatio(30),
    },
    loginWithRow: {
        alignItems:'center',
    },
    signUpRow: {
        marginTop: StyleConfig.countPixelRatio(50),
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2
    },
    forgotTextCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    forgotLinkRow:{
        marginTop:StyleConfig.countPixelRatio(30)
    },
    signupLinkRow:{
        marginTop:StyleConfig.countPixelRatio(30)
    },
    signUpTextCol: {
        justifyContent:'center',
        alignItems:'center',
    },
    inputLinkCol: {
        alignItems:'flex-end',
    },
    footerIconRow: {
        width: StyleConfig.getWidthByColumn(1),
        marginBottom: StyleConfig.countPixelRatio(20),
        marginTop: StyleConfig.countPixelRatio(20),
        justifyContent:'center',
        alignItems:'center',
    },
    footerIconColFB: {
        width: StyleConfig.getWidthByColumn(4),
        alignItems:'center',
    },
    footerIconColGPlus: {
        width: StyleConfig.getWidthByColumn(2),
        alignItems:'center',
        marginRight: StyleConfig.scalarSpace,
    },
    footerIconColCivic: {
        width: StyleConfig.getWidthByColumn(4),
        alignItems:'center',
    },
    socialImages: {
        width: StyleConfig.countPixelRatio(50),
        height: StyleConfig.countPixelRatio(50),
        resizeMode:'contain'
    },
    formFieldIcon:{
        marginTop: StyleConfig.countPixelRatio(3),
        width: StyleConfig.countPixelRatio(15),
        height: StyleConfig.countPixelRatio(15),
        resizeMode:'contain'
    },
    titleTxtRow:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: StyleConfig.countPixelRatio(30),
    },
    titleTxt: {
        letterSpacing:1,
        textAlign:'center',
        width: StyleConfig.getWidthByColumn(0),
        color:StyleConfig.black,
    },
    loginWithRow:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom: StyleConfig.countPixelRatio(10),
    },
    loginWithTxt: {
        letterSpacing:1,
        textAlign:'center',
        color:StyleConfig.black,
    },
    signUpBtnLabel: {
        color:StyleConfig.black,
        fontSize: StyleConfig.fontSizeH3,
        justifyContent:'flex-start',
        marginLeft:StyleConfig.countPixelRatio(10),
    },
    bottomImage:{
        width:StyleConfig.countPixelRatio(WINDOW.width+50),
        height:StyleConfig.countPixelRatio(WINDOW.width - WINDOW.width * 0.50),
        left:0,
        bottom:0,
        position:'absolute',
        justifyContent:'flex-end',
        alignItems:'center',
    }
});
