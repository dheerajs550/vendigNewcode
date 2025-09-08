import api from "@/lib/axios";
import API_ROUTES from "@/lib/apiRoutes";

// 5. Get Prescription Details
export const getPrescriptionDetails = async (id) => {
  const res = await api.get(API_ROUTES.prescriptions.details(id));
  return res.data;
};

// 6. Collect Prescription (POST)
export const collectPrescription = async (id, bodyData) => {
  const res = await api.post(API_ROUTES.prescriptions.collect(id), bodyData);
  return res.data;
};



