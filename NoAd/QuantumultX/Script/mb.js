/*
幕布破解
*/

var obj = JSON.parse($response.body);
 obj={
 "code": 0,
 "msg": null,
 "data": {
  "level": 2    ,
  "phone": null,
  "encryptPassword": null,
  "name": "虚假的会员",
  "id": 4960640,
  "passSecure": false,
  "vipEndDate": "20330912"
 }
};
$done({body: JSON.stringify(obj)});
//