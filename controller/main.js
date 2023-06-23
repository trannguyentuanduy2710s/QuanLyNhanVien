function getElement(selector){
    return document.querySelector(selector)
}

var dsnv = new DSNV()

getLocalStorage()

function getThongTinNV (){
    var taikhoan = document.getElementById('tknv').value
    var tenNV = document.getElementById('name').value
    var email = document.getElementById('email').value
    var matKhau = document.getElementById('password').value
    var ngayLam = document.getElementById('datepicker').value
    var luong = +document.getElementById('luongCB').value
    var chucVu = document.getElementById('chucvu').value
    var gioLam =  +document.getElementById('gioLam').value
    
    // var check = checkTaikhoan(taikhoan);
    // tạo đối tượng nhân viên
    var nhanVien = new NhanVien(taikhoan, tenNV, email, matKhau, ngayLam, luong, chucVu, gioLam)
    
    // hàm check validate
    var flag = checkTaikhoan(taikhoan);
    flag &= validateName(tenNV); 
    flag &= validatEemail(email); 
    flag &= validatePassword(matKhau);
    flag &= validateLuong(luong );
    flag &= validateChucvu(chucVu );
    flag &= validateGiolam(gioLam );
    flag &= validateCalendar(ngayLam );
    
    // console.log("flag",flag);
    
    if(flag){
        return nhanVien
    }
    
}

getElement('#btnThemNV').onclick = function(){
    // var taikhoan = document.getElementById('tknv').value
    // var tenNV = document.getElementById('name').value
    // var email = document.getElementById('email').value
    // var matKhau = document.getElementById('password').value
    // var ngayLam = document.getElementById('datepicker').value
    // var luong = +document.getElementById('luongCB').value
    // var chucVu = document.getElementById('chucvu').value
    // var gioLam =  +document.getElementById('gioLam').value
    
    // // tạo đối tượng nhân viên
    // var nhanVien = new NhanVien(taikhoan, tenNV, email, matKhau, ngayLam, luong, chucVu, gioLam)

    
    var nhanVien = getThongTinNV()
   console.log(nhanVien);
   if(nhanVien){
    // push vào mảng
    dsnv.themNV(nhanVien)
    console.log(dsnv.arrNV)

   }
    // render mảng dsnv ra UI
    renderdsnv()


    // luu danh sách nhân viên vào local storage

    setLocalStorage()
}

// Lưu danh sách nhân viên vào localStorage
function setLocalStorage(){
    //B1 chuyển hết về dạng string
    var data = JSON.stringify(dsnv.arrNV)
    //B2 lưu vào local
    localStorage.setItem('DSNV', data)
}



// get danh sách nhân viên từ localstorage
function getLocalStorage(){
    //B1 lấy data từ local
    var data = localStorage.getItem('DSNV')


    //B2 parse data về kiểu dữ liệu ban đầu 
    if(data){
        
    var parseData = JSON.parse(data)

    // tạo lại đối tượng nhân viên để lấy lại phương thức tinhTongluong
    // B1 tạo lại mảng rỗng
    var arr = []
    // B2 duyệt mảng dc lấy từ local     
    for (var i = 0; i < parseData.length; i++){
        var nv = parseData[i]
        var nhanVien = new NhanVien(nv.taikhoan, nv.tenNV, nv.email, nv.matKhau, nv.ngayLam, nv.luong, nv.chucVu, nv.gioLam)

        // thêm nhanVien vào mảng
        arr.push(nhanVien)

    }

    // gán giá trĩ cho mảng cho arrNV từ data lấy từ localStorage
        dsnv.arrNV = arr
        renderdsnv()
    }
}


// render dsnv ra giao diện UI
function renderdsnv(arrNV = dsnv.arrNV){
    var content = ''
    for(var i = 0; i < arrNV.length; i++){
        var nv = arrNV[i]
        // content += '<tr>'
        // content += '<td>' + nv.taikhoan + '</td>'
        // content += '<td>' + nv.tenNV + '</td>'
        // content += '<td>' + nv.email + '</td>'
        // content += '<td>' + nv.ngayLam + '</td>'
        // content += '<td>' + nv.chucVu + '</td>'
        // content += '<td>' + nv.tong + '</td>'
        // content += '</tr>'

        content +=
        `<tr>
            <td>${nv.taikhoan}</td>
            <td>${nv.tenNV}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong()}</td>
            <td id = "xeploai">${nv.xepLoai()}</td>

            <td>
                 <button class ='btn btn-success mr-3' data-toggle="modal"
                 data-target="#myModal" onclick = "updateNV('${nv.taikhoan}')" >Edit</button>
                <button class ='btn btn-danger' id ="btnUpdate" onclick = "deleteNV('${nv.taikhoan}')">Delete</button>
            </td>
        </tr>
        `
    }
    // console.log("content: ", content);
    getElement('#tableDanhSach').innerHTML = content
}

  
    // xóa nhân viên
function deleteNV(taikhoan){
    dsnv.xoaNV(taikhoan)
    // Gọi lại render để cập nhật UI sau khi xóa thành công
    renderdsnv()

    // cập nhật lại data dưới localstroge
    setLocalStorage()
}  


   // update nhân viên
   function updateNV(nhanVien){
    // console.log("tenTaikhoan: ", tenTaikhoan);
    var index = dsnv.timNV(nhanVien)
    var x = dsnv.arrNV[index]
    
    // Lấy data lên input
     document.getElementById('tknv').value  = x.taikhoan
     document.getElementById('name').value =  x.tenNV
     document.getElementById('email').value = x.email
     document.getElementById('password').value = x.matKhau
     document.getElementById('datepicker').value = x.ngayLam
    document.getElementById('luongCB').value = x.luong
     document.getElementById('chucvu').value = x.chucVu
    document.getElementById('gioLam').value = x.gioLam

    // lấy lại thông tin nhân viên sau khi chỉnh sửa 

    // // Cập nhật sinh viên
    // var nhanVien = getThongTinNV();
    // // console.log(nhanVien);
    // dsnv.capNhatNV(nhanVien)

    // // Render ra UI
    // renderdsnv()

    // // Cập nhật data local
    // setLocalStorage()
}

getElement('#btnCapNhat').onclick = function() {
    var nhanVien = getThongTinNV()

    dsnv.capNhatNV(nhanVien)
    
    // Render ra UI
    renderdsnv()

    // Cập nhật data local
    setLocalStorage()
}
 

    // search nhân viên
getElement('#searchName').addEventListener('keyup', function(){
    var valueSearch = getElement('#searchName').value.toLowerCase()
    // console.log("valueSearch: ", valueSearch);
    var arrNVSearch = []
    for(var i = 0; i < dsnv.arrNV.length; i++){
        var ranks = dsnv.arrNV[i].xepLoai().toLowerCase()
        if(ranks.indexOf(valueSearch) !== -1){
            arrNVSearch.push(dsnv.arrNV[i])
        }
    }
    console.log("arrNVSearch: ", arrNVSearch)   
    renderdsnv(arrNVSearch)

})   





