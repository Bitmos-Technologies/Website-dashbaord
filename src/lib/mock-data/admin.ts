import type { AdminRecord } from "@/types";

const rows = <T extends AdminRecord>(items: T[]) => items;

export const orders = rows([
  { id:"ORD-2841", customer:"Maya Chen", table:"T12", type:"Dine In", status:"Preparing", total:"$86.00", payment:"Paid", created:"Today, 10:42" },
  { id:"ORD-2840", customer:"Noah Williams", table:"T04", type:"Dine In", status:"Ready", total:"$42.00", payment:"Paid", created:"Today, 10:36" },
  { id:"ORD-2839", customer:"Emma Clarke", table:"Room 308", type:"Delivery", status:"Completed", total:"$124.00", payment:"Paid", created:"Today, 10:22" },
  { id:"ORD-2838", customer:"Liam Okafor", table:"—", type:"Takeaway", status:"Pending", total:"$67.00", payment:"Pending", created:"Today, 10:18" },
  { id:"ORD-2837", customer:"Ava Patel", table:"T08", type:"Dine In", status:"Cancelled", total:"$31.00", payment:"Refunded", created:"Today, 09:54" },
  { id:"ORD-2836", customer:"James Mwangi", table:"T03", type:"Dine In", status:"Completed", total:"$95.00", payment:"Paid", created:"Today, 09:41" },
]);
export const tables = rows([
  {id:"T01",number:"Table 01",capacity:2,status:"Available",order:"—",section:"Terrace",created:"12 Jan 2026"},{id:"T02",number:"Table 02",capacity:4,status:"Occupied",order:"ORD-2844",section:"Main dining",created:"12 Jan 2026"},{id:"T03",number:"Table 03",capacity:4,status:"Cleaning",order:"—",section:"Main dining",created:"12 Jan 2026"},{id:"T04",number:"Table 04",capacity:6,status:"Reserved",order:"—",section:"Garden",created:"18 Jan 2026"},{id:"T05",number:"Table 05",capacity:2,status:"Inactive",order:"—",section:"Terrace",created:"18 Jan 2026"},
]);
export const hotels = rows([
  {id:"HTL-01",name:"BiteNow Nairobi",location:"Westlands, Nairobi",phone:"+254 700 123 456",email:"hello@bitenow.co.ke",status:"Active",created:"05 Jan 2026"},{id:"HTL-02",name:"BiteNow Coast",location:"Nyali, Mombasa",phone:"+254 711 230 987",email:"coast@bitenow.co.ke",status:"Active",created:"17 Feb 2026"},{id:"HTL-03",name:"The BiteNow Lodge",location:"Nanyuki, Laikipia",phone:"+254 722 481 002",email:"lodge@bitenow.co.ke",status:"Inactive",created:"09 Mar 2026"},
]);
export const memberships = rows([
  {id:"MEM-101",name:"Sarah Kimani",email:"sarah@bitenow.co.ke",role:"Manager",hotel:"BiteNow Nairobi",status:"Active",joined:"08 Jan 2026"},{id:"MEM-102",name:"David Otieno",email:"david@bitenow.co.ke",role:"Kitchen Staff",hotel:"BiteNow Nairobi",status:"Active",joined:"12 Jan 2026"},{id:"MEM-103",name:"Grace Wanjiku",email:"grace@bitenow.co.ke",role:"Cashier",hotel:"BiteNow Coast",status:"Active",joined:"02 Mar 2026"},{id:"MEM-104",name:"Peter Ali",email:"peter@bitenow.co.ke",role:"Waiter",hotel:"BiteNow Coast",status:"Inactive",joined:"14 Mar 2026"},
]);
export const categories = rows([
  {id:"CAT-01",name:"Starters",description:"Small plates to begin",items:12,status:"Active",created:"05 Jan 2026"},{id:"CAT-02",name:"Mains",description:"Signature main courses",items:28,status:"Active",created:"05 Jan 2026"},{id:"CAT-03",name:"Desserts",description:"Sweet finishes",items:9,status:"Active",created:"06 Jan 2026"},{id:"CAT-04",name:"Seasonal",description:"Limited seasonal plates",items:4,status:"Inactive",created:"11 Apr 2026"},
]);
export const menu = rows([
  {id:"ITM-01",name:"Coastal Salmon",category:"Mains",price:"$28.00",availability:"Available",prepTime:"20 min",description:"Charred lemon and dill beurre blanc",image:"Salmon"},{id:"ITM-02",name:"Truffle Tagliatelle",category:"Mains",price:"$24.00",availability:"Available",prepTime:"18 min",description:"Wild mushrooms and parmesan",image:"Pasta"},{id:"ITM-03",name:"Garden Burrata",category:"Starters",price:"$16.00",availability:"Available",prepTime:"12 min",description:"Heirloom tomato and basil oil",image:"Burrata"},{id:"ITM-04",name:"Citrus Pavlova",category:"Desserts",price:"$12.00",availability:"Unavailable",prepTime:"10 min",description:"Passion fruit curd and vanilla cream",image:"Pavlova"},
]);
export const payments = rows([
  {id:"PAY-4821",orderId:"ORD-2841",customer:"Maya Chen",amount:"$86.00",method:"M-Pesa",status:"Paid",date:"Today, 10:45"},{id:"PAY-4820",orderId:"ORD-2840",customer:"Noah Williams",amount:"$42.00",method:"Card",status:"Paid",date:"Today, 10:38"},{id:"PAY-4819",orderId:"ORD-2839",customer:"Emma Clarke",amount:"$124.00",method:"Bank Transfer",status:"Paid",date:"Today, 10:24"},{id:"PAY-4818",orderId:"ORD-2838",customer:"Liam Okafor",amount:"$67.00",method:"Cash",status:"Pending",date:"Today, 10:18"},{id:"PAY-4817",orderId:"ORD-2837",customer:"Ava Patel",amount:"$31.00",method:"Card",status:"Refunded",date:"Today, 09:58"},
]);
export const notifications = rows([
  {id:"NTF-01",title:"Order ready",message:"Order ORD-2840 is ready for service.",type:"Order",status:"Unread",created:"2 min ago"},{id:"NTF-02",title:"Payment received",message:"M-Pesa payment of $86.00 confirmed.",type:"Payment",status:"Read",created:"8 min ago"},{id:"NTF-03",title:"Table needs attention",message:"Table 03 has been marked for cleaning.",type:"Table",status:"Unread",created:"15 min ago"},{id:"NTF-04",title:"New staff member",message:"Grace Wanjiku joined BiteNow Coast.",type:"Membership",status:"Read",created:"Yesterday"},
]);
export const auditLogs = rows([
  {id:"LOG-9201",user:"Sarah Kimani",action:"Updated",resource:"Order",resourceId:"ORD-2840",description:"Changed status from Preparing to Ready",ip:"102.68.12.44",date:"Today, 10:38"},{id:"LOG-9200",user:"David Otieno",action:"Created",resource:"Menu Item",resourceId:"ITM-087",description:"Added Summer Pea Risotto",ip:"102.68.12.51",date:"Today, 09:22"},{id:"LOG-9199",user:"Sarah Kimani",action:"Updated",resource:"Table",resourceId:"T03",description:"Changed status to Cleaning",ip:"102.68.12.44",date:"Today, 09:11"},{id:"LOG-9198",user:"Grace Wanjiku",action:"Refunded",resource:"Payment",resourceId:"PAY-4817",description:"Processed card refund",ip:"197.248.21.9",date:"Today, 08:54"},
]);
