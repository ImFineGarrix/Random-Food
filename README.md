
# RANDOM FOOD APPLICATION

#### เว็บไซต์นี้สร้างขึ้นเพื่อให้ผู้ใช้สามารถสุ่มรายการอาหาร


<br>

## Inspiration (แรงบันดาลใจ)

#### เว็บไซต์นี้เกิดจาก Pain point ของคนในกลุ่มที่ว่าในทุก ๆ วันจะต้องสั่งอาหารมาทาน แต่ในแต่ละมื้อก็คิดไม่ออกว่าจะทานอาหารอะไรดี ทางกลุ่มจึงได้สร้างเว็ปไซต์นี้เพื่อจัดการปัญหานั้น

<br>

## Table of Content

| Part | Name              |Navigate to|
|:---:|-------------------|--------------|
|  1  |What's in this web|[Navigate me!](#whats-in-this-web) |
|  2  |Home page|[Navigate me!](#home-page) |
|  3  |Menu Page|[Navigate me!](#menu-page-1) |
|  4  |About us Page|[Navigate me!](#about-us-1) |
|  5  |Components|[Navigate me!](#components-explanation) |

<br>

# What's in this web?

### ในเว็บไซต์ของเราประกอบไปด้วย 3 หน้าหลัก ๆ

- ### [Home page](#home-page-1)
- ### [Menu page](#menu-page-1)
- ### [About us](#about-us-1)

# Home page

![This is picture of homepage](./public/images/protptype/homepage.JPG)

หน้า Home page เป็นหน้าหลัก โดยมีจะมีชื่อ Website, Navbar, Random food และ History 


![This is picture of random food](./public/images/protptype/random-food.JPG)
- Random food  
จะเป็นการสุ่มอาหารตาม Type ที่กำหนดไว้ให้แล้ว โดยจะมี Main,  Side, Dessert, Drink, Snack และ All(Random food) พอ User ทำการกดปุ่มการ Random Food มีการสุ่มอาหารจาก Menu list ที่จาก API มีไว้ให้ และทำการสุ่มออกมา เป็นรูปภาพ ชื่อ และแคลลอรี่

![This is picture of history](./public/images/protptype/history.JPG)
- History
จะเป็นการเก็บ History ของเมนูการสุ่มอาหาร และทาง User สามารถลบรายการที่ไม่ต้องการออกไปได้โดยการกด X ทางด้านขวามือ และยังมีระบบที่บอกว่า User สุ่ม Type ของอาหารไปแล้วกี่อย่าง โดยจะนับจาก Type ใน History

<br>


# Menu Page 

หน้า Menu page เป็นหน้าที่จะแสดง List menu อาหารที่สามารถจะถูกสุ่มออกมาได้ โดยใน List นี้จะประกอบด้วย list ที่มีให้อยู่แล้ว 50 เมนูกับ menu ที่ User เพิ่มเข้ามาเอง 
โดย User สามารถเพิ่ม Menu เข้าไปใน List ได้ด้วตนเองโดยกดปุ่ม 'Don't have your food? Add here!' ที่ด้านบนซ้ายมือ

![This is picture of menu list part](./public/images/protptype/menu-list.PNG)

พอกดแล้วจะมีหน้า Add food แสดงออกมาให้ใช้งานโดยให้ User ใส่ชื่อภาษาไทย,ภาษาอังกฤษ,แคลลอรี่ และประเภทของ Menu ที่ต้องการจะเพิ่มได้

![This is picture of add food part](./public/images/protptype/add-food.PNG)

โดยที่จะต้องบังคับใส่ก็คือชื่อภาษาไทยกับ Type ของอาหาร ถ้าไม่ได้ใส่ก็จะมีการแจ้งเตือนขึ้น

![This is picture of alert thai part](./public/images/protptype/alert-thai.PNG)
![This is picture of alert eng part](./public/images/protptype/alert-en.PNG)

พอ Add เสร็จแล้ว Menu ใหม่ก็จะถูกเพิ่มที่ส่วนล่างสุดของ Menu list

![This is picture of new menu part](./public/images/protptype/new-menu.PNG)

<br> 


# About us

![This is picture of about us](./public/images/protptype/about-us.JPG)

หน้า About us เป็นหน้าที่บอกถึงว่ามีสมาชิกภายในทีมมีใครบ้าง ชื่ออะไร ทำอะไรบ้างภายใน Website แล้วก็ยังมี Social media ของสมาชิกแต่ละคน

<br>

# Components Explanation

- AddFoodForm
เป็น Component ที่ใช้ในส่วนของ addFood ในหน้า Menu โดยจะสร้าง Form และปุ่ม Add เพื่อส่งข้อมูลไปใช้ Add function ในหน้า Menu ต่อไป


- BaseNavbar
เป็น Component ที่ใช้กับ router-link ที่คอยเปลี่ยนหน้าแสดงผลของ Home, Menu, AboutUs 


- History
เป็น Component ที่แสดงผลกับ History ของ Meun ที่ถูกสุ่มออกมา เพื่อนำไปใช้กับหน้า Home 


- MemberProfile
เป็น Component ที่ใช้แสดงข้อมูลต่างๆของ ผู้สร้าง web ขึ้นมาในหน้า AboutUs


- MenuList
เป็น Component ที่แสดงผลกับ List ของ Meun ที่มีอยู่ในตอนนี้ เพื่อนำไปใช้กับหน้า Menu 


- RandomFood
เป็น component ที่แสดงผลในส่วนของการสุ่ม จะแสดงผลในหน้า Home


<br>

# Others

- This project is coded by all of our contributors using Live Share Extension on VSCode, so don't worry if you see committed by only some of us.

# Learning Outcome

- เรียนรู้ในการทำงานเป็นทีม
- รู้จักการบริหารงาน และเวลาให้เหมาะสม
- เรียนรู้ในการใช้ Library ต่างๆมากขึ้น

### Group member

| No. | Name              | Student ID   |
|:---:|-------------------|--------------|
|  1  | นางสาวกาญจนาพร ชื่นมณีรัตน์ [Kanjanaporn Chuenmaneerat](https://github.com/VioletKan) | 63130500005  |
|  2  | นางสาวจริยาวดี แถมศรี [Jariyawadee Tamsri ](https://github.com/jariyawa) | 63130500008  |
|  3  | นายจักริน ไชยบุบผา [Jakarin Chaibubpa](https://github.com/jakarin-b) | 63130500009 |
|  4  | นายชานนท์ รักดี [Chanon Rugdee](https://github.com/ImFineGarrix)  | 63130500020 |
|  5  | นายโชติวิทย์ เสือยันต์ [Chotiwit Souyan](https://github.com/xbklyn) | 63130500026 |

**Instructor:** [T. UMAPORN SUPASITTHIMETHEE](https://github.com/umaporn-sup)

 **This project is for subject INT203 Client-Sided Web Programming II**
