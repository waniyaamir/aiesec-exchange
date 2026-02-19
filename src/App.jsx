import React, { useState, useEffect } from 'react';
import { 
  Play, 
  ChevronRight, 
  Quote, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Camera, 
  MessageCircle,
  Clock,
  Globe,
  Star,
  X,
  User
} from 'lucide-react';

// --- CONFIGURATION / CONTENT DATA ---
const HERO_VIDEO_URL = "/assets/videos/hero.mp4"; // Replace with your recap video

const RECAP_VIDEOS = [
  {
    id: 1,
    title: "The Arrival Vibe",
        thumb: "/assets/recap/thumb1.jpg",
        url: "/assets/recap/IMG_4039.mp4"
  },
  {
    id: 2,
    title: "Cultural Immersion",
        thumb: "/assets/recap/thumb2.jpg",
      url: "/assets/recap/IMG_1687.mp4"
  },
  {
    id: 3,
    title: "The Global Network",
      thumb: "/assets/recap/thumb3.jpg",
      url: "/assets/recap/IMG_1683.mp4"
  }
];

const GALLERY_IMAGES = [
  "/assets/images/image2.jpg",
  "/assets/images/image3.jpg",
  "/assets/images/image4.jpg",
    "/assets/images/image1.jpg",

];

const VIDEO_TESTIMONIALS = [
   
       
    {
        id: 1,
        name: "Daniyal Rehman",
        country: "Indonesia",
        color: "#FF0000",
        thumb: "/assets/testimonials/dan.jpg",
        video: "/assets/testimonials/daniyal.mp4"
    },

    {
        id: 2,
        name: "Momina Hanifa",
        country: "Indonesia",
        color: "#E30A17",
        thumb: "/assets/testimonials/momina.jpg",
        video: "/assets/testimonials/momt.mp4"
    },

    {
        id: 3,
        name: "Rayyan Ul Haq",
        country: "Indonesia",
        color: "#2D2A4A",
        thumb: "/assets/testimonials/ray.jpg",
        video: "/assets/testimonials/Rayyan.mp4"
    }
];


const WRITTEN_TESTIMONIALS = [
  {
    id: 1,
    name: "Sabih Kamal",
    country: "Turkey",
    type: "Global Volunteer",
        text: "The exchange program was an incredible experience that gave me a global perspective, helped me grow personally, and allowed me to connect with amazing people from around the world. It was a life changing experience that enhanced my global perspective and cross cultural understanding. I highly recommend it to anyone seeking a life changing experience.",
        img: "/assets/testimonials/sabih.jpg",
    color: "#E30A17"
    },

    {
        id: 2,
        name: "Momina Hanifa",
        country: "Indonesia",
        type: "Rooted",
        text: "My exchange experience with AIESEC in Jakarta was truly special. Being part of the Rooted 2025 project allowed me to work closely with local communities, teach students about sustainability, and take part in activities like beach cleanups, mangrove planting, and turtle conservation. Along the way, I met people from different cultures, grew as a leader, and gained a deeper appreciation for how small actions can create real impact.",
        img: "/assets/testimonials/momina.jpg",
        color: "#C09300"
    },

  {
    id: 3,
    name: "Abdul Sami",
    country: "Egypt",
    type: "On the map",
      text: "Last year I had a chance to visit Egypt through AIESEC. Traveling to a completely unknown place without family gave me an entirely new perspective of travelling. Meeting people from different countries gave me perspectives beyond political boundaries. With strong support from AIESEC, the exchange became a deeply transformative journey filled with learning, friendships, and unforgettable memories that continue to shape me today.",
      img: "/assets/testimonials/sami.jpg",
    color: "#FF0000"
  },
  {
    id: 4,
    name: "Adnan Jamil",
    country: "Egypt",
      type: "On the map",
      text: "It was my first international trip, and I felt quite uneasy at first, but it became one of the most life-changing experiences of my life. I enjoyed the best time of my life there. Now I miss those days and those friends. I will go again on exchange if I ever get a chance. The exchange strengthened my confidence and adaptability, while pushing me out of my comfort zone and helping me grow both personally and professionally.",
      img: "/assets/testimonials/adnan.jpg",
    color: "#2D2A4A"
  },
  
];

