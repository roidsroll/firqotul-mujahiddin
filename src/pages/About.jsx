import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Target, CheckCircle, History, MapPin, Heart, Star, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

// Import Assets
import imgHistory from '../assets/Galerry/image-6.png';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-primary">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${imgHistory})` }}
                />
                <div className="container relative z-20 text-center text-white px-4">
                    <motion.div variants={itemVariants}>
                        <Badge className="mb-4 bg-secondary hover:bg-secondary text-white border-none px-4 py-1 text-sm">
                            Profil Majelis
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold font-accent mb-6 leading-tight">Tentang Kami</h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light italic">
                            "Menelusuri jejak perjuangan mujahid dalam melantunkan cinta melalui harmoni shalawat."
                        </p>
                    </motion.div>
                </div>
                {/* Decorative Wave */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-zinc-50 dark:bg-zinc-950 clip-path-wave" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 80% 80%, 50% 10%, 20% 80%, 0 0)' }} />
            </div>

            <section className="container mx-auto px-4 -mt-12 relative z-30">
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Profil Section */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <Card className="h-full border-none shadow-xl bg-white/80 backdrop-blur-md rounded-[2.5rem] overflow-hidden">
                            <CardContent className="p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                                        <Users size={32} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-primary font-accent">Profil Organisasi</h2>
                                        <div className="h-1 w-20 bg-secondary rounded-full mt-1" />
                                    </div>
                                </div>
                                <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
                                    <p>
                                        <span className="font-bold text-primary">Firqotul Mujahiddin</span> adalah wadah bagi para pecinta Rasulullah SAW yang
                                        berfokus pada syiar islam melalui lantunan shalawat dan seni hadrah. Kami mendedikasikan
                                        diri untuk menyebarkan pesan kedamaian dan cinta kasih yang diajarkan dalam Islam.
                                    </p>
                                    <p>
                                        Nama <span className="italic">"Mujahiddin"</span> diambil sebagai simbol perjuangan spiritual dalam menjaga lisan dan hati agar senantiasa terhubung dengan baginda Nabi Muhammad SAW dalam setiap helaan nafas dan bait pujian.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Stats/Quick Info */}
                    <motion.div variants={itemVariants}>
                        <Card className="h-full border-none shadow-xl bg-primary text-white rounded-[2.5rem] overflow-hidden">
                            <CardContent className="p-8 flex flex-col justify-between h-full">
                                <div>
                                    <Sparkles className="text-secondary mb-6" size={40} />
                                    <h3 className="text-2xl font-bold font-accent mb-4">Nilai Utama</h3>
                                    <ul className="space-y-4">
                                        {[
                                            { icon: Heart, text: "Mahabbatul Rasul" },
                                            { icon: Star, text: "Istiqomah Bermajelis" },
                                            { icon: CheckCircle, text: "Ukhuwah Islamiyah" }
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                                                <item.icon size={20} className="text-secondary" />
                                                <span className="font-medium">{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <p className="text-sm text-white/60 italic">"Almadadu Yaa Rasulullah..."</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* History Section */}
                <motion.div variants={itemVariants} className="mb-24">
                    <Card className="border-none shadow-2xl bg-white rounded-[2.5rem] overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <div className="bg-zinc-100 min-h-[300px] relative overflow-hidden group">
                                <img
                                    src={imgHistory}
                                    alt="Majelis History"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                                        <History size={28} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-primary font-accent">Sejarah Singkat</h2>
                                </div>
                                <p className="text-zinc-600 leading-relaxed text-lg mb-6">
                                    Bermula dari kumpulan kecil para pemuda masjid yang memiliki kerinduan akan suasana
                                    majelis yang hangat dan penuh barakah. Firqotul Mujahiddin resmi dibentuk untuk menyatukan
                                    semangat perjuangan dalam mempertahankan tradisi luhur para ulama dalam bershalawat.
                                </p>
                                <Separator className="mb-6 opacity-50" />
                                <blockquote className="text-primary italic font-medium pl-4 border-l-4 border-secondary">
                                    "Menyatukan nada dalam satu cinta, membangkitkan syiar dalam satu harmoni."
                                </blockquote>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* Visi Misi Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    <motion.div variants={itemVariants}>
                        <Card className="h-full border-none shadow-xl bg-zinc-900 text-white rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Target size={150} />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-3 mb-6 bg-white/10 px-4 py-2 rounded-full border border-white/5">
                                    <Target className="text-secondary" size={24} />
                                    <h3 className="text-xl font-bold font-accent uppercase tracking-wider">Visi</h3>
                                </div>
                                <p className="text-xl leading-relaxed text-zinc-300 italic">
                                    "Menjadi majelis yang istiqomah dalam mensyiarkan cinta kepada Nabi Muhammad SAW dan membentuk karakter jamaah yang berakhlakul karimah."
                                </p>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Card className="h-full border-none shadow-xl bg-white rounded-[2.5rem] p-8 md:p-10 border-t-4 border-secondary">
                            <div className="inline-flex items-center gap-3 mb-8 bg-secondary/10 px-4 py-2 rounded-full text-secondary">
                                <CheckCircle size={24} />
                                <h3 className="text-xl font-bold font-accent uppercase tracking-wider">Misi</h3>
                            </div>
                            <ul className="space-y-4 text-zinc-600 text-lg">
                                {[
                                    "Menyelenggarakan kajian shalawat dan dzikir rutin.",
                                    "Melestarikan seni kebudayaan hadrah dan qasidah.",
                                    "Membangun solidaritas antar umat muslim melalui kegiatan sosial.",
                                    "Mendorong pemuda untuk cinta kepada sejarah dan ajaran Rasulullah."
                                ].map((misi, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mt-1">{i + 1}</span>
                                        <span>{misi}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </motion.div>
                </div>

                {/* Location Section */}
                <motion.div variants={itemVariants}>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <MapPin className="text-primary" size={24} />
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Lokasi Majelis</span>
                        </div>
                        <h2 className="text-4xl font-bold text-primary font-accent mb-4">Kunjungi Kami</h2>
                        <p className="text-zinc-500 max-w-xl mx-auto">Mari bergabung bersama kami dalam majelis shalawat yang rutin diselenggarakan di lokasi berikut:</p>
                    </div>

                    <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden p-4 bg-white">
                        <div className="relative w-full h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-inner">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354.70897714431203!2d106.86372158094076!3d-6.170054402046114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5a9f53e9a07%3A0xf85530d4e14786d5!2sMasjid%20Al-Hikmah!5e0!3m2!1sid!2sid!4v1767179724494!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Masjid Al-Hikmah"
                                className="z-10 relative"
                            ></iframe>
                        </div>
                    </Card>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 bg-zinc-100 p-8 rounded-[2rem]">
                        <div className="text-center md:text-left">
                            <p className="text-primary font-bold text-lg">Masjid Al-Hikmah</p>
                            <p className="text-zinc-500">Jl. Sudiro No.35 2, RT.2/RW.4, Cemp. Baru, Kec. Kemayoran, Kota Jakarta Pusat, DKI Jakarta 10640</p>
                        </div>
                        <div className="w-px h-12 bg-zinc-300 hidden md:block" />
                        <div className="text-center md:text-left">
                            <p className="text-primary font-bold">Waktu Rutinitas</p>
                            <p className="text-zinc-500">Setiap Malam Jum'at, Ba'da Isya</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default About;
