import React from 'react' //useEffect, useMemo, useRef, useState
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  //Dimensions,
  StatusBar,
} from 'react-native'
import { useRouter } from 'expo-router'
import dayjs from 'dayjs'
// import Toast from '@ant-design/react-native/lib/toast'
type ItemProps = {
  id: string
  name: string
  message: string
  time: number
  image: string
}
const tempChatItemData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: '軟綿綿小貓',
    message: 'message',
    time: 1305856000000,
    image:
      'https://pic1.zhimg.com/v2-bc4fc3ef3bb5ba9fbe118cae01dca633_1440w.jpg?source=172ae18b',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: '來自世界盡頭的獨眼大爺',
    message: '咒術迴戰中誰會愛你～',
    time: 1667878276459,
    image: 'https://pix.veryjack.com/i/2023/04/04/fsxnkv.webp',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: '卡特蓮娜',
    message: '超萌時裝「蔚藍領航員」復刻上市',
    time: 1667836800000,
    image:
      'data:image/jpeg;base64,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',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-545644654dhui',
    name: '涅槃‧落',
    message: '來懲罰你討厭的人吧~',
    time: 1305856000000,
    image:
      'https://img.touxiangwu.com/zb_users/upload/2023/05/202305181684379012796803.jpg',
  },
  {
    id: 'f5e12047-961c-4c14-88a7-6f828e2a3b75',
    name: '伊波拉克',
    message: '新皮膚「炫光熾天使」炫登場，讓你成為場上最耀眼的存在！',
    time: 1678411200000,
    image:
      'https://dthezntil550i.cloudfront.net/kb/latest/kb2102041753466350008650553/1280_960/49d9be05-e168-4b69-bd95-459e3b7de5ab.png',
  },
  {
    id: 'bcf85f28-e04b-4cfe-a0df-6b0c3e0a2361',
    name: '艾希',
    message: '全新皮膚「黑夜煞星」震撼上線，讓夜晚的戰場更加華麗璀璨！',
    time: 1678497600000,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OYSnMIedoGAM_g32T9rZVebvllzLNyOf1g&usqp=CAU',
  },
  {
    id: '8f1375e0-c801-45f4-9d28-7e6e6568e31c',
    name: '崔絲塔娜',
    message: '週末特惠活動，限時優惠不容錯過，來搶購你心儀的物品吧！',
    time: 1678584000000,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Tj-drRSXVMAzQyZAIWrRO1n0qGX7qYpW2t_zWE9AXeQb670ZuFiBV8KXpcrRVd-VbVk&usqp=CAU',
  },
  {
    id: '57f7f483-d540-46e1-88e3-9337bde4335c',
    name: '阿璃',
    message: '特別活動「星空精靈」重磅開啟，讓你成為夢幻中的魔法使者！',
    time: 1678670400000,
    image:
      'https://media.wired.com/photos/639b95f7b0b422ebbe76e40b/4:3/w_2131,h_1598,c_limit/Cul-avatar.jpg',
  },
  {
    id: '7645ae1f-2107-4ef7-b083-8a0d7b738059',
    name: '卡特蓮娜',
    message: '搖滾女皇「霸氣來襲」震撼登場，讓音樂與戰鬥完美結合！',
    time: 1678756800000,
    image:
      'https://pyxis.nymag.com/v1/imgs/51b/28a/622789406b8850203e2637d657d5a0e0c3-avatar-rerelease.1x.rsquare.w1400.jpg',
  },
  {
    id: '82e13e10-8485-4b26-bf1e-1b2d93f9c98e',
    name: '艾希',
    message: '新版皮膚「冰雪女王」現已上架，勇敢的你將成為冰雪王國的守護者！',
    time: 1678843200000,
    image:
      'https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2023/06/avatar-3-release-date.jpg',
  },
  {
    id: 'f951487a-40a7-416e-ae57-8a9c9c9a40d5',
    name: '伊波拉克',
    message: '夏日清涼優惠，一起過涼夏，讓我們共同擊退炎炎夏日！',
    time: 1678929600000,
    image:
      'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
  },
  {
    id: '4563d8d6-65c0-4f1a-9b12-6ce589eeb4e2',
    name: '阿璃',
    message: '限時活動「神秘宇宙」驚喜登場，一場充滿星光的奇幻冒險！',
    time: 1679016000000,
    image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Katara.png',
  },
  {
    id: '22b82c89-300d-42d1-bd59-3bfe2d0e67df',
    name: '崔絲塔娜',
    message: '優惠禮包「豪華大禮」限時開賣，現在是收穫的時刻！',
    time: 1679102400000,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpsPK6KjObwfAd1VA1hQnjKGn-O-JdL5WjQ&usqp=CAU',
  },
  {
    id: '1',
    name: '角色 A',
    message: '迎接全新的冒險之旅，準備好了嗎？',
    time: 1678324800000,
    image: 'https://cdn2.ettoday.net/images/1523/d1523079.jpg',
  },
  {
    id: '2',
    name: '角色 B',
    message: '探索未知的領域，發現隱藏的寶藏！',
    time: 1678411200000,
    image:
      'https://cdn.hk01.com/di/media/images/3698099/org/a3e5651ea549934542d3332b643558aa.jpg/t9Rkvx94p7w3eCdcmcG05JRP30Gypqm6qIuz-qiLs_o',
  },
  {
    id: '3',
    name: '角色 C',
    message: '挑戰強大的敵人，取得勝利的喜悅是無法言喻的。',
    time: 1678497600000,
    image: 'https://www.upmedia.mg/upload/article/20160729194937948578.jpg',
  },
  {
    id: '4',
    name: '角色 D',
    message: '一起加入我們的隊伍，共同創造傳奇！',
    time: 1678584000000,
    image:
      'https://3c.yipee.cc/wp-content/uploads/2016/03/4d3a03e342f81449d22ca79153af572b.jpg',
  },
  {
    id: '5',
    name: '角色 E',
    message: '在這個世界中，你將是不可或缺的存在。',
    time: 1678670400000,
    image: 'https://image1.gamme.com.tw/news2/2017/83/64/pJiVop_WkZ6ZqA.jpg',
  },
  {
    id: '6',
    name: '角色 F',
    message: '充滿挑戰的旅程即將展開，準備好迎接嗎？',
    time: 1678756800000,
    image:
      'https://media.zenfs.com/zh-tw/mirrormedia.mg/faf7839782a5fbd1f1c2bb8bfb98670b',
  },
  {
    id: '9',
    name: '角色 I',
    message: '揭開神秘的面紗，探索神奇的世界。',
    time: 1679016000000,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Tj-drRSXVMAzQyZAIWrRO1n0qGX7qYpW2t_zWE9AXeQb670ZuFiBV8KXpcrRVd-VbVk&usqp=CAU',
  },
]

