import React, { useState } from 'react';
import { X, BookOpen, MessageCircle, Play, Pause, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface LiveQuranModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Course {
  id: string;
  name: string;
  level: string;
  duration: string;
  description: string;
  topics: string[];
  recommendedAge: string;
}

const COURSES: Course[] = [
  {
    id: 'noorani-qaida',
    name: 'Noorani Qaida for Beginners',
    level: 'Foundational',
    duration: '2 - 3 Months',
    recommendedAge: 'Kids (4+) & Adults',
    description: 'Master the Arabic alphabet, correct pronunciation points (Makharij), and foundational reading rules from scratch.',
    topics: ['Arabic Alphabet & Shapes', 'Short Vowels (Fatha, Kasra, Damma)', 'Tanween & Sukoon', 'Basic Madd rules']
  },
  {
    id: 'tajweed-mastery',
    name: 'Tajweed Rules & Quran Recitation',
    level: 'Intermediate',
    duration: '3 - 6 Months',
    recommendedAge: 'All Ages',
    description: 'Learn authentic rules of Quranic recitation with precision, including Ghunnah, Ikhfa, Idgham, and heavy/light letters.',
    topics: ['Rules of Noon & Meem Sakinah', 'Qalqalah Echo Letters', 'Rules of Raa & Laam', 'Stopping Signs (Waqf)']
  },
  {
    id: 'hifz-program',
    name: 'Quran Memorization (Hifz)',
    level: 'Advanced',
    duration: 'Structured Pace',
    recommendedAge: '7+ Years',
    description: 'One-on-one guided memorization with certified Huffaz, daily new lesson testing (Sabaq), and systematic revision cycles.',
    topics: ['Daily New Memorization (Sabaq)', 'Recent Revision (Sabqi)', 'Full Portions Revision (Manzil)', 'Dua & Retention Techniques']
  },
  {
    id: 'tafseer-meaning',
    name: 'Quran Translation & Tafseer',
    level: 'Comprehensive',
    duration: 'Ongoing Study',
    recommendedAge: 'Youth & Adults',
    description: 'Understand the divine message with word-by-word Arabic vocabulary, context of revelation (Asbab al-Nuzul), and life application.',
    topics: ['Linguistic Root Words', 'Context of Revelation', 'Life Lessons & Action Points', 'Classical & Contemporary Tafseer']
  }
];

export const LiveQuranModal: React.FC<LiveQuranModalProps> = ({ isOpen, onClose }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState('Adult');
  const [schedulePref, setSchedulePref] = useState('Mon - Thu (30 mins/day)');
  const [parentPhone, setParentPhone] = useState('');
  const [isEnrolled, setIsEnrolled] = useState(false);

  if (!isOpen) return null;

  const handleEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;
    setIsEnrolled(true);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Salam! I am interested in enrolling in *${selectedCourse.name}* at The Quran Academy Hub.\nStudent: ${studentName || 'New Student'}\nAge Group: ${studentAge}\nSchedule: ${schedulePref}\nPlease share the free trial class schedule.`
    );
    return `https://wa.me/1234567890?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#081014] border border-emerald-900/60 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-200">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-950 bg-emerald-950/40 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-white">The Quran Academy Hub</h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Online Academy Demo
                </span>
              </div>
              <p className="text-xs text-slate-400">Interactive curriculum viewer, Tajweed preview, and WhatsApp registration</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-emerald-950/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isEnrolled ? (
            <div className="py-8 max-w-md mx-auto text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-white">Registration Application Prepared!</h4>
              <p className="text-sm text-slate-300">
                You have selected <span className="font-semibold text-emerald-400">{selectedCourse.name}</span> for {studentName}.
              </p>

              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-900/50 text-left space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-emerald-950">
                  <span className="text-slate-400">Selected Course:</span>
                  <span className="text-white font-medium">{selectedCourse.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-emerald-950">
                  <span className="text-slate-400">Schedule:</span>
                  <span className="text-white font-medium">{schedulePref}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Next Step:</span>
                  <span className="text-amber-300 font-medium">Free 30-min Trial Assessment</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Connect on WhatsApp with Academy
                </a>
                <button
                  type="button"
                  onClick={() => setIsEnrolled(false)}
                  className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium border border-slate-800 transition-colors"
                >
                  Edit Registration
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Course Selector */}
              <div className="lg:col-span-5 space-y-4">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  1. Explore Curriculum
                </label>
                <div className="space-y-2.5">
                  {COURSES.map((course) => {
                    const isSelected = selectedCourse.id === course.id;
                    return (
                      <div
                        key={course.id}
                        onClick={() => setSelectedCourse(course)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-emerald-950/50 border-emerald-500/70 shadow-md ring-1 ring-emerald-500/30'
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-xs font-semibold text-white">{course.name}</h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-400">
                            {course.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-2">{course.description}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Tajweed Audio Simulator */}
                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-900/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                      Interactive Tajweed Audio
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Qari Voice</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-emerald-900/40 text-center mb-2">
                    <div className="text-base font-serif text-amber-200" dir="rtl">
                      الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Surah Al-Fatiha · Ayah 2</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-full py-1.5 px-3 rounded-lg bg-emerald-600/40 hover:bg-emerald-600/60 border border-emerald-500/50 text-emerald-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    {isPlayingAudio ? (
                      <>
                        <Pause className="w-3.5 h-3.5" /> Pausing Pronunciation Demo
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" /> Listen to Correct Makhraj Sample
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column: Selected Course Detail & WhatsApp Enrollment Form */}
              <div className="lg:col-span-7 bg-slate-900/50 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between pb-3 border-b border-slate-800 mb-3">
                    <div>
                      <h4 className="text-sm font-bold text-white">{selectedCourse.name}</h4>
                      <p className="text-xs text-emerald-400 mt-0.5">
                        Duration: {selectedCourse.duration} · Target: {selectedCourse.recommendedAge}
                      </p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium">
                      Free Trial Class
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs font-semibold text-slate-300 mb-1.5">Syllabus Highlights:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {selectedCourse.topics.map((t, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300 p-1.5 rounded bg-slate-950/60 border border-white/5">
                          <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="truncate">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enrollment Form */}
                  <form onSubmit={handleEnrollment} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Student Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Zaid or Maryam"
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Age Category</label>
                        <select
                          value={studentAge}
                          onChange={(e) => setStudentAge(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        >
                          <option>Child (4 - 9 Years)</option>
                          <option>Youth (10 - 16 Years)</option>
                          <option>Adult (17+ Years)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Preferred Timing</label>
                        <select
                          value={schedulePref}
                          onChange={(e) => setSchedulePref(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        >
                          <option>Mon - Thu (30 mins/day)</option>
                          <option>Friday & Saturday Weekend</option>
                          <option>3 Days Weekly Flexible</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">WhatsApp / Phone</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={parentPhone}
                          onChange={(e) => setParentPhone(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-2">
                      <button
                        type="submit"
                        className="flex-1 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                      >
                        <UserCheck className="w-4 h-4" />
                        Apply for Free Assessment
                      </button>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-900 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Instant WhatsApp
                      </a>
                    </div>
                  </form>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Certified Male & Female Teachers</span>
                  <span className="text-emerald-400 font-mono">1-on-1 Zoom / Teams</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
