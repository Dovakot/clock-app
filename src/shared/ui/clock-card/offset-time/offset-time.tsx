import React from "react";

enum Suffixes {
  ONE = 'one',
  FEW = 'few',
  MANY = 'many',
}

const PLUR_TEXT: any = {
  [Suffixes.ONE]: 'час',
  [Suffixes.FEW]: 'часа',
  [Suffixes.MANY]: 'часов',
};

const getTextForButton = (count: number) => {
  const pr = new Intl.PluralRules('ru-RU', {type: 'cardinal'});
  const suffix = pr.select(count);
  const plusSign = count > 0 ? '+' : '';

  return `${plusSign}${count} ${PLUR_TEXT[suffix]}`;
}

export const OffsetTime = ({
  userUTC,
  currentUTC,
}: any) => {
  const timeOffset = currentUTC - userUTC;

  return (
    <button
      className="button button-offset button-offset--default card-clock__button"
      type="button"
    >
      <span className="button-offset__time">{getTextForButton(timeOffset)}</span>
      <span className="button-offset__imhere">Я тут</span>
    </button>
  );
};
