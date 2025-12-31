import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Phone, MapPin, Send, CheckCircle, MessageSquare, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        instagram: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi';
        if (!formData.instagram.trim()) newErrors.instagram = 'Username Instagram wajib diisi';
        if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            setFormData({ name: '', instagram: '', message: '' });
            setTimeout(() => setSubmitted(false), 8000);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <motion.div
            className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* Hero Section */}
            <div className="bg-primary pt-32 pb-48 px-4 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <Badge className="mb-4 bg-secondary text-white hover:bg-secondary/90 border-none px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                        Let's Talk
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-black font-accent mb-6 leading-tight">Hubungi Kami</h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-light italic">
                        "Pintu silaturahmi selalu terbuka bagi siapa saja yang ingin merajut cinta dalam bait-bait shalawat."
                    </p>
                </motion.div>
            </div>

            <section className="container mx-auto px-4 -mt-24 relative z-20">
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Contact Info Panel */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-none shadow-2xl bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden">
                            <CardContent className="p-8 md:p-12">
                                <h2 className="text-2xl font-bold text-primary font-accent mb-8">Informasi Kontak</h2>

                                <div className="space-y-10">
                                    <div className="flex gap-6 group">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase text-secondary tracking-widest mb-1">Alamat Majelis</p>
                                            <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">Jl. Sudiro No.35 2, RT.2/RW.4, Cemp. Baru, Kec. Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10640</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 group">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase text-secondary tracking-widest mb-1">WhatsApp Center</p>
                                            <p className="text-zinc-600 dark:text-zinc-400 font-medium">+62 857 1869 3047</p>
                                            <a href="https://wa.me/6285718693047" target="_blank" className="text-primary text-xs font-bold inline-flex items-center gap-1 mt-2 hover:underline">
                                                Chat Sekarang <ExternalLink size={12} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 group">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <Instagram size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase text-secondary tracking-widest mb-1">Instagram Resmi</p>
                                            <p className="text-zinc-600 dark:text-zinc-400 font-medium">@mt.firqotulmujahidin</p>
                                            <a href="https://instagram.com/mt.firqotulmujahidin" target="_blank" className="text-primary text-xs font-bold inline-flex items-center gap-1 mt-2 hover:underline">
                                                Lihat Feed <ExternalLink size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 p-6 rounded-[2rem] bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700">
                                    <MessageSquare size={32} className="text-secondary opacity-20 mb-4" />
                                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed italic">
                                        "Silakan hubungi kami untuk informasi lebih lanjut mengenai jadwal majelis, kerjasama, atau pendaftaran anggota."
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Form Panel */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-none shadow-2xl bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden h-full">
                            <CardContent className="p-8 md:p-12 flex flex-col justify-center h-full">
                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        <motion.div
                                            key="success"
                                            className="text-center py-10"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.8, opacity: 0 }}
                                        >
                                            <div className="w-24 h-24 rounded-full bg-green-50 text-green-500 flex items-center justify-center mx-auto mb-8 shadow-inner">
                                                <CheckCircle size={48} />
                                            </div>
                                            <h3 className="text-3xl font-bold text-primary font-accent mb-4">Alhamdulillah!</h3>
                                            <p className="text-zinc-500 max-w-sm mx-auto mb-10 leading-relaxed text-lg">
                                                Pesan Anda telah berhasil kami terima. Insya Allah akan segera kami tanggapi.
                                            </p>
                                            <Button
                                                onClick={() => setSubmitted(false)}
                                                className="rounded-full bg-primary hover:bg-primary/90 px-8 py-6 text-lg shadow-xl"
                                            >
                                                Kirim Pesan Lain
                                            </Button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            onSubmit={handleSubmit}
                                            className="space-y-6 md:space-y-8"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="text-primary font-bold text-sm tracking-widest uppercase">Nama Lengkap</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    placeholder="Masukkan nama Anda"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`rounded-2xl h-14 md:h-16 px-6 border-zinc-100 bg-zinc-50 dark:bg-zinc-800/50 focus:ring-primary ${errors.name ? 'border-red-500' : ''}`}
                                                />
                                                {errors.name && <span className="text-xs font-bold text-red-500">{errors.name}</span>}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="instagram" className="text-primary font-bold text-sm tracking-widest uppercase">Username Instagram</Label>
                                                <div className="relative">
                                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 font-bold">@</span>
                                                    <Input
                                                        id="instagram"
                                                        name="instagram"
                                                        placeholder="username"
                                                        value={formData.instagram}
                                                        onChange={handleChange}
                                                        className={`rounded-2xl h-14 md:h-16 pl-12 pr-6 border-zinc-100 bg-zinc-50 dark:bg-zinc-800/50 focus:ring-primary ${errors.instagram ? 'border-red-500' : ''}`}
                                                    />
                                                </div>
                                                {errors.instagram && <span className="text-xs font-bold text-red-500">{errors.instagram}</span>}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message" className="text-primary font-bold text-sm tracking-widest uppercase">Pesan Anda</Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    rows="5"
                                                    placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className={`rounded-2xl p-6 border-zinc-100 bg-zinc-50 dark:bg-zinc-800/50 focus:ring-primary min-h-[160px] resize-none ${errors.message ? 'border-red-500' : ''}`}
                                                />
                                                {errors.message && <span className="text-xs font-bold text-red-500">{errors.message}</span>}
                                            </div>

                                            <Button type="submit" className="w-full rounded-2xl bg-primary hover:bg-primary/90 h-16 md:h-20 text-lg md:text-xl font-bold shadow-2xl transition-all active:scale-[0.98]">
                                                Kirim Pesan <Send size={24} className="ml-3" />
                                            </Button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
