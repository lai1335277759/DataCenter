/**
 * Created by Administrator on 2019/6/13.
 */
import Mock from "mockjs";
import Data from "./homeData.json";

Mock.mock("/homedate", { code: 0, data: Data.homeData });
