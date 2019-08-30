let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", ""); 
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обяательную статью расходов ы этом месяце", ""),
                b = prompt("Во сколько это обойдётся?");
        
            if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null 
                && a != "" && b != "" && a.length < 50){
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i-1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
    
            appData.monthIncome = save/100/12*percent; //Add arounding to integer, and accumelate the remaunder
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");
            if ((typeof(a)) === "string" && (typeof(a)) != null 
                && a != "" && a.length < 50){
                console.log("done");
            appData.optionalExpenses[i+1] = a;
            } else {
                i = i-1;
            }
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
        if ((typeof(items)) === "string" && (typeof(items)) != null && items != ""){
        appData.income = items.split(", ");
        }
        let itemsElse = prompt("Может что-то еще?", "");
        if ((typeof(itemsElse)) === "string" && (typeof(itemsElse)) != null && itemsElse != ""){
        appData.income.push(itemsElse);
        }
        
        appData.income.sort();
        
        appData.income.forEach(function(item, i) {
            alert("Способы доп. заработка: " + item + "- " + (i+1));
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ": "+ appData[key]);
}