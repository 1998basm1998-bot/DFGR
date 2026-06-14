import React, { useState } from 'react';
import { Search, Plus, Home, BookOpen, User, Play, MoreVertical, Compass, Bell, X, UploadCloud, Info } from 'lucide-react';

const SUBJECTS = ["الكل", "رياضيات", "فيزياء", "كيمياء", "أحياء", "لغات", "تاريخ", "جغرافيا", "برمجة"];

const VIDEOS = [
  { id: 1, title: "شرح تفاضل وتكامل متقدم بالخطوات من البداية", subject: "رياضيات", duration: "12:45", views: "1.2K", time: "قبل يومين", gradient: "from-blue-500 to-cyan-400", thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80", author: "أستاذ أحمد", avatar: "أ" },
  { id: 2, title: "قوانين نيوتن للحركة وتطبيقاتها العملية في الحياة", subject: "فيزياء", duration: "08:20", views: "850", time: "قبل 5 ساعات", gradient: "from-purple-600 to-indigo-500", thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&q=80", author: "م. محمود", avatar: "م" },
  { id: 3, title: "أساسيات الكيمياء العضوية - الدرس الأول الشامل", subject: "كيمياء", duration: "25:10", views: "3.4K", time: "قبل أسبوع", gradient: "from-emerald-500 to-teal-400", thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80", author: "د. سارة", avatar: "س" },
  { id: 4, title: "مقدمة في علم الجينات والوراثة البشرية", subject: "أحياء", duration: "15:00", views: "420", time: "قبل يوم", gradient: "from-rose-500 to-pink-500", thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313ce?w=800&q=80", author: "د. علي", avatar: "ع" },
  { id: 5, title: "تعلم الإنجليزية للمبتدئين - كورس المحادثة", subject: "لغات", duration: "10:30", views: "5.1K", time: "قبل 3 أيام", gradient: "from-amber-500 to-orange-400", thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80", author: "Mr. John", avatar: "J" },
  { id: 6, title: "الحرب العالمية الثانية - وثائقي تاريخي ملخص", subject: "تاريخ", duration: "45:00", views: "2.8K", time: "قبل شهر", gradient: "from-slate-600 to-stone-500", thumbnail: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&q=80", author: "أ. خالد", avatar: "خ" },
];

export default function App() {
  const [activeSubject, setActiveSubject] = useState("الكل");
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

  const filteredVideos = activeSubject === "الكل" 
    ? VIDEOS 
    : VIDEOS.filter(v => v.subject === activeSubject);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans pb-24 md:pb-8 selection:bg-indigo-100 selection:text-indigo-900" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4 md:px-8 py-3">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-2 rounded-xl shadow-lg shadow-indigo-200">
                <Play className="fill-white text-white" size={20} />
              </div>
              <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">
                إدراك <span className="text-indigo-600 font-light">فيديو</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all">
                <Search size={22} />
              </button>
              <button className="hidden sm:block p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all">
                <Bell size={22} />
              </button>
              <div className="w-px h-6 bg-slate-200 hidden sm:block mx-1"></div>
              <button 
                onClick={() => setIsPublishModalOpen(true)}
                className="hidden sm:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Plus size={18} />
                <span>فيديو جديد</span>
              </button>
              {/* Mobile Profile Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 border-2 border-white shadow-sm text-indigo-700 flex sm:hidden items-center justify-center font-bold text-lg">
                ح
              </div>
            </div>
          </div>

          {/* Subjects Scrollable Bar */}
          <div className="flex overflow-x-auto hide-scrollbar px-4 md:px-8 py-3 gap-2.5">
            {SUBJECTS.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubject(sub)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeSubject === sub 
                  ? "bg-slate-900 text-white shadow-md shadow-slate-300 scale-105" 
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Feed */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Compass className="text-indigo-500" size={24} />
            الاستكشاف
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredVideos.map((video) => (
            <div key={video.id} onClick={() => setSelectedVideo(video)} className="group bg-white rounded-[24px] overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100/80 flex flex-col hover:-translate-y-1 cursor-pointer">
              {/* Thumbnail Container */}
              <div className="w-full aspect-video bg-slate-200 relative overflow-hidden">
                
                {/* Background Image */}
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                
                {/* Bottom Gradient overlay for text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                {/* Decoration shapes */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 mix-blend-overlay pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/30 rounded-full blur-xl -ml-10 -mb-10 pointer-events-none"></div>

                {/* Hover Play Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-slate-900/20 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                   <span className="bg-white/30 backdrop-blur-md p-4 rounded-full text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play fill="currentColor" size={24} className="ml-1" />
                   </span>
                </div>
                
                {/* Duration Badge */}
                <span className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg font-mono font-medium tracking-wide border border-white/10">
                  {video.duration}
                </span>
                
                {/* Subject Badge */}
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-slate-800 text-xs px-3 py-1 rounded-full font-bold shadow-sm">
                  {video.subject}
                </span>
              </div>

              {/* Video Info */}
              <div className="p-5 flex gap-4">
                <div className={`w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold bg-gradient-to-br ${video.gradient} shadow-inner`}>
                  {video.avatar}
                </div>
                <div className="flex-grow pt-0.5">
                  <h3 className="font-bold text-base text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2 mb-2">
                    {video.title}
                  </h3>
                  <div className="text-sm text-slate-600 mb-1.5 font-medium">
                    {video.author}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                    <span>{video.views} مشاهدة</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{video.time}</span>
                  </div>
                </div>
                <button className="text-slate-300 hover:text-slate-600 flex-shrink-0 self-start p-1.5 -mr-2 transition-colors rounded-full hover:bg-slate-50">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {filteredVideos.length === 0 && (
            <div className="col-span-full py-24 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-100 mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-indigo-100 blur-xl opacity-50"></div>
                <Play className="text-slate-300 relative z-10" size={40} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">لا توجد فيديوهات</h2>
              <p className="text-slate-500 text-lg">لم يتم نشر فيديوهات في قسم "{activeSubject}" بعد.</p>
              <button 
                onClick={() => setActiveSubject("الكل")}
                className="mt-6 text-indigo-600 font-bold hover:text-indigo-700 transition"
              >
                العودة للكل
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Mobile Bottom Navigation (Glassmorphic) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-slate-200/60 flex justify-around items-center py-2 px-2 z-50 pb-safe">
        <button className="flex flex-col items-center p-2 text-slate-900 w-16 group">
          <div className="bg-indigo-100 p-1.5 rounded-xl group-hover:bg-indigo-200 transition-colors">
            <Home size={22} className="text-indigo-600" />
          </div>
          <span className="text-[10px] sm:text-xs mt-1.5 font-bold text-indigo-600">الرئيسية</span>
        </button>
        <button className="flex flex-col items-center p-2 text-slate-500 hover:text-slate-800 transition w-16 group">
          <div className="p-1.5 rounded-xl group-hover:bg-slate-100 transition-colors">
             <BookOpen size={22} />
          </div>
          <span className="text-[10px] sm:text-xs mt-1.5 font-medium">المواد</span>
        </button>
        
        {/* Mobile Publish FAB */}
        <button 
          onClick={() => setIsPublishModalOpen(true)}
          className="flex flex-col items-center justify-center p-2 w-16 -mt-10 relative group"
        >
          <div className="absolute inset-0 bg-indigo-600 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="bg-gradient-to-tr from-indigo-600 to-violet-600 text-white p-4 rounded-full shadow-lg shadow-indigo-200 hover:shadow-xl group-hover:-translate-y-1 transform transition-all relative z-10">
            <Plus size={24} />
          </div>
        </button>
        
        <button className="flex flex-col items-center p-2 text-slate-500 hover:text-slate-800 transition w-16 group">
          <div className="p-1.5 rounded-xl group-hover:bg-slate-100 transition-colors">
             <Play size={22} />
          </div>
          <span className="text-[10px] sm:text-xs mt-1.5 font-medium">مكتبتي</span>
        </button>
        <button className="flex flex-col items-center p-2 text-slate-500 hover:text-slate-800 transition w-16 group">
          <div className="p-1.5 rounded-xl group-hover:bg-slate-100 transition-colors">
             <User size={22} />
          </div>
          <span className="text-[10px] sm:text-xs mt-1.5 font-medium">حسابي</span>
        </button>
      </nav>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 md:p-8">
          <div className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col max-h-full">
            <div className="flex justify-between items-center p-4 border-b border-slate-100">
              <h3 className="font-bold text-lg text-slate-800 line-clamp-1">{selectedVideo.title}</h3>
              <button onClick={() => setSelectedVideo(null)} className="p-2 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            
            {/* Video Player Container */}
            <div className="w-full aspect-video bg-slate-900 relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-3 p-6 text-center bg-gradient-to-br from-slate-900 to-slate-800">
                 <div className="w-16 h-16 rounded-full bg-[#FF6B00]/20 flex items-center justify-center backdrop-blur-md mb-2 shadow-xl border border-[#FF6B00]/50">
                   <Play size={32} className="text-[#FF6B00] ml-2" fill="currentColor" />
                 </div>
                 <p className="text-white font-bold text-xl">مشغل فيديو Bunny.net</p>
                 <p className="text-slate-400 text-sm max-w-md">
                   هنا سيظهر الفيديو الخاص بك المحمي والمستضاف على Bunny Stream.
                   <br/>
                   <span className="text-emerald-400 font-medium mt-3 inline-flex items-center gap-1 bg-emerald-400/10 px-3 py-1 rounded-full text-xs">
                     ✓ حماية ضد التحميل • سرعة فائقة • تكلفة منخفضة
                   </span>
                 </p>
                 {/* 
                  هذا الكود الفعلي الذي سيوضع لاحقاً عندما تقوم بإضافة الفيديوهات من Bunny:
                  <iframe 
                    src="https://iframe.mediadelivery.net/embed/{LIBRARY_ID}/{VIDEO_ID}?autoplay=true" 
                    loading="lazy" 
                    style={{ border: 0, position: 'absolute', top: 0, height: '100%', width: '100%' }} 
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" 
                    allowFullScreen={true}>
                  </iframe> 
                 */}
              </div>
            </div>

            {/* Video Details */}
            <div className="p-6 overflow-y-auto bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br ${selectedVideo.gradient} shadow-inner text-xl`}>
                  {selectedVideo.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{selectedVideo.author}</h4>
                  <div className="text-slate-500 text-sm font-medium mt-1 flex items-center gap-2 flex-wrap">
                    <span className="bg-slate-100 px-2 py-0.5 rounded-md text-slate-600">{selectedVideo.subject}</span>
                    <span>•</span>
                    <span>{selectedVideo.views} مشاهدة</span>
                    <span>•</span>
                    <span>{selectedVideo.time}</span>
                  </div>
                </div>
              </div>
              <div className="prose prose-slate prose-sm rtl:prose-p:text-right max-w-none">
                <div className="bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-2xl p-5 mb-4 text-right">
                  <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3 text-lg">
                    <span className="bg-white p-1.5 rounded-lg text-[#FF6B00] shadow-sm">🐇</span>
                    تم اختيار الخيار الأفضل: ربط Bunny.net
                  </h4>
                  <p className="text-slate-700 leading-relaxed font-medium mb-3">
                    بما أن لديك حساب <strong>Bunny.net</strong> وبه رصيد 10$، فقد حللت مشكلة استضافة الفيديوهات باحترافية عالية جداً!
                    خدمة <span className="font-bold text-[#FF6B00]">Bunny Stream</span> مخصصة للمنصات التعليمية وتقدم لك:
                  </p>
                  <ul className="space-y-3 mt-4 text-slate-700 font-medium">
                    <li className="flex items-start gap-2">
                       <span className="text-emerald-500 font-bold mt-1">✓</span>
                       <span><strong>حماية قوية (DRM):</strong> يمنع الطلاب من تحميل الفيديوهات باستخدام برامج التحميل (مثل IDM).</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <span className="text-emerald-500 font-bold mt-1">✓</span>
                       <span><strong>تحمل أي عدد من الطلاب:</strong> حتى لو كان هناك 10,000 طالب يشاهدون الفيديو في نفس اللحظة، لن يتوقف الفيديو.</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <span className="text-emerald-500 font-bold mt-1">✓</span>
                       <span><strong>تشغيل سريع بدون تقطيع:</strong> الفيديو يتم توزيعه على سيرفرات سريعة جداً.</span>
                    </li>
                  </ul>
                  
                  <div className="mt-5 p-4 bg-white rounded-xl border border-slate-200">
                    <h5 className="font-bold text-slate-800 mb-2">كيف سيتم الربط برمجياً؟</h5>
                    <p className="text-slate-600 text-sm">
                      عندما تقوم برفع الفيديو في منصة Bunny.net، سيعطيك الموقع <strong>Video ID</strong>. كل ما ستحتاج فعله في لوحة تحكم هذا الموقع (التي سنبرمجها لاحقاً) هو لصق الـ Video ID، والموقع سيقوم بتوليد المشغل كالمعروض في الأعلى بشكل أوتوماتيكي ومحمي.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Publish Modal (Admin Dashboard Logic) */}
      {isPublishModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-sm p-0 sm:p-4 transition-all">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-lg shadow-2xl flex flex-col animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-4">
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
                <UploadCloud className="text-indigo-600" />
                إضافة فيديو جديد
              </h3>
              <button onClick={() => setIsPublishModalOpen(false)} className="p-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[80vh]">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">عنوان الفيديو</label>
                  <input type="text" placeholder="مثال: مقدمة في المعادلات التفاضلية" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50 transition-all font-medium" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">المادة الدراسية</label>
                  <select className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 font-medium">
                    {SUBJECTS.filter(s => s !== 'الكل').map(sub => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>

                <div className="bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-full bg-[#FF6B00]"></div>
                  <label className="block text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="text-[#FF6B00]">🐇</span> Bunny.net Video ID
                  </label>
                  <p className="text-xs text-slate-600 mb-3 flex items-start gap-1.5">
                    <Info size={14} className="mt-0.5 text-slate-400 flex-shrink-0" />
                    قم بالدخول إلى حسابك في Bunny.net وتحديداً إلى Stream Library، ثم انسخ الـ Video ID وألصقه هنا.
                  </p>
                  <input 
                    type="text" 
                    placeholder="مثال: a1b2c3d4-e5f6-7890-abcd-1234567890ab" 
                    className="w-full border border-[#FF6B00]/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] font-mono text-sm shadow-sm"
                  />
                  <div className="mt-3 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Library ID: <span className="font-mono bg-white px-2 py-1 rounded shadow-sm border border-slate-200">123456</span></span>
                    <a href="https://dash.bunny.net/stream" target="_blank" rel="noreferrer" className="text-[#FF6B00] hover:underline">افتح Bunny.net &larr;</a>
                  </div>
                </div>

                <div className="pt-2">
                  <button onClick={() => {
                    alert("سيتم إضافة هذا الزر لاحقاً ببرمجة قاعدة البيانات (Backend). الواجهة جاهزة!");
                    setIsPublishModalOpen(false);
                  }} className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 flex items-center justify-center gap-2">
                    <Plus size={20} />
                    نشر ومشاركة الفيديو
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-3">
                    المشغل سيقوم بالحماية التلقائية (DRM) لمنع التحميل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

