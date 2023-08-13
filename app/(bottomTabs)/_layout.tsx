import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { EvilIcons, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function tabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="card"
        options={{
          title: "抽卡",
          href: "/card",
          tabBarActiveTintColor: "#404040",
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {
                  focused
                    ? <MaterialCommunityIcons name="card-text" size={24} color="#404040" />
                    : <MaterialCommunityIcons name="card-text-outline" size={24} color="#404040" />
                }
              </>)
          },
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "聊天室",
          href: "/chat",
          tabBarActiveTintColor: "#404040",
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {
                  focused
                    ? <FontAwesome name="commenting" size={24} color="#404040" />
                    : <FontAwesome name="commenting-o" size={24} color="#404040" />
                }
              </>)
          },
        }}
      />
      <Tabs.Screen
        name="personal"
        options={{
          title: "個人",
          href: "/personal",
          tabBarActiveTintColor: "#404040",
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {
                  focused
                    ? <Ionicons name="person-circle-sharp" size={24} color="#404040" />
                    : <Ionicons name="person-circle-outline" size={24} color="#404040" />
                }
              </>)
          },
        }}
      />
    </Tabs>
  );
}