/**
 * @providesModule SplashStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullScreen: {
        position: 'absolute',
        height:WINDOW.height,
        width:WINDOW.width
    },
    newAccountBtn: {
        alignItems:'center',
        justifyContent:'center',
        position: 'relative',
        marginTop:StyleConfig.countPixelRatio(470),
        height:StyleConfig.getWidthByColumn(4),
        width:StyleConfig.getWidthByColumn(0),
        marginHorizontal:StyleConfig.getScreenPadding,
        borderRadius: StyleConfig.getWidthByColumn(4) / 2,
        zIndex:999,
    },
    loginButtonBtn:{
        alignItems:'center',
        justifyContent:'center',
        position: 'relative',
        marginTop:StyleConfig.countPixelRatio(10),
        height:StyleConfig.getWidthByColumn(4),
        width:StyleConfig.getWidthByColumn(0),
        borderRadius: StyleConfig.getWidthByColumn(4) / 2,
        marginHorizontal:StyleConfig.getScreenPadding
    },
    newAccountBtnRow: {
        justifyContent:'center',
        alignItems:'center',
        marginTop: StyleConfig.countPixelRatio(150),
    },
    newAccountBtn: {
        justifyContent:'center',
        alignItems:'center',
        marginTop:StyleConfig.countPixelRatio(500),
        width:StyleConfig.getWidthByColumn(0),
        borderRadius: StyleConfig.getWidthByColumn(4) / 2,
        marginHorizontal:StyleConfig.getScreenPadding,
        height: StyleConfig.buttonHeightH1,
        backgroundColor:StyleConfig.darkPink,
        borderColor:StyleConfig.white,
        borderWidth:1,
    },
    newAccountBtnTxt: {
        letterSpacing:1,
        textAlign:'center',
        backgroundColor:'transparent',
        fontSize: StyleConfig.buttonTextH1,
        fontFamily: StyleConfig.BariolBold,
        fontWeight:'bold',
        color:StyleConfig.white,
        marginTop:StyleConfig.countPixelRatio(0),
    },
    loginBtnRow: {
        justifyContent:'center',
        alignItems:'center',
        marginTop: StyleConfig.countPixelRatio(50),
    },
    loginBtn: {
        justifyContent:'center',
        alignItems:'center',
        marginTop:StyleConfig.countPixelRatio(50),
        width:StyleConfig.getWidthByColumn(0),
        borderRadius: StyleConfig.getWidthByColumn(4) / 2,
        marginHorizontal:StyleConfig.getScreenPadding,
        height: StyleConfig.buttonHeightH1,
        backgroundColor:StyleConfig.white,
        borderColor:StyleConfig.white,
        borderWidth:1,
    },
    loginBtnTxt: {
        letterSpacing:1,
        textAlign:'center',
        backgroundColor:'transparent',
        fontSize: StyleConfig.buttonTextH1,
        fontFamily: StyleConfig.BariolBold,
        fontWeight:'bold',
        color:StyleConfig.darkPink,
        marginTop:StyleConfig.countPixelRatio(0),
    }

});
