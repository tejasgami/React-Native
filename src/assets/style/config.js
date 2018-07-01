/**
 * @providesModule StyleConfig
 */

import { WINDOW, deviceType } from 'global';

const smartScale = (value) => {
    if (deviceType == 'phone') {
        return (value * WINDOW.width) / 375;
    } else {
        return (value * WINDOW.height) / 667;
    }
}

const screenPaddingValue = smartScale(26);

const scalarSpace = smartScale(13);

const gridSize = 4;

const getWidthByColumn = (column = 1) => {
    const totalPixel = WINDOW.width;
    const totalSpace = ((screenPaddingValue * 2) + (scalarSpace * (column - 1)));
    return ((totalPixel - totalSpace) / column);
}

const getModalWidthByColumn = (column = 1) => {
    const totalPixel = (WINDOW.width) - (screenPaddingValue * 4);
    const totalSpace = ((screenPaddingValue * 2) + (scalarSpace * (column - 1)));
    return ((totalPixel - totalSpace) / column);
}

export default {
    countPixelRatio: (defaultValue) => {
        return smartScale(defaultValue);
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3
    },
    drawerWidth:getWidthByColumn(1) + screenPaddingValue,
    starSize: smartScale(25),

    //Color
    navyLight:'#B2BBC2',
    blue:'#2980B9',
    purple:'#6A5C7F',
    gray:'#747474',
    white:'#FFFFFF',
    lightWhite:'#FAFFFF',
    black:'#000000',
    lightGray:'#D5D7CA',
    darkPink:'#FD3D52',
    navyMediumDark:'#292e41',
    navyDark:'#000080',
    conectratedRed:'#ff0000',
    //Fonts
    BariolBold: 'Bariol_Bold',


    //Font Size for Phone & Tablet
    headerIcon: smartScale(40),
    commonIcon: smartScale(15),
    fontSizeParagraph: smartScale((deviceType == 'phone') ? 13 : 15),
    fontSizeSubParagraph: smartScale((deviceType == 'phone') ? 10 : 12),
    fontSizeH1: smartScale((deviceType == 'phone') ? 26 : 36),
    fontSizeH2: smartScale((deviceType == 'phone') ? 20 : 26),
    fontSizeH3: smartScale((deviceType == 'phone') ? 15 : 18),
    fontSizeH4: smartScale((deviceType == 'phone') ? 10 : 12),
    fontSizeFieldTitle: smartScale((deviceType == 'phone') ? 15 : 17),
    fontSizeInputH1: smartScale((deviceType == 'phone') ? 20 : 26),
    fontSizeInputH2: smartScale((deviceType == 'phone') ? 15 : 17),
    fieldButtonFontSize: smartScale(10),

    //Buttons Config
    buttonHeightH1: smartScale(40),
    buttonHeightH2: smartScale(22),

    buttonTextH1: smartScale((deviceType == 'phone') ? 15 : 17),
    buttonTextH2: smartScale((deviceType == 'phone') ? 10 : 13),

    //Grid values
    screenPaddingValue: smartScale(16),
    scalarSpace: scalarSpace,
    getScreenPadding: screenPaddingValue,
    getWidthByColumn: (column = 1) => {
        return (column == 3)
            ? getWidthByColumn(2) + getWidthByColumn(4) + scalarSpace
            : getWidthByColumn(column);
    },
    getModalWidthByColumn: (column = 1) => {
        return (column == 3)
            ? getModalWidthByColumn(2) + getModalWidthByColumn(4) + scalarSpace
            : getModalWidthByColumn(column);
    }
}
