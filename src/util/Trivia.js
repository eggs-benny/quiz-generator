const numberQs = `?limit=10`;

export const Trivia = {
  async results(difficulty) {
    try {
      console.log(`https://the-trivia-api.com/api/questions${numberQs}${difficulty}`)
      const res = await fetch(
        `https://the-trivia-api.com/api/questions${numberQs}${difficulty}`
      );
      const jsonRes = await res.json();
      if (!jsonRes) {
        return console.error('No questions found');
      }

      return jsonRes.map((result) => {
        return {
          id: result.id,
          options: [
            { id: 0, option: result.correctAnswer, isCorrect: true},
            { id: 1, option: result.incorrectAnswers[0], isCorrect: false},
            { id: 2, option: result.incorrectAnswers[1], isCorrect: false},
            { id: 3, option: result.incorrectAnswers[2], isCorrect: false}
          ],
          question: result.question
        };
      });
    } catch (error) {
      console.error(error);
    }
  }
};
