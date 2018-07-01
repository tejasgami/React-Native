/**
 * @providesModule ReduxField
 */

import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Platform } from 'react-native';
import { Item, Input, Label, Col } from 'native-base';
import { Field } from 'redux-form';
import LayoutStyle from 'LayoutStyle';
import StyleConfig from 'StyleConfig';
import AppImages from 'AppImages';

class ReduxField extends Component {

    constructor(props) {
        super(props);
        let height = 0
        if (props.inputHeight) {
            height = props.inputHeight
        } else {
            height = StyleConfig.countPixelRatio(24)
        }
        this.state = {
            height,
            width: StyleConfig.getWidthByColumn() - 10,
            contentWidth: [0],
            contentHeight: 0,
            initialHeight: height,
        }
    }

    _doFormat = (mask,reference) => {
        const { onChangeText } = this.props;
        let newReference = mask;
        let ignoreCount = 0;
        for (let n=0; n<reference.length; n++) {
            if (reference.charAt(n) != mask.charAt(n)) {
                newReference = newReference.replace('X',reference.charAt(n));
                mask.charAt(n) != 'X' && ignoreCount++;
            }
        }
        newReference = newReference.substr(0,reference.length + ignoreCount);
        onChangeText(newReference);
    }

    _handleHeight(object) {
        const { nativeEvent: { contentSize: { height } } } = object
        if (this.state.contentHeight === 0) {
            if (height > this.state.contentHeight + (this.state.initialHeight / 2)) {
                this.setState({ contentHeight: height, height: this.state.height + this.state.initialHeight })
            }
            if (height < this.state.contentHeight - (this.state.initialHeight / 2)) {
                this.setState({ contentHeight: height, height: this.state.height - this.state.initialHeight })
            }
        } else {
            if (height > this.state.contentHeight + (this.state.initialHeight / 2)) {
                this.setState({ contentHeight: height, height: this.state.height + this.state.initialHeight })
            }
            if (height < this.state.contentHeight - (this.state.initialHeight / 2)) {
                this.setState({ contentHeight: height, height: this.state.height - this.state.initialHeight })
            }
        }
    }

