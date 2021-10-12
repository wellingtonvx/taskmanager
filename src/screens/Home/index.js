import React from 'react'
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import { OptionTasksButton } from '../../components/OptionTasksButton'
import { ProjectCar } from '../../components/ProjectCard'
import icons from '../../utils/icons'

import { styles } from './styles'

export const Home = () => {
  return (
    <SafeAreaView style={styles.HomeContainer}>
      {/* <View style={styles.header}>
        <Image style={styles.image} source={icons.menu} />
        <Image style={styles.image} source={icons.user} />
      </View> */}
      <View style={styles.greetings}>
        <Text style={styles.textName}>Olá Wellington</Text>
        <Text style={styles.salution}>Tenha um bom dia.</Text>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: -9 }}>
        <OptionTasksButton nameButton="Minhas Tarefas" />
        <OptionTasksButton nameButton="Em progresso" />
        <OptionTasksButton nameButton="Completas" />
      </View>
      {/**Vai virar um flat list */}
      <ScrollView horizontal={true}>
        <ProjectCar />
        <ProjectCar />
        <ProjectCar />
        <ProjectCar />
      </ScrollView>
      <View>
        <Text>Progresso</Text>
      </View>
    </SafeAreaView>
  )
}
