import css from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, goodPercentage }) => {
  return (
    <div className={css.list}>
      <div>
        <span className={css.titleList}>Good:</span>
        <span className={css.result}>{good}</span>
      </div>
      <div>
        <span className={css.titleList}>Neutral:</span>
        <span className={css.result}>{neutral}</span>
      </div>
      <div>
        <span className={css.titleList}>Bad:</span>
        <span className={css.result}>{bad}</span>
      </div>
      <div>
        <span className={css.titleList}>Total:</span>
        <span className={css.result}>{total}</span>
      </div>
      <div>
        <span className={css.titleList}>Positive feedback:</span>
        <span className={css.result}>{goodPercentage} %</span>
      </div>
    </div>
  );
};
export default Statistics;