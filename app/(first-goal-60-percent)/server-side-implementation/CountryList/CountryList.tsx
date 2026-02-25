import styles from './CountryList.module.scss';

const CountryList = ({ countries }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Global Insights</h2>
      
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Capital</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr key={country.name} className={styles.row}>
                <td className={styles.countryCell}>
                  <img 
                    src={country.flag} 
                    alt={country.alt} 
                    className={styles.flag}
                  /> 
                  <span>{country.name}</span>
                </td>
                <td>{country?.capital || '—'}</td>
                <td className={styles.pop}>
                  {new Intl.NumberFormat('en-US').format(country.population)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryList;
