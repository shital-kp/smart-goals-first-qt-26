'use client';

const page = () => {

  // 1. Without optional chaining (old way) === === === ===
  const user = {
    name: 'Emma',
    address: {
      city: 'New York',
    }
  };

  // This will throw an error if user or address is undefined
  // const zipCode = user.address.zipCode; // undefined is fine
  // const zipCode = user.contact.email; // ERROR! Cannot read property 'email' of undefined

  // Safe way (old)
  const zipCodeOld = user && user.address && user.address.zipCode;

  // With optional chaining (new)
  const zipCode = user?.address?.zipCode;
  console.log('zipCode: ', zipCode); // even if undefined (no error!)

  const email = user?.contact?.email;
  console.log('email: ', email); // undefined (no error!)

  // 2. Optional Chaining with Arrays and Functions === === === ===
  const company = {
    name: 'Kraftpixel',
    employees: [
      { name: 'Shital', role: 'Developer' },
      { name: 'Ray', role: 'Designer' }
    ],
    getEmployeeCount: function() {
      return this.employees.length;
    }
  };

  // Array optional chaining
  console.log('Nesting 1: ', company?.employees?.[0]?.name); // 'Shital'
  console.log('Nesting 2: ',company?.departments?.[0]?.name); // undefined (no error)

  // Function optional chaining
  console.log('Function Optnl Chaining 1: ', company?.getEmployeeCount?.()); // 2
  console.log('Function Optnl Chaining 2: ', company?.getNonExistentMethod?.()); // undefined (no error)

  // Deep nesting
  const data = {
    users: {
      active: [
        { id: 1, profile: { settings: { theme: 'dark' } } }
      ]
    }
  };

  const theme = data?.users?.active?.[0]?.profile?.settings?.theme;
  console.log(theme); // dark

  const nonExistent = data?.users?.inactive?.[0]?.profile?.settings?.theme;
  console.log(nonExistent); // undefined

  return (
    <div>
      <h1>Optional Chaining</h1>

      <p>zipCodeOld: {zipCodeOld}</p>
      <p>zipCode: {zipCode}</p>
      <p>email: {email}</p>

    </div>
  )
}

export default page