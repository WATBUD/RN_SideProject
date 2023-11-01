import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        title: 'ChatStackTitle',
        headerLargeStyle: { backgroundColor: '#fff' },
      }}
    />
  )
}
export default Layout
