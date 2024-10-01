import { useEffect, useState } from "react";

import styles from "./App.module.css";

interface Player {
  pos: { x: number; y: number };
}

const Player = (props: Player) => {
  const pos = {
    player: {
      left: props.pos.x,
      top: props.pos.y,
    },
  };

  return <div className={styles.player} style={pos.player}></div>;
};

const App = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (pos.x > 400 - 10 - 3) {
        setPos({ x: 0, y: pos.y });
      } else {
        setPos({ x: pos.x + 3, y: pos.y });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [pos]);

  return (
    <div className={styles.game}>
      <Player pos={pos} />
    </div>
  );
};

export default App;
