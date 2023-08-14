import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
    Dimensions,
    StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import dayjs from "dayjs";
// import Toast from '@ant-design/react-native/lib/toast'

type ItemProps = {
    id: string,
    name: string,
    message: string,
    time: number,
    image: string
};
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: '軟綿綿小貓',
        message: 'message',
        time: 1305856000000,
        image: 'https://pic1.zhimg.com/v2-bc4fc3ef3bb5ba9fbe118cae01dca633_1440w.jpg?source=172ae18b'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: '來自世界盡頭的獨眼大爺',
        message: '咒術迴戰中誰會愛你～',
        time: 1667878276459,
        image: 'https://pix.veryjack.com/i/2023/04/04/fsxnkv.webp'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: '卡特蓮娜',
        message: '超萌時裝「蔚藍領航員」復刻上市',
        time: 1667836800000,
        image: 'https://d-ssl.dtstatic.com/uploads/blog/202209/15/20220915074631_e3402.thumb.300_0.jpeg_webp'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-545644654dhui',
        name: '涅槃‧落',
        message: '來懲罰你討厭的人吧~',
        time: 1305856000000,
        image: 'https://img.touxiangwu.com/zb_users/upload/2023/05/202305181684379012796803.jpg'
    },
    {
        id: "f5e12047-961c-4c14-88a7-6f828e2a3b75",
        name: "伊波拉克",
        message: "新皮膚「炫光熾天使」炫登場，讓你成為場上最耀眼的存在！",
        time: 1678411200000,
        image: "https://dthezntil550i.cloudfront.net/kb/latest/kb2102041753466350008650553/1280_960/49d9be05-e168-4b69-bd95-459e3b7de5ab.png"
    },
    {
        id: "bcf85f28-e04b-4cfe-a0df-6b0c3e0a2361",
        name: "艾希",
        message: "全新皮膚「黑夜煞星」震撼上線，讓夜晚的戰場更加華麗璀璨！",
        time: 1678497600000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OYSnMIedoGAM_g32T9rZVebvllzLNyOf1g&usqp=CAU"
    },
    {
        id: "8f1375e0-c801-45f4-9d28-7e6e6568e31c",
        name: "崔絲塔娜",
        message: "週末特惠活動，限時優惠不容錯過，來搶購你心儀的物品吧！",
        time: 1678584000000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Tj-drRSXVMAzQyZAIWrRO1n0qGX7qYpW2t_zWE9AXeQb670ZuFiBV8KXpcrRVd-VbVk&usqp=CAU"
    },
    {
        id: "57f7f483-d540-46e1-88e3-9337bde4335c",
        name: "阿璃",
        message: "特別活動「星空精靈」重磅開啟，讓你成為夢幻中的魔法使者！",
        time: 1678670400000,
        image: "https://media.wired.com/photos/639b95f7b0b422ebbe76e40b/4:3/w_2131,h_1598,c_limit/Cul-avatar.jpg"
    },
    {
        id: "7645ae1f-2107-4ef7-b083-8a0d7b738059",
        name: "卡特蓮娜",
        message: "搖滾女皇「霸氣來襲」震撼登場，讓音樂與戰鬥完美結合！",
        time: 1678756800000,
        image: "https://pyxis.nymag.com/v1/imgs/51b/28a/622789406b8850203e2637d657d5a0e0c3-avatar-rerelease.1x.rsquare.w1400.jpg"
    },
    {
        id: "82e13e10-8485-4b26-bf1e-1b2d93f9c98e",
        name: "艾希",
        message: "新版皮膚「冰雪女王」現已上架，勇敢的你將成為冰雪王國的守護者！",
        time: 1678843200000,
        image: "https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2023/06/avatar-3-release-date.jpg"
    },
    {
        id: "f951487a-40a7-416e-ae57-8a9c9c9a40d5",
        name: "伊波拉克",
        message: "夏日清涼優惠，一起過涼夏，讓我們共同擊退炎炎夏日！",
        time: 1678929600000,
        image: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
    },
    {
        id: "4563d8d6-65c0-4f1a-9b12-6ce589eeb4e2",
        name: "阿璃",
        message: "限時活動「神秘宇宙」驚喜登場，一場充滿星光的奇幻冒險！",
        time: 1679016000000,
        image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Katara.png"
    },
    {
        id: "22b82c89-300d-42d1-bd59-3bfe2d0e67df",
        name: "崔絲塔娜",
        message: "優惠禮包「豪華大禮」限時開賣，現在是收穫的時刻！",
        time: 1679102400000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpsPK6KjObwfAd1VA1hQnjKGn-O-JdL5WjQ&usqp=CAU"
    },
    {
        id: "1",
        name: "角色 A",
        message: "迎接全新的冒險之旅，準備好了嗎？",
        time: 1678324800000,
        image: "https://cdn2.ettoday.net/images/1523/d1523079.jpg"
    },
    {
        id: "2",
        name: "角色 B",
        message: "探索未知的領域，發現隱藏的寶藏！",
        time: 1678411200000,
        image: "https://cdn.hk01.com/di/media/images/3698099/org/a3e5651ea549934542d3332b643558aa.jpg/t9Rkvx94p7w3eCdcmcG05JRP30Gypqm6qIuz-qiLs_o"
    },
    {
        id: "3",
        name: "角色 C",
        message: "挑戰強大的敵人，取得勝利的喜悅是無法言喻的。",
        time: 1678497600000,
        image: "https://www.upmedia.mg/upload/article/20160729194937948578.jpg"
    },
    {
        id: "4",
        name: "角色 D",
        message: "一起加入我們的隊伍，共同創造傳奇！",
        time: 1678584000000,
        image: "https://3c.yipee.cc/wp-content/uploads/2016/03/4d3a03e342f81449d22ca79153af572b.jpg"
    },
    {
        id: "5",
        name: "角色 E",
        message: "在這個世界中，你將是不可或缺的存在。",
        time: 1678670400000,
        image: "https://image1.gamme.com.tw/news2/2017/83/64/pJiVop_WkZ6ZqA.jpg"
    },
    {
        id: "6",
        name: "角色 F",
        message: "充滿挑戰的旅程即將展開，準備好迎接嗎？",
        time: 1678756800000,
        image: "https://media.zenfs.com/zh-tw/mirrormedia.mg/faf7839782a5fbd1f1c2bb8bfb98670b"
    },
    {
        id: "9",
        name: "角色 I",
        message: "揭開神秘的面紗，探索神奇的世界。",
        time: 1679016000000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Tj-drRSXVMAzQyZAIWrRO1n0qGX7qYpW2t_zWE9AXeQb670ZuFiBV8KXpcrRVd-VbVk&usqp=CAU"
    },
]

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height



