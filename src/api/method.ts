import axios from "axios";
import { getAccessToken, getPhoneNumber, getUserInfo } from "zmp-sdk/apis";
import API from ".";
import { setStorage } from "zmp-sdk/apis";

interface IProps {
  url: string;
  method: string;
  data?: any;
  token?: any;
}

const REQUEST_API = async ({ url, method, data, token }: IProps) => {
  //   const Token = await AsyncStorage.getItem(ASYN.token);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMDMuMjI2LjI0OS4zMDo4MDAxXC9hcGlcL2xvZ2luLXphbG8tbWluaWFwcCIsImlhdCI6MTY4OTU2NDEwMCwiZXhwIjoxNjkwODYwMTAwLCJuYmYiOjE2ODk1NjQxMDAsImp0aSI6IlliTGJ5VDF1eTRLT0VuQ2kiLCJzdWIiOjMxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.71FVJWJ81jrtsFEE4oH61dC6fysluCnCBmirUDf00_U`,
  };

  const config = { method, url, data, headers };
  try {
    const res = await axios(config);
    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    if (String(e).indexOf("Network Error") !== -1) {
      throw new Error("Không có internet");
    } else {
      throw new Error();
    }
  }
};

const GET_PHONE_USER = async () => {
  try {
    const resToken = await getPhoneNumber();
    const accessToken = await getAccessToken({});
    const response = await axios({
      url: "https://graph.zalo.me/v2.0/me/info",
      headers: {
        access_token: accessToken,
        code: resToken.token,
        secret_key: "Q5U7VXpCV6BFEKHyPMqD",
      },
    });
    const numberReturn = response.data?.data?.number;
    const phoneNumber = String(numberReturn);
    const phone = phoneNumber.replace("84", "0");
    const { userInfo } = await getUserInfo({});
    let formData = new FormData();
    formData.append("phone", "0363172828");
    const [res] = await Promise.all([
      REQUEST_API({
        url: API.loginZalo(),
        method: "post",
        data: formData,
      }),
    ]);

    if (res.status) {
      const { errorKeys } = await setStorage({
        data: {
          avatarUser: userInfo.avatar || "",
          isLogin: true,
        },
      });
    } else {
      const { errorKeys } = await setStorage({
        data: {
          isLogin: false,
        },
      });
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { REQUEST_API, GET_PHONE_USER };
