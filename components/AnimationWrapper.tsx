"use client";

import { HTMLMotionProps } from "motion/react";
import * as motion from "motion/react-client";

type AnimationWrapperProps = {
  className?: string;
  children: React.ReactNode;
  animation: HTMLMotionProps<"div">;
};

const AnimationWrapper = ({
  className,
  children,
  animation,
}: AnimationWrapperProps) => {
  return (
    <motion.div {...animation} className={className}>
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
