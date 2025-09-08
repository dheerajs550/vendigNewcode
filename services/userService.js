import api from "@/lib/axios";
import API_ROUTES from "@/lib/apiRoutes";

// 1. Get User Name by RFID
export const getUserByRFID = async (rfid) => {
  const res = await api.get(API_ROUTES.users.getByRFID(rfid));
  return res.data;
};

// 2. Get Balance
export const getUserBalance = async (rfid) => {
  const res = await api.get(API_ROUTES.users.balance(rfid));
  return res.data;
};

// 3. Get All Prescriptions
export const getAllPrescriptions = async (rfid) => {
  const res = await api.get(API_ROUTES.users.prescriptions(rfid));
  return res.data;
};

// 4. Get Prescriptions by Relation
export const getPrescriptionsByRelation = async (rfid, relation) => {
  const res = await api.get(API_ROUTES.users.prescriptionsByRelation(rfid, relation));
  return res.data;
};
