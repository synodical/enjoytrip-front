// const axios = require("axios");
axios.defaults.baseURL = "http://apis.data.go.kr/B551011/KorService1/";

var json;
// 지역기반 관광정보 조회
async function getAreaList() {
  try {
    const res = await axios.get("/areaBasedList1", {
      params: {
        _type: "json",
        MobileOS: "WIN",
        MobileApp: "hi",
        ServiceKey:
          // process.env.API_SERVICE_KEY,
          "zwSMywdlgo3E03aEm4hFNEzkpaACYU80Fp/lGBjG7Q1b4TGfAbc+/w85V/Ge6H9XPBzoZecK2Jf4fEfuwd0zdA==",
      },
    });
    json = res.data.response.body.items.item;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  await getAreaList();
  console.log(json);
  for (let i of json) {
    console.log(i);
  }
}
main();
