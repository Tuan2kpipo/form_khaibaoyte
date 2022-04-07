import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import "./KhaiBao.css"
export default function ThongTinKhaiBao() {

    const formik = useFormik({
      initialValues:{
        name: "",
        hoChieu: "",
        namSinh: "",
        quocTich: "Việt Nam",
        congTy: "",
        boPhanLamViec: "",
        baoHiemYTe: "",
        gioiTinhNam: "Nam",
        gioiTinhNu: "Nu",
        gioiTinhKhac: "Khac",
        tinhThanh: "Hà Nội",
        quanHuyen: "",
        xa: "",
        soNha: "",
        sdt: "",
        email: "",
        lichTrinh: "",
        bieuHienSot:"Sot",
        bieuHienHo: "Ho",
      },

      validationSchema: Yup.object({
        name: Yup.string().required("Required"),
        hoChieu: Yup.string()
          .required("Required")
          .matches(/^[0-9]{9,12}$/, "hộ chiếu 9-12 số"),
        namSinh: Yup.string()
          .required("Required")
          .matches(
            /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
            "EX: dd/mm/yyyy, dd--mm-yyyy, dd.mm.yyyy"
          ),
        gioiTinhNam: Yup.string().required("Required"),
        gioiTinhNu: Yup.string().required("Required"),
        gioiTinhKhac: Yup.string().required("Required"),
        quocTich: Yup.string().required("Required"),
        tinhThanh: Yup.string().required("Required"),
        quanHuyen: Yup.string().required("Required"),
        xa: Yup.string().required("Required"),
        soNha: Yup.string().required("Required"),
        sdt: Yup.string()
          .required("Required")
          .matches(/^[0-9]{10,11}$/,'Nhập lại sdt!! ví dụ như: 012275353'),
        email: Yup.string()
          .required("Required")
          .email("Nhập lại email! ví dụ như:Tuan@gmail.com"),
      }),


      onSubmit: (values) => {
        console.log(values);
      },
    });


 

  return (
    <section>
        <form className="infoform"  onSubmit={formik.handleSubmit} >
            <header>Tờ khai y tế</header>

            <label>Họ Và Tên</label>
            <input
             type="text"
             id="name"
             name="name" 
             value={formik.values.name}
             onChange={formik.handleChange}
             placeholder="Nhập họ tên" >
            </input>
            {formik.errors.name && (
                 <p className="errorMsg"> {formik.errors.name} </p>
            )}

            <label>Số Hộ Chiếu</label>
            <input type="text"
             name="hoChieu"
             id="hoChieu" 
             value={formik.values.hoChieu}
             onChange={formik.handleChange} 
             placeholder="Nhập số hộ chiếu">
            </input>
            {formik.errors.hoChieu && (
                 <p className="errorMsg"> {formik.errors.hoChieu} </p>
            )}


            <label>Năm Sinh</label>
            <input type="text" 
            name="namSinh" 
            id="namSinh"  
            value={formik.values.namSinh}
            onChange={formik.handleChange} 
            placeholder="Nhập Năm Sinh">
            </input>
            {formik.errors.namSinh && (
                 <p className="errorMsg"> {formik.errors.namSinh} </p>
            )}

            <label>Quốc Tịch</label>
            <select    
              value={formik.values.quocTich}
              onChange={formik.handleChange}  >
                    <option disabled="disabled">Chọn quốc tịch</option>
                    <option>Việt Nam</option>
                    <option>USA</option>
                    <option>Singapore</option>
            </select>

            <label>Công ty làm việc</label>
            <input type="text" name="congTy" id="congTy" 
            value={formik.values.congTy}
            onChange={formik.handleChange} 
            placeholder="Công ty làm việc">
            </input>

            <label>Bộ phận làm việc</label>
            <input type="text" name="boPhanLamViec" id="boPhanLamViec"
            value={formik.values.boPhanLamViec}
            onChange={formik.handleChange}  
            placeholder="Bộ phận làm việc">
            </input>

            <label>Có Bảo hiểm y tế</label>
            <input type="checkbox" name="baoHiemYTe" 
            value={formik.values.baoHiemYTe}
            onChange={formik.handleChange} 
            id="baoHiemYTe" >
            </input>

            <header>Giới tính</header>
            <label>Nam</label>
            <input type="radio" name="gioiTinhNam" id="gioiTinhNam"  
            value={formik.values.gioiTinhNam}
            onChange={formik.handleChange}>
            </input>
            <label>Nữ</label>
            <input type="radio" name="gioiTinhNu" id="gioiTinhNu" 
            value={formik.values.gioiTinhNu}
            onChange={formik.handleChange}>
            </input>
            <label>Khác</label>
            <input type="radio" name="gioiTinhKhac" id="gioiTinhKhac" 
            value={formik.values.gioiTinhKhac}
            onChange={formik.handleChange}>
            </input>

            <header>Địa chỉ liên lạc</header>
            <label>Tỉnh Thành</label>
            <select  
              name="tinhThanh"
              id="tinhThanh"  
              value={formik.values.tinhThanh}
              onChange={formik.handleChange}  >
                    <option disabled="disabled">Chọn tỉnh</option>
                    <option>Hà Nội</option>
                    <option>Hưng Yên</option>
                    <option>Thái Nguyên</option>
            </select>
         
            <label>Quận huyện</label>
            <input type="text" name="quanHuyen" id="quanHuyen"   
            value={formik.values.quanHuyen}
            onChange={formik.handleChange} 
            placeholder="Nhập quận huyện">
            </input>
            {formik.errors.quanHuyen && (
                 <p className="errorMsg"> {formik.errors.quanHuyen} </p>
            )}

            
            <label>Xã</label>
            <input type="text" name="xa" id="xa" 
            value={formik.values.xa}
            onChange={formik.handleChange} 
            placeholder="Nhập xã"></input>
            {formik.errors.xa && (
                 <p className="errorMsg"> {formik.errors.xa} </p>
            )}


            <label>Số nhà, phố</label>
            <input type="text" name="soNha" id="soNha" 
            value={formik.values.soNha}
            onChange={formik.handleChange} 
            placeholder="Nhập số nhà , phố"></input>
            {formik.errors.soNha && (
                 <p className="errorMsg"> {formik.errors.soNha} </p>
            )}

            
            <label>Số điện thoại</label>
            <input type="text" name="sdt" id="sdt" 
            value={formik.values.sdt}
            onChange={formik.handleChange}  
            placeholder="Nhập số điện thoại"></input>
            {formik.errors.sdt && (
                 <p className="errorMsg"> {formik.errors.sdt} </p>
            )}
            
              
            <label>Email</label>
            <input type="email" name="email" id="email" 
            value={formik.values.email}
            onChange={formik.handleChange} 
            placeholder="Nhập số điện thoại"></input>
            {formik.errors.email && (
                 <p className="errorMsg"> {formik.errors.email} </p>
            )}


            <label>Trong vòng 14 ngày qua, Anh/Chị đến quốc gia/ vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</label>
            <textarea name="lichTrinh" name="lichTrinh" id="lichTrinh"
            value={formik.values.lichTrinh}
            onChange={formik.handleChange} 
            ></textarea>

            <label>Trong vòng 14 ngày qua, Anh/Chị thấy xuất hiện dấu hiệu nào sau đây không?</label>
            <label>Sốt</label>
            <input type="checkbox" name="bieuHienSot" id="bieuHienSot" 
            value={formik.values.bieuHienSot}
            onChange={formik.handleChange}>
            </input>
            <label>Ho</label>
            <input type="checkbox" name="bieuHienHo" id="bieuHienHo"  
            value={formik.values.bieuHienHo}
            onChange={formik.handleChange}>
            </input>


            <button  type="submit">Continue</button>
        </form>
        
    </section>
  )
}
