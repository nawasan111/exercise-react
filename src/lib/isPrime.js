function isPrime(number) {
  let isPrime = true;

  if (number === 1) {
    return false;
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  } else {
    return false;
  }
}

export default isPrime;
