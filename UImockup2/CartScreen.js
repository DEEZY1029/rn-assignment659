import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, FlatList,Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

 export default function CartScreen () {
  const paw =[
    { index:1,
   image: require('./assets/dress1.png')
    },
    { index:1,
      image: require('./assets/dress2.png')
       },
  ];
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.positioning}>
      <Text style={styles.quicksandRegular}> Open fashion</Text>
     <Pressable style={{right: 150}} onPress={() => navigation.navigate('Checkout')}><Ionicons name="menu-outline" size={40} color="black"/></Pressable>
     <Pressable style={{left: 110, top: -35}}><Ionicons name="search-outline" size={30} color="black"/></Pressable>
     <Pressable style={{left: 150, top: -67}}><Ionicons name="bag-outline" size={30} color="black"/></Pressable>
     <Text style={{fontSize: 40, fontWeight:'bold',right:100, top: -20}}> Our Story</Text>
     <Pressable style={styles.filter}><Ionicons name="filter-outline" size={25} color="orange"/></Pressable>
     <Pressable style={styles.list}><Ionicons name="list-outline" size={25} color="black"/></Pressable>
      <StatusBar style="auto" />
      </View>
      <FlatList
      horizontal={true}
      data={paw}
      renderItem={({item})=>(<View style={styles.conco}><Image source={item.image} style={styles.dresses} />
      </View>)}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  positioning: {
    alignItems:'center',
    top: 40
  },
  filter: {
    left: 150,
    top: -57,
    backgroundColor: '#F2F2F3',
    borderRadius:20,
    width:40,
    height: 40,
    justifyContent:'center',
    alignItems:'center'
  },
   list: {
    left: 100,
    top: -97,
    backgroundColor: '#F2F2F3',
    borderRadius:20,
    width:40,
    height: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  dresses:{
    left: 10,
    marginHorizontal:10
  },
  quicksandRegular:{
    fontFamily:'Gothic'
  }
});