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
import recipeService from '../../services/recipe.service';
import ImagePicker from "react-native-image-picker";

let data = [
  {id: 1, show: true, stepDetail: '', stepImages: [{uri: ''},{uri: ''},{uri: ''},{uri: ''}]},
  {id: 2, show: true, stepDetail: '', stepImages: [{uri: ''},{uri: ''},{uri: ''},{uri: ''}]},
  {id: 3, show: true, stepDetail: '', stepImages: [{uri: ''},{uri: ''},{uri: ''},{uri: ''}]},
  {id: 4, show: true, stepDetail: '', stepImages: [{uri: ''},{uri: ''},{uri: ''},{uri: ''}]}
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
      modalDraft: false,
      modalFinish: false,
      modalSuccess: false,
      dataSend: []
    }
    this.content = {
      title: LANG.UP_SUCCESS,
      message: LANG.ADMIN_APPROVE
    }
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    console.log('PARAMPAMPARAM', params);
    this.setState({
      dataSend: params.dataNavigate
    })
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
      data.push({id: lastArrData.id + 1, show: true, stepDetail: '', stepImages: [{uri: ''},{uri: ''},{uri: ''},{uri: ''}] });
    }else{
      data.push({id: 1, show: true, stepDetail: '', stepImages: [{uri: ''},{uri: ''},{uri: ''},{uri: ''}]});
    }
    this.setState({
      data: data
    })
  }

  onChangeText = (row, text) => {
    const { data } = this.state;
    console.log('onChangeText=', row, text);
    data.map((item, index) => {
      if (item.id === row.id) {
        item.stepDetail = text;
      }
    })
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

  closeModalDraft=() => {
    this.setState({
      modalDraft: false,
    })
  }

  continue = () => {
    this.setState({
      modalDraft: false,
      modalFinish: true
    })
  }

  onAcceptFinish = () => {
    const dataSend = this.makeDataSend();
    recipeService.upOrSaveDraftRecipe(dataSend, true)
      .then(() => {
        this.showSuccess();
      }).catch((err) => {
        this.showSuccess();
      })
  }

  showSuccess = () => {
    this.setState({
      modalDraft: false,
      modalFinish: false,
      modalSuccess: true
    })
  }
  
  onSuccess = () => {
    navigationService.navigate("Recipe");
  }

  closeFinish = () => {
    this.setState({
      modalFinish: false
    })
  }

  onAcceptSave = () => {
    const params = this.makeDataSend();
    recipeService.upOrSaveDraftRecipe(params, false)
      .then(() => {
      this.closeModalDraft();
      navigationService.navigate("Recipe");
    }).catch(err => {
      this.closeModalDraft();
      navigationService.navigate("Recipe");
    })
  }

  makeDataSend = () => {
    const { dataSend, data} = this.state;
    console.log('GGGGGGGGGGGGGGG', dataSend);
    const steps = data.filter((item) => {
      return item.show;
    });
    steps.map((item, index) => {
      item.stepNumber = index + 1;
      delete item.id;
      delete item.show;
    })
    dataSend.steps = steps
    console.log('MAKE-DATA===', dataSend, steps);
    return dataSend;
  }

  onPressImage =(stepId, indexImg) => {
    console.log('KKKKKKKKKKKKKKKKKL', stepId, indexImg);
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
        const { data } = this.state;
        const source = { uri: response.uri };
        data.map((item, index) => {
          if(item.id === stepId) {
            item.stepImages[indexImg] = source;
          }
        })

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  renderImage = (step) => {
    // const { images } = this.state;
    return step.stepImages.map((item, index) => {
      return (
        <View key={index}>
          {!!item.uri ? (
            <View  style={styles.imageCover}>
              <Image source={item} style={styles.imgStep}/>
            </View>
            ) : (
            <TouchableOpacity style={styles.imgBtn} onPress={() => {this.onPressImage(step.id, index)}}>
              <Image source={IMG.addImage} style={styles.postImg}></Image>
            </TouchableOpacity> 
          )}
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
                  {this.renderImage(item)}
                </View>
                <View style={styles.textInput}>
                  <TextInput
                    placeholder={LANG.INPUT_DESCRIPTION_1}
                    editable={true} multiline={true}
                    numberOfLines={4}
                    value={item.stepDetail}
                    onChangeText={text => { this.onChangeText(item, text) }}
                    />
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
            onHide={this.closeModalDraft}  
        />
        <ConfirmModal
          modalVisible={modalFinish}
          onPressDelete={this.onAcceptFinish}
          buttonAction={LANG.ACCEPT}
          content={{
            title: `${LANG.FINISH}`,
            message: `${LANG.FINISH_RECIPE}`
          }}
          onHide={this.closeFinish} 
        />
        <ModalComponent 
          content={this.content}
          modalVisible={modalSuccess}
          closeModal={this.onSuccess}
        >  
        </ModalComponent>
      </ScrollView>
    );
  }
}