var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let oneday=24*60*60*1000;
	let first=new Date(date1);
	let second=new Date(date2);
	let diff=second-first;
	return (Math.round(diff/oneday));
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
