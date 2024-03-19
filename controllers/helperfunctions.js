
  // function to create the ministry table:
  const createMinistryTbl =async(pool) =>{
    try {
        const query = `CREATE TABLE IF NOT EXISTS ministry(ministry_id SERIAL,ministry_name VARCHAR(255) NOT NULL, acronym VARCHAR(20),PRIMARY KEY (ministry_id));`;
        await pool.query(query);
        console.log('Ministry table created successfully');
    } catch (err) {
        console.log(err);
        console.log('error creating table');
    }
  };

  // Seed the db

  const seedDb =async (pool) =>{
    try {
        const seedQuery = `INSERT INTO ministry (ministry_name, acronym) 
        VALUES ('Agriculture and Food', 'AF'),
        ('Attorney General','AG'),
        ('Children and Family Development','CFD'),
        ('Minister of State for Child Care','CHILD'),
        ('Citizens Services','CITZ'),
        ('Education and Child Care','ECC'),
        ('Emergency Management and Climate Readiness','EMCR'),
        ('Energy, Mines and Low Carbon Innovation','EMLI'),
        ('Environment and Climate Change Strategy','ENV'),
        ('Finance','FIN'),
        ('Forests','FOR'),
        ('Minister of State for Sustainable Forestry Innovation','SFI'),
        ('Health','HLTH'),
        ('Housing','HOUS'),
        ('Intergovernmental Relations Secretariat','IGRS'),
        ('Indigenous Relations and Reconciliation','IRR'),
        ('Jobs, Economic Development and Innovation','JEDI'),
        ('Labour','LBR'),
        ('Mental Health and Addictions','MMHA'),
        ('Transportation and Infrastructure','MOTI'),
        ('Minister of State for Infrastructure and Transit','INFRA'),
        ('Municipal Affairs','MUNI'),
        ('Office of the Premier','PREM'),
        ('Post-Secondary Education and Future Skills','PSFS'),
        ('Public Safety and Solicitor General','PSSG'),
        ('Social Development and Poverty Reduction','SDPR'),
        ('Tourism, Arts, Culture and Sport','TACS'),
        ('Minister of State for Trade','TRADE'),
        ('Water, Land and Resource Stewardship','WLRS');
        `;
        await pool.query(seedQuery);
        console.log('Ministry table seeded successfully');
    } catch (err) {
        console.log(err);
        console.log('error seeding table');
    }
  };

  // test function

  const testing = ()=>{
      console.log('export function working')
  };

  //fetch data + populate

  const fetchData = ()=>{
      fetch("/ministry")
      .then((response) => response.json())
      .then((data) => {
          data.forEach((ministry) => {
          // Select the <template> we created in index.html
          const cardTemplate = document.querySelector('template');

          // Clone a copy of the template we can insert in the DOM as a real visible node
          const card = cardTemplate.content.cloneNode(true);

          // Update the content of the cloned template with the employee data we queried from the backend
          card.querySelector('h4').innerText = ministry.name;
          card.querySelector('p').innerText = ministry.acronym;

          // Append the card as a child with the employee data to the <body> element on our page
          document.body.appendChild(card);
          });
      });
  };

  // Normalize a port into a number, string, or false.

  const normalizePort = (val) =>{
      const testPort = parseInt(val, 10);
      if (isNaN(testPort)) {
        // named pipe
        return val;
      }
      if (testPort >= 0) {
        // port number
        return testPort;
      }
      return false;
    };

  // Event listener for HTTP server "error" event.

  const onError = (error) => {
      if (error.syscall !== 'listen') {
        throw error;
      }
      const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

      // handle specific listen errors with friendly messages

      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
        default:
          throw error;
      }
    };
    
module.exports ={createMinistryTbl, 
  fetchData,
  normalizePort,
  onError,
  seedDb, 
  testing
};