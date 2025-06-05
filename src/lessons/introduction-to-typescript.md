---
title: "บทนำสู่ TypeScript"
description: "มาเรียนรู้ว่า TypeScript คืออะไรและทำไมเราถึงควรใช้มัน"
---

TypeScript คือ Superset ของ JavaScript ที่เพิ่มเรื่องของ **Type Safety** เข้ามา...

## ทำไมต้องใช้ TypeScript?

* **ความปลอดภัยของ Type:** ช่วยให้คุณตรวจจับข้อผิดพลาดที่เกี่ยวกับ Type ได้ตั้งแต่ตอนคอมไพล์...
* **ปรับปรุง Tooling:** IDE สามารถให้คำแนะนำที่ดีขึ้น...
* **Scalability:** เหมาะสำหรับโปรเจกต์ขนาดใหญ่...

```typescript
// ตัวอย่างโค้ด TypeScript
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet("World");
// greet(123); // จะเกิด Error เพราะไม่ใช่ string