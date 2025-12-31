import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Heart, Star, ChevronRight, MessageSquare, Send } from 'lucide-react';
import logo from '../assets/Logo-firqotul.jpg';

const Footer = () => {
    const quickLinks = [
        { name: "Beranda", path: "/" },
        { name: "Tentang Kami", path: "/about" },
        { name: "Struktur Tim", path: "/team" },
        { name: "Hubungi Kami", path: "/contact" }
    ];

    const socialLinks = [
        { name: "Instagram", url: "https://instagram.com/mt.firqotulmujahidin", icon: <Instagram size={18} /> },
        { name: "WhatsApp", url: "https://wa.me/6285718693047", icon: <MessageSquare size={18} /> }
    ];

    return (
        <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 lg:mb-24">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link to="/" className="inline-flex items-center gap-4 group">
                            <div className="w-16 h-16 rounded-2xl bg-white p-1 border-2 border-secondary shadow-lg transition-transform duration-500 group-hover:rotate-6">
                                <img src={logo} alt="Logo" className="w-full h-full object-contain rounded-xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-accent tracking-tight">Firqotul</h3>
                                <p className="text-secondary font-black text-sm uppercase tracking-widest leading-none">Mujahiddin</p>
                            </div>
                        </Link>
                        <p className="text-white/60 leading-relaxed text-sm md:text-base italic">
                            "Menghidupkan cinta kepada baginda Nabi Muhammad SAW melalui untaian bait shalawat dan dzikir."
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-all duration-300 shadow-lg"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Menu */}
                    <div>
                        <h4 className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-10 inline-block border-b border-secondary/30 pb-2">Shortcut Menu</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white/70 hover:text-white flex items-center gap-2 group transition-all duration-300"
                                    >
                                        <ChevronRight size={14} className="text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-10 inline-block border-b border-secondary/30 pb-2">Hubungi Kami</h4>
                        <ul className="space-y-6 text-sm md:text-base">
                            <li className="flex items-start gap-4">
                                <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                                <span className="text-white/70 leading-relaxed">
                                    Jl. Sudiro No.35 2, RT.2/RW.4, Cemp. Baru, Kec. Kemayoran, Kota Jakarta Pusat, DKI Jakarta 10640
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={20} className="text-secondary flex-shrink-0" />
                                <span className="text-white/70 tracking-widest">+62 857 1869 3047</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Instagram size={20} className="text-secondary flex-shrink-0" />
                                <span className="text-white/70">@mt.firqotulmujahidin</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter/Motto */}
                    <div className="relative overflow-hidden p-8 rounded-[2.5rem] bg-white/5 border border-white/10 group">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Star size={120} />
                        </div>
                        <div className="relative z-10 text-center">
                            <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mx-auto mb-6">
                                <Heart size={28} className="fill-current" />
                            </div>
                            <h4 className="text-lg font-bold font-accent mb-4">Motto Kami</h4>
                            <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
                                "Syiar Shalawat, Dakwah Bermartabat, Cinta Rasul Selamat Dunia Akhirat."
                            </p>
                            <div className="h-0.5 w-12 bg-secondary mx-auto rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-xs md:text-sm font-medium tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} Firqotul Mujahiddin. Syiar Melalui Nada.
                    </p>
                    <div className="flex gap-8">
                        <p className="text-white/20 text-[10px] uppercase font-bold tracking-[0.2em]">Crafted with Love for the Ummah</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
