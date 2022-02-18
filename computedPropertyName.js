
const ComputedPropertyName = 'Ten'
const Nguoi = {
    [`hoVa${ComputedPropertyName}`]: 'Dang Quoc Tien',
    quocTich: 'Viet Nam'
}
const nguoiKhac = {
    ...Nguoi,
    [`hoVa${ComputedPropertyName}`]: 'Dang Tien',
    tuoi: 23

}
console.log(nguoiKhac)