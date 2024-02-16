import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {barCharData} from './data';
//import { styles } from 'react-native-gifted-charts/src/LineChart/styles';

export default function BarCharte() {
    const {width} = useWindowDimensions();
    const usdValue = 1682.55;
    
  
    const formattedUSD = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(usdValue);
   return (
    <View style={styles.arrange}>
      <View>
        <View>
          <Text style={styles.activity}>Weekly Activity</Text>
        </View>
        <View>
        <Text style={styles.currency}>+{formattedUSD} Daily Cash</Text>
        </View>
        </View>
        
        <View style={styles.bar}>
        <BarChart
        data={barCharData}
        yAxisLabel=''
        yAxisSuffix=''
        width={250}
        height={100}
        chartConfig={{
            backgroundGradientFrom:'white',
            backgroundGradientFromOpacity: 0.5,
            backgroundGradientTo:'white',
            backgroundGradientToOpacity: 1,
            color:()=> 'white',
            barPercentage: 0.2,
                   
           

        }}
        style={{borderColor:'white', borderWidth:1}}
        withInnerLines={false}
       
        showValuesOnTopOfBars
        showBarTops={false}
        withCustomBarColorFromData
        flatColor
       />
    </View>
    <View>
    <View style={styles.bor}>
     <Text style={styles.text}>Pay Early</Text>
   </View>
    </View>
    </View>
   )
}

const styles = StyleSheet.create({
    arrange: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 20
    },
    text: {
       fontSize: 22,
      
       
       color: 'black'
      
      
    },
    currency: {
      fontSize: 12,
      color: 'black',
      marginLeft: 25
    },
    activity: {
      marginLeft: 25,
      color: '#2C3335',
      fontWeight: 'bold',
      

    },
    bar: {
           
           marginLeft: -220,
           paddingRight: 40,
           paddingTop: 20           
           
           
           
    },
    bor: {
       backgroundColor: '#EAF0F1',
       marginTop: 40,
       paddingLeft: 30,
       height: 50,
       width: 150,
       paddingTop: 8,
       borderRadius: 124,
       marginLeft: 20
       
    },
    
    
  })

