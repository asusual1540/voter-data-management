import { Reducer } from 'redux';
import { REHYDRATE } from 'redux-persist';

import {
  RESET_POST_STATE,
  HIGHLIGHT_CHUNK,
  SET_POST_ACTIVE_PAGE,
  SET_POST_ACTIVE_LIBRARY_NAME,
  SET_POST_ACTIVE_DOCUMENT_ID,
  SET_POST_RECIPIENT,
  SET_POST_SENDER,
  SET_POST_DELIVERY,
  SET_POST_WEIGHT,
  SET_POST_ACTIVE_SERVICE,
  SET_POST_ACTIVE_ADDITIONAL_SERVICE,
  SET_POST_SERVICE_COST,
  SET_POST_ADDITIONAL_SERVICE_COST
} from "./actionTypes"

import { PostStep, PostActions, PostState } from "./types"


export const initialPostState: PostState = {
  steps: [
    { label: 'সেবা' },
    { label: 'ডাক মাসুল' },
    { label: 'প্রাপক' },
    { label: 'চূড়ান্তকরণ' },
  ],
  activeStepIndex: 0,
  weight: 0,
  services: [
    {
      cost: 0,
      name: "letter",
      label: "চিঠি"
    },
    {
      cost: 0,
      name: "book_packet",
      label: "বুক প্যাকেট"
    },
    {
      cost: 0,
      name: "document",
      label: "ডকুমেন্ট"
    },
    {
      cost: 0,
      name: "parcel",
      label: "পার্সেল"
    },
  ],
  activeServiceIndex: 0,
  serviceCost: 0,

  additionalServices: [
    {
      cost: 3,
      name: 'registry',
      label: 'রেজিস্ট্রি'
    },
    {
      cost: 5,
      name: 'gep',
      label: 'জিইপি'
    },
  ],
  additionalServiceIndex: 0,
  additionalServiceCost: 0,

  totalCost: 0,

  sender: {
    district: "",
    subDistrict: "",
    address: "",
    phoneNumber: "",
  },
  recipient: {
    district: "",
    subDistrict: "",
    address: "",
    phoneNumber: "",
  },

  delivery: {
    deliveryType: "",
    deliveryInstruction: "",
    pickUpAddress: "",
  },

  error: "",
  loading: false,
  info: {
    letter: [
      {
        "Item_Type": "Letter",
        "Measured_On": "Weight",
        "Lower_limit": "0.01",
        "Upper_Limit": "100.00",
        "Maximum_Limit_Value": "100.00",
        "Charge": "5.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      }
    ],
    book_packet: [
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "0.01",
        "Upper_Limit": "100.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "1.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "100.01",
        "Upper_Limit": "200.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "2.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "200.01",
        "Upper_Limit": "300.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "3.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "300.01",
        "Upper_Limit": "400.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "4.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "400.01",
        "Upper_Limit": "500.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "5.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "500.01",
        "Upper_Limit": "600.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "6.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "600.01",
        "Upper_Limit": "700.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "7.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "700.01",
        "Upper_Limit": "800.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "8.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "800.01",
        "Upper_Limit": "900.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "9.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "900.01",
        "Upper_Limit": "1000.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "10.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "1000.01",
        "Upper_Limit": "1100.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "11.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "1100.01",
        "Upper_Limit": "1200.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "12.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "1200.01",
        "Upper_Limit": "1300.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "13.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "1300.01",
        "Upper_Limit": "1400.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "14.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "1400.01",
        "Upper_Limit": "1500.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "15.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "1500.01",
        "Upper_Limit": "1600.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "16.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "1600.01",
        "Upper_Limit": "1700.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "17.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "1700.01",
        "Upper_Limit": "1800.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "18.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "1800.01",
        "Upper_Limit": "1900.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "19.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Book Packet",
        "Measured_On": "Weight",
        "Lower_limit": "1900.01",
        "Upper_Limit": "2000.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "20.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      }
    ],
    document: [
      {
        "Item_Type": "Document",
        "Measured_On": "Weight",
        "Lower_limit": "0.01",
        "Upper_Limit": "1000.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "25.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Document",
        "Measured_On": "Weight",
        "Lower_limit": "1000.01",
        "Upper_Limit": "1100.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "26.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Document",
        "Measured_On": "Weight",
        "Lower_limit": "1100.01",
        "Upper_Limit": "1200.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "27.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Document",
        "Measured_On": "Weight",
        "Lower_limit": "1200.01",
        "Upper_Limit": "1300.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "28.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Document",
        "Measured_On": "Weight",
        "Lower_limit": "1300.01",
        "Upper_Limit": "1400.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "29.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Document",
        "Measured_On": "Weight",
        "Lower_limit": "1400.01",
        "Upper_Limit": "1500.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "30.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Document",
        "Measured_On": "Weight",
        "Lower_limit": "1500.01",
        "Upper_Limit": "1600.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "31.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Document",
        "Measured_On": "Weight",
        "Lower_limit": "1600.01",
        "Upper_Limit": "1700.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "32.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Document",
        "Measured_On": "Weight",
        "Lower_limit": "1700.01",
        "Upper_Limit": "1800.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "33.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Document",
        "Measured_On": "Weight",
        "Lower_limit": "1800.01",
        "Upper_Limit": "1900.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "34.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Document",
        "Measured_On": "Weight",
        "Lower_limit": "1900.01",
        "Upper_Limit": "2000.00",
        "Maximum_Limit_Value": "2000.00",
        "Charge": "35.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      }
    ],
    parcel: [
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "0.01",
        "Upper_Limit": "1000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "15.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "1000.01",
        "Upper_Limit": "2000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "25.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "2000.01",
        "Upper_Limit": "3000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "35.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "3000.01",
        "Upper_Limit": "4000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "45.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "4000.01",
        "Upper_Limit": "5000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "55.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "5000.01",
        "Upper_Limit": "6000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "65.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "6000.01",
        "Upper_Limit": "7000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "75.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "7000.01",
        "Upper_Limit": "8000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "85.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "8000.01",
        "Upper_Limit": "9000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "95.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "9000.01",
        "Upper_Limit": "10000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "105.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "10000.01",
        "Upper_Limit": "11000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "115.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "11000.01",
        "Upper_Limit": "12000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "125.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "12000.01",
        "Upper_Limit": "13000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "135.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "1300.01",
        "Upper_Limit": "14000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "145.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "1400.01",
        "Upper_Limit": "15000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "155.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "1500.01",
        "Upper_Limit": "16000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "165.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "1600.01",
        "Upper_Limit": "17000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "175.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "1700.01",
        "Upper_Limit": "18000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "185.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "1800.01",
        "Upper_Limit": "19000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "195.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "1900.01",
        "Upper_Limit": "20000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "205.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "2000.01",
        "Upper_Limit": "21000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "215.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "2100.01",
        "Upper_Limit": "22000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "225.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "2200.01",
        "Upper_Limit": "23000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "235.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "2300.01",
        "Upper_Limit": "24000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "245.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "2400.01",
        "Upper_Limit": "25000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "255.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "2500.01",
        "Upper_Limit": "26000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "265.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "2600.01",
        "Upper_Limit": "27000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "275.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "2700.01",
        "Upper_Limit": "28000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "285.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "2800.01",
        "Upper_Limit": "29000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "295.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      },
      {
        "Item_Type": "Parcel",
        "Measured_On": "Weight",
        "Lower_limit": "2900.01",
        "Upper_Limit": "30000.00",
        "Maximum_Limit_Value": "30000.00",
        "Charge": "305.00",
        "Charge_Type": "Fixed",
        "GEP_Charge": "5.00",
        "Registry_Charge": "3.00",
        "AD_Charge": "5.00",
        "Intimation_Charge": "0.00",
        "Next_Every_Additional": "0.00",
        "Next_Every_Additional_Charge": "0.00",
        "POD_Charge": "0.00"
      }
    ],
  }
}

