import { Children, lazy } from "react";

const Data = [
  {
    label: "home",
    to: "/"
  },
  {
    
    label: "profile",
    to: "/profile",
    children: [
      {
        label: "details",
        to: "/details",
        children: [
          {
            label:"location",
            to: "/location"
          }
        ]
      }
    ],
  },
  {
    label: "settings",
    to: "/settings",
    children: [
      {
        label: "account",
        to: "/account",
      },
      {
        label: "security",
        to: "/security",
        children: [
          {
            label: "login",
            to:"/;ogin"
          },
          {
            label: "register",
            to: "register"
          }
        ]
      }
    ]
  }
]; 
export default Data;