import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          title: 'Profile',
          headerLargeStyle: { backgroundColor: '#fff' },
        }}
      />
    </>
  )
}
export default Layout
