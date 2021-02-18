const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const moment = require('moment')
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const jsonParser = bodyParser.json()
const db = require('./db_connet.js')
app.get('/product/:category', async (req, res) => {
  const category =parseInt(req.params.category)
   const output = {
        page: 0,
        perPage: 9,
        totalRows: 0,
        totalPages: 0,
        rows: [],
        pages: []
    };
    //如果有 category 就算有幾筆 如果 category=0 就搜全部
    let totalRows = null
    if(category!==0){
    [[{ totalRows }]] = await db.query(`SELECT COUNT(1) totalRows FROM product WHERE category = ${category}`);
    } else{
    [[{ totalRows }]] = await db.query(`SELECT COUNT(1) totalRows FROM product`)
    }
 
  if(totalRows>0){
        let page = parseInt(req.query.page) || 1;
        output.totalRows = totalRows;
        output.totalPages = Math.ceil(totalRows/output.perPage);

        if(page < 1) {
            output.page = 1;
        } else if(page > output.totalPages) {
            output.page = output.totalPages;
        } else {
            output.page = page;
        }
        (function(page, totalPages, prevNum){
            let pages = [];
            if(totalPages <= prevNum*2+1){
                for(let i=1; i<=totalPages; i++){
                    pages.push(i);
                }
            } else {
                const fAr = [], bAr = [];
                for(let i=page-prevNum; i<=totalPages; i++){
                    if(i>=1){
                        fAr.push(i);
                    }
                    if(fAr.length >= prevNum*2+1) break;
                }       
                for(let i=page+prevNum; i>=1; i--){
                    if(i<=totalPages){
                        bAr.unshift(i);
                    }
                    if(bAr.length >= prevNum*2+1) break;
                }
                pages = fAr.length > bAr.length ? fAr : bAr;
            }
            output.pages = pages;
        })(page, output.totalPages, 3)}
        // SELECT * FROM product where category = 1
        let sql = ''
          if(category===0){
         sql = `SELECT * FROM product LIMIT ${(output.page-1)*output.perPage}, ${output.perPage}`;
          }else {
         sql= `SELECT * FROM product WHERE category = ${category} LIMIT ${(output.page-1)*output.perPage}, ${output.perPage} `;
          }

          const [r2] = await db.query(sql);
          output.rows = r2;
          res.json(output)
})
app.post('/login',jsonParser,async (req,res)=>{
   const output = {
    body: req.body,
    success: false,
  } 
  const sql = 'SELECT * FROM `user` WHERE email = ? AND password= ?'
  
  const [rs] = await db.query(sql, [req.body.email, req.body.password])
  if (rs.length) {
    output.success = true
    output.token = jwt.sign({ ...rs[0] }, process.env.TOKEN_SECRET)
    res.json(output)
  } else {
    res.status(404).send({ error: '帳號或密碼錯誤,請重新輸入' })
  }
})
app.post('/user',jsonParser,async(req,res)=>{
const sql = 'SELECT * FROM `user` WHERE email=?'
const [rs] = await db.query(sql, req.body.email)
if (rs.length == 0){
  const sql =
      'INSERT INTO `user`(`uid`, `name`, `email`, `password`, `phone`, `address`) VALUES (?,?,?,?,?,?)'
      const [result] = await db.query(sql, [
      uuidv4(),
      req.body.name,
      req.body.email,
      req.body.password,
      req.body.phone,
      req.body.address,
    ])
    res.json('創建成功')

}   else {
    res.status(404).send({ error: '此信箱已經註冊過了請換一個' })
  }
})
app.get('/search/:keyword',async(req, res)=>{
   const keyword =req.params.keyword
     console.log(keyword)
   let totalRows = null
   const output = {
        page: 0,
        perPage: 9,
        totalRows: 0,
        totalPages: 0,
        rows: [],
        pages: []
    };
    const totalsql = 'SELECT COUNT(1) totalRows FROM `product` WHERE `title` LIKE' +`'%${keyword}%'`;
    [[{ totalRows }]] = await db.query(totalsql);
     if(totalRows>0){
        let page = parseInt(req.query.page) || 1;
        output.totalRows = totalRows;
        output.totalPages = Math.ceil(totalRows/output.perPage);
        if(page < 1) {
            output.page = 1;
        } else if(page > output.totalPages) {
            output.page = output.totalPages;
        } else {
            output.page = page;
        }
        (function(page, totalPages, prevNum){
            let pages = [];
            if(totalPages <= prevNum*2+1){
                for(let i=1; i<=totalPages; i++){
                    pages.push(i);
                }
            } else {
                const fAr = [], bAr = [];
                for(let i=page-prevNum; i<=totalPages; i++){
                    if(i>=1){
                        fAr.push(i);
                    }
                    if(fAr.length >= prevNum*2+1) break;
                }       
                for(let i=page+prevNum; i>=1; i--){
                    if(i<=totalPages){
                        bAr.unshift(i);
                    }
                    if(bAr.length >= prevNum*2+1) break;
                }
                pages = fAr.length > bAr.length ? fAr : bAr;
            }
            output.pages = pages;
        })(page, output.totalPages, 3)}
        //LIMIT ${(output.page-1)*output.perPage}, ${output.perPage}`;
          sql = 'SELECT * FROM product WHERE title LIKE'+`'%${keyword}%'`+`LIMIT ${(output.page-1)*output.perPage}, ${output.perPage}`;
         const [r2] = await db.query(sql);
        output.rows=r2
         console.log(r2)
  res.json(output)
})
app.get('/current', async (req, res) => {
  jwt.verify(
    req.headers.authorization,
    process.env.TOKEN_SECRET,
    function (error, payload) {
      if (error) {
        console.log(123)
        res.json({msg:error})
      } else {
        console.log(123)
        res.json(payload)
      }
    }
  )
})
app.get('/order/:id',async(req,res)=>{
  let output = []
   sql = `SELECT * FROM customer WHERE uid=?  ORDER BY createtime DESC`
   const [result] = await db.query(sql, [req.params.id])
   const fm = 'YYYY-MM-DD'
   result.forEach((item,index)=>{
   const pdJSon = JSON.parse(item.product)
    result[index].product = pdJSon
    result[index].createtime = moment(result[index].createtime).format(fm)
   })
  // result[0].product= JSON.parse(result[0].product)
  res.json(result)
})
app.post('/order',jsonParser,async(req,res)=>{
  const sql =
    'INSERT INTO `customer`(`id`,`uid`, `name`, `address`, `phone`,`email`,`product`) VALUES (?,?,?,?,?,?,?)'
    const [result] = await db.query(sql, [
    uuidv4(),
     req.body[1].orderPayload.uid,
     req.body[1].orderPayload.name,
     req.body[1].orderPayload.address,
     req.body[1].orderPayload.phone,
     req.body[1].orderPayload.email,
     req.body[0]
  ])
  res.json({msg:'訂單成立'})
})

app.get('/detail/:id', async (req, res) => {
  sql = `SELECT * FROM product WHERE id=?`
  const [result] = await db.query(sql, [req.params.id])
res.json(result)
})
app.use(express.static('public'))
app.listen(3000, () => {
  console.log('ok')
})