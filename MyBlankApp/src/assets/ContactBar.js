import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const ContactBar = ({
  label,
  LeftIcon,
  RightIcon,
  
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.left} >
        {LeftIcon && <LeftIcon width={20} height={20} />}
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.right} >
        {RightIcon && <RightIcon width={20} height={20} color="#fff" />}
      </TouchableOpacity>
    </View>
  )
}

export default ContactBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#d7d8d8',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 48,              
    backgroundColor: '#fff',
    marginTop: 16,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  text: {
    fontSize: 14,
    color: '#000000',
  },
  divider: {
    flex: 1,
    marginHorizontal: 10,
  },
  right: {
    backgroundColor: '#1DA1F2',
    padding: 8,
    borderRadius: 20,
  },
})

