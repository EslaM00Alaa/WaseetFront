import sata from "./baseUrl";
import Swal from "sweetalert2";

export default async (
  name,
  phone,
  house_details,
  address_details,
  expected_price
) => {
  try {
    if(!name || !phone || !house_details || !address_details)
    {
      Swal.fire({
        title: "حدث خطاء",
        text: "ادخل البيانات بشكل صحيح",
        icon: "error",
        confirmButtonColor: "#e35e58",
      });
    }
    else
    {
    const response = await sata.post("/api/sellorders/sell", {
      name,
      phone,
      house_details,
      address_details,
      expected_price,
    });
    Swal.fire({
      title: "تم حفظ الطلب",
      text: "سيتواصل معك احد موظفي خدمه العملاء",
      icon: "success",
      confirmButtonColor: "#a5dc86",
    }).then(() => (window.location = "/"));
  } 
}catch (error) {
    Swal.fire({
      title: "حدث خطاء",
      text: "ادخل البيانات بشكل صحيح",
      icon: "error",
      confirmButtonColor: "#e35e58",
    });
  }
};