import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// --- Custom Hook for Intersection Observer ---
const useIntersect = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};


// --- Reusable Components ---

const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <div className="flex items-center">
                    <span className="text-white font-black text-2xl tracking-wider">MAVERICKS</span>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <motion.button
                        href="#"
                        className="px-6 py-3 rounded-[1rem] bg-white/10 backdrop-blur-2xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300 text-sm font-bold"
                        whilehover={{ scale: 1.05 }}
                        onClick={() => window.location.href = '/login'}
                    >
                        Login
                    </motion.button>
                    <motion.button
                        href="#"
                        className="px-6 py-3 rounded-[1rem] bg-cyan-400 text-black hover:bg-cyan-500 transition-all duration-300 text-sm font-bold"
                        whilehover={{ scale: 1.05 }}
                        onClick={() => window.location.href = '/register'}
                    >
                        Register
                    </motion.button>
                </div>
            </div>
        </div>
    </nav>
);

// Generic Section Wrapper
const Section = ({ children, id, bg, className = "py-20 md:py-32" }) => {
    const [ref, isVisible] = useIntersect({ threshold: 0.1 });
    return (
        <section ref={ref} id={id} className={className} data-bg={bg}>
            <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {children}
            </div>
        </section>
    );
};

// --- Page Sections ---

