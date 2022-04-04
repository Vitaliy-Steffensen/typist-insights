import Words from "../Words";

test("Return text in correct format", () => {
  const words = Words.getRandomText("english");

  expect(words).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        syntax: expect.any(String),
        popularity: expect.any(Number),
      }),
    ])
  );
});

test("Return text in correct amount", () => {
  const words = Words.getRandomText("english", 10);
  expect(words.length).toEqual(10);
});
