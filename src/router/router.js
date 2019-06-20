import layout from "@/views/layout";
import Home from "../views/home"; // 首页
import UltraphonicReport from  "../views/home/pacs/ultraphonicReport" // 超声诊断报告
// import Particulars from "../components/particulars"
// import Emr from "../views/home/emr"; // 电子病历数据
// import Physical from "../views/home/physical"; // 体检数据
// import ImageDate from "../views/home/imagedate"; // 影像数据
// import Ecg from "../views/home/ecg"; // 心电数据
// import Cardiocerebral from "../views/home/cardiocerebral"; // 心脑血管数据
// import Emergent from "../views/home/emergent"; // 急救急诊数据
// import Dosage from "../views/home/dosage"; // 配液配药数据
// import Fitness from "../views/home/fitness"; // 健康档案数据
// import womenHealth from "../views/home/womenhealth"; // 妇幼保健数据
// import Medical from "../views/home/medical"; // 医疗机构数据
// import MedicalWorkers from "../views/home/medicalworkers"; // 医护人员数据
// import DateDictionaries from "../views/home/datedictionaries"; //数据字典库

export default [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    meta: {title: "Login - 登录"},
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/home",
    meta: {title: "首页"},
    component: Home
  },
  // {
  //   path: "/emr",
  //   meta: {title: "电子病历数据"},
  //   component: Emr
  // },
  // {
  //   path: "/physical",
  //   meta: {title: "体检数据"},
  //   component: Physical
  // },
  // {
  //   path: "/imagedate",
  //   meta: {title: "影像数据"},
  //   component: ImageDate
  // },
  // {
  //   path: "/ecg",
  //   meta: {title: "心电数据"},
  //   component: Ecg
  // },
  // {
  //   path: "/cardiocerebral",
  //   meta: {title: "心脑血管数据"},
  //   component: Cardiocerebral
  // },
  // {
  //   path: "/emergent",
  //   meta: {title: "急救急诊数据"},
  //   component: Emergent
  // },
  // {
  //   path: "/dosage",
  //   meta: {title: "配液配药数据"},
  //   component: Dosage
  // },
  // {
  //   path: "/fitness",
  //   meta: {title: "健康档案数据"},
  //   component: Fitness
  // },
  // {
  //   path: "/womenhealth",
  //   meta: {title: "妇幼保健数据"},
  //   component: womenHealth
  // },
  // {
  //   path: "/medical",
  //   meta: {title: "医疗机构数据"},
  //   component: Medical
  // },
  // {
  //   path: "/medicalworkers",
  //   meta: {title: "医护人员数据"},
  //   component: MedicalWorkers
  // },
  // {
  //   path: "/datedictionaries",
  //   meta: {title: "数据字典库"},
  //   component: DateDictionaries
  // },
  {
    path: "/column",
    name: "column",
    component: layout,
    children: [
      {
        path: "/emr",
        name: "emr",
        meta: {title: "电子病历数据中心"},
        component: () => import("@/views/column/index.vue")
      },
      {
        path: "/physical",
        name: "physical",
        meta: {title: "检验数据中心"},
        component: () => import("@/views/column/index.vue")
      },
      {
        path: "/pacs",
        name: "pacs",
        meta: {title: "影像数据中心"},
        component: () => import("@/views/column/index.vue"),
      },
      {
        path: "/ecg",
        name: "ecg",
        meta: {title: "心电数据中心"},
        component: () => import("@/views/column/index.vue")
      },
      {
        path: "/cardiocerebral",
        name: "cardiocerebral",
        meta: {title: "心脑血管数据中心"},
        component: () => import("@/views/column/index.vue")
      },
      {
        path: "/emergency",
        name: "emergency",
        meta: {title: "急救急诊数据中心"},
        component: () => import("@/views/column/index.vue")
      },
      {
        path: "/dispensing",
        name: "dispensing",
        meta: {title: "配液配药数据中心"},
        component: () => import("@/views/column/index.vue")
      },
      {
        path: "/healthrecord",
        name: "healthrecord",
        meta: {title: "健康档案数据中心"},
        component: () => import("@/views/column/index.vue")
      },
      {
        path: "/womenhealth",
        name: "womenhealth",
        meta: {title: "妇幼保健数据中心"},
        component: () => import("@/views/column/index.vue")
      },
      {
        path: "/medical",
        name: "medical",
        meta: {title: "医疗机构数据中心"},
        component: () => import("@/views/column/index.vue")
      },
      {
        path: "/medicalworkers",
        name: "medicalworkers",
        meta: {title: "医护人员数据中心"},
        component: () => import("@/views/column/index.vue")
      },
      {
        path: "/dictionary",
        name: "dictionary",
        meta: {title: "数据字典库中心"},
        component: () => import("@/views/column/index.vue")
      },
      {
        path: "/particulars",
        name: "particulars",
        meta: {title: "数据中心详情"},
        component: () => import("@/views/home/particulars/index.vue"),
        children: [
          {
            path: '/particulars',
            redirect: '/particulars/ultraphonicReport'
          },
          {
            path: "/particulars/ultraphonicReport",
            name: "ultraphonicReport",
            meta: {title: "超声诊断报告单"},
            component: () => import("@/views/home/pacs/ultraphonicReport/index.vue")
          },
          {
            path: "/particulars/panoramicMouthCT",
            name: "panoramicMouthCT",
            meta: {title: "全景口腔CT检查报告书"},
            component: () => import("@/views/home/pacs/panoramicMouthCT/index.vue")
          },
          {
            path: "/particulars/endoscopicDiagnosis",
            name: "endoscopicDiagnosis",
            meta: {title: "内镜诊断报告"},
            component: () => import("@/views/home/pacs/endoscopicDiagnosis/index.vue")
          },
          {
            path: "/particulars/digitizationNM",
            name: "digitizationNM",
            meta: {title: "数字化影像（NM）检查报告书"},
            component: () => import("@/views/home/pacs/digitizationNM/index.vue")
          },
          {
            path: "/particulars/digitizationMR",
            name: "digitizationMR",
            meta: {title: "数字化影像（MR）检查报告书"},
            component: () => import("@/views/home/pacs/digitizationMR/index.vue")
          },
          {
            path: "/particulars/digitizationDR",
            name: "digitizationDR",
            meta: {title: "数字化影像（DR）检查报告书"},
            component: () => import("@/views/home/pacs/digitizationDR/index.vue")
          },
          {
            path: "/particulars/CTScan",
            name: "CTScan",
            meta: {title: "CT检查报告单"},
            component: () => import("@/views/home/pacs/CTScan/index.vue")
          },
          {
            path: "/particulars/arterialBlood",
            name: "arterialBlood",
            meta: {title: "动脉血"},
            component: () => import("@/views/home/physical/arterialBlood/index.vue")
          },
          {
            path: "/particulars/bloodFat",
            name: "bloodFat",
            meta: {title: "血脂"},
            component: () => import("@/views/home/physical/bloodFat/index.vue")
          },
          {
            path: "/particulars/pharyngealSwab",
            name: "pharyngealSwab",
            meta: {title: "咽拭子"},
            component: () => import("@/views/home/physical/pharyngealSwab/index.vue")
          },
          {
            path: "/particulars/immune",
            name: "immune",
            meta: {title: "咽拭子"},
            component: () => import("@/views/home/physical/immune/index.vue")
          },
          {
            path: "/particulars/wholeBlood",
            name: "wholeBlood",
            meta: {title: "全血"},
            component: () => import("@/views/home/physical/wholeBlood/index.vue")
          },
          {
            path: "/particulars/piss",
            name: "piss",
            meta: {title: "尿"},
            component: () => import("@/views/home/physical/piss/index.vue")
          },
          {
            path: "/particulars/eugenicsTen",
            name: "eugenicsTen",
            meta: {title: "优生十项"},
            component: () => import("@/views/home/physical/eugenicsTen/index.vue")
          },
          {
            path: "/particulars/pissRule",
            name: "pissRule",
            meta: {title: "尿常规"},
            component: () => import("@/views/home/physical/pissRule/index.vue")
          },
          {
            path: "/particulars/leucorrhea",
            name: "leucorrhea",
            meta: {title: "白带"},
            component: () => import("@/views/home/physical/leucorrhea/index.vue")
          },
          {
            path: "/particulars/allergen",
            name: "allergy",
            meta: {title: "过敏源"},
            component: () => import("@/views/home/physical/allergen/index.vue")
          },
          {
            path: "/particulars/hpv",
            name: "hpv",
            meta: {title: "HPV"},
            component: () => import("@/views/home/physical/HPV/index.vue")
          },
          {
            path: "/particulars/fiveInfertility",
            name: "FiveInfertility",
            meta: {title: "不孕不育五项"},
            component: () => import("@/views/home/physical/fiveInfertility/index.vue")
          },
          {
            path: "/particulars/cpeptide",
            name: "Cpeptide",
            meta: {title: "C肽"},
            component: () => import("@/views/home/physical/Cpeptide/index.vue")
          }
        ]
      }
    ]
  },
  {
    path: "/physical",
    name: "physical",
    component: layout,
    meta: {
      title: "电子病历数据中心"
    },
    children: [
      {
        path: "/page/:id",
        name: "page",
        meta: {
          title: "陈姗姗"
        },
        component: () => import("@/views/page/index.vue")
      }
    ]
  }
];
