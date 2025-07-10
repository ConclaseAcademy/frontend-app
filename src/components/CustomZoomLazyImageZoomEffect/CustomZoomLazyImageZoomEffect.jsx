import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function CustomZoomLazyImageZoomEffect({ src, alt, ...props }) {
  return (<div
      style={{
        overflow: "hidden",
        borderRadius: "12px",
        display: "inline-block",
        ...props.style,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          display: "block",
        }}
      >
        <LazyLoadImage
          alt={alt}
          src={src}
          effect="blur" 
          width="100%"
          height="auto"
          style={{ display: "block" }}
        />
      </motion.div>
    </div>
  );
}
