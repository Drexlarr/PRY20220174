import "reflect-metadata"
import app from './app'
import {AppDataSource} from './db'

async function main(){
    try{
        await AppDataSource.initialize();
        console.log("Database connected");
    } catch(error){
        console.log(error);
    }
    app.listen(3000);
    console.log("Server is listening on port", 3000);
}

main();
