function checkTaikhoan (taikhoan){
    var test = taikhoan.length
    if(test >= 4 && test <= 6){
        
        document.getElementById('tbTKNV').style.display="none";
        return true;
    }
        document.getElementById('tbTKNV').style.display="block";
        document.getElementById('tbTKNV').innerHTML="Tài khoản phải có 4-6 kí tự";
        return false;
}

    var item = {
        name: /^[a-zA-Z]+$/,
        email: /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/,
        pw: /^(?=.*\d)(?=.*[A-Z])(?=.*[\W_]).{6,10}$/
    };

    // check tên
function validateName(tenNV){
    var temp = document.getElementById('name').value
    var kiTu = item.name.test(temp)
   
    if(kiTu){
        document.getElementById('tbTen').style.display="none";
        return true
    }
    document.getElementById('tbTen').style.display="block";
    document.getElementById('tbTen').innerHTML="Tên phải là chữ";
        return false;

}

    // check Email
function validatEemail(email) {

    var tempTwo = document.getElementById('email').value
    var checkMails = item.email.test(tempTwo)
   
    if(checkMails){
        document.getElementById('tbEmail').style.display="none";
        return true
    }
    document.getElementById('tbEmail').style.display="block";
    document.getElementById('tbEmail').innerHTML="Vui lòng nhập đúng định dạng @gmail.com";
        return false;
}

    // check mật khẩu
function validatePassword(matKhau) {
    var tempOne = document.getElementById('password').value
    var checkPw = item.pw.test(tempOne)
   
    if(checkPw){
        document.getElementById('tbMatKhau').style.display="none";
        return true
    }
    document.getElementById('tbMatKhau').style.display="block";
    document.getElementById('tbMatKhau').innerHTML="Mật khẩu phải đúng định dạng và có 6-10 kí tự ";
        return false;
}

    // check lương
function validateLuong(luong){
    var saLary = document.getElementById('luongCB').value
    if(saLary < 1e6){
        document.getElementById('tbLuongCB').style.display="block";
        document.getElementById('tbLuongCB').innerHTML="Vui lòng nhập lại lương";
        return false
    }
    document.getElementById('tbLuongCB').style.display="none";
    return true;
}

    // check ngày làm
function validateCalendar(ngayLam){
    var dataDate = document.getElementById("datepicker").value
    if(dataDate !== ''){
        document.getElementById('tbNgay').style.display="none";
        return true
    }
    document.getElementById('tbNgay').style.display="block";
    document.getElementById('tbNgay').innerHTML="Vui lòng nhập lại ngày làm";
    return false
    
}

    // check chức vụ
function validateChucvu (chucVu){
    var nonSelect = document.getElementById('choice').value;
    var Select = document.getElementById('chucvu').value;
    
    if(Select !== nonSelect && Select !== nonSelect){
        document.getElementById('tbChucVu').style.display="none";
        return true
        
    }else{
        document.getElementById('tbChucVu').style.display="block";
        document.getElementById('tbChucVu').innerHTML="Vui lòng chọn chức vụ";
        return false
    }
    }

    // check giờ làm
function validateGiolam (gioLam){
    // console.log("gioLam: ", gioLam);
    if(gioLam > 80 && gioLam < 200 ){
        document.getElementById('tbGiolam').style.display="none";
        return true
    }else{
        document.getElementById('tbGiolam').style.display="block";
        document.getElementById('tbGiolam').innerHTML="Vui lòng nhập đúng giờ làm";
        return false
    }
}  

