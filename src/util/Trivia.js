const numberQs = `?limit=5`;

export const Trivia = {
  async results() {
    try {
      const res = await fetch(
        `https://the-trivia-api.com/api/questions${numberQs}`
      );
      const jsonRes = await res.json();

      if (!jsonRes) {
        return console.error('No questions found');
      }

      return jsonRes.map((result) => {
        return {
          id: result.id,
          options: [
            { id: 0, answer: result.correctAnswer, isCorrect: true},
            { id: 1, answer: result.incorrectAnswers[0], isCorrect: false},
            { id: 2, answer: result.incorrectAnswers[1], isCorrect: false},
            { id: 3, answer: result.incorrectAnswers[2], isCorrect: false}
          ],
          question: result.question
        };
      });
    } catch (error) {
      console.error(error);
    }
  }
};
