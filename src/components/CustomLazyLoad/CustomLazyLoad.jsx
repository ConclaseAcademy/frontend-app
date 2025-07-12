import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function CustomLazyLoad({ src, alt, ...props }) {
  return (
        <LazyLoadImage
          alt={alt}
          src={src}
          effect="blur" 
          width="100%"
          height="auto"
          style={{ ...props}}
        />
  );
}
