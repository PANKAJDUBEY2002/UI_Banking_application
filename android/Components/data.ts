import {ChartData} from 'react-native-chart-kit/dist/HelperTypes';

export const barCharData: ChartData = {
   labels:['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5','k','s','k','o'],
   datasets:[
    {
        data:[18,20,22, 24,26,28,32,36,40,44,48],
        colors:[(opacity=1)=> 'purple',(opacity=1)=> 'violet',(opacity=1)=> 'violet',
        (opacity=1)=> 'yellow',(opacity=1)=> 'yellow',(opacity=1)=> 'green',(opacity=1)=> 'green',(opacity=1)=> 'green',(opacity=1)=> 'blue'
        ,(opacity=1)=> 'blue',(opacity=1)=> 'blue'
    ]
    }
   ]
}

