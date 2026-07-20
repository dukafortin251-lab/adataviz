/* src/Card.css */
.carte {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  width: 280px;
  background-color: #fff;
}

.carte-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
}

.carte-titre {
  margin: 10px 0;
  font-size: 16px;
  min-height: 38px;
}

.carte-description {
  font-size: 12px;
  color: #666;
  height: 50px;
  overflow: hidden;
}

.carte-adresse {
  font-size: 13px;
  font-weight: bold;
}

.carte-badge {
  display: inline-block;
  margin-top: 10px;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;
}

.badge-gratuit {
  background-color: #2ed573;
}

.badge-payant {
  background-color: #ffa502;
}