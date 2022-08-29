const delayMessage = () => {
  setTimeout(() => {
    console.log("Oi");
  }, 5000);
  setTimeout(() => {
    console.log("5");
  }, 0);
  setTimeout(() => {
    console.log("4");
  }, 1000);
  setTimeout(() => {
    console.log("3");
  }, 2000);
  setTimeout(() => {
    console.log("2");
  }, 3000);
  setTimeout(() => {
    console.log("1");
  }, 4000);
};

delayMessage();