const Chat = () => {
    const router = useRouter();
    const ChatItem = ({ item }: { item: ItemProps }) => {
        const { id, name } = item

        return (
            <Pressable
                onPress={() => {
                    router.push({
                        pathname: "/chat/ChatRoomScreen",
                        params: { id, name },
                    });
                }}
            >
                <View style={styles.itemContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image}
                            resizeMode='cover'
                            source={{ uri: item.image }}
                        />
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.contentText} numberOfLines={1} ellipsizeMode="tail">{item.message}</Text>

                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{dayjs(item.time).format("HH:MM")}</Text>
                    </View>

                </View>
                <View style={styles.div} />
            </Pressable>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{
                flex: 1,
                marginTop: StatusBar.currentHeight || 0,
            }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <ChatItem item={item} />}
                    keyExtractor={item => item.id}
                    scrollEnabled={true}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'column',
        width: '65%',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 4
    },
    itemContainer: {
        backgroundColor: '#F5F5F5',
        height: height / 12,
        flexDirection: 'row',
        // borderBottomColor: '#606060',
        // borderBottomWidth: 1,
        padding: 3,
    },
    imageContainer: {
        width: '20%',
        // backgroundColor: '#42B79C', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: { width: 60, height: 60, borderRadius: 50 },
    nameText: {
        fontSize: 18,
    },
    contentText: {
        fontSize: 14,
        color: '#353636'
    },
    timeContainer: {
        width: '15%',
        // backgroundColor: '#A5357C',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    timeText: {
        fontSize: 13,
        color: '#696969',
        paddingRight: width * 0.02,
    },
    div: { backgroundColor: '#DCDCDC', width: '95%', height: 1, alignSelf: 'center' }
});

export default Chat;