const {MongoClient}=require('mongodb')
const url='mongodb://0.0.0.0:27017'
const client=new MongoClient(url)
async function connection(){
    var result=await client.connect()
    var db=result.db('Bags')
    return db
}
module.exports=connection()