// .............
import api from "@/lib/axios";
import API_ROUTES from "@/lib/apiRoutes";

// 1. Fingerprint Auth
export const fingerprintAuth = async (fingerprintId) => {
  const res = await api.post(API_ROUTES.owners.fingerprint, { fingerprintId });
  return res.data;
};

// 2. RFID Auth
export const rfidAuth = async (ownerId, rfid) => {
  const res = await api.post(API_ROUTES.owners.rfid, { ownerId, rfid });
  return res.data;
};

// 3. Send OTP
export const sendOtp = async (ownerId) => {
  const res = await api.post(API_ROUTES.owners.sendOtp, { ownerId });
  return res.data;
};

// 4. Verify OTP -> TOKEN milega
export const verifyOtp = async (ownerId, otp) => {
  console.log(ownerId, otp,"ownerId, otp")
  const res = await api.post(API_ROUTES.owners.verifyOtp, { ownerId, otp });
  console.log(res.data,"....verifyotp")
  return res.data; // response me token aayega
};

// 5. Get Inventory Overview (protected, token required)
export const getInventoryOverview = async () => {
  const res = await api.get(API_ROUTES.inventory.overview);
  return res.data;
};

// 6. Add Inventory
export const addInventory = async (data) => {
  const res = await api.post(API_ROUTES.inventory.add, data);
  return res.data;
};
