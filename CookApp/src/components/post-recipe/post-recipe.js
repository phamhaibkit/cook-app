import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import BackButton from '../back-button/back-button';
import { LANG } from '../../lang/lang';
import styles from './post-recipe-style';
import LinearGradient from 'react-native-linear-gradient';
import { IMG } from '../../utils/variables';
import { Dropdown } from 'react-native-material-dropdown';
import TagInput from 'react-native-tag-input';
import GradientButton from '../gradient-button/gradient-button';
import CategoryRecipe from '../category-recipe/category-recipe';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
const STEPS = {
  INFO: 'info',
  INGREDIENT: 'ingredient',
  PERFORM: 'perform'
}

const dataDropdown = [{
  value: '0 giờ 00 phút',
}, {
  value: '0 giờ 30 phút',
}, {
  value: '1 giờ 00 phút',
},{
  value: '2 giờ 00 phút',
}];

const inputProps = {
  keyboardType: 'default',
  placeholder: '',
  style: {
    fontSize: 14,
    marginVertical: Platform.OS == 'ios' ? 10 : -2,
  },
};
export default class PostRecipe extends Component {
  static navigationOptions = {
    title: LANG.UP_RECIPE,
    headerLeft: <BackButton isGreen />,
    headerTitleStyle: styles.headerTitleStyle,
    headerRight: <TouchableOpacity style={styles.saveDraftBtn}>
      <Text style={styles.saveDraftTxt}>{LANG.SAVE_DRAFT}</Text>
    </TouchableOpacity>,
    headerTitleContainerStyle: styles.headerTitleContainerStyle
  };

  constructor(props) {
    super(props);
    this.state = {
      activeStep: STEPS.INFO,
      tags: [],
      text: "",
    }
  }

  onChangeText = (text) => {
    const arrList = text.split(',');
    const { tags } = this.state;
    console.log('KKKKKKKKKKKK', text, arrList, tags.length);
    this.setState({
      tags: arrList,
      text: text,
    })
  }

  onChangeTag = (tags) => {
    console.log('1111111111111', tags);
    this.setState({
      text: tags.join(),
      tags: tags
    })
  }
  continue = () => {
    console.log('22222222222222222222')
  }

  renderDot = (isGreen) => {
    const styleDot = isGreen ? styles.dotActive : styles.dot; 
    return (
      <View style={styles.dotView}>
        <View style={[styleDot, { marginLeft: 0}]}></View>
        <View style={styleDot}></View>
        <View style={styleDot}></View>
        <View style={styleDot}></View>
        <View style={styleDot}></View>
      </View>
    )
  }

