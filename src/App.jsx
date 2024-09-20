import  { useState } from 'react';
import './App.css'; // นำเข้า CSS อย่างถูกต้อง

const PigGame = () => {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100); // เริ่มต้นขนาดรูปหมู
  const [image, setImage] = useState('/images/TSNBg3wSBdng7ijMhT0ud4HrQYofJjJy8QCa8JSD8VY copy.jpg'); // รูปหมูเริ่มต้น

  const handleFeed = (food) => {
    let levelIncrease = 0;

    if (food === 'watermelon') levelIncrease = 5;
    else if (food === 'pumpkin') levelIncrease = 10;
    else if (food === 'grass') levelIncrease = 20;

    const newLevel = level + levelIncrease;

    setLevel(newLevel);
    setSize(size + levelIncrease * 2); // เพิ่มขนาดรูปหมูตาม level

    // เปลี่ยนรูปเมื่อ level เกิน 100
    if (newLevel > 100) {
      setImage('/images/42a8220a-d2e4-4e11-b00f-a382f06cf43b.jpg'); // ลิงก์รูปภาพที่เปลี่ยน
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>PigGame</h1>
      <h2 style={styles.level}>Level: {level}</h2>
      <img
        src={image}
        alt="หมู"
        style={{ width: `${size}px`, height: `${size}px`, borderRadius: '50%', border: '5px solid white' }} // กำหนดขนาดรูปหมู
      />
      <div>
        <button style={styles.button} onClick={() => handleFeed('watermelon')}>แตงโม +5</button>
        <button style={styles.button} onClick={() => handleFeed('pumpkin')}>ฟักทอง +10</button>
        <button style={styles.button} onClick={() => handleFeed('grass')}>หญ้า +20</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black',
    textAlign: 'center',
  },
  title: {
    color: '#ffcc00',
    fontSize: '3rem',
    marginBottom: '20px',
    textShadow: '2px 2px 4px #ff0000',
    fontFamily: 'Comic Sans MS, cursive',
  },
  level: {
    color: '#00ffff',
    fontSize: '1.8rem',
    textShadow: '1px 1px 3px #ff66ff',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    margin: '10px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }
};

export default PigGame;
