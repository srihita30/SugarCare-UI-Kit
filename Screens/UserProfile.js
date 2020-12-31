import React from "react";
import { AppLoading } from "expo";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import * as theme from "./theme.js";

export default class App extends React.Component {
  state = {
    isReady: false,
  };
  UNSAFE_componentWillMount() {
    (async () => {
      await Font.loadAsync({
        "Lato-Black": require("./assets/fonts/Lato/Lato-Black.ttf"),
        "Lato-Bold": require("./assets/fonts/Lato/Lato-Bold.ttf"),
        "Lato-Light": require("./assets/fonts/Lato/Lato-Light.ttf"),
        "Lato-Regular": require("./assets/fonts/Lato/Lato-Regular.ttf"),
        "Lato-Thin": require("./assets/fonts/Lato/Lato-Thin.ttf"),
        "NotoSans-Bold": require("./assets/fonts/Noto_Sans/NotoSans-Bold.ttf"),
        "NotoSans-Regular": require("./assets/fonts/Noto_Sans/NotoSans-Regular.ttf"),
      });
      this.setState({
        isReady: true,
      });
    })();
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    } else {
      return (
        <View style={[styles.container]}>
          <View style={styles.header}>
            {/* <TouchableOpacity style={styles.header_lha}>
              <AntDesign name="menuunfold" style={styles.header_lha_icon} />
            </TouchableOpacity> */}
            <Image
              resizeMode="contain"
              source={require("./assets/img/sugarcare_v.png")}
              style={styles.headerLogo}
            />
            {/* <TouchableOpacity style={styles.header_rha}>
              <AntDesign name="logout" style={styles.header_rha_icon} />
            </TouchableOpacity> */}
          </View>
          <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
            <View style={styles.userCard}>
              <Image
                style={styles.userCard_thumbnail}
                resizeMode="cover"
                source={require("./assets/img/profile.jpg")}
              />
              <View style={styles.userCard_nameCard}>
                <Text style={styles.userCard_name}>Srihari Rao. K</Text>
                <View style={styles.userCard_nameCard__status}>
                  <Text
                    style={[styles.userCard_status, styles.userCard_status_red]}
                  >
                    Red
                  </Text>
                </View>
              </View>
              <Text style={styles.userCard_desc}>
                Diagnosed with Diabetes in June 2018, suffers from hypertension.
                Srihari Rao. K is also a Cardiac patient and has gone through a
                surgery in the past
              </Text>
            </View>
            <View style={styles.descCard}>
              <View style={styles.descCard_cell}>
                <Text style={styles.descCard_label__left}>Age</Text>
                <Text style={styles.descCard_value__left}>40</Text>
              </View>
              <View style={styles.descCard_cell}>
                <Text style={styles.descCard_label}>Height</Text>
                <Text style={styles.descCard_value}>5'7</Text>
              </View>
              <View style={styles.descCard_cell}>
                <Text style={styles.descCard_label__right}>Weight</Text>
                <Text style={styles.descCard_value__right}>60</Text>
              </View>
            </View>
            <LinearGradient
              colors={[
                theme.color_status_red,
                theme.color_status_amber,
                theme.color_status_green,
                theme.color_status_amber,
                theme.color_status_green,
                theme.color_status_amber,
                theme.color_status_green,
              ]}
              start={[0, 0]}
              end={[1, 1]}
              style={styles.userProfileStatusBar}
            />
            <View style={styles.titleBar}>
              <Text style={styles.titleBar_title}>Recent Readings</Text>
            </View>
            <View style={styles.readings}>
              <View style={styles.readingsCard}>
                <View style={styles.readingsCard__item}>
                  <View style={styles.readingsCard__preMeal}>
                    <MaterialCommunityIcons
                      name="food-off"
                      style={styles.readingsCard__icon}
                    ></MaterialCommunityIcons>
                    <Text style={styles.readingsCard__reading}>102</Text>
                  </View>
                  <View style={styles.readingsCard__status}>
                    <MaterialCommunityIcons
                      name="heart-circle"
                      style={[
                        styles.readingsCard__icon__status,
                        styles.readingsCard__icon__statusRed,
                      ]}
                    ></MaterialCommunityIcons>
                    <View style={styles.readingsCard__status_dateContainer}>
                      <Text style={styles.readingsCard__status_date}>
                        12-Nov-2020
                      </Text>
                      <View
                        style={[
                          styles.readingsCard_hl,
                          styles.readingsCard_hl__r,
                        ]}
                      >
                        <MaterialCommunityIcons
                          name="arrow-top-right"
                          style={styles.readingCard_hl_icon}
                        ></MaterialCommunityIcons>
                      </View>
                    </View>
                  </View>
                  <View style={styles.readingsCard__postMeal}>
                    <MaterialCommunityIcons
                      name="food"
                      style={styles.readingsCard__icon}
                    ></MaterialCommunityIcons>
                    <Text style={styles.readingsCard__reading}>240</Text>
                  </View>
                </View>
                <LinearGradient
                  colors={[theme.color_status_red, theme.color_status_red]}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={styles.readingsCard__statusBar}
                ></LinearGradient>
              </View>
              <View style={styles.readingsCard}>
                <View style={styles.readingsCard__item}>
                  <View style={styles.readingsCard__preMeal}>
                    <MaterialCommunityIcons
                      name="food-off"
                      style={styles.readingsCard__icon}
                    ></MaterialCommunityIcons>
                    <Text style={styles.readingsCard__reading}>100</Text>
                  </View>
                  <View style={styles.readingsCard__status}>
                    <MaterialCommunityIcons
                      name="heart-circle"
                      style={[
                        styles.readingsCard__icon__status,
                        styles.readingsCard__icon__statusAmber,
                      ]}
                    ></MaterialCommunityIcons>
                    <View style={styles.readingsCard__status_dateContainer}>
                      <Text style={styles.readingsCard__status_date}>
                        29-Oct-2020
                      </Text>
                      <View
                        style={[
                          styles.readingsCard_hl,
                          styles.readingsCard_hl__a,
                        ]}
                      >
                        <MaterialCommunityIcons
                          name="arrow-top-right"
                          style={styles.readingCard_hl_icon}
                        ></MaterialCommunityIcons>
                      </View>
                    </View>
                  </View>
                  <View style={styles.readingsCard__postMeal}>
                    <MaterialCommunityIcons
                      name="food"
                      style={styles.readingsCard__icon}
                    ></MaterialCommunityIcons>
                    <Text style={styles.readingsCard__reading}>138</Text>
                  </View>
                </View>
                <LinearGradient
                  colors={[theme.color_status_amber, theme.color_status_green]}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={styles.readingsCard__statusBar}
                ></LinearGradient>
              </View>
              <View style={styles.readingsCard}>
                <View style={styles.readingsCard__item}>
                  <View style={styles.readingsCard__preMeal}>
                    <MaterialCommunityIcons
                      name="food-off"
                      style={styles.readingsCard__icon}
                    ></MaterialCommunityIcons>
                    <Text style={styles.readingsCard__reading}>90</Text>
                  </View>
                  <View style={styles.readingsCard__status}>
                    <MaterialCommunityIcons
                      name="heart-circle"
                      style={[
                        styles.readingsCard__icon__status,
                        styles.readingsCard__icon__statusGreen,
                      ]}
                    ></MaterialCommunityIcons>
                    <View style={styles.readingsCard__status_dateContainer}>
                      <Text style={styles.readingsCard__status_date}>
                        19-Oct-2020
                      </Text>
                    </View>
                  </View>
                  <View style={styles.readingsCard__postMeal}>
                    <MaterialCommunityIcons
                      name="food"
                      style={styles.readingsCard__icon}
                    ></MaterialCommunityIcons>
                    <Text style={styles.readingsCard__reading}>130</Text>
                  </View>
                </View>
                <LinearGradient
                  colors={[theme.color_status_green, theme.color_status_green]}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={styles.readingsCard__statusBar}
                ></LinearGradient>
              </View>
            </View>
          </ScrollView>
          <Text style={styles.note}>
            * Based on your recent readings, your review with a diabetologist is
            pending
          </Text>
          <TouchableOpacity style={styles.cta}>
            <Text style={styles.btn}>Call Doctor</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  body: {
    alignSelf: "stretch",
    backgroundColor: theme.color_bg,
  },
  header: {
    flexDirection: "row",
    paddingLeft: theme.gutter_width_medium,
    paddingRight: theme.gutter_width_medium,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color_white,
    elevation: 10,
  },
  headerLogo: {
    flex: 1,
    height: 60,
    width: 90,
  },
  header_rha_icon: {
    fontSize: theme.icon_font_size_big,
    color: theme.color_beta,
  },
  header_lha_icon: {
    fontSize: theme.icon_font_size_big,
    color: theme.color_alpha,
  },
  titleBar: {
    flexDirection: "row",
    padding: theme.gutter_width_medium,
    alignItems: "center",
  },
  titleBar_title: {
    flex: 1,
    fontFamily: theme.font_family_alpha_bl,
    fontSize: theme.font_size_medium,
    color: theme.color_txt,
  },
  titleBar_subTitle: {
    fontFamily: theme.font_family_alpha_m,
    fontSize: theme.font_size_base,
    color: theme.color_txt,
    backgroundColor: theme.color_bg_card,
    paddingLeft: theme.gutter_width_base,
    paddingRight: theme.gutter_width_base,
  },
  userCard: {
    justifyContent: "center",
    alignItems: "center",
    padding: theme.gutter_width_base,
    backgroundColor: theme.color_bg_card,
  },
  userCard_nameCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  userCard_nameCard__status: {
    marginLeft: theme.gutter_width_tiny,
  },
  userCard_thumbnail: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color_white,
    width: 100,
    height: 100,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: theme.color_white,
  },
  userCard_status: {
    borderRadius: theme.border_radius_rounded,
    paddingLeft: theme.gutter_width_small,
    paddingRight: theme.gutter_width_small,
    color: theme.color_white,
    fontFamily: theme.font_family_alpha_b,
    fontSize: theme.font_size_small,
    marginTop: 5,
  },
  userCard_status_green: {
    backgroundColor: theme.color_status_green,
  },
  userCard_status_amber: {
    backgroundColor: theme.color_status_amber,
  },
  userCard_status_red: {
    backgroundColor: theme.color_status_red,
  },
  userCard_name: {
    fontFamily: theme.font_family_alpha_b,
    fontSize: theme.font_size_bigger,
    color: theme.color_txt,
  },
  userCard_desc: {
    margin: theme.gutter_width_base,
    fontFamily: theme.font_family_alpha_r,
    fontSize: theme.font_size_base,
    color: theme.color_txt_light,
    textAlign: "center",
    marginBottom: 0,
  },
  descCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.gutter_width_huge,
    paddingTop: theme.gutter_width_small,
    marginTop: 0,
    backgroundColor: theme.color_bg_card,
  },
  descCard_cell: {
    flex: 1,
  },
  descCard_label: {
    textAlign: "center",
    fontFamily: theme.font_family_alpha_r,
    fontSize: theme.font_size_small,
    color: theme.color_txt_light,
  },
  descCard_value: {
    textAlign: "center",
    fontFamily: theme.font_family_alpha_b,
    fontSize: theme.font_size_medium,
    color: theme.color_txt,
    marginTop: theme.gutter_width_tiny,
  },
  descCard_label__left: {
    fontFamily: theme.font_family_alpha_r,
    fontSize: theme.font_size_small,
    color: theme.color_txt_light,
  },
  descCard_value__left: {
    fontFamily: theme.font_family_alpha_b,
    fontSize: theme.font_size_medium,
    color: theme.color_txt,
    marginTop: theme.gutter_width_tiny,
  },
  descCard_label__right: {
    textAlign: "right",
    fontFamily: theme.font_family_alpha_r,
    fontSize: theme.font_size_small,
    color: theme.color_txt_light,
  },
  descCard_value__right: {
    textAlign: "right",
    fontFamily: theme.font_family_alpha_b,
    fontSize: theme.font_size_medium,
    color: theme.color_txt,
    marginTop: theme.gutter_width_tiny,
  },
  userProfileStatusBar: {
    width: "100%",
    height: 3,
  },
  readings: {
    margin: theme.gutter_width_medium,
  },
  readingsCard: {
    backgroundColor: theme.color_bg_card,
    borderRadius: theme.border_radius_rounded_small,
    marginBottom: theme.gutter_width_small,
  },
  readingsCard__item: {
    flexDirection: "row",
    padding: theme.gutter_width_small,
  },
  readingsCard__preMeal: {
    flex: 1,
  },
  readingsCard__icon: {
    fontSize: theme.icon_font_size_medium,
    color: theme.color_icon,
    marginBottom: theme.gutter_width_tiny,
  },
  readingsCard__reading: {
    fontFamily: theme.font_family_alpha_b,
    fontSize: theme.font_size_medium,
    color: theme.color_txt,
  },
  readingsCard__status: {
    flex: 1,
    alignItems: "center",
  },
  readingsCard__icon__status: {
    fontSize: theme.icon_font_size_bigger,
    color: theme.color_icon,
    marginBottom: theme.gutter_width_tiny,
  },
  readingsCard__icon__statusGreen: {
    color: theme.color_status_green,
  },
  readingsCard__icon__statusAmber: {
    color: theme.color_status_amber,
  },
  readingsCard__icon__statusRed: {
    color: theme.color_status_red,
  },
  readingsCard__status_dateContainer: {
    flexDirection: "row",
  },
  readingsCard__status_date: {
    fontFamily: theme.font_family_alpha_r,
    fontSize: theme.font_size_small,
    color: theme.color_txt,
  },
  readingsCard__postMeal: {
    flex: 1,
    alignItems: "flex-end",
  },
  readingsCard__statusBar: {
    height: 2,
    width: "100%",
    borderRadius: theme.border_radius_rounded_small,
  },
  readingsCard_hl: {
    marginLeft: theme.gutter_width_tiny,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.border_radius_circle,
  },
  readingsCard_hl__r: {
    backgroundColor: theme.color_status_red,
  },
  readingsCard_hl__a: {
    backgroundColor: theme.color_status_amber,
  },
  readingsCard_hl__g: {
    backgroundColor: theme.color_status_green,
  },
  readingCard_hl_icon: {
    fontSize: theme.icon_font_size_base,
    color: theme.color_white,
  },
  note: {
    textAlign: "center",
    fontFamily: theme.font_family_alpha_r,
    fontSize: theme.font_size_smaller,
    color: theme.color_txt_light,
    padding: theme.gutter_width_medium,
    paddingTop: 0,
    backgroundColor: theme.color_bg,
  },
  cta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: theme.color_state_danger,
    color: theme.color_white,
    fontFamily: theme.font_family_alpha_b,
    fontSize: theme.font_size_base,
    flex: 1,
    textAlign: "center",
    margin: theme.gutter_width_medium,
    padding: theme.gutter_width_small,
    borderRadius: theme.border_radius_rounded,
  },
});
