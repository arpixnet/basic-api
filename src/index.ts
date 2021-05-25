import server from "./server";
import dotenv from 'dotenv';
dotenv.config();

async function main() {
    server.listen(server.get('port'));
    console.log('   👍 Server run on port', server.get('port'), '🚀');
}

main();