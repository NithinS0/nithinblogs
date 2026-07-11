import { useEffect, useRef } from 'react';

interface TypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export const useTypewriter = ({
  text,
  speed = 50,
  delay = 0,
  onComplete
}: TypewriterOptions) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    
    // Clear initial content immediately
    if (elementRef.current) {
      elementRef.current.textContent = '';
    }

    const typeNextChar = () => {
      if (!elementRef.current) return;
      
      if (currentIndex < text.length) {
        elementRef.current.textContent += text[currentIndex];
        currentIndex++;
        timeoutId = setTimeout(typeNextChar, speed + Math.random() * 30); // slight random delay for realism
      } else {
        if (onComplete) onComplete();
      }
    };

    timeoutId = setTimeout(typeNextChar, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay, onComplete]);

  return elementRef;
};
