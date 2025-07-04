import { useEffect, useState } from "react";

export default function useCountUp({ end, duration = 1200, format }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setValue(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [end, duration]);

  if (format) return format(value);
  return value.toLocaleString();
} 