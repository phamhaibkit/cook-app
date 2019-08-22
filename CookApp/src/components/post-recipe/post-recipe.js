import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView, Platform, Button } from 'react-native';
import BackButton from '../back-button/back-button';
import { LANG } from '../../lang/lang';
import styles from './post-recipe-style';
import { IMG, STEPS } from '../../utils/variables';
import TagInput from 'react-native-tag-input';
import GradientButton from '../gradient-button/gradient-button';
import CategoryRecipe from '../category-recipe/category-recipe';
import StepsUpRecipe from '../steps-up-recipe/steps-up-recipe';
import recipeService from '../../services/recipe.service';
import DropDown from '../dropdown/dropdown';
import ConfirmModal from '../../components/modal/confirm-modal';
import navigationService from '../../services/navigation.service';
import ImagePicker from "react-native-image-picker";
import { ROUTES } from '../../utils/routes';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

const dataDropdown = [{
  value: '15 phút', index: 0
}, {
  value: '30 phút', index: 1
}, {
  value: '45 phút', index: 2
}, {
  value: '1 tiếng', index: 3
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
  static navigationOptions = ({ navigation }) => {
    return {
      title: LANG.UP_RECIPE,
      headerLeft: <BackButton isGreen />,
      headerTitleStyle: styles.headerTitleStyle,
      headerRight: <TouchableOpacity style={styles.saveDraftBtn} onPress={navigation.getParam('showModalDraft')}>
        <Text style={styles.saveDraftTxt}>{LANG.SAVE_DRAFT}</Text>
      </TouchableOpacity>,
      headerTitleContainerStyle: styles.headerTitleContainerStyle
    };
  };

  constructor(props) {
    super(props);
    this.props.navigation.setParams({ onSaveFraft: this._onSaveFraft });
    this.state = {
      activeStep: STEPS.INFO,
      tags: [],
      text: "",
      category: [],
      isChoiseTime: false,
      times: dataDropdown,
      choosedTime: dataDropdown[0],
      modalDraft: false,
      name: '',
      description: '',
      enabledBtn: true,
    }
    this.categories = [];
  }

  componentDidMount() {
    this.props.navigation.setParams({ showModalDraft: this.showModalDraft });
    this.getCategory();
  }

  chooseFile = () => {
    const options = {
      title: "Select Avatar",

      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  };

  onChangeText = (text) => {
    const { tags } = this.state;
    if (text.endsWith(',')) {
      const arrList = text.split(',');
      arrList.pop();
      tags.push(arrList[0])
      this.setState({
        tags: tags,
        text: '',
      })
    } else {
      if (text.length === 0) {
        // tags.push('')
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

  getCategory = () => {
    recipeService.getCategory().then(() => {
      this.setState({
        category: recipeService.categoryData.category
      })
    })
  }

  showChooseTime = () => {
    this.setState({
      isChoiseTime: true
    })
  }

  closeChoiseTime = () => {
    this.setState({
      isChoiseTime: false
    })
  }

  slectedTime = (time) => {
    console.log('444444444444444444', time);
    this.setState({
      choosedTime: time
    })
  }

  slectedMeal = (meal) => {
    console.log('9999999999999999', meal);
  }

  showModalDraft = () => {
    this.setState({
      modalDraft: true
    })
  }

  onAcceptSave = () => {
    const dataSend = this.makeData();
    recipeService.upOrSaveDraftRecipe(dataSend, false).then((data) => {
      console.log('AAAAAAAAAAAAAAAAAAAAAAA', data);
      navigationService.goBack();
    })
  }

  continue = () => {
    const dataNavigate = this.makeData();
    navigationService.navigate(ROUTES.upRecipeStep2.key, { dataNavigate });
  }

  makeData = () => {
    const { name, description, choosedTime, tags } = this.state;
    // const newCate = this.categories.concat(tags);
    const dataSave = {
      recipeImgs: [],
      name: name,
      description: description,
      timeExecute: choosedTime.value,
      categories: this.categories,
    }
    return dataSave;
  }

  onCancelSave = () => {
    this.setState({
      modalDraft: false
    })
  }

  selectedCate = (selected) => {
    this.categories = selected;
  }

  renderStep1 = () => {
    const { category, name, description, avatarSource } = this.state;
    return (
      <View>
        <View style={styles.containerInput}>
          {!avatarSource ? (
            <TouchableOpacity style={styles.addImgBtn} onPress={this.chooseFile}>
              <Image source={IMG.addImage} style={styles.addImg}></Image>
              <Text style={styles.addImgTxt}>{LANG.ADD_IMAGE_FOOD}</Text>
              {/* <Text style={styles.addImgLimit}>{LANG.LIMIT_IMAGE}</Text> */}
            </TouchableOpacity>
          ) : (
            <View style={styles.imageCover}>
              <Image
                style={styles.imageFood}
                source={avatarSource}
                resizeMode="cover"
              />
            </View>
          )}
          <Text style={styles.titleTxt}>{LANG.NAME_FOOD}</Text>
          <View style={styles.textInput}>
            <TextInput placeholder={LANG.INPUT_NAME_FOOD} value={name} onChangeText={(text) => this.setState({ name: text })} />
          </View>
          <Text style={styles.titleTxt}>{LANG.DESCRIPTION}</Text>
          <View style={[styles.textInput, { height: 80 }]}>
            <TextInput placeholder={LANG.INPUT_DESCRIPTION} multiline={true} numberOfLines={4} value={description} onChangeText={(text) => this.setState({ description: text })} />
          </View>
          <Text style={styles.titleTxt}>{LANG.TIME_COOK}</Text>
          <View style={styles.dropView}>
            <DropDown
              label={LANG.CHOOSE_TIME_COOK}
              data={dataDropdown}
              slectedItem={this.slectedTime}
            />
          </View>
          <Text style={styles.titleTxt}>{LANG.CATEGORY}</Text>
          <CategoryRecipe category={category} canChoise selectedCate={this.selectedCate} />
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
    const { modalDraft, name } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position" enabled keyboardVerticalOffset={keyboardVerticalOffset}>
        <ScrollView>
          <StepsUpRecipe activeStep={STEPS.INFO} />
          <View style={styles.spaceBorder}></View>
          {this.renderStep1()}
          <View style={styles.bottomBtn}>
            <GradientButton
              label={LANG.CONTINUE}
              onPress={this.continue}
              inActive={!name}
            />
          </View>
        </ScrollView>
        <ConfirmModal
          modalVisible={modalDraft}
          onPressDelete={this.onAcceptSave}
          buttonAction={LANG.SAVE1}
          onHide={this.onCancelSave}
          content={{
            title: `${LANG.SAVE_DRAFT_RECIPE}`,
            message: `${LANG.QUESTION_SAVE_DRAFT}`
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}