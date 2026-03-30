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

  console.log('** flattened Countries **: ', allCountries); //[ 'India', 'China', 'France', 'Germany', 'Nigeria', 'Egypt' ]

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
  const unique = numbersWithDuplicates.reduce((acc, num) => 
    acc.includes(num) ? acc : [...acc, num], []
  );
  console.log(unique); // [1, 2, 3, 4, 5]

  // 4: Transform array to object with conditions
  const countries2 = [
    { name: "India", population: 1393409038, region: "Asia" },
    { name: "Malta", population: 525285, region: "Europe" },
    { name: "China", population: 1402112000, region: "Asia" }
  ];

  const largeCountriesOnly = countries2.reduce((result, country) => {
    if (country.population > 100000000) {
      result[country.name] = country.population;
    }
    return result;
  }, {});

  console.log(largeCountriesOnly); // { India: 1393409038, China: 1402112000 }

  return (
    <div>
      <h1>Advanced Reduce Examples</h1>

      <h3>Flattened countries from nested array</h3>
      <pre>{JSON.stringify(allCountries, null, 2)}</pre>

      <h3>Average Population</h3>
      <p>{averagePoputation.toLocaleString()}</p>

      <h3>Remove Duplicates</h3>
      <pre>{JSON.stringify(unique, null, 2)}</pre>

      <h3>Large Countries Only</h3>
      <pre>{JSON.stringify(largeCountriesOnly, null, 2)}</pre>
    
    </div>
  )
}

export default page