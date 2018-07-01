/**
 * @providesModule ProfileStyle
 **/

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    mainGrid: {
        paddingHorizontal: StyleConfig.getScreenPadding,
        paddingVertical: StyleConfig.getScreenPadding,
        width: StyleConfig.getWidthByColumn(1)
    },
    parentCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    firstGrid:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal: StyleConfig.getScreenPadding,
        backgroundColor:StyleConfig.darkPink,
    },
    thumbnailRow:{
        flexDirection: 'row',
        marginTop: StyleConfig.countPixelRatio(-1),
        alignSelf:'center',
    },
    thumbnail:{
        height:StyleConfig.countPixelRatio(155),
        width:StyleConfig.countPixelRatio(155),
        borderRadius: StyleConfig.countPixelRatio(155) / 2,
        //resizeMode:'stretch'
    },
    labelRow:{
        alignItems:'center'
    },
    thumbnailCol:{
        flex:1,
        alignItems:'center',
    },
    thumbnail:{
        height:StyleConfig.getWidthByColumn(2),
        width:StyleConfig.getWidthByColumn(2),
        borderRadius: StyleConfig.getWidthByColumn(2) / 2,
    },
    nameLabelCol:{
        justifyContent:'flex-end',
        alignItems:'center',
        height:StyleConfig.countPixelRatio(35),
    },
    nameLabel:{
        color:StyleConfig.white,
        fontFamily: StyleConfig.gothamMedium,
        fontSize:StyleConfig.fontSizeH2,
        letterSpacing:1
    },
    otherLabelCol:{
        justifyContent:'flex-end',
        alignItems:'center',
        marginVertical:StyleConfig.countPixelRatio(15),
    },
    otherLabel:{
        color:StyleConfig.navyLight,
        fontFamily: StyleConfig.gothamBook,
        fontSize:StyleConfig.fontSizeH3,
    },
    star:{
    },
    iconCol:{
        flex:0,
        flexDirection:'row',
        justifyContent:'space-between',
        width:StyleConfig.getWidthByColumn(2)
    },
    phoneCol:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        marginTop:StyleConfig.countPixelRatio(15),
    },
    emailCol:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:StyleConfig.countPixelRatio(10),
        marginBottom:StyleConfig.countPixelRatio(20),
        flexDirection:'row',
    },
    editBtnCol:{
        marginTop: StyleConfig.countPixelRatio(25),
        justifyContent:'center',
        alignItems:'flex-end',
    },
    editBtn:{
        height: StyleConfig.buttonHeightH2,
        width:StyleConfig.getWidthByColumn(4),
        borderRadius: StyleConfig.buttonHeightH2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:StyleConfig.blue,
    },
    editBtnLabel:{
        letterSpacing:1,
        textAlign:'center',
        lineHeight: StyleConfig.buttonHeightH2,
        backgroundColor:'transparent',
        fontSize: StyleConfig.buttonTextH1,
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamMedium,
    },
    otherIcon:{
        height:StyleConfig.countPixelRatio(18),
        width:StyleConfig.countPixelRatio(18),
        resizeMode:'contain',
    },
    secondGrid:{
        width: StyleConfig.getWidthByColumn(1),
        paddingVertical:StyleConfig.countPixelRatio(20),
        justifyContent:'center',
        alignItems:'center',
    },
    titleLabel:{
        color:StyleConfig.navyDark,
        fontFamily: StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH4,
        letterSpacing:1
    },
    addBtn:{
        justifyContent:'center',
        backgroundColor:StyleConfig.white,
        height: StyleConfig.buttonHeightH2,
        width: StyleConfig.getWidthByColumn(1),
        borderRadius: StyleConfig.buttonHeightH2
    },
    plusIcon: {
        textAlign:'center',
        lineHeight: StyleConfig.buttonHeightH2,
        backgroundColor:'transparent',
        color:StyleConfig.blue,
        fontSize: StyleConfig.fontSizeH3,
        marginHorizontal: StyleConfig.countPixelRatio(10)
    },
    addBtnLabel:{
        textAlign:'center',
        lineHeight: StyleConfig.buttonHeightH2,
        backgroundColor:'transparent',
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.blue,
        fontSize:StyleConfig.buttonTextH1,
        letterSpacing:1
    },
    addServicesCol:{
        height:StyleConfig.countPixelRatio(80),
        justifyContent:'space-between',
        alignItems:'flex-start'
    },
    addCompanyCol:{
        height:StyleConfig.countPixelRatio(80),
        justifyContent:'center',
        alignItems:'flex-start',
    },
    addAccountCol:{
        marginVertical:StyleConfig.countPixelRatio(10),
    },
    addBtnAccountRow:{
        marginVertical:StyleConfig.countPixelRatio(10),
    },
    cardItem:{
        paddingHorizontal: StyleConfig.getScreenPadding,
    },
    bankTitle: {
        color: StyleConfig.navyDark,
        fontFamily: StyleConfig.gothamMedium,
        fontSize:StyleConfig.fontSizeH2,
        letterSpacing:1,
        marginBottom: StyleConfig.countPixelRatio(10)
    },
    bankBodyRow: {
        marginVertical:StyleConfig.countPixelRatio(5),
        justifyContent:'space-between'
    },
    bankFooter: {
        width: '100%',
        justifyContent:'space-between'
    },
    cardNumber: {
        fontFamily: StyleConfig.gothamBook,
        fontSize: StyleConfig.fontSizeH3,
        letterSpacing:2,
        marginVertical: StyleConfig.countPixelRatio(2)
    },
    cardDes:{
        alignSelf:'center',
        fontFamily: StyleConfig.gothamBook,
        fontSize: StyleConfig.fontSizeH4,
        letterSpacing:1
    },
    defaultAccLabel: {
        marginVertical: StyleConfig.countPixelRatio(6),
        fontFamily: StyleConfig.gothamMedium,
        fontSize: StyleConfig.fontSizeH4,
        letterSpacing:1
    },
    markImage: {
        width:StyleConfig.countPixelRatio(22),
        height:StyleConfig.countPixelRatio(22),
        resizeMode:'contain'
    },
    menuDotsImage: {
        marginTop:StyleConfig.countPixelRatio(5),
        width:StyleConfig.countPixelRatio(15),
        height:StyleConfig.countPixelRatio(15),
        resizeMode:'contain'
    }
});
