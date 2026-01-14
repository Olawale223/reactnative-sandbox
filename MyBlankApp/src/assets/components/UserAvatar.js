import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {s} from 'react-native-size-matters'
import { Image } from 'react-native'


const UserAvatar = () => {
  return (
    <Image
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1rTLeQraa9s-Rkj2_KMPOzh30CwK1G2D85A&s' }}
      style={styles.avatar}
    />
  )
}

export default UserAvatar

const styles = StyleSheet.create({
    avatar: {
        height: s(32),
        width: s(32),
        borderRadius: s(16),
        right: s(16),
    },
})