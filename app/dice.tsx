import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  // Define your props here
}

const DiceGenerator: React.FC<Props> = () => {
  const [diceNumber, setDiceNumber] = useState<number | null>(null);

  const rollDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(random);
  };

  return (
    <Pressable style={styles.container} onPress={rollDice}>
      {diceNumber === null ? (
        <Text style={styles.startText}>Touch the Screen To Start</Text>
      ) : (
        <Text style={styles.number}>{diceNumber}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    color: '#FFA94D',
    fontSize: 22,
  },
  number: {
    fontSize: 400,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DiceGenerator;
