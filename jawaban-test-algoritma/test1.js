function reverseString(strNnum) {
  const panjang = strNnum.length;
  const num = strNnum[panjang - 1];
  const str = strNnum.substring(0, panjang - 1);
  const rev = str.split('').reverse().join('');
  return `${rev}${num}`;
}
console.log(reverseString('NEGIE1'));
