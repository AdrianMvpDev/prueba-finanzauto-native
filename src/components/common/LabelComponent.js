import React, { useEffect, useRef } from 'react';
import { Text, Animated, StyleSheet } from 'react-native';

export default function LabelComponent({ text, value }) {
  const moveText = useRef(new Animated.Value(value === '' ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(moveText, {
      toValue: value === '' ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [value]);

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -30],
  });

  const animStyle = {
    transform: [{ translateY: yVal }],
  };

  return (
    <Animated.View style={[styles.labelContainer, animStyle]}>
      <Text style={styles.label}>{text}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    justifyContent: 'center',
    height: '100%',
    left: 20,
    zIndex: 2,
  },
  label: {
    color: '#b2b8ba',
    fontSize: 12,
    left: -10,
    backgroundColor: 'white',
    marginHorizontal: 4,
  },
});
