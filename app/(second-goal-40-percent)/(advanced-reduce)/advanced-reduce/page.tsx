'use client';
// Advanced Reduce methods examples
const page = () => {

  // 1. Nested Arrays Flattening
  const nestedRegions = [
    { region: 'Asia', countries: ['India', 'China'] },
    { region: 'Europe', countries: ['France', 'Germany'] },
    { region: 'Africa', countries: ['Nigeria', 'Egypt'] }
  ];

  const allCountries = nestedRegions.reduce((flatCountries, region) => {
    return flatCountries.concat(region.countries);
  }, []);

  console.log('** flattened Countries **: ', allCountries);

  // 2: Calculate average population
  const countries = [
    { name: "India", population: 1393409038 },
    { name: "China", population: 1402112000 },
    { name: "USA", population: 331893745 }
  ];

  const averagePoputation = countries.reduce((sum, country, index, array) => {
    sum += country.population;
    
    if (index === array.length - 1) {
      return sum / array.length;
    }

    return sum;
  }, 0)

  console.log('** Average Population **: ', averagePoputation.toLocaleString()); // 1,042,471,594

  // 3. Remove duplicates from an array
  const numbersWithDuplicates = [1, 2, 3, 2, 4, 1, 5];
  

  return (
    <div>
      <h1>Advanced Reduce Examples</h1>

      <h3>Flattened countries from nested array</h3>
      <pre>{JSON.stringify(allCountries, null, 2)}</pre>

      <h3>Average Population</h3>
      <p>{averagePoputation.toLocaleString()}</p>

    
    </div>
  )
}

export default page