const ONE_LINERS = [
    { text: "I will go again on exchange if I ever get a chance.", color: "text-blue-400", ml: "md:ml-0" },
    { text: "I miss it everyday.", color: "text-red-400", ml: "md:ml-24" },
    { text: "I love you all pls send me to egypt next summer <3", color: "text-yellow-400", ml: "md:ml-48" }
];

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalMedia, setModalMedia] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-blue-100">
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                      <img
                          src="/assets/images/logo.png"
                          alt="AIESEC Logo"
                          className="h-10 w-auto"
                      />
                      <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                          AIESEC IBA
                      </span>
                  </div>


          <div className="hidden md:flex items-center gap-8">
            <a href="#experiences" className={`font-medium hover:text-[#037EF3] transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}>Experiences</a>
                      <a
                          href="https://forms.gle/chE8UBMpCWvPJojr8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#037EF3] text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-blue-200 hover:scale-105 transition-transform active:scale-95"
                      >
                          Apply Now
                      </a>

          </div>
        </div>
      </nav>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-white"></div>
        
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        <div className="relative z-20 container mx-auto px-6 text-center text-white">
          <span className="inline-block bg-[#037EF3] text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6 animate-bounce">
            Limited Summer Spots Open
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-tight">
            Don't Graduate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 underline decoration-white/20">With Regret.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Four years pass in a blink. Will you remember the exams, or the time you found yourself halfway across the world?
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                      <a
                          href="https://forms.gle/chE8UBMpCWvPJojr8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full md:w-auto bg-[#037EF3] text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group"
                      >
                          Start My Journey
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </a>

            <button className="w-full md:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full text-xl font-bold hover:bg-white/20 transition-all">
              See Real Stories
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-pulse">
          <div className="w-1 h-12 rounded-full bg-slate-400/50 flex justify-center">
            <div className="w-1 h-4 bg-white rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </section>

      {/* --- 2. EXCHANGE RECAP SECTION (3 VIDEOS) --- */}
      <section id="experiences" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">What Exchange Actually Looks Like</h2>
            <p className="text-xl text-slate-600">No stock photos here. Just real raw moments from IBA students who chose to go.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RECAP_VIDEOS.map((video) => (
              <div 
                key={video.id} 
                className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
                    onClick={() => setModalMedia(video.url)}
              >
                <img src={video.thumb} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={video.title} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-white/20 backdrop-blur-md p-5 rounded-full mb-4 border border-white/30">
                      <Play fill="white" size={32} className="text-white" />
                   </div>
                   <span className="text-white font-bold text-lg">Play Reel</span>
                </div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-black text-2xl tracking-tight">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 2.5 EXCHANGE GALLERY (4 IMAGES) --- */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className="h-[350px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
                onClick={() => setModalMedia(img)}
              >
                <img 
                  src={img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Gallery" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. FOMO QUOTES (3 ONE-LINERS) --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Quote size={300} strokeWidth={1} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-12">What They'll Never Stop Talking About</h2>
          <div className="space-y-12">
            {ONE_LINERS.map((phrase, i) => (
              <h3 key={i} className={`text-4xl md:text-7xl font-black leading-tight max-w-5xl ${phrase.ml} ${i > 0 ? 'opacity-80' : ''}`}>
                "{phrase.text.split(' ').map((word, idx) => (
                  <span key={idx} className={phrase.text.includes(word) && idx > 3 ? phrase.color : ''}>{word} </span>
                ))}"
              </h3>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. VIDEO TESTIMONIALS (3 CARDS) --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-12">Watch Their Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VIDEO_TESTIMONIALS.map((video) => (
                <div key={video.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl group cursor-pointer" onClick={() => setModalMedia(video.video)}>
                <div className="h-64 relative">
                   <img src={video.thumb} className="w-full h-full object-cover" alt={video.name} />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                         <Play fill="white" size={24} className="text-white ml-1" />
                      </div>
                   </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: video.color }}></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{video.country}</span>
                  </div>
                  <h4 className="text-2xl font-black">{video.name}</h4>
                  <p className="text-slate-500 text-sm">Experience Video Recap</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4.5 WRITTEN TESTIMONIALS (4 CARDS) --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-12">Letters from Abroad</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WRITTEN_TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                <div className="h-48 overflow-hidden">
                   <img src={t.img} className="w-full h-full object-cover" alt={t.name} />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                     <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">{t.type}</span>
                     <div className="w-4 h-4 rounded-full shadow-inner" style={{ backgroundColor: t.color }}></div>
                  </div>
                  <p className="text-lg italic text-slate-700 mb-8 flex-grow leading-relaxed">"{t.text}"</p>
                  <div>
                    <h4 className="font-black text-slate-900">{t.name}</h4>
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                      <MapPin size={14} /> {t.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. THE TRANSFORMATION --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">The 6-Week Transformation</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">It's not just a stamp on your passport. It's an upgrade to your personality.</p>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-slate-50 rounded-[3rem] p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-slate-200 font-black text-9xl select-none">01</div>
            <h3 className="text-3xl font-black mb-8 text-slate-400">Before</h3>
            <ul className="space-y-6 relative z-10">
              {["Stuck in a boring routine", "Fear of the unknown", "Limited local network", "Unsure of career path"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-500 font-medium">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-[10px]">X</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-[#037EF3] rounded-full flex items-center justify-center text-white shadow-xl rotate-90 md:rotate-0">
              <ChevronRight size={32} strokeWidth={3} />
            </div>
          </div>

          <div className="flex-1 bg-blue-50 rounded-[3rem] p-12 relative overflow-hidden group ring-4 ring-[#037EF3]/10">
            <div className="absolute top-0 right-0 p-8 text-blue-100 font-black text-9xl select-none">02</div>
            <h3 className="text-3xl font-black mb-8 text-[#037EF3]">After</h3>
            <ul className="space-y-6 relative z-10">
              {["Global adaptability", "Independent problem solver", "Network in 120+ countries", "Clarity and confidence"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-800 font-bold">
                  <CheckCircle2 className="text-[#037EF3]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- 6. URGENCY SECTION --- */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter">What Happens If You Stay?</h2>
          <div className="max-w-3xl mx-auto space-y-6 opacity-80 text-xl font-light">
            <p>Another summer at home. Another semester of "I should have."</p>
            <p>The applications for the best projects close in 14 days.</p>
            <p className="text-[#037EF3] font-bold">The world isn't waiting. Why are you?</p>
          </div>
        </div>
      </section>

      {/* --- 7. PROCESS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 underline decoration-[#037EF3] decoration-8 underline-offset-8">4 Steps to Fly</h2>
          <div className="grid md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-100 z-0"></div>
            
            {[
              { icon: <MessageCircle />, title: "Sign Up", desc: "Fill out the interest form in 2 mins." },
              { icon: <Globe />, title: "Match", desc: "Find a project that fits your passion." },
              { icon: <Clock />, title: "Prepare", desc: "Get visa & cultural training from us." },
              { icon: <Star />, title: "Experience", desc: "The flight that changes everything." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-white border-4 border-slate-50 shadow-xl rounded-full flex items-center justify-center mb-6 text-[#037EF3]">
                  {React.cloneElement(step.icon, { size: 32 })}
                </div>
                <h4 className="text-xl font-black mb-3">{step.title}</h4>
                <p className="text-slate-500 px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. FINAL CTA --- */}
      <section className="py-32 bg-gradient-to-br from-[#037EF3] to-blue-800 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Your Future Self <br /> Is Watching.</h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-2xl mx-auto font-light italic">"Ten years from now, you'll be more disappointed by the things you didn't do than by the ones you did."</p>
                  <div className="flex flex-col md:flex-row gap-6 justify-center">

                      {/* Apply Now Button */}
                      <a
                          href="https://forms.gle/chE8UBMpCWvPJojr8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-[#037EF3] px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition-all active:scale-95 text-center"
                      >
                          Apply Now
                      </a>

                      {/* WhatsApp Button */}
                      <a
                          href="https://wa.me/923363194878"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-transparent border-2 border-white/40 text-white px-12 py-6 rounded-full text-2xl font-black hover:bg-white/10 transition-all text-center"
                      >
                          Talk to a Manager
                      </a>

                  </div>

        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10"><Globe size={300} /></div>
          <div className="absolute bottom-10 right-10"><Camera size={200} /></div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 bg-slate-900 text-slate-500 border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-bold text-white mb-2">AIESEC at IBA Karachi</p>
            <p className="text-sm">Empowering youth leadership since 1948.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <p className="text-xs">© 2024 AIESEC IBA. Made for the dreamers.</p>
        </div>
      </footer>

      {/* --- STICKY CTA --- */}
      <div className="fixed bottom-8 right-8 z-[60]">
        <button className="group bg-[#037EF3] text-white p-4 md:px-8 md:py-4 rounded-full shadow-2xl shadow-blue-500/50 hover:scale-110 transition-all active:scale-95 flex items-center gap-2">
          <MessageCircle className="md:w-5 md:h-5" />
          <span className="hidden md:inline font-bold">Ask Anything</span>
        </button>
      </div>

      {/* --- MEDIA MODAL --- */}
          {modalMedia && (
              <div
                  className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
                  onClick={() => setModalMedia(null)}
              >
                  <button
                      className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform"
                      onClick={() => setModalMedia(null)}
                  >
                      <X size={40} />
                  </button>

                  {modalMedia.endsWith(".mp4") ? (
                      <video
                          controls
                          autoPlay
                          className="max-w-full max-h-[80vh] rounded-3xl shadow-2xl"
                          onClick={(e) => e.stopPropagation()}
                      >
                          <source src={modalMedia} type="video/mp4" />
                          Your browser does not support the video tag.
                      </video>
                  ) : (
                      <img
                          src={modalMedia}
                          className="max-w-full max-h-[80vh] rounded-3xl shadow-2xl"
                          alt="Preview"
                          onClick={(e) => e.stopPropagation()}
                      />
                  )}
              </div>
          )}

    </div>
  );
};

export default App;