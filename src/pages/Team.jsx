import React from 'react';
import { motion } from 'framer-motion';
import { Users, Instagram } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import atuyImage from '../assets/Team/atuy.png';
import amatImage from '../assets/Team/amat.png';

const Team = () => {
    const structure = {
        pembina: {
            name: "FAUZAN ALHAMID",
            role: "PEMBINA",
            color: "from-pink-500 to-rose-500",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fauzan",
            ig: ""
        },
        pelatih: {
            name: "AHMAD SAMUEL",
            role: "PELATIH",
            color: "from-orange-400 to-amber-500",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel",
            ig: "ahmad_s4muel"
        },
        ketua: {
            name: "ZAID",
            role: "KETUA",
            color: "from-amber-400 to-yellow-500",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zaid",
            ig: "backidzz"
        },
        wakil: [
            {
                name: "FATHURROHMAN",
                role: "WAKIL",
                color: "from-emerald-400 to-teal-500",
                image: atuyImage,
                ig: "fathurrohmannn30"
            },
            {
                name: "AHMAD MUTAQQIN",
                role: "WAKIL 2",
                color: "from-emerald-400 to-teal-500",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mutaqqin",
                ig: "v1binwithqin"
            }
        ],
        anggota: [
            { name: "KEANU AZKA PRATAMA", role: "ANGGOTA", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Keanu", ig: "k.pratama.39" },
            { name: "ALIF NURI", role: "ANGGOTA", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alif", ig: "" },
            { name: "RISKY OWE", role: "ANGGOTA", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Owe", ig: "kenwithhlove._" },
            { name: "RISKY AKOY", role: "ANGGOTA", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Akoy", ig: "azzka.a44" },
            { name: "DAFFA ARYA", role: "ANGGOTA", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daffa", ig: "dffy.aff" },
            { name: "SAYYID FADHEL", role: "ANGGOTA", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fadhel", ig: "sayyidfadhel" },
            { name: "HAMKA", role: "ANGGOTA", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hamka", ig: "" },
        ]
    };

    const MemberCard = ({ member, colorClass = "from-primary to-primary/80" }) => (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center group relative w-full max-w-[260px] sm:max-w-[240px] md:max-w-[280px]"
        >
            <Card className="w-full border-none shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] bg-white/95 dark:bg-zinc-900/95 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden transition-all duration-500 group-hover:shadow-primary/30 group-hover:shadow-3xl backdrop-blur-2xl">
                <div className={`h-2 md:h-2.5 w-full bg-gradient-to-r ${colorClass}`} />
                <div className="p-5 md:p-8 flex flex-col items-center">
                    <div className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 mb-4 md:mb-6 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover bg-zinc-50"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${colorClass} opacity-0 group-hover:opacity-20 transition-opacity`} />
                    </div>

                    <h3 className="text-sm sm:text-base md:text-xl font-bold text-primary dark:text-zinc-100 uppercase tracking-tight text-center leading-tight mb-2 md:mb-3 px-2">
                        {member.name}
                    </h3>

                    <Badge className={`bg-gradient-to-r ${colorClass} text-[9px] md:text-xs font-bold border-none py-1 md:py-1.5 px-3 md:px-4 shadow-md rounded-full mb-2 md:mb-3`}>
                        {member.role}
                    </Badge>

                    {member.ig && (
                        <a
                            href={`https://instagram.com/${member.ig}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-zinc-400 hover:text-secondary transition-colors group/ig p-1 md:p-2"
                        >
                            <Instagram size={12} className="md:w-3.5 md:h-3.5 group-hover/ig:scale-110 transition-transform" />
                            <span className="text-[9px] md:text-xs font-semibold tracking-wide">@{member.ig}</span>
                        </a>
                    )}
                </div>
            </Card>

            <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-white dark:border-zinc-950 z-20 shadow-lg hidden md:block`} />
        </motion.div>
    );

    return (
        <div className="min-h-screen pb-40 overflow-x-hidden bg-zinc-50 dark:bg-zinc-950">
            <div className="absolute top-0 left-0 w-full h-[1200px] bg-gradient-to-b from-primary/10 via-secondary/10 to-transparent pointer-events-none -z-10" />

            <section className="container mx-auto px-4 pt-24 md:pt-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6"
                >
                    <div className="inline-flex items-center justify-center p-3 md:p-4 bg-primary/10 rounded-[1.5rem] md:rounded-[2rem] mb-1 md:mb-2 text-primary backdrop-blur-md shadow-xl">
                        <Users size={24} className="md:w-10 md:h-10 animate-pulse" />
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-accent tracking-tighter text-primary leading-[0.9] flex flex-col items-center">
                        <span>STRUKTUR</span>
                        <span className="text-secondary drop-shadow-[0_2px_10px_rgba(234,179,8,0.2)]">TIM</span>
                    </h1>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 pt-4">
                        <div className="hidden sm:block h-1.5 w-16 md:w-24 bg-secondary/30 rounded-full" />
                        <p className="text-sm sm:text-xl md:text-3xl text-zinc-400 font-light tracking-[0.2em] md:tracking-[0.3em] uppercase italic">Firqotul Mujahiddin</p>
                        <div className="hidden sm:block h-1.5 w-16 md:w-24 bg-secondary/30 rounded-full" />
                    </div>
                </motion.div>

                <div className="flex flex-col items-center space-y-24 md:space-y-32 relative">
                    <div className="relative w-full flex justify-center">
                        <MemberCard member={structure.pembina} colorClass={structure.pembina.color} />
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-24 md:h-32 bg-gradient-to-b from-secondary via-secondary/50 to-secondary rounded-full hidden md:block" />
                    </div>

                    <div className="relative w-full flex justify-center">
                        <MemberCard member={structure.pelatih} colorClass={structure.pelatih.color} />
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-24 md:h-32 bg-gradient-to-b from-secondary via-secondary/50 to-secondary rounded-full hidden md:block" />
                    </div>

                    <div className="relative w-full flex justify-center">
                        <MemberCard member={structure.ketua} colorClass={structure.ketua.color} />
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-12 md:h-16 bg-secondary/50 hidden md:block" />
                        <div className="absolute top-[calc(100%+48px)] md:top-[calc(100%+64px)] left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent hidden md:block" />
                    </div>

                    <div className="relative w-full max-w-6xl flex justify-center py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-56 w-full place-items-center relative">
                            {structure.wakil.map((w, i) => (
                                <div key={i} className="relative w-full flex justify-center">
                                    <div className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 w-1 h-12 md:h-16 bg-secondary/30 hidden md:block" />
                                    <MemberCard member={w} colorClass={w.color} />
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-12 md:h-16 bg-secondary/30 hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full pt-16 md:pt-20">
                        <div className="absolute top-0 left-[15%] right-[15%] h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent hidden lg:block" />

                        <div className="text-center mb-16 md:mb-24 relative">
                            <Badge variant="outline" className="px-8 md:px-12 py-3 md:py-4 rounded-full border-secondary/20 text-secondary font-black tracking-[0.3em] md:tracking-[0.5em] bg-white dark:bg-zinc-950 shadow-2xl uppercase text-xs md:text-sm">
                                Anggota Majelis
                            </Badge>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-7 gap-6 sm:gap-8 md:gap-14 max-w-7xl mx-auto px-4 sm:px-6 place-items-center">
                            {structure.anggota.map((a, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -12 }}
                                    className="flex flex-col items-center group/member relative w-full"
                                >
                                    <div className="relative mb-3 md:mb-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white dark:ring-zinc-900 transition-all duration-500 group-hover/member:ring-secondary/50 group-hover/member:scale-110 group-hover/member:rotate-3 translate-z-0">
                                        <img
                                            src={a.image}
                                            alt={a.name}
                                            className="w-full h-full object-cover bg-zinc-50"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                                    </div>
                                    <div className="text-center max-w-[140px] md:max-w-[160px]">
                                        <h4 className="text-[10px] sm:text-sm md:text-base font-bold text-primary dark:text-zinc-100 uppercase tracking-tighter leading-tight mb-1 md:mb-2 transition-colors group-hover/member:text-secondary px-1 md:px-2">
                                            {a.name}
                                        </h4>
                                        {a.ig ? (
                                            <a
                                                href={`https://instagram.com/${a.ig}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-1 text-[8px] sm:text-[10px] md:text-[11px] text-zinc-400 font-bold tracking-wider hover:text-secondary p-1"
                                            >
                                                <Instagram size={10} />
                                                @{a.ig}
                                            </a>
                                        ) : (
                                            <div className="h-4" />
                                        )}
                                        <div className="w-4 md:w-6 h-1 bg-secondary/20 mx-auto rounded-full mt-1 md:mt-2 group-hover/member:w-8 md:group-hover/member:w-12 transition-all" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="fixed bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent pointer-events-none z-10" />
        </div>
    );
};

export default Team;
