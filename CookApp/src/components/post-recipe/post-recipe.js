import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import BackButton from '../back-button/back-button';
import { LANG } from '../../lang/lang';
import styles from './post-recipe-style';
import { IMG, STEPS } from '../../utils/variables';
import { Dropdown } from 'react-native-material-dropdown';
import TagInput from 'react-native-tag-input';
import GradientButton from '../gradient-button/gradient-button';
import CategoryRecipe from '../category-recipe/category-recipe';
import StepsUpRecipe from '../steps-up-recipe/steps-up-recipe';
import recipeService from '../../services/recipe.service';
import UpRecipeStep2 from '../up-recipe-step2/up-recipe-step2';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

const dataDropdown = [{
  value: '0 giờ 00 phút',
}, {
  value: '0 giờ 30 phút',
}, {
  value: '1 giờ 00 phút',
}, {
  value: '2 giờ 00 phút',
}];

const inputProps = {
  keyboardType: 'default',
  placeholder: '',
  maxLength: 40,
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
      category: []
    }
  }

  componentDidMount() {
    this.getCategory();
  }

  onChangeText = (text) => {
    const { tags } = this.state;
    if (text.endsWith(',')) {
      const arrList = text.split(',');
      tags.push(arrList)
      this.setState({
        tags: tags,
        text: '',
      })
    } else {
      if (text.length === 0) {
        tags.push('')
        this.setState({
          text: text,
          tags: tags
        })
      } else {
        this.setState({
          text: text,
        })
      }
    }

  }

  onChangeTag = (tags) => {
    console.log('1111111111111', tags);
    this.setState({
      tags: tags
    })
  }

  continue = () => {
    const { activeStep } = this.state;
    switch(activeStep){
      case STEPS.INFO : 
        this.setActiveStep(STEPS.INGREDIENT);
        break;
      case STEPS.INGREDIENT : 
        this.setActiveStep(STEPS.PERFORM);
        break;
      case STEPS.PERFORM : 
        alert('69696969');
        break;
      default:
        break;
    }
  }

  setActiveStep = (step) => {
    this.setState({
      activeStep: step
    })
  }

  getCategory = () => {
    recipeService.getCategory().then(() => {
      this.setState({
        category: recipeService.categoryData.category
      })
    })
  }

  renderStep1 = () => {
    const { category } = this.state;
    return (
      <View>
        <View style={styles.containerInput}>
          <TouchableOpacity style={styles.addImgBtn}>
            <Image source={IMG.addImage} style={styles.addImg}></Image>
            <Text style={styles.addImgTxt}>{LANG.ADD_IMAGE_FOOD}</Text>
            <Text style={styles.addImgLimit}>{LANG.LIMIT_IMAGE}</Text>
          </TouchableOpacity>
          <Text style={styles.titleTxt}>{LANG.NAME_FOOD}</Text>
          <View style={styles.textInput}>
            <TextInput placeholder={LANG.INPUT_NAME_FOOD} />
          </View>
          <Text style={styles.titleTxt}>{LANG.NAME_FOOD}</Text>
          <View style={[styles.textInput, { height: 80 }]}>
            <TextInput placeholder={LANG.INPUT_DESCRIPTION} editable={true} multiline={true} numberOfLines={4} />
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
            pickerStyle={{ borderWidth: 1, borderColor: '#E0E0E0' }}
          />
          <Text style={styles.titleTxt}>{LANG.CATEGORY}</Text>
          <CategoryRecipe category={category} canChoise />
          <Text style={styles.titleTxt}>{LANG.OTHER_CATEGORY}</Text>
          <Text>{LANG.NOTE}</Text>
          <View style={styles.textInput}>
            <TagInput
              value={this.state.tags}
              onChange={(tags) => this.onChangeTag(tags)}
              labelExtractor={(tags) => tags}
              text={this.state.text}
              onChangeText={(text) => this.onChangeText(text)}
              tagTextColor='#000000'
              inputColor='#000000'
              tagContainerStyle={{ backgroundColor: '#EBEBEB', borderRadius: 15 }}
              inputProps={inputProps}
            />
          </View>
        </View>
      </View>
    )
  }

  render() {
    const { activeStep } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position" enabled keyboardVerticalOffset={keyboardVerticalOffset}>
        <ScrollView>
          <StepsUpRecipe activeStep={activeStep} />
          <View style={styles.spaceBorder}></View>
          {activeStep === STEPS.INFO && this.renderStep1()}
          {activeStep === STEPS.INGREDIENT && <UpRecipeStep2 />}
          {activeStep === STEPS.PERFORM && <Text>AAA</Text>}
          <View style={styles.bottomBtn}>
            <GradientButton
              label={LANG.CONTINUE}
              onPress={this.continue}
            // inActive 
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}