var summed_value = 0;
for(i=2; i < process.argv.length; i++) {
  summed_value = summed_value + Number(process.argv[i]);
}
console.log(summed_value);
