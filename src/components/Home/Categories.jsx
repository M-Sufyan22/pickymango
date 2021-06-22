import { Typography } from "@material-ui/core";
import React from "react";
import { Bounce } from "react-reveal";
import Category from "../utils/Caregory";

const categories = [
  {
    text: "موسيقى",
    value: "(0)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/36a5c3f9-3aa5-44e1-8f71-ce21c1a1d236/8d57692e-842a-4871-9684-0a49416fad6d.jpg",
  },
  {
    text: "الموبايلات واكسسوارتها",
    value: "(0)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/21ab6e51-ed06-4d7d-89ac-dd841230996d/e32294e9-9838-4b6a-9fcb-97bb2f96fa21.PNG",
  },
  {
    text: "وظائف شاغرة",
    value: "(1)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/a52faca3-e640-4ad5-8cf7-2aacd0e010e2/71b4d706-4adc-4538-8445-e2c7f6a5a1bb.PNG",
  },
  {
    text: "التعليم والتدريب",
    value: "(1)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/c789e423-9a1e-4b77-b107-3b74db00e666/4e3cc614-0970-4478-a5c6-74a3898dbf6c.jpg",
  },
  {
    text: "ازياء",
    value: "(10)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/5fe2ed08-2b3b-4e2d-8d6f-031bb4583ce9/08917866-afc3-4188-b84d-7de2aa486962.jpg",
  },
  {
    text: "العقارات",
    value: "(10)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/0063c4fa-1a37-47ab-822a-5165083055a5/0b5b4916-9000-41b4-8b92-712a427f4e21.jpg",
  },
  {
    text: "الحديقة والمنزل",
    value: "(10)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/325ffe3a-38dd-4c0d-ab78-5e264f011737/1b4c4473-ee0a-485d-9337-9895c10968f1.jfif",
  },
  {
    text: "الباحثين عن عمل",
    value: "(10)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/fbd10c3c-139b-4ae6-8af7-e0b70d0710dd/1b6bbd2a-596e-4a84-bfac-4d40ba895077.jpg",
  },
  {
    text: "الغذاء",
    value: "(12)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/a9850acf-ecca-435a-8205-b0ebe367951f/6d255500-05ec-495c-82ae-f7864ea505e0.jpg",
  },
  {
    text: "الالكترونيات",
    value: "(30)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/f6234588-da73-4a29-ac59-79fbae68ba08/e7ded48b-ebdb-410e-873d-6a64e6773864.jpg",
  },
  {
    text: "الحيوانات الأليفة",
    value: "(40)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/607242f6-c463-4887-9e35-245615d000c1/a27cc550-605d-4447-8897-2f9ecd75045e.jpg",
  },
  {
    text: "رياضة",
    value: "(40)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/fa16969f-1cc4-4ac1-aab7-2d55a737fc45/3e357340-270b-4ed6-9776-b7b14f016a31.jpg",
  },
  {
    text: "الألعاب والتسلية",
    value: "(40)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/7de12264-b24d-4bb9-bf95-2fb05bd1457d/381463ef-edc4-409e-9780-de7f852c00a4.jpeg",
  },
  {
    text: "الصحة",
    value: "(50)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/35c25958-9e47-43d0-8bfe-3a00601210af/639a5114-de79-44fa-8e6f-f7fdc3f162af.jpg",
  },
  {
    text: "خدمات",
    value: "(50)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/008f4c97-1b8a-4174-a51e-60c6dae7dae5/b32fcb5c-58f3-4405-a5ef-aab6fce07dc2.jpg",
  },
  {
    text: "التجميل",
    value: "(50)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/2208d595-8444-455b-802f-7f959a176976/c1cf1072-ce6c-4cf2-afa0-56ca78d1accb.jpg",
  },
  {
    text: "فنون",
    value: "(50)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/cfddfae6-1e2b-4f77-98b3-a8ad83132180/13077e21-2fda-4176-b969-b60328118945.jpg",
  },
  {
    text: "سيارات",
    value: "(50)",
    image:
      "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/CATEGORIES/THUMNAIL/98134ecf-ecdc-4826-b022-d4a39f408ae5/33ba4d23-2d1f-4f9e-94fa-cf478977aa00.jpg",
  },
];
const Categories = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between container">
          <Typography className="my-4" variant="h2">
            Featured Categories
          </Typography>
        </div>
        <div className="row">
          {categories.map((el, i) => (
            <div key={i} className="col-lg-4 py-2">
              <Bounce top delay={(i % 3) * 50}>
                <Category {...el} />
              </Bounce>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
