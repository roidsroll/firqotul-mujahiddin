import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Music, ArrowRight, Star, Quote, Clock, MapPin, Calendar } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '../components/ui/carousel';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Textarea } from "../components/ui/textarea";

// Import images
import img1 from '../assets/Carousel/image.png';
import img2 from '../assets/Carousel/image-2.png';
import img3 from '../assets/Carousel/image-3.png';

// Import Gallery images
import imgGallery1 from '../assets/Galerry/image.png';
import imgGallery2 from '../assets/Galerry/image-2.png';
import imgGallery3 from '../assets/Galerry/image-3.png';
import imgGallery4 from '../assets/Galerry/image-4.png';
import imgGallery5 from '../assets/Galerry/image-5.png';
import imgGallery6 from '../assets/Galerry/image-6.png';

const JoinModal = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: ''
    });
    const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "6285718693047";
        const message = `السلام عليكم ورحمة الله وبركاته

Halo Kak! Saya mau bergabung dengan Majelis Firqotul Mujahiddin 

Berikut data lengkap saya: 
Nama: ${formData.name} 
No. HP: ${formData.phone} 
Alamat: ${formData.address}

Kabari ya Kak kalau ada langkah selanjutnya. Thank you!`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="w-[92%] max-w-[425px] md:w-full bg-white rounded-[2rem] border-none shadow-2xl p-0 overflow-hidden">
                <div className="max-h-[90vh] overflow-y-auto custom-scrollbar">
                    <DialogHeader className="p-6 pb-2 md:p-8 md:pb-4 text-center sm:text-left">
                        <DialogTitle className="text-2xl md:text-3xl font-bold font-accent text-primary">Bergabung Dengan Kami</DialogTitle>
                        <DialogDescription className="text-zinc-500 text-sm md:text-base">
                            Silakan lengkapi data diri Anda untuk bergabung dengan keluarga besar Majelis Firqotul Mujahiddin.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4 md:space-y-6 md:px-8 md:pb-8">
                        <div className="space-y-1.5 md:space-y-2">
                            <Label htmlFor="name" className="text-primary font-semibold text-sm md:text-base">Nama Lengkap</Label>
                            <Input
                                id="name"
                                placeholder="Masukkan nama lengkap"
                                className="rounded-xl border-zinc-200 focus:ring-primary h-11 md:h-12 text-sm md:text-base bg-zinc-50/50"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-1.5 md:space-y-2">
                            <Label htmlFor="phone" className="text-primary font-semibold text-sm md:text-base">No HP / WhatsApp</Label>
                            <Input
                                id="phone"
                                placeholder="0812xxxx"
                                type="tel"
                                className="rounded-xl border-zinc-200 focus:ring-primary h-11 md:h-12 text-sm md:text-base bg-zinc-50/50"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-1.5 md:space-y-2">
                            <Label htmlFor="address" className="text-primary font-semibold text-sm md:text-base">Alamat</Label>
                            <Textarea
                                id="address"
                                placeholder="Masukkan alamat lengkap"
                                className="rounded-xl border-zinc-200 focus:ring-primary min-h-[80px] md:min-h-[100px] text-sm md:text-base bg-zinc-50/50 resize-none"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                required
                            />
                        </div>
                        <DialogFooter className="pt-2 md:pt-4">
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 md:py-7 rounded-2xl text-base md:text-lg font-bold shadow-lg transition-all active:scale-[0.98]">
                                Kirim ke WhatsApp <ArrowRight size={20} className="ml-2" />
                            </Button>
                        </DialogFooter>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

