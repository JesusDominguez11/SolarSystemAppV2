// MusicPlayerContext.js
import React, { createContext, useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const loadSound = async () => {
      if (!sound) {
        const { sound: newSound } = await Audio.Sound.createAsync(
          require('../../soundtracks/dream.mp3')
        );
        setSound(newSound);
        await newSound.setIsLoopingAsync(true);
        await newSound.playAsync();
      }
    };

    const fadeOutAndUnloadSound = async () => {
      if (sound) {
        for (let volume = 1; volume >= 0; volume -= 0.1) {
          await sound.setVolumeAsync(volume);
          await new Promise((resolve) => setTimeout(resolve, 100)); // Pausa entre cada paso
        }
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
      }
    };

    loadSound();

    return () => {
      fadeOutAndUnloadSound();
    };
  }, [sound]);

  return (
    <MusicPlayerContext.Provider value={{}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};
