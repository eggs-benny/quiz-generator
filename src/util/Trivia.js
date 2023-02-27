export const Trivia = {
  async questions() {
    try {
      const res = await fetch(
        `https://the-trivia-api.com/api/questions?limit=3`
      );
      const jsonRes = await res.json();

      if (!jsonRes) {
        return console.error('No questions found');
      }

      console.log(
       jsonRes
      );
    } catch (error) {
      console.error(error);
    }
  }
};
