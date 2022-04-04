import InsightFormat from "../insightFormat";

test("getTestTitle at 200", () => {
  expect(InsightFormat.getTestTitle(200)).toBe(
    "You are only 16 wpm awey from the world record!"
  );
});

test("getTestTitle Never return default", () => {
  expect(InsightFormat.getTestTitle(97)).not.toBe("Not available");
});

test("percentageToColor returns hsl", () => {
  expect(InsightFormat.percentageToColor(0.1)).not.toBe("hsl(10.5, 91%, 57%");
});

test("topFragmentPercentage convert percentage into top 50% fragmet", () => {
  expect(InsightFormat.topFragmentPercentage(0.75)).not.toBe(0.5);
});
