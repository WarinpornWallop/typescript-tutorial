# โปรเจกต์นี้สร้างด้วย Next.js + TypeScript + MUI

โปรเจกต์นี้ใช้ [Next.js](https://nextjs.org) สำหรับสร้างเว็บแอป และใช้ [Material UI (MUI)](https://mui.com/) สำหรับ UI component  
โค้ดเขียนด้วย TypeScript เพื่อความปลอดภัยและอ่านง่าย

## วิธีติดตั้งและเริ่มต้นใช้งาน

1. ติดตั้งแพ็กเกจ
   ```bash
   npm install
   ```

2. รันเซิร์ฟเวอร์สำหรับพัฒนา
   ```bash
   npm run dev
   ```

3. เปิดเว็บเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

## รายชื่อหน้าเพจหลักในโปรเจกต์นี้

- `/` : หน้าแรก
- `/mypage/whatiscomponent` : ตัวอย่างการใช้ MUI component หลายแบบ เช่น Card, Dialog, Snackbar, Table, Breadcrumb ฯลฯ
- `/user/usermanagement` : หน้าจัดการผู้ใช้ (User Management) พร้อมตารางและปุ่มเพิ่ม/แก้ไข/ลบ
- `/user/add` : หน้าเพิ่มผู้ใช้ใหม่
- `/user/[id]/edit` : หน้าแก้ไขข้อมูลผู้ใช้ (ดึงข้อมูลจาก API)
- มีการใช้ MUI component เช่น Grid, Typography, Button, Card, Dialog, Snackbar, Breadcrumb, Table ฯลฯ ในทุกหน้า

## วิธีแก้ไขหน้าเว็บ

- แก้ไขไฟล์ในโฟลเดอร์ `app/` หรือ `components/` ตามแต่ละหน้า
- เมื่อบันทึกไฟล์ หน้าเว็บจะรีเฟรชอัตโนมัติ

## ข้อมูลเพิ่มเติม

- [Next.js Documentation](https://nextjs.org/docs)
- [Material UI Documentation](https://mui.com/)
- [Learn Next.js](https://nextjs.org/learn)
- [GitHub Next.js](https://github.com/vercel/next.js)

## วิธี Deploy ขึ้น Vercel

- สมัครสมาชิกที่ [Vercel](https://vercel.com)
- เชื่อมต่อกับ GitHub ของโปรเจกต์นี้
- กด "New Project" แล้วเลือก repo นี้
- อ่านรายละเอียดเพิ่มเติมที่ [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)

---