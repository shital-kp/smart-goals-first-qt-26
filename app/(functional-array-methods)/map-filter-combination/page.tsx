//Map Filter Combination
const page = () => {

  const countries = [
    { name: { common: "India" }, population: 1393409038, region: "Asia" },
    { name: { common: "China" }, population: 1402112000, region: "Asia" },
    { name: { common: "USA" }, population: 331893745, region: "Americas" },
    { name: { common: "Brazil" }, population: 212559417, region: "Americas" },
    { name: { common: "Nigeria" }, population: 206139587, region: "Africa" },
    { name: { common: "Bangladesh" }, population: 164689383, region: "Asia" },
    { name: { common: "Russia" }, population: 144104080, region: "Europe" },
    { name: { common: "Japan" }, population: 125584838, region: "Asia" }
  ];

  // get names of asian countries with 100M+ population
  const largeAsianCountryNames = countries
    .filter(({ region, population }) => region === "Asia" && population > 100000000)
    .map(({ name: { common } }) => common);

  console.log(largeAsianCountryNames);
  // ['India', 'China', 'Bangladesh', 'Japan']

  const americanPopulations = countries
  .filter(({ region }) => region === "Americas")
  .map(({ name: { common: name }, population }) => ({
    country: name,
    population: population,
    formatted: `${(population / 1000000).toFixed(1)}M`
  }));

  console.log(americanPopulations);
  // [
  //   { country: 'USA', population: 331893745, formatted: '331.9M' },
  //   { country: 'Brazil', population: 212559417, formatted: '212.6M' }
  // ]

  // Get top 3 most populated countries in Asia
  const topAsianCountries = countries
    .filter(({ region }) => region === "Asia")
    .sort((a, b) => b.population - a.population)
    .slice(0, 3)
    .map(({ name: { common: name }, population }, index) => ({
      rank: index + 1,
      name: name,
      population: population.toLocaleString()
    }));

  console.log(topAsianCountries);
  // [
  //   { rank: 1, name: 'China', population: '1,402,112,000' },
  //   { rank: 2, name: 'India', population: '1,393,409,038' },
  //   { rank: 3, name: 'Bangladesh', population: '164,689,383' }
  // ]

  return (
    <div>
      <h3>Large Asian Countries</h3>
      <ul>
        {largeAsianCountryNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <h3>American Populations</h3>
      <ul>
        {americanPopulations.map(({ country, population, formatted }) => (
          <li key={country}>{country}: {formatted} ({population.toLocaleString()})</li>
        ))}
      </ul>

      <h3>Top 3 Most Populated Asian Countries</h3>
      <ul>
        {topAsianCountries.map(({ rank, name, population }) => (  
          <li key={name}>{rank}. {name}: {population}</li>
        ))}
      </ul>
    </div>
  )
}

export default page