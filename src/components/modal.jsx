// AgeModal.js
import React from "react";

const AgeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleYes = () => {
    // Close modal and allow access to forms
    onClose();
    console.log("Access granted to intake forms and service pathways");
    // You can redirect or render forms here
  };

  const handleNo = () => {
    // Redirect to Youth & Safeguarding Support Guide
    window.location.href = "/youth-safeguarding-guide"; // replace with your URL
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Are you aged 18 or over?</h2>
        <p>Select an option to continue</p>

        <div style={styles.options}>
          <button onClick={handleYes} style={styles.yesBtn}>
            Yes — I confirm I am 18 or older
          </button>
          <button onClick={handleNo} style={styles.noBtn}>
            No — I am under 18
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fff",
    padding: "90px",
    borderRadius: "8px",
    maxWidth: "800px",
    textAlign: "center",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
  yesBtn: {
  padding: "10px",
  background: "linear-gradient(90deg, #4caf50, #81c784)", // green gradient
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
},

noBtn: {
  padding: "10px",
  background: "linear-gradient(90deg, #f44336, #e57373)", // red gradient
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
},

};

export default AgeModal;
