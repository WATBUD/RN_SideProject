import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        title: 'Chats',
        headerLargeStyle: { backgroundColor: '#fff' },
      }}
    />
  )
}
export default Layout
