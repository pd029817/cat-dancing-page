import { useState, useCallback } from 'react';

export function useAnimation(initialState = true) {
  const [isPlaying, setIsPlaying] = useState(initialState);
  const [danceStyle, setDanceStyle] = useState('bounce');

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const changeDance = useCallback((style) => {
    setDanceStyle(style);
  }, []);

  return { isPlaying, toggle, danceStyle, changeDance };
}
