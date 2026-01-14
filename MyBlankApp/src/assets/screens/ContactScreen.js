import { StyleSheet, View, SafeAreaView } from 'react-native'
import React from 'react'
import ContactBar from '../ContactBar'
import WIcon from '../WIcon'
import TIcon from '../TIcon'
import TtIcon from '../TtIcon'
import IgIcon from '../IgIcon'
import Send from '../Send'
import SIcon from '../SIcon'
import UserAvatar from '../components/UserAvatar'
import BackButton from '../components/BackButton'

const ContactScreen = () => {
  const contacts = [
    { label: 'WhatsApp', icon: WIcon },
    { label: 'Telegram', icon: TIcon },
    { label: 'Twitter', icon: TtIcon },
    { label: 'Instagram', icon: IgIcon },
    { label: 'Snapchat', icon: SIcon },
  ]

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>

      <View style={styles.container}>
        {contacts.map((item, index) => (
          <ContactBar
            key={index}
            label={item.label}
            LeftIcon={item.icon}
            RightIcon={Send}
          />
        ))}
      </View>
    </SafeAreaView>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,        
    gap: 24,
  },
})