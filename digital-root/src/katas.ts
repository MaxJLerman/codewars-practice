export const digitalRoot = (n: number): number => {
  const numbersAsStringArray = n.toString().split("").map(Number);
  console.log(numbersAsStringArray);

  const sum = numbersAsStringArray.reduce(
    (accumulator, currentTotal) => accumulator + currentTotal,
    0,
  );

  if (sum.toString().length === 1) return sum;

  return digitalRoot(sum);
};

export const humanReadable = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = seconds % 60;

  const format = (num: number): string => {
    return String(num).padStart(2, "0");
  };

  return `${format(hours)}:${format(minutes)}:${format(secondsLeft)}`;
};

export const duplicateCount = (text: string): number => {
  // Convert the input string to lowercase to handle case insensitivity
  const lowerCased = text.toLowerCase();

  // Create a frequency map to count occurrences of each character
  const charCount: { [key: string]: number } = {};

  // Loop through the string and populate the frequency map
  for (const char of lowerCased) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Count how many characters appear more than once
  let duplicateCount = 0;
  for (const key in charCount) {
    if (charCount[key] > 1) {
      duplicateCount++;
    }
  }

  return duplicateCount;
};

export const findEvenIndex = (array: number[]): number => {
  // Calculate the total sum of the array
  const totalSum = array.reduce((acc, num) => acc + num, 0);

  let leftSum = 0;

  // Iterate over the array
  for (let i = 0; i < array.length; i++) {
    // Calculate the right sum by subtracting left sum and the current element from the total sum
    const rightSum = totalSum - leftSum - array[i];

    // If left sum equals right sum, return the index
    if (leftSum === rightSum) {
      return i;
    }

    // Update the left sum for the next iteration
    leftSum += array[i];
  }

  // If no such index is found, return -1
  return -1;
};
