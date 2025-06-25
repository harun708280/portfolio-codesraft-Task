import React, { useEffect, useRef, useState } from "react";

const AnimatedCard = () => {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        transition: "background-color 1s ease-in-out",
        backgroundColor: inView ? "#4f46e5" : "#374151", 
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "1rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "2rem",
          width: "100%",
          maxWidth: "600px",
          height: "60vh",
          overflowY: "auto",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", textAlign: "center" }}>
          Scrollable Card Content
        </h2>
        {[...Array(20).keys()].map((i) => (
          <p key={i} style={{ marginBottom: "0.5rem", color: "#374151" }}>
            This is line {i + 1} of scrollable fake content.
          </p>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCard;
