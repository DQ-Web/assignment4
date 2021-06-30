import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Debits = ({
  transactions,
  setTransactions,
  accountBalance,
  setAccountBalance,
}) => {
  const [transaction, setTransaction] = useState({
    description: "",
    amount: 0,
  });

  const { description, amount } = transaction;

  useEffect(() => {
    if (transactions.length === 0) {
      const getTransactions = async () => {
        const linkAPI = "https://moj-api.herokuapp.com/debits";

        try {
          const response = await axios.get(linkAPI);

          setTransactions(response.data);
        } catch (err) {
          console.error(err.message);
        }
      };
      getTransactions();
    }
  }, [transactions, setTransactions]);

  const handleChange = (e) =>
    setTransaction({ ...transaction, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = "2021-6-27";
    setTransactions([
      ...transactions,
      { id: 1231, description: description, amount: amount, date: today },
    ]);
    setAccountBalance(
      parseFloat(accountBalance) + parseFloat(e.target.amount.value)
    );
  };

  return (
    <div>
      {transactions != null ? (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <p>{transaction.description}</p>
              <p>{transaction.amount}</p>
              <p>{transaction.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading</div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          placeholder="Amount"
          name="amount"
          value={amount}
          onChange={handleChange}
        />
        <input type="submit" value="Add Debit" />
      </form>
      <h1>Account Balance</h1>
      <p>Balance: {accountBalance}</p>

      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Debits;
