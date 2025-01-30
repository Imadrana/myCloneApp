//Fazan Khan
 
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
 
export default function App() {
  const [input, setInput] = useState('');
 
  const handlePress = (value: string) => setInput(input + value);
  const handleCall = () => alert(`Calling ${input}...`);
  const handleDelete = () => setInput(input.slice(0, -1));
 
  const dialPad = [
    { number: '1', letters: '' },
    { number: '2', letters: 'ABC' },
    { number: '3', letters: 'DEF' },
    { number: '4', letters: 'GHI' },
    { number: '5', letters: 'JKL' },
    { number: '6', letters: 'MNO' },
    { number: '7', letters: 'PQRS' },
    { number: '8', letters: 'TUV' },
    { number: '9', letters: 'WXYZ' },
    { number: '*', letters: '' },
    { number: '0', letters: '+' },
    { number: '#', letters: '' },
  ];


//Hassan Mir this is test
  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>

      <View style={styles.dialPad}>
        {dialPad.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handlePress(item.number)}
          >
            <Text style={styles.number}>{item.number}</Text>
            <Text style={styles.letters}>{item.letters}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.callArea}>
        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <Text style={styles.callButtonText}>📞</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={handleDelete}>
          <Text style={styles.backButtonText}>⌫</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.navigationBar, { bottom: 50 }]}>
        <Text style={styles.navText}>Favorites</Text>
        <Text style={styles.navText}>Recents</Text>
        <Text style={styles.navText}>Contacts</Text>
        <Text style={[styles.navText, styles.activeNav]}>Keypad</Text>
        <Text style={styles.navText}>Voicemail</Text>
      </View>
    </View>
  );
}

//Imad Rana 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 32,
    marginBottom: 20,
  },
  dialPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    width: 80,
    height: 80,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 40,
  },
  number: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  letters: {
    fontSize: 12,
    color: 'gray',
  },
  callArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '60%',
  },
  callButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  callButtonText: {
    fontSize: 36,
    color: 'white',
  },
  backButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 36,
    color: 'black',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
  },
  navText: {
    fontSize: 12,
    color: 'gray',
  },
  activeNav: {
    color: 'blue',
  },
});