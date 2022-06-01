import sql from 'mssql'; 

const dbSettings = {
    user: 'nodejs',
    password: 'ArisFutbol2022.',
    server: 'cffolympia.database.windows.net', 
    database: 'olympiadb' ,
    options: {
        encrypt: true,  // for azure
        trustServerCertificate: true,   // change to true for local dev /self-signed certs
    }, 
};

 async function getConnnection() {
     try{
        const pool = await sql.connect(dbSettings); 
        return pool;
     } catch (error) {
         console.error(error)
     }
    
 }

 getConnnection();