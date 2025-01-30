import { motion } from 'framer-motion';
import { useEffect, useState, useRef, useCallback } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Marquee({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [multiplier, setMultiplier] = useState(1);

  const calculateMultiplier = useCallback(() => {
    if (!containerRef.current || !marqueeRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const marqueeRect = marqueeRef.current.getBoundingClientRect();

    const containerWidth = containerRect.width;
    const marqueeWidth = marqueeRect.width;

    if (marqueeWidth < containerWidth) {
      setMultiplier(Math.ceil(containerWidth / marqueeWidth));
    } else {
      setMultiplier(1);
    }
  }, []);

  useEffect(() => {
    calculateMultiplier();
    if (marqueeRef.current && containerRef.current) {
      const resizeObserver = new ResizeObserver(() => calculateMultiplier());
      resizeObserver.observe(marqueeRef.current);
      resizeObserver.observe(containerRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [calculateMultiplier]);

  const multiplyChildren = useCallback(
    (multiplier: number) => {
      const arraySize = multiplier >= 0 ? multiplier : 0;
      return [...Array(arraySize)].map(() => <>{children}</>);
    },
    [children]
  );

  const marqueeAnimation = {
    x: ['0%', '-100%'],

    transition: {
      duration: 8,
      ease: 'linear',
      repeat: Infinity,
    },
  };

  return (
    <div
      ref={containerRef}
      className='flex basis-auto shrink-0 grow-0 overflow-x-hidden w-full'
    >
      <motion.div
        animate={marqueeAnimation}
        className='flex shrink-0 grow-0 basis-auto overflow-x-hidden min-w-fit'
      >
        <div ref={marqueeRef} className='flex shrink-0 grow-0 basis-auto '>
          {children}
        </div>
        {multiplyChildren(multiplier - 1)}
      </motion.div>
      <motion.div
        animate={marqueeAnimation}
        className='flex shrink-0 grow-0 basis-auto overflow-x-hidden min-w-fit'
      >
        {multiplyChildren(multiplier)}
      </motion.div>
    </div>
  );
}
