import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import BackButton from '../back-button/back-button';
import { LANG } from '../../lang/lang';
import styles from './post-recipe-style';
import LinearGradient from 'react-native-linear-gradient';

const STEPS = {
  INFO: 'info',
  INGREDIENT: 'ingredient',
  PERFORM: 'perform'
}

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
      activeStep: STEPS.INGREDIENT
    }
  }

  renderDot = () => {
    return (
      <View style={styles.dotView}>
        <View style={styles.dot}></View>
        <View style={styles.dotNext}></View>
        <View style={styles.dotNext}></View>
        <View style={styles.dotNext}></View>
        <View style={styles.dotNext}></View>
      </View>
    )
  }

  render() {
    const { activeStep } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containerSteps}>
          <View style={styles.spaceView}></View>
          <View style={styles.stepView}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={activeStep === STEPS.INFO ? ["#3BB556", "#72C91C"] : ['#F3F5F5', '#F3F5F5']}
              style={styles.activeStep}
            >
              <TouchableOpacity>
                <Text style={activeStep === STEPS.INFO ? styles.numberStepActive : styles.numberStep}>1</Text>
              </TouchableOpacity>
            </LinearGradient>
            <Text style={activeStep === STEPS.INFO ? styles.stepTxtActive : styles.stepTxt}>{LANG.INFO}</Text>
          </View>
          <View style={styles.stepViewCenter}>
            {this.renderDot()}
            <View style={styles.step2View}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={activeStep === STEPS.INGREDIENT ? ["#3BB556", "#72C91C"] : ['#F3F5F5', '#F3F5F5']}
                style={styles.activeStep}
              >
                <TouchableOpacity>
                  <Text style={activeStep === STEPS.INGREDIENT ? styles.numberStepActive : styles.numberStep}>2</Text>
                </TouchableOpacity>
              </LinearGradient>
              <Text style={activeStep === STEPS.INGREDIENT ? styles.stepTxtActive : styles.stepTxt}>{LANG.INGREDIENT_1}</Text>
            </View>
            {this.renderDot()}
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
      </View>
    );
  }
}