import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Menu from './android/Components/Menu'
import DebitCard from './android/Components/DebitCard'

import CardBalance from './android/Components/CardBalance'
import Bar from './android/Components/Bar'

import SavingCard from './android/Components/SavingCard'
import Transaction from './android/Components/Transaction'
import Cofee from './android/Components/Cofee'
import Apple from './android/Components/Apple'
import Search from './android/Components/Search'
import BarCharte from './android/Components/BarCharte'




const App = () => {
  return (
    <SafeAreaView>
       <ScrollView>
        <Menu />
        <DebitCard />
        <CardBalance />
      <BarCharte />
        <SavingCard />
        <Transaction />
        <Cofee />
        <Apple />
       </ScrollView>
    </SafeAreaView>
  )
}

export default App
