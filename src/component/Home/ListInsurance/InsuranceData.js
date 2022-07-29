import CarInsuranceProduct from "./CarInsuranceData";
import HealthInsuranceProduct from "./HealthInsuranceData";
import TravelInsuranceProduct from "./TravelInsuranceData";

const products = [
  ...CarInsuranceProduct,
  ...HealthInsuranceProduct,
  ...TravelInsuranceProduct
];
export default products;