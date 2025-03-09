class Quality {
  constructor() {}

  getQualityScore(waveHeight, preferredWaveSize, windDirect, waveDirect, size) {
    const defaultScore = _byWaveSize(waveHeight, preferredWaveSize);
    const windAdjustedScore =
      defaultScore * ByWindDirection(windDirect, waveDirect);
    const boardAdjustedScore = windAdjustedScore * ByBoardSize(size);

    if (boardAdjustedScore < 33) {
      return 1;
    } else if (boardAdjustedScore > 66) {
      return 3;
    } else {
      return 2;
    }
  }

  _byWaveSize(waveHeight, preferredWaveSize) {
    const DEFAULT = 50.0;
    const diff = (waveHeight - preferredWaveSize) * 10;
    if (diff < 0) {
      const adjustment = (DEFAULT * diff) / 10;
      return DEFAULT + adjustment;
    } else if (diff > 0) {
      return DEFAULT * (1 + diff / 10);
    } else {
      return DEFAULT;
    }
  }
  _byWindDirection(windDirect, waveDirect) {
    const OFFSET = 0.8;

    const diff = abs(windDirect - waveDirect) / 2;
    return diff / 180.0 + OFFSET;
  }
  _byBoardSize(size) {
    const sizeFloat = size.toFloat();
    const DEFAULTSIZE = 7.0;
    const OFFSET = 1.5;

    if (sizeFloat < DEFAULTSIZE) {
      return 1.0;
    } else {
      const adjustment = (sizeFloat - DEFAULTSIZE) * OFFSET;
      return adjustment / 10 + 1;
    }
  }

  _test() {
    console.log("testing quality");
  }
}

const quality = new Quality();

module.exports = Object.freeze(quality);
