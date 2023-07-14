import css from './Statistics.module.css';

export const Statistics = ({ data }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>

            <ul className={css.statlist}>
                {data.map(el => (<li className={css.itemStat} key={el.id}>
                    <span className={css.labelStat}>{el.label}</span>
                    <span className={css.percentage}>{el.percentage}%</span>
                </li>))}
            </ul>
        </section>);
};