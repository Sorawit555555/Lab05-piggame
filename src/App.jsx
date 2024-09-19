import  { useState } from 'react';
import './app.css';



const PigGame = () => {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100); // เริ่มต้นขนาดรูปหมู (ทั้งกว้างและสูง)
  const [image, setImage] = useState('src/TSNBg3wSBdng7ijMhT0ud4HrQYofJjJy8QCa8JSD8VY copy.jpg'); // รูปหมูเริ่มต้น

  const handleFeed = (food) => {
    let levelIncrease = 0;

    if (food === 'watermelon') levelIncrease = 5;
    else if (food === 'pumpkin') levelIncrease = 10;
    else if (food === 'grass') levelIncrease = 20;

    const newLevel = level + levelIncrease;

    setLevel(newLevel);
    setSize(size + levelIncrease * 2); // เพิ่มขนาดทั้งกว้างและสูงตามการเพิ่ม Level

    // ถ้า Level เกิน 100 เปลี่ยนเป็นรูปภาพของตนเอง
    if (newLevel > 100) {
      setImage('src/42a8220a-d2e4-4e11-b00f-a382f06cf43b.jpg'); // ลิงก์รูปภาพของคุณเอง
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>PigGame</h1>
      <h2 style={styles.text}>Level: {level}</h2>
      <img
        src={image}
        alt="หมู"
        style={{ width: `${size}px`, height: `${size}px`, borderRadius: '50%', border: '5px solid white' }} // ขยายขนาดทั้งกว้างและสูงเท่ากัน
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
    color: '#ffcc00', // สีเหลืองสดใส
    fontSize: '3rem',
    marginBottom: '20px',
    textShadow: '2px 2px 4px #ff0000', // เงาฟอนต์สีแดง
    fontFamily: 'Comic Sans MS, cursive', // ฟอนต์ที่ดูสนุกสนาน
  },
  level: {
    color: '#00ffff', // สีฟ้าอมเขียว
    fontSize: '1.8rem',
    textShadow: '1px 1px 3px #ff66ff', // เงาสีชมพู
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
  },
  buttonHover: {
    backgroundColor: '#ff8533',
  }
};

export default PigGame;