const Home = () => {
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const carouselData = [
        {
            title: "Majelis Firqotul Mujahiddin",
            description: "Menghidupkan Cinta kepada baginda Nabi Muhammad SAW melalui untaian bait shalawat dan dzikir.",
            image: img1,
            tag: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"
        },
        {
            title: "Harmoni Sholawat",
            description: "Bersatu dalam nada, bersholawat dalam cinta untuk menggapai syafaat Baginda.",
            image: img2,
            tag: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"
        },
        {
            title: "Ukhuwah Islamiyah",
            description: "Mempererat tali silaturahmi antar jamaah melalui kegiatan positif dan religius.",
            image: img3,
            tag: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"
        }
    ];

    const galleryImages = [
        { src: imgGallery1, alt: "Majelis Firqotul Mujahiddin", category: "Kegiatan" },
        { src: imgGallery2, alt: "Harmoni Sholawat", category: "Dokumentasi" },
        { src: imgGallery3, alt: "Ukhuwah Islamiyah", category: "Social" },
        { src: imgGallery4, alt: "Majelis Malam Jumat", category: "Religi" },
        { src: imgGallery5, alt: "Gema Sholawat", category: "Event" },
        { src: imgGallery6, alt: "Kebersamaan", category: "Internal" },
    ];

    const [currentTime, setCurrentTime] = useState(new Date());
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        const fetchPrayerTimes = async () => {
            try {
                const response = await fetch('https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=20');
                const data = await response.json();
                if (data.code === 200) {
                    setPrayerTimes(data.data.timings);
                }
            } catch (error) {
                console.error("Error fetching prayer times:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPrayerTimes();
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    };

    const prayerNames = {
        Fajr: 'Subuh',
        Dhuhr: 'Dzuhur',
        Asr: 'Ashar',
        Maghrib: 'Maghrib',
        Isha: 'Isya',
        Imsak: 'Imsak'
    };

    return (
        <motion.div
            className="min-h-screen pb-20 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Hero Carousel Section - p-0 to override global section padding, -mt to bridge navbar area completely */}
            <section className="relative w-full h-[85vh] md:h-[90vh] p-0 -mt-[68px] overflow-hidden">
                <Carousel
                    setApi={setApi}
                    plugins={[
                        Autoplay({
                            delay: 2500,
                        }),
                    ]}
                    className="w-full h-full group" // Added group for hover effects
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent className="h-full ml-0">
                        {carouselData.map((item, index) => (
                            <CarouselItem key={index} className="relative h-[85vh] md:h-[90vh] pl-0">
                                <div className="absolute inset-0 bg-black/60 z-10" />
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 z-20 flex items-center justify-center">
                                    {/* Increased side padding (px-12) on mobile to clear the side arrows/area */}
                                    <div className="container mx-auto px-12 md:px-6 text-center text-white pb-32 md:pb-20">
                                        <motion.div
                                            initial={{ y: 30, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.8 }}
                                        >
                                            <span className="inline-block px-6 py-2 mb-6 text-xl font-medium bg-secondary/90 text-white rounded-full shadow-xl backdrop-blur-sm">
                                                {item.tag}
                                            </span>
                                            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-accent mb-4 md:mb-6 leading-[1.1] text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                                                {item.title}
                                            </h1>
                                            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 md:mb-10 italic font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] px-4">
                                                "{item.description}"
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                                                <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-primary hover:brightness-110 text-white px-8 md:px-12 py-6 md:py-8 text-base md:text-lg shadow-2xl transition-all duration-300">
                                                    <Link to="/about">Tentang Kami</Link>
                                                </Button>
                                                <JoinModal>
                                                    <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 md:px-12 py-6 md:py-8 text-base md:text-lg backdrop-blur-md transition-all duration-300">
                                                        Bergabung Dengan Kami <ArrowRight size={20} className="ml-2" />
                                                    </Button>
                                                </JoinModal>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Centered Navigation Arrows on the edges - Hidden on small mobile to avoid text collision */}
                    <div className="absolute inset-0 z-30 hidden sm:flex items-center justify-between px-2 md:px-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <CarouselPrevious className="static translate-y-0 h-12 w-12 md:h-14 md:w-14 border-white/20 bg-black/20 hover:bg-black/40 text-white backdrop-blur-md rounded-full pointer-events-auto transition-all scale-90 md:scale-100" />
                        <CarouselNext className="static translate-y-0 h-12 w-12 md:h-14 md:w-14 border-white/20 bg-black/20 hover:bg-black/40 text-white backdrop-blur-md rounded-full pointer-events-auto transition-all scale-90 md:scale-100" />
                    </div>

                    {/* Bottom Centered Pagination Indicators - Placed lower */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full shadow-2xl">
                        {Array.from({ length: count }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => api?.scrollTo(i)}
                                className={`h-2 transition-all duration-500 rounded-full ${current === i + 1
                                    ? "w-10 bg-secondary"
                                    : "w-2 bg-white/40 hover:bg-white/60"
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </Carousel>
            </section>

            {/* Prayer Schedule Section */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Card className="border-none shadow-2xl bg-white backdrop-blur-sm overflow-hidden rounded-3xl">
                            <CardContent className="p-0">
                                <div className="grid lg:grid-cols-5 h-full">
                                    {/* Left Panel: Real-time Clock */}
                                    <div className="lg:col-span-2 bg-primary flex flex-col items-center justify-center p-8 md:p-12 text-white text-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 opacity-10">
                                            <Clock size={200} className="rotate-12" />
                                        </div>
                                        <div className="relative z-10 w-full">
                                            <div className="p-5 bg-white/10 rounded-3xl mb-6 backdrop-blur-sm inline-block">
                                                <Clock size={40} className="text-secondary animate-pulse" />
                                            </div>
                                            <h3 className="text-5xl md:text-6xl font-black mb-2 font-mono tracking-tighter text-white">
                                                {formatTime(currentTime)}
                                            </h3>
                                            <div className="flex items-center justify-center gap-2 text-white/80 font-medium mb-6">
                                                <Calendar size={16} />
                                                <p className="text-sm md:text-base">{formatDate(currentTime)}</p>
                                            </div>
                                            <div className="flex flex-col items-center gap-2 pt-6 border-t border-white/10">
                                                <div className="flex items-center gap-2 text-secondary font-bold">
                                                    <MapPin size={18} />
                                                    <span>Jakarta, Indonesia</span>
                                                </div>
                                                <p className="text-xs text-white/60">Waktu Indonesia Barat (WIB)</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Panel: Prayer Times */}
                                    <div className="lg:col-span-3 p-8 md:p-12 bg-white">
                                        <div className="flex items-center justify-between mb-8">
                                            <h2 className="text-2xl md:text-3xl font-bold text-primary font-accent">Jadwal Waktu Sholat</h2>
                                            <Badge variant="outline" className="border-secondary text-secondary px-3 py-1">Harian</Badge>
                                        </div>

                                        {loading ? (
                                            <div className="space-y-4">
                                                {[1, 2, 3, 4, 5, 6].map(i => (
                                                    <div key={i} className="h-16 bg-zinc-100 animate-pulse rounded-2xl w-full" />
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                                {Object.entries(prayerNames).map(([key, name]) => (
                                                    <motion.div
                                                        key={key}
                                                        whileHover={{ x: 5 }}
                                                        className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-50 hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/10"
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                                <Heart size={18} className={key === 'Maghrib' ? 'fill-current' : ''} />
                                                            </div>
                                                            <span className="font-bold text-zinc-700 group-hover:text-primary transition-colors">{name}</span>
                                                        </div>
                                                        <div className="text-right">
                                                            <span className="text-xl font-bold font-mono text-primary">
                                                                {prayerTimes?.[key]}
                                                            </span>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}

                                        <p className="mt-8 text-[10px] md:text-xs text-zinc-400 italic text-center">
                                            *Jadwal berdasarkan lokasi Jakarta & sekitarnya.
                                            <br />Data diperbarui secara real-time setiap hari.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Memory Section */}
            <section className="py-24 bg-white dark:bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4 inline-block">
                                Momen Berharga
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary font-accent mb-4">Galerry Memorry</h2>
                            <p className="text-zinc-500 max-w-2xl mx-auto">
                                Kumpulan dokumentasi kegiatan dan kebersamaan kami dalam merajut cinta dan harmoni shalawat.
                            </p>
                        </motion.div>
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="break-inside-avoid"
                            >
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Card className="group relative overflow-hidden rounded-2xl border-none cursor-pointer">
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center text-white">
                                                <span className="text-sm font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.category}</span>
                                                <h3 className="text-xl font-bold font-accent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{image.alt}</h3>
                                            </div>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </Card>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-[95vw] md:max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                                        <div className="relative group">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-2xl">
                                                <span className="text-sm font-medium text-secondary">{image.category}</span>
                                                <h3 className="text-2xl font-bold font-accent">{image.alt}</h3>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
