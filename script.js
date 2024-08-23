let budget = 0;
let expenses = 0;

function setBudget() {
    const budgetInput = document.getElementById('budget-input').value;
    budget = parseFloat(budgetInput);
    document.getElementById('budget-output').innerText = `Budget set to $${budget.toFixed(2)}`;
}

function planVacation() {
    const vacationInput = document.getElementById('vacation-input').value;
    document.getElementById('plan-output').innerText = `Planning a vacation to ${vacationInput}`;
}

function trackSpending() {
    const expenseInput = document.getElementById('expense-input').value;
    expenses += parseFloat(expenseInput);
    const remainingBudget = budget - expenses;
    document.getElementById('track-output').innerText = `Total expenses: $${expenses.toFixed(2)}. Remaining budget: $${remainingBudget.toFixed(2)}`;
}
