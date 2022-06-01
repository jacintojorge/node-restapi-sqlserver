import sql from "mssql"; 

const dbSettings = {
    user: "nodejs",
    password: "ArisFutbol2022.",
    server: "cffolympia.database.windows.net", 
    //server: "10.0.4.180", 
    database: "olympiadb" ,
    options: {
        encrypt: true,  // for azure
        trustServerCertificate: true,   // change to true for local dev /self-signed certs
    }, 
};

export async function getConnection() {
     try{
        const pool = await sql.connect(dbSettings); 
        return pool;
     } catch (error) {
         console.error(error)
     }
    
 }

/*
// para chequear que la conexión se hace correctamente
 async function getConnnection() {
     const pool = await sql.connect(dbSettings);
     const result = await pool.request().query("SELECT 1");
     console.log(result);
 }
 getConnnection();
 */