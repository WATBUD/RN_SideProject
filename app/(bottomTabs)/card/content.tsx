import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal, // 添加 Modal 組件
  Button,
} from 'react-native'

const Card = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    age: 25,
    bio: 'I love hiking and exploring new places.',
    image: require('../../../assets/icon.png'), // 請替換為您的圖片路徑
  })

  const [showAdModal, setShowAdModal] = useState(false) // 控制廣告 Modal 的顯示狀態

  useEffect(() => {
    console.log(
      '%c resultString',
      `color: yellow;
        font-size: 15px;
        font-weight: bold;
        line-height: 100px;
background-image: url("https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/tenor_1.gif")`,
    )
    return () => {}
  }, [])
  function tttt() {
    // console.log(
    //   "%c resultString",
    //   `color: yellow;
    //     font-size: 15px;
    //     font-weight: bold;
    //     line-height: 100px;
    //     background-image: url(https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/tenor_2.gif)`,
    // );
    console.log(
      '%c ',
      `padding: 100px 200px;
      background-image: url('data:image/png;base64,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')`,
    )
  }
  const handleSwipeLeft = () => {
    // 處理左滑動作，例如顯示下一個用戶的資料
    // 在這裡您可以更新 profile 狀態為下一個用戶的資料

    const originalString = '應該是有吧'
    const substringToKeep = '有'
    const resultString = originalString.includes(substringToKeep)
      ? substringToKeep
      : ''

    const str = '12345'
    const arr = ['123', '345']
    tttt()
  }

  const handleSwipeRight = () => {
    // 處理右滑動作，例如喜歡這個用戶
    // 在這裡您可以執行喜歡的相關操作
  }

  const handleShowAdModal = () => {
    setShowAdModal(true) // 打開廣告 Modal
  }

  const handleCloseAdModal = () => {
    setShowAdModal(false) // 關閉廣告 Modal
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/tenor_1.gif',
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.card}>
        <Image source={profile.image} style={styles.profileImage} />
        <Text style={styles.profileName}>
          {profile.name}, {profile.age}
        </Text>
        <Text style={styles.profileBio}>{profile.bio}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleSwipeLeft} style={styles.button}>
          <Text style={styles.buttonText}>Swipe Left</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSwipeRight} style={styles.button}>
          <Text style={styles.buttonText}>Swipe Right</Text>
        </TouchableOpacity>
      </View>

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
      <TouchableOpacity onPress={handleShowAdModal} style={styles.adButton}>
        <Text style={styles.adButtonText}>打開廣告</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  profileBio: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
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
