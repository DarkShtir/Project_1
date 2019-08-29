let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let answer1 = prompt("Введите обяательную статью расходов ы этом месяце", ""),
    answer2 = prompt("Во сколько это обойдётся?"),
    answer3 = prompt("Введите обяательную статью расходов ы этом месяце", ""),
    answer4 = prompt("Во сколько это обойдётся?");

appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;

alert(appData.budget / 30);
