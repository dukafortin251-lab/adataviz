// src/Card.jsx

export default function Card({ evenement }) {
  return (
    <div
      className="carte"
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        width: "280px",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={evenement.cover_url}
        alt={evenement.title}
        style={{
          width: "100%",
          height: "120px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
      <h4 style={{ margin: "10px 0", fontSize: "16px", minHeight: "38px" }}>
        {evenement.title}
      </h4>
      <p
        style={{
          fontSize: "12px",
          color: "#666",
          height: "50px",
          overflow: "hidden",
        }}
      >
        {evenement.lead_text}
      </p>
      <p style={{ fontSize: "13px", fontWeight: "bold" }}>
        📍 {evenement.address_name}
      </p>
      <span
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "4px 8px",
          fontSize: "12px",
          borderRadius: "4px",
          backgroundColor:
            evenement.price_type === "gratuit" ? "#2ed573" : "#ffa502",
          color: "#fff",
          textTransform: "uppercase",
        }}
      >
        {evenement.price_type}
      </span>
    </div>
  )
}