const HeroSection = ({ id, bg }) => {
    const [ref, isVisible] = useIntersect({ threshold: 0.1 });
    return (
        <section ref={ref} id={id} className="h-screen flex items-center justify-center text-center" data-bg={bg}>
            <div className="z-10 px-4">
                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black text-white text-glow tracking-tighter transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Dive into immersive rewarding learning platform
                </h1>
                <p className={`mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Mavericks is the ultimate AI-powered platform designed to forge elite developers. Ditch the tutorials and accelerate your journey from zero to hero.
                </p>
              <motion.button
  className="px-10 py-4 rounded-xl bg-indigo-600 text-white text-lg font-bold shadow-2xl shadow-indigo-600/40 hover:bg-indigo-700 transition-all duration-300"
  whileHover={{ scale: 1.05 }}
  onClick={() => (window.location.href = '/register')}
>
  Start your Journey
</motion.button>
            </div>
        </section>
    );
};

const FeaturesSection = ({ id, bg }) => (
    <Section id={id} bg={bg}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white">An Unfair Advantage</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Leverage next-gen tools designed for elite performance and unparalleled growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card p-8"><h3 className="text-2xl font-bold text-white mb-4">AI-Powered Toolkit</h3><p className="text-gray-300">Get intelligent code autocomplete, instant debugging suggestions, and AI-driven concept explainers to learn faster than ever before.</p></div>
                <div className="glass-card p-8"><h3 className="text-2xl font-bold text-white mb-4">Gamified Experience</h3><p className="text-gray-300">Earn XP, level up, and collect rare badges. Compete on global leaderboards and in high-stakes hackathons to prove your skills.</p></div>
                <div className="glass-card p-8"><h3 className="text-2xl font-bold text-white mb-4">Versatile Code Editor</h3><p className="text-gray-300">Switch between Focus, Split, and AI-Dock layouts. Crush challenges in a timed, gamified environment built for peak performance.</p></div>
            </div>
        </div>
    </Section>
);

const RoadmapSection = ({ id, bg }) => {
    const roadmapItems = [
        { title: "Foundation & Setup", description: "Install tools, set up your Supabase backend, and initialize your project. The first step to greatness." },
        { title: "Authentication & Profiles", description: "Implement secure user login (Email, Google, GitHub) and create database tables for user data." },
        { title: "Dashboard & UI Modes", description: "Build a dynamic user dashboard with Classic and Maverick (animated) UI modes for a personalized experience." },
        { title: "Core Editor Integration", description: "Embed the Monaco Editor, the engine behind VS Code, for a powerful, familiar coding environment." },
        { title: "AI Feature Implementation", description: "Unleash the power of Gemini. Integrate AI autocomplete, debuggers, and concept explainers." },
        { title: "Gamification & Leaderboards", description: "Make learning addictive with XP, badges, and competitive global leaderboards to track your progress." }
    ];
    return (
        <Section id={id} bg={bg}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white">How It Works</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Your journey from novice to Maverick is a structured path to success.</p>
                </div>
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-indigo-500/30" aria-hidden="true"></div>
                    <div className="space-y-16">
                        {roadmapItems.map((item, index) => (
                            <div key={index} className="flex items-center w-full">
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="glass-card p-6">
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        <p className="mt-2 text-gray-300">{item.description}</p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 bg-indigo-600 rounded-full flex-shrink-0 flex items-center justify-center z-10 shadow-lg shadow-indigo-600/50">
                                    <span className="text-white font-bold">{index + 1}</span>
                                </div>
                                <div className="w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};




const HackathonSection = ({ id, bg }) => (
    <Section id={id} bg={bg}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white">Enter The Arena: Hackathon Portal</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Compete in high-stakes coding events. Test your skills, climb the ranks, and win exclusive prizes.</p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card p-8">
                    <h3 className="text-2xl font-bold text-indigo-400 mb-4">Live Events</h3>
                    <p className="text-gray-300">Join timed hackathons with live countdowns and a list of challenging problems to solve.</p>
                </div>
                <div className="glass-card p-8">
                    <h3 className="text-2xl font-bold text-indigo-400 mb-4">AI-Generated Problems</h3>
                    <p className="text-gray-300">Face unique, dynamically generated challenges powered by AI, ensuring no two events are the same.</p>
                </div>
                <div className="glass-card p-8">
                    <h3 className="text-2xl font-bold text-indigo-400 mb-4">Real-Time Leaderboards</h3>
                    <p className="text-gray-300">Watch your rank update in real-time as you and other Mavericks submit solutions.</p>
                </div>
            </div>
        </div>
    </Section>
);


const TestimonialsSection = ({ id, bg }) => (
    <Section id={id} bg={bg}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-black text-white">From The Builders</h2><p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Don't just take our word for it. Here's what our users are saying.</p></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="glass-card p-8"><p className="text-gray-300">"Mavericks really brought some real competition i guess."</p><div className="mt-4 font-bold text-white">- Suganthan Prabhakaran</div></div>
                <div className="glass-card p-8"><p className="text-gray-300">"Had great lessons and great team work."</p><div className="mt-4 font-bold text-white">- Shyam Ganesh</div></div>
                <div className="glass-card p-8"><p className="text-gray-300">"Its all the in the game, look up. 10/10."</p><div className="mt-4 font-bold text-white">- Ravi Bharathi</div></div>
            </div>
        </div>
    </Section>
);

const CtaSection = ({ id, bg }) => (
    <Section id={id} bg={bg} className="py-20 md:py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white text-glow">Join the Revolution.</h2>
            <p className="mt-6 text-lg md:text-xl text-gray-300">Your journey to becoming a top-tier developer starts now. Are you ready to build the future?</p>
    </Section>
);

const Footer = () => (
    <footer className="bg-black bg-opacity-50 mt-auto"><div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8"><div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"><p className="text-gray-400 text-sm">&copy; Made for Mavericks Hackathon 2025</p><div className="flex space-x-6"><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></div></div></div></footer>
);

// --- Main App Component ---
export default function App() {
    const [currentBg, setCurrentBg] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section[data-bg]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const newBg = entry.target.getAttribute('data-bg');
                        setCurrentBg(newBg);
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.4 }
        );
        sections.forEach(section => observer.observe(section));
        if (sections.length > 0) {
            setCurrentBg(sections[0].getAttribute('data-bg'));
        }
        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    return (
        <>
            <style>{`
                html { scroll-behavior: smooth; }
                body { font-family: 'Inter', sans-serif; background-color: #0a0a0a; color: #e5e7eb; }
                .background-changer { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; z-index: -1; transition: background-image 1.5s cubic-bezier(0.4, 0, 0.2, 1); background-size: cover; background-position: center; }
                .background-overlay { position: absolute; inset: 0; background-color: rgba(10, 10, 10, 0.75); backdrop-filter: blur(8px); }
                .glass-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 1.5rem; box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37); transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .glass-card:hover { transform: translateY(-5px); box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.5); }
                .text-glow { text-shadow: 0 0 8px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3); }
            `}</style>
            
            <div id="background-container" className="background-changer" style={{ backgroundImage: `url(${currentBg})` }}>
                <div className="background-overlay"></div>
            </div>

            <div id="root-content" className="relative">
                <Navbar />
                <main className="overflow-x-hidden">
                    <HeroSection id="hero" bg="https://wallpapercave.com/wp/wp1978969.jpg" />
                    <FeaturesSection id="features" bg="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" />
                    <RoadmapSection id="roadmap" bg="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" />
                    <HackathonSection id="hackathons" bg="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" />
                    <TestimonialsSection id="testimonials" bg="https://images.unsplash.com/photo-1521898294357-1617e07e411b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" />
                    <CtaSection id="cta" bg="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3" />
                </main>
                <Footer />
            </div>
        </>
    );
}
