const LOCAL_NAME = "max_score";

export function setScore(score = 0) {
  const oldScore = getScore();

  if (oldScore && oldScore < score) {
    localStorage.setItem(LOCAL_NAME, score);
  }
}

export function getScore() {
  return localStorage.getItem(LOCAL_NAME);
}
