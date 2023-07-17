import css from './Statistics.module.css';
import PropTypes from "prop-types";

export const Statistics = ({ data, title = "UPLOAD STATS" }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statlist}>
                {data.map(el => (<li className={css.itemStat} key={el.id}>
                    <span className={css.labelStat}>{el.label}</span>
                    <span className={css.percentage}>{el.percentage}%</span>
                </li>))}
            </ul>
        </section>);
};

Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    )
};