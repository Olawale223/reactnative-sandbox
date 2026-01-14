import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContactBar from '../ContactBar'

const ContactLayout = () => {
  return (
    <ContactBar
      label="Contact"
      LeftIcon={WIcon}
      RightIcon={null}
    />
  )
}

export default ContactLayout

const styles = StyleSheet.create({})