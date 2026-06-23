import React, { useState } from "react";

function SumCalculator() {
  const [num, setNum] = useState("");
  const [sum, setSum] = useState(0);

  const calculateSum = (value) => {
    let N = parseInt(value);

    if (isNaN(N) || N < 1) {
      setSum(0);
      return;
    }

    let total = 0;

    // Loop to calculate sum
    for (let i = 1; i <= N; i++) {
      total += i;
    }

    setSum(total);
  };

  return (
    <div style={styles.container}>
      <h2>Sum of Numbers from 1 to N</h2>

      <input
        type="number"
        value={num}
        placeholder="Enter N"
        onChange={(e) => {
          setNum(e.target.value);
          calculateSum(e.target.value);
        }}
        style={styles.input}
      />

      <p style={styles.result}>
        {num && sum
          ? `Sum from 1 to ${num} is: ${sum}`
          : "Enter a valid number"}
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    marginTop: "10px",
  },
  result: {
    marginTop: "20px",
    fontSize: "20px",
    color: "blue",
  },
};

export default SumCalculator;