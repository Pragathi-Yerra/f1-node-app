var fullname="yerra Sony";
console.log(`full name is ${fullname}`);
console.log(`length of full name is ${fullname.length}letters`);
console.log(`upper case full name is ${fullname.toUpperCase()}`);
console.log(`lower case full name is ${fullname.toLowerCase()}`);
console.log(fullname.indexOf(""));
console.log(fullname.lastIndexOf("y"));
console.log(fullname.substring(0,4));
console.log(fullname.substring(4,8));
console.log(fullname.substring(0));
console.log(fullname.substring(3));
//first name
console.log(fullname.substring(0,fullname.indexOf(" ")));
//last name
console.log(fullname.substring(fullname.indexOf(" ")+1));

