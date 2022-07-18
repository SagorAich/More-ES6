class TeamMember{
    name;
    designation='Support Web dev';
    address='BD';
    constructor(name,addr){
        this.name=name;
        this.address=addr;
    }
}
class Support extends TeamMember{
    groupSupportTime;
    constructor(name,addr,time){
        super(name,addr)
        this.groupSupportTime=time;
    }
    StartSession(){
        console.log(this.name,'please start a support session');
    }
}

class StudentCare extends TeamMember{
    buildARoutine(student){
        console.log(this.name,'Build a Routine for',student);
    }
}
class NeptuneDev extends TeamMember{
    codeEditor;
    constructor(name,addr,editor){
        super(name,addr)
        this.codeEditor=editor;
    }
    releaseApp(version){
        console.log(this.name,'release app version',version);
    }
}
const aamir=new Support('Aamir Kkhan','Pk',11);
const salman=new Support('Salman Khan','Dubai',4);
aamir.StartSession();
//console.log(aamir);
// console.log(salman);

const alia= new StudentCare('Alia Bhatt','Mumbai');
//console.log(alia);

const ash=new NeptuneDev('Ash','Bombay','Android Studio');
//console.log(ash);
ash.releaseApp('1.4.5');