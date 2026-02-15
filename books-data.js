/* =========================================================
   BoiCloud - Books Database
   ✅ শুধু এখানেই বই Add / Edit করবেন
   ✅ id অবশ্যই ইউনিক হবে
   ========================================================= */

const BOOKS_DATA = [
  {
    id: '1',
    title: 'আর রাহীকুল মাখতূম',
    author: 'আল্লামা সফিউর রহমান মোবারকপুরী',
    category: 'ইসলামিক',
    coverImage: 'https://media.kitabghor.com/products/1022/24070/voqjr1678513345czycjt1.jpg',
    readLink: 'https://drive.google.com/file/d/19HyjCsZ6cT6pd15ksGfuahRbSx3iWQ9a/view?usp=sharing',
    downloadLink: 'https://drive.google.com/uc?export=download&id=19HyjCsZ6cT6pd15ksGfuahRbSx3iWQ9a',
    description: 'বিশ্বনন্দিত সীরাত গ্রন্থ, যেখানে নবী করীম (সা.)-এর পবিত্র জীবন আখ্যান বিস্তারিতভাবে বর্ণিত হয়েছে।'
  },
  {
    id: '2',
    title: 'হিমুর হাতে কয়েকটি নীল পদ্ম',
    author: 'হুমায়ূন আহমেদ',
    category: 'উপন্যাস',
    coverImage: 'https://bengaliebook.com/wp-content/uploads/2022/02/%E0%A6%B9%E0%A6%BF%E0%A6%AE%E0%A7%81%E0%A6%B0-%E0%A6%B9%E0%A6%BE%E0%A6%A4%E0%A7%87-%E0%A6%95%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%95%E0%A6%9F%E0%A6%BF-%E0%A6%A8%E0%A7%80%E0%A6%B2%E0%A6%AA%E0%A6%A6%E0%A7%8D%E0%A6%AE-1086x1536.jpg',
    readLink: 'https://drive.google.com/file/d/127a_Z71ZCS6dgimTg0IeB6ist2rL6vmp/view?usp=sharing',
    downloadLink: 'https://drive.google.com/uc?export=download&id=127a_Z71ZCS6dgimTg0IeB6ist2rL6vmp',
    description: 'হিমু সিরিজের এক জনপ্রিয় রহস্যময় উপন্যাস।'
  },
  {
    id: '3',
    title: 'লোকরহস্য',
    author: 'বঙ্কিমচন্দ্র চট্টোপাধ্যায়',
    category: 'অন্যান্য',
    coverImage: 'https://rokbucket.rokomari.io/ProductNew20190903/260X372/Lokarahasya-Bankimacandro_Chattopadhay_-d4b06-445513.jpg',
    readLink: 'https://drive.google.com/file/d/1G0OYqLvpUIyShsYDL2N3HXXa3UUMMFD_/view?usp=sharing',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1G0OYqLvpUIyShsYDL2N3HXXa3UUMMFD_',
    description: 'বঙ্কিমচন্দ্র চট্টোপাধ্যায়ের একটি চমৎকার সামাজিক ও ব্যঙ্গাত্মক প্রবন্ধ সংকলন।'
  },
  {
    id: '4',
    title: 'প্রফেসর শঙ্কু সমগ্র',
    author: 'সত্যজিৎ রায়',
    category: 'সায়েন্স ফিকশন',
    coverImage: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1698947761i/670686.jpg',
    readLink: 'https://drive.google.com/file/d/1UGmXVI8LswS40A8QbP9Ugr_2Bs_11Hcr/view?usp=sharing',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1UGmXVI8LswS40A8QbP9Ugr_2Bs_11Hcr',
    description: 'বিশ্বখ্যাত বিজ্ঞানী প্রফেসর ত্রিলোকেশ্বর শঙ্কুর অদ্ভুত সব আবিষ্কার ও অভিযানের রোমাঞ্চকর কাহিনী।'
  },
  {
    id: '5',
    title: 'ফেলুদা সমগ্র ১',
    author: 'সত্যজিৎ রায়',
    category: 'থ্রিলার',
    coverImage: 'https://www.versoz.com/cdn/shop/files/8V2GCB9KIWPU-1_750x.jpg?v=1724593671',
    readLink: 'https://drive.google.com/file/d/127NUgpcPQrm55ppdUhDDlTtte2mChTO7/view?usp=sharing',
    downloadLink: 'https://drive.google.com/uc?export=download&id=127NUgpcPQrm55ppdUhDDlTtte2mChTO7',
    description: 'ফেলুদা সিরিজের প্রথম খণ্ড, যেখানে প্রদোষ চন্দ্র মিত্রের রোমাঞ্চকর সব গোয়েন্দা কাহিনী সংকলিত হয়েছে।'
  },
  {
    id: '6',
    title: 'ফেলুদা সমগ্র ২',
    author: 'সত্যজিৎ রায়',
    category: 'থ্রিলার',
    coverImage: 'https://www.amarbooks.org/thumbs/1467711379.jpg',
    readLink: 'https://drive.google.com/file/d/1wTsIDZd5O5G3oBs9w4H9NKTUHG2LKeSj/view?usp=sharing',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1wTsIDZd5O5G3oBs9w4H9NKTUHG2LKeSj',
    description: 'ফেলুদা সিরিজের দ্বিতীয় খণ্ড, যেখানে প্রদোষ চন্দ্র মিত্রের আরও কিছু শ্বাসরুদ্ধকর গোয়েন্দা কাহিনী রয়েছে।'
  },
  {
    id: '7',
    title: 'লালসালু',
    author: 'সৈয়দ ওয়ালীউল্লাহ্',
    category: 'উপন্যাস',
    coverImage: 'https://www.amarbooks.org/thumbs/1468163668.jpg',
    readLink: 'https://drive.google.com/file/d/1C9LPULtTbq5uWqQZLdPfNFKee0XsKZoE/view?usp=sharing',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1C9LPULtTbq5uWqQZLdPfNFKee0XsKZoE',
    description: 'বাঙালি মুসলিম সমাজের ধর্মীয় অন্ধবিশ্বাস ও শোষণের এক গভীর জীবনধর্মী উপন্যাস।'
  },
  {
    id: '8',
    title: 'অগ্নিপক্ষ (আত্মজীবনী)',
    author: 'এ পি জে আব্দুল কালাম',
    category: 'জীবনী',
    coverImage: 'https://allbanglaboi.com/wp-content/uploads/2020/04/Agni-Pakkha-Atmajibani-by-APJ-Abdul-Kalam.jpg',
    readLink: 'https://drive.google.com/file/d/1LCTZMavEB59_a6e13S5aN3cqCmn9Jl3H/view?usp=sharing',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1LCTZMavEB59_a6e13S5aN3cqCmn9Jl3H',
    description: 'ভারতের প্রাক্তন রাষ্ট্রপতি এ পি জে আব্দুল কালামের অনুপ্রেরণামূলক আত্মজীবনী।'
  },

  { 
    id: '9', 
    title: 'অ্যাডভেঞ্চার অমনিবাস', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://i0.wp.com/www.banglabooks.in/wp-content/uploads/2016/03/Adventure-Omnibus-by-Syed-Mustafa-Siraj-pdf.jpg?fit=300%2C300&ssl=1', 
    readLink: 'https://drive.google.com/file/d/1r1_Dyb_VCAw2YUzIMwBlP1jemzeP-JKQ/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1r1_Dyb_VCAw2YUzIMwBlP1jemzeP-JKQ', 
    description: 'সৈয়দ মুস্তাফা সিরাজের রহস্য ও রোমাঞ্চকর অ্যাডভেঞ্চার গল্পের সংকলন।' 
  },
  { 
    id: '10', 
    title: 'আগুন রঙের লাল', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'উপন্যাস', 
    coverImage: 'https://archive.org/services/img/in.ernet.dli.2015.453029', 
    readLink: 'https://drive.google.com/file/d/1V3q8Us6w_Gk5dnef-TQp2tDbjkq3vDJA/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1V3q8Us6w_Gk5dnef-TQp2tDbjkq3vDJA', 
    description: 'একটি অনবদ্য সামাজিক ও জীবনমুখী উপন্যাস।' 
  },
  { 
    id: '12', 
    title: 'কর্নেল সমগ্র ১', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://www.versoz.com/cdn/shop/files/FPUMDAB47TL0_1.jpg?v=1727965842', 
    readLink: 'https://drive.google.com/file/d/1KxHt-lMBujocoF3kQJnnmCyscqXBnRFj/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1KxHt-lMBujocoF3kQJnnmCyscqXBnRFj', 
    description: 'কর্নেল নীলাদ্রি সরকারের রহস্যভেদের প্রথম খণ্ড।' 
  },
  { 
    id: '13', 
    title: 'কর্নেল সমগ্র ২', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://www.amarbooks.org/thumbs/1491449531.jpg', 
    readLink: 'https://drive.google.com/file/d/1FVQqt0i1iqoYFDW5X7ESrkTmmfS7SEc5/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1FVQqt0i1iqoYFDW5X7ESrkTmmfS7SEc5', 
    description: 'কর্নেল নীলাদ্রি সরকারের রহস্যভেদের দ্বিতীয় খণ্ড।' 
  },
  { 
    id: '14', 
    title: 'কর্নেল সমগ্র ৩', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://deys-publishing.blr1.digitaloceanspaces.com/eoax65pmSothumbnail_1727932505.jpeg', 
    readLink: 'https://drive.google.com/file/d/1FlVG3tEuur5WFelmeFeq515GR7PhFWgO/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1FlVG3tEuur5WFelmeFeq515GR7PhFWgO', 
    description: 'কর্নেল নীলাদ্রি সরকারের রহস্যভেদের তৃতীয় খণ্ড।' 
  },
  { 
    id: '15', 
    title: 'কর্নেল সমগ্র ৫', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://www.versoz.com/cdn/shop/files/XSJKYLW70PMT_1.jpg?v=1727967069', 
    readLink: 'https://drive.google.com/file/d/1J56MzuaX16rg4v-NJHTnnsmTi3WXpEFN/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1J56MzuaX16rg4v-NJHTnnsmTi3WXpEFN', 
    description: 'কর্নেল নীলাদ্রি সরকারের রহস্যভেদের পঞ্চম খণ্ড।' 
  },
  { 
    id: '16', 
    title: 'কর্নেল সমগ্র ৮', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://m.media-amazon.com/images/I/A1BXeOvmK2L._AC_UF1000,1000_QL80_.jpg', 
    readLink: 'https://drive.google.com/file/d/1VUMON_OERubxgGDl7nJHiIiHmEsjl_dJ/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1VUMON_OERubxgGDl7nJHiIiHmEsjl_dJ', 
    description: 'কর্নেল নীলাদ্রি সরকারের রহস্যভেদের অষ্টম খণ্ড।' 
  },
  { 
    id: '17', 
    title: 'কর্নেল সমগ্র ১০', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://m.media-amazon.com/images/I/A1xPVrAnU3L._AC_UF1000,1000_QL80_.jpg', 
    readLink: 'https://drive.google.com/file/d/1r8tIE5RTDtbdtQZCXD6S5bKoZlXs-9Hv/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1r8tIE5RTDtbdtQZCXD6S5bKoZlXs-9Hv', 
    description: 'কর্নেল নীলাদ্রি সরকারের রহস্যভেদের দশম খণ্ড।' 
  },
  { 
    id: '18', 
    title: 'কর্নেল সমগ্র ১৩', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://pbs.com.bd/_next/image?url=https%3A%2F%2Ffs.pbs.com.bd%2FDIR%2FCom%2FPBS%2FProduct%2FImageDetails%2F2203517.jpg&w=640&q=75', 
    readLink: 'https://drive.google.com/file/d/1ewe9afDYNRe4HyD5E9AorUaYg7BkgvV5/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1ewe9afDYNRe4HyD5E9AorUaYg7BkgvV5', 
    description: 'কর্নেল নীলাদ্রি সরকারের রহস্যভেদের তেরোতম খণ্ড।' 
  },
  { 
    id: '19', 
    title: 'কর্নেল সমগ্র ১৪', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8slJ2V-1W2N5CPMxijSey08cqFpAU6dx1g&s', 
    readLink: 'https://drive.google.com/file/d/1xdkuRjx0o1684_9fy3aEm52RY-d732W3/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1xdkuRjx0o1684_9fy3aEm52RY-d732W3', 
    description: 'কর্নেল নীলাদ্রি সরকারের রহস্যভেদের চৌদ্দতম খণ্ড।' 
  },
  { 
    id: '20', 
    title: 'দারুব্রহ্ম কথা', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'সাহিত্য', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnRodHmODeoz3tqebSF0I13Qher6PIiUcuw&s', 
    readLink: 'https://drive.google.com/file/d/1Rm4pSIiqn-IuUmM753Lgf_V_tx2o9j4a/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1Rm4pSIiqn-IuUmM753Lgf_V_tx2o9j4a', 
    description: 'সৈয়দ মুস্তাফা সিরাজের এক অনবদ্য সাহিত্য সৃষ্টি।' 
  },
  { 
    id: '21', 
    title: 'দশটি উপন্যাস', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'উপন্যাস', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAmhCKSFeaFLafJ9ZtG4lgsTCd8ooHRhQ2A&s', 
    readLink: 'https://drive.google.com/file/d/19ecM0omtbqFdd2VO2d5VpyqKHi1gMrat/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=19ecM0omtbqFdd2VO2d5VpyqKHi1gMrat', 
    description: 'সৈয়দ মুস্তাফা সিরাজের শ্রেষ্ঠ দশটি উপন্যাসের সংকলন।' 
  },
  { 
    id: '22', 
    title: 'ধুমগড়ের পিশাচ রহস্য', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'ভৌতিক', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nhIYHbNenDHQT1akSM4_FnAoA3WPpw5zKg&s', 
    readLink: 'https://drive.google.com/file/d/1fUvWhJSatWBcZHibJrLFK0JCHmMQesGH/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1fUvWhJSatWBcZHibJrLFK0JCHmMQesGH', 
    description: 'একটি রোমহর্ষক রহস্য ও ভৌতিক কাহিনী।' 
  },
  { 
    id: '23', 
    title: 'ডমরুদিঘির ভূত', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'ভৌতিক', 
    coverImage: 'https://allboi.com/wp-content/uploads/2023/02/Domrudihir-Bhut-by-Syed-Mustafa-Siraj-e1692599292131.jpg', 
    readLink: 'https://drive.google.com/file/d/1DGzYwBoC0-UA4tJMxqx8JaEeNUX7_I5/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1DGzYwBoC0-UA4tJMxqx8JaEeNUX7_I5', 
    description: 'কিশোরদের জন্য লেখা একটি জনপ্রিয় ভূতের বই।' 
  },
  { 
    id: '24', 
    title: 'একডজন কর্নেল', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_EjHgqfbuoHXffhkk9MQuPSeJl7zQl2eAyg&s', 
    readLink: 'https://drive.google.com/file/d/1EmoaxP13F9ttXV_VYKC_csT7QyEyeCsR/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1EmoaxP13F9ttXV_VYKC_csT7QyEyeCsR', 
    description: 'বারোটি বাছাই করা কর্নেল নীলাদ্রি সরকারের রহস্য কাহিনী।' 
  },
  { 
    id: '25', 
    title: 'কিশোর কর্নেল সমগ্র ১', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://www.amarbooks.org/thumbs/1491446260.jpg', 
    readLink: 'https://drive.google.com/file/d/1kngjibB1UPjBGb6rG2RDDtjxl8tHXuMu/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1kngjibB1UPjBGb6rG2RDDtjxl8tHXuMu', 
    description: 'কিশোরদের জন্য লেখা কর্নেল সমগ্রের প্রথম খণ্ড।' 
  },
  { 
    id: '26', 
    title: 'কিশোর কর্নেল সমগ্র ২', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://www.amarbooks.org/thumbs/1491448497.jpg', 
    readLink: 'https://drive.google.com/file/d/1LA5E-HeI7O4VA345WnEWTNX39R9g4-S_/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1LA5E-HeI7O4VA345WnEWTNX39R9g4-S_', 
    description: 'কিশোরদের জন্য লেখা কর্নেল সমগ্রের দ্বিতীয় খণ্ড।' 
  },
  { 
    id: '27', 
    title: 'কিশোর কর্নেল সমগ্র ৩', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://m.media-amazon.com/images/I/51m31Bi4YPL._AC_UF1000,1000_QL80_.jpg', 
    readLink: 'https://drive.google.com/file/d/1gJ9l68raQmE-9VgoHze-yWztGeq29Xfc/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1gJ9l68raQmE-9VgoHze-yWztGeq29Xfc', 
    description: 'কিশোরদের জন্য লেখা কর্নেল সমগ্রের তৃতীয় খণ্ড।' 
  },
  { 
    id: '28', 
    title: 'কিশোর কর্নেল সমগ্র ৪', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://www.amarbooks.org/thumbs/1491448540.jpg', 
    readLink: 'https://drive.google.com/file/d/1ot9GDZYjXR_SX0duGJhLF0DcMnkOO2QU/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1ot9GDZYjXR_SX0duGJhLF0DcMnkOO2QU', 
    description: 'কিশোরদের জন্য লেখা কর্নেল সমগ্রের চতুর্থ খণ্ড।' 
  },
  { 
    id: '29', 
    title: 'কোকোদ্বীপের বিভীষিকা', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP9M_IPoc0NepYkoprri2rkSa9R3GM-RvUbQ&s', 
    readLink: 'https://drive.google.com/file/d/1NLLJUYARLdKOQoDCM_CrbHnTE66vqttl/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1NLLJUYARLdKOQoDCM_CrbHnTE66vqttl', 
    description: 'কর্নেল নীলাদ্রি সরকারের একটি রোমহর্ষক রহস্য অভিযান।' 
  },
  { 
    id: '30', 
    title: 'কৃষ্ণা বাড়ি ফেরেনি', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'উপন্যাস', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSw2PRhGorHVsUM-expfU1GUhYXDGi6pw9NQ&s', 
    readLink: 'https://drive.google.com/file/d/1eh9cWYJhF9ExzHuxRR6mP_nK5VTZw2a_/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1eh9cWYJhF9ExzHuxRR6mP_nK5VTZw2a_', 
    description: 'সৈয়দ মুস্তাফা সিরাজের এক চমৎকার সামাজিক উপন্যাস।' 
  },
  { 
    id: '31', 
    title: 'কুয়াশার রঙ', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'সাহিত্য', 
    coverImage: 'https://www.amarbooks.org/thumbs/1491704094.jpg', 
    readLink: 'https://drive.google.com/file/d/1TWsBDFv15tML2TAGhh4hHvkvNvRRvFLD/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1TWsBDFv15tML2TAGhh4hHvkvNvRRvFLD', 
    description: 'মননশীল সাহিত্যের এক অনন্য নিদর্শন।' 
  },
  { 
    id: '32', 
    title: 'মধ্যাহ্ন (১ম ও ২য় খণ্ড)', 
    author: 'হুমায়ূন আহমেদ', 
    category: 'উপন্যাস', 
    coverImage: 'https://img.drz.lazcdn.com/static/bd/p/c82d4ef51084d68a3b92d69e6d00cf70.jpg_720x720q80.jpg', 
    readLink: 'https://drive.google.com/file/d/1rLIsfjaPqFYf5M2fOroAPfvAw3u_po9X/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1rLIsfjaPqFYf5M2fOroAPfvAw3u_po9X', 
    description: 'হুমায়ূন আহমেদের মহাকাব্যিক এক ঐতিহাসিক উপন্যাস।' 
  },
  { 
    id: '33', 
    title: 'মায়ামৃদঙ্গ', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'উপন্যাস', 
    coverImage: 'https://i0.wp.com/www.banglabooks.in/wp-content/uploads/2016/03/Mayamridanga-by-Syed-Mustafa-Siraj.jpg?ssl=1', 
    readLink: 'https://drive.google.com/file/d/1TeahpWVgDRReC15TUs4JtxX5UIm4MvnX/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1TeahpWVgDRReC15TUs4JtxX5UIm4MvnX', 
    description: 'মানুষের জীবনবোধ ও সংগ্রামের এক অসাধারণ আখ্যান।' 
  },
  { 
    id: '34', 
    title: 'কাকাবাবু সমগ্র - খণ্ড ১', 
    author: 'সুনীল গঙ্গোপাধ্যায়', 
    category: 'থ্রিলার', 
    coverImage: 'https://images-eu.ssl-images-amazon.com/images/I/810bKngH5JL._AC_UL210_SR210,210_.jpg', 
    readLink: 'https://drive.google.com/file/d/1heCRQYC2beM0n6u9M9u6pmiNkX2BjJGG/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1heCRQYC2beM0n6u9M9u6pmiNkX2BjJGG', 
    description: 'রাজা রায়চৌধুরী ওরফে কাকাবাবুর রোমাঞ্চকর অভিযানের প্রথম খণ্ড।' 
  },
  { 
    id: '35', 
    title: 'কাকাবাবু সমগ্র - খণ্ড ২', 
    author: 'সুনীল গঙ্গোপাধ্যায়', 
    category: 'থ্রিলার', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0u9XaflQGAIlyD9hKPEqxqL8C1pf6qLErnQ&s', 
    readLink: 'https://drive.google.com/file/d/14WvQQa3qOMTg3j15VyrWqotCFKMVsvK3/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=14WvQQa3qOMTg3j15VyrWqotCFKMVsvK3', 
    description: 'কাকাবাবু ও সন্তুর রহস্যময় অ্যাডভেঞ্চারের দ্বিতীয় খণ্ড।' 
  },
  { 
    id: '36', 
    title: 'কাকাবাবু সমগ্র - খণ্ড ৩', 
    author: 'সুনীল গঙ্গোপাধ্যায়', 
    category: 'থ্রিলার', 
    coverImage: 'https://www.boiwalaexpress.in/wp-content/uploads/2023/03/13-10-1.webp', 
    readLink: 'https://drive.google.com/file/d/1EBCT-HYczEYqqZWYP8_PtCCU-Sa4OscY/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1EBCT-HYczEYqqZWYP8_PtCCU-Sa4OscY', 
    description: 'দেশ-বিদেশের নানা রহস্য ভেদের গল্প নিয়ে তৃতীয় খণ্ড।' 
  },
  { 
    id: '37', 
    title: 'কাকাবাবু সমগ্র - খণ্ড ৪', 
    author: 'সুনীল গঙ্গোপাধ্যায়', 
    category: 'থ্রিলার', 
    coverImage: 'https://pbs.com.bd/_next/image?url=https%3A%2F%2Ffs.pbs.com.bd%2FDIR%2FCom%2FPBS%2FProduct%2FImageDetails%2F1816264.jpg&w=640&q=75', 
    readLink: 'https://drive.google.com/file/d/1oxciiwK9BVK_ZbWhYkNa5GTPslR1rVr1/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1oxciiwK9BVK_ZbWhYkNa5GTPslR1rVr1', 
    description: 'সুনীল গঙ্গোপাধ্যায়ের কালজয়ী কিশোর গোয়েন্দা সিরিজের চতুর্থ খণ্ড।' 
  },
  { 
    id: '38', 
    title: 'কাকাবাবু সমগ্র - খণ্ড ৫', 
    author: 'সুনীল গঙ্গোপাধ্যায়', 
    category: 'থ্রিলার', 
    coverImage: 'https://www.amarbooks.org/thumbs/1466761776.jpg', 
    readLink: 'https://drive.google.com/file/d/10lswkzEwmCZtyQG0IwM_UC5HXGFPXo98/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=10lswkzEwmCZtyQG0IwM_UC5HXGFPXo98', 
    description: 'কাকাবাবুর শ্বাসরুদ্ধকর সব অ্যাডভেঞ্চারের পঞ্চম খণ্ড।' 
  },
  { 
    id: '39', 
    title: 'কাকাবাবু সমগ্র - খণ্ড ৬', 
    author: 'সুনীল গঙ্গোপাধ্যায়', 
    category: 'থ্রিলার', 
    coverImage: 'https://www.amarbooks.org/thumbs/1466761802.jpg', 
    readLink: 'https://drive.google.com/file/d/1o5nQ-lqazdSFMwBRXikOAIxvEXjHAnja/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1o5nQ-lqazdSFMwBRXikOAIxvEXjHAnja', 
    description: 'কাকাবাবু সিরিজের ষষ্ঠ খণ্ড - নতুন সব রহস্যের সমাধান।' 
  },
  { 
    id: '40', 
    title: 'কাকাবাবু সমগ্র - খণ্ড ৭', 
    author: 'সুনীল গঙ্গোপাধ্যায়', 
    category: 'থ্রিলার', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowNgX7qbs0NDomigb89IwTrhIv4GBpUH16A&s', 
    readLink: 'https://drive.google.com/file/d/1DBb3GmYOav0B4LZD0Kv0h-8CeXNFpzEL/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1DBb3GmYOav0B4LZD0Kv0h-8CeXNFpzEL', 
    description: 'কাকাবাবু ও সন্তুর রহস্য সমাধানের রোমাঞ্চকর সপ্তম খণ্ড।' 
  },
  { 
    id: '41', 
    title: 'নন্দিত নরকে', 
    author: 'হুমায়ূন আহমেদ', 
    category: 'উপন্যাস', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1XhxskO0u01KIkx3nZ6ySP-bRzi_giBHQA&s', 
    readLink: 'https://drive.google.com/file/d/1Ua_LnvYsWYH1F8YbJqMAS1huD6Hikw48/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1Ua_LnvYsWYH1F8YbJqMAS1huD6Hikw48', 
    description: 'হুমায়ূন আহমেদের প্রথম এবং কালজয়ী একটি সামাজিক উপন্যাস।' 
  },
  { 
    id: '42', 
    title: 'মতিবিবির দরগা', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'উপন্যাস', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqI7mxnRdbgi3_TJbiDTEN5HeFmPoA6BG9Q&s', 
    readLink: 'https://drive.google.com/file/d/1mliHSYf05XJuV3UEqSiILSHIO8-Db8M4/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1mliHSYf05XJuV3UEqSiILSHIO8-Db8M4', 
    description: 'গ্রামীণ পটভূমিতে লেখা সৈয়দ মুস্তাফা সিরাজের এক অনবদ্য সৃষ্টি।' 
  },
  { 
    id: '43', 
    title: 'কিশোর সাহিত্য', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'সাহিত্য', 
    coverImage: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1695771378i/142300625.jpg', 
    readLink: 'https://drive.google.com/file/d/1PGCrq0b8p7eryJwOgkFd0OLJgtnxDSPv/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1PGCrq0b8p7eryJwOgkFd0OLJgtnxDSPv', 
    description: 'কিশোরদের উপযোগী নানা স্বাদের গল্পের সংকলন।' 
  },
  { 
    id: '44', 
    title: 'কিশোর রোমাঞ্চ অমনিবাস', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://rokbucket.rokomari.io/ProductNew20190903/260X372/Kishor_Romance_Amanibas-Syed_Mustafa_Siraj-1c3fc-122345.jpg', 
    readLink: 'https://drive.google.com/file/d/1EOu1Ofu73mnUCmpaL5h47_WrxZNdwytA/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1EOu1Ofu73mnUCmpaL5h47_WrxZNdwytA', 
    description: 'কিশোর পাঠকদের জন্য রহস্য ও রোমাঞ্চকর গল্পের বিশাল ভাণ্ডার।' 
  },
  { 
    id: '45', 
    title: 'কঙ্কগড়ের কঙ্কাল', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'ভৌতিক', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet1WGQ43BrQJRmroGlWs4bw2i55IAwxOH0w&s', 
    readLink: 'https://drive.google.com/file/d/1GW3x81IQvOUyBH1QKGl7kv_HDuRbsSav/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1GW3x81IQvOUyBH1QKGl7kv_HDuRbsSav', 
    description: 'রহস্যময় কঙ্কালকে ঘিরে এক হাড়হিম করা ভৌতিক কাহিনী।' 
  },
  { 
    id: '46', 
    title: 'কামনার সুখ দুঃখ', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'উপন্যাস', 
    coverImage: 'https://www.amarbooks.org/thumbs/1491705032.jpg', 
    readLink: 'https://drive.google.com/file/d/1qXmJumbNE2Yt-4isPDdXZHKQV7jcCZNj/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1qXmJumbNE2Yt-4isPDdXZHKQV7jcCZNj', 
    description: 'মানুষের জীবনের জটিল আবেগ ও সম্পর্কের গল্প।' 
  },
  { 
    id: '47', 
    title: 'কবরের অন্ধকারে', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'ভৌতিক', 
    coverImage: 'https://allbanglaboi.com/wp-content/uploads/2017/08/3d6f3-koborerondhokare.jpg', 
    readLink: 'https://drive.google.com/file/d/1JwXZorqRROReBChSz_1DHNgVIz5QsT_C/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1JwXZorqRROReBChSz_1DHNgVIz5QsT_C', 
    description: 'গা ছমছমে পরিবেশে কবরের রহস্যময় জগত নিয়ে লেখা।' 
  },
  { 
    id: '48', 
    title: 'জনপদ জনপথ', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'সাহিত্য', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShIKRafbvHSbXZdDsDTbCAZzKtUoBMssbjw&s', 
    readLink: 'https://drive.google.com/file/d/16qVwx_gnvO2d_9Id-3SrvPXDCXpOnemQ/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=16qVwx_gnvO2d_9Id-3SrvPXDCXpOnemQ', 
    description: 'সৈয়দ মুস্তাফা সিরাজের এক অসাধারণ জীবনধর্মী সাহিত্য।' 
  },
  { 
    id: '49', 
    title: 'ইন্সপেক্টর ব্রহ্মর ৭ তদন্ত', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://imgv2-2-f.scribdassets.com/img/document/703143352/original/d10e2ee871/1?v=1', 
    readLink: 'https://drive.google.com/file/d/1o692sOnljwFOCcWqHUhzBuGgZZVUYWyF/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1o692sOnljwFOCcWqHUhzBuGgZZVUYWyF', 
    description: 'ইন্সপেক্টর ব্রহ্মর গোয়েন্দা তদন্তের সাতটি রহস্য রোমাঞ্চ গল্প।' 
  },
  { 
    id: '50', 
    title: 'ইন্সপেক্টর ব্রহ্মা', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://www.versoz.com/cdn/shop/files/XMCOU0IZVBY6_Cover_1_384x.jpg?v=1727980254', 
    readLink: 'https://drive.google.com/file/d/1VIwK5TqQJfk703w_2eWnFN8LPYuHlUt9/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1VIwK5TqQJfk703w_2eWnFN8LPYuHlUt9', 
    description: 'ইন্সপেক্টর ব্রহ্মার রহস্যভেদের আরও এক অনবদ্য সংকলন।' 
  },
  { 
    id: '51', 
    title: 'হরির হোটেল', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'সাহিত্য', 
    coverImage: 'https://shadhinmusic.com/_next/image?url=https%3A%2F%2Fshadhinmusiccontent.sgp1.cdn.digitaloceanspaces.com%2FAudioBook%2FCoverImage%2FHorirHotel_450.jpg&w=1080&q=100', 
    readLink: 'https://drive.google.com/file/d/1AG9QTCS6oiuUQMqs2Z_96SeKL_029SCH/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1AG9QTCS6oiuUQMqs2Z_96SeKL_029SCH', 
    description: 'সৈয়দ মুস্তাফা সিরাজের এক জনপ্রিয় জীবনমুখী রচনা।' 
  },
  { 
    id: '52', 
    title: 'হিজলকন্যা', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'উপন্যাস', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7MTN69S6_oPQ0fatIbWrLXEgvVFUxI9R6Q&s', 
    readLink: 'https://drive.google.com/file/d/1nTVJvuDoWXYBkrFcYcqS06MQYjSJsmW2/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1nTVJvuDoWXYBkrFcYcqS06MQYjSJsmW2', 
    description: 'প্রকৃতি ও মানুষের সম্পর্কের মায়াবী গল্প নিয়ে এই উপন্যাস।' 
  },
  { 
    id: '53', 
    title: 'হেমন্তের বর্ণমালা', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'উপন্যাস', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9AjXviHv10mRX4JOju7hosI_MmDG1Vlk3jw&s', 
    readLink: 'https://drive.google.com/file/d/1l1xRjOafWXnQ93a309qLoBoJzU4y9tmX/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1l1xRjOafWXnQ93a309qLoBoJzU4y9tmX', 
    description: 'অপূর্ব এক জীবনগাথা যা হেমন্তের মতো মায়াময়।' 
  },
  { 
    id: '54', 
    title: 'হাওয়া সাপ', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBEtqo6vM4Yd2udRT3AKNfgecQ2uwLl9J8A&s', 
    readLink: 'https://drive.google.com/file/d/1EnCzqUd5Uflwm_tqVmnmx-4IpzXB2tFF/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1EnCzqUd5Uflwm_tqVmnmx-4IpzXB2tFF', 
    description: 'সৈয়দ মুস্তাফা সিরাজের এক দারুণ রহস্য রোমাঞ্চকর বই।' 
  },
  { 
    id: '55', 
    title: 'হানিমুন লজ', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh5foMyeL0_WL3xoQAUBSHxhe2qKjJZDV5GA&s', 
    readLink: 'https://drive.google.com/file/d/1PkLyv0YGVKxHj896jt6v8qAW3yfm6foz/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1PkLyv0YGVKxHj896jt6v8qAW3yfm6foz', 
    description: 'একটি লজকে কেন্দ্র করে ঘনীভূত হওয়া রহস্যের গল্প।' 
  },
  { 
    id: '56', 
    title: 'গল্পমালা ৩', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'সাহিত্য', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRECWZNlMQqR7_V7fpBkQBs2L-IyWY8aoM2w&s', 
    readLink: 'https://drive.google.com/file/d/1NqSbaGX01LjbHURFIkiIobJ1lSvkoRym/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1NqSbaGX01LjbHURFIkiIobJ1lSvkoRym', 
    description: 'সিরাজের ছোটগল্পের অমূল্য একটি সংকলন।' 
  },
  { 
    id: '57', 
    title: 'ঘটনা যখন রহস্যজনক', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlr7RQTEOwgIjfxwOAE1q4BGuDbEBYw86wEg&s', 
    readLink: 'https://drive.google.com/file/d/1zIjH6O_jpWAfx4TCpQvhkcozV6KT8e72/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1zIjH6O_jpWAfx4TCpQvhkcozV6KT8e72', 
    description: 'রহস্যপ্রেমীদের জন্য দারুণ কিছু গল্পের ডালি।' 
  },
  { 
    id: '58', 
    title: 'গল্প সমগ্র ২', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'সাহিত্য', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvSfGn8ZsP-wHp4Go53kD3wVqOlB6KLAedw&s', 
    readLink: 'https://drive.google.com/file/d/1DG_xQcxelt1ElW0SL2LvWc2dYXcEFe-3/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1DG_xQcxelt1ElW0SL2LvWc2dYXcEFe-3', 
    description: 'বিখ্যাত সব ছোটগল্প নিয়ে দ্বিতীয় খণ্ড।' 
  },
  { 
    id: '59', 
    title: 'ব্যোমকেশ সমগ্র', 
    author: 'শরদিন্দু বন্দ্যোপাধ্যায়', 
    category: 'থ্রিলার', 
    coverImage: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1312084365i/2426848.jpg', 
    readLink: 'https://drive.google.com/file/d/1hSq3TcEpD07Z6rx1zIm_qAPzLfcHWIeN/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1hSq3TcEpD07Z6rx1zIm_qAPzLfcHWIeN', 
    description: 'সত্যান্বেষী ব্যোমকেশ বক্সীর সকল রহস্যের পূর্ণাঙ্গ সংকলন।' 
  },
  { 
    id: '60', 
    title: 'বনের আসর', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRKJkHMzFkvKtqxjP-NtXrEFrdJG6ifU0NQ&s', 
    readLink: 'https://drive.google.com/file/d/11LcEExsE0Kh1eC8Mm3kD1YJ2zfwzvd1I/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=11LcEExsE0Kh1eC8Mm3kD1YJ2zfwzvd1I', 
    description: 'সিরাজের বন্য ও রোমাঞ্চকর কাহিনী নিয়ে এক ভিন্ন স্বাদের বই।' 
  },
  { 
    id: '61', 
    title: 'বিষাক্ত সুন্দর ফুল', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'থ্রিলার', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0URaKsAlNytSkgkxeVjYaytqpdtTZlTr4Fw&s', 
    readLink: 'https://drive.google.com/file/d/1AHMvtNeDpQCeSsFx5Ohtc6lIlPo29oXb/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1AHMvtNeDpQCeSsFx5Ohtc6lIlPo29oXb', 
    description: 'সুন্দরের আড়ালে থাকা বিষাক্ত রহস্যের তদন্ত।' 
  },
  { 
    id: '62', 
    title: 'বিশাখা তোমার নামে', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'উপন্যাস', 
    coverImage: 'https://www.amarbooks.org/thumbs/1491463940.jpg', 
    readLink: 'https://drive.google.com/file/d/1SyJrR51SfzVvZQscy8pJhMFJLwLhHhRE/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1SyJrR51SfzVvZQscy8pJhMFJLwLhHhRE', 
    description: 'এক অপূর্ব মানবিক বোধের উপন্যাস।' 
  },
  { 
    id: '63', 
    title: 'ভৌতিক গল্প সমগ্র', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'ভৌতিক', 
    coverImage: 'https://pbs.com.bd/_next/image?url=https%3A%2F%2Ffs.pbs.com.bd%2FDIR%2FCom%2FPBS%2FProduct%2FImageDetails%2F2403713.jpg&w=640&q=75', 
    readLink: 'https://drive.google.com/file/d/1UPtsOav0n9QdBuNpoGD38_12zRcMg7Q5/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1UPtsOav0n9QdBuNpoGD38_12zRcMg7Q5', 
    description: 'সিরাজের গা ছমছমে সব ভৌতিক কাহিনীর সেরা সংকলন।' 
  },
  { 
    id: '64', 
    title: 'বেদবতী', 
    author: 'সৈয়দ মুস্তাফা সিরাজ', 
    category: 'উপন্যাস', 
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0epgFdinH4EeqE_hS6YmMlaa6tiq7pCSXw&s', 
    readLink: 'https://drive.google.com/file/d/1xNxZjpEwwEaEEaAIyQ0AtljgPCq53HKp/view?usp=sharing', 
    downloadLink: 'https://drive.google.com/uc?export=download&id=1xNxZjpEwwEaEEaAIyQ0AtljgPCq53HKp', 
    description: 'ঐতিহাসিক ও সামাজিক প্রেক্ষাপটে লেখা একটি জীবনমুখী উপন্যাস।' 
  },

  
];

window.BOOKS_DATA = BOOKS_DATA;
