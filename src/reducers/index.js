import { combineReducers } from 'redux'
import cktype from './ck_type.js'
import ck_id from './ck_id.js'

export default combineReducers({//ทำให้ใช้ ruducer ได้หลาย ๆ ตัว
    cktype,//ข้อมูลจาก reducer ชื่อ cktype
    ck_id 
})
