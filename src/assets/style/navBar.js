/**
 * @providesModule NavBarStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    header: {
        paddingTop:StyleConfig.countPixelRatio(15),
        // backgroundColor:StyleConfig.white,
        borderBottomColor: 'transparent',
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.1),
        width: '100%',
        shadowOpacity: 0,
        zIndex: 0,
        elevation: 0
    },
    bgProfileColor:{
        backgroundColor:StyleConfig.darkPink,
    },
    bgColor:{
        backgroundColor:StyleConfig.white,
    },
    headerBody:{
        alignItems:'flex-start',
        justifyContent:'center',
        height: StyleConfig.countPixelRatio(30),
        width: StyleConfig.countPixelRatio(30),
    },
    headerText:{
        textAlign:'left',
        justifyContent:'center',
        color:StyleConfig.black,
        fontSize: StyleConfig.fontSizeH3,
        height: StyleConfig.countPixelRatio(30),
        width: "100%",
    },
    headerLeftLogo:{
        resizeMode:'contain',
        alignItems:'center',
    },
    backIcon: {
        color:StyleConfig.black,
        fontSize: StyleConfig.countPixelRatio(50),
        backgroundColor:'transparent'
    },
    logo:{
        width:StyleConfig.getWidthByColumn(4),
        resizeMode:'contain'
    },
    rightContainer: {
        paddingRight:WINDOW.width * 0.03,
    }
});