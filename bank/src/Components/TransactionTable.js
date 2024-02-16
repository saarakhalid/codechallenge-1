import React from 'react';

const TransactionTable = ({ transactions, searchTerm }) => {
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  filteredTransactions.sort((a, b) => a.description.localeCompare(b.description));
  // Render the TransactionTable component
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {filteredTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
