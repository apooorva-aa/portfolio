import { AnimatePresence, Variants, motion } from "framer-motion";

export function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#14b8a6",
    },
  };

  return (
    <AnimatePresence>
      {/* <motion.svg
        viewBox="0 0 450 450"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-teal-500 stroke-teal-500 dark:fill-teal-200"
      >
        <motion.path
          d="M321.955 420L179.465 127.143L224.998 36.1755L416.91 420H321.955ZM204.867 263.253L128.055 420H33.0897L158.769 168.608L204.867 263.253Z"
          
          
          strokeWidth="15"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg> */}
      <motion.svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        className="h-full w-full fill-teal-500 stroke-teal-500 dark:fill-teal-200 "
      >
        <title>new-logo</title>
        <motion.polygon
          points="271.63 141.88 390.83 348.34 353.99 412.16 271.63 269.52 128.94 516.66 293.65 516.66 256.8 580.49 18.4 580.49 271.63 141.88"
          strokeWidth="15"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.polygon
          points="524.77 141.88 778 580.49 539.62 580.49 502.76 516.66 667.45 516.66 524.77 269.52 442.43 412.15 405.58 348.33 524.77 141.88"
          strokeWidth="15"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M361.35,502.79l-53,91.74-36.85,63.82H524.86L488,594.53h0l-53-91.74v0L398.2,439Zm53,91.74H382.08L398.2,566.6Z"
          strokeWidth="15"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
