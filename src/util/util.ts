export function shuffleArray(array: any[]) {
  const shuffledArray = array.slice(); // Create a copy of the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: Scroll behavior
  });
};

export const handleTitleClick = (title: string) => {
  const radioButton = document.getElementById(title) as HTMLInputElement;
  if (radioButton) {
    radioButton.click();
  }
};
