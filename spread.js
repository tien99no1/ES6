const sinhVien ={
    ten: 'Quoc Tien',
    nam: 3
}
const sinhVienSapTotNghiep = {
    ...sinhVien,
    nam: 4,
    sapTotNghiep: true
}
console.log(sinhVienSapTotNghiep)