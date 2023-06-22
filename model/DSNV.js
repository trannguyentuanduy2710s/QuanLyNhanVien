function DSNV(){
    this.arrNV = []


    this.themNV = function(nhanVien){
        this.arrNV.push(nhanVien)
    }

    this.timNV = function(taikhoan){
        // var index = -1
        // tìm index cần xóa dựa vào tên tài khoản
        for (var i = 0; i < this.arrNV.length; i++){
            var tenTaikhoan = this.arrNV[i].taikhoan
            if (tenTaikhoan === taikhoan ){
                return i
            }
        }

        return -1
    }
    // trả về -1 thì k có nhân viên vào chứa taikhoan cần tìm

    this.xoaNV = function(taikhoan){
        // var index = -1
        // // tìm index cần xóa dựa vào tên tài khoản
        // for (var i = 0; i < this.arrNV.length; i++){
        //     var tenTaikhoan = this.arrNV[i].taikhoan
        //     if (tenTaikhoan === taikhoan ){
        //         index = i
        //     }
        // }
        // return -1

        var index = this.timNV(taikhoan)

        if(index !== -1){
            this.arrNV.splice(index, 1)
        }
    }



    this.capNhatNV = function(nhanVien){
        var index = this.timNV(nhanVien.taikhoan)
        if(index !== -1){
            this.arrNV[index] = nhanVien
        }
    }
}