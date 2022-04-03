export default class InsightFormat {
  static charactorAccuracy(charactors: any[]) {
    let charsWithAccuracy: any = [];
    let totalAccuracy = 0;

    let correctChars: number = 0;
    let wrongChars: number = 0;

    for (const [key, value] of Object.entries(charactors)) {
      const { correct, wrong } = value;

      const accuracy = this.getPercentage(correct, correct + wrong);

      totalAccuracy += accuracy;

      correctChars += value.correct;
      wrongChars += value.wrong;

      charsWithAccuracy = {
        ...charsWithAccuracy,
        [key]: {
          ...value,
          accuracy,
        },
      };
    }

    let charcactorAccuracy =
      (totalAccuracy / Object.keys(charsWithAccuracy).length) * 100;

    return {
      charsWithAccuracy,
      charcactorAccuracy: charcactorAccuracy ? charcactorAccuracy : 0,
      correctChars,
      wrongChars,
      totalChars: correctChars + wrongChars,
    };
  }

  static getPercentage(number: number, Of: number, InHundres: boolean = false) {
    return InHundres ? (number / Of) * 100 : number / Of;
  }

  static getTestTitle(wpm: number) {
    switch (true) {
      case wpm < 35:
        return "Below average";
      case 35 <= wpm && wpm > 50:
        return "You are an average typist";
      case 50 <= wpm && wpm > 100:
        return "Abobe average!";
      case 100 <= wpm:
        return `You are only ${216 - wpm} wpm awey from the world record!`;
      default:
        console.warn("getTestTitle() defaults, this should not occure");
        return "Not available";
    }
  }

  static percentageToColor(floatPercentage: number, maxHue = 105, minHue = 0) {
    const hue = floatPercentage * (maxHue - minHue) + minHue;
    return `hsl(${hue}, 91%, 57%)`;
  }

  static topFragmentPercentage(
    floatPercentage: number,
    topPercentage: number = 0.3
  ) {
    return floatPercentage > topPercentage
      ? (floatPercentage - topPercentage) / (1 - topPercentage)
      : 0;
  }
}
