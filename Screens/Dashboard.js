import React from 'react';
import {AppLoading} from 'expo';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import * as Font from 'expo-font';
import {LinearGradient} from 'expo-linear-gradient';
import {AntDesign} from '@expo/vector-icons';
import * as theme from '../theme.js';

export default class App extends React.Component {
  state = {
    isReady: false,
  };
  UNSAFE_componentWillMount () {
    (async () => {
      await Font.loadAsync ({
        'Lato-Black': require ('./assets/fonts/Lato/Lato-Black.ttf'),
        'Lato-Bold': require ('./assets/fonts/Lato/Lato-Bold.ttf'),
        'Lato-Light': require ('./assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-Regular': require ('./assets/fonts/Lato/Lato-Regular.ttf'),
        'Lato-Thin': require ('./assets/fonts/Lato/Lato-Thin.ttf'),
        'NotoSans-Bold': require ('./assets/fonts/Noto_Sans/NotoSans-Bold.ttf'),
        'NotoSans-Regular': require ('./assets/fonts/Noto_Sans/NotoSans-Regular.ttf'),
      });
      this.setState ({
        isReady: true,
      });
    }) ();
  }
  render () {
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
              source={require ('./assets/img/sugarcare_v.png')}
              style={styles.headerLogo}
            />
            {/* <TouchableOpacity style={styles.header_rha}>
              <AntDesign name="logout" style={styles.header_rha_icon} />
            </TouchableOpacity> */}
          </View>
          <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
            <View style={styles.titleBar}>
              <Text style={styles.titleBar_title}>Recently Uploaded</Text>
              <TouchableOpacity style={styles.titleBar_subTitle}>
                <Text style={styles.titleBar_subTitle}>More</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={styles.slides}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={[styles.slide]}>
                <Image
                  style={styles.slide_thumbnail}
                  resizeMode="cover"
                  source={require ('./assets/img/thumbnails/sm_pos1.jpg')}
                />
                <Text style={styles.slide_title}>Moonlight</Text>
                <Text style={styles.slide_time}>
                  01-Jan-2019{'  '}
                  <AntDesign name="play" style={styles.slide_playIcon} />
                </Text>
              </View>
              <View style={[styles.slide]}>
                <Image
                  style={styles.slide_thumbnail}
                  resizeMode="cover"
                  source={require ('./assets/img/thumbnails/sm_pos2.jpg')}
                />
                <Text style={styles.slide_title}>Blade Runner</Text>
                <Text style={styles.slide_time}>
                  01-Jan-2019{'  '}
                  <AntDesign name="play" style={styles.slide_playIcon} />
                </Text>
              </View>
              <View style={[styles.slide]}>
                <Image
                  style={styles.slide_thumbnail}
                  resizeMode="cover"
                  source={require ('./assets/img/thumbnails/sm_pos3.jpg')}
                />
                <Text style={styles.slide_title}>Tag</Text>
                <Text style={styles.slide_time}>
                  01-Jan-2019{'  '}
                  <AntDesign name="play" style={styles.slide_playIcon} />
                </Text>
              </View>
              <View style={[styles.slide]}>
                <Image
                  style={styles.slide_thumbnail}
                  resizeMode="cover"
                  source={require ('./assets/img/thumbnails/sm_pos4.jpg')}
                />
                <Text style={styles.slide_title}>Ant Man</Text>
                <Text style={styles.slide_time}>
                  01-Jan-2019{'  '}
                  <AntDesign name="play" style={styles.slide_playIcon} />
                </Text>
              </View>
            </ScrollView>
            <View style={styles.titleBar}>
              <Text style={styles.titleBar_title}>All Videos</Text>
            </View>
            <View style={styles.videoCard}>
              <View style={styles.videoCard_header}>
                <Image
                  style={styles.videoCard_thumbnail}
                  resizeMode="cover"
                  source={require ('./assets/img/thumbnails/pos1.jpg')}
                />
                <LinearGradient
                  colors={['rgba(20,136,204,0.3)', 'rgba(43,50,178, 0.3)']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={styles.videoCard_thumbnailContainer}
                />
                <TouchableOpacity style={styles.videoCard_play}>
                  <AntDesign name="play" style={styles.videoCard_playIcon} />
                </TouchableOpacity>
                <Text style={styles.videoCard_duration}>03:40</Text>
              </View>
              <View style={styles.videoCard_body}>
                <View style={styles.videoCard_details}>
                  <Text style={styles.videoCard_title}>Batman v Superman</Text>
                  <Text style={styles.videoCard_desc} numberOfLines={3}>
                    Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.
                  </Text>
                </View>
              </View>
              <View style={styles.videoCard_footer}>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="heart"
                    style={[
                      styles.videoCard_footerBtn_icon,
                      styles.videoCard_footerBtn_iconLikeActive,
                    ]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="sharealt"
                    style={[styles.videoCard_footerBtn_icon]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="eyeo"
                    style={[styles.videoCard_footerBtn_icon]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.videoCard}>
              <View style={styles.videoCard_header}>
                <Image
                  style={styles.videoCard_thumbnail}
                  resizeMode="cover"
                  source={require ('./assets/img/thumbnails/pos2.jpg')}
                />
                <LinearGradient
                  colors={['rgba(173, 83, 137,0.3)', 'rgba(60,16,83, 0.3)']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={styles.videoCard_thumbnailContainer}
                />
                <TouchableOpacity style={styles.videoCard_play}>
                  <AntDesign name="play" style={styles.videoCard_playIcon} />
                </TouchableOpacity>
                <Text style={styles.videoCard_duration}>03:40</Text>
              </View>
              <View style={styles.videoCard_body}>
                <View style={styles.videoCard_details}>
                  <Text style={styles.videoCard_title}>Avengers : Endgame</Text>
                  <Text style={styles.videoCard_desc} numberOfLines={3}>
                    After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.
                  </Text>
                </View>
              </View>
              <View style={styles.videoCard_footer}>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="hearto"
                    style={[styles.videoCard_footerBtn_icon]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="sharealt"
                    style={[styles.videoCard_footerBtn_icon]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="eye"
                    style={[
                      styles.videoCard_footerBtn_icon,
                      styles.videoCard_footerBtn_iconWatchActive,
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.videoCard}>
              <View style={styles.videoCard_header}>
                <Image
                  style={styles.videoCard_thumbnail}
                  resizeMode="cover"
                  source={require ('./assets/img/thumbnails/pos3.jpg')}
                />
                <LinearGradient
                  colors={['rgba(203,45,62,0.3)', 'rgba(255,167,81,0.3)']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={styles.videoCard_thumbnailContainer}
                />
                <TouchableOpacity style={styles.videoCard_play}>
                  <AntDesign name="play" style={styles.videoCard_playIcon} />
                </TouchableOpacity>
                <Text style={styles.videoCard_duration}>03:40</Text>
              </View>
              <View style={styles.videoCard_body}>
                <View style={styles.videoCard_details}>
                  <Text style={styles.videoCard_title}>Shazam!</Text>
                  <Text style={styles.videoCard_desc} numberOfLines={3}>
                    A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.
                  </Text>
                </View>
              </View>
              <View style={styles.videoCard_footer}>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="hearto"
                    style={[styles.videoCard_footerBtn_icon]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="checkcircle"
                    style={[
                      styles.videoCard_footerBtn_icon,
                      styles.videoCard_footerBtn_iconShareActive,
                    ]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="eyeo"
                    style={[styles.videoCard_footerBtn_icon]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.videoCard}>
              <View style={styles.videoCard_header}>
                <Image
                  style={styles.videoCard_thumbnail}
                  resizeMode="cover"
                  source={require ('./assets/img/thumbnails/pos4.jpg')}
                />
                <LinearGradient
                  colors={['rgba(20,136,204,0.3)', 'rgba(43,50,178, 0.3)']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={styles.videoCard_thumbnailContainer}
                />
                <TouchableOpacity style={styles.videoCard_play}>
                  <AntDesign name="play" style={styles.videoCard_playIcon} />
                </TouchableOpacity>
                <Text style={styles.videoCard_duration}>03:40</Text>
              </View>
              <View style={styles.videoCard_body}>
                <View style={styles.videoCard_details}>
                  <Text style={styles.videoCard_title}>Supergirl</Text>
                  <Text style={styles.videoCard_desc} numberOfLines={3}>
                    The adventures of Superman's cousin in her own superhero career.
                  </Text>
                </View>
              </View>
              <View style={styles.videoCard_footer}>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="heart"
                    style={[
                      styles.videoCard_footerBtn_icon,
                      styles.videoCard_footerBtn_iconLikeActive,
                    ]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="checkcircle"
                    style={[
                      styles.videoCard_footerBtn_icon,
                      styles.videoCard_footerBtn_iconShareActive,
                    ]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="eye"
                    style={[
                      styles.videoCard_footerBtn_icon,
                      styles.videoCard_footerBtn_iconWatchActive,
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.videoCard}>
              <View style={styles.videoCard_header}>
                <Image
                  style={styles.videoCard_thumbnail}
                  resizeMode="cover"
                  source={require ('./assets/img/thumbnails/pos5.jpg')}
                />
                <LinearGradient
                  colors={['rgba(236,80,140,0.4)', 'rgba(203,45,62,0.3)']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={styles.videoCard_thumbnailContainer}
                />
                <TouchableOpacity style={styles.videoCard_play}>
                  <AntDesign name="play" style={styles.videoCard_playIcon} />
                </TouchableOpacity>
                <Text style={styles.videoCard_duration}>03:40</Text>
              </View>
              <View style={styles.videoCard_body}>
                <View style={styles.videoCard_details}>
                  <Text style={styles.videoCard_title}>The Flash</Text>
                  <Text style={styles.videoCard_desc} numberOfLines={3}>
                    After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, fighting crime in Central City.
                  </Text>
                </View>
              </View>
              <View style={styles.videoCard_footer}>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="hearto"
                    style={[styles.videoCard_footerBtn_icon]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="sharealt"
                    style={[styles.videoCard_footerBtn_icon]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.videoCard_footerBtn}>
                  <AntDesign
                    name="eyeo"
                    style={[styles.videoCard_footerBtn_icon]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Image
              style={styles.eod}
              resizeMode="contain"
              source={require ('./assets/img/eod.png')}
            />
            <Text style={styles.eodText}>Check back later for more videos</Text>
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  body: {
    alignSelf: 'stretch',
    backgroundColor: theme.color_bg,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: theme.gutter_width_medium,
    paddingRight: theme.gutter_width_medium,
    alignItems: 'center',
    justifyContent: 'center',
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
    flexDirection: 'row',
    padding: theme.gutter_width_medium,
    alignItems: 'center',
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
  slides: {
    flexDirection: 'row',
  },
  slide: {
    width: 170,
    margin: theme.gutter_width_small,
    elevation: 1,
    backgroundColor: theme.color_black,
    borderRadius: theme.border_radius_rounded,
  },
  slide_thumbnail: {
    width: '100%',
    height: 250,
    borderTopLeftRadius: theme.border_radius_rounded,
    borderTopRightRadius: theme.border_radius_rounded,
  },
  slide_title: {
    fontFamily: theme.font_family_alpha_r,
    fontSize: theme.font_size_medium,
    color: theme.color_white,
    padding: theme.gutter_width_base,
    paddingBottom: 0,
  },
  slide_time: {
    fontFamily: theme.font_family_alpha_r,
    fontSize: theme.font_size_small,
    color: theme.color_txt_pale,
    margin: theme.gutter_width_base,
    marginTop: theme.gutter_width_tiny,
    paddingLeft: theme.gutter_width_tiny,
    borderLeftWidth: 1,
    borderColor: theme.color_state_info,
  },
  videoCard: {
    margin: theme.gutter_width_medium,
    borderRadius: theme.border_radius_rounded,
    elevation: 10,
  },
  videoCard_header: {},
  videoCard_thumbnailContainer: {
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopLeftRadius: theme.border_radius_rounded,
    borderTopRightRadius: theme.border_radius_rounded,
  },
  videoCard_thumbnail: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: theme.border_radius_rounded,
    borderTopRightRadius: theme.border_radius_rounded,
  },
  videoCard_play: {
    position: 'absolute',
    top: 100 - 0.5 * theme.icon_font_size_huge,
    left: '45%',
  },
  videoCard_playIcon: {
    fontSize: theme.icon_font_size_huge,
    color: theme.color_white,
  },
  videoCard_duration: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    color: theme.color_white,
    padding: theme.gutter_width_tiny,
    paddingLeft: theme.gutter_width_base,
    paddingRight: theme.gutter_width_base,
    backgroundColor: theme.color_black,
  },
  videoCard_body: {
    backgroundColor: theme.color_bg_card,
    padding: theme.gutter_width_base,
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoCard_details: {
    flex: 1,
  },
  videoCard_title: {
    fontFamily: theme.font_family_alpha_b,
    fontSize: theme.font_size_big,
    color: theme.color_txt,
    marginBottom: theme.gutter_width_small,
  },
  videoCard_desc: {
    fontFamily: theme.font_family_alpha_r,
    fontSize: theme.font_size_base,
    color: theme.color_txt_light,
  },
  videoCard_views: {},
  videoCard_viewsCount: {},
  videoCard_viewsIndicator: {},
  videoCard_footer: {
    backgroundColor: theme.color_bg_card,
    padding: theme.gutter_width_base,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: theme.border_radius_rounded,
    borderBottomRightRadius: theme.border_radius_rounded,
    borderTopWidth: 1,
    borderTopColor: theme.color_border,
  },
  videoCard_footerBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoCard_footerBtn_icon: {
    fontSize: theme.icon_font_size_big,
    color: theme.color_txt_light,
  },
  videoCard_footerBtn_iconLikeActive: {
    color: theme.color_state_danger,
  },
  videoCard_footerBtn_iconShareActive: {
    color: theme.color_state_success,
  },
  videoCard_footerBtn_iconWatchActive: {
    color: theme.color_state_info,
  },
  eod: {
    height: 300,
    width: '100%',
    alignSelf: 'stretch',
    marginTop: theme.gutter_width_medium,
  },
  eodText: {
    alignSelf: 'stretch',
    textAlign: 'center',
    fontFamily: theme.font_family_alpha_b,
    fontSize: theme.font_size_base,
    color: theme.color_txt,
    padding: theme.gutter_width_medium,
  },
  slide_playIcon: {
    fontSize: theme.icon_font_size_basex,
    color: theme.color_white,
    paddingLeft: theme.gutter_width_small,
  },
});
