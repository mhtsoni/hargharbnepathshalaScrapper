const express=require('express')
const app=express();
const request=require('request-promise');
const cheerio=require('cheerio');
const fs=require('fs');
app.set('view engine', 'ejs')//Setting the view Engine
app.use(express.static('public'))//creating a relative path to look for static files
var url="https://hargharpathshala.in/class-5-december";
app.get('/',(req,res)=>{(async ()=>{
        const response= await request({
            uri:url,
            headers:{
                "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Mobile Safari/537.36"
            }
        });
        let $ = cheerio.load(response);
        var dll='data-lazy-load';
        var Subjects1=$('h3[class="elementor-heading-title elementor-size-default"]')[0].children[0].data;
        var video1=$('iframe')[0].attribs["data-lazy-load"];
        var workSheet1=$('a[class="elementor-button-link elementor-button elementor-size-sm"]')[1].attribs.href;

        var Subjects2=$('h3[class="elementor-heading-title elementor-size-default"]')[1].children[0].data;;
        var video2=$('iframe')[1].attribs["data-lazy-load"];
        var workSheet2=$('a[class="elementor-button-link elementor-button elementor-size-sm"]')[2].attribs.href;

        var Subjects3=$('h3[class="elementor-heading-title elementor-size-default"]')[2].children[0].data;;
        var video3=$('iframe')[2].attribs["data-lazy-load"];
        var workSheet3=$('a[class="elementor-button-link elementor-button elementor-size-sm"]')[3].attribs.href;;

        var Subjects4=$('h3[class="elementor-heading-title elementor-size-default"]')[3].children[0].data;;
        var video4=$('iframe')[3].attribs["data-lazy-load"];
        var workSheet4=$('a[class="elementor-button-link elementor-button elementor-size-sm"]')[4].attribs.href;

        const accountSid = "ACb64d455245874ad07deaa3af18fc2fc6";
        const authToken = "af1b6d635bbf8a5af50b8a6364d9036d";
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                from: 'whatsapp:+14155238886',
                body: 
                Subjects1+"\n\n" + 
                "वीडियो : " + video1 + "\n\n" +
                "कार्यपत्रक :" + workSheet1 +"\n\n\n" +
                Subjects2+"\n\n" + 
                "वीडियो : " + video2 + "\n\n" +
                "कार्यपत्रक :" + workSheet2 +"\n\n\n" +
                Subjects3+"\n\n" + 
                "वीडियो : " + video3 + "\n\n" +
                "कार्यपत्रक :" + workSheet3 +"\n\n\n" +
                Subjects4+"\n\n" + 
                "वीडियो : " + video4 + "\n\n" +
                "कार्यपत्रक :" + workSheet4 +"\n"
                ,
                to: 'whatsapp:+918219338068'
            }).then(() => {    
                res.render('index')//Load the Index page as Home Page        
            }).catch(err=>{
                console.log(err.message);
            });
    })()
});
app.listen(3000,()=>{
    console.log("Listening at port 3000")
})