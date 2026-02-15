/**
 * Scroll-triggered transition presets inspired by modern padel/club sites.
 * Smooth fade-in-up, gentle easing, staggered children.
 */

export const viewportDefault = { once: true, margin: "-60px" as const };

/** Easing: smooth deceleration */
export const easeSmooth = [0.22, 0.61, 0.36, 1] as const;

/** Section heading / block: fade-in-up (initial visible so sections never hidden) */
export const transitionSection = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportDefault,
  transition: { duration: 0.6, ease: easeSmooth },
};

/** Card / list item: stagger delay in ms */
export const staggerDelay = 80;

/** Single element fade-in-up with optional delay (initial visible so content never hidden) */
export function transitionItem(delay = 0) {
  return {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: viewportDefault,
    transition: { duration: 0.55, delay: delay / 1000, ease: easeSmooth },
  };
}

/** Staggered item by index */
export function transitionStagger(index: number) {
  return transitionItem(index * staggerDelay);
}