const reducers: Reducer<PostState> = (state = initialPostState, action: PostActions): PostState => {
  switch (action.type) {
    case REHYDRATE: {
      // Check if persisted state exists
      // if (action.payload) {
      //   return {
      //     ...state,
      //     error: action.payload.post_state.error,
      //     loading: action.payload.post_state.loading,
      //     postData: action.payload.post_state.postData,
      //     libraries: action.payload.post_state.libraries,
      //     documents: action.payload.post_state.documents,
      //     activeLibrary: action.payload.post_state.activeLibrary,
      //     activeDocumentIndex: action.payload.post_state.activeDocumentIndex,
      //     activeDocument: action.payload.post_state.activeDocument,
      //     activePage: action.payload.post_state.activePage,
      //   };
      // } else {
      //   return { ...state }
      // }
      return { ...state }
    };

    case RESET_POST_STATE:
      return {
        ...state,
      };

    case SET_POST_RECIPIENT:
      return {
        ...state,
        recipient: { ...state.recipient, ...action.payload.recipient }
      };

    case SET_POST_SENDER:
      return {
        ...state,
        sender: { ...state.sender, ...action.payload.sender }
      };

    case SET_POST_DELIVERY:
      return {
        ...state,
        delivery: { ...state.delivery, ...action.payload.delivery }
      };

    case SET_POST_WEIGHT:
      return {
        ...state,
        weight: action.payload.weight
      };
    case SET_POST_SERVICE_COST:
      return {
        ...state,
        serviceCost: action.payload.cost
      };

    case SET_POST_ADDITIONAL_SERVICE_COST:
      return {
        ...state,
        additionalServiceCost: action.payload.cost
      };

    case SET_POST_ACTIVE_SERVICE:
      return {
        ...state,
        activeServiceIndex: action.payload.index
      };

    case SET_POST_ACTIVE_ADDITIONAL_SERVICE:
      return {
        ...state,
        additionalServiceIndex: action.payload.index
      };


    case SET_POST_ACTIVE_LIBRARY_NAME:
      return {
        ...state,
        // activeLibrary: action.payload.library_index
      };


    case SET_POST_ACTIVE_DOCUMENT_ID:

      return {
        ...state,
        // activeDocumentIndex: action.payload.document_index,
        // activeDocument: true,
      };

    case SET_POST_ACTIVE_PAGE:


      return {
        ...state,
        // activePage: action.payload.page_index
      };




    default:
      return {
        ...state,
      }
  }
}

export default reducers