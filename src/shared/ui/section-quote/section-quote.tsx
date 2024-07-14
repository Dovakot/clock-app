import React from "react";

export const SectionQuote = () => (
  <section className="blockquote">
    <h2 className="visually-hidden">Случайная великая цитата</h2>

    <div className="container">
      <form className="form-blockquote">
        <button
          className="button button--icon form-blockquote__button"
          type="button"
          aria-label="Обновить"
        >
          <svg
            width={21}
            height={21}
            aria-hidden="true"
            focusable="false"
          >
            <use xlinkHref="img/sprite.svg#icon-reload" />
          </svg>
        </button>

        <blockquote className="form-blockquote__text" cite="#">
          <p>
            Я буду всего лишь историей у&nbsp;тебя в&nbsp;голове... Только пусть
            это&nbsp;будет хорошая история, потому что, знаешь,
            это&nbsp;и&nbsp;была хорошая история. Самая лучшая.
          </p>
          <footer>11 Доктор</footer>
        </blockquote>
      </form>
    </div>
    <img
      className="blockquote__background"
      src="img/head-background-mobile.png"
      srcSet="img/head-background-mobile.png 768w,
              img/head-background-mobile@2x.png 1536w,
              img/head-background.png 2450w,
              img/head-background@2x.png 5120w"
    />
  </section>
);
