import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  delay?: number;
}

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function AnimatedHeading({ 
  children, 
  className, 
  variant = "h1", 
  delay = 0 
}: AnimatedHeadingProps) {
  const Component = motion[variant];
  
  return (
    <Component
      className={cn(className)}
      initial="hidden"
      animate="visible"
      variants={headingVariants}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.55, 1.4],
      }}
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </Component>
  );
}