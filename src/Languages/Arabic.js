import { Link } from "react-router-dom";

const Arabic = {
  header: {
    links: {
      home: "الرئيسية",
      view_acutions: "عرض المزادات/ الاعلانات",
      contact_us: "تسجيل الدخول",
      terms: "البنود & الظروف",
      poilcy: "سياسات",
      login: "تواصل معنا",
    },
    searchbar: {
      category: "الفئة",
      location: "موقعك",
      search_keyword: "كلمة البح",
    },
  },
  home: {
    about: {
      content: (
        <>
          مرحبا بكم في Picky Mango ، أحد بيوت الخبرة في المزادات الإلكترونية
          العالمية الرائدة على الإنترنت. تظل المزادات نشطة لفترة زمنية محددة. في
          كل مزاد ، يتم تحديد تاريخ البداية والنهاية لإعطاء المستخدم الإطار
          الزمني اللازم للمزايدة. جميع المزادات متاحة على{" "}
          <Link to="/auctions">قائمة المزادات والاعلانات</Link> ، ويمكنك
          المشاركة بالمزادات او نشر مزاداتك لبيع وتأجير ممتلكاتك بكل سهولة
        </>
      ),
    },
    slider: {
      info: "يحدث الآن",
      title: "سماعات آبل الجيل الثاني جديد",
      category: "الموبايلات واكسسوارتها",
      days: "يوم",
      hours: "ساعة",
      minutes: "دقيقة",
      seconds: "ثانية",
      button: "عرض التفاصيل",
      from: "من",
      to: "إلى",
      share_token: "عربون المشاركة",
      currency: " ر.س.",
    },
  },
};

export default Arabic;
