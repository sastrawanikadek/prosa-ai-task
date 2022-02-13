import React from "react";
import styles from "./Ripple.module.css";

const Ripple: React.FC = () => {
  const [rippleChildren, setRippleChildren] = React.useState<JSX.Element[]>([]);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const childrenRef = React.useRef(rippleChildren);

  React.useEffect(() => {
    let i = 0;

    const createRipple = (e: MouseEvent) => {
      const { top, left, height, width } =
        rootRef.current.offsetParent.getBoundingClientRect();

      const posX = e.clientX - left;
      const posY = e.clientY - top;
      const size = width <= height ? height : width;

      const ripple = (
        <span
          key={`ripple-${i++}`}
          className={styles.ripple}
          style={{
            width: size,
            height: size,
            top: posY - size * 0.5,
            left: posX - size * 0.5,
          }}
          onAnimationEnd={(e) => {
            const idx = Array.from(
              (e.target as HTMLSpanElement).parentNode.children
            ).indexOf(e.target as HTMLSpanElement);
            const tempArray = [...childrenRef.current];
            tempArray.splice(idx, 1);
            childrenRef.current = tempArray;
            setRippleChildren(tempArray);
          }}
        ></span>
      );
      const tempArray = [...childrenRef.current];
      tempArray.push(ripple);
      childrenRef.current = tempArray;
      setRippleChildren(tempArray);
    };

    if (rootRef.current) {
      const parent = rootRef.current.offsetParent;
      parent.addEventListener("mousedown", createRipple);

      return () => parent.removeEventListener("mousedown", createRipple);
    }
  }, [rootRef]);

  return (
    <div ref={rootRef} className={styles.root}>
      {rippleChildren}
    </div>
  );
};

export default Ripple;
