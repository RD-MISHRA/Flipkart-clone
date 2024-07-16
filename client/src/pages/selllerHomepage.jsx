import React from 'react';

// Sample data for items
const itemsForSale = [
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 3, name: 'Item 3', price: 300 },
];

const SellerHomepage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Seller Homepage</h1>
      </header>
      <main style={styles.main}>
        <h2>Welcome, Seller!</h2>
        <section style={styles.itemsSection}>
          <h3>Items for Sale</h3>
          <ul style={styles.itemsList}>
            {itemsForSale.map(item => (
              <li key={item.id} style={styles.item}>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
  },
  main: {
    marginTop: '20px',
  },
  itemsSection: {
    marginTop: '20px',
  },
  itemsList: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default SellerHomepage;