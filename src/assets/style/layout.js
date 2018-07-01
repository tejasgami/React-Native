/**
 * @providesModule LayoutStyle
 */

import { StyleSheet, Platform } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    rootContainer: {
        flex:1,
       backgroundColor:StyleConfig.white,
    },
    container: {
        backgroundColor:StyleConfig.white,
    },
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: StyleConfig.white,
        paddingHorizontal: StyleConfig.getScreenPadding
    },
    mainGrid: {
        width:StyleConfig.getWidthByColumn(),
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:StyleConfig.getScreenPadding
    },
    logo: {
        width:StyleConfig.getWidthByColumn(2),
        height:StyleConfig.countPixelRatio(73),
        marginTop: Platform.OS === 'ios' ? StyleConfig.countPixelRatio(68) : StyleConfig.countPixelRatio(48),
        marginBottom:StyleConfig.countPixelRatio(30),
        resizeMode:'contain'
    },
    headerLabel: {
        letterSpacing:1,
        lineHeight: StyleConfig.countPixelRatio(30),
        backgroundColor: StyleConfig.navyMediumDark,
        color: StyleConfig.white,
        paddingLeft: StyleConfig.countPixelRatio((WINDOW.width + WINDOW.height) * 0.012),
        fontFamily: StyleConfig.BariolBold,
        fontSize: StyleConfig.fontSizeH3,
    },
    headerLabelNoColor: {
        letterSpacing:1,
        lineHeight: StyleConfig.countPixelRatio(30),
        backgroundColor: 'transparent',
        color: StyleConfig.navyMediumDark,
        fontFamily: StyleConfig.BariolBold,
        fontSize: StyleConfig.fontSizeH3,
    },
    inputStyle: {
        fontFamily: StyleConfig.BariolBold,
        color:StyleConfig.navyDark,
        fontSize: StyleConfig.fontSizeInputH1,
        paddingBottom: StyleConfig.countPixelRatio(0),
    },
    errorInput: {
        color:StyleConfig.red,
        fontFamily: StyleConfig.BariolBold,
        fontSize: StyleConfig.fontSizeFieldTitle,
        letterSpacing:1
    },
    sideErrorView: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    sideErrorInput: {
        color:StyleConfig.conectratedRed,
        fontSize: StyleConfig.fontSizeH4,
        fontStyle: 'italic',
        fontFamily: StyleConfig.BariolBold,
        marginTop: StyleConfig.countPixelRatio(4),
        letterSpacing:1
    },
    sideInputInfo: {
        color:StyleConfig.white,
        fontSize: StyleConfig.fontSizeH3,
        fontFamily: StyleConfig.BariolBold,
        height:StyleConfig.countPixelRatio(100),
        marginTop: StyleConfig.countPixelRatio(5),
        letterSpacing:1
    },
    sideInputView: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    labelInputView: {
        flex:1,
        flexDirection:'row'
    },
    labelInput: {
        color:StyleConfig.white,
        fontSize: StyleConfig.fontSizeFieldTitle,
        letterSpacing:1,
    },

    labelInputSuccess: {
        color:StyleConfig.green,
        fontSize: StyleConfig.fontSizeFieldTitle,
        letterSpacing:1
    },
    placeholder: {
        letterSpacing:1,
    },
    itemInput: {
        borderColor:StyleConfig.black,
        marginLeft:0,
    },
    itemInputError: {
        borderColor: StyleConfig.red,
        marginLeft:0
    },
    itemInputSuccess: {
        borderColor:StyleConfig.green,
        marginLeft:0
    },
    labelInfo: {
        fontSize: StyleConfig.fontSizeH3,
        color:StyleConfig.navyMediumDark,
        letterSpacing:1
    },
    mainContainerWithLoader: {
        flex:1,
        position:'absolute',
        right:0,
        left:0,
        height: WINDOW.height,
        width: WINDOW.width,
        zIndex:999999
    },
    indicatorWithLoader: {
        flex: 1,
        position: 'absolute',
        right: 0,
        left:0,
        height: WINDOW.height,
        width: WINDOW.width,
        zIndex: 9999999
    },
    empty:{
        height:0,
        width:0
    },
    indicator: {
        flex:1,
        right:0,
        height:0,
        width:0,
        zIndex:0
    },
    mainContainer: {
        flex:1,
        position:'absolute',
        right:0,
        left:0,
        height:10,
        width:WINDOW.width,
        zIndex:9999,
    },
    serviceImage: {
        width: StyleConfig.countPixelRatio(40),
        height: StyleConfig.countPixelRatio(40),
        resizeMode:'contain'
    },
    disabled: {
        opacity:0.5
    },
    personalAccountBg: {
        backgroundColor:StyleConfig.white,
    },
    businessAccountBg: {
        backgroundColor:StyleConfig.navyDark,
    },
    personalAccountText: {
        color: StyleConfig.navyDark,
    },
    businessAccountText: {
        color: StyleConfig.white,
    },
    formFieldIcon:{
        resizeMode:'contain',
    },
    buttonH1: {
        borderRadius: StyleConfig.buttonHeightH1,
        backgroundColor: StyleConfig.white,
        borderColor: StyleConfig.white,
        marginVertical: StyleConfig.countPixelRatio(8),
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height: StyleConfig.buttonHeightH1,
        shadowColor: "#000",
        shadowOffset:{ width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1.2,
    },
    buttonH1Text: {
        backgroundColor:'transparent',
        lineHeight: StyleConfig.buttonHeightH1,
        fontFamily: StyleConfig.BariolBold,
        fontSize: StyleConfig.buttonTextH1,
        letterSpacing:1,
        color:StyleConfig.white,
    },
    cancelButton: {
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height: StyleConfig.buttonHeightH1,
    },
    cancelButtonText: {
        backgroundColor:'transparent',
        lineHeight: StyleConfig.buttonHeightH1,
        fontFamily: StyleConfig.BariolBold,
        fontSize: StyleConfig.buttonTextH1,
        letterSpacing:1,
        color:StyleConfig.gray,
    },
    backgroundImage: {
        height: WINDOW.height - 20,
        width: WINDOW.width,
        backgroundColor:StyleConfig.green
    }
});
