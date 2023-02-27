const numberQs = `?limit=5`

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
            correct: result.correctAnswer,
            incorrect1: result.incorrectAnswers[0],
            incorrect2: result.incorrectAnswers[1],
            incorrect3: result.incorrectAnswers[2],
            question: result.question
          };
        });
    } catch (error) {
      console.error(error);
    }
  }
};
