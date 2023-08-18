import React, { useState } from 'react'
import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'
import { Foundation } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
// import Toast from '@ant-design/react-native/lib/toast'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Personal = () => {
  const router = useRouter()
  const gender = 'M'
  return (
    <>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: height * 0.15,
          }}>
          <View
            style={{
              width: width * 0.4,
              alignSelf: 'center',
            }}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{
                uri: 'https://d.newsweek.com/en/full/1979380/dog-running-through-autumn-leaves.jpg',
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              width: width * 0.6,
            }}>
            <Text style={{ fontSize: 24, color: '#696969' }}>Name</Text>
            <View
              style={{
                backgroundColor: '#D3D3D3',
                width: 60,
                alignItems: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                marginVertical: 5,
              }}>
              {gender === 'M' ? (
                <Foundation
                  name="male-symbol"
                  size={18}
                  color="blue"
                  style={{ paddingHorizontal: 5 }}
                />
              ) : (
                <Foundation
                  name="female-symbol"
                  size={18}
                  color="pink"
                  style={{ paddingHorizontal: 5 }}
                />
              )}
              <Text style={{ paddingHorizontal: 5 }}>Age</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Edit</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Preview</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.div} />
        <View
          style={{
            backgroundColor: '#FFF',
            width: '90%',
            alignSelf: 'center',
            marginVertical: 10,
            paddingVertical: 5,
            borderRadius: 5,
          }}>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 5,
              justifyContent: 'space-between',
            }}
            onPress={() => console.log('suggest')}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons
                name="app-registration"
                size={24}
                color="#696969"
              />
              <Text style={{ paddingLeft: 5, color: '#696969' }}>
                Preferences Suggested
              </Text>
            </View>
          </Pressable>
          <View style={styles.div} />

          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 5,
              justifyContent: 'space-between',
            }}
            onPress={() => console.log('Help & Support')}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons name="help" size={24} color="#696969" />
              <Text style={{ paddingLeft: 5, color: '#696969' }}>
                Help & Support
              </Text>
            </View>
          </Pressable>
          <View style={styles.div} />

          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 5,
              justifyContent: 'space-between',
            }}
            onPress={() => console.log('setting')}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons name="settings" size={24} color="#696969" />
              <Text style={{ paddingLeft: 5, color: '#696969' }}>Setting</Text>
            </View>
          </Pressable>
          <View style={styles.div} />
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 5,
              justifyContent: 'space-between',
            }}
            onPress={() => router.replace('/LoginScreen')}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons name="logout" size={24} color="#696969" />
              <Text style={{ paddingLeft: 5, color: '#696969' }}>Logout</Text>
            </View>
          </Pressable>
          <View style={styles.div} />
        </View>
      </ScrollView>
    </>
  )
}

export default Personal

const styles = StyleSheet.create({
  imageContainer: {
    width: '30%',
    // backgroundColor: '#42B79C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 500,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 18,
  },
  div: {
    backgroundColor: '#DCDCDC',
    width: '90%',
    height: 1,
    alignSelf: 'center',
    // marginVertical: 0,
  },
  button: {
    borderWidth: 1,
    borderColor: '#696969',
    borderRadius: 15,
    padding: 2,
    margin: 2,
    width: width * 0.2,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#696969',
    alignSelf: 'center',
    justifyContent: 'center',
  },
})
