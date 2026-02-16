'use client';

const page = () => {

  // 1. Without optional chaining (old way) === === === ===
  const user = {
    name: 'Emma',
    address: {
      city: 'New York',
    }
  };
  console.log('1. *********** Optional Chaining ************')
  // This will throw an error if user or address is undefined
  // const zipCode = user.address.zipCode; // undefined is fine
  // const zipCode = user.contact.email; // ERROR! Cannot read property 'email' of undefined

  // Safe way (old) // this will not throw an error
  const zipCodeOld = user && user.address && user.address.zipCode;

  // With optional chaining (new)
  const zipCode = user?.address?.zipCode;
  console.log('zipCode: ', zipCode); // even if undefined (no error!)

  const email = user?.contact?.email;
  console.log('email: ', email); // undefined (no error!)

  console.log('2. *********** Optional Chaining with arrays and functions ************')
  // 2. Optional Chaining with Arrays and Functions === === === ===
  const company = {
    name: 'Kraftpixel',
    employees: [
      { name: 'Shital', roe: 'Developer' },
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

  console.log('3. *********** Optional Chaining with Nullish Coalescing ************')
  // 3. Optional Chaining with Nullish Coalescing === === === ===
  // Difference between || and ??
  const value1 = 0;
  const value2 = '';
  const value3 = false;
  const value4 = null;
  const value5 = undefined;

  // Using || (checks for falsy values)
  console.log('3.1 ****** Optional Chaining with Nullish Coalescing ***********')
  console.log(value1 || 'default'); // 'default' (0 is falsy)
  console.log(value2 || 'default'); // 'default' ('' is falsy)
  console.log(value3 || 'default'); // 'default' (false is falsy)

  // Using ?? (checks only for null/undefined)
  console.log('3.2 ****** Optional Chaining with Nullish Coalescing ***********')
  console.log(value1 ?? 'default'); // 0 (0 is not null or undefined)
  console.log(value2 ?? 'default'); // '' ('' is not null or undefined)
  console.log(value3 ?? 'default'); // false (false is not null or undefined)
  console.log(value4 ?? 'default'); // 'default' (null)
  console.log(value5 ?? 'default'); // 'default' (undefined)

  console.log('4. *********** Combining Optional Chaining with Nullish Coalescing ************')
  // 4. Optional Chaining with Nullish Coalescing === === === ===
  const config = {
    server: {
      host: 'localhost',
      port: null,
      ssl: {
        enabled: false
      }
    }
  };

  // Get port with default value using nullish coalescing
  const port = config?.server?.port ?? 3000;
  console.log('port: ', port); // 3000 (port is null)

  // Get SSL enabled status
  const sslEnabled = config?.server?.ssl?.enabled ?? true;
  console.log('sslEnabled: ', sslEnabled); // false (actual value, not default)

  // Deep optional with default
  const timeout = config?.server?.connection?.timeout ?? 5000;
  console.log('timeout: ', timeout); // 5000 (connection doesn't exist)
  
  // Real-world example: User preferences
  function getUserTheme(user) {
    return user?.preferences?.theme?.mode ?? 'light';
  }

  function getUserNotifications(user) {
    return user?.settings?.notifications?.enabled ?? true;
  }

  const user1 = {
    preferences: { theme: { mode: 'dark' } }
  };

  const user2 = {};

  console.log('getUserTheme User1: ', getUserTheme(user1)); // 'dark'
  console.log('getUserTheme User2: ', getUserTheme(user2)); // 'light'
  console.log('getUserNotifications User1: ', getUserNotifications(user1)); // true
  console.log('getUserNotifications User2: ',  ); // true

  return (
    <div>
      <h1>Optional Chaining</h1>
      <h3>1. Without Optional Chaining (Old Way) vs With Optional Chaining (New Way)</h3>
      <p>zipCodeOld: {zipCodeOld}</p>
      <p>zipCode: {zipCode}</p>
      <p>email: {email}</p>


      <p>port: {port}</p>
      <p>sslEnabled: {sslEnabled}</p>
      <p>timeout: {timeout}</p>
    </div>
  )
}

export default page