const flashcards = {
  variation: [
    { question: "What factors cause variation within a population?", answer: "Genetic factors (multiple genes) and environmental factors (e.g., nutrient availability)." },
    { question: "How does meiosis contribute to genetic variation?", answer: "Through crossing-over, independent assortment, and random union of gametes." },
  ],
  selection: [
    { question: "What are the main steps in natural selection?", answer: "1. Variation, 2. Environmental pressure, 3. Survival of the fittest, 4. Adaptation of population." },
    { question: "How does antibiotic resistance illustrate natural selection?", answer: "Mutations make some bacteria resistant; these survive when antibiotics are used, leading to a resistant population." },
  ],
  factors: [
    { question: "What are abiotic factors?", answer: "Non-living environmental elements such as temperature, light, humidity, water, and nutrients." },
    { question: "What are biotic factors?", answer: "Living elements that affect an organism, like competition, food availability, predators, and disease." },
  ],
  speciation: [
    { question: "What is speciation?", answer: "The evolutionary process where new species form due to isolation and selection pressures." },
    { question: "How does geographic isolation contribute to speciation?", answer: "Populations evolve separately, adapting to different environments, leading to reproductive isolation over generations." },
  ],
  evidence: [
    { question: "What is the fossil record?", answer: "Fossil evidence shows gradual changes in organisms, indicating common ancestry and evolution over time." },
    { question: "What are homologous structures?", answer: "Structures in different species that share a common ancestry, like human arms and bat wings." },
  ],
  genetics: [
    { question: "What is genetic engineering?", answer: "The modification of an organism's DNA by inserting genes from another organism to achieve desired traits." },
    { question: "How is insulin produced using genetic engineering?", answer: "Human insulin genes are inserted into bacterial DNA, allowing bacteria to produce insulin." },
  ]
};

let currentCategory = 'variation';
let currentIndex = 0;

function showCategory(category) {
  currentCategory = category;
  currentIndex = 0;
  displayFlashcard();
}

function displayFlashcard() {
  const flashcard = flashcards[currentCategory][currentIndex];
  document.getElementById("flashcard-question").textContent = flashcard.question;
  document.getElementById("flashcard-answer").textContent = flashcard.answer;
  document.getElementById("flashcard-answer").style.display = "none";
}

function flipFlashcard() {
  const answer = document.getElementById("flashcard-answer");
  answer.style.display = answer.style.display === "none" ? "block" : "none";
}

function nextFlashcard() {
  currentIndex = (currentIndex + 1) % flashcards[currentCategory].length;
  displayFlashcard();
}

// Initialize with the first flashcard
displayFlashcard();
