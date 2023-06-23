function NhanVien(_taikhoan, _tenNV, _email, _matKhau, _ngayLam, _luong, _chucVu, _gioLam   ){
    this.taikhoan = _taikhoan,
    this.tenNV = _tenNV,
    this.email = _email,
    this.matKhau = _matKhau,
    this.ngayLam = _ngayLam,
    this.luong = _luong,
    this.chucVu = _chucVu,
    this.gioLam = _gioLam,

    // tính tỏng lương theo chức vụ
    this.tongLuong = function(){
       
        if(this.chucVu === ""){
        //     alert("Vui lòng chọn chức vụ !!!")
        // // getElementById('tbChucVu').innerHTML = "Vui lòng không dc bỏ trống"    
            return (this.chucVu)
        }else if (this.chucVu === "Sếp"){
           return (this.luong * 3)
        }else if (this.chucVu === "Trưởng phòng"){
            return (this.luong * 2)
        }else if (this.chucVu === "Nhân viên"){
            return (this.luong * 1)
        }

        
    }

    // xếp loại theo giờ làm 

    this.xepLoai = function(){
        var rank = document.getElementById('xeploai') 
        if(this.gioLam >= 80 && this.gioLam < 160){
           return (rank = ' Trung bình')
        }else if(this.gioLam >=160 && this.gioLam < 176){
           return (rank = ' Khá')
        }else if(this.gioLam >=176 && this.gioLam < 192){
            return (rank = ' Giỏi')
        }else if(this.gioLam >=192 && this.gioLam < 200){
            return (rank = ' Xuất sắc')
        }
}
}









// var total = 0
//         if(chucVu === "0"){
//             alert("Vui lòng chọn chức vụ !!!")
//             return
//         }
    
//         if(chucVu === "1"){
//             total = (tongLuong * 3)
//         }else if (chucVu === "2"){
//             total = (luong * 2)
//         }else if (chucVu === "3"){
//             total = (luong * 1)
//         }