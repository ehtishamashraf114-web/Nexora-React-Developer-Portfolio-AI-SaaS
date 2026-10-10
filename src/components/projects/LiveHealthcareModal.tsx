import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, Stethoscope, AlertCircle } from 'lucide-react';

interface LiveHealthcareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  availableDays: string[];
  slots: string[];
  initials: string;
  color: string;
}

const DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Sarah Mitchell, MD',
    specialty: 'Interventional Cardiology',
    experience: '14 Years Experience',
    rating: 4.9,
    availableDays: ['Today', 'Tomorrow', 'Oct 14'],
    slots: ['09:30 AM', '11:00 AM', '02:15 PM', '04:30 PM'],
    initials: 'SM',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'doc-2',
    name: 'Dr. Alexander Rivera, DO',
    specialty: 'Neurology & Sleep Medicine',
    experience: '11 Years Experience',
    rating: 4.8,
    availableDays: ['Today', 'Tomorrow', 'Oct 15'],
    slots: ['10:00 AM', '01:30 PM', '03:45 PM'],
    initials: 'AR',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'doc-3',
    name: 'Dr. Maya Lin, MD',
    specialty: 'Pediatrics & Adolescent Care',
    experience: '9 Years Experience',
    rating: 4.9,
    availableDays: ['Today', 'Tomorrow', 'Oct 16'],
    slots: ['08:30 AM', '11:30 AM', '03:00 PM'],
    initials: 'ML',
    color: 'from-emerald-600 to-teal-600'
  }
];

export const LiveHealthcareModal: React.FC<LiveHealthcareModalProps> = ({ isOpen, onClose }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(DOCTORS[0]);
  const [selectedDate, setSelectedDate] = useState<string>('Today');
  const [selectedSlot, setSelectedSlot] = useState<string>(DOCTORS[0].slots[0]);
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [appointmentId, setAppointmentId] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!patientName.trim()) errs.patientName = 'Full name is required';
    if (!patientEmail.trim() || !patientEmail.includes('@')) errs.patientEmail = 'Valid email is required';
    if (!patientPhone.trim()) errs.patientPhone = 'Phone number is required';
    if (!symptoms.trim()) errs.symptoms = 'Please describe your primary symptom or reason for visit';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setAppointmentId(`CP-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setPatientName('');
    setPatientEmail('');
    setPatientPhone('');
    setSymptoms('');
    setErrors({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0B101D] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-200">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-white">CarePulse Healthcare Platform</h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Interactive Demo
                </span>
              </div>
              <p className="text-xs text-slate-400">Select specialist, choose live slot, and test form validation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="py-8 max-w-md mx-auto text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-white">Appointment Confirmed!</h4>
              <p className="text-sm text-slate-300">
                Your consultation has been simulated and reserved with <span className="font-semibold text-white">{selectedDoctor.name}</span>.
              </p>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800 font-mono">
                  <span className="text-slate-400">Booking Reference:</span>
                  <span className="text-indigo-400 font-semibold">{appointmentId}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Doctor / Department:</span>
                  <span className="text-white font-medium">{selectedDoctor.name} ({selectedDoctor.specialty})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Scheduled Date & Time:</span>
                  <span className="text-white font-medium">{selectedDate} at {selectedSlot}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Patient:</span>
                  <span className="text-white font-medium">{patientName} ({patientEmail})</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
                >
                  Book Another Appointment
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Doctor Selection & Schedule */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                    1. Select Specialist
                  </label>
                  <div className="space-y-2">
                    {DOCTORS.map((doc) => {
                      const isSelected = selectedDoctor.id === doc.id;
                      return (
                        <div
                          key={doc.id}
                          onClick={() => {
                            setSelectedDoctor(doc);
                            setSelectedSlot(doc.slots[0]);
                          }}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-indigo-950/40 border-indigo-500/80 shadow-md ring-1 ring-indigo-500/30'
                              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${doc.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                              {doc.initials}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-xs font-semibold text-white truncate">{doc.name}</h4>
                                <span className="text-[10px] text-amber-400 font-mono">★ {doc.rating}</span>
                              </div>
                              <p className="text-[11px] text-indigo-300">{doc.specialty}</p>
                              <p className="text-[10px] text-slate-400">{doc.experience}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                    2. Select Date & Slot
                  </label>
                  <div className="flex gap-2 mb-3">
                    {selectedDoctor.availableDays.map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDate(day)}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium border transition-colors ${
                          selectedDate === day
                            ? 'bg-indigo-600 text-white border-indigo-500'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {selectedDoctor.slots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 px-3 rounded-lg text-xs font-mono font-medium border flex items-center justify-center gap-1.5 transition-colors ${
                          selectedSlot === slot
                            ? 'bg-indigo-500/20 text-indigo-200 border-indigo-400'
                            : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Patient Intake Form */}
              <div className="lg:col-span-7 bg-slate-900/50 p-5 rounded-xl border border-slate-800">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-indigo-400" />
                  3. Patient Intake Details
                </h4>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Legal Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Michael Chen"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg bg-slate-950 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                        errors.patientName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.patientName && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.patientName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="patient@example.com"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg bg-slate-950 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                          errors.patientEmail ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:ring-indigo-500'
                        }`}
                      />
                      {errors.patientEmail && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.patientEmail}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 234-5678"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg bg-slate-950 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                          errors.patientPhone ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:ring-indigo-500'
                        }`}
                      />
                      {errors.patientPhone && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.patientPhone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Reason for Consultation / Symptoms <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe primary concerns, duration of symptoms, and any existing prescriptions..."
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg bg-slate-950 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 resize-none ${
                        errors.symptoms ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.symptoms && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.symptoms}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Confirm & Reserve Appointment ({selectedSlot})
                    </button>
                    <p className="text-[10px] text-slate-500 text-center mt-2 font-mono">
                      Safe Sandbox: Form runs client-side with validation rules.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
