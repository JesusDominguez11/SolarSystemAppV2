// MusicPlayerContext.js
import React, { createContext, useState, useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

export const MusicPlayerContext = createContext();

const tracks = [
  require('../../soundtracks/dream.mp3'),
  require('../../soundtracks/hammer.mp3'),
  require('../../soundtracks/home_serenity.mp3'),
  require('../../soundtracks/Hypnos.mp3'),
  require('../../soundtracks/Infinite_Horizons_FiftySounds.mp3'),
  require('../../soundtracks/letter-to-you.mp3'),
  require('../../soundtracks/new-dawn.mp3'),
  require('../../soundtracks/no-gravity.mp3'),
  require('../../soundtracks/Reflections_in_the_Mirror.mp3'),
  require('../../soundtracks/strange_day.mp3'),
  require('../../soundtracks/sweet_memories.mp3'),
  require('../../soundtracks/Themis.mp3'),
  require('../../soundtracks/times.mp3'),
  require('../../soundtracks/waiting_for.mp3'),
];

function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export const MusicPlayerProvider = ({ children }) => {
  const [sound, setSound] = useState(null);
  const playlistRef = useRef([]);
  const indexRef = useRef(0);

  const playNext = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const nextTrack = playlistRef.current[indexRef.current];

    const { sound: newSound } = await Audio.Sound.createAsync(nextTrack);
    setSound(newSound);

    newSound.setOnPlaybackStatusUpdate(async (status) => {
      if (status.didJustFinish && !status.isLooping) {
        indexRef.current++;
        if (indexRef.current >= playlistRef.current.length) {
          // Reiniciar la lista mezclada
          playlistRef.current = shuffleArray(tracks);
          indexRef.current = 0;
        }
        playNext();
      }
    });

    await newSound.playAsync();
  };

  useEffect(() => {
    const init = async () => {
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
      });

      playlistRef.current = shuffleArray(tracks);
      indexRef.current = 0;
      playNext();
    };

    init();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  return (
    <MusicPlayerContext.Provider value={{}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};