//const width = Dimensions.get('window').width
//const height = Dimensions.get('window').height

const Chat = () => {
  const router = useRouter()
  const ChatItem = ({ item }: { item: ItemProps }) => {
    const { id, name } = item

    return (
      <Pressable
        onPress={() => {
          router.push({
            pathname: 'page/chatRoomScreen',
            params: { id, name },
          })
        }}>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: item.image }}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text
              style={{ fontSize: 14, color: '#353636' }}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.message}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 13,
              color: '#696969',
              marginRight: 5,
              //backgroundColor: 'red',
              //paddingRight: width * 0.02,
            }}>
            {dayjs(item.time).format('HH:MM')}
          </Text>
        </View>
        <View style={styles.div} />
      </Pressable>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View
        style={{
          flex: 1,
          //marginTop: StatusBar.currentHeight || 0,
        }}>
        <FlatList
          data={tempChatItemData}
          renderItem={({ item }) => <ChatItem item={item} />}
          keyExtractor={item => item.id}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false} // 隐藏垂直滚动条
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'column',
    //width: '65%',
    flex: 1,
    alignContent: 'space-between',
    paddingLeft: 10,
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  itemContainer: {
    backgroundColor: '#F5F5F5',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomColor: '#606060',
    // borderBottomWidth: 1,
    // borderColor:'blue',
    // borderWidth:1,
    //padding: 3,
  },
  imageContainer: {
    //width: '20%',
    // backgroundColor: '#42B79C',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    //marginRight:5,
    aspectRatio: 1,
    marginVertical: 10,
  },
  image: { width: '100%', height: '100%', borderRadius: 50 },
  nameText: {
    fontSize: 18,
  },
  div: {
    backgroundColor: '#DCDCDC',
    width: '95%',
    height: 1,
    alignSelf: 'center',
  },
})

export default Chat
