import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {

  const [image, setImage] = useState(null);
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log(result);
  
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.appname}>App de Finanças</Text>

        <TouchableOpacity onPress={pickImage} activeOpacity={0.7} style={styles.buttonUser} >
          <MaterialIcons name='add-photo-alternate' style={{ position: 'relative' }} size={27} color='white' />
          {image && <Image source={{ uri: image }} style={{ width: 50, height: 50, borderRadius: 50/ 2, position: 'absolute' }} />}
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
    paddingTop: statusBarHeigth,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  appname: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  buttonUser: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50 / 2,
  }
})