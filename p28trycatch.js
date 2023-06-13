const numerator=100,denominator="a";
try{
    console.log(numerator/denominator);
   console.log(a);
}
catch(error){
    console.log('error caught');
    console.log(`error is ${error}`)
}
finally{
    console.log("executes all the time")
}