// a function to calculate the balance of a list of transactions based on the category and date range like so:
/**
 * @param {array} transactions - The transactions list.
 * @param {string} category - The name of the category
 * @param {date} start - The start date of the date range. Inclusive.
 * @param {date} end - The end date of the date range. Exclusive.
 * @returns {number} - The balance number
 */
function getBalanceByCategoryInPeriod(transactions = [], category, start, end) {
  return transactions.reduce((prevValue, currentTransaction) => {
    if (category.toLowerCase() === currentTransaction.category.toLowerCase()) {
      const transactionDate = new Date(currentTransaction.time);
      if (transactionDate < end && transactionDate >= start) {
        prevValue += currentTransaction.amount;
      }
    }
    return prevValue;
  }, 0);
}

module.exports = getBalanceByCategoryInPeriod;