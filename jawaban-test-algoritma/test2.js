function kataTerpanjang(sentence) {
  const pisahkan = sentence.split(' ');
  let arr = [];
  pisahkan.map((kata) => {
    arr.push(kata.length);
  });
  let max = arr[0];
  let maxIndex = 0;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }

  return pisahkan[maxIndex];
}

const sentence = 'Saya sangat senang mengerjakan soal algoritma';
console.log(kataTerpanjang(sentence));
