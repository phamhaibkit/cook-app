import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG, STEPS } from '../../utils/variables';
import styles from './up-recipe-step2-style';
import DropDown from '../dropdown/dropdown';
import StepsUpRecipe from '../steps-up-recipe/steps-up-recipe';
import BackButton from '../back-button/back-button';
import GradientButton from '../gradient-button/gradient-button';
import { ROUTES } from '../../utils/routes';
import navigationService from '../../services/navigation.service';
import ConfirmModal from '../../components/modal/confirm-modal';

const colCount = [
  { id: 1, name: '', show: true },
  { id: 2, name: '', show: true },
  { id: 3, name: '', show: true },
  { id: 4, name: '', show: true }
]

const numPeople = [{
  value: '1 người', index: 0
}, {
  value: '2 người', index: 1
}, {
  value: '3 người', index: 2
}, {
  value: '4 người', index: 3
}, {
  value: '5 người', index: 4
}, {
  value: '6 người', index: 5
}, {
  value: '7 người', index: 6
}, {
  value: '8 người', index: 7
}, {
  value: '9 người', index: 8
}];

const units = [{
  value: 'gram', index: 0
}, {
  value: 'muỗng', index: 1
}, {
  value: 'ml', index: 2
}, {
  value: 'quả', index: 3
}]
export default class UpRecipeStep2 extends Component {
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
    this.state = {
      data: colCount,
      modalDraft: false
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ showModalDraft: this.showModalDraft });
  }

  slectedMeal = (value) => {
    console.log('Selected ====', value);
  }

  deleteRow = (row) => {
    const { data } = this.state;
    data.map((item, index) => {
      if (item.id === row.id) {
        item.show = false
      }
    })
    this.setState({
      data: data
    })
  }

  addNewRow = () => {
    const { data } = this.state;
    const lastArrData = data[data.length - 1];
    data.push({ id: lastArrData.id + 1, name: '', show: true });
    this.setState({
      data: data
    })
  }

  onChangeText = (row, text) => {
    const { data } = this.state;
    console.log('onChangeText=', row, text);
    data.map((item, index) => {
      if (item.id === row.id) {
        item.name = text;
      }
    })
    this.setState({
      data: data
    })
  }

  showModalDraft = () => {
    this.setState({
      modalDraft: true
    })
  }

  continue = () => {
    navigationService.navigate(ROUTES.upRecipeStep3.key);;
  }

  renderIngredient = () => {
    const { data } = this.state;
    console.log('WHAT THE DATA', data);
    return data.map((item, index) => {
      return (
        <View key={index} >
          {item.show &&
            <View style={styles.containerFrame}>
              <View style={styles.leftFrame}>
                <View style={[styles.upIngre, styles.borderBottom]}>
                  <TextInput
                    style={styles.textInput}
                    maxLength={40}
                    placeholder='Ten nguyen lieu'
                    value={data.name}
                    onChangeText={text => { this.onChangeText(item, text) }}
                  />
                </View>
                <View style={styles.upIngre}>
                  <View style={[styles.leftIngre, styles.borderRight]}>
                    <TextInput style={styles.textInput} maxLength={40} placeholder='So luong' />
                  </View>
                  <View style={styles.leftIngre}>
                    <DropDown
                      label={LANG.MEAL}
                      data={units}
                      slectedItem={this.slectedMeal}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.rightFrame}>
                <TouchableOpacity onPress={() => this.deleteRow(item)}>
                  <Image source={IMG.clearInput} style={styles.deleteImg} />
                </TouchableOpacity>
              </View>
            </View>
          }
        </View>
      )
    });
  }

  render() {
    const { modalDraft } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StepsUpRecipe activeStep={STEPS.INGREDIENT} />
          <View style={styles.spaceBorder}></View>
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={styles.titleTxt}>{LANG.MEAL}</Text>
            <View style={styles.dropView}>
              <DropDown
                label={LANG.MEAL}
                data={numPeople}
                slectedItem={this.slectedMeal}
              />
            </View>
            <Text style={styles.titleTxt}>{LANG.INGREDIENT_1}</Text>
            {this.renderIngredient()}
            <TouchableOpacity style={styles.upRecipeView} onPress={this.addNewRow}>
              <Image source={IMG.addIngredient} style={styles.upImg}></Image>
              <Text style={styles.upText}>{LANG.ADD_INGREDIENT}</Text>
            </TouchableOpacity>
            <View style={styles.bottomBtn}>
              <GradientButton
                label={LANG.CONTINUE}
                onPress={this.continue}
              />
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
        </ScrollView>
      </View>
    );
  }
}