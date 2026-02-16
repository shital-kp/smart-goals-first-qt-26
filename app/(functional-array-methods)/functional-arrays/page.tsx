//Functional Array Methods

const page = () => {

  // Example 1: Simple transformation
  const numbers = [1, 2, 3, 4, 5];

  //old way with for loop
  const doubledValues = [];
  for (let i = 0; i < numbers.length; i++) {
    doubledValues.push(numbers[i] * 2);
  }
  console.log(doubledValues); // [2, 4, 6, 8, 10]

  // new way with map() method
  const doubledMap = numbers.map(num => num * 2);
  console.log(doubledMap); // [2, 4, 6, 8, 10]

  // Example 2: Create new objects
  const names = ['Shital', 'Alpha', 'Beta'];
  const users1 = names.map((name, index) => ({
    id: index + 1,
    name: name,
    email: `${name.toLowerCase()}@gmail.com`
  }));

  console.log('** Users **: ', users1); 
  // [
  //   { id: 1, name: 'Alice', email: 'alice@gmail.com' },
  //   { id: 2, name: 'Alpha', email: 'alpha@gmail.com' },
  //   { id: 3, name: 'Beta', email: 'beta@gmail.com' },
  // ]

  // Example 3: Using the countries data
  const countries = [
    {
      name: { common: "India", official: "Republic of India" },
      population: 1393409038,
      region: "Asia",
      flags: { png: "https://flagcdn.com/w320/in.png" }
    },
    {
      name: { common: "China", official: "People's Republic of China" },
      population: 1402112000,
      region: "Asia",
      flags: { png: "https://flagcdn.com/w320/cn.png" }
    },
  ]

  // Example 4: filter() Examples
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Get only even numbers
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers); // [2, 4, 6, 8, 10]

  // Get numbers greater than 5
  const largeNumbers = numbers.filter((num) => num > 5);
  console.log(largeNumbers); // [6, 7, 8, 9, 10]

  // Example 2: Filter objects
  const users2 = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 17, active: false },
    { name: 'Charlie', age: 30, active: true },
    { name: 'Diana', age: 16, active: true }
  ];

  // Get only active users
  const activeUsers = users2.filter((user2) => user2.active);
  console.log(activeUsers);

  // [
  //   { name: 'Alice', age: 25, active: true },
  //   { name: 'Charlie', age: 30, active: true },
  //   { name: 'Diana', age: 16, active: true }
  // ]

  // Get only adults (age >= 18)
  const adults = users2.filter((user2) => user2.age >= 18);
  console.log(adults);
  // [
  //   { name: 'Alice', age: 25, active: true },
  //   { name: 'Charlie', age: 30, active: true }
  // ]

  // Combine conditions - active adults only
  const activeAdults = users2.filter((user2) => user2.active && user2.age >= 18);
  console.log(activeAdults);
  // [
  //   { name: 'Alice', age: 25, active: true },
  //   { name: 'Charlie', age: 30, active: true }
  // ]

  // Example 5: Reduce() Examples
  const countriesForReduce  = [
    { name: { common: "India" }, population: 1393409038, region: "Asia" },
    { name: { common: "China" }, population: 1402112000, region: "Asia" },
    { name: { common: "USA" }, population: 331893745, region: "Americas" },
    { name: { common: "Brazil" }, population: 212559417, region: "Americas" },
    { name: { common: "Nigeria" }, population: 206139587, region: "Africa" }
  ];

  // Calculate total world population
  const totalPopulation = countriesForReduce.reduce((total, country) => total + country.population, 0);
  console.log('** World Population **: ', totalPopulation); // 3347652270

  // countries grouped by region
  const countriesByRegion = countriesForReduce.reduce((grouped, country) => {
    const region = country.region;
    //THe follo
    if (!grouped[region]) {
      grouped[region] = [];
    }

    grouped[region].push(country.name.common);
    return grouped;
  }, {});

  console.log('** Countries by Region **: ', countriesByRegion);
  // {
  //   Asia: ['India', 'China'],
  //   Americas: ['USA', 'Brazil'],
  //   Africa: ['Nigeria']
  // }

  // calculate population by region
  const populationByRegion = countriesForReduce.reduce((stats, country) => {
    const { region, population } = country;
    stats[region] = (stats[region] || 0) + population;
    return stats;
  }, {});

  console.log('** Population by Region **: ', populationByRegion);
  // {
  //   Asia: 2795521038,
  //   Americas: 544453162,
  //   Africa: 206139587
  // }

  // most populated country
  const mostPopulatedCountry = countriesForReduce.reduce((max, country) => 
    country.population > max.population ? country : max
  );

  console.log('** Most Populated Country **: ', mostPopulatedCountry);
  // { name: { common: "China" }, population: 1402112000, region: "Asia" }


  //lookup object by country name
  const countryLookup = countriesForReduce.reduce((lookup, country) => {
    const name = country.name.common;

    lookup[name] = {
      population: country.population,
      region: country.region
    };

    return lookup;
  }, {});

  console.log('** Country Lookup **: ', countryLookup);
  // {
  //   India: { population: 1393409038, region: 'Asia' },
  //   China: { population: 1402112000, region: 'Asia' },
  //   USA: { population: 331893745, region: 'Americas' },
  //   Brazil: { population: 212559417, region: 'Americas' },
  //   Nigeria: { population: 206139587, region: 'Africa' },
  // }

  return (
    <div>
      <h3>Reduce Method</h3>
      
      <h4>Countries grouped by region</h4>
      <pre>{JSON.stringify(countriesByRegion, null, 2)}</pre>

      <h4>Population by region</h4>
      <pre>{JSON.stringify(populationByRegion, null, 2)}</pre>

      <h4>Most populated country</h4>
      <pre>{JSON.stringify(mostPopulatedCountry, null, 2)}</pre>

      <h4>Country lookup</h4>
      <pre>{JSON.stringify(countryLookup, null, 2)}</pre>
    </div>
  )
}

export default page