// lib/apiRoutes.js
export let BASE_URL = "https://vending-machine-backend-xjfo.onrender.com/api";

// lib/apiRoutes.js

const API_ROUTES = {
  users: {
    getByRFID: (rfid) => `/users/${rfid}`,                                              // 1
    balance: (rfid) => `/users/${rfid}/balance`,                                        // 2
    prescriptions: (rfid) => `/users/${rfid}/prescriptions`,                            // 3
    prescriptionsByRelation: (rfid, relation) => `/relationships/${rfid}/${relation}`   // 4
  },
  owners: {
    fingerprint: `/owners/auth/fingerprint`,
    rfid: `/owners/auth/rfid`,
    sendOtp: `/owners/auth/otp/send`,
    verifyOtp: `/owners/auth/otp/verify`,
  },
  inventory: {
    overview: `/inventory/overview`,
    add: `/inventory/add`,
  },
  reports: {
    sales: `/reports/sales`,
  },

  prescriptions: {
    details: (id) => `/prescriptions/${id}/details`,                                    // 7
    collect: (id) => `/prescriptions/${id}/collect`,                                    // 8
  },
};

export default API_ROUTES;

// ............


