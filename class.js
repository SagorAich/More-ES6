class Support{
    employeeName;
    desgnation='Support Web dev';
    address='BD';
    constructor(name,addr){
        this.employeeName=name;
        this.address=addr;
    }
    StartSession(){
        console.log(this.employeeName,'please start a support session');
    }
}
const aamir=new Support('Aamir Kkhan','Pk');
const salman=new Support('Salman Khan','Dubai');
aamir.StartSession();
// console.log(aamir);
// console.log(salman);