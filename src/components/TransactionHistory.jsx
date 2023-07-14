import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                <th className={css.th}>Type</th>
                <th className={css.th}>Amount</th>
                <th className={css.th}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td className={css.type}>{item.type}</td>
                        <td className={css.amount}>{item.amount}</td>
                        <td className={css.currency}>{item.currency}</td>
                    </tr>
                ))}     
            </tbody>
        </table>
    );
};