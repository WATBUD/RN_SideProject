import React, { useState, useEffect, useRef } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal, // 添加 Modal 組件
  Button,
  ScrollView,
  Dimensions,
} from 'react-native'

import GradientText from '../../components/GradientText'

const screenWidth = Dimensions.get('window').width

const Card = () => {
  const [profileList, setProfileList] = useState([])
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
  const scrollViewRef = useRef()

  const handleScroll = event => {
    console.log(
      '%c handleScroll',
      `color: yellow;
          font-size: 15px;
          font-weight: bold;
          line-height: 100px;`,
      'event',
      event,
    )
    const offsetX = event.nativeEvent.contentOffset.x
    const page = Math.round(offsetX / screenWidth)
    setCurrentProfileIndex(page)
  }
  const scrollToPage = pageIndex => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: pageIndex * screenWidth,
        animated: true,
      })
      setCurrentProfileIndex(pageIndex)
    }
  }
  const [showAdModal, setShowAdModal] = useState(false) // 控制廣告 Modal 的顯示狀態

  useEffect(() => {
    setProfileList([
      {
        name: 'Tiffany',
        age: 27,
        constellations: 'Lion 獅子座(7/23-8/22)',
        bio: 'I love hiking and exploring new places.',
        image: {
          uri: 'https://cdn.pixabay.com/photo/2023/05/29/15/08/woman-8026300_1280.jpg',
        },
      },
      {
        name: 'Shari',
        age: 25,
        constellations: 'Aquarius 水瓶座(1/20-2/18)',
        bio: 'I love hiking and exploring new places.',
        image: require('../../../assets/icon.png'), // 請替換為您的圖片路徑
      },
      {
        name: 'John3333333333',
        age: 18,
        constellations: 'Lion 獅子座(7/23-8/22)',
        bio: 'I love hiking and exploring new places.',
        image: {
          uri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/tenor_1.gif',
        },
      },
    ])
    return () => {}
  }, [])

  //   useEffect(() => {
  //     console.log(
  //       '%c resultString',
  //       `color: yellow;
  //         font-size: 15px;
  //         font-weight: bold;
  //         line-height: 100px;
  // background-image: url("https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/tenor_1.gif")`,
  //     )
  //     return () => {}
  //   }, [])

  // const handleSwipeLeft = () => {
  //   // 處理左滑動作，例如顯示下一個用戶的資料
  //   // 在這裡您可以更新 profile 狀態為下一個用戶的資料

  //   const originalString = '應該是有吧'
  //   const substringToKeep = '有'
  //   const resultString = originalString.includes(substringToKeep)
  //     ? substringToKeep
  //     : ''

  //   const str = '12345'
  //   const arr = ['123', '345']
  // }

  // const handleShowAdModal = () => {
  //   setShowAdModal(true) // 打開廣告 Modal
  // }

  const handleCloseAdModal = () => {
    setShowAdModal(false) // 關閉廣告 Modal
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      {/* <Image
        source={{
          uri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/tenor_1.gif',
        }}
        style={{ width: 200, height: 200 }}
      /> */}
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: '#0000001C',
        }}></View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{
          backgroundColor: '#FFC0CB',
          //width: screenWidth,
          //width: '300%',
          height: '80%',
        }}>
        {profileList.map((item, index) => (
          <View
            key={index}
            style={{
              //backgroundColor: '#00f',
              borderRadius: 10,
              width: screenWidth,
              height: '100%',
              // //aspectRatio: 1 / 1.5,
              // shadowColor: '#000',
              // shadowOffset: { width: 0, height: 2 },
              // shadowOpacity: 0.2,
              // shadowRadius: 2,
              // elevation: 2,
            }}>
            <Image
              source={item.image}
              // source={{
              //   uri: 'https://cdn.pixabay.com/photo/2023/05/29/15/08/woman-8026300_1280.jpg',
              // }}
              style={{
                //paddingTop:300,
                height: '100%',
                width: '100%',
                //height: 500,
                //maxWidth: '100%',
                //maxHeight: '100%',
                //aspectRatio: 459 / 923,
                borderRadius: 10,
              }}
            />
            <View
              style={{
                width: '100%',
                //height: 20,
                //backgroundColor: '#f00',
                position: 'absolute',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                //left: 0,
                //paddingTop: 150,
                bottom: '5%',
                //zIndex: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  console.log(
                    '%c scrollToPage_currentProfileIndex ',
                    `color: yellow;`,
                    currentProfileIndex,
                  )
                  scrollToPage(currentProfileIndex - 1)
                }}
                disabled={currentProfileIndex === 0}
                style={{
                  width: '35%',
                }}>
                <View
                  style={{
                    backgroundColor: 'pink',
                    padding: 10,
                    borderRadius: 25,
                    width: '100%',
                    borderColor: '#fff',
                    borderWidth: 5,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white', // 白色文本
                    }}>
                    Nope
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => scrollToPage(currentProfileIndex + 1)}
                disabled={currentProfileIndex === profileList.length - 1}
                style={{
                  width: '35%',
                }}>
                <View
                  style={{
                    backgroundColor: 'pink',
                    padding: 10,
                    borderRadius: 25,
                    width: '100%',
                    borderColor: '#fff',
                    borderWidth: 5,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                    }}>
                    LIKE
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                //backgroundColor: '#f00',
                position: 'absolute',
                alignItems: 'center',
                flexDirection: 'row',
                bottom: '20%',
                left: 15,
                //zIndex: 101,
              }}>
              <GradientText
                colors={[
                  '#FF0000',
                  '#FF7F00',
                  '#FFFF00',
                  '#00FF00',
                  '#0000FF',
                  '#4B0082',
                  '#8B00FF',
                ]} // Rainbow colors
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>
                {item.name}, {item.age}
              </GradientText>
              <Text
                style={{
                  position: 'absolute',
                  bottom: -30,
                  color: '#FFF',
                  fontSize: 16,
                  textAlign: 'center',
                  textShadowColor: 'rgba(0, 0, 0, 0.75)', // Shadow color
                  textShadowOffset: { width: 2, height: 2 }, // Shadow offset (adjust as needed)
                  textShadowRadius: 5, // Shadow radius (adjust as needed)
                }}>
                {item.bio}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* 廣告 Modal */}
      <Modal
        visible={showAdModal}
        //animationType="slide"
        transparent={true}
        onRequestClose={handleCloseAdModal}>
        <View style={styles.modalContainer}>
          <View style={styles.adModal}>
            <Text style={styles.adText}>
              今日抽卡額度已耗盡，是否觀看廣告領取多3次抽卡機會?
            </Text>
            <Button title="關閉廣告" onPress={handleCloseAdModal} />
          </View>
        </View>
      </Modal>

      {/* 打開廣告的按鈕 */}
      {/* <TouchableOpacity onPress={handleShowAdModal} style={styles.adButton}>
        <Text style={styles.adButtonText}>打開廣告</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  adButton: {
    marginTop: 20,
  },
  adButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  adModal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  adText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})

export default Card
