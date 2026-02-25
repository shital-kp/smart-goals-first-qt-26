import { getAllCountries } from "@/app/services/getCountries";
import CountryList from "./CountryList/CountryList";

const page = async () => {

  let countryData;
  try {
    countryData = await getAllCountries({ apiType: 'private' });
  } catch (error) {
    console.log('Error Getting Countries Data', error);
    countryData = [];
  }

  console.log('********: ', countryData)

  const processedCountries = countryData
    .map((country) => {
      const {
        flags: { svg: countryFlag, alt: countryAlt = "Country flag" },
        name: { common: countryName, official: countryOfficial },
        region: countryRegion,
        population: countryPop,
        capital: countryCapital,
      } = country;

      return {
        flag: countryFlag,
        alt: countryAlt,
        name: countryName,
        official: countryOfficial,
        region: countryRegion,
        population: countryPop,
        capital: countryCapital
      };
    })
    ?.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h1>Server-Side Implementation</h1>

      <CountryList countries={processedCountries} />
    </div>
  )
}

export default page