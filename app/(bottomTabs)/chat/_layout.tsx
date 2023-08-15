import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitle: 'Chats',
        headerStyle: {
          backgroundColor: '#F5F5F5',
        },
        headerTintColor: '#404040',
        headerTitleStyle: {
          fontSize: 28,
          fontWeight: '500',
        },
      }}
    />
  )
}
export default Layout