    _renderComponent = ({ ref, input, multiline, keyboardType, inputFormat, onChangeText, info, infoIcon, onInfoPress, showSideError, sideErrorInputStyle, changeSuccessColor, placeholder, labelIcon, labelIconSource, labelIconStyle, label, secureTextEntry, errorInputStyle, rightIcon, labelInputStyle, labelInputSuccess, labelInfo, _onFocus, _onBlur,
                            ellipsizeMode, numberOfLines, returnKeyType, autoFocus, onEndEditing, inputHeight, autoGrow, maxLength, infoStyle, labelInfoStyle, autoCapitalize, placeholderTextColor, autoCorrect, style, placeholderStyle, disabled, meta: { touched, error, warning }, leftSideComponent, noInfo }) => {

        const { height } = this.state;
        const styleForHeight = multiline === true ? {height} : {};
        const hasError = (typeof error !== 'undefined' ? true : false);
        const itemStyle = (hasError && touched)
            ? LayoutStyle.itemInputError
            : (changeSuccessColor && touched)
                ? LayoutStyle.itemInputSuccess
                : LayoutStyle.itemInput;

        const labelInput = (!hasError && touched && changeSuccessColor) ? [LayoutStyle.labelInputSuccess, labelInputSuccess] : [LayoutStyle.labelInput, labelInputStyle];
        return (
            <Col style={{ flex: 1, marginBottom:StyleConfig.countPixelRatio(22)}}>
                <Item style={itemStyle} underline error={hasError && touched}>
                    {
                        (leftSideComponent)
                            ?
                            <View style={LayoutStyle.leftSideComponent}>
                                {leftSideComponent}
                            </View>
                            :  null
                    }
                    <Input {...input}
                           ref={ref}
                           multiline={multiline}
                           keyboardType={keyboardType}
                           placeholder={placeholder}
                           secureTextEntry={secureTextEntry}
                           placeholderTextColor={placeholderTextColor ? placeholderTextColor : StyleConfig.navyMediumLight}
                           style={Object.assign([LayoutStyle.inputStyle, style, styleForHeight])}
                           placeholderStyle={LayoutStyle.placeholder}
                           autoCapitalize={autoCapitalize}
                           autoCorrect={autoCorrect}
                           autoGrow={autoGrow}
                           returnKeyType={returnKeyType}
                           autoFocus={autoFocus}
                           onEndEditing={onEndEditing}
                           inputHeight={inputHeight}
                           numberOfLines={numberOfLines}
                           ellipsizeMode={ellipsizeMode}
                           maxLength={maxLength}
                           onContentSizeChange={object => this._handleHeight(object)}
                           disabled={disabled}
                           underlineColorAndroid={Platform.OS === 'android' ? 'transparent' : null}
                           onChangeText={(typeof inputFormat != 'undefined') ? this._doFormat.bind(this,inputFormat) : onChangeText}
                           {...(_onFocus) ? {onFocus: () => {_onFocus()}} : {}}
                           {...(_onBlur) ?  {onBlur: () => {_onBlur()}} : {}}
                    />
                    {rightIcon}
                </Item>
                {
                    !noInfo && ((showSideError)
                            ? (hasError &&  touched)
                                ? <View style={LayoutStyle.sideInputView}>
                                    <View style={LayoutStyle.labelInputView}>
                                        {
                                            labelIcon
                                                ? labelIcon
                                                : <Image
                                                    source={AppImages[`${labelIconSource}Error`]}
                                                    style={[LayoutStyle.formFieldIcon,labelIconStyle]}
                                                />
                                        }
                                        <Label style={[LayoutStyle.labelInputError,errorInputStyle]}>{label}</Label>
                                    </View>
                                    <Label style={[LayoutStyle.sideErrorInput,sideErrorInputStyle]}>{error}</Label>
                                </View>
                                : (!hasError && touched && changeSuccessColor)
                                    ? <View style={LayoutStyle.sideInputView}>
                                        <View style={LayoutStyle.labelInputView}>
                                            {
                                                labelIcon
                                                    ? labelIcon
                                                    : <Image
                                                        source={AppImages[`${labelIconSource}Success`]}
                                                        style={[LayoutStyle.formFieldIcon,labelIconStyle]}
                                                    />
                                            }
                                            <Label style={[labelInput]}>
                                                <Label style={[labelInput,labelInputStyle]}>{label}</Label>
                                                <Label style={[LayoutStyle.labelInfo,labelInfoStyle]}>
                                                    {labelInfo}
                                                </Label>
                                            </Label>
                                        </View>
                                        {(info) && <Label style={[LayoutStyle.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Label>}
                                    </View>
                                    : <View style={LayoutStyle.sideInputView}>
                                        <View style={LayoutStyle.labelInputView}>
                                            {
                                                labelIcon
                                                    ? labelIcon
                                                    : <Image
                                                        source={AppImages[labelIconSource]}
                                                        style={[LayoutStyle.formFieldIcon,labelIconStyle]}
                                                    />
                                            }
                                            <Label style={[labelInput]}>
                                                <Label style={[labelInput,labelInputStyle]}>{label}</Label>
                                                <Label style={[LayoutStyle.labelInfo,labelInfoStyle]}>
                                                    {labelInfo}
                                                </Label>
                                            </Label>
                                        </View>
                                        {(info) && <Label style={[LayoutStyle.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Label>}
                                    </View>
                            : (hasError &&  touched)
                                ? <View style={LayoutStyle.sideInputView}>
                                    <Label style={[LayoutStyle.labelInputError,errorInputStyle]}>{error}</Label>
                                    {(info) && <TouchableOpacity disabled={!onInfoPress} onPress={(onInfoPress) ? onInfoPress : () => {}} style={{flexDirection:'row'}}>
                                        <Label style={[LayoutStyle.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Label>
                                        {infoIcon}
                                    </TouchableOpacity>}
                                </View>
                                : (!hasError && touched && changeSuccessColor)
                                    ? <View style={LayoutStyle.sideInputView}>
                                        <View style={LayoutStyle.labelInputView}>
                                            {
                                                labelIcon
                                                    ? labelIcon
                                                    : <Image
                                                        source={AppImages[`${labelIconSource}Success`]}
                                                        style={[LayoutStyle.formFieldIcon,labelIconStyle]}
                                                    />
                                            }
                                            <Label style={[labelInput]}>
                                                <Label style={[labelInput,labelInputStyle]}>{label}</Label>
                                                <Label style={[LayoutStyle.labelInfo,labelInfoStyle]}>
                                                    {labelInfo}
                                                </Label>
                                            </Label>
                                        </View>
                                        {(info) && <TouchableOpacity disabled={!onInfoPress} onPress={(onInfoPress) ? onInfoPress : () => {}} style={{flexDirection:'row'}}>
                                            <Label style={[LayoutStyle.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Label>
                                            {infoIcon}
                                        </TouchableOpacity>}
                                    </View>
                                    : <View style={LayoutStyle.sideInputView}>
                                        <View style={LayoutStyle.labelInputView}>
                                            {
                                                labelIcon
                                                    ? labelIcon
                                                    : <Image
                                                        source={AppImages[labelIconSource]}
                                                        style={[LayoutStyle.formFieldIcon,labelIconStyle]}
                                                    />
                                            }
                                            <Label style={[labelInput]}>
                                                <Label style={[labelInput,labelInputStyle]}>{label}</Label>
                                                <Label style={[LayoutStyle.labelInfo,labelInfoStyle]}>
                                                    {labelInfo}
                                                </Label>
                                            </Label>
                                        </View>
                                        {(info) && <TouchableOpacity disabled={!onInfoPress} onPress={(onInfoPress) ? onInfoPress : () => {}} style={{flexDirection:'row'}}>
                                            <Label style={[LayoutStyle.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Label>
                                            {infoIcon}
                                        </TouchableOpacity>}
                                    </View>
                    )
                }
            </Col>
        )
    }


    render() {
        return (
            <Field
                {...this.props}
                component={this._renderComponent}
            />
        );
    }

}

export default ReduxField;