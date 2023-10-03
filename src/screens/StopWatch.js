import React, { useState, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from '../components/timer';
import RoundButton from '../components/roundButton';
import LapsTable from '../components/lapstable';
import ButtonsRow from '../components/buttonsRow';
import LapDisplay from '../components/lapdisplay';
import CircleButton from '../components/CircleButton';

// import { collection, addDoc } from 'firebase/firestore';
// import { auth, db } from '../utils/firebase';

// const handlePress = () => {
//   const ref = db.collection('Lap');
//   ref.add({
//     bodyText: 'Hello',
//   })
//     .then((docRef) => {
//       console.log('Created!', docRef.data());
//     })
//     .catch((error) => {
//       console.log('Error!', error);
//     });
// }

export default class StopWatch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now: 0,
      laps: [],
    };
  };
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  start = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
      laps: [0],
    });
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()});
    }, 100)
  };

  lap = () => {
    const timeStamp = new Date().getTime()
    const { laps, now, start } = this.state
    const [firstLap, ...other] = laps
    this.setState({
      laps: [0, firstLap + now - start, ...other],
      start: timeStamp,
      now: timeStamp,
    });
  };

  stop = () => {
    clearInterval(this.timer)
    const { laps, now, start } = this.state
    const [ firstLap, ...other ] = laps
    this.setState({
      laps: [firstLap + now - start, ...other],
      start: 0,
      now: 0,
    });
  };

  reset = () => {
    this.setState({
      laps: [],
      start: 0,
      now: 0,
    });
  };

  resume = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
    });
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 100);
  };

  render () {
    const { now, start, laps } = this.state
    const timer = now - start
    return (
      <View style={styles.container}>
        <CircleButton
          title='Save'
          color='#ffffff'
          background='blue'
          onPress={() => {}}
        />
        <Text style={styles.spritText}>Sprit</Text>
        <Timer
          interval={laps.reduce((total, curr) => total + curr, 0) + timer}
          style={styles.timer}
        />
        <Text style={styles.title}>Lap</Text>
        <LapDisplay />

        {laps.length === 0 && (
          <ButtonsRow>
            <RoundButton 
              title='Lap'
              color='#8b8b90'
              background='#151515'
              disable
            />
            <RoundButton 
              title='Start'
              color='#50d167'
              background='#1b361f'
              onPress={this.start}
            />
          </ButtonsRow>
        )}

        {start > 0 && (
          <ButtonsRow>
            <RoundButton 
              title='Lap'
              color='#ffffff'
              background='#3d3d3d'
              onPress={this.lap}
            />
            <RoundButton 
              title='Stop'
              color='#e33935'
              background='#3c1715'
              onPress={this.stop}
            />
          </ButtonsRow>
        )}

        {laps.length > 0 && start === 0 && (
          <ButtonsRow>
            <RoundButton 
              title='Reset'
              color='#ffffff'
              background='#3d3d3d'
              onPress={this.reset}
            />
            <RoundButton 
              title='Start'
              color='#50d167'
              background='#1b361f'
              onPress={this.resume}
            />
          </ButtonsRow>
        )}

        <LapsTable laps={laps} timer={timer}/>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: 130,
    paddingHorizontal: 20,
  },
  timer: {
    color: '#ffffff',
    fontSize: 65,
    fontWeight: '200',
    width: 95,
  },
  spritText: {
    color: '#ffffff',
  },
  title: {
    color: '#ffffff',
  },
  lapdisplay: {
    color: '#ffffff',
    backgroundColor: 'blue',
  },
});