  renderStep = () => {
    const { activeStep } = this.state;
    return (
      <View style={styles.containerSteps}>
          <View style={styles.spaceView}></View>
          <View style={styles.stepView}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#3BB556", "#72C91C"]}
              style={styles.activeStep}
            >
              <TouchableOpacity>
                {
                  activeStep === STEPS.INFO ? <Text style={styles.numberStepActive}>1</Text> : <Image source={IMG.checkedWhite} style={styles.checkedImg}></Image>
                }
              </TouchableOpacity>
            </LinearGradient>
            <Text style={activeStep === STEPS.INFO ? styles.stepTxtActive : styles.stepTxtGreen}>{LANG.INFO}</Text>
          </View>
          <View style={styles.stepViewCenter}>
            { activeStep === STEPS.INFO ? this.renderDot(false) : this.renderDot(true)}
            <View style={styles.step2View}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={(activeStep === STEPS.INGREDIENT || activeStep === STEPS.PERFORM) ? ["#3BB556", "#72C91C"] : ['#F3F5F5', '#F3F5F5']}
                style={styles.activeStep}
              >
                <TouchableOpacity>
                  { activeStep === STEPS.INFO && <Text style={styles.numberStep}>2</Text>}
                  { activeStep === STEPS.INGREDIENT &&  <Text style={styles.numberStepActive}>2</Text>}
                  { activeStep === STEPS.PERFORM &&  <Image source={IMG.checkedWhite} style={styles.checkedImg}></Image>}
                </TouchableOpacity>
              </LinearGradient>
              { activeStep === STEPS.INFO && <Text style={styles.stepTxt}>{LANG.INGREDIENT_1}</Text>}
              { activeStep === STEPS.INGREDIENT &&  <Text style={styles.stepTxtActive}>{LANG.INGREDIENT_1}</Text>}
              { activeStep === STEPS.PERFORM &&  <Text style={styles.stepTxtGreen}>{LANG.INGREDIENT_1}</Text>}
            </View>
            { activeStep === STEPS.PERFORM ? this.renderDot(true) : this.renderDot(false)}
          </View>
          <View style={styles.stepView}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={activeStep === STEPS.PERFORM ? ["#3BB556", "#72C91C"] : ['#F3F5F5', '#F3F5F5']}
              style={styles.activeStep}
            >
              <TouchableOpacity>
                <Text style={activeStep === STEPS.PERFORM ? styles.numberStepActive : styles.numberStep}>3</Text>
              </TouchableOpacity>
            </LinearGradient>
            <Text style={activeStep === STEPS.PERFORM ? styles.stepTxtActive : styles.stepTxt}>{LANG.PERFORM}</Text>
          </View>
          <View style={styles.spaceView}></View>
        </View>
    )
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position" enabled  keyboardVerticalOffset={keyboardVerticalOffset}>
        <ScrollView>
          {this.renderStep()}
          <View style={styles.spaceBorder}></View>
          <View style={styles.containerInput}>
            <TouchableOpacity style={styles.addImgBtn}>
              <Image source={IMG.addImage} style={styles.addImg}></Image>
              <Text style={styles.addImgTxt}>{LANG.ADD_IMAGE_FOOD}</Text>
              <Text style={styles.addImgLimit}>{LANG.LIMIT_IMAGE}</Text>
            </TouchableOpacity>
            <Text style={styles.titleTxt}>{LANG.NAME_FOOD}</Text>
            <View style={styles.textInput}>
              <TextInput placeholder={LANG.INPUT_NAME_FOOD}/>
            </View>
            <Text style={styles.titleTxt}>{LANG.NAME_FOOD}</Text>
            <View style={[styles.textInput, {height: 80}]}>
              <TextInput placeholder={LANG.INPUT_DESCRIPTION} editable = {true} multiline = {true} numberOfLines = {4}/>
            </View>
            <Text style={styles.titleTxt}>{LANG.TIME_COOK}</Text>
            <Dropdown
              data={dataDropdown}
              containerStyle={styles.textInput}
              baseColor='#3BB556'
              placeholder={LANG.CHOOSE_TIME_COOK}
              labelHeight={5}
              labelPadding={0}
              fontSize={14}
              disabledItemColor='white'
              // itemTextStyle ={{fontSize: 14, color: 'red'}}
              inputContainerStyle={{ borderBottomColor: 'transparent' }}
              pickerStyle={{borderWidth: 1, borderColor: '#E0E0E0'}}
            />
            <Text style={styles.titleTxt}>{LANG.CATEGORY}</Text>
            <CategoryRecipe />
            <Text style={styles.titleTxt}>{LANG.OTHER_CATEGORY}</Text>
            <Text>{LANG.NOTE}</Text>
            <View style={styles.textInput}>
              <TagInput
                value={this.state.tags}
                onChange={(tags) => this.onChangeTag(tags)}
                labelExtractor={(tag) => tag}
                text={this.state.text}
                onChangeText={(text) => this.onChangeText(text)}
                tagTextColor='#000000'
                inputColor='#000000'
                tagContainerStyle={{backgroundColor: '#EBEBEB', borderRadius: 15}}
                inputProps={inputProps}
              />
            </View>
            <View style={styles.bottomBtn}>
              <GradientButton 
                label={LANG.CONTINUE}
                onPress={this.continue}
                inActive/>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}