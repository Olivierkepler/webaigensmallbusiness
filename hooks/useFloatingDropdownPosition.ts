import { useEffect, useState, type RefObject } from "react";

export type FloatingDropdownPosition = {
  top: number;
  left: number;
  width: number;
  maxHeight: number;
};

type Options = {
  gap?: number;
  minHeight?: number;
  maxHeight?: number;
  viewportPadding?: number;
};

const DEFAULTS: Required<Options> = {
  gap: 8,
  minHeight: 160,
  maxHeight: 420,
  viewportPadding: 16,
};

export function useFloatingDropdownPosition(
  anchorRef: RefObject<HTMLElement>,
  enabled: boolean,
  options: Options = {}
): FloatingDropdownPosition | null {
  const { gap, minHeight, maxHeight, viewportPadding } = {
    ...DEFAULTS,
    ...options,
  };

  const [position, setPosition] = useState<FloatingDropdownPosition | null>(
    null
  );

  useEffect(() => {
    if (!enabled) {
      setPosition(null);
      return;
    }

    const anchor = anchorRef.current;
    if (!anchor) return;

    let frame = 0;

    const update = () => {
      const el = anchorRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      const top = rect.bottom + gap;
      const available = window.innerHeight - top - viewportPadding;
      const resolvedMaxHeight = Math.max(
        minHeight,
        Math.min(maxHeight, available)
      );

      setPosition({
        top,
        left: rect.left,
        width: rect.width,
        maxHeight: resolvedMaxHeight,
      });
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    scheduleUpdate();

    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("scroll", scheduleUpdate, true);

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(anchor);

    const parent = anchor.parentElement;
    if (parent) resizeObserver.observe(parent);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("scroll", scheduleUpdate, true);
      resizeObserver.disconnect();
    };
  }, [anchorRef, enabled, gap, minHeight, maxHeight, viewportPadding]);

  return position;
}
