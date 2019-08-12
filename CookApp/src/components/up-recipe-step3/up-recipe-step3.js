import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG, STEPS } from '../../utils/variables';
import styles from './up-recipe-step3-style';
import BackButton from '../back-button/back-button';
import StepsUpRecipe from '../steps-up-recipe/steps-up-recipe';
import GradientButton from '../gradient-button/gradient-button';
import ConfirmModal from '../../components/modal/confirm-modal';
import navigationService from '../../services/navigation.service';
import ModalComponent from '../../components/modal/modal'

let data = [
  {id: 1, show: true},
  {id: 2, show: true},
  {id: 3, show: true},
  {id: 4, show: true}
]

export default class UpRecipeStep3 extends Component {
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

  constructor(props){
    super(props);
    this.state= {
      data : data,
      images: [ {}, {}, {}, {}],
      modalDraft: false,
      modalFinish: false,
      modalSuccess: false
    }
    this.content = {
      title: LANG.UP_SUCCESS,
      message: LANG.ADMIN_APPROVE
    }
  }

  componentDidMount(){
    this.props.navigation.setParams({showModalDraft: this.showModalDraft});
  }

  slectedMeal = (value) => {
    const { slectedMeal } = this.props;
    slectedMeal && slectedMeal(value);
  }

  deleteRow = (row) => {
    const { data } = this.state;
    data.map((item, index) => {
      if(item.id === row.id){
        item.show = false
      }
    })
    console.log('ROW-DELETE=', row, data);
    this.setState({
      data: data
    })
  }

  addNewRow = () => {
    const { data } = this.state;
    const lastArrData = data[data.length - 1];
    console.log('ADD-ROW', lastArrData)
    if(lastArrData){
      data.push({id: lastArrData.id + 1, show: true});
    }else{
      data.push({id: 1});
    }
    this.setState({
      data: data
    })
  }

  showModalDraft=() => {
    this.setState({
      modalFinish: false,
      modalDraft: true,
    })
  }

  continue = () => {
    this.setState({
      modalDraft: false,
      modalFinish: true
    })
  }

  onAcceptFinish = () => {
    this.setState({
      modalDraft: false,
      modalFinish: false,
      modalSuccess: true
    })
  }

  onSuccess = () => {
    navigationService.navigate("Recipe");
  }

  renderImage = () => {
    const { images } = this.state;
    return images.map((item, index) => {
      return (
        <View key={index}>
          <TouchableOpacity style={styles.imgBtn}>
            <Image source={IMG.addImage} style={styles.postImg}></Image>
          </TouchableOpacity>  
        </View>
      )
    });
  }

  renderStep = () => {
    const { data } = this.state;
    let num = 0;
    return data.map((item, index) => {
      item.show ? num++ : num; 
      return (
        <View key={index}>
          {item.show &&
            <View >
              <View style={styles.containerFrame}>
                <Text style={styles.stepTxt}>{LANG.STEP + ' ' + num}</Text>
                <View style={styles.imagesView}>
                  {this.renderImage()}
                </View>
                <View style={styles.textInput}>
                  <TextInput placeholder={LANG.INPUT_DESCRIPTION_1} editable={true} multiline={true} numberOfLines={4} />
                </View>
              </View>
              <View style={styles.deleteView}>
                <TouchableOpacity onPress={() => this.deleteRow(item)}>
                  <Image source={IMG.clearInput} style={styles.deleteImg}/>
                </TouchableOpacity>
              </View>
            </View>
          }
        </View>
      )
    });
  }
  
  render() {
    const { modalDraft, modalFinish, modalSuccess } = this.state;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <StepsUpRecipe activeStep={STEPS.PERFORM}/>
          <View style={styles.spaceBorder}></View>
          <View style={{paddingHorizontal: 15}}>
            {this.renderStep()}
            <TouchableOpacity style={styles.upRecipeView} onPress={this.addNewRow}>
                <Image source={IMG.addIngredient} style={styles.upImg}></Image>
                <Text style={styles.upText}>{LANG.ADD_STEP}</Text>
            </TouchableOpacity>
            <View style={styles.bottomBtn}>
              <GradientButton
                label={LANG.CONTINUE}
                onPress={this.continue}
              />
            </View>
          </View>
        </View>
        <ConfirmModal
            modalVisible={modalDraft}
            onPressDelete={this.onAcceptSave}
            buttonAction={LANG.SAVE1}
            content={{
              title: `${LANG.SAVE_DRAFT_RECIPE}`,
              message: `${LANG.QUESTION_SAVE_DRAFT}`
            }}           
        />
        <ConfirmModal
          modalVisible={modalFinish}
          onPressDelete={this.onAcceptFinish}
          buttonAction={LANG.ACCEPT}
          content={{
            title: `${LANG.FINISH}`,
            message: `${LANG.FINISH_RECIPE}`
          }}           
        />
        <ModalComponent content={this.content} modalVisible={modalSuccess} closeModal={this.onSuccess}></ModalComponent>
      </ScrollView>
    );
  }
}