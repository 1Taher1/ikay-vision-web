
import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export function useInView(
  options: IntersectionObserverOptions = {}
): { ref: RefObject<Element>; inView: boolean } {
  const [ref, setRef] = useState<Element | null>(null);
  const [inView, setInView] = useState<boolean>(false);

  const { root = null, rootMargin = '0px', threshold = 0, triggerOnce = false } = options;

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting || !triggerOnce) {
          setInView(isIntersecting);
        }

        if (isIntersecting && triggerOnce && observer) {
          observer.unobserve(ref);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, root, rootMargin, threshold, triggerOnce]);

  return { ref: setRef as unknown as RefObject<Element>, inView };
}
