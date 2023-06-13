var d=new Date();
console.log(d);
hour=d.getHours();
if(hour<=12)
console.log("good morning");
else if(hour<=16)
console.log("good afternoon");
else
console.log("good evening");
if(d.getDay()==0 || d.getDay()==6)
console.log("its weekend");
else console.log("working day");