import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG, STEPS} from '../../utils/variables';
import LinearGradient from 'react-native-linear-gradient';
import styles from './steps-up-recipe-style';

export default class StepsUpRecipe extends Component {

  renderDot = (isGreen) => {
    const styleDot = isGreen ? styles.dotActive : styles.dot;
    return (
      <View style={styles.dotView}>
        <View style={[styleDot, { marginLeft: 0 }]}></View>
        <View style={styleDot}></View>
        <View style={styleDot}></View>
        <View style={styleDot}></View>
        <View style={styleDot}></View>
      </View>
    )
  }

  render() {
    const { activeStep } = this.props;
    return (
      <View style={styles.containerSteps}>
        <View style={styles.spaceView}></View>
        <View style={styles.stepView} onPress={()=> this.onPressStep(STEPS.INFO)}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#3BB556", "#72C91C"]}
            style={styles.activeStep}
          >
            <View>
              {
                activeStep === STEPS.INFO ? <Text style={styles.numberStepActive}>1</Text> : <Image source={IMG.checkedWhite} style={styles.checkedImg}></Image>
              }
            </View>
          </LinearGradient>
          <Text style={activeStep === STEPS.INFO ? styles.stepTxtActive : styles.stepTxtGreen}>{LANG.INFO}</Text>
        </View>
        <View style={styles.stepViewCenter}>
          {activeStep === STEPS.INFO ? this.renderDot(false) : this.renderDot(true)}
          <View style={styles.step2View} onPress={()=> this.onPressStep(STEPS.INGREDIENT)}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={(activeStep === STEPS.INGREDIENT || activeStep === STEPS.PERFORM) ? ["#3BB556", "#72C91C"] : ['#F3F5F5', '#F3F5F5']}
              style={styles.activeStep}
            >
              <View>
                {activeStep === STEPS.INFO && <Text style={styles.numberStep}>2</Text>}
                {activeStep === STEPS.INGREDIENT && <Text style={styles.numberStepActive}>2</Text>}
                {activeStep === STEPS.PERFORM && <Image source={IMG.checkedWhite} style={styles.checkedImg}></Image>}
              </View>
            </LinearGradient>
            {activeStep === STEPS.INFO && <Text style={styles.stepTxt}>{LANG.INGREDIENT_1}</Text>}
            {activeStep === STEPS.INGREDIENT && <Text style={styles.stepTxtActive}>{LANG.INGREDIENT_1}</Text>}
            {activeStep === STEPS.PERFORM && <Text style={styles.stepTxtGreen}>{LANG.INGREDIENT_1}</Text>}
          </View>
          {activeStep === STEPS.PERFORM ? this.renderDot(true) : this.renderDot(false)}
        </View>
        <View style={styles.stepView} onPress={()=> this.onPressStep(STEPS.PERFORM)}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={activeStep === STEPS.PERFORM ? ["#3BB556", "#72C91C"] : ['#F3F5F5', '#F3F5F5']}
            style={styles.activeStep}
          >
            <View>
              <Text style={activeStep === STEPS.PERFORM ? styles.numberStepActive : styles.numberStep}>3</Text>
            </View>
          </LinearGradient>
          <Text style={activeStep === STEPS.PERFORM ? styles.stepTxtActive : styles.stepTxt}>{LANG.PERFORM}</Text>
        </View>
        <View style={styles.spaceView}></View>
      </View>
    )
  }
}
