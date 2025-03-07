"use client";

import { HTMLMotionProps } from "motion/react";
import * as motion from "motion/react-client";

type AnimationWrapperProps = {
  className?: string;
  children: React.ReactNode;
  animation: HTMLMotionProps<"div">;
  style?: React.CSSProperties;
};

const AnimationWrapper = ({
  className,
  children,
  animation,
  style,
}: AnimationWrapperProps) => {
  return (
    <motion.div {...animation} className={className} style={style}>
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
