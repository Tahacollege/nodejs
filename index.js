const express=require('express')
const app=express();
const path=require('path')
const body_parser=require('body-parser');
const port=process.env.PORT || 4000;
const cookieParser=require("cookie-parser");
var session=require('express-session');

//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname , '/public')));
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(
    session({
        secret:"BurhaniBag",
        resave:false,
        saveUninitialized:false
    })
)
const folder=path.join(__dirname,'htmlfiles')
const connection=require('./conn');
const { ObjectId } = require('mongodb');
app.get("/",(req,resp)=>{
    if(req.session.username){
        var username=req.session.username
        resp.render(`${folder}/index.ejs`,{username})
    }
    else{
    var username=undefined
    resp.render(`${folder}/index.ejs`,{username})
    }
})
app.get("/products",async(req,resp)=>{
    id=req.query.id
    var username=req.session.username
    if(id==1){
    var db=await connection
    var collection=db.collection('Ladies_Items')
    var data=await collection.find({}).toArray()
    resp.render(`${folder}/products.ejs`,{data,username})
    }
    else if(id==2){
        var db=await connection
        var collection=db.collection('School_Bags')
        var data=await collection.find({}).toArray()
        resp.render(`${folder}/products.ejs`,{data,username})
        }
        else if(id==3){
            var db=await connection
            var collection=db.collection('Trolly')
            var data=await collection.find({}).toArray()
            resp.render(`${folder}/products.ejs`,{data,username})
            }
            else if(id==4){
                var db=await connection
                var collection=db.collection('Travelling_bags')
                var data=await collection.find({}).toArray()
                resp.render(`${folder}/products.ejs`,{data,username})
                }
                else if(id==5){
                    var db=await connection
                    var collection=db.collection('Office_and_sideBags')
                    var data=await collection.find({}).toArray()
                    resp.render(`${folder}/products.ejs`,{data,id,username})
                    }
})
app.get('/product',async(req,resp)=>{
    id=req.query.id
    cid=req.query.cid
    var username=req.session.username
    if(cid==1){
        var arr=['659555add5baa3ca1a7995f3','6595564ad5baa3ca1a7995f7','65955668d5baa3ca1a7995f9','659556aad5baa3ca1a7995fc','659556e5d5baa3ca1a7995ff','6595570cd5baa3ca1a799601','65955763d5baa3ca1a799605','6595579ed5baa3ca1a799608','659557d4d5baa3ca1a79960b','65955825d5baa3ca1a79960f','6595587bd5baa3ca1a799612','659558c8d5baa3ca1a799615','659558ffd5baa3ca1a799617','6595593ed5baa3ca1a79961a','65955970d5baa3ca1a79961d','659559a3d5baa3ca1a799620','659559d8d5baa3ca1a799623','65955a10d5baa3ca1a799626','65955ae2d5baa3ca1a799629','65955b05d5baa3ca1a79962a','65955b3cd5baa3ca1a79962d','65955b60d5baa3ca1a79962f','65955b7fd5baa3ca1a799630','65955bf3d5baa3ca1a799635','65955c23d5baa3ca1a799638','65955c5ed5baa3ca1a79963a','65955d4fd5baa3ca1a79963d','65955d76d5baa3ca1a79963f','65955d9fd5baa3ca1a799641','65955db1d5baa3ca1a799642','65955e15d5baa3ca1a799644','65955e33d5baa3ca1a799646','65955e4ad5baa3ca1a799647','65955e66d5baa3ca1a799648','65955e74d5baa3ca1a799649','65955eced5baa3ca1a79964e','65955eedd5baa3ca1a799650','65955f03d5baa3ca1a799651','65955f6ad5baa3ca1a799655','65955fa9d5baa3ca1a799657','65955fe8d5baa3ca1a79965a','65955fffd5baa3ca1a79965b','6595602bd5baa3ca1a79965d','65956042d5baa3ca1a79965f','6595605ad5baa3ca1a799660','6595606cd5baa3ca1a799661','65956092d5baa3ca1a799663','659560bbd5baa3ca1a799665']
        var ran1=Math.floor(Math.random()*49)
        var ran2=Math.floor(Math.random()*49)
        var ran3=Math.floor(Math.random()*49)
        var ran4=Math.floor(Math.random()*49)
        var db=await connection
        var collection_name='Ladies_Items'
        var collection=db.collection('Ladies_Items')
        var data=await collection.findOne({_id:new ObjectId(id)})
        var sm1=await collection.findOne({_id:new ObjectId(arr[ran1])})
        var sm2=await collection.findOne({_id:new ObjectId(arr[ran2])})
        var sm3=await collection.findOne({_id:new ObjectId(arr[ran3])})
        var sm4=await collection.findOne({_id:new ObjectId(arr[ran4])})
        resp.render(`${folder}/product.ejs`,{data,cid,sm1,sm2,sm3,sm4,collection_name,username})
    }
    else if(cid==2){
        var arr=['65956d8f5081a3c588d1693d','65956dde5081a3c588d1693e','65956df05081a3c588d1693f','65956e0b5081a3c588d16940','65956e1a5081a3c588d16941','65956e2f5081a3c588d16942','65956e395081a3c588d16943','65956e4d5081a3c588d16944','65956e575081a3c588d16945','65956e675081a3c588d16946','65956e7b5081a3c588d16947','65956e875081a3c588d16948','65956e925081a3c588d16949','65956ea55081a3c588d1694a','65956ebc5081a3c588d1694b','65956ee75081a3c588d1694d','65956ef65081a3c588d1694e','65956f0c5081a3c588d1694f','65956f265081a3c588d16950','65956f4a5081a3c588d16951','65956f585081a3c588d16952','65956f625081a3c588d16953','65956f7e5081a3c588d16954','65956f955081a3c588d16955','65956faa5081a3c588d16956','65956fc05081a3c588d16957','65956fd25081a3c588d16958','65956fe45081a3c588d16959','65956ff85081a3c588d1695a','6595700e5081a3c588d1695b','659570265081a3c588d1695c','659570425081a3c588d1695d','659570585081a3c588d1695e','6595706f5081a3c588d1695f','659570875081a3c588d16960','6595709f5081a3c588d16961','659570b25081a3c588d16962','659570cd5081a3c588d16963','659570e35081a3c588d16964','659570fb5081a3c588d16965','6595713f5081a3c588d16967','659571535081a3c588d16968','6595717e5081a3c588d1696a','659571945081a3c588d1696b','659571ab5081a3c588d1696c','659571c65081a3c588d1696d','659571e45081a3c588d1696e','659571f75081a3c588d1696f','659572125081a3c588d16970','6595722f5081a3c588d16971','659572435081a3c588d16972','6595725e5081a3c588d16973','659572735081a3c588d16974','659572855081a3c588d16975','6595729a5081a3c588d16976','659572b35081a3c588d16977','659572c05081a3c588d16978','659572d55081a3c588d16979','659572ed5081a3c588d1697a','659573045081a3c588d1697b','6595732d5081a3c588d1697c','659573415081a3c588d1697d','6595735a5081a3c588d1697e','659573825081a3c588d16980','659573975081a3c588d16981','659573b35081a3c588d16982','659573cd5081a3c588d16983','659573e35081a3c588d16984','659574005081a3c588d16985','6595741b5081a3c588d16986']
        console.log(arr.length)
        var ran1=Math.floor(Math.random()*70)
        var ran2=Math.floor(Math.random()*70)
        var ran3=Math.floor(Math.random()*70)
        var ran4=Math.floor(Math.random()*70)
        var collection_name='School_Bags'
        var db=await connection
        var collection=db.collection('School_Bags')
        var data=await collection.findOne({_id:new ObjectId(id)})
        var sm1=await collection.findOne({_id:new ObjectId(arr[ran1])})
        var sm2=await collection.findOne({_id:new ObjectId(arr[ran2])})
        var sm3=await collection.findOne({_id:new ObjectId(arr[ran3])})
        var sm4=await collection.findOne({_id:new ObjectId(arr[ran4])})
        resp.render(`${folder}/product.ejs`,{data,cid,sm1,sm2,sm3,sm4,collection_name,username})
    }
    else if(cid==3){
        var arr=['659507f504490ff542e0a733','6595083704490ff542e0a734','6595086004490ff542e0a735','6595088804490ff542e0a736','659508a804490ff542e0a737','659508d804490ff542e0a738','659508f004490ff542e0a739','6595090a04490ff542e0a73a','6595092504490ff542e0a73b','6595094b04490ff542e0a73c','6595096004490ff542e0a73d','6595097b04490ff542e0a73e','659509b804490ff542e0a73f','659509ce04490ff542e0a740','659509e304490ff542e0a741','659509fe04490ff542e0a742','65950a1704490ff542e0a743','65950d4604490ff542e0a744','65951f1a04490ff542e0a745','65951f3604490ff542e0a746','65951f4904490ff542e0a747','65951f6204490ff542e0a748','65951f7c04490ff542e0a749','65951faf04490ff542e0a74a','65951fc504490ff542e0a74b',]
        var ran1=Math.floor(Math.random()*25)
        var ran2=Math.floor(Math.random()*25)
        var ran3=Math.floor(Math.random()*25)
        var ran4=Math.floor(Math.random()*25)
        var collection_name='Trolly'
        var db=await connection
        var collection=db.collection('Trolly')
        var data=await collection.findOne({_id:new ObjectId(id)})
        var sm1=await collection.findOne({_id:new ObjectId(arr[ran1])})
        var sm2=await collection.findOne({_id:new ObjectId(arr[ran2])})
        var sm3=await collection.findOne({_id:new ObjectId(arr[ran3])})
        var sm4=await collection.findOne({_id:new ObjectId(arr[ran4])})
        resp.render(`${folder}/product.ejs`,{data,cid,sm1,sm2,sm3,sm4,collection_name,username})
    }
    else if(cid==4){
        var arr=['6594fadc04490ff542e0a6e8','6594fb4104490ff542e0a6e9','6594fd7c04490ff542e0a6eb','6594fda604490ff542e0a6ec','6594fdbe04490ff542e0a6ed','6594fddd04490ff542e0a6ee','6594fe1d04490ff542e0a6ef','6594fe4504490ff542e0a6f0','6594fe6704490ff542e0a6f1','6594fe8004490ff542e0a6f2','6594fed504490ff542e0a6f4','6594ff0a04490ff542e0a6f5','6594ff5004490ff542e0a6f7','6594ff6d04490ff542e0a6f8','6594ffac04490ff542e0a6fa','6594ffd104490ff542e0a6fb','6594ffe604490ff542e0a6fc','6595000904490ff542e0a6fd','6595001f04490ff542e0a6fe','6595004e04490ff542e0a6ff','6595006904490ff542e0a700','6595008104490ff542e0a701','659500a004490ff542e0a702','6595013e04490ff542e0a703','6595016504490ff542e0a704','6595017d04490ff542e0a705','6595019a04490ff542e0a706','659501b504490ff542e0a707','659501c904490ff542e0a708','659501e704490ff542e0a709','6595021204490ff542e0a70a','6595025304490ff542e0a70b','6595027104490ff542e0a70c','65955060d5baa3ca1a7995c7','65955096d5baa3ca1a7995c8','659550c8d5baa3ca1a7995c9','659550fcd5baa3ca1a7995ca','65955113d5baa3ca1a7995cb','6595512cd5baa3ca1a7995cc','65955148d5baa3ca1a7995cd','6595516dd5baa3ca1a7995ce','6595518ed5baa3ca1a7995cf','6595519fd5baa3ca1a7995d0','659551bbd5baa3ca1a7995d1','659551d3d5baa3ca1a7995d2','659551e8d5baa3ca1a7995d3','65955202d5baa3ca1a7995d4','65955219d5baa3ca1a7995d5','65955233d5baa3ca1a7995d6','65955249d5baa3ca1a7995d7','6595525fd5baa3ca1a7995d8','6595527ed5baa3ca1a7995d9','659552a8d5baa3ca1a7995da','659552c2d5baa3ca1a7995db','659552dfd5baa3ca1a7995dc','659552ffd5baa3ca1a7995dd','65955310d5baa3ca1a7995de','65955327d5baa3ca1a7995df','6595533fd5baa3ca1a7995e0','65955358d5baa3ca1a7995e1','65955372d5baa3ca1a7995e2','65955393d5baa3ca1a7995e3','659553dad5baa3ca1a7995e4','65955419d5baa3ca1a7995e5','65955431d5baa3ca1a7995e6','6595544cd5baa3ca1a7995e7','65955461d5baa3ca1a7995e8','65955483d5baa3ca1a7995e9','6595549bd5baa3ca1a7995ea','659554b1d5baa3ca1a7995eb','659554ccd5baa3ca1a7995ec','659554e3d5baa3ca1a7995ed','659554fdd5baa3ca1a7995ee','65955513d5baa3ca1a7995ef','6595552ad5baa3ca1a7995f0','6595553fd5baa3ca1a7995f1']
        var ran1=Math.floor(Math.random()*79)
        var ran2=Math.floor(Math.random()*79)
        var ran3=Math.floor(Math.random()*79)
        var ran4=Math.floor(Math.random()*79)
        var collection_name='Travelling_bags'
        var db=await connection
        var collection=db.collection('Travelling_bags')
        var data=await collection.findOne({_id:new ObjectId(id)})
        var sm1=await collection.findOne({_id:new ObjectId(arr[ran1])})
        var sm2=await collection.findOne({_id:new ObjectId(arr[ran2])})
        var sm3=await collection.findOne({_id:new ObjectId(arr[ran3])})
        var sm4=await collection.findOne({_id:new ObjectId(arr[ran4])})
        resp.render(`${folder}/product.ejs`,{data,cid,sm1,sm2,sm3,sm4,collection_name,username})
    }
    else if(cid==5){
        var arr=['6595037304490ff542e0a70f','659503ac04490ff542e0a712','659503ea04490ff542e0a715','6595041f04490ff542e0a718','6595044604490ff542e0a71a','6595045e04490ff542e0a71b','6595048a04490ff542e0a71d','659504a704490ff542e0a71e','659504dd04490ff542e0a71f','659504f304490ff542e0a720','6595051904490ff542e0a721','6595053204490ff542e0a722','6595054c04490ff542e0a723','6595056904490ff542e0a724','6595058c04490ff542e0a725','659505ad04490ff542e0a726','659505c604490ff542e0a727','659505e404490ff542e0a728','6595060504490ff542e0a729','6595062904490ff542e0a72a','6595065404490ff542e0a72b','6595066c04490ff542e0a72c','6595068a04490ff542e0a72d','659506d504490ff542e0a72e','659506ec04490ff542e0a72f','6595071004490ff542e0a730','6595072804490ff542e0a731',]
        var ran1=Math.floor(Math.random()*27)
        var ran2=Math.floor(Math.random()*27)
        var ran3=Math.floor(Math.random()*27)
        var ran4=Math.floor(Math.random()*27)
        var collection_name='Office_and_sideBags'
        var db=await connection
        var collection=db.collection('Office_and_sideBags')
        var data=await collection.findOne({_id:new ObjectId(id)})
        var sm1=await collection.findOne({_id:new ObjectId(arr[ran1])})
        var sm2=await collection.findOne({_id:new ObjectId(arr[ran2])})
        var sm3=await collection.findOne({_id:new ObjectId(arr[ran3])})
        var sm4=await collection.findOne({_id:new ObjectId(arr[ran4])})
        resp.render(`${folder}/product.ejs`,{data,cid,sm1,sm2,sm3,sm4,collection_name,username})
    }
    
})
app.post('/signup',async(req,resp)=>{
    var db=await connection
    var collection=db.collection('User_Data')
    var name=req.body.username
    var email=req.body.email
    var password=req.body.upassword
    var confirm_password=req.body.cpassword
    if(password!=confirm_password){
        resp.render(`${folder}/index.ejs`)
    }
    else{
        var users=await collection.findOne({'email':email})
        if(users){
            resp.send('Email Already Exists')
        }
        else{
        var data=await collection.insertOne({
            "name":name,
            'email':email,
            "password":password,
            
        })
        req.session.username=name
        var username=req.session.username
        resp.render(`${folder}/index.ejs`,{username})
    }
        
    }
})
app.post('/login',async(req,resp)=>{
    var db=await connection
    var collection=db.collection('User_Data')
    var name=req.body.username
    var email=req.body.email
    var password=req.body.password
    var data=await collection.findOne({'name':name,"email":email,'password':password})
    if(data){
        req.session.username=name
        var username=req.session.username
        resp.render(`${folder}/index.ejs`,{username})
    }
    else{
        resp.send("No User Found Check Your Credentials Again")
    }
})
app.get('/logout',(req,resp)=>{
    req.session.username=undefined
    var username=req.session.username
        resp.render(`${folder}/index.ejs`,{username})
    
})
app.get('/user',async(req,resp)=>{
    var username=req.session.username
    if(req.query.id && username &&req.query.cname){
        console.log(username)
        var pid=req.query.id
        var collection_name=req.query.cname
        var count=1
        var db=await connection
        var collection=db.collection('User_Data')
        var userinfo=await collection.findOne({'name':username})
        var collection2=db.collection(collection_name)
        var cart=db.collection('Cart')
        var cartitems=await cart.findOne({'username':username,'product_id':pid})
        if(cartitems){
            var count=cartitems.count+1
            var cart_collection=await cart.updateOne({'username':username,'product_id':pid},{$set:{'count':count}})
        }
        else{
        var cart_collection=await cart.insertOne({'username':username,'product_id':pid,'collection_name':collection_name,'count':count})
        }
        var cartdata=await cart.find({'username':username}).toArray()
        var cartproducts=[]
        for (let d of cartdata){
            cartproducts.push(d.product_id)
        }
        var len=cartproducts.length
        var cart_prs=[]
        var prscount=[]
        for (var i=0;i<len;i++){
            var prs=await cart.findOne({'username':username,product_id:cartproducts[i]})
            prscount.push(prs.count)
            var cart_coll_name=db.collection(prs.collection_name)
            var product_info=await cart_coll_name.findOne({_id:new ObjectId(cartproducts[i])})
            cart_prs.push(product_info)
            
        }
        //resp.send(cart_prs)
        //resp.send(prscount)
        resp.render(`${folder}/user.ejs`,{username,userinfo,cart_prs,prscount})
        
    }
    else if(username){
        var id=0
    var db=await connection
    var cart=db.collection('Cart')
    var cartitems=await cart.find({'username':username}).toArray()
    if(cartitems){
    var cartproducts=[]
    for (let d of cartitems){
        cartproducts.push(d.product_id)
    }
    var len=cartproducts.length
    var cart_prs=[]
    var prscount=[]
    for(let i=0;i<len;i++){
        var prs=await cart.findOne({'username':username,product_id:cartproducts[i]})
        prscount.push(prs.count)
            var cart_coll_name=db.collection(prs.collection_name)
            var product_info=await cart_coll_name.findOne({_id:new ObjectId(cartproducts[i])})
            cart_prs.push(product_info)
    }
    var collection=db.collection('User_Data')
    var userinfo=await collection.findOne({'name':username})
    var updateinfo=await collection.updateOne({'name':username},{$set:{'product_id':pid}})
    resp.render(`${folder}/user.ejs`,{username,userinfo,cart_prs,prscount})
    }
    else{
        var id=0
    var db=await connection
    var cart_prs=undefined
    var collection=db.collection('User_Data')
    var userinfo=await collection.findOne({'name':username})
    var updateinfo=await collection.updateOne({'name':username},{$set:{'product_id':pid}})
    resp.render(`${folder}/user.ejs`,{username,userinfo,cart_prs})
    }
}

    else{
        resp.send('Please login!!! Or Create An Account')
    }
})
app.post('/change_password',async(req,resp)=>{
    var password=req.body.password
    var username=req.session.username
    var db=await connection
    var collection=db.collection('User_Data')
    var userup=await collection.updateOne({'name':username},{$set:{'password':password}})
    var userinfo=await collection.findOne({'name':username})
    var id=0
    var cart=db.collection('Cart')
    var cartitems=await cart.find({'username':username}).toArray()
    if(cartitems){
    var cartproducts=[]
    for (let d of cartitems){
        cartproducts.push(d.product_id)
    }
    var len=cartproducts.length
    var cart_prs=[]
    var prscount=[]
    for(let i=0;i<len;i++){
        var prs=await cart.findOne({product_id:cartproducts[i]})
        prscount.push(prs.count)
            var cart_coll_name=db.collection(prs.collection_name)
            var product_info=await cart_coll_name.findOne({_id:new ObjectId(cartproducts[i])})
            cart_prs.push(product_info)
    }
    var collection=db.collection('User_Data')
    var userinfo=await collection.findOne({'name':username})
    resp.render(`${folder}/user.ejs`,{username,userinfo,cart_prs,prscount})
    }else{
        var id=0
    var db=await connection
    var cart_prs=undefined
    var collection=db.collection('User_Data')
    var userinfo=await collection.findOne({'name':username})
    var updateinfo=await collection.updateOne({'name':username},{$set:{'product_id':pid}})
    resp.render(`${folder}/user.ejs`,{username,userinfo,cart_prs})
    }

})
app.post('/additonal_details',async(req,resp)=>{
    var username=req.session.username
    var number=req.body.number
    var address=req.body.address
    var landmark=req.body.landmark
    var pincode=req.body.pincode
    var db=await connection
    var collection=db.collection('User_Data')
    if(number.length>0 &&address.length>0 &&landmark.length>0 &&pincode.length>0){
        var userup=await collection.updateOne({'name':username},{$set:{
            'number':number,
            'address':address,
            'landmark':landmark,
            'pincode':pincode
        }})
        var userinfo=await collection.findOne({'name':username})
    }
    else if(number.length>0){
        var userup=await collection.updateOne({'name':username},{$set:{
            'number':number,
        }})
        var userinfo=await collection.findOne({'name':username})
    }
    else if(address.length>0){
        var userup=await collection.updateOne({'name':username},{$set:{
            'address':address,
        }})
        var userinfo=await collection.findOne({'name':username})
    }
    else if(landmark.length>0){
        var userup=await collection.updateOne({'name':username},{$set:{
            'landmark':landmark,
        }})
        var userinfo=await collection.findOne({'name':username})
    }
    else if(pincode.length>0){
        var userup=await collection.updateOne({'name':username},{$set:{
            'pincode':pincode,
        }})
        var userinfo=await collection.findOne({'name':username})
    }
    else{
    var userinfo=await collection.findOne({'name':username})
    }
    
    var id=0
    var cart=db.collection('Cart')
    var cartitems=await cart.find({'username':username}).toArray()
    if(cartitems){
    var cartproducts=[]
    for (let d of cartitems){
        cartproducts.push(d.product_id)
    }
    var len=cartproducts.length
    var cart_prs=[]
    var prscount=[]
    for(let i=0;i<len;i++){
        var prs=await cart.findOne({product_id:cartproducts[i]})
        prscount.push(prs.count)
            var cart_coll_name=db.collection(prs.collection_name)
            var product_info=await cart_coll_name.findOne({_id:new ObjectId(cartproducts[i])})
            cart_prs.push(product_info)
    }
    var collection=db.collection('User_Data')
    var userinfo=await collection.findOne({'name':username})
    resp.render(`${folder}/user.ejs`,{username,userinfo,cart_prs,prscount})
    }else{
        var id=0
    var db=await connection
    var cart_prs=undefined
    var collection=db.collection('User_Data')
    var userinfo=await collection.findOne({'name':username})
    var updateinfo=await collection.updateOne({'name':username},{$set:{'product_id':pid}})
    resp.render(`${folder}/user.ejs`,{username,userinfo,cart_prs})
    }
    
})
app.post('/Search',async(req,resp)=>{
    var username=req.session.username
    var db=await connection
    var search=db.collection('searches')
    var search_query=req.body.search
    var sq=search_query.split(" ")
    
    var result=await search.find({"name":{$regex:".*"+sq[0]+".*",$options:'i'}}).toArray()
    if(result){
        resp.render(`${folder}/searchresult.ejs`,{result,username})
    }
    else {
        resp.send("No Result found")
    }
})
app.get('/Cover',(req,resp)=>{
    var username=req.session.username
    resp.render(`${folder}/suitcase_cover.ejs`,{username})
})
app.post('/buynow',async(req,resp)=>{
    var id=req.body.id
    var username=req.session.username
    var collection_id=req.body.collection_id
    var db=await connection
    var Message=undefined
    if(username){
    if(collection_id==1){
        var usercoll=db.collection('Cart')
        var usercartinfo=await usercoll.findOne({'username':username,"product_id":id})
        var userdata=db.collection('User_Data')
        var userinfo=await userdata.findOne({'name':username})
        if(usercartinfo){
            var count=usercartinfo.count
        }else{
            var count=1
        }
        var collection=db.collection('Ladies_Items')
        var data=await collection.findOne({'_id':new ObjectId(id)})
        resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
    }
    else if(collection_id==2){
        var usercoll=db.collection('Cart')
        var usercartinfo=await usercoll.findOne({'username':username,"product_id":id})
        var userdata=db.collection('User_Data')
        var userinfo=await userdata.findOne({'name':username})
        if(usercartinfo){
            var count=usercartinfo.count
        }else{
            var count=1
        }
        var collection=db.collection('School_Bags')
        var data=await collection.findOne({'_id':new ObjectId(id)})
        resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
    }
    else if(collection_id==3){
        var usercoll=db.collection('Cart')
        var usercartinfo=await usercoll.findOne({'username':username,"product_id":id})
        var userdata=db.collection('User_Data')
        var userinfo=await userdata.findOne({'name':username})
        if(usercartinfo){
            var count=usercartinfo.count
        }else{
            var count=1
        }
        var collection=db.collection('Trolly')
        var data=await collection.findOne({'_id':new ObjectId(id)})
        resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
    }
    else if(collection_id==4){
        var usercoll=db.collection('Cart')
        var usercartinfo=await usercoll.findOne({'username':username,"product_id":id})
        var userdata=db.collection('User_Data')
        var userinfo=await userdata.findOne({'name':username})
        if(usercartinfo){
            var count=usercartinfo.count
        }else{
            var count=1
        }
        var collection=db.collection('Travelling_bags')
        var data=await collection.findOne({'_id':new ObjectId(id)})
        resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
    }
    else if(collection_id==5){
        var usercoll=db.collection('Cart')
        var usercartinfo=await usercoll.findOne({'username':username,"product_id":id})
        var userdata=db.collection('User_Data')
        var userinfo=await userdata.findOne({'name':username})
        if(usercartinfo){
            var count=usercartinfo.count
        }else{
            var count=1
        }
        var collection=db.collection('Office_and_sideBags')
        var data=await collection.findOne({'_id':new ObjectId(id)})
        resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
    }
}else{
    resp.send('Please login!!! Or Create An Account')
}
})
app.post('/buynowmodify',async(req,resp)=>{
    var username=req.session.username
    var db=await connection
    var Message=undefined
    var col2=db.collection('User_Data')
    var userinfo=await col2.findOne({'name':username})
    if(req.body.quantity){
        var count=Number(req.body.quantity)
        var pid=req.body.pid
        var cid=req.body.collectionname
        var collection=db.collection('Cart')
        var udata=await collection.findOne({'username':username,'product_id':pid})
        if(udata){
            var udata=await collection.updateOne({'username':username,'product_id':pid},{$set:{
                'count':count
            }})
        }
        if(cid==1){
            var collection=db.collection('Ladies_Items')
            var data=await collection.findOne({'_id':new ObjectId(pid)})
            resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
        }
        else if(cid==2){
            var collection=db.collection('School_Bags')
            var data=await collection.findOne({'_id':new ObjectId(pid)})
            resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
        }
        else if(cid==3){
            var collection=db.collection('Trolly')
            var data=await collection.findOne({'_id':new ObjectId(pid)})
            resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
        }
        else if(cid==4){
            var collection=db.collection('Travelling_bags')
            var data=await collection.findOne({'_id':new ObjectId(pid)})
            resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
        }
        else if(cid==5){
            var collection=db.collection('Office_and_sideBags')
            var data=await collection.findOne({'_id':new ObjectId(pid)})
            resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
        }
    }else{
    var number=req.body.number
    var address=req.body.address
    var landmark=req.body.landmark
    var pincode=req.body.pincode
    var count=1
    var id=req.body.pid
    var cid=req.body.collectionname
    if(number.length>0 &&address.length>0 &&landmark.length>0 &&pincode.length>0){
        var userup=await col2.updateOne({'name':username},{$set:{
            'number':number,
            'address':address,
            'landmark':landmark,
            'pincode':pincode
        }})
        var userinfo=await col2.findOne({'name':username})
    }
    else if(number.length>0){
        var userup=await col2.updateOne({'name':username},{$set:{
            'number':number,
        }})
        var userinfo=await col2.findOne({'name':username})
    }
    else if(address.length>0){
        var userup=await col2.updateOne({'name':username},{$set:{
            'address':address,
        }})
        var userinfo=await col2.findOne({'name':username})
    }
    else if(landmark.length>0){
        var userup=await col2.updateOne({'name':username},{$set:{
            'landmark':landmark,
        }})
        var userinfo=await col2.findOne({'name':username})
    }
    else if(pincode.length>0){
        var userup=await col2.updateOne({'name':username},{$set:{
            'pincode':pincode,
        }})
        var userinfo=await col2.findOne({'name':username})
    }
    else{
    var userinfo=await col2.findOne({'name':username})
    }
    
    if(cid==1){
        var collection=db.collection('Ladies_Items')
        var data=await collection.findOne({'_id':new ObjectId(id)})
        resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
    }
    else if(cid==2){
        var collection=db.collection('School_Bags')
        var data=await collection.findOne({'_id':new ObjectId(id)})
        resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
    }
    else if(cid==3){
        var collection=db.collection('Trolly')
        var data=await collection.findOne({'_id':new ObjectId(id)})
        resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
    }
    else if(cid==4){
        var collection=db.collection('Travelling_bags')
        var data=await collection.findOne({'_id':new ObjectId(id)})
        resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
    }
    else if(cid==5){
        var collection=db.collection('Office_and_sideBags')
        var data=await collection.findOne({'_id':new ObjectId(id)})
        resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
    }
    
}  
})
app.get('/delete_from_cart',async(req,resp)=>{
    var username=req.session.username
    pid=req.query.pid
    var db=await connection
    var cart=db.collection('Cart')
    var cartdetails=await cart.deleteOne({'username':username,'product_id':pid})
    var id=0
    var db=await connection
    var cart=db.collection('Cart')
    var cartitems=await cart.find({'username':username}).toArray()
    if(cartitems){
    var cartproducts=[]
    for (let d of cartitems){
        cartproducts.push(d.product_id)
    }
    var len=cartproducts.length
    var cart_prs=[]
    var prscount=[]
    for(let i=0;i<len;i++){
        var prs=await cart.findOne({product_id:cartproducts[i]})
        prscount.push(prs.count)
            var cart_coll_name=db.collection(prs.collection_name)
            var product_info=await cart_coll_name.findOne({_id:new ObjectId(cartproducts[i])})
            cart_prs.push(product_info)
    }
    var collection=db.collection('User_Data')
    var userinfo=await collection.findOne({'name':username})
    var updateinfo=await collection.updateOne({'name':username},{$set:{'product_id':pid}})
    resp.render(`${folder}/user.ejs`,{username,userinfo,cart_prs,prscount})
}
})
app.post('/email',async(req,resp)=>{
    var username=req.session.username
    var pid=req.body.pid
    var colname=req.body.colname
    var count=req.body.count
    var Message="Order Request Send Successfully!!"
    var db=await connection
    var collection=db.collection(colname)
    var data=await collection.findOne({'_id':new ObjectId(pid)})
    var totalamount=count*data.prize.slice(1,)
    var ucoll=db.collection('User_Data')
    var userinfo=await ucoll.findOne({'name':username});
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'isai.lang7@ethereal.email',
        pass: 'x1AA1K7FNbyw8vnXw6'
    }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: userinfo.email, // sender address
    to: 'homesjames869@gmail.com', // list of receivers
    subject: "Order Received ✔", // Subject line
    text: `
           ProductId:- ${data._id}
           ProductName:- ${data.name} 
           ActualPrize:- ${data.prize}
           ProductQuantity:- ${count} 
           TotalAmount:- ₹${totalamount}
           Delevired To:- ${userinfo.name}
           Address:- ${userinfo.address}
           Landmark:- ${userinfo.landmark}
           Mobilenumber:- ${userinfo.number}
    ` , // plain text body
    html: "", // html body
  });

  resp.render(`${folder}/buynow.ejs`,{data,count,username,userinfo,Message})
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);

})
app.listen(port)