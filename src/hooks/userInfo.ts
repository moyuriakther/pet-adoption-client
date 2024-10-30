import { useEffect, useState } from "react";
import { getFromLocalStorage } from "@/utils/local-storage";
import { decodedToken } from "@/utils/jwt";
import { JwtPayload } from "jwt-decode";
import { authKey } from "@/constants/authKey";

const useUserInfo = (): any | string => {
  const [userInfo, setUserInfo] = useState<any | string>("");
  const authToken = getFromLocalStorage(authKey);
  useEffect(() => {
    const fetchUserInfo = () => {
      if (authToken) {
        const decodedData: JwtPayload & { role: any } = decodedToken(
          authToken
        ) as JwtPayload & {
          role: any;
        };
        const userInfo: any = {
          ...decodedData,
        };
        setUserInfo(userInfo);
      } else {
        setUserInfo("");
      }
    };

    fetchUserInfo();
  }, [authToken]);

  return userInfo;
};

export default useUserInfo;
