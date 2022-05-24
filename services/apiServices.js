import http from "./httpService";

// course structure apis
export function getWorkshopBatchInfo(id) {
  return http.get(`/api/workshop/${id}/batch`);
}

export function createPayment(data) {
  return http.post(`/api/payment/initiate`, data);
}
