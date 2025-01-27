let myDate = new Date("3-12-2004");

myDate.toLocaleString('default', {
    formatMatcher: "best fit",
    timeStyle: "full"
});

console.log(myDate);
