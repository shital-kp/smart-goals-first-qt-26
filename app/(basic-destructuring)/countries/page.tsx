import { getAllCountries } from "@/app/services/getCountries";
import styles from "./page.module.css"

const page = async () => {

  //basic destructuring
  const colors = ['red', 'green', 'blue'];
  const [first, second, third] = colors;
  console.log(first); // red
  console.log(second); // green

  //elements skipping
  const [primary, , tertiary] = colors;
  console.log(primary, tertiary); // red, blue

  // Default values
  const [a, b, c = 'yellow'] = ['red', 'green'];
  console.log(c); // yellow

  //Object destructuring === === === 
  const user: {
    name: string;
    age: string;
    email: string;
  } = {
    name: 'Shital',
    age: '75',
    email: 'shital@gmail.com'
  };

  const { name, age, email } = user;
  console.log(name); // 'Shital'

  //Renaming/aliasing variables
  const { name: userName, age: userAge, email: userEmail } = user;
  console.log("Name: ", userName) // 'Shital'

  // Default values
  const { countryName = 'India' } = user;
  console.log(countryName); // 'India'


  const countries = await getAllCountries({ apiType: 'private' });


  // Nested Object Destructuring
  const country = {
    flags: {
      png: "https://flagcdn.com/w320/in.png",
      svg: "https://flagcdn.com/in.svg",
      alt: "The flag of India..."
    },
    name: {
      common: "India",
      official: "Republic of India"
    },
    region: "Asia",
    population: 1393409038
  };  

  const countriesData = [
    {
      flags: {
        png: "https://flagcdn.com/w320/ag.png",
        svg: "https://flagcdn.com/ag.svg",
        alt: "The flag of Antigua and Barbuda has a red field with an inverted isosceles triangle based on the top edge and spanning the height of the field. This triangle has three horizontal bands of black, light blue and white, with the light blue band half the height of the two other bands. The top half of a golden-yellow sun is situated in the lower two-third of the black band to depict a rising sun."
      },
      name: {
        common: "Antigua and Barbuda",
        official: "Antigua and Barbuda",
        nativeName: {
          eng: {
            official: "Antigua and Barbuda",
            common: "Antigua and Barbuda"
          }
        }
      },
      region: "Americas",
      population: 103603
    },
    {
      flags: {
        png: "https://flagcdn.com/w320/bt.png",
        svg: "https://flagcdn.com/bt.svg",
        alt: "The flag of Bhutan is divided diagonally, from the lower hoist-side corner to the upper fly-side corner, into an upper yellow and a lower orange triangle. A fly-side facing white dragon holding four jewels in its claws is situated along the boundary of the two triangles."
      },
      name: {
        common: "Bhutan",
        official: "Kingdom of Bhutan",
        nativeName: {
          dzo: {
            official: "འབྲུག་རྒྱལ་ཁབ་",
            common: "འབྲུག་ཡུལ་"
          }
        }
      },
      region: "Asia",
      population: 784043
    },
  ];

  //Old Way of Destructuring
  const oFlag = country.flags.png;
  const oCommon = country.name.common;
  const oName = country.name.official;
  const oRegion = country.region;
  const oPopulation = country.population;


  //New Way of Destructuring
  const processedCountries = countries.map((country) => {
    const {
      flags: { png: countryFlag, alt: countryAlt = "Country flag" },
      name: { common: countryName, official: countryOfficial },
      region: countryRegion,
      population: countryPop
    } = country;

    return {
      flag: countryFlag,
      alt: countryAlt,
      name: countryName,
      official: countryOfficial,
      region: countryRegion,
      population: countryPop
    };
  });

  return (
    <div className={styles.container}>
      <h1>Destructuring</h1>

      <h2 className={styles.headerTitle}>Single Country</h2>
      <div className={styles.countryCard}>
        <img src={oFlag} width="100" />
        <h2>{oCommon} ({oName})</h2>
        <p>🌍 Region: {oRegion}</p>
        <p>👥 Population: {oPopulation.toLocaleString()}</p>
      </div>

      <h2 className={styles.headerTitle}>Multiple Countries</h2>
      <div className={styles.countriesGrid}>
        {processedCountries.map((country) => (
          <div key={country.name} className={styles.countryCard}>
            <img src={country.flag} alt={country.alt} width="100" />
            <h2>{country.name}</h2>
            <p className={styles.official}>{country.official}</p>
            <p>🌍 Region: {country.region}</p>
            <p>👥 Population: {country.population.toLocaleString()}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default page