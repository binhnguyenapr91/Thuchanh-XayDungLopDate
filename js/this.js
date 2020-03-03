function Date (day,month,year){
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day;
    };
    this.getMonth = function(){
        return this.month;
    };
    this.getYear = function(){
        return this.year;
    };
    this.setDay = function (day) {
        this.day = day;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setYear = function(year){
        this.year = year;
    };
    this.toString = function () {
        return "Day: "+ this.day + ". Month: " +this.month+". Year: "+this.year;
    }
}

let days = [];

let birthday = new Date(26,4,1991)
console.log("Full fill constructor:")
console.log("Day:"+birthday.getDay());
console.log("Month:"+birthday.getMonth());
console.log("Year:"+birthday.getYear());
console.log(birthday.toString());
days.push(birthday);

let today = new Date();
today.setDay(3);
today.setMonth(3);
today.setYear(2020);
console.log("Empty constructor:");
console.log("Day:"+today.getDay());
console.log("Month:"+today.getMonth());
console.log("Year:"+today.getYear());
console.log(today.toString());
days.push(today);


let domDay= new Date(11,9,);
domDay.setYear(2001);
console.log("Half constructor:")
console.log("Day:"+domDay.getDay());
console.log("Month:"+domDay.getMonth());
console.log("Year:"+domDay.getYear());
console.log(domDay.toString());
days.push(domDay);

console.table(